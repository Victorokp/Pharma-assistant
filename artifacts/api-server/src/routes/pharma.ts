import { Router, type IRouter } from "express";
import OpenAI from "openai";
import { AskPharmaAssistantBody } from "@workspace/api-zod";

const router: IRouter = Router();

const askSystemPrompt = `You are Pharma Assistant, an educational pharmacy study companion for pharmacy students and curious learners.

Give accurate, conservative, student-friendly explanations. Do not invent medical information, citations, doses, contraindications, or interactions. If you are not confident that a detail is reliable, say that you do not have enough reliable context and suggest checking a trusted reference such as an official product label, a recognized medicines handbook, or a pharmacist.

For drug-related questions, use these exact headings in this order:
Drug/Class
What it does
Mechanism
Common uses
Important cautions
Pharmacy Student Tip

Keep each section concise and explain technical language in plain terms. Do not diagnose, prescribe, or make a personal treatment recommendation. Do not provide individualized dosing instructions. If the question involves a person's symptoms, treatment choice, medication changes, or dosing, finish with this brief safety disclaimer: "Safety note: This is general educational information, not personal medical advice. For treatment or dosing decisions, speak with a pharmacist or clinician."`;

const drugProfileSystemPrompt = `You are Pharma Assistant's Drug Explorer, an educational pharmacy study tool.

Create accurate, conservative, student-friendly drug profiles. Never invent medical information, dosing, contraindications, interactions, pharmacokinetics, or citations. If the drug or a detail cannot be verified confidently, write "Information unavailable or uncertain." Do not guess based on a similar drug or brand name.

For every drug profile, use exactly these headings in this order:
Generic name
Drug class
What it is
Mechanism of action
Common uses
Common adverse effects
Contraindications / important cautions
Important drug interactions
Pharmacokinetics
Pharmacy Student Tip

Keep each section concise. Explain technical language in plain terms. Do not provide individualized dosing, diagnosis, treatment recommendations, or personal medical advice. End with this exact disclaimer: "Educational use only: This profile is general information and is not a substitute for advice from a pharmacist or clinician."`;

const studySystemPrompt = `You are Pharma Assistant's interactive Study Mode tutor for pharmacy students.

Teach progressively instead of dumping a complete lesson. Start with fundamentals, use simple language, then increase complexity only when the student demonstrates understanding. Include pharmacy-specific applications and examples when appropriate. Keep the lesson focused on the requested subject and topic.

The session state includes the student's previous answers, the last check question, and a PENDING CHECK QUESTION marker when one is awaiting an answer. Never reveal the answer to a check question before the student attempts it. When a check question is pending and the student's latest message is not an answer, a control directive, or an end request, respond only by clarifying the current concept or repeating/rephrasing the question; do not continue past the checkpoint.

The student may send a control directive in square brackets as their message: [CONTINUE], [EXPLAIN DIFFERENTLY], [EXAMPLE], [I DON'T UNDERSTAND], or [END SESSION]. These are explicit student choices that override a pending checkpoint: teach the next small step, re-explain the same idea differently with a fresh example, give a pharmacy-specific example, or slow down and simplify, respectively. An [END SESSION] directive must immediately return kind "complete" with keyTakeaways, struggledAreas, topicsToReview, and revisionSummary filled from the session so far, and checkQuestion set to null.

When the student's latest message answers the pending check question, evaluate that specific answer: say what was correct, incorrect, or missing, briefly correct any mistakes, then teach the next small step and ask one new check question. Never repeat a check question the student has already answered.

Return only one valid JSON object with this exact shape and no markdown fences:
{
  "kind": "teaching" | "evaluation" | "complete",
  "content": "The tutor message for this step.",
  "checkQuestion": "One short understanding question, or null only when ending.",
  "objectives": ["Learning objective 1"],
  "keyTakeaways": ["A takeaway, used when ending or useful"],
  "struggledAreas": ["Only areas the student struggled with"],
  "topicsToReview": ["Topics to review at the end"],
  "revisionSummary": "A short revision summary, used when ending."
}

For a start action, give 2–4 learning objectives, teach one small foundational step, and ask exactly one short check question. For an answer action, evaluate what was correct, incorrect, or missing, explain the correction, and then teach the next small step with one new check question. If the student struggles or asks for a different explanation, explain the same idea another way and use another example without giving away the pending answer. If the student understands, gradually increase difficulty. For an end action, return kind "complete" with key takeaways, struggled areas, topics to review, and a short revision summary.

Mathematical and scientific expressions (equations, formulas, fractions, powers, subscripts, roots, units, Greek letters, chemical species) MUST be written in LaTeX and wrapped in delimiters. Use $$...$$ (or \[...\]) on its own line for important equations and worked steps, and $...$ (or \(...\)) inside sentences for inline expressions. Examples of exactly how to emit them:
- $$F = ma$$
- $$C_1V_1 = C_2V_2$$
- $$\text{pH} = -\log[H^+]$$
- inline: the proton concentration $[H^+]$ falls as pH rises
- fractions: $$\text{Dose} = \frac{\text{Amount}}{\text{Volume}}$$
- units inside math: $$Dose = Weight \times Dose\,\text{per}\,kg$$
Never show LaTeX delimiters or backslash commands as plain text outside of math mode, and never leave math as raw ASCII or unicode approximations when it can be expressed in LaTeX. Keep all non-math prose as normal sentences.

Do not diagnose, prescribe, or provide individualized treatment or dosing advice. Finish every complete response with this sentence in the content: "Educational use only: this tutor is not a substitute for advice from a pharmacist or clinician."`;

