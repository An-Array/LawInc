from fastapi import APIRouter, HTTPException, status

from app.api.schemas.documents import DocumentResponse
from app.services.documents import DocumentServices

router = APIRouter(prefix="/api/v1/documents", tags=["documents"])

document_service = DocumentServices()

@router.get("/{document_id}", response_model=DocumentResponse)
async def get_document(document_id: str) -> DocumentResponse:
  document = await document_service.get_document(document_id)
  if document is None:
    raise HTTPException(
      status_code=status.HTTP_404_NOT_FOUND,
      detail="Document not found",
    )
  return DocumentResponse(**document)
