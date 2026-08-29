import {
  Droplet,
  Sparkles,
  Waves,
  ScanLine,
  Leaf,
  Flower2,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

export interface Treatment {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
}

export const treatments: Treatment[] = [
  {
    title: 'Acne & Acne Scars',
    description:
      'Targeted medical-grade protocols to calm active breakouts and refine acne-scarred texture over time.',
    image:
      'https://images.pexels.com/photos/5588005/pexels-photo-5588005.jpeg?auto=compress&cs=tinysrgb&w=900',
    icon: Droplet,
  },
  {
    title: 'Laser Hair Removal',
    description:
      'Advanced diode laser technology for safe, gradual hair reduction across all skin tones.',
    image:
      'https://images.pexels.com/photos/12556700/pexels-photo-12556700.jpeg?auto=compress&cs=tinysrgb&w=900',
    icon: ScanLine,
  },
  {
    title: 'Hair Fall & PRP',
    description:
      'Platelet-rich plasma therapy and dermatologist-guided plans to support healthier hair growth.',
    image:
      'https://images.pexels.com/photos/9755382/pexels-photo-9755382.jpeg?auto=compress&cs=tinysrgb&w=900',
    icon: Leaf,
  },
  {
    title: 'Pigmentation',
    description:
      'Even-toned, brighter skin with personalised protocols for melasma, dark spots and sun damage.',
    image:
      'https://images.pexels.com/photos/3064717/pexels-photo-3064717.jpeg?auto=compress&cs=tinysrgb&w=900',
    icon: Flower2,
  },
  {
    title: 'Skin Rejuvenation',
    description:
      'Medical facials and resurfacing treatments designed to restore radiance and skin vitality.',
    image:
      'https://images.pexels.com/photos/7446656/pexels-photo-7446656.jpeg?auto=compress&cs=tinysrgb&w=900',
    icon: Sparkles,
  },
  {
    title: 'Hydrafacial',
    description:
      'Deep-cleanse, exfoliate and hydrate in one soothing session for an instant healthy glow.',
    image:
      'https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=900',
    icon: Waves,
  },
  {
    title: 'Anti-Ageing',
    description:
      'Subtle, natural-looking refinement with collagen-stimulating treatments tailored to you.',
    image:
      'https://images.pexels.com/photos/29648624/pexels-photo-29648624.jpeg?auto=compress&cs=tinysrgb&w=900',
    icon: Clock,
  },
  {
    title: 'Hair Restoration',
    description:
      'Evidence-based medical and procedural options to address thinning and restore confidence.',
    image:
      'https://images.pexels.com/photos/28994388/pexels-photo-28994388.jpeg?auto=compress&cs=tinysrgb&w=900',
    icon: ShieldCheck,
  },
];

export interface ResultCase {
  tab: string;
  label: string;
  image: string;
  description: string;
}

export const resultCases: ResultCase[] = [
  {
    tab: 'Acne',
    label: 'Acne management',
    image:
      'https://images.pexels.com/photos/8589763/pexels-photo-8589763.jpeg?auto=compress&cs=tinysrgb&w=1100',
    description:
      'A structured medical protocol combining topical care and in-clinic sessions over several weeks.',
  },
  {
    tab: 'Pigmentation',
    label: 'Pigmentation care',
    image:
      'https://images.pexels.com/photos/3064717/pexels-photo-3064717.jpeg?auto=compress&cs=tinysrgb&w=1100',
    description:
      'Gradual brightening with personalised topical and procedural support, monitored by your dermatologist.',
  },
  {
    tab: 'Hair',
    label: 'Hair fall support',
    image:
      'https://images.pexels.com/photos/9755382/pexels-photo-9755382.jpeg?auto=compress&cs=tinysrgb&w=1100',
    description:
      'PRP sessions paired with a medical plan to support scalp health and hair strength.',
  },
  {
    tab: 'Laser',
    label: 'Laser hair reduction',
    image:
      'https://images.pexels.com/photos/4586726/pexels-photo-4586726.jpeg?auto=compress&cs=tinysrgb&w=1100',
    description:
      'Progressive sessions with calibrated laser settings for comfortable, gradual hair reduction.',
  },
];

export interface Review {
  name: string;
  concern: string;
  text: string;
  initials: string;
}

export const reviews: Review[] = [
  {
    name: 'P. Mehra',
    concern: 'Acne treatment',
    initials: 'PM',
    text: 'My skin feels calmer than it has in years. The team explained every step and never rushed me.',
  },
  {
    name: 'S. Iyer',
    concern: 'Laser hair removal',
    initials: 'SI',
    text: 'Comfortable sessions and honest guidance. I always knew what to expect at each visit.',
  },
  {
    name: 'R. Kapoor',
    concern: 'Hair fall & PRP',
    initials: 'RK',
    text: 'Personalised care made all the difference. My hair feels stronger and healthier.',
  },
];

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: 'How do I book a consultation?',
    answer:
      'Use the Book Consultation form on this page, call the clinic, or message us on WhatsApp. Our team will confirm your preferred date and time.',
  },
  {
    question: 'How many sessions are needed for laser hair removal?',
    answer:
      'The number of sessions varies by area, skin type and hair growth. Most people see gradual results over a course of sessions — your dermatologist will recommend a plan after an assessment.',
  },
  {
    question: 'Is PRP suitable for everyone?',
    answer:
      'PRP is not suitable for everyone. A consultation helps determine if it is appropriate for your specific concerns. We recommend a professional assessment before deciding.',
  },
  {
    question: 'How should I prepare for a dermatology consultation?',
    answer:
      'Come with a list of your current skincare products, any medications, and your concerns. Avoid active treatments on the skin for a day or two before your visit.',
  },
  {
    question: 'Do you offer personalized treatment plans?',
    answer:
      'Yes. Every plan is tailored to your skin type, goals and medical history after a detailed consultation with our dermatologist.',
  },
  {
    question: 'How can I contact the clinic?',
    answer:
      'You can reach us by phone, WhatsApp, or the contact form on this page. Our team responds during clinic hours.',
  },
];

export const WHATSAPP_NUMBER = '919999999999';
export const PHONE_NUMBER = '+91 99999 99999';
export const PHONE_HREF = 'tel:+919999999999';
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hello DERMAVÉA, I would like to book a consultation.'
)}`;
export const MAPS_HREF =
  'https://www.google.com/maps/search/?api=1&query=Sector+18+Noida+Uttar+Pradesh';
