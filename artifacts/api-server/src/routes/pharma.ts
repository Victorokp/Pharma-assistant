import { Router, type IRouter } from "express";
import OpenAI from "openai";
import { AskPharmaAssistantBody } from "@workspace/api-zod";

const router: IRouter = Router();

const systemPrompt = `You are Pharma Assistant, an educational pharmacy study companion for pharmacy students and curious learners.

Give accurate, conservative, student-friendly explanations. Do not invent medical information, citations, doses, contraindications, or interactions. If you are not confident that a detail is reliable, say that you do not have enough reliable context and suggest checking a trusted reference such as an official product label, a recognized medicines handbook, or a pharmacist.

For drug-related questions, use these exact headings in this order:
Drug/Class
What it does
Mechanism
Common uses
Important cautions
Pharmacy Student Tip

Keep each section concise and explain technical language in plain terms. Do not diagnose, prescribe, or make a personal treatment recommendation. Do not provide individualized dosing instructions. If the question involves a person's symptoms, treatment choice, medication changes, or dosing, finish with this brief safety disclaimer: "Safety note: This is general educational information, not personal medical advice. For treatment or dosing decisions, speak with a pharmacist or clinician."`;

type ChatMessage = {
  role: "system" | "user";
  content: string;
};

type ChatCompletionPayload = {
  choices?: Array<{ message?: { content?: string } }>;
};

const messagesFor = (question: string): ChatMessage[] => [
  { role: "system", content: systemPrompt },
  { role: "user", content: question },
];

async function askWithHuggingFace(token: string, messages: ChatMessage[]) {
  const response = await fetch("https://router.huggingface.co/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "openai/gpt-oss-120b:fastest",
      messages,
      max_tokens: 1200,
    }),
  });

  if (!response.ok) {
    const errorBody = (await response.text()).slice(0, 300);
    throw new Error(`Hugging Face request failed with status ${response.status}: ${errorBody}`);
  }

  const payload = (await response.json()) as ChatCompletionPayload;
  return payload.choices?.[0]?.message?.content?.trim();
}

router.post("/pharma/ask", async (req, res) => {
  const parsed = AskPharmaAssistantBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Please enter a pharmacy or drug-related question." });
    return;
  }

  const hfToken = process.env.HF_TOKEN;
  const openAIKey = process.env.OPENAI_API_KEY;
  if (!hfToken && !openAIKey) {
    req.log.error("No AI provider token is configured");
    res.status(503).json({ error: "The AI answer service is not configured yet." });
    return;
  }

  try {
    const messages = messagesFor(parsed.data.question);
    const answer = hfToken
      ? await askWithHuggingFace(hfToken, messages)
      : (
          await new OpenAI({ apiKey: openAIKey }).chat.completions.create({
            model: "gpt-5.4-mini",
            max_completion_tokens: 1200,
            messages,
          })
        ).choices[0]?.message?.content?.trim();

    if (!answer) {
      req.log.error("AI provider returned an empty answer");
      res.status(502).json({ error: "The AI answer service returned an empty response. Please try again." });
      return;
    }

    res.json({ answer });
  } catch (error) {
    req.log.error({ err: error }, "AI provider request failed");
    const providerCode =
      typeof error === "object" && error !== null && "code" in error ? error.code : undefined;
    if (providerCode === "credit_balance_exhausted") {
      res.status(503).json({ error: "The AI provider account has no remaining credits. Please use a funded API key." });
      return;
    }
    if (hfToken) {
      res.status(502).json({
        error: "Hugging Face Inference Providers could not answer right now. Please verify HF_TOKEN access and try again.",
      });
      return;
    }
    res.status(502).json({ error: "The AI answer service is unavailable right now. Please try again." });
  }
});

export default router;