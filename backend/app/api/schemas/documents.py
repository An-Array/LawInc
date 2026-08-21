from pydantic import BaseModel

class DocumentResponse(BaseModel):
  id: str
  title: str
  content: str
