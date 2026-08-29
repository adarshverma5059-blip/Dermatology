import { MapPin, Phone, MessageCircle, Navigation } from 'lucide-react';
import { PHONE_HREF, WHATSAPP_HREF, MAPS_HREF } from '@/data/content';
import Reveal from './Reveal';

export default function Location() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-ivory-100">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <Reveal className="max-w-2xl">
          <span className="text-[0.6rem] tracking-widest3 text-clay-500 font-medium uppercase">
            Visit Us
          </span>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-[3.5rem] text-charcoal-900 font-light leading-[1.05] tracking-[-0.01em]">
            Visit the
            <br />
            <span className="italic">clinic.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
          {/* Map — 7 cols */}
          <Reveal className="lg:col-span-7 relative rounded-xl overflow-hidden min-h-[22rem] lg:min-h-[28rem]">
            <iframe
              title="Clinic location — Sector 18, Noida"
              src="https://www.google.com/maps?q=Sector+18+Noida+Uttar+Pradesh&output=embed"
              className="absolute inset-0 h-full w-full"
              style={{ filter: 'grayscale(0.3) contrast(0.95)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>

          {/* Details — 5 cols */}
          <Reveal delay={120} className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-500/10">
                <MapPin className="h-4 w-4 text-sage-600" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[0.6rem] tracking-widest3 text-clay-500 uppercase font-medium">
                  Clinic Address
                </p>
                <p className="mt-2.5 font-serif text-2xl text-charcoal-900 font-light leading-snug">
                  Sector 18, Noida
                </p>
                <p className="text-charcoal-600 font-light">Uttar Pradesh, India</p>
                <p className="mt-3 text-xs text-clay-500 font-medium">
                  Demo location — replace with the clinic's actual address.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={MAPS_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-charcoal-900 px-6 py-3.5 text-sm font-medium text-ivory-100 hover:bg-charcoal-800 transition-colors"
              >
                <Navigation className="h-4 w-4" strokeWidth={1.5} />
                Get Directions
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 rounded-full border border-charcoal-900/15 px-6 py-3.5 text-sm font-medium text-charcoal-900 hover:border-charcoal-900/40 transition-colors"
              >
                <Phone className="h-4 w-4" strokeWidth={1.5} />
                Call
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-charcoal-900/15 px-6 py-3.5 text-sm font-medium text-charcoal-900 hover:border-charcoal-900/40 transition-colors"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
                WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
