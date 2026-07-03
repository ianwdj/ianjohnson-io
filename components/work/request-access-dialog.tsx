"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

// NOTE: submission is intentionally local-only for now (no backend wired).
// When the real "request access" flow is decided, post to a route handler here.
export function RequestAccessDialog({ project }: { project: string }) {
  const [sent, setSent] = useState(false);

  return (
    <Dialog.Root onOpenChange={(o) => !o && setSent(false)}>
      <Dialog.Trigger asChild>
        <button className="font-mono text-[10.5px] tracking-[0.04em] text-ink-mute underline decoration-dotted decoration-ink-mute/60 underline-offset-[3px] transition-colors duration-150 hover:text-accent hover:decoration-accent">
          request access →
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/45 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-[420px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[3px] border border-rule bg-paper p-7 text-ink shadow-[0_30px_80px_-20px_rgba(40,28,10,0.5)] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95"
          aria-describedby={undefined}
        >
          {sent ? (
            <>
              <p className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.08em] text-ink-mute">
                Sent
              </p>
              <Dialog.Title className="font-serif text-xl font-medium">
                Thanks. I&rsquo;ll be in touch within a few days.
              </Dialog.Title>
              <div className="mt-5 flex justify-end">
                <Dialog.Close className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-ink transition-colors hover:text-accent">
                  Close
                </Dialog.Close>
              </div>
            </>
          ) : (
            <>
              <p className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.08em] text-ink-mute">
                {project}
              </p>
              <Dialog.Title className="mb-2 font-serif text-xl font-medium">
                Send a note, get the page.
              </Dialog.Title>
              <p className="mb-5 font-serif text-[15px] text-ink-soft">
                Most of my work writeups are password-protected. Tell me a bit
                about you and what you&rsquo;re working on, and I&rsquo;ll send
                the link.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <input
                  required
                  name="name"
                  placeholder="Your name"
                  className="mb-3.5 w-full border-0 border-b border-rule bg-transparent py-2 font-serif text-base outline-none focus:border-ink"
                />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="mb-3.5 w-full border-0 border-b border-rule bg-transparent py-2 font-serif text-base outline-none focus:border-ink"
                />
                <textarea
                  name="context"
                  placeholder="What you’re working on (optional)"
                  className="mb-3.5 min-h-[72px] w-full resize-y border-0 border-b border-rule bg-transparent py-2 font-serif text-base outline-none focus:border-ink"
                />
                <div className="flex items-center justify-between">
                  <Dialog.Close className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-ink-mute transition-colors hover:text-ink">
                    Cancel
                  </Dialog.Close>
                  <button
                    type="submit"
                    className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-ink transition-colors hover:text-accent"
                  >
                    Send →
                  </button>
                </div>
              </form>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
