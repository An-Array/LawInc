import {z} from "zod";
import { apiBaseUrl } from "@/lib/api/client";

export const HealthResponseSchema = z.object({
  status: z.string(),
  service: z.string(),
  version: z.string(),
  environment: z.string()
});

export type HealthResponse = z.infer<typeof HealthResponseSchema>



export async function getApiHealth(): Promise<HealthResponse | null > {
  try {
    const response = await fetch(`${apiBaseUrl}/health`, {
      cache: "no-store"
    });

    if (!response.ok) {
      return null;
    }

    const payload: unknown = await response.json();
    const result = HealthResponseSchema.safeParse(payload);

    return result.success? result.data : null;
  } catch{
    return null;
  }
}