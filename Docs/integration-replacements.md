# Integration Replacements

Temporary implementations used to allow independent development.

Remove or replace an entry when the corresponding production implementation is integrated.

---

## Legal Source & Ingestion (A)

_No temporary implementation currently registered._

---

## Legal Knowledge Model (B)

[`backend/app/services/documents.py`]

- Function: `DocumentService.get_document()`
- Temp: Returns no documents.
- Replacement: Legal Knowledge Model / database-backed implementation (B)
- When: SLegal Knowledge Model (B) is integrated.

---

## Search & Retrieval (C)

[`backend/app/services/search.py`]

- Function: `SearchService.search()`
- Temp: Returns no results.
- Replacement: Hybrid Retrieval / Ranking system (C)
- When: Search & Retrieval (C) is integrated.

---

## AI / LLM (D)

[`backend/app/services/questions.py`]

- Function: `QuestionService.answer()`
- Temp: Returns an empty answer.
- Replacement: Retrieval → Context Builder → LLMProvider → validated answer (C/D/E)
- When: Search & Retrieval (C), AI / LLM (D), and Citation & Validation (E) are integrated.

---

## Citation & Validation (E)

_No temporary implementation currently registered._
