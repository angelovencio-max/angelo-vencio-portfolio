export interface BrandLogo {
  name: string;
  category: string;
  logo?: string;
}

export interface OutcomePillar {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface AdvantagePillar {
  title: string;
  icon: string;
}

export interface Capability {
  number: string;
  title: string;
  description: string;
}

export interface HeroConfig {
  eyebrow: string;
  hookHeadline: string;
  hookHeadlineAccent?: string;
  supportingCopy: string;
  googleCert: string;
  googleCertId?: string;
  primaryCta: string;
  secondaryCta: string;
  image?: string;
}

export const siteConfig = {
  name: "Angelo Vencio",
  title: "Angelo Vencio — AI Creative Strategist & eCommerce Operator",
  description: "Angelo Vencio helps eCommerce brands build AI-powered creative systems to launch, test, and find winning ads faster.",
  url: "https://angelovencio.com",
  hero: {
    eyebrow: "AI CREATIVE STRATEGIST / E-COMMERCE OPERATOR",
    hookHeadline: "Creating More Ads,",
    hookHeadlineAccent: "But Not More Sales?",
    supportingCopy: "Tired of guessing what's working?",
    googleCert: "Google Certified for Digital Marketing",
    primaryCta: "FREE 15-minute Discovery Call →",
    secondaryCta: "See How It Works →",
    image: "/images/Hero Photo.JPG",
  } as HeroConfig,
  advantageStrip: {
    headline: "MORE THAN SERVICES. A SYSTEM FOR SUSTAINABLE GROWTH.",
    pillars: [
      { title: "EXPERIENCE ACROSS MULTIPLE INDUSTRIES", icon: "Target" },
      { title: "AI-POWERED STRATEGIES & AUTOMATION", icon: "Cpu" },
      { title: "PROVEN MARKETING & SALES SYSTEMS", icon: "TrendingUp" },
      { title: "BUILT FOR LONG-TERM SCALE", icon: "Zap" },
    ] as AdvantagePillar[],
  },
  howIHelp: {
    eyebrow: "HOW I HELP YOU",
    headline: "STRATEGY. SYSTEMS. EXECUTION. ALL IN ONE PARTNER.",
    copy: "I work with eCommerce founders and growth-minded teams to build the systems, processes, and creative strategies that turn ideas into consistent results.",
  },
  brandsSection: {
    eyebrow: "BRAND PARTNERSHIPS",
    headline: "BRANDS & BUSINESSES I WORKED WITH",
  },
  brandLogos: [
    { name: "GSD Venture Studios", category: "Silicon Valley venture builder and hyper-accelerator", logo: "/images/1630613294854.jpeg" },
    { name: "Next Level Consulting", category: "Consulting and Services in San Francisco, CA.", logo: "/images/1630584715593.jpeg" },
    { name: "Gencys Group", category: "Philippine-based holding company, e-commerce enabler, and business acceleration ecosystem", logo: "/images/Gencys.jpg" },
    { name: "Mata Technologies", category: "Provider of virtual tours for real estate and tourism in the Philippines.", logo: "/images/MATA.png" },
  ] as BrandLogo[],
  theResult: {
    eyebrow: "THE RESULT",
    headline: "LESS DEPENDENCY. MORE MOMENTUM.",
    copy: "You get a reliable partner who builds systems, optimizes performance, and helps your team work smarter — not harder.",
    cta: "Book a Consultation →",
    outcomes: [
      {
        id: "more-time",
        title: "MORE TIME",
        description: "Free yourself from constant approvals and day-to-day tasks.",
        icon: "Clock",
      },
      {
        id: "better-performance",
        title: "BETTER PERFORMANCE",
        description: "Data-driven decisions and continuous testing lead to stronger results.",
        icon: "TrendingUp",
      },
      {
        id: "stronger-team",
        title: "STRONGER TEAM",
        description: "Build systems your team can execute — without relying on you.",
        icon: "Users",
      },
      {
        id: "long-term-growth",
        title: "LONG-TERM GROWTH",
        description: "Turn short-term wins into sustainable scale.",
        icon: "Infinity",
      },
    ] as OutcomePillar[],
  },
  allWorks: {
    eyebrow: "COMPLETE PORTFOLIO ARCHITECTURE",
    headline: "ALL WORKS & PROJECTS",
    copy: "Explore comprehensive showcases across video production, high-converting ad graphics, strategic case studies, and verified testimonials.",
  },
  workWithMe: {
    eyebrow: "WORK WITH ME",
    headline: "LET'S BUILD YOUR NEXT CHAPTER.",
    copy: "If you're an eCommerce founder or growth-minded team looking for a strategic partner to build AI-powered creative and growth systems, let's talk.",
    buttonText: "Book a Consultation →",
    sideHeadline: "STRONGER SYSTEMS. BIGGER OPPORTUNITIES.",
    sideSignature: "Let's Build It.",
  },
  contact: {
    email: "angelo@angelovencio.com",
    linkedin: "https://linkedin.com/in/angelovencio",
    calendarUrl: "https://tidycal.com/avisuals/30min",
  },
};

export const aboutContent = {
  headline: "A CREATIVE WHO THINKS IN SYSTEMS.",
  p1: "Angelo Vencio works at the intersection of creative strategy, eCommerce, AI, marketing, and sales.",
  p2: "His work has evolved from producing content and video into building the systems behind creative production, testing, marketing, and growth.",
  clientValue: "You don't just get another pair of hands. You get someone who can look at the creative, the system behind it, and the business problem they're meant to solve.",
  image: "/images/Angelo V.jpg",
};

export const capabilities: Capability[] = [
  {
    number: "01",
    title: "AI CREATIVE SYSTEMS",
    description: "Automate content creation, ideation, and testing with AI.",
  },
  {
    number: "02",
    title: "CREATIVE STRATEGY",
    description: "Turn insights into scroll-stopping creative that converts.",
  },
  {
    number: "03",
    title: "ECOMMERCE GROWTH",
    description: "Optimize funnels, products, and customer journeys.",
  },
  {
    number: "04",
    title: "META ADS",
    description: "Scale what works with smarter targeting and creative iteration.",
  },
  {
    number: "05",
    title: "CONTENT SYSTEMS",
    description: "Build consistent content pipelines for brand and performance.",
  },
  {
    number: "06",
    title: "AI WORKFLOW DESIGN",
    description: "Integrate AI tools and systems for faster, simpler operations.",
  },
];
