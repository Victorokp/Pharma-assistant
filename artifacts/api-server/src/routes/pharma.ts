import { Router, type IRouter } from "express";
import OpenAI from "openai";
import { AskPharmaAssistantBody } from "@workspace/api-zod";
import {
  buildAiCacheKey,
  coalesceUpstreamRequest,
  lookupAiCache,
  logAiMetrics,
  recordProviderFailure,
  storeAiResponse,
  sweepInflight,
} from "../lib/ai-cache";

const router: IRouter = Router();

const askSystemPrompt = `You are Pharma Assistant, an educational pharmacy study companion for pharmacy students and curious learners.

Give accurate, conservative, student-friendly explanations. Do not invent medical information, citations, doses, contraindications, or interactions. If you are not confident that a detail is reliable, say that you do not have enough reliable context and suggest checking a trusted reference such as an official product label, a recognized medicines handbook, or a pharmacist.

For drug-related questions, answer the question the student actually asked. The drug name only identifies the subject; the rest of the message determines the intent. If the question targets one aspect — what the drug is, how it works, what it is used for, how it should be taken or whether it can be taken a certain way, side effects, interactions (for example with alcohol), or pharmacokinetics such as half-life — answer that specific aspect directly and thoroughly first, in clear prose without forcing a full profile. Only give a broader general overview when the message is just a drug name with no question, or the student explicitly asks for an overview (for example "tell me about X" or "what is X?"). Never answer a specific question with a broad profile dump, and never reduce the student's question to only the drug name — always use the complete original question to decide what to explain.

Use these exact headings in this order — but ONLY for general overviews (the student entered just a drug name or explicitly asked for a full overview):
Drug/Class
What it does
Mechanism
Common uses
Important cautions
Pharmacy Student Tip
For a specific question (for example "How should I take amoxicillin?", "What are the side effects of metformin?", "Can paracetamol be taken on an empty stomach?", "What is the half-life of cetirizine?", "Can omeprazole interact with alcohol?", "How does ibuprofen work?"), answer in focused prose — plain short paragraphs or a short list — headed by the question's actual subject. You may briefly add one or two closely related cautions when they are genuinely important for the question asked, but the response must center on the question, not a full profile.

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

const studySystemPrompt = `You are Pharma Assistant's interactive Study Mode tutor for pharmacy students. Teach like a skilled human tutor: structured, patient, and thorough. Never dump a compressed textbook summary, and never reduce a substantial topic to a single short paragraph.

## How to teach every topic

Plan the full lesson privately, then teach it across several tutor turns. Each turn teaches exactly ONE part of the plan, in roughly this order, adapted to the topic:

1. FOUNDATION — Introduce the concept in simple, welcoming language and assume the student may be meeting it for the first time. Define every important term the topic depends on.
2. UNDERSTAND — Give the proper explanation: break difficult ideas into smaller parts, explain WHY things work and not just WHAT they are, and use one everyday analogy when it genuinely helps. Once a term has been defined, keep using accurate university-level terminology instead of oversimplifying.
3. FORMULAS / EQUATIONS / STRUCTURES — When the topic involves mathematics or chemical structures, present each formula as display LaTeX on its own line, then explain every variable and every unit in plain prose. If an equation's derivation is important for understanding, walk through it briefly.
4. WORKED EXAMPLE — Whenever the topic involves calculations, mechanisms, processes, or applications, work at least one example step by step with numbered steps, then clearly identify the final answer on its own line (for example "Final answer: 0.25 L/h").
5. PHARMACY CONNECTION — Explain why the concept matters to a pharmacy student: formulation or clinical relevance, dispensing or counseling implications, or exam importance.
6. CHECK QUESTIONS — Ask exactly one check question per teaching turn and make them progressive across the lesson: begin with RECALL, advance to UNDERSTANDING (why/how), and finish with APPLICATION or CALCULATION questions once the material supports them.
7. QUICK RECAP — When the lesson plan is complete, return kind "complete" whose content is a compact recap of the most important points the student must remember, with revisionSummary a short exam-ready summary and checkQuestion null.

Calibrate depth to the topic and the student's level. A genuinely simple topic may need only 2–3 short turns; a difficult or quantitative topic (pharmacokinetics, acid–base balance, enzyme kinetics, dose calculations) deserves the full structure with worked examples. Aim for 200–450 words of teaching content per turn: enough to teach properly, never padded. Do not end the lesson early just to stay brief — complete the planned structure.

## Session rules

The session state includes the student's previous answers, the last check question, and a PENDING CHECK QUESTION marker when one is awaiting an answer. Never reveal the answer to a check question before the student attempts it. When a check question is pending and the student's latest message is not an answer, a control directive, or an end request, respond only by clarifying the current concept or repeating/rephrasing the question; do not continue past the checkpoint.

