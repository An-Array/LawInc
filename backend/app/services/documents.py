class DocumentServices:
  """Application Boundary for legal documents.

  Temp implementation for Legal Knowledge Model (B).
  """
  async def get_document(self, document_id: str) -> dict[str, object] | None:
    return None