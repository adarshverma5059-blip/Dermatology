import { Phone, MessageCircle, CalendarDays } from 'lucide-react';
import { PHONE_HREF, WHATSAPP_HREF } from '@/data/content';

export default function MobileBar() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-ivory-100/95 backdrop-blur-xl border-t border-ivory-300/50 px-4 py-3 flex items-center gap-2.5">
      <a
        href={PHONE_HREF}
        className="flex flex-1 flex-col items-center gap-1 rounded-lg py-2 text-charcoal-700 active:bg-ivory-200/60 transition-colors"
      >
        <Phone className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.5} />
        <span className="text-[0.62rem] font-medium tracking-wide">Call</span>
      </a>
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 flex-col items-center gap-1 rounded-lg py-2 text-charcoal-700 active:bg-ivory-200/60 transition-colors"
      >
        <MessageCircle className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.5} />
        <span className="text-[0.62rem] font-medium tracking-wide">WhatsApp</span>
      </a>
      <button
        onClick={() => scrollTo('#appointment')}
        className="flex flex-[1.5] items-center justify-center gap-2 rounded-full bg-charcoal-900 py-3.5 text-sm font-medium text-ivory-100 active:bg-charcoal-800 transition-colors"
      >
        <CalendarDays className="h-4 w-4" strokeWidth={1.5} />
        Book Consultation
      </button>
    </div>
  );
}
