"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/content";
import { Container } from "@/components/Container";

type StatsProps = {
  tone?: "light" | "dark";
};

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function AnimatedValue({
  end,
  suffix,
  staticValue,
  active,
  dark,
}: {
  end?: number;
  suffix?: string;
  staticValue?: string;
  active: boolean;
  dark: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active || staticValue != null || end == null) return;
    let frame = 0;
    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(end * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, end, staticValue]);

  const display = staticValue ?? `${value}${suffix ?? ""}`;

  return (
    <span className={dark ? "text-brand-safety" : "text-brand-red"}>
      {display}
    </span>
  );
}

export function Stats({ tone = "dark" }: StatsProps) {
  const dark = tone === "dark";
  const { ref, visible } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      className={
        dark
          ? "bg-brand-navy text-white"
          : "border-y border-brand-navy/10 bg-surface text-brand-navy"
      }
    >
      <Container className="grid grid-cols-2 gap-x-6 gap-y-8 py-12 md:grid-cols-4 md:gap-x-8 md:py-16">
        {stats.map((item) => (
          <div key={item.label} className="text-left">
            <p className="font-display text-3xl tracking-wide sm:text-4xl md:text-5xl">
              <AnimatedValue
                end={"end" in item ? item.end : undefined}
                suffix={"suffix" in item ? item.suffix : undefined}
                staticValue={"static" in item ? item.static : undefined}
                active={visible}
                dark={dark}
              />
            </p>
            <p
              className={`mt-2 text-sm leading-snug sm:mt-3 ${
                dark ? "text-white/70" : "text-brand-navy/65"
              }`}
            >
              {item.label}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}
