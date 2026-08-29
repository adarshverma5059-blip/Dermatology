import Reveal from './Reveal';

const metrics = [
  { value: '10+', label: 'Years' },
  { value: '5,000+', label: 'Patients' },
  { value: '4.9', suffix: '/5', label: 'Rating' },
  { value: 'Advanced', label: 'Laser Tech' },
];

export default function TrustMetrics() {
  return (
    <section className="py-14 sm:py-16 bg-ivory-50 border-y border-ivory-300/40">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <Reveal className="flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-4">
          <p className="text-[0.6rem] tracking-widest3 text-clay-500 font-medium uppercase whitespace-nowrap">
            Sample metrics
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 sm:gap-x-14 gap-y-6">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className={`flex items-baseline gap-2 ${
                  i > 0 ? 'sm:border-l sm:border-ivory-300/50 sm:pl-14' : ''
                }`}
              >
                <span className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-light tracking-tight">
                  {m.value}
                  {m.suffix && (
                    <span className="text-lg text-clay-400">{m.suffix}</span>
                  )}
                </span>
                <span className="text-[0.65rem] tracking-widest2 text-charcoal-500/70 uppercase font-medium">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
