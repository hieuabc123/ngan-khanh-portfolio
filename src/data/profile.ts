import type { AboutContent, Profile } from "@/types/portfolio";

export const profile: Profile = {
  name: "Ngân Khánh",
  shortName: "Khánh",
  role: "UX/UI Designer",
  location: "Ho Chi Minh City, Vietnam",
  email: "ngankhanh1205203@gmail.com",
  phone: "0364 501 356 (Zalo)",
  resumeHref: "/resume-ngan-khanh.pdf",
  portraitImage: "/mockups/ngan-khanh-portrait.png",
  intro:
    "A UX/UI Designer aims to design products and systems that actually make life better.",
  about:
    "I am a UX/UI Designer with a background in Business Administration and hands-on experience designing web interfaces, mobile apps, landing pages, and SaaS products. I enjoy turning complex workflows into focused, user-friendly experiences with clear structure, thoughtful visuals, and practical product thinking.",
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
    title: "Slayme",
    description:
      "A beauty booking mobile app focused on smoother discovery, booking, and service trust.",
    href: "/work/slayme",
  },
  experience: [
    {
      period: "2025 - Present",
      title: "Freelance UX/UI Designer / Part-time",
      meta: "Selected product and website projects",
    },
    {
      period: "2025",
      title: "Business Support Executive",
      meta: "Operations and client-facing workflows",
    },
    {
      period: "2023",
      title: "Administrative Staff",
      meta: "Process coordination and documentation",
    },
  ],
  education: [
    {
      period: "2021 - 2024",
      title: "Business Administration",
      meta: "HUTECH University",
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
    "Patience",
    "Learning",
    "Time Management",
  ],
  tools: ["Figma", "FigJam", "Figma Make", "Canva", "Notion"],
};
