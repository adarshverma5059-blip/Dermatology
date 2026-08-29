import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'About', href: '#about' },
  { label: 'Results', href: '#results' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ivory-100/85 backdrop-blur-xl border-b border-ivory-300/50 py-3.5'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav('#home')}
          className="flex flex-col items-start leading-none"
          aria-label="DERMAVÉA home"
        >
          <span className="font-serif text-[1.6rem] sm:text-[1.85rem] tracking-[0.14em] text-charcoal-900 font-medium">
            DERMAVÉA
          </span>
          <span className="text-[0.55rem] sm:text-[0.6rem] tracking-widest3 text-clay-500 mt-1 font-normal uppercase">
            Skin · Hair · Laser
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="relative text-[0.8rem] font-medium text-charcoal-600 hover:text-charcoal-900 transition-colors duration-300 group tracking-wide"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-clay-500 transition-all duration-400 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <button
            onClick={() => handleNav('#appointment')}
            className="rounded-full bg-charcoal-900 px-7 py-3 text-[0.8rem] font-medium text-ivory-100 hover:bg-charcoal-800 transition-all duration-300 tracking-wide"
          >
            Book Consultation
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 -mr-2 text-charcoal-900"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-0 px-6 pt-8 pb-10 bg-ivory-100 border-t border-ivory-300/50 mt-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left font-serif text-3xl text-charcoal-900 py-4 border-b border-ivory-300/40 hover:text-clay-500 transition-colors font-light"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#appointment')}
            className="mt-6 rounded-full bg-charcoal-900 px-6 py-4 text-sm font-medium text-ivory-100 tracking-wide"
          >
            Book Consultation
          </button>
        </nav>
      </div>
    </header>
  );
}
