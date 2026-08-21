import {z} from "zod";
import { apiBaseUrl } from "@/lib/api/client";

export const SearchResultSchema = z.object({
  id: z.string(),
  title: z.string(),
  snippet: z.string(),
  score: z.number().nullable(),
})

export const SearchResponseSchema = z.object({
  query: z.string(),
  results: z.array(SearchResultSchema)
})

export type SearchResult = z.infer<typeof SearchResultSchema>
export type SearchResponse = z.infer<typeof SearchResponseSchema>

export async function searchLegal(
  query: string,
): Promise<SearchResponse | null> {
  try {
    const response = await fetch(`${apiBaseUrl}/api/v1/search?q=${encodeURIComponent(query)}`)

    if (!response.ok){
      return null;
    }

    const payload: unknown = await response.json();

    const result = SearchResponseSchema.safeParse(payload)

    return result.success ? result.data : null;

  } catch {
    return null;
  }
}