"use client";

import { useEffect, useId, useRef, useState } from "react";

type Option = {
  value: string;
  label: string;
};

type CustomSelectProps = {
  id?: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  required?: boolean;
};

export function CustomSelect({
  id,
  name,
  value,
  onChange,
  options,
  placeholder = "Sélectionner…",
  required = false,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const selected = options.find((opt) => opt.value === value) ?? null;

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function pick(next: string) {
    onChange(next);
    setOpen(false);
  }

  return (
    <div ref={rootRef} className="relative">
      <input type="hidden" name={name} value={value} required={required} />

      <button
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((prev) => !prev)}
        className={`mt-2 flex w-full items-center justify-between gap-3 rounded-2xl border bg-surface px-4 py-3 text-left outline-none transition ${
          open ? "border-brand-red" : "border-brand-navy/15 focus:border-brand-red"
        } ${selected ? "text-brand-navy" : "text-brand-navy/45"}`}
      >
        <span className="min-w-0 truncate">{selected?.label ?? placeholder}</span>
        <svg
          viewBox="0 0 24 24"
          className={`h-4 w-4 shrink-0 text-brand-navy/50 transition-transform duration-200 ${
            open ? "rotate-180 text-brand-red" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open ? (
        <ul
          id={listId}
          role="listbox"
          aria-labelledby={id}
          className="absolute left-0 right-0 z-30 mt-1.5 max-h-64 overflow-y-auto rounded-2xl border border-brand-navy/10 bg-white py-1 shadow-[0_18px_40px_rgba(29,43,89,0.12)]"
        >
          {options.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <li key={opt.value}>
                <button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => pick(opt.value)}
                  className={`flex w-full px-4 py-2.5 text-left text-[15px] transition-[background,padding,color] duration-200 hover:bg-brand-red hover:pl-5 hover:text-white ${
                    isSelected
                      ? "bg-brand-red/10 font-semibold text-brand-red"
                      : "text-brand-navy"
                  }`}
                >
                  {opt.label}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
