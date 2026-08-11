"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/mock-data";
import { FadeIn } from "@/components/animations/fade-in";
import { cn } from "@/lib/utils";

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="pt-24 md:pt-32">
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="text-gold text-sm tracking-[0.3em] uppercase">Help</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mt-4">FAQ</h1>
          </FadeIn>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="glass-card overflow-hidden">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-semibold pr-4">{faq.question}</span>
                    <ChevronDown className={cn("w-5 h-5 shrink-0 transition-transform", open === i && "rotate-180")} />
                  </button>
                  {open === i && (
                    <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
