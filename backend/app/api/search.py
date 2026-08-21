from fastapi import APIRouter, Query

from app.api.schemas.search import SearchResult, SearchResponse
from app.services.search import SearchRequest, SearchService

router = APIRouter(prefix="/api/v1/search", tags=["search"])

search_service = SearchService()

@router.get("", response_model=SearchResponse)
async def search(
  q: str = Query(min_length=1),
  ) -> SearchResponse:
  results = await search_service.search(SearchRequest(query=q))

  return SearchResponse(
    query=q,
    results=[SearchResult(**result) for result in results],
  )