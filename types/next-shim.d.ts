declare module 'next/link' {
  import React from 'react';
  export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children?: React.ReactNode;
  }
  const Link: React.FC<LinkProps>;
  export default Link;
}

declare module 'next/navigation' {
  export function usePathname(): string;
  export function useParams(): Record<string, string>;
  export function notFound(): never;
}

declare module 'next' {
  export interface Metadata {
    title?: string;
    description?: string;
    keywords?: string[];
    authors?: { name: string }[];
    creator?: string;
    openGraph?: any;
    twitter?: any;
    icons?: any;
  }
  export interface Viewport {
    themeColor?: string;
    width?: string;
    initialScale?: number;
  }
}
