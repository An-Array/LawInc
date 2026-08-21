"use client"

import { FormEvent, useState } from "react"

import { askQuestion, type QuestionResponse } from "@/lib/api/questions"

export default function AskForm() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState<QuestionResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedQuestion = question.trim();

    if (!trimmedQuestion) {
      return;
    }

    setLoading(true);
    setError(false);
    setResponse(null);

    try {
      const result = await askQuestion({
        question: trimmedQuestion,
      });

      if (result === null) {
        setError(true);
        return;
      }
      setResponse(result);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <textarea
        value={question}
        onChange={(event) => setQuestion(event.target.value)}
        placeholder="Ask a legal question..."
        aria-label="Legal Question"
        rows={5}
        className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-400"
        />
        <button
        type="submit"
        disabled={loading || !question.trim()}
        className="mt-4 rounded-md bg-slate-400 px-5 py-3 font-semibold text-slate-950 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Thinking..." : "Ask LawInc"}
        </button>
      </form>
          <div className="mt-10">
        {error && (
          <p className="text-sm text-red-400">
            Unable to get an answer from LawInc.
          </p>
        )}

        {!loading && !error && response && (
          <article className="rounded-lg border border-slate-700 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold text-white">
              Answer
            </h2>

            <p className="mt-4 whitespace-pre-wrap text-slate-300">
              {response.answer}
            </p>

            {response.citations.length > 0 && (
              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                  Sources
                </h3>

                <ul className="mt-3 space-y-2">
                  {response.citations.map((citation) => (
                    <li
                      key={citation}
                      className="text-sm text-slate-300"
                    >
                      {citation}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        )}
      </div>
    </section>
  );
}