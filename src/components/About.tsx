import { Check, ArrowUpRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_HREF } from '@/data/content';
import Reveal from './Reveal';

const expertise = [
  'Dermatology',
  'Aesthetic medicine',
  'Laser treatments',
  'Personalized treatment plans',
];

export default function About() {
  const scrollToAppointment = () => {
    document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-24 sm:py-32 bg-ivory-50">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Portrait — 5 cols */}
        <Reveal className="relative lg:col-span-5 order-2 lg:order-1">
          <div className="relative aspect-[4/5] max-w-sm mx-auto lg:mx-0">
            <div className="absolute inset-0 rounded-xl overflow-hidden shadow-xl shadow-charcoal-900/12">
              <img
                src="https://images.pexels.com/photos/32160039/pexels-photo-32160039.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Dr. Ananya Sharma, Consultant Dermatologist"
                loading="lazy"
                className="h-full w-full object-cover"
                style={{ objectPosition: 'center 20%' }}
              />
            </div>
            {/* Credentials strip */}
            <div className="absolute -bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-[16rem] rounded-lg bg-charcoal-900 px-5 py-4 shadow-lg shadow-charcoal-900/20">
              <p className="font-serif text-lg text-ivory-50 font-normal leading-tight">
                Dr. Ananya Sharma
              </p>
              <p className="mt-1 text-[0.65rem] tracking-widest2 text-clay-300 uppercase">
                MBBS, MD — Dermatology
              </p>
            </div>
          </div>
        </Reveal>

        {/* Copy — 7 cols */}
        <Reveal className="lg:col-span-7 order-1 lg:order-2" delay={120}>
          <span className="text-[0.6rem] tracking-widest3 text-clay-500 font-medium uppercase">
            Your Dermatologist
          </span>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-[3.5rem] text-charcoal-900 font-light leading-[1.05] tracking-[-0.01em]">
            Meet your
            <br />
            <span className="italic">dermatologist.</span>
          </h2>
          <p className="mt-7 text-base sm:text-lg text-charcoal-600 leading-relaxed font-light max-w-xl">
            Dr. Ananya Sharma is a Consultant Dermatologist &amp; Aesthetic
            Physician with a thoughtful, evidence-led approach to skin, hair and
            laser care. She believes the best results come from understanding
            each person individually — their concerns, lifestyle and goals —
            before recommending any treatment.
          </p>
          <p className="mt-4 text-xs text-clay-500 font-medium tracking-wide">
            Sample demo profile — replace with the clinic's verified dermatologist details.
          </p>

          <div className="mt-9 grid grid-cols-2 gap-x-8 gap-y-4 max-w-md">
            {expertise.map((e) => (
              <div key={e} className="flex items-center gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage-500/12">
                  <Check className="h-3.5 w-3.5 text-sage-600" strokeWidth={2} />
                </div>
                <span className="text-sm font-medium text-charcoal-700 font-light">
                  {e}
                </span>
              </div>
            ))}
          </div>

          {/* Soft CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <button
              onClick={scrollToAppointment}
              className="group inline-flex items-center gap-2 rounded-full bg-charcoal-900 px-7 py-3.5 text-sm font-medium text-ivory-100 hover:bg-charcoal-800 transition-all duration-300"
            >
              Book a consultation with Dr. Sharma
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-charcoal-900/15 px-7 py-3.5 text-sm font-medium text-charcoal-900 hover:border-charcoal-900/40 transition-all duration-300"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
              Ask a question
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
