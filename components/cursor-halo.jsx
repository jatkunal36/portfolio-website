"use client";

import { useEffect } from "react";

export function CursorHalo() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) {
      return undefined;
    }

    const handleMove = (event) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    };

    const handleOver = (event) => {
      if (event.target.closest("a, button")) {
        document.body.dataset.cursor = "active";
      }
    };

    const handleOut = (event) => {
      if (event.target.closest("a, button")) {
        delete document.body.dataset.cursor;
      }
    };

    window.addEventListener("pointermove", handleMove);
    document.addEventListener("pointerover", handleOver);
    document.addEventListener("pointerout", handleOut);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      document.removeEventListener("pointerover", handleOver);
      document.removeEventListener("pointerout", handleOut);
      delete document.body.dataset.cursor;
    };
  }, []);

  return (
    <>
      <div className="cursor-ring" aria-hidden="true" />
      <div className="cursor-dot" aria-hidden="true" />
    </>
  );
}
