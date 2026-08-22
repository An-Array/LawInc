"use client";

import { useState, type FormEvent, type KeyboardEvent } from "react";

import { askQuestion, type QuestionResponse } from "@/lib/api/questions";

import CitationList from "../citations/citation-list";

export default function AskForm() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState<QuestionResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedQuestion = question.trim();

    if (!trimmedQuestion || loading) {
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

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();

      if (question.trim() && !loading) {
        event.currentTarget.form?.requestSubmit();
      }
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
          <div className="border-b border-border px-5 py-4">
            <label
              htmlFor="legal-question"
              className="text-sm font-semibold text-foreground"
            >
              Your question
            </label>
          </div>

          <textarea
            id="legal-question"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about a provision, legal principle, case, or jurisdiction..."
            aria-label="Legal question"
            rows={7}
            disabled={loading}
            className="block w-full resize-y border-0 bg-surface px-5 py-5 text-base leading-7 text-foreground outline-none placeholder:text-muted disabled:cursor-not-allowed disabled:opacity-60"
          />

          <div className="flex items-center justify-between gap-4 border-t border-border bg-surface-muted px-5 py-4">
            <p className="text-xs text-muted">
              Press Enter to ask. Use Shift + Enter for a new line.
            </p>

            <button
              type="submit"
              disabled={loading || !question.trim()}
              className="shrink-0 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Researching..." : "Ask LawInc"}
            </button>
          </div>
        </div>
      </form>

      {error && (
        <div
          role="alert"
          className="mt-8 rounded-lg border border-danger/30 bg-danger/5 px-5 py-4"
        >
          <p className="text-sm font-semibold text-danger">
            Unable to retrieve an answer.
          </p>

          <p className="mt-1 text-sm text-muted">
            The research service could not process this question. Please try
            again.
          </p>
        </div>
      )}

      {response && !loading && !error && (
        <section className="mt-14">
          <div className="border-b border-border pb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Research result
            </p>

            <h2 className="mt-3 font-lawinc-serif text-3xl tracking-tight text-foreground">
              Answer
            </h2>
          </div>

          <article className="mt-8">
            <p className="whitespace-pre-wrap text-base leading-8 text-foreground">
              {response.answer}
            </p>
          </article>

          {response.citations.length > 0 && (
            <CitationList citations={response.citations} />
          )}
        </section>
      )}
    </div>
  );
}