"use client";

import { useEffect, useRef, useState } from "react";

/* "Ask AI": a quiet trigger that lives in the fixed utility bar. Always
   visible, no pulse, no badge, no color until hover. Opens a small panel
   above the bar in the site's own materials. Chat requires JS by nature,
   so the trigger simply doesn't exist without it. */

const STARTERS = [
  "How do you decide what to build first?",
  "What did you ship at Aida?",
  "Why price before you build?",
];

const INTRO =
  "This is an AI with Ian's essays and principles loaded. Ask it how he works.";

type Message = { role: "user" | "assistant"; content: string };

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [messages, busy]);

  async function send(text: string) {
    const question = text.trim();
    if (!question || busy) return;
    const next: Message[] = [...messages, { role: "user", content: question }];
    setMessages(next);
    setInput("");
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: next.slice(-12) }),
      });
      const data = await res.json();
      const reply: string = res.ok
        ? data.reply
        : data.error ?? "Something went wrong. Try again in a moment.";
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: "Something went wrong. Try again in a moment.",
        },
      ]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => {
          setOpen((o) => !o);
          setTimeout(() => inputRef.current?.focus(), 50);
        }}
        className="group flex items-center gap-2 rounded-full border border-hairline bg-cream py-1 pl-3 pr-3.5 transition-colors duration-300 ease-slow hover:border-coral"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden
          className="h-3.5 w-3.5 stroke-putty transition-colors duration-300 group-hover:stroke-coral-deep"
          fill="none"
          strokeWidth="1.5"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 8.5-8.5 8.38 8.38 0 0 1 8.5 8.5z" />
        </svg>
        <span className="font-serif text-[14px]">Ask about Ian</span>
      </button>
      {open && (
        <div className="fixed bottom-[60px] right-4 z-50 flex w-[380px] max-w-[calc(100vw-32px)] flex-col overflow-hidden rounded-[10px] border border-hairline bg-cream shadow-[0_10px_32px_rgba(36,33,24,0.14)]">
          <div className="flex items-center justify-between border-b border-hairline px-4 py-3">
            <span className="meta">Ask about Ian</span>
            <button
              type="button"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
              className="text-[15px] leading-none text-putty transition-colors duration-300 hover:text-coral-deep"
            >
              ✕
            </button>
          </div>
          <div
            ref={bodyRef}
            className="flex max-h-[320px] min-h-[200px] flex-col gap-3 overflow-y-auto p-4"
          >
            <p className="max-w-[85%] font-serif text-[15.5px] leading-[1.5]">
              {INTRO}
            </p>
            {messages.length === 0 && (
              <div className="flex flex-wrap gap-2">
                {STARTERS.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => send(q)}
                    className="rounded-full border border-hairline px-3 py-1 font-serif text-[13.5px] text-putty transition-colors duration-300 hover:border-coral hover:text-coral-deep"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
            {messages.map((m, i) =>
              m.role === "user" ? (
                <p
                  key={i}
                  className="max-w-[85%] self-end rounded-[10px_10px_2px_10px] bg-cream-deep px-3 py-2 font-serif text-[15.5px] leading-[1.5]"
                >
                  {m.content}
                </p>
              ) : (
                <p
                  key={i}
                  className="max-w-[85%] whitespace-pre-wrap font-serif text-[15.5px] leading-[1.5]"
                >
                  {m.content}
                </p>
              )
            )}
            {busy && (
              <p className="font-serif text-[15.5px] italic text-putty">
                thinking…
              </p>
            )}
          </div>
          <form
            className="flex items-center gap-2.5 border-t border-hairline px-4 py-2.5"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about how Ian works"
              maxLength={500}
              className="flex-1 bg-transparent font-serif text-[15.5px] text-ink outline-none placeholder:italic placeholder:text-putty"
            />
            <button
              type="submit"
              aria-label="Send"
              disabled={busy || input.trim().length === 0}
              className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-coral transition-colors duration-300 hover:bg-coral-deep disabled:opacity-40"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden
                className="h-3 w-3 stroke-cream"
                fill="none"
                strokeWidth="1.8"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </form>
          <p className="px-4 pb-2.5 font-mono text-[10.5px] tracking-[0.04em] text-putty">
            answers draw on Ian&apos;s essays and principles · can be wrong
          </p>
        </div>
      )}
    </>
  );
}
