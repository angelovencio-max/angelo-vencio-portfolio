'use client';
import React from 'react';
import { Info, Image as ImageIcon, MessageSquareQuote } from 'lucide-react';

interface PlaceholderBadgeProps {
  type?: 'result' | 'image' | 'testimonial';
  text?: string;
  variant?: 'default' | 'cyan';
  className?: string;
}

export const PlaceholderBadge: React.FC<PlaceholderBadgeProps> = ({
  type = 'result',
  text,
  variant = 'default',
  className = '',
}) => {
  const getIcon = () => {
    switch (type) {
      case 'image':
        return <ImageIcon className="w-3.5 h-3.5 text-[#08C4D4]" />;
      case 'testimonial':
        return <MessageSquareQuote className="w-3.5 h-3.5 text-[#08C4D4]" />;
      case 'result':
      default:
        return <Info className="w-3.5 h-3.5 text-[#08C4D4]" />;
    }
  };

  const defaultText = text || (type === 'image' ? '[CASE STUDY IMAGE]' : type === 'testimonial' ? '[TESTIMONIAL]' : '[RESULT TO BE ADDED]');

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded border border-dashed border-[#08C4D4]/40 bg-[#E6F9FC] text-xs font-mono text-[#071A2B] font-semibold tracking-wide ${className}`}
      title="Verified project data placeholder"
    >
      {getIcon()}
      <span>{defaultText}</span>
    </div>
  );
};
