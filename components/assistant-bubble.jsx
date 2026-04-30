"use client";

import { useState } from "react";
import { siteConfig } from "../lib/site";

export function AssistantBubble() {
  const [open, setOpen] = useState(false);

  return (
    <div className="assistant-widget">
      {open ? (
        <div className="assistant-card">
          <p className="assistant-kicker">Portfolio Assistant</p>
          <p className="assistant-title">Need the quick version?</p>
          <p className="assistant-copy">
            I can point you to Kunal&apos;s case studies, resume, and contact route.
          </p>
          <div className="assistant-actions">
            <a href="#work">View Work</a>
            <a href={`mailto:${siteConfig.email}`}>Contact</a>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        aria-label="Open portfolio assistant"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="assistant-button"
      >
        AI
      </button>
    </div>
  );
}
