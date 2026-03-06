"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
  defaultOpen?: number;
};

function ChevronIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function FAQAccordion({ items, defaultOpen = 0 }: FAQAccordionProps) {
  const hasDefault = defaultOpen >= 0 && defaultOpen < items.length;
  const [openIndex, setOpenIndex] = useState<number | null>(hasDefault ? defaultOpen : null);

  return (
    <div className="mx-auto mt-10 grid max-w-5xl gap-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article
            key={item.question}
            className={`rounded-[22px] border bg-white px-5 py-4 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-colors duration-300 sm:px-7 sm:py-5 ${
              isOpen ? "border-[#cfd4dc]" : "border-[#e5e7eb]"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold leading-snug text-[#0f172a] sm:text-xl">
                {item.question}
              </span>
              <span
                className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#e5e7eb] text-[#0f172a] transition-all duration-300 ${
                  isOpen ? "rotate-180 bg-[#f3f4f6]" : ""
                }`}
              >
                <ChevronIcon className="h-4 w-4" />
              </span>
            </button>

            <div
              className={`grid overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="min-h-0 overflow-hidden text-sm leading-relaxed text-[#4b5563] sm:text-base">
                {item.answer}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
