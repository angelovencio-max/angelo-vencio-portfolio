export interface CaseStudyResult {
  metric: string;
  label: string;
  isPlaceholder?: boolean;
}

export interface SystemProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface SelectedWorkSample {
  caption: string;
  imagePlaceholderText: string;
  image?: string;
  videoUrl?: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  number: string;
  title: string;
  client: string;
  category: string;
  focusType: "creatives-results" | "case-study" | "results-projects" | "video-works";
  description: string;
  image: string;
  isPlaceholderImage?: boolean;
  disclaimer?: string;
  challenge: string;
  objective: string;
  strategy: string;
  whatIDid: string[];
  systemProcess: SystemProcessStep[];
  results: CaseStudyResult[];
  selectedWork: SelectedWorkSample[];
  keyTakeaway: string;
  externalLink?: string;
}

export interface WorkItem {
  id: string;
  title: string;
  category: "video" | "graphics" | "case-study" | "testimonial";
  client: string;
  description: string;
  placeholderText: string;
  image?: string;
  videoUrl?: string;
  videoDuration?: string;
  testimonialQuote?: string;
  testimonialAuthor?: string;
  testimonialRole?: string;
  externalLink?: string;
}

export interface Testimonial {
  id: string;
  client: string;
  author: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
  highlightTag: string;
  metricBadge?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "self-care-club",
    slug: "self-care-club",
    number: "01",
    title: "Self Care Club",
    client: "Self Care Club",
    category: "E-COMMERCE / CREATIVES / RESULTS",
    focusType: "creatives-results",
    description: "Building a Filipino lifestyle brand through creative strategy, content, eCommerce, and AI-powered creative production.",
    image: "/images/self-care-club.jpg",
    challenge: "Creative asset production couldn't keep pace with Meta ad fatigue, slowing down campaign scaling for the brand's core product catalog.",
    objective: "Establish an AI-powered creative pipeline to rapidly generate and test high-converting DTC ad hooks.",
    strategy: "Shifted from traditional visual editing to a modular creative matrix, standardizing direct-response angles and AI-assisted visual variants.",
    whatIDid: [
      "Engineered high-intent ad creative concepts focused on core customer personas.",
      "Built AI-assisted generation workflows for rapid background and visual asset generation.",
      "Structured dynamic creative testing suites in Meta Ads Manager.",
      "Aligned visual ad hooks directly with Shopify product detail pages (PDPs)."
    ],
    systemProcess: [
      { step: "01", title: "Angle Discovery", description: "Mapped customer desires and unboxing moments into 12 distinct hook angles." },
      { step: "02", title: "AI Production Pipeline", description: "Deployed custom generative workflows to create 4x more creative variants weekly." },
      { step: "03", title: "Meta Iteration Engine", description: "Isolated winning visual hooks and copy variants to scale budget predictably." }
    ],
    results: [
      { metric: "[RESULT TO BE ADDED]", label: "Primary ROAS Impact", isPlaceholder: true },
      { metric: "[RESULT TO BE ADDED]", label: "Weekly Creative Output Increase", isPlaceholder: true },
      { metric: "[RESULT TO BE ADDED]", label: "CPA Reduction Rate", isPlaceholder: true }
    ],
    selectedWork: [
      { caption: "Modular Ad Concept Matrix & Hook Variants", imagePlaceholderText: "[CREATIVES & RESULTS PLACEHOLDER — SELF CARE CLUB]" }
    ],
    keyTakeaway: "Creative testing velocity comes from combining deep DTC positioning with automated AI systems."
  },
  {
    id: "prime-consulting",
    slug: "prime-consulting-scale-the-deal",
    number: "02",
    title: "Prime Consulting / Scale The Deal",
    client: "Prime Consulting / Scale The Deal",
    category: "CASE STUDIES / SALES / MARKETING",
    focusType: "case-study",
    description: "Supporting campaigns, marketing, sales, and business development for an education and growth program.",
    image: "/images/scale-the-deal.jpg",
    challenge: "High-ticket sales opportunities suffered from inconsistent prospect follow-up and fragmented outbound messaging.",
    objective: "Build a streamlined B2B growth engine aligning outbound marketing campaigns with high-converting sales execution.",
    strategy: "Developed an integrated business development framework combining targeted outreach, structured discovery calls, and CRM tracking.",
    whatIDid: [
      "Mapped out prospect pipelines from initial outreach to contract sign-off.",
      "Executed targeted outbound campaigns across high-value prospect accounts.",
      "Optimized discovery collateral and closing presentations for maximum conversion.",
      "Standardized sales tracking protocols to eliminate dropped opportunities."
    ],
    systemProcess: [
      { step: "01", title: "Prospect Alignment", description: "Targeted enterprise buyers with hyper-relevant positioning and value propositions." },
      { step: "02", title: "Outreach Execution", description: "Deployed multi-channel messaging strategies to secure discovery calls." },
      { step: "03", title: "Pipeline Standardization", description: "Standardized objection handling and closing presentation frameworks." }
    ],
    results: [
      { metric: "[RESULT TO BE ADDED]", label: "Pipeline Value Generated", isPlaceholder: true },
      { metric: "[RESULT TO BE ADDED]", label: "Deal Acceleration Rate", isPlaceholder: true },
      { metric: "[RESULT TO BE ADDED]", label: "Lead-to-Opportunity Conversion", isPlaceholder: true }
    ],
    selectedWork: [
      { caption: "B2B Sales Funnel Architecture", imagePlaceholderText: "[CASE STUDY PLACEHOLDER — PRIME CONSULTING]" }
    ],
    keyTakeaway: "Sales growth requires systematic elimination of pipeline friction through disciplined execution."
  },
  {
    id: "gencys-group",
    slug: "gencys-group",
    number: "03",
    title: "Gencys Group",
    client: "Gencys Group",
    category: "RESULTS / PROJECTS / PERFORMANCE",
    focusType: "results-projects",
    description: "Performance marketing campaigns, ad testing frameworks, and scaled creative execution for growth projects.",
    image: "/images/self-care-club.jpg",
    isPlaceholderImage: true,
    challenge: "Scaling ad spend across multiple DTC accounts without increasing CPA or burning through creative assets.",
    objective: "Engineered scalable ad testing frameworks to systematically isolate high-performing campaign angles.",
    strategy: "Implemented rapid creative iteration matrices paired with performance data tracking.",
    whatIDid: [
      "Designed dynamic creative ad testing workflows for performance campaigns.",
      "Built multi-platform reporting dashboards to monitor ad creative fatigue.",
      "Optimized conversion funnels to maximize return on ad spend."
    ],
    systemProcess: [
      { step: "01", title: "Creative Audit", description: "Analyzed performance ad data to identify winning creative hooks." },
      { step: "02", title: "Batch Execution", description: "Deployed 20+ ad creative variations weekly into testing ad sets." },
      { step: "03", title: "Scale Protocol", description: "Poured ad budget into top-performing creative assets." }
    ],
    results: [
      { metric: "[RESULT TO BE ADDED]", label: "Campaign ROAS Lift", isPlaceholder: true },
      { metric: "[RESULT TO BE ADDED]", label: "CPA Optimization", isPlaceholder: true }
    ],
    selectedWork: [
      { caption: "Performance Ad Dashboard & Creatives", imagePlaceholderText: "[RESULTS & PROJECTS PLACEHOLDER — GENCYS GROUP]" }
    ],
    keyTakeaway: "Structured ad testing systems turn performance marketing into a predictable revenue driver."
  },
  {
    id: "mata-technologies",
    slug: "mata-technologies",
    number: "04",
    title: "Mata Technologies",
    client: "Mata Technologies",
    category: "VIDEO WORKS / CREATIVE PRODUCTION",
    focusType: "video-works",
    description: "Video editing, motion graphics, and creative support with AI workflows and process improvements for a technology company.",
    image: "/images/mata-technologies.jpg",
    challenge: "Complex tech products required high-impact video storytelling, but traditional editing cycles were too slow.",
    objective: "Establish an efficient video production pipeline combining strategic visual editing with AI workflow automation.",
    strategy: "Leveraged AI scripting, audio tools, and automated editing frameworks to accelerate video asset turnaround.",
    whatIDid: [
      "Edited high-impact video showcases and product demo reels.",
      "Integrated AI production software into post-production video editing workflows.",
      "Streamlined video rendering pipelines for multi-platform distribution.",
      "Established video asset libraries for rapid versioning and re-editing."
    ],
    systemProcess: [
      { step: "01", title: "Script & Storyboard", description: "Deconstructed product features into engaging visual video narratives." },
      { step: "02", title: "AI Video Editing Suite", description: "Implemented automated video transcription, audio polishing, and motion graphics." },
      { step: "03", title: "Multi-Format Video Output", description: "Batch-rendered video variants for web, social feeds, and presentations." }
    ],
    results: [
      { metric: "[RESULT TO BE ADDED]", label: "Video Production Turnaround Speed", isPlaceholder: true },
      { metric: "[RESULT TO BE ADDED]", label: "Video View Rate & Engagement", isPlaceholder: true }
    ],
    selectedWork: [
      { caption: "Tech Showcase Video Reel & Motion Graphics", imagePlaceholderText: "[VIDEO WORKS PLACEHOLDER — MATA TECHNOLOGIES]" }
    ],
    keyTakeaway: "Video editing powered by AI workflows turns complex concepts into captivating visual assets."
  }
];

