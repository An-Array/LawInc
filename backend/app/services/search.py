from dataclasses import dataclass

@dataclass
class SearchRequest:
  query: str

class SearchService:
  """Application boundary for legal search.

  Temporary implementation for Search and Retrieval (C) system.
  """

  async def search(self, request: SearchRequest) -> list[dict[str, object]]:
    return []