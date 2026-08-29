import { ArrowUpRight } from 'lucide-react';
import { WHATSAPP_HREF } from '@/data/content';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-end lg:items-center pt-32 pb-12 lg:pb-0 overflow-hidden bg-ivory-100"
    >
      {/* ambient warmth */}
      <div className="pointer-events-none absolute top-0 right-0 h-[40rem] w-[40rem] rounded-full bg-clay-200/25 blur-[6rem]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[30rem] w-[30rem] rounded-full bg-sage-300/15 blur-[5rem]" />

      <div className="relative mx-auto max-w-[1400px] w-full px-6 sm:px-10">
        {/* Mobile: stacked */}
        <div className="lg:hidden">
          <div className="animate-fade-up">
            <span className="text-[0.62rem] tracking-widest3 text-clay-500 font-medium uppercase">
              Advanced Dermatology & Aesthetics
            </span>
            <h1 className="mt-5 font-serif text-[2.75rem] leading-[1.02] text-charcoal-900 font-light tracking-[-0.01em]">
              Science-led skin,
              <br />
              hair &amp; laser care.
            </h1>
            <p className="mt-5 max-w-sm text-[0.95rem] text-charcoal-600 leading-relaxed font-light">
              Personalized dermatology and aesthetic treatments designed around
              your skin, your goals, and your confidence.
            </p>
            <div className="mt-7 flex gap-3">
              <button
                onClick={() => scrollTo('#appointment')}
                className="group inline-flex items-center gap-2 rounded-full bg-charcoal-900 px-6 py-3.5 text-sm font-medium text-ivory-100 hover:bg-charcoal-800 transition-all duration-300"
              >
                Book a Consultation
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-charcoal-900/15 bg-ivory-50 px-6 py-3.5 text-sm font-medium text-charcoal-900 hover:border-charcoal-900/40 transition-all duration-300"
              >
                WhatsApp Us
              </a>
            </div>
            <p className="mt-6 text-xs text-charcoal-500/70 tracking-wide font-light">
              Personalized care · Advanced technology · Dermatologist-led
            </p>
          </div>

          {/* Mobile image */}
          <div className="mt-8 relative animate-fade-in">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7446672/pexels-photo-7446672.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Dermatologist examining a patient's skin"
                className="h-full w-full object-cover object-top"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/25 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Desktop: editorial split */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center">
          {/* Left: copy — 5 cols */}
          <div className="col-span-5 animate-fade-up">
            <span className="text-[0.62rem] tracking-widest3 text-clay-500 font-medium uppercase">
              Advanced Dermatology & Aesthetics
            </span>
            <h1 className="mt-6 font-serif text-[4.5rem] leading-[0.98] text-charcoal-900 font-light tracking-[-0.02em]">
              Science-led
              <br />
              skin, hair &amp;
              <br />
              <span className="italic font-normal">laser care.</span>
            </h1>
            <p className="mt-8 max-w-md text-lg text-charcoal-600 leading-relaxed font-light">
              Personalized dermatology and aesthetic treatments designed around
              your skin, your goals, and your confidence.
            </p>
            <div className="mt-10 flex gap-4">
              <button
                onClick={() => scrollTo('#appointment')}
                className="group inline-flex items-center gap-2 rounded-full bg-charcoal-900 px-8 py-4 text-sm font-medium text-ivory-100 hover:bg-charcoal-800 transition-all duration-300"
              >
                Book a Consultation
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-charcoal-900/15 bg-transparent px-8 py-4 text-sm font-medium text-charcoal-900 hover:border-charcoal-900/40 hover:bg-ivory-50 transition-all duration-300"
              >
                WhatsApp Us
              </a>
            </div>
            <p className="mt-8 text-sm text-charcoal-500/70 tracking-wide font-light">
              Personalized care · Advanced technology · Dermatologist-led
            </p>
          </div>

          {/* Right: image — 7 cols, full bleed feel */}
          <div className="col-span-7 animate-slide-in">
            <div className="relative h-[78vh] max-h-[42rem]">
              <div className="absolute inset-0 rounded-[1.5rem] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7446672/pexels-photo-7446672.jpeg?auto=compress&cs=tinysrgb&w=1400"
                  alt="Dermatologist examining a patient's skin with advanced technology"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: 'center 25%' }}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/15 via-transparent to-transparent" />
              </div>

              {/* minimal caption strip */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="font-serif text-xl text-ivory-50 font-light leading-tight max-w-[14rem]">
                    Dermatologist-led
                    <br />
                    personalized care
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-serif text-3xl text-ivory-50 font-light leading-none">
                    4.9
                    <span className="text-base text-ivory-200/70">/5</span>
                  </p>
                  <p className="mt-1 text-[0.6rem] tracking-widest2 text-ivory-200/60 uppercase">
                    Sample rating
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
