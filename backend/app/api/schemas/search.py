from pydantic import BaseModel, Field

class SearchResult(BaseModel):
  id: str
  title: str
  snippet: str
  score: float | None = None

class SearchResponse(BaseModel):
  query: str
  results: list[SearchResult]