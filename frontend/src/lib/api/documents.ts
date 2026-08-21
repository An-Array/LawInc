import {z} from "zod";
import { apiBaseUrl } from "@/lib/api/client";

export const DocumentResponseSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string()
})

export type DocumentResponse = z.infer<typeof DocumentResponseSchema>

export async function getDocument(
  documentId: string,
): Promise<DocumentResponse | null> {
  try {
    const response = await fetch(`${apiBaseUrl}/api/v1/documents/${encodeURIComponent(documentId)}`)

    if (!response.ok){
      return null;
    }

    const payload: unknown = await response.json()

    const result = DocumentResponseSchema.safeParse(payload)

    return result.success ? result.data : null;
  } catch {
    return null;
  }
}