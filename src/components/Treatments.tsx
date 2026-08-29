import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { treatments, WHATSAPP_HREF } from '@/data/content';
import Reveal from './Reveal';

export default function Treatments() {
  const scrollToAppointment = () => {
    document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="treatments" className="py-24 sm:py-32 bg-ivory-100">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <Reveal className="max-w-2xl">
          <span className="text-[0.6rem] tracking-widest3 text-clay-500 font-medium uppercase">
            Treatments
          </span>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-[3.5rem] text-charcoal-900 font-light leading-[1.05] tracking-[-0.01em]">
            Treatments designed
            <br />
            <span className="italic">around you.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-charcoal-600 leading-relaxed font-light max-w-lg">
            From everyday skin concerns to advanced aesthetic treatments,
            explore personalized care for skin, hair and confidence.
          </p>
        </Reveal>

        {/* Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {treatments.map((t, i) => (
            <Reveal
              as="article"
              key={t.title}
              delay={(i % 3) * 90}
              className="group relative overflow-hidden rounded-xl bg-ivory-50 border border-ivory-300/50 transition-all duration-500 hover:shadow-lg hover:shadow-charcoal-900/8 hover:border-ivory-400/60"
            >
              {/* Image with refined crop */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={t.image}
                  alt={t.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/50 via-charcoal-900/5 to-transparent" />
                {/* Icon overlay */}
                <div className="absolute top-5 left-5 flex h-9 w-9 items-center justify-center rounded-full bg-ivory-50/85 backdrop-blur-sm border border-ivory-300/40">
                  <t.icon className="h-4 w-4 text-charcoal-800" strokeWidth={1.5} />
                </div>
                {/* Title on image */}
                <h3 className="absolute bottom-5 left-5 right-5 font-serif text-2xl text-ivory-50 font-normal leading-tight">
                  {t.title}
                </h3>
              </div>
              {/* Body */}
              <div className="p-6">
                <p className="text-sm text-charcoal-600 leading-relaxed font-light">
                  {t.description}
                </p>
                <button
                  onClick={scrollToAppointment}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-charcoal-900 group/link"
                >
                  Explore Treatment
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Closing contextual CTA */}
        <Reveal className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-xl border border-ivory-300/50 bg-ivory-50 px-7 sm:px-10 py-8">
          <div>
            <p className="font-serif text-xl sm:text-2xl text-charcoal-900 font-light">
              Not sure which treatment is right for you?
            </p>
            <p className="mt-2 text-sm text-charcoal-600 font-light max-w-lg">
              Book a consultation and our dermatologist will recommend a personalized plan after assessing your skin.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={scrollToAppointment}
              className="inline-flex items-center gap-2 rounded-full bg-charcoal-900 px-6 py-3.5 text-sm font-medium text-ivory-100 hover:bg-charcoal-800 transition-all duration-300 whitespace-nowrap"
            >
              Book Consultation
              <ArrowUpRight className="h-4 w-4" />
            </button>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-charcoal-900/15 px-6 py-3.5 text-sm font-medium text-charcoal-900 hover:border-charcoal-900/40 transition-all duration-300 whitespace-nowrap"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
              WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
