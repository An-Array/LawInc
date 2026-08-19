export type HealthResponse = {
  status: string;
  service: string;
  version: string;
  environment: string;
}


const apiBaseUrl = process.env.BACKEND_API_BASE_URL ?? "https://127.0.0.1:8000";

function isHealthResponse(value: unknown): value is HealthResponse {
  if (typeof value !== "object" || value == null){
    return false;
}

const response = value as Record<string, unknown>;

return (
  typeof response.status === "string" &&
  typeof response.service === "string" &&
  typeof response.version === "string" &&
  typeof response.environment === "string"
  );
}

export async function getApiHealth(): Promise<HealthResponse | null > {
  try {
    const response = await fetch(`${apiBaseUrl}/health`, {
      cache: "no-store"
    });

    if (!response.ok) {
      return null;
    }

    const payload: unknown = await response.json();

    return isHealthResponse(payload) ? payload : null;
  } catch{
    return null;
  }

}
