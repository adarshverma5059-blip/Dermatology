import { type ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'li' | 'article' | 'span';
}

/**
 * Wraps children in a scroll-triggered fade-up reveal.
 */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  as = 'div',
}: RevealProps) {
  const { ref, visible } = useReveal();
  const Tag = as as 'div';
  return (
    <Tag
      ref={ref as never}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
