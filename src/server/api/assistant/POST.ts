import type { Request, Response } from "express";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-2.0-flash";
const DEFAULT_MAX_OUTPUT_TOKENS = 160;
const MAX_ALLOWED_OUTPUT_TOKENS = 256;
const MAX_PROMPT_CHARS = 6000;
const API_BASE = "https://generativelanguage.googleapis.com/v1beta";
const SYSTEM_INSTRUCTION = [
  "You are the Global Educated Leaders chatbot.",
  "Speak like a strategic, encouraging leader and equal partner.",
  "Do not be patronizing or overly verbose.",
  "Use clear, actionable guidance and keep the response concise.",
  "When helpful, frame answers with practical next steps and leadership-focused framing.",
  "End with one thoughtful leadership-oriented question or prompt.",
  "Prefer bullets when they improve clarity.",
].join(" ");

function readEnvFileValue(key: string): string | null {
  const cwd = process.cwd();
  const envCandidates = [path.join(cwd, ".env.local"), path.join(cwd, ".env")];

  for (const envPath of envCandidates) {
    if (!existsSync(envPath)) continue;
    const content = readFileSync(envPath, "utf-8");
    const lines = content.split(/\r?\n/);
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eqIndex = trimmed.indexOf("=");
      if (eqIndex <= 0) continue;
      const name = trimmed.slice(0, eqIndex).trim();
      if (name !== key) continue;
      const rawValue = trimmed.slice(eqIndex + 1).trim();
      const unquoted = rawValue.replace(/^['\"]|['\"]$/g, "");
      if (unquoted) return unquoted;
    }
  }

  return null;
}

function loadGeminiApiKey(): string {
  if (process.env.GEMINI_API_KEY) return process.env.GEMINI_API_KEY;

  const localEnvKey = readEnvFileValue("GEMINI_API_KEY");
  if (localEnvKey) return localEnvKey;

  const allocConfigPath = "/alloc/config.json";
  if (existsSync(allocConfigPath)) {
    const parsed = JSON.parse(readFileSync(allocConfigPath, "utf-8"));
    const value = parsed?.GEMINI_API_KEY?.VALUE;
    if (typeof value === "string" && value.trim()) return value.trim();
  }

  throw new Error("Missing GEMINI_API_KEY. Set it in the environment or /alloc/config.json.");
}

let cachedGeminiKey: string | null = null;
function getGeminiApiKeyCached(): string {
  if (!cachedGeminiKey) {
    cachedGeminiKey = loadGeminiApiKey();
  }
  return cachedGeminiKey;
}

function clampMaxOutputTokens(value: unknown): number {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return DEFAULT_MAX_OUTPUT_TOKENS;
  return Math.max(16, Math.min(MAX_ALLOWED_OUTPUT_TOKENS, Math.floor(parsed)));
}

function truncatePrompt(prompt: string): string {
  const clean = prompt.trim();
  if (clean.length <= MAX_PROMPT_CHARS) return clean;
  return clean.slice(0, MAX_PROMPT_CHARS);
}

export default async function handler(req: Request, res: Response) {
  try {
    const prompt = typeof req.body?.prompt === "string" ? req.body.prompt : "";
    if (!prompt.trim()) {
      res.status(400).json({ success: false, error: "Missing prompt" });
      return;
    }

    const maxOutputTokens = clampMaxOutputTokens(req.body?.maxOutputTokens);
    const apiKey = getGeminiApiKeyCached();
    const model = typeof req.body?.model === "string" && req.body.model.trim() ? req.body.model.trim() : GEMINI_MODEL;
    const url = `${API_BASE}/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: SYSTEM_INSTRUCTION }],
        },
        contents: [
          {
            role: "user",
            parts: [{ text: truncatePrompt(prompt) }],
          },
        ],
        generationConfig: {
          temperature: 0.6,
          topP: 0.9,
          maxOutputTokens,
        },
      }),
    });

    const rawText = await response.text();
    let data: any = null;
    try {
      data = rawText ? JSON.parse(rawText) : null;
    } catch {
      data = null;
    }

    if (!response.ok) {
      const errorMessage = data?.error?.message || rawText || `Gemini request failed with status ${response.status}`;
      res.status(502).json({ success: false, error: errorMessage });
      return;
    }

    const candidateText =
      data?.candidates?.[0]?.content?.parts
        ?.map((part: { text?: string }) => part?.text || "")
        .join("") ||
      data?.candidates?.[0]?.content?.text ||
      "";

    const normalizedText = typeof candidateText === "string" ? candidateText.trim() : "";

    res.json({
      success: true,
      text: normalizedText || "I’m ready to help, but I didn’t receive a response from Gemini.",
      meta: {
        model,
        maxOutputTokens,
        outputLength: normalizedText.length,
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error occurred";
    res.status(500).json({ success: false, error: message });
  }
}
