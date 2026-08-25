"use client";

import {
  ArrowUp,
  BookOpen,
  Gavel,
  Scale,
  Search,
} from "lucide-react";

import {
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";

import {
  askQuestion,
  type QuestionResponse,
} from "@/lib/api/questions";

import CitationList from "../citations/citation-list";

const suggestions = [
  {
    icon: Gavel,
    label: "Bail & criminal law",
    question: "What are the grounds for bail?",
  },
  {
    icon: Scale,
    label: "Constitutional law",
    question: "Explain the doctrine of proportionality.",
  },
  {
    icon: BookOpen,
    label: "Legal provisions",
    question: "What is the punishment under Section 420 IPC?",
  },
  {
    icon: Search,
    label: "Case law",
    question: "What are the key principles established by this judgment?",
  },
];



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

  function selectSuggestion(value: string) {
    setQuestion(value);
  }

  const hasConversation = Boolean(response);

  return (
    <div className="flex h-full min-h-0 w-full flex-col">
      {!hasConversation ? (
        <EmptyState
          question={question}
          setQuestion={setQuestion}
          loading={loading}
          onSubmit={handleSubmit}
          onKeyDown={handleKeyDown}
          onSuggestion={selectSuggestion}
        />
      ) : (
        <Conversation
          question={question}
          response={response}
          loading={loading}
          error={error}
          onSubmit={handleSubmit}
          onKeyDown={handleKeyDown}
          setQuestion={setQuestion}
        />
      )}
    </div>
  );
}

function EmptyState({
  question,
  setQuestion,
  loading,
  onSubmit,
  onKeyDown,
  onSuggestion,
}: {
  question: string;
  setQuestion: (value: string) => void;
  loading: boolean;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
  onSuggestion: (value: string) => void;
}) {
  return (
    <div className="flex flex-1 flex-col justify-center py-16 sm:py-20">
      <div className="mx-auto w-full max-w-3xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            LawInc Research
          </p>

          <h1 className="mt-5 font-lawinc-serif text-4xl tracking-[-0.025em] text-foreground sm:text-5xl">
            What can I help you research?
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-muted sm:text-base">
            Ask a question about Indian law, judgments, provisions,
            doctrines, or legal principles.
          </p>
        </div>

        <div className="mt-10">
          <ChatComposer
            question={question}
            setQuestion={setQuestion}
            loading={loading}
            onSubmit={onSubmit}
            onKeyDown={onKeyDown}
          />
        </div>

        <div className="mt-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Try asking
          </p>

          <div className="grid gap-2 sm:grid-cols-2">
            {suggestions.map((suggestion) => {
              const Icon = suggestion.icon;

              return (
                <button
                  key={suggestion.question}
                  type="button"
                  onClick={() => onSuggestion(suggestion.question)}
                  className="
                    group
                    flex items-center gap-3
                    rounded-lg
                    border border-border
                    bg-surface/50
                    px-4 py-3
                    text-left
                    transition-all
                    hover:border-border-strong
                    hover:bg-surface
                  "
                >
                  <Icon
                    size={16}
                    strokeWidth={1.7}
                    className="shrink-0 text-primary"
                  />

                  <span className="min-w-0">
                    <span className="block text-xs text-muted">
                      {suggestion.label}
                    </span>

                    <span className="mt-1 block text-sm text-foreground">
                      {suggestion.question}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
function ChatComposer({
  question,
  setQuestion,
  loading,
  onSubmit,
  onKeyDown,
}: {
  question: string;
  setQuestion: (value: string) => void;
  loading: boolean;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <form onSubmit={onSubmit}>
      <div
        className="
          overflow-hidden
          rounded-2xl
          border border-border-strong
          bg-surface
          shadow-[0_12px_40px_-20px_rgba(0,0,0,0.25)]
          transition-shadow
          focus-within:shadow-[0_16px_50px_-20px_rgba(0,0,0,0.35)]
        "
      >
        <textarea
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          onKeyDown={onKeyDown}
          disabled={loading}
          rows={4}
          placeholder="Ask LawInc anything about Indian law..."
          aria-label="Legal question"
          className="
            block
            min-h-[120px]
            w-full
            resize-none
            border-0
            bg-transparent
            px-5
            pt-5
            text-base
            leading-7
            text-foreground
            outline-none
            placeholder:text-muted/60
            disabled:opacity-60
          "
        />

        <div className="flex items-center justify-between px-4 pb-4">
          <div className="flex items-center gap-2 text-xs text-muted">
            <span className="size-1.5 rounded-full bg-success" />
            Legal sources enabled
          </div>

          <button
            type="submit"
            disabled={loading || !question.trim()}
            aria-label="Submit question"
            className="
              flex size-9 items-center justify-center
              rounded-full
              bg-primary
              text-primary-foreground
              transition-all
              hover:-translate-y-0.5
              hover:bg-primary-hover
              disabled:cursor-not-allowed
              disabled:opacity-30
              disabled:hover:translate-y-0
            "
          >
            <ArrowUp size={17} strokeWidth={2} />
          </button>
        </div>
      </div>

      <p className="mt-3 text-center text-[11px] text-muted">
        LawInc can make mistakes. Verify important legal information against
        the original sources.
      </p>
    </form>
  );
}
function Conversation({
  question,
  response,
  loading,
  error,
  onSubmit,
  onKeyDown,
  setQuestion,
}: {
  question: string;
  response: QuestionResponse | null;
  loading: boolean;
  error: boolean;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
  setQuestion: (value: string) => void;
}) {
  return (
    <div className="flex flex-1 flex-col py-12">
      <div className="mx-auto w-full max-w-3xl">
        {/* User message */}
        <div className="flex justify-end">
          <div className="max-w-[85%] rounded-2xl bg-surface-muted px-5 py-3.5">
            <p className="whitespace-pre-wrap text-sm leading-6 text-foreground">
              {question}
            </p>
          </div>
        </div>

        {/* LawInc response */}
        {response && (
          <div className="mt-10">
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                L
              </span>

              <span className="text-sm font-semibold text-foreground">
                LawInc
              </span>
            </div>

            <article className="mt-4 pl-9">
              <p className="whitespace-pre-wrap text-base leading-8 text-foreground">
                {response.answer}
              </p>
            </article>

            {response.citations.length > 0 && (
              <div className="mt-10 pl-9">
                <CitationList citations={response.citations} />
              </div>
            )}
          </div>
        )}

        {error && (
          <div className="mt-8 rounded-lg border border-danger/30 bg-danger/5 px-5 py-4">
            <p className="text-sm font-semibold text-danger">
              Unable to retrieve an answer.
            </p>

            <p className="mt-1 text-sm text-muted">
              The research service could not process this question.
            </p>
          </div>
        )}
      </div>

      {/* Follow-up composer */}
      <div className="mt-auto pt-16">
        <div className="mx-auto w-full max-w-3xl">
          <ChatComposer
            question={question}
            setQuestion={setQuestion}
            loading={loading}
            onSubmit={onSubmit}
            onKeyDown={onKeyDown}
          />
        </div>
      </div>
    </div>
  );
}