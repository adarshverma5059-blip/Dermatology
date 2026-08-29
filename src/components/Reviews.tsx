import { Star, ArrowUpRight, MessageCircle } from 'lucide-react';
import { reviews, WHATSAPP_HREF } from '@/data/content';
import Reveal from './Reveal';

export default function Reviews() {
  const scrollToAppointment = () => {
    document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-ivory-50">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <Reveal className="max-w-2xl">
          <span className="text-[0.6rem] tracking-widest3 text-clay-500 font-medium uppercase">
            Reviews
          </span>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-[3.5rem] text-charcoal-900 font-light leading-[1.05] tracking-[-0.01em]">
            What patients
            <br />
            <span className="italic">say.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-8 lg:gap-10">
          {reviews.map((r, i) => (
            <Reveal
              as="article"
              key={r.name}
              delay={i * 100}
              className="flex flex-col"
            >
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-clay-400 text-clay-400" strokeWidth={0} />
                ))}
              </div>
              <p className="font-serif text-xl sm:text-2xl text-charcoal-800 leading-[1.4] font-light italic">
                "{r.text}"
              </p>
              <div className="mt-7 pt-5 border-t border-ivory-300/50">
                <p className="text-sm font-medium text-charcoal-900">{r.name}</p>
                <p className="text-xs text-charcoal-500/60 mt-0.5">{r.concern}</p>
              </div>
              <p className="mt-4 text-[0.6rem] text-clay-500 font-medium tracking-wide">
                Sample testimonial — replace with verified patient review.
              </p>
            </Reveal>
          ))}
        </div>

        {/* Closing CTA after social proof */}
        <Reveal className="mt-16 text-center">
          <p className="font-serif text-2xl sm:text-3xl text-charcoal-900 font-light italic">
            Ready to begin your own journey?
          </p>
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={scrollToAppointment}
              className="group inline-flex items-center gap-2 rounded-full bg-charcoal-900 px-8 py-4 text-sm font-medium text-ivory-100 hover:bg-charcoal-800 transition-all duration-300"
            >
              Book a Consultation
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-charcoal-900/15 px-8 py-4 text-sm font-medium text-charcoal-900 hover:border-charcoal-900/40 transition-all duration-300"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
