import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { PHONE_HREF, WHATSAPP_HREF } from '@/data/content';

const links = [
  { label: 'Treatments', href: '#treatments' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
];

export default function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-950 text-ivory-100 pt-20 pb-28 lg:pb-14">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand — 5 cols */}
          <div className="lg:col-span-5">
            <p className="font-serif text-[1.6rem] tracking-[0.14em] text-ivory-50 font-medium">
              DERMAVÉA
            </p>
            <p className="mt-1.5 text-[0.58rem] tracking-widest3 text-clay-300 uppercase font-normal">
              Skin · Hair · Laser · Aesthetics
            </p>
            <p className="mt-6 max-w-xs text-sm text-ivory-200/50 leading-relaxed font-light">
              Science-led dermatology and aesthetic care, personalized around
              your skin and confidence.
            </p>
          </div>

          {/* Links — 4 cols */}
          <div className="lg:col-span-4">
            <p className="text-[0.58rem] tracking-widest3 text-ivory-200/40 uppercase font-medium mb-5">
              Explore
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3.5">
              {links.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => l.href.startsWith('#') && l.href.length > 1 ? handleNav(l.href) : undefined}
                    className="text-sm text-ivory-200/60 hover:text-ivory-50 transition-colors font-light"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — 3 cols */}
          <div className="lg:col-span-3">
            <p className="text-[0.58rem] tracking-widest3 text-ivory-200/40 uppercase font-medium mb-5">
              Contact
            </p>
            <ul className="space-y-3.5 text-sm text-ivory-200/60 font-light">
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-clay-300" strokeWidth={1.5} />
                Sector 18, Noida, UP
              </li>
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-3 hover:text-ivory-50 transition-colors"
                >
                  <Phone className="h-4 w-4 text-clay-300" strokeWidth={1.5} />
                  Call Clinic
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-ivory-50 transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-clay-300" strokeWidth={1.5} />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-ivory-200/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ivory-200/35 font-light">
            © {new Date().getFullYear()} DERMAVÉA. All rights reserved.
          </p>
          <p className="text-xs text-clay-400/50 font-light">
            Demo website created for presentation purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
