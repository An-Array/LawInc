from fastapi import APIRouter

from app.api.schemas.questions import QuestionRequest, QuestionResponse
from app.services.questions import QuestionService

router = APIRouter(prefix="/api/v1/questions", tags=["questions"])

question_service = QuestionService()

@router.post("", response_model=QuestionResponse)
async def answer_question(
  request: QuestionRequest,
  ) -> QuestionResponse:
  result = await question_service.answer(request.question)
  return QuestionResponse(**result)