"use client";
import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  title?: string;
}

export default function FaqAccordion({ items, title = "Vanliga frågor" }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <section className="my-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="divide-y divide-gray-100 border border-gray-100 rounded-xl overflow-hidden">
        {items.map((item, i) => (
          <div key={i}>
            <button
              className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
            >
              <span className="font-medium text-gray-900 pr-4">{item.question}</span>
              <svg
                className={`w-5 h-5 text-gray-500 shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === i && (
              <div className="px-6 pb-5 text-gray-600 leading-relaxed text-sm">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