const quizSystemPrompt = `You are Pharma Assistant's quiz generator for pharmacy students. Create high-quality multiple-choice quizzes from the quiz request.

Return ONLY one valid JSON object with no markdown fences and no commentary, in exactly this shape:
{"questions":[{"question":"...","options":{"A":"...","B":"...","C":"...","D":"..."},"correctAnswer":"A","explanation":"...","topic":"...","difficulty":"Easy|Medium|Hard"}]}

Rules for every question:
- Write for pharmacy students: clinically or pharmaceutically meaningful scenarios, mechanism-of-action reasoning, interactions, contraindications, pharmacokinetics, calculations, or patient counseling.
- Test understanding and application, not trivia. Prefer short case vignettes or "why/how" questions over pure recall.
- Exactly one clearly best answer; four plausible, mutually exclusive options; no "all of the above", "none of the above", or trick wording; avoid ambiguity.
- Keep the same length and style for all four options; place the correct answer's letter randomly across A-D (do not always use A).
- explanation: 1-3 concise sentences explaining why the correct answer is right and, when useful, why the best distractor is wrong.
- topic: the specific sub-topic (e.g. "Beta blockers", "Enzyme kinetics").
- difficulty: use the requested level (Easy, Medium, or Hard) consistently.

Generate exactly the number of questions requested. Do not truncate the JSON. Do not wrap it in markdown code fences. Do not add text before or after the JSON object.

Mathematical and scientific expressions inside questions, options, and explanations (equations, formulas, fractions, powers, subscripts, roots, units, Greek letters, chemical species) MUST be written in LaTeX wrapped in delimiters: $$...$$ on its own line for display equations, $...$ inside sentences for inline expressions. Examples: $$C_1V_1 = C_2V_2$$, $$\\text{Dose} = \\frac{\\text{Amount}}{\\text{Volume}}$$, $[H^+]$. In JSON string values, escape every backslash as \\\\ and every double quote as \\\". Plain prose stays normal text.`;

type ChatMessage = {
  role: "system" | "user";
  content: string;
};

type ChatCompletionPayload = {
  choices?: Array<{ message?: { content?: string } }>;
};

const messagesFor = (
  question: string,
  mode: "ask" | "drug-profile" | "study-session" | "quiz-generation" = "ask",
  context?: string,
): ChatMessage[] => [
  {
    role: "system",
    content: mode === "drug-profile"
      ? drugProfileSystemPrompt
      : mode === "study-session"
        ? studySystemPrompt
        : mode === "quiz-generation"
          ? quizSystemPrompt
          : askSystemPrompt,
  },
  {
    role: "user",
    content: context
      ? `${question}\n\nSESSION STATE:\n${context}`
      : question,
  },
];

async function askWithHuggingFace(token: string, messages: ChatMessage[], maxTokens = 1200) {
  const response = await fetch("https://router.huggingface.co/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "openai/gpt-oss-120b:fastest",
      messages,
      max_tokens: maxTokens,
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

  // Accept the common Hugging Face token naming variants.
  const hfToken = process.env.HF_TOKEN ?? process.env.HUGGINGFACE_TOKEN;
  const openAIKey = process.env.OPENAI_API_KEY;
  if (!hfToken && !openAIKey) {
    req.log.error("No AI provider token is configured");
    res.status(503).json({ error: "The AI answer service is not configured yet." });
    return;
  }

  try {
    const messages = messagesFor(parsed.data.question, parsed.data.mode, parsed.data.context);
    // Generating a full quiz needs far more output room than a single answer.
    const maxTokens = parsed.data.mode === "quiz-generation" ? 4000 : 1200;
    const answer = hfToken
      ? await askWithHuggingFace(hfToken, messages, maxTokens)
      : (
          await new OpenAI({ apiKey: openAIKey }).chat.completions.create({
            model: "gpt-5.4-mini",
            max_completion_tokens: maxTokens,
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
      if (error instanceof Error && error.message.includes("status 402")) {
        req.log.warn("AI provider credits exhausted");
        res.status(503).json({
          error: "The AI study service has used up its monthly credits. Add credits to the Hugging Face account and try again.",
        });
        return;
      }
      if (error instanceof Error && error.message.includes("status 403")) {
        res.status(502).json({
          error: "HF_TOKEN does not have permission to call Hugging Face Inference Providers. Please use a token with Inference Providers access.",
        });
        return;
      }
      res.status(502).json({
        error: "Hugging Face Inference Providers could not answer right now. Please verify HF_TOKEN access and try again.",
      });
      return;
    }
    res.status(502).json({ error: "The AI answer service is unavailable right now. Please try again." });
  }
});

export default router;