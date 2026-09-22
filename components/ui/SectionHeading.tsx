import React from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  alignment?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  alignment = 'left',
  className = '',
}) => {
  return (
    <div
      className={`space-y-3 ${
        alignment === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'
      } ${className}`}
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-accent-gold/10 border border-accent-gold/20 text-accent-gold font-mono text-xs tracking-widest uppercase">
        <span>{eyebrow}</span>
      </div>
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
        {title}
      </h2>
      {description && (
        <p className="font-sans text-base sm:text-lg text-muted leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
