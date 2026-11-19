"use client";

import { useEffect, useMemo, useState } from "react";

type Segment = {
  text: string;
  accent?: boolean;
};

const lines: Segment[][] = [
  [
    { text: "Construire " },
    { text: "durablement,", accent: true },
  ],
  [
    { text: "avec " },
    { text: "exigence", accent: true },
    { text: " et " },
    { text: "fierté.", accent: true },
  ],
];

export function TypewriterHeadline() {
  const flat = useMemo(
    () =>
      lines.flatMap((line, lineIndex) =>
        line.map((segment) => ({ ...segment, lineIndex })),
      ),
    [],
  );

  const fullLength = useMemo(
    () => flat.reduce((sum, segment) => sum + segment.text.length, 0),
    [flat],
  );

  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (count >= fullLength) {
      setDone(true);
      return;
    }

    const delay = count === 0 ? 350 : 42;
    const timer = window.setTimeout(() => setCount((value) => value + 1), delay);
    return () => window.clearTimeout(timer);
  }, [count, fullLength]);

  let remaining = count;

  return (
    <h1
      className="font-display text-[clamp(2.25rem,3.4vw+1rem,4.5rem)] leading-[1.15] tracking-wide"
      aria-label="Construire durablement, avec exigence et fierté."
    >
      {lines.map((line, lineIndex) => (
        <span
          key={lineIndex}
          className="block sm:whitespace-nowrap"
        >
          {line.map((segment, segmentIndex) => {
            const take = Math.max(0, Math.min(segment.text.length, remaining));
            remaining -= take;
            const visible = segment.text.slice(0, take);

            return (
              <span
                key={`${lineIndex}-${segmentIndex}`}
                className={segment.accent ? "text-brand-red" : "text-white"}
              >
                {visible}
              </span>
            );
          })}
          {lineIndex === lines.length - 1 ? (
            <span
              className={`ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.08em] bg-brand-red align-baseline ${
                done ? "animate-caret" : "opacity-100"
              }`}
              aria-hidden="true"
            />
          ) : null}
        </span>
      ))}
    </h1>
  );
}
