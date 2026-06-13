import type { CaseStudy } from "@/types/portfolio";

export const caseStudies: CaseStudy[] = [
  {
    slug: "slayme",
    title: "Slayme",
    shortTitle: "Slayme",
    category: "UX/UI Design",
    headline:
      "Making beauty booking easier, faster, and more trustworthy for modern users.",
    summary:
      "A mobile booking experience for beauty services, designed around quick discovery, clear service details, and a smoother appointment flow.",
    role: "UX/UI Designer",
    timeline: "4 weeks",
    platform: "Mobile app",
    tools: ["Figma", "FigJam", "Canva"],
    accent: "#D47B80",
    softBackground: "#F8EDF8",
    heroImage: "/mockups/slayme-hero-phone.png",
    coverImage: "/mockups/slayme-mobile.png",
    mockupVariant: "phone",
    homepage: {
      background: "#EDEAFE",
      title:
        "Making beauty booking easier, faster, and more trustworthy for modern users - Slayme",
      image: "/mockups/slayme-home-card.png",
      mockupVariant: "phone",
    },
    overview: [
      "Slayme helps users discover beauty services, compare information, and book appointments without moving between disconnected channels.",
      "The design focuses on confidence: users can understand services, check important details, and complete booking with fewer doubts.",
    ],
    sections: [
      {
        title: "Problem",
        description:
          "Beauty booking often becomes fragmented across social posts, chat messages, and unclear price information.",
        items: [
          "Users need to compare salons quickly before deciding.",
          "Service details and booking steps are often inconsistent.",
          "Trust signals are scattered across different channels.",
          "The booking process can feel repetitive for returning users.",
        ],
      },
      {
        title: "Goal",
        description:
          "Create a calmer mobile flow that supports discovery, trust, and repeat booking.",
        items: [
          "Make service browsing clear and scannable.",
          "Reduce friction in selecting time, service, and staff.",
          "Use visual hierarchy to highlight price, rating, and availability.",
          "Design a UI system that can scale to more beauty categories.",
        ],
      },
      {
        title: "Target Users",
        items: [
          "Busy users who book beauty services around work or study schedules.",
          "Users who compare price, location, reviews, and visual results before booking.",
          "Beauty service providers who need a clearer way to present services and appointments.",
        ],
      },
    ],
    flow: [
      "Login",
      "Home Discovery",
      "Search & Filter",
      "Service Detail",
      "Select Service",
      "Add to Cart",
      "Choose Schedule",
      "Review Booking",
      "Booking Success",
      "My Account",
    ],
    designSystem: {
      colors: [
        { name: "Rose", value: "#D47B80" },
        { name: "Soft rose", value: "#F3DDE1" },
        { name: "Warm cream", value: "#FBF6F3" },
        { name: "Ink", value: "#252525" },
        { name: "Mint", value: "#0FA36B" },
        { name: "Sky", value: "#4388D8" },
      ],
      typography: [
        "Elegant serif headings for brand warmth.",
        "Clean sans-serif body text for booking clarity.",
        "Compact labels for service metadata and form fields.",
      ],
      components: [
        { title: "Service Card", layout: "tall" },
        { title: "Review" },
        { title: "Category Chips" },
        { title: "Buttons" },
        { title: "Search Bar" },
      ],
    },
    wireframes: {
      title: "Mobile Wireframe",
      description:
        "Low-fidelity screens were created to define the booking flow, content hierarchy, and key actions before moving into visual design.",
      image: "/mockups/slayme-wireframes.png",
      labels: [
        "Login",
        "Home Discovery",
        "Search & Filter",
        "Service Detail",
        "Your Cart",
        "Booking Schedule",
        "Booking in Progress",
        "Booking Confirmed",
        "My Packages",
      ],
    },
    screens: [
      {
        title: "Login",
        description: "A soft first screen with quick sign-in options.",
        image: "/mockups/slayme-screen-login.png",
      },
      {
        title: "Home discovery",
        description: "Service categories, featured salons, and promotions.",
        image: "/mockups/slayme-screen-home.png",
      },
      {
        title: "Booking form",
        description: "Clear inputs for service, time, and customer details.",
        image: "/mockups/slayme-screen-booking.png",
      },
      {
        title: "Service detail",
        description: "Trust signals, images, pricing, and next action.",
        image: "/mockups/slayme-screen-detail.png",
      },
      {
        title: "Schedule",
        description: "Compact slot selection with important booking context.",
        image: "/mockups/slayme-screen-schedule.png",
      },
      {
        title: "Checkout",
        description: "A focused confirmation step before final booking.",
        image: "/mockups/slayme-screen-checkout.png",
      },
    ],
    learned:
      "This project helped me balance visual softness with task clarity. Beauty experiences need warmth, but booking still needs direct hierarchy and predictable steps.",
  },
  {
    slug: "centerup-landing",
    title: "CenterUp Landing Page",
    shortTitle: "Landing Page",
    category: "UX/UI Design",
    headline: "Designing a clear and trustworthy landing page for CenterUp.",
    summary:
      "A product landing page concept for an education-center platform, built to explain value quickly and guide users toward consultation.",
    role: "UX/UI Designer",
    timeline: "3 weeks",
    platform: "Responsive website",
    tools: ["Figma", "FigJam"],
    accent: "#6E64F5",
    softBackground: "#F5F0FF",
    heroImage: "/mockups/centerup-landing-hero.png",
    coverImage: "/mockups/centerup-landing.png",
    mockupVariant: "laptop",
    homepage: {
      background: "#F9E7ED",
      title: "Designing a clear and trustworthy landing page for CenterUp",
      image: "/mockups/centerup-landing-home-card.png",
      mockupVariant: "laptop",
    },
    overview: [
      "The landing page introduces CenterUp as a modern platform for education centers and parents who need clearer learning information.",
      "The page structure prioritizes trust, product explanation, and conversion without making the layout feel heavy.",
    ],
    sections: [
      {
        title: "Goals",
        items: [
          "Explain the product value within the first viewport.",
          "Build credibility through clear sections and visual rhythm.",
          "Guide users toward consultation without aggressive selling.",
          "Make the page responsive for parents and center managers.",
        ],
      },
      {
        title: "Design Challenge",
        items: [
          "Present a multi-feature product without overwhelming new visitors.",
          "Keep education content friendly but still professional.",
          "Create enough visual structure for scanning on long pages.",
          "Balance product screenshots with benefit-led copy.",
        ],
      },
      {
        title: "Page Structure",
        description:
          "A simple story from problem, value proposition, features, proof, and contact.",
        items: [
          "Hero",
          "Partner logos",
          "Benefits",
          "Feature modules",
          "How it works",
          "Testimonials",
          "FAQ",
          "Contact",
        ],
      },
    ],
    architecture: [
      "Home",
      "Benefits",
      "Solutions",
      "Features",
      "Pricing",
      "FAQ",
      "Contact",
    ],
    designSystem: {
      colors: [
        { name: "Gradient", value: "#FF6A55" },
        { name: "Primary", value: "#6366F1" },
        { name: "Lavender", value: "#9EA2F6" },
        { name: "Soft blue", value: "#D9DDFB" },
        { name: "Success", value: "#22C55E" },
        { name: "Cyan", value: "#06B6D4" },
        { name: "Amber", value: "#F59E0B" },
        { name: "Coral", value: "#FF5A3D" },
      ],
      typography: [
        "Serif headline moments for a premium education feel.",
        "Sans-serif product copy for readability and structure.",
        "Small uppercase labels for product modules and navigation.",
      ],
      components: [
        { title: "Hero CTA" },
        { title: "Feature Card" },
        { title: "Pricing Card" },
        { title: "FAQ Item" },
        { title: "Testimonial Block" },
      ],
    },
    wireframes: {
      title: "Wireframe",
      description:
        "Low-fidelity layouts were used to test page rhythm, content order, and conversion paths before polishing the interface.",
      image: "/mockups/centerup-landing-wireframe.png",
      labels: ["Hero", "Features", "Pricing", "Proof", "FAQ", "Footer"],
    },
    screens: [
      {
        title: "Homepage full page",
        description:
          "A structured landing page that explains the platform and guides visitors.",
        image: "/mockups/centerup-landing-screen-home.png",
      },
      {
        title: "Pricing section",
        description: "Cards designed for comparison and quick plan scanning.",
        image: "/mockups/centerup-landing-screen-pricing.png",
      },
      {
        title: "Feature detail",
        description:
          "A focused block pairing product benefits with UI evidence.",
        image: "/mockups/centerup-landing-screen-feature.png",
      },
      {
        title: "Contact area",
        description: "A calm final step for consultation and follow-up.",
        image: "/mockups/centerup-landing-screen-contact.png",
      },
    ],
    learned:
      "The strongest landing pages do not show everything at once. They guide attention, repeat value clearly, and use product visuals only where they help decision-making.",
  },
  {
    slug: "centerup-management",
    title: "CenterUp Management Platform",
    shortTitle: "CenterUp",
    category: "UX/UI Design",
    headline: "Designing a management platform for modern education centers.",
    summary:
      "A CRM-style platform for education centers to manage classes, students, finance, staff, and operational workflows in one place.",
    role: "UX/UI Designer",
    timeline: "5 weeks",
    platform: "Web app",
    tools: ["Figma", "FigJam", "Notion"],
    accent: "#7B61FF",
    softBackground: "#F4ECFF",
    heroImage: "/mockups/centerup-management-hero.png",
    coverImage: "/mockups/centerup-management.png",
    mockupVariant: "desktop",
    homepage: {
      background: "#EFECFF",
      title:
        "Designing a management platform for modern education centers - CenterUp",
      image: "/mockups/centerup-management-home-card.png",
      mockupVariant: "desktop",
    },
    overview: [
      "CenterUp Management is designed for education centers that need a clearer way to coordinate operations across students, classes, staff, payments, and customer relationships.",
      "The design challenge was to make a dense operational system feel organized, predictable, and easy to scan during daily work.",
    ],
    sections: [
      {
        title: "Problem",
        items: [
          "Center teams often manage information across spreadsheets, chat, and disconnected tools.",
          "Student and class data can become difficult to update consistently.",
          "Managers need quick visibility into operations without opening many screens.",
          "CRM tasks require clear status, ownership, and next actions.",
        ],
      },
      {
        title: "Goals",
        items: [
          "Unify core management workflows in one structured platform.",
          "Make dashboards scannable without losing operational detail.",
          "Support clear CRM handoff between consultation, enrollment, and care.",
          "Create reusable components for tables, cards, tags, and status states.",
        ],
      },
      {
        title: "Target Users",
        items: [
          "Center managers who need performance and operations visibility.",
          "Consultants who manage leads, appointments, and follow-ups.",
          "Academic staff who coordinate classes, students, and schedules.",
          "Finance/admin users who track payment status and records.",
        ],
      },
    ],
    flow: [
      "Dashboard",
      "Lead list",
      "Lead detail",
      "Consultation",
      "Enrollment",
      "Class setup",
      "Payment",
      "Care",
    ],
    architecture: [
      "Dashboard",
      "CRM",
      "Students",
      "Classes",
      "Courses",
      "Staff",
      "Finance",
      "Reports",
      "Settings",
    ],
    designSystem: {
      colors: [
        { name: "Gradient", value: "#FF6A55" },
        { name: "Primary", value: "#6366F1" },
        { name: "Lavender", value: "#9EA2F6" },
        { name: "Soft blue", value: "#D9DDFB" },
        { name: "Success", value: "#22C55E" },
        { name: "Cyan", value: "#06B6D4" },
        { name: "Warning", value: "#F59E0B" },
        { name: "Danger", value: "#FF5A3D" },
        { name: "Slate", value: "#637381" },
      ],
      typography: [
        "Small labels and dense tables for operational scanning.",
        "Clear heading hierarchy for dashboards and module pages.",
        "Status text paired with color tokens for accessibility.",
      ],
      components: [
        { title: "Dashboard Metric" },
        { title: "Data Table" },
        { title: "CRM Card" },
        { title: "Status Chip" },
        { title: "Calendar Row" },
        { title: "Sidebar Navigation" },
        { title: "Filter Bar" },
      ],
    },
    wireframes: {
      title: "CRM Module User Flow",
      description:
        "The flow connects lead intake, consultation, enrollment, payment, and post-enrollment care into one repeatable path.",
      image: "/mockups/centerup-management-flow.png",
      labels: [
        "Lead",
        "Assign",
        "Consult",
        "Schedule",
        "Enroll",
        "Payment",
        "Class",
        "Care",
      ],
    },
    screens: [
      {
        title: "Dashboard",
        description:
          "A quick operational overview for daily center management.",
        image: "/mockups/centerup-management-screen-dashboard.png",
      },
      {
        title: "Student list",
        description:
          "Table-first layout with useful filters and status visibility.",
        image: "/mockups/centerup-management-screen-students.png",
      },
      {
        title: "CRM board",
        description: "Lead stages, next actions, and ownership in one module.",
        image: "/mockups/centerup-management-screen-crm.png",
      },
      {
        title: "Class management",
        description: "Class detail, members, schedule, and progress overview.",
        image: "/mockups/centerup-management-screen-classes.png",
      },
      {
        title: "Finance",
        description: "Payment status and records presented for quick checking.",
        image: "/mockups/centerup-management-screen-finance.png",
      },
    ],
    learned:
      "Operational products need restraint. The UI has to reduce visual noise while keeping enough density for users who repeat the same workflow every day.",
  },
];

export const getCaseStudyBySlug = (slug: string) =>
  caseStudies.find((caseStudy) => caseStudy.slug === slug);
