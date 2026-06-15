import type { AboutContent, Profile } from "@/types/portfolio";

export const profile: Profile = {
  name: "Ngân Khánh",
  shortName: "Khánh",
  role: "UX/UI Designer",
  location: "Me Tri Ha, Tay Mo, Ha Noi",
  email: "ngankhanh1205203@gmail.com",
  phone: "0364 501 369",
  resumeHref:
    "https://drive.google.com/drive/folders/1LApUGCL3mj45qpwRHTZkpf6vHTr9DHnD",
  portraitImage: "/mockups/ngan-khanh-portrait.png",
  intro:
    "A UX/UI Designer aims to design products and systems that actually make life better.",
  about:
    "I am a UX/UI Designer with a background in Business Administration and hands-on experience designing web interfaces, mobile apps, landing pages, and SaaS products. I enjoy turning complex workflows into clear, user-friendly, and visually appealing interfaces. My goal is to grow deeper in UX/UI Design, product thinking, and user experience design through real product environments.",
  contactIntro:
    "I am Khánh, a UX/UI Designer focused on the intersection of user experience and system logic. Open to new projects and career opportunities. Let's work together.",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/ngan-khanh" },
    { label: "Behance", href: "https://behance.net/ngankhanh" },
  ],
};

export const aboutContent: AboutContent = {
  contact: [profile.email, profile.phone, profile.location],
  featuredProject: {
    title: "SlayMe",
    description:
      "Mobile app concept connecting users with beauty services - service discovery, reviews & online booking.",
    href: "/work/slayme",
  },
  experience: [
    {
      period: "2025 - Present",
      title: "Freelance UX/UI Designer / Part-time",
      meta: "Ant Learning",
    },
    {
      period: "2026",
      title: "Business Support Executive",
      meta: "HISO ECO",
    },
    {
      period: "2025",
      title: "Administrative Staff",
      meta: "FANI",
    },
  ],
  education: [
    {
      period: "2021 - 2025",
      title: "Business Administration",
      meta: "FPT University",
    },
    {
      period: "2024",
      title: "Google UX Design Certificate",
      meta: "Coursera",
    },
    {
      period: "2024",
      title: "B2 VSTEP Certificate",
      meta: "English",
    },
  ],
  abilities: [
    "UX Design",
    "UI Design",
    "User Research",
    "Problem-solving",
    "Design Principles",
    "Communication",
    "Collaboration",
    "Presentation",
    "Business",
    "Marketing",
    "Time Management",
  ],
  tools: ["Figma", "FigmaMake", "FigJam", "Canva", "Notion", "Codex"],
};
