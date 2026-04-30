"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./ScrambledText.css";

export default function ScrambledText({
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = ".:",
  className = "",
  style = {},
  children
}) {
  const rootRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const frame = frameRef.current;

    const text = typeof children === "string" ? children : "";
    root.innerHTML = "";

    const chars = text.split("").map((char, index) => {
      const span = document.createElement("span");
      span.className = "char";
      span.dataset.content = char;
      span.dataset.index = String(index);
      span.textContent = char === " " ? "\u00A0" : char;
      root.appendChild(span);
      return span;
    });

    const scrambleToOriginal = (el, activeDuration) => {
      const original = el.dataset.content || "";
      const state = { progress: 0 };
      const steps = Math.max(4, Math.floor(activeDuration / Math.max(speed, 0.08)));

      gsap.killTweensOf(state);
      gsap.to(state, {
        progress: 1,
        duration: activeDuration,
        ease: "none",
        onUpdate: () => {
          if (original === " ") {
            el.textContent = "\u00A0";
            return;
          }

          const threshold = Math.floor(state.progress * steps);
          if (threshold >= steps - 1) {
            el.textContent = original;
            return;
          }

          const randomChar = scrambleChars[Math.floor(Math.random() * scrambleChars.length)] || original;
          el.textContent = randomChar;
        },
        onComplete: () => {
          el.textContent = original === " " ? "\u00A0" : original;
        }
      });
    };

    const handleMove = (event) => {
      if (frame) {
        gsap.to(frame, {
          x: event.clientX * 0.018,
          y: event.clientY * 0.012,
          duration: 0.45,
          ease: "power3.out",
          overwrite: true
        });
      }

      chars.forEach((char) => {
        const { left, top, width, height } = char.getBoundingClientRect();
        const dx = event.clientX - (left + width / 2);
        const dy = event.clientY - (top + height / 2);
        const dist = Math.hypot(dx, dy);

        if (dist < radius) {
          scrambleToOriginal(char, duration * (1 - dist / radius));
        }
      });
    };

    const wrapper = root.closest(".scrambled-shell");
    wrapper?.addEventListener("pointermove", handleMove);

    return () => {
      wrapper?.removeEventListener("pointermove", handleMove);
      chars.forEach((char) => gsap.killTweensOf(char));
      gsap.killTweensOf(frame);
    };
  }, [children, duration, radius, scrambleChars, speed]);

  return (
    <div className={`scrambled-shell ${className}`} style={style}>
      <div ref={frameRef} className="scrambled-parallax" aria-hidden="true" />
      <p ref={rootRef} className="text-block">
        {children}
      </p>
    </div>
  );
}
