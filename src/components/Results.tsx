import { useState } from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { resultCases, WHATSAPP_HREF } from '@/data/content';
import Reveal from './Reveal';

export default function Results() {
  const [active, setActive] = useState(0);
  const current = resultCases[active];

  const scrollToAppointment = () => {
    document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="results" className="py-24 sm:py-32 bg-ivory-100">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <Reveal className="max-w-2xl">
          <span className="text-[0.6rem] tracking-widest3 text-clay-500 font-medium uppercase">
            Results
          </span>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-[3.5rem] text-charcoal-900 font-light leading-[1.05] tracking-[-0.01em]">
            Real concerns.
            <br />
            <span className="italic">Thoughtful treatment.</span>
          </h2>
        </Reveal>

        {/* Tabs — refined underline style */}
        <Reveal className="mt-12" delay={100}>
          <div className="flex gap-8 border-b border-ivory-300/60">
            {resultCases.map((c, i) => (
              <button
                key={c.tab}
                onClick={() => setActive(i)}
                className={`relative pb-4 text-sm font-medium tracking-wide transition-colors duration-300 ${
                  active === i
                    ? 'text-charcoal-900'
                    : 'text-charcoal-500/60 hover:text-charcoal-700'
                }`}
              >
                {c.tab}
                <span
                  className={`absolute bottom-0 left-0 h-px bg-charcoal-900 transition-all duration-400 ${
                    active === i ? 'w-full' : 'w-0'
                  }`}
                />
              </button>
            ))}
          </div>
        </Reveal>

        {/* Display */}
        <Reveal key={active} className="mt-10" delay={80}>
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
            {/* Image — 7 cols */}
            <div className="lg:col-span-7 relative rounded-xl overflow-hidden h-80 sm:h-[26rem] lg:h-[32rem]">
              <img
                src={current.image}
                alt={current.label}
                loading="lazy"
                className="h-full w-full object-cover"
                style={{ objectPosition: 'center 30%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/30 via-transparent to-transparent" />
              <span className="absolute top-5 left-5 text-[0.6rem] tracking-widest2 text-ivory-50/90 uppercase font-medium">
                {current.label}
              </span>
            </div>
            {/* Text — 5 cols */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h3 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-light tracking-[-0.01em]">
                {current.tab}
              </h3>
              <p className="mt-5 text-charcoal-600 leading-relaxed font-light text-lg">
                {current.description}
              </p>

              {/* Contextual CTA */}
              <div className="mt-7">
                <button
                  onClick={scrollToAppointment}
                  className="group inline-flex items-center gap-2 rounded-full bg-charcoal-900 px-6 py-3.5 text-sm font-medium text-ivory-100 hover:bg-charcoal-800 transition-all duration-300"
                >
                  Discuss your {current.tab.toLowerCase()} concerns
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>

              <div className="mt-6 rounded-lg border border-sage-500/15 bg-sage-500/5 px-5 py-4">
                <p className="text-xs text-sage-700 font-medium leading-relaxed">
                  Sample demo imagery — replace with clinic's verified cases.
                  Individual results vary. No guaranteed outcomes.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
