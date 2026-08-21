class QuestionService:
  """Application orchestration boundary for legal questions.

  Complete implementation will connect:
  Search & Retrieval (C)
  AI / LLM (D)
  Citation & Validation (E)
  """

  async def answer(self, question: str) -> dict[str, object]:
    return {
      "answer": "",
      "citations": [],
    }