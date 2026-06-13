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
    accent: "#C67B7B",
    softBackground: "#F4E5E5",
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
      "Slayme is a mobile beauty and wellness booking app designed to simplify the process of finding and booking beauty services. Users can search for salons based on location, price, rating, and service type, then view salon details, compare options, add services to cart, choose a schedule, and confirm booking directly in the app.",
    ],
    overviewFacts: [
      { label: "Project Type", value: "Personal Project" },
      { label: "Platform", value: "Mobile App" },
      { label: "Industry", value: "Beauty & Wellness" },
      { label: "Focus", value: "Booking Flow, Mobile UI, Discovery" },
    ],
    sections: [
      {
        title: "Problem",
        description:
          "Users often spend too much time searching for beauty services across multiple channels. They need to manually check salon information, ask for prices, confirm available time slots, and compare reviews by themselves. This process is time-consuming, inconvenient, and lacks transparency.",
        items: [
          "Difficult to find suitable salons",
          "Manual contact required",
          "Scattered information",
          "Time-consuming comparison",
        ],
        cards: [
          {
            title: "Difficult to find suitable salons",
            description:
              "Users must search across multiple platforms and channels",
            icon: "search",
          },
          {
            title: "Manual contact required",
            description:
              "Need to call or message to ask about pricing and availability",
            icon: "clock",
          },
          {
            title: "Scattered information",
            description:
              "Reviews and ratings are spread across different platforms",
            icon: "star",
          },
          {
            title: "Time-consuming comparison",
            description:
              "Hard to compare prices, services, and locations efficiently",
            icon: "arrow",
          },
        ],
      },
      {
        title: "Goal",
        description:
          "The goal of Slayme is to create a smooth and trustworthy booking experience where users can discover, compare, and book beauty services in just a few simple steps.",
        items: [
          "Help users find suitable beauty services quickly",
          "Build trust through pricing, ratings, and reviews",
          "Make service information easier to compare",
          "Create a premium and visually appealing mobile experience",
          "Reduce friction in the booking journey",
          "Enable online booking instead of manual phone calls",
        ],
      },
      {
        title: "Target Users",
        items: [
          "Young adults and working women",
          "Users who regularly use beauty and wellness services",
          "Users who care about location, price, rating, and available time",
          "Users who prefer booking online instead of calling salons manually",
        ],
        persona: {
          name: "Chloe Nguyen",
          meta: "24 • Office Worker",
          needs: [
            "Find salons near her location",
            "See clear pricing and ratings",
            "Book appointments quickly",
            "Avoid calling each salon individually",
          ],
          painPoints: [
            "Wastes time searching",
            "Unclear pricing information",
            "Doesn't know available time slots",
            "Reviews scattered across platforms",
          ],
        },
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
        { name: "Primary", value: "#C67B7B" },
        { name: "Primary Container", value: "#F4E5E5" },
        { name: "Surface", value: "#F7F4F4" },
        { name: "Surface Variant", value: "#FEFEFE" },
        { name: "Outline", value: "#C67B7B", previewValue: "#F4E5E5" },
        { name: "On Surface", value: "#2B2B2B" },
        { name: "Subtone", value: "#6B6B6B" },
        { name: "Warning", value: "#CC1D1D" },
        { name: "Error", value: "#00A63E" },
        { name: "Info", value: "#62A4F2" },
      ],
      typography: [
        "Serif display headings create a soft, elegant beauty brand moment.",
        "Clean sans-serif body text keeps booking flows readable and task-focused.",
        "Muted metadata labels support price, rating, distance, and form clarity.",
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
        description:
          "Allow users to quickly access the app with multiple sign-in options.",
        image: "/mockups/slayme-screen-login.png",
      },
      {
        title: "Home discovery",
        description:
          "Help users discover services through search, categories, and trending salons.",
        image: "/mockups/slayme-screen-home.png",
      },
      {
        title: "Search & Filter",
        description:
          "Help users quickly find services by type, price, rating, distance, and time.",
        image: "/mockups/slayme-screen-search-filter.png",
      },
      {
        title: "Service detail",
        description:
          "Build trust with ratings, reviews, price, and service information.",
        image: "/mockups/slayme-screen-detail.png",
      },
      {
        title: "Your Cart",
        description:
          "Review selected service, add promo code, and check total price.",
        image: "/mockups/slayme-screen-your-cart.png",
      },
      {
        title: "Book Appointment",
        description: "Choose staff, date, time, and schedule your booking.",
        image: "/mockups/slayme-screen-book-appointment.png",
      },
      {
        title: "Review Booking & Payment",
        description:
          "Review salon, service, customer, payment method, and final price before confirming the booking.",
        image: "/mockups/slayme-screen-review-booking.png",
      },
      {
        title: "Booking Confirmed",
        description:
          "Confirm your booking details and receive a confirmation message.",
        image: "/mockups/slayme-screen-booking-confirmed.png",
      },
      {
        title: "My Bookings",
        description: "View and manage your upcoming and past bookings.",
        image: "/mockups/slayme-screen-my-bookings.png",
      },
    ],
    learned: [
      "Through this project, I learned how to design a complete mobile booking flow from discovery to confirmation. I focused on creating a clear information hierarchy, reducing user effort, and building trust through transparent pricing, ratings, reviews, and step-by-step booking.",
      "This project also helped me practice designing reusable UI components, creating a consistent visual system, and balancing user needs with business goals in a marketplace-style product.",
    ],
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
