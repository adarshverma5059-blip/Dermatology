import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '@/data/content';
import Reveal from './Reveal';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-32 bg-ivory-50">
      <div className="mx-auto max-w-3xl px-6 sm:px-10">
        <Reveal className="mb-14">
          <span className="text-[0.6rem] tracking-widest3 text-clay-500 font-medium uppercase">
            FAQ
          </span>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl text-charcoal-900 font-light leading-[1.05] tracking-[-0.01em]">
            Questions,
            <br />
            <span className="italic">answered.</span>
          </h2>
        </Reveal>

        <div className="space-y-0 border-t border-ivory-300/50">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.question} delay={i * 50}>
                <div className="border-b border-ivory-300/50">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg sm:text-xl text-charcoal-900 font-normal">
                      {f.question}
                    </span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ivory-400/60 text-charcoal-700">
                      {isOpen ? (
                        <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                      ) : (
                        <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                      )}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100 pb-6'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-light max-w-xl">
                        {f.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
