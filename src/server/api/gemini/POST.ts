// POST /api/gemini
// Proxy to Gemini chat handler
import type { Request, Response } from 'express';
import chatHandler from './chat';

export default async function handler(req: Request, res: Response) {
  return chatHandler(req, res);
}