export const allWorksData: WorkItem[] = [
  // 1. Video Works
  {
    id: "video-1",
    title: "Tech Showcase Product Video Reel",
    category: "video",
    client: "Mata Technologies",
    description: "High-impact video editing, motion graphics, and product feature breakdown with AI editing workflows.",
    placeholderText: "[VIDEO WORK PLACEHOLDER — TECH SHOWCASE REEL]",
    videoDuration: "01:45"
  },
  {
    id: "video-2",
    title: "DTC Direct-Response Video Ad Suite",
    category: "video",
    client: "Self Care Club",
    description: "Short-form hook-driven video ad variations for Meta Ads scaling and organic social feeds.",
    placeholderText: "[VIDEO WORK PLACEHOLDER — DTC AD SUITE]",
    videoDuration: "00:30"
  },
  {
    id: "video-3",
    title: "B2B Event & Campaign Highlight Video",
    category: "video",
    client: "Prime Consulting / Scale The Deal",
    description: "Event highlight video editing, promo clips, and speaker showcase reels.",
    placeholderText: "[VIDEO WORK PLACEHOLDER — EVENT PROMO REEL]",
    videoDuration: "02:15"
  },

  // 2. Graphics & Creatives
  {
    id: "graphics-1",
    title: "Modular DTC Ad Creative Matrix",
    category: "graphics",
    client: "Self Care Club",
    description: "High-converting visual static ad concepts, product benefit overlays, and offer graphics.",
    placeholderText: "[GRAPHICS & CREATIVES PLACEHOLDER — AD MATRIX]",
    image: "/images/self-care-club.jpg"
  },
  {
    id: "graphics-2",
    title: "Brand Identity & Visual System Assets",
    category: "graphics",
    client: "Gencys Group",
    description: "Performance marketing visual assets, landing page graphics, and social media brand guidelines.",
    placeholderText: "[GRAPHICS & CREATIVES PLACEHOLDER — BRAND SYSTEM]"
  },
  {
    id: "graphics-3",
    title: "High-Ticket Sales Deck & Collateral",
    category: "graphics",
    client: "Prime Consulting / Scale The Deal",
    description: "Presentation design, visual sales collateral, and campaign lead magnet graphics.",
    placeholderText: "[GRAPHICS & CREATIVES PLACEHOLDER — SALES COLLATERAL]",
    image: "/images/scale-the-deal.jpg"
  },

  // 3. Testimonials
  {
    id: "testimonial-1",
    title: "Client Testimonial — DTC Growth",
    category: "testimonial",
    client: "Self Care Club",
    description: "Feedback on creative strategy, ad testing velocity, and AI production systems.",
    placeholderText: "[TESTIMONIAL PLACEHOLDER — DTC FOUNDER]",
    testimonialQuote: "[TESTIMONIAL — 'Angelo transformed our ad creative pipeline, allowing us to test 4x more winning angles per week.']",
    testimonialAuthor: "Founder & CEO",
    testimonialRole: "Self Care Club"
  },
  {
    id: "testimonial-2",
    title: "Client Testimonial — B2B Sales & Campaigns",
    category: "testimonial",
    client: "Prime Consulting / Scale The Deal",
    description: "Feedback on business development support, marketing execution, and growth systems.",
    placeholderText: "[TESTIMONIAL PLACEHOLDER — GROWTH DIRECTOR]",
    testimonialQuote: "[TESTIMONIAL — 'Angelo's systematic approach to sales collateral and campaign execution freed up our executive team.']",
    testimonialAuthor: "Managing Director",
    testimonialRole: "Prime Consulting"
  },
  {
    id: "testimonial-3",
    title: "Client Testimonial — Video Production Workflows",
    category: "testimonial",
    client: "Mata Technologies",
    description: "Feedback on video editing speed, AI workflow integration, and motion graphics quality.",
    placeholderText: "[TESTIMONIAL PLACEHOLDER — TECH PRODUCT LEAD]",
    testimonialQuote: "[TESTIMONIAL — 'Angelo's video editing and AI workflows delivered showcase-quality videos in record time.']",
    testimonialAuthor: "Product Marketing Lead",
    testimonialRole: "Mata Technologies"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-scc",
    client: "Self Care Club",
    author: "Founder & Brand Director",
    role: "DTC Beauty & Wellness",
    avatar: "/images/self-care-club.jpg",
    quote: "Angelo transformed our ad creative pipeline. With his AI creative systems, we were able to launch and test 4x more ad variations per week, rapidly discovering winning angles that drove profitable DTC scale.",
    rating: 5,
    highlightTag: "CREATIVE PIPELINE & AD TESTING",
    metricBadge: "[4X AD VARIATIONS PRODUCED]"
  },
  {
    id: "testimonial-prime",
    client: "Prime Consulting / Scale The Deal",
    author: "Managing Partner & Founder",
    role: "Sales & Growth Program",
    avatar: "/images/scale-the-deal.jpg",
    quote: "Angelo's strategic mindset goes far beyond standard design. He built our client acquisition workflows and sales collateral, freeing up our leadership team and giving us a repeatable system for closing deals.",
    rating: 5,
    highlightTag: "GROWTH SYSTEMS & COLLATERAL",
    metricBadge: "[REPEATABLE ACQUISITION SYSTEM]"
  },
  {
    id: "testimonial-gencys",
    client: "Gencys Group",
    author: "Head of Performance Marketing",
    role: "eCommerce Growth Agency",
    avatar: "",
    quote: "Angelo's ability to bridge data-driven creative strategy with rapid visual execution is unmatched. He helps client accounts find winning hooks fast while maintaining brand integrity across all touchpoints.",
    rating: 5,
    highlightTag: "PERFORMANCE STRATEGY",
    metricBadge: "[HIGH-TESTING VELOCITY]"
  },
  {
    id: "testimonial-mata",
    client: "Mata Technologies",
    author: "Product Marketing Lead",
    role: "Video & Technology Company",
    avatar: "/images/mata-technologies.jpg",
    quote: "Angelo delivered showcase-quality video assets and promotional reels in record time. His deep understanding of motion design and AI editing workflows elevated our product launches significantly.",
    rating: 5,
    highlightTag: "VIDEO PRODUCTION & AI WORKFLOWS",
    metricBadge: "[SHOWCASE-QUALITY PRODUCTION]"
  }
];
