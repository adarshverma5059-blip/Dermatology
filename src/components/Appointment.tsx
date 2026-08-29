import { useState, type FormEvent } from 'react';
import { CheckCircle2, MessageCircle, CalendarDays, Loader2, ShieldCheck } from 'lucide-react';
import { WHATSAPP_HREF } from '@/data/content';
import Reveal from './Reveal';

interface FormData {
  fullName: string;
  phone: string;
  concern: string;
  preferredDate: string;
  preferredTime: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  concern?: string;
  preferredDate?: string;
  preferredTime?: string;
}

const initialData: FormData = {
  fullName: '',
  phone: '',
  concern: '',
  preferredDate: '',
  preferredTime: '',
};

const timeSlots = ['10:00', '12:00', '14:00', '16:00', '18:00'];

export default function Appointment() {
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!data.fullName.trim()) e.fullName = 'Please enter your full name.';
    else if (data.fullName.trim().length < 2) e.fullName = 'Name is too short.';

    if (!data.phone.trim()) e.phone = 'Please enter your phone number.';
    else if (!/^[+]?[\d\s-]{8,15}$/.test(data.phone.trim()))
      e.phone = 'Enter a valid phone number.';

    if (!data.concern) e.concern = 'Please select a primary concern.';
    if (!data.preferredDate) e.preferredDate = 'Please choose a preferred date.';
    if (!data.preferredTime) e.preferredTime = 'Please choose a preferred time.';

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setData((d) => ({ ...d, [field]: value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
    }, 1100);
  };

  const reset = () => {
    setData(initialData);
    setErrors({});
    setSuccess(false);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section
      id="appointment"
      className="py-24 sm:py-32 bg-charcoal-950 text-ivory-100 relative overflow-hidden"
    >
      <div className="pointer-events-none absolute top-0 right-0 h-[30rem] w-[30rem] rounded-full bg-sage-700/8 blur-[6rem]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[25rem] w-[25rem] rounded-full bg-clay-600/8 blur-[5rem]" />

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        {/* Left copy — 5 cols */}
        <Reveal className="lg:col-span-5">
          <span className="text-[0.6rem] tracking-widest3 text-clay-300 font-medium uppercase">
            Book Consultation
          </span>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-[3.5rem] text-ivory-50 font-light leading-[1.05] tracking-[-0.01em]">
            Ready to feel
            <br />
            confident in
            <br />
            <span className="italic">your skin?</span>
          </h2>
          <p className="mt-7 text-base sm:text-lg text-ivory-200/60 leading-relaxed font-light max-w-sm">
            Book a personalized consultation with our dermatology team.
          </p>

          {/* Reassurance points */}
          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3 text-sm text-ivory-200/50 font-light">
              <CalendarDays className="h-4 w-4 text-clay-300 shrink-0" strokeWidth={1.5} />
              We'll confirm your appointment within one business day.
            </div>
            <div className="flex items-center gap-3 text-sm text-ivory-200/50 font-light">
              <ShieldCheck className="h-4 w-4 text-clay-300 shrink-0" strokeWidth={1.5} />
              No obligation — the consultation is simply a conversation.
            </div>
          </div>

          {/* Quick WhatsApp alternative */}
          <div className="mt-8 pt-6 border-t border-ivory-200/10">
            <p className="text-sm text-ivory-200/40 font-light">
              Prefer to talk first?
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-full border border-ivory-200/20 px-6 py-3 text-sm font-medium text-ivory-100 hover:bg-ivory-50/5 transition-colors"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
              Chat with us on WhatsApp
            </a>
          </div>
        </Reveal>

        {/* Form / success — 7 cols */}
        <Reveal delay={120} className="lg:col-span-7">
          {success ? (
            <div className="rounded-xl bg-ivory-50/[0.04] backdrop-blur-sm border border-ivory-200/10 p-10 sm:p-12 text-center animate-fade-up">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sage-500/15">
                <CheckCircle2 className="h-8 w-8 text-sage-400" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 font-serif text-3xl text-ivory-50 font-light">
                Thank you.
              </h3>
              <p className="mt-3 text-ivory-200/60 leading-relaxed font-light max-w-sm mx-auto">
                Your consultation request has been received. Our team will
                contact you shortly to confirm your appointment.
              </p>
              <button
                onClick={reset}
                className="mt-8 rounded-full border border-ivory-200/20 px-6 py-3 text-sm font-medium text-ivory-100 hover:bg-ivory-50/5 transition-colors"
              >
                Book another appointment
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-xl bg-ivory-50/[0.04] backdrop-blur-sm border border-ivory-200/10 p-6 sm:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full Name" error={errors.fullName}>
                  <input
                    type="text"
                    value={data.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    placeholder="Your name"
                    className="form-input"
                  />
                </Field>
                <Field label="Phone Number" error={errors.phone}>
                  <input
                    type="tel"
                    value={data.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="+91 98765 43210"
                    className="form-input"
                  />
                </Field>
              </div>

              <Field label="Primary Concern" error={errors.concern}>
                <select
                  value={data.concern}
                  onChange={(e) => handleChange('concern', e.target.value)}
                  className="form-input"
                >
                  <option value="">Select a concern</option>
                  <option value="Acne & Acne Scars">Acne &amp; Acne Scars</option>
                  <option value="Laser Hair Removal">Laser Hair Removal</option>
                  <option value="Hair Fall & PRP">Hair Fall &amp; PRP</option>
                  <option value="Pigmentation">Pigmentation</option>
                  <option value="Skin Rejuvenation">Skin Rejuvenation</option>
                  <option value="Hydrafacial">Hydrafacial</option>
                  <option value="Anti-Ageing">Anti-Ageing</option>
                  <option value="Hair Restoration">Hair Restoration</option>
                  <option value="General Consultation">General Consultation</option>
                </select>
              </Field>

              <Field label="Preferred Date" error={errors.preferredDate}>
                <input
                  type="date"
                  min={today}
                  value={data.preferredDate}
                  onChange={(e) => handleChange('preferredDate', e.target.value)}
                  className="form-input"
                />
              </Field>

              {/* Time slot quick-pick */}
              <Field label="Preferred Time" error={errors.preferredTime}>
                <div className="flex flex-wrap gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => handleChange('preferredTime', slot)}
                      className={`rounded-lg px-4 py-2.5 text-sm font-light transition-all duration-200 ${
                        data.preferredTime === slot
                          ? 'bg-ivory-50 text-charcoal-900 border border-ivory-50'
                          : 'border border-ivory-200/15 text-ivory-200/60 hover:border-ivory-200/30 hover:text-ivory-100'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                  <input
                    type="time"
                    value={data.preferredTime && !timeSlots.includes(data.preferredTime) ? data.preferredTime : ''}
                    onChange={(e) => handleChange('preferredTime', e.target.value)}
                    className="form-input !w-auto !py-2.5 !px-3 text-xs min-w-[5.5rem]"
                    aria-label="Or pick a custom time"
                  />
                </div>
              </Field>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ivory-50 px-7 py-4 text-sm font-medium text-charcoal-900 hover:bg-ivory-200 transition-all duration-300 disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Request Appointment'
                  )}
                </button>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory-200/20 px-7 py-4 text-sm font-medium text-ivory-100 hover:bg-ivory-50/5 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Friction-reducing microcopy */}
              <p className="text-[0.7rem] text-ivory-200/35 font-light pt-1">
                Takes less than a minute. We'll call you to confirm — no payment needed to book.
              </p>
            </form>
          )}
        </Reveal>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          border-radius: 0.625rem;
          background: rgba(250, 247, 241, 0.05);
          border: 1px solid rgba(250, 247, 241, 0.12);
          padding: 0.875rem 1rem;
          color: #faf7f1;
          font-size: 0.875rem;
          font-weight: 300;
          transition: border-color 0.3s, background 0.3s;
          outline: none;
        }
        .form-input::placeholder { color: rgba(250,247,241,0.35); }
        .form-input:focus {
          border-color: rgba(184, 152, 120, 0.5);
          background: rgba(250, 247, 241, 0.08);
        }
        .form-input option { color: #1a1714; }
      `}</style>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-[0.65rem] font-medium tracking-widest2 text-ivory-200/50 mb-2.5 uppercase">
        {label}
      </span>
      {children}
      {error && (
        <span className="block mt-1.5 text-xs text-red-300/80">{error}</span>
      )}
    </label>
  );
}
