import type { Request, Response } from "express";
import { askGemini } from "../../gemini";

interface ChatRequestBody {
  message?: string;
}

interface ChatSuccessResponse {
  reply: string;
}

interface ChatErrorResponse {
  error: string;
}

// Handles POST /api/chat requests from the chat widget.
export default async function handler(
  req: Request<unknown, unknown, ChatRequestBody>,
  res: Response<ChatSuccessResponse | ChatErrorResponse>,
) {
  try {
    const message = typeof req.body?.message === "string" ? req.body.message.trim() : "";

    // Return 400 when input is missing or empty.
    if (!message) {
      res.status(400).json({ error: "Message is required" });
      return;
    }

    const reply = await askGemini(message);
    res.json({ reply });
  } catch (error) {
    const err = error instanceof Error ? error : new Error("Unknown Gemini error");

    // Gemini and server failures return 500.
    res.status(500).json({ error: err.message || "Failed to generate reply" });
  }
}
