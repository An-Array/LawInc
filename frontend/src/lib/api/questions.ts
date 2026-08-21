import {z} from "zod";
import { apiBaseUrl } from "@/lib/api/client";

export const QuestionRequestSchema = z.object({
  question: z.string().min(1),
})

export const QuestionResponseSchema = z.object({
  answer: z.string(),
  citations: z.array(z.string())
})

export type QuestionRequest = z.infer<typeof QuestionRequestSchema>
export type QuestionResponse = z.infer<typeof QuestionResponseSchema>

export async function askQuestion(
  request: QuestionRequest,
): Promise<QuestionResponse | null> {
  const validatedRequest = QuestionRequestSchema.safeParse(request);

  if (!validatedRequest.success){
    return null;
  }

  try {
    const response = await fetch(`${apiBaseUrl}/api/v1/questions`, {
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(validatedRequest.data),
    })

    if (!response.ok){
      return null;
    }

    const payload = await response.json()
    const result = QuestionResponseSchema.safeParse(payload);

    return result.success ? result.data : null;

  } catch {
    return null;
  }
}