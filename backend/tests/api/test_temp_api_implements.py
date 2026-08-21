from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_search_returns_empty_results() -> None:
    response = client.get(
        "/api/v1/search",
        params={"q": "qwe"},
    )

    assert response.status_code == 200
    assert response.json() == {
        "query": "qwe",
        "results": [],
    }


def test_get_document_returns_404_for_unknown_document() -> None:
    response = client.get("/api/v1/documents/999999")

    assert response.status_code == 404


def test_question_returns_empty_answer_and_citations() -> None:
    response = client.post(
        "/api/v1/questions",
        json={
            "question": "What is the meaning of Article 21?",
        },
    )

    assert response.status_code == 200
    assert response.json() == {
        "answer": "",
        "citations": [],
    }