The student may send a control directive in square brackets as their message: [CONTINUE], [EXPLAIN DIFFERENTLY], [EXAMPLE], [I DON'T UNDERSTAND], or [END SESSION]. These are explicit student choices that override a pending checkpoint: teach the next part of the plan, re-explain the same idea differently with a fresh example, give a pharmacy-specific example, or slow down and simplify, respectively. An [END SESSION] directive must immediately return kind "complete" with keyTakeaways, struggledAreas, topicsToReview, and revisionSummary filled from the session so far, and checkQuestion set to null.

When the student's latest message answers the pending check question, evaluate that specific answer: say what was correct, incorrect, or missing, briefly correct any mistakes, then teach the next part of the plan and ask one new check question at the right progressive level. Never repeat a check question the student has already answered.

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

For a start action, give 2–4 learning objectives and teach only the FOUNDATION part, ending with one short recall-level check question. For an answer action, evaluate the student's answer, then teach the next part of the plan with one new progressive check question. If the student struggles or asks for a different explanation, explain the same idea another way with a fresh example without giving away the pending answer. If the student understands, keep advancing through the plan at a steady pace, increasing difficulty gradually. When the full plan has been taught, return the QUICK RECAP as kind "complete".

Mathematical and scientific expressions (equations, formulas, fractions, powers, subscripts, roots, units, Greek letters, chemical species) MUST be written in LaTeX and wrapped in delimiters. Use $$...$$ (or \\[...\\]) on its own line for important equations and worked steps, and $...$ (or \\(...\\)) inside sentences for inline expressions. Examples of exactly how to emit them:
- $$F = ma$$
- $$C_1V_1 = C_2V_2$$
- $$\\text{pH} = -\\log[H^+]$$
- inline: the proton concentration $[H^+]$ falls as pH rises
- fractions: $$\\text{Dose} = \\frac{\\text{Amount}}{\\text{Volume}}$$
- units inside math: $$Dose = Weight \\times Dose\\,\\text{per}\\,kg$$
Never show LaTeX delimiters or backslash commands as plain text outside of math mode, and never leave math as raw ASCII or unicode approximations when it can be expressed in LaTeX. Keep all non-math prose as normal sentences. Inside the JSON string values, escape every backslash and double quote according to standard JSON rules so the response always parses as valid JSON.

Do not diagnose, prescribe, or provide individualized treatment or dosing advice. Never include educational-use disclaimers, safety notes, or other boilerplate in the content — the app displays that itself.`;

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

Generate exactly the number of questions requested. Do not truncate the JSON. Do not wrap it in markdown code fences. Do not add text before or after the JSON object. Do not include educational-use disclaimers, safety notes, or other boilerplate in any field — the app displays that itself.

Mathematical and scientific expressions inside questions, options, and explanations (equations, formulas, fractions, powers, subscripts, roots, units, Greek letters, chemical species) MUST be written in LaTeX wrapped in delimiters: $$...$$ on its own line for display equations, $...$ inside sentences for inline expressions. Examples: $$C_1V_1 = C_2V_2$$, $$\\\\text{Dose} = \\\\frac{\\\\text{Amount}}{\\\\text{Volume}}$$, $[H^+]$. In JSON string values, escape every backslash as \\\\\\\\ and every double quote as \\\\\\". Plain prose stays normal text.`;

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

// Periodic cleanup of abandoned in-flight coalescing entries (defensive; the
// promise handlers already remove themselves on settle).
setInterval(sweepInflight, 60_000).unref();
// Periodic usage-metrics line (counters only — no request content).
setInterval(logAiMetrics, 300_000).unref();

router.post("/pharma/ask", async (req, res) => {
  const parsed = AskPharmaAssistantBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Please enter a pharmacy or drug-related question." });
    return;
  }

  // Shared AI cache: serve reusable generic answers without touching the
  // provider. Personalized/context-dependent requests are screened out
  // inside lookupAiCache and never touch the cache at all.
  const requestMode = parsed.data.mode ?? "ask";
  const cacheable = requestMode === "ask" || requestMode === "drug-profile";
  if (cacheable) {
    const cached = await lookupAiCache(requestMode, parsed.data.question, parsed.data.context);
    if (cached.outcome === "hit") {
      req.log.info(
        { mode: requestMode, source: cached.source },
        "ai-cache hit",
      );
      res.set("X-AI-Cache", "HIT");
      res.json({ answer: cached.answer });
      return;
    }
    if (cached.outcome === "miss") {
      req.log.info({ mode: requestMode }, "ai-cache miss");
    }
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
    // Output room by mode: a full quiz needs the most, a Study Mode turn
    // teaches one structured lesson part (foundation, explanation, formulas,
    // worked example), which needs more room than a single-paragraph answer.
    const maxTokens = parsed.data.mode === "quiz-generation"
      ? 4000
      : parsed.data.mode === "study-session"
        ? 3000
        : 1200;

    // Coalesce identical cacheable requests: concurrent students asking the
    // same generic question share one upstream call. Non-cacheable modes
    // (study-session, quiz-generation) always run their own call.
    const cacheKey = cacheable
      ? buildAiCacheKey(requestMode, parsed.data.question)
      : null;

    const runUpstream = async (): Promise<string> => {
      return hfToken
        ? ((await askWithHuggingFace(hfToken, messages, maxTokens)) ?? "")
        : ((
            await new OpenAI({ apiKey: openAIKey }).chat.completions.create({
              model: "gpt-5.4-mini",
              max_completion_tokens: maxTokens,
              messages,
            })
          ).choices[0]?.message?.content?.trim() ?? "");
    };

    const answer = cacheKey
      ? await coalesceUpstreamRequest(cacheKey, runUpstream)
      : await runUpstream();

    if (!answer) {
      req.log.error("AI provider returned an empty answer");
      res.status(502).json({ error: "The AI answer service returned an empty response. Please try again." });
      return;
    }

    // Store only reusable generic answers (cacheable modes, screen passed).
    if (cacheKey) {
      void storeAiResponse(
        requestMode,
        parsed.data.question,
        answer,
        hfToken ? "huggingface" : "openai",
      );
    }

    res.set("X-AI-Cache", "MISS");
    res.json({ answer });
  } catch (error) {
    recordProviderFailure();
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
