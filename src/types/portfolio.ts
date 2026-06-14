export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  shortName: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  resumeHref: string;
  portraitImage: string;
  intro: string;
  about: string;
  contactIntro: string;
  socials: SocialLink[];
};

export type TimelineItem = {
  period: string;
  title: string;
  meta: string;
};

export type AboutContent = {
  contact: string[];
  featuredProject: {
    title: string;
    description: string;
    href: string;
  };
  experience: TimelineItem[];
  education: TimelineItem[];
  abilities: string[];
  tools: string[];
};

export type MockupVariant = "phone" | "laptop" | "desktop" | "browser" | "portrait";

export type PaletteSwatch = {
  name: string;
  value: string;
  previewValue?: string;
};

export type ComponentShowcaseItem = {
  title: string;
  image?: string;
  imageAlt?: string;
  layout?: "default" | "tall" | "wide";
};

export type CaseSection = {
  title: string;
  eyebrow?: string;
  description?: string;
  items: string[];
  cards?: {
    title: string;
    description: string;
    icon?: "search" | "clock" | "star" | "arrow";
  }[];
  persona?: {
    name: string;
    meta: string;
    needs: string[];
    painPoints: string[];
  };
};

export type CaseScreen = {
  title: string;
  description: string;
  image: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  headline: string;
  summary: string;
  tagline?: string;
  role: string;
  timeline: string;
  platform: string;
  tools: string[];
  accent: string;
  softBackground: string;
  heroImage: string;
  coverImage: string;
  mockupVariant: MockupVariant;
  homepage: {
    background: string;
    title: string;
    image: string;
    mockupVariant: MockupVariant;
  };
  overview: string[];
  overviewFacts?: {
    label: string;
    value: string;
  }[];
  sections: CaseSection[];
  flow?: string[];
  architecture?: string[];
  designSystem: {
    colors: PaletteSwatch[];
    typography: string[];
    components?: ComponentShowcaseItem[];
  };
  wireframes?: {
    title: string;
    description: string;
    image: string;
    labels: string[];
  };
  screens: CaseScreen[];
  learned?: string | string[];
};
