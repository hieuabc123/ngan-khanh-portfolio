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
    headline: "Designing a Landing Page for Education Center SaaS",
    summary:
      "CenterUp Landing Page is a marketing website designed to introduce the platform, communicate key benefits, and guide education centers toward product trial or consultation.",
    tagline: "Turning product value into a clear, trustworthy web experience.",
    role: "UX/UI Designer",
    timeline: "3 weeks",
    platform: "Responsive website",
    tools: ["Figma", "FigJam"],
    accent: "#6E64F5",
    softBackground: "#F7F8FA",
    heroImage: "/mockups/centerup-landing-home-card.png",
    coverImage: "/mockups/centerup-landing-home-card.png",
    mockupVariant: "laptop",
    homepage: {
      background: "#F9E7ED",
      title: "Designing a Landing Page for Education Center SaaS - CenterUp",
      image: "/mockups/centerup-landing-home-card.png",
      mockupVariant: "laptop",
    },
    overview: [
      "CenterUp is a SaaS platform for education centers. The landing page was designed to help visitors quickly understand what CenterUp does, who it is for, and why it can help centers manage their daily operations more efficiently.",
      "The page introduces the product value, highlights core benefits, presents key features, builds trust, and guides users toward taking action such as registering, trying the product, or contacting the team.",
    ],
    overviewFacts: [
      { label: "Type", value: "Landing Page" },
      { label: "Focus", value: "Marketing & Conversion" },
      { label: "Role", value: "UX/UI Designer" },
      { label: "Timeline", value: "3 weeks" },
    ],
    sections: [
      {
        title: "Goals",
        items: [
          "Communicate CenterUp's value clearly in the first few seconds.",
          "Help education centers understand the main benefits of the platform.",
          "Present product features in a simple and scannable way.",
          "Build trust through product visuals, customer benefits, and security information.",
          "Encourage users to register, try the product, or contact the team.",
          "Support both desktop and mobile browsing experiences.",
        ],
      },
      {
        title: "Design Challenge",
        items: [
          "CenterUp has many features, so the landing page needed to avoid overwhelming users.",
          "B2B users need to understand product value quickly before exploring details.",
          "The design needed to feel professional, trustworthy, and modern.",
          "CTAs needed to be clear without feeling too aggressive.",
          "Product sections needed to balance marketing content and real product screenshots.",
          "Pricing and FAQ needed to reduce hesitation before users take action.",
        ],
      },
      {
        title: "Page Structure",
        description:
          "The landing page was structured to guide users from product awareness to trust building and finally to conversion.",
        items: [
          "Hero Section",
          "Integration",
          "Smart Management",
          "Teaching Efficiency",
          "AI Assistant",
          "Social Proof",
          "Security",
          "Pricing",
          "FAQ",
          "Final CTA",
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
        {
          name: "Brand Gradient",
          value: "Accent & Highlights",
          previewValue:
            "linear-gradient(135deg, #FF7A45 0%, #EF3EA4 38%, #7B3FFF 70%, #4BC3F7 100%)",
        },
        { name: "Primary", value: "#696CFF" },
        { name: "Primary Light", value: "#A4A7FF" },
        { name: "Primary Pale", value: "#E1E1FF" },
        { name: "Success", value: "#22C55E" },
        { name: "Info", value: "#11B4C9" },
        { name: "Warning", value: "#FFAC00" },
        { name: "Error", value: "#FF5630" },
        { name: "Surface", value: "#F8F9FB" },
        { name: "Muted", value: "#6B7A88" },
      ],
      typography: [
        "Section Title|H1 / 48px / Bold",
        "Screen Title|H2 / 32px / Bold",
        "Subtitle|Subtitle / 16px / Semibold",
        "Body|P1 / 15px / Regular",
        "Caption|P2 / 12px / Regular",
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
        "Low-fidelity screens were created to define the booking flow, content hierarchy, and key actions before moving into visual design.",
      image: "/mockups/centerup-landing-home-card.png",
      labels: [
        "Header",
        "Hero",
        "Benefits",
        "Pricing",
        "FAQ",
        "Testimonials",
        "Final CTA",
        "Footer",
      ],
    },
    screens: [
      {
        title: "Landing page",
        description: "centerup.app/landing",
        image: "/mockups/centerup-landing-screen-landing.png",
      },
      {
        title: "Pricing page",
        description: "centerup.app/pricing",
        image: "/mockups/centerup-landing-screen-pricing.png",
      },
      {
        title: "Dashboard preview",
        description: "centerup.app/dashboard",
        image: "/mockups/centerup-landing-screen-dashboard.png",
      },
      {
        title: "AI assistant",
        description: "centerup.app/assistant",
        image: "/mockups/centerup-landing-screen-assistant.png",
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
    headline: "All-in-one Management Platform for Education Centers",
    summary:
      "CenterUp is a SaaS platform that helps education centers manage students, classes, staff, finance, learning activities, and daily operations in one centralized system.",
    tagline: "From student management to admissions, all in one system.",
    role: "UX/UI Designer",
    timeline: "10 weeks",
    platform: "Web SaaS",
    tools: ["Figma", "FigJam", "Notion"],
    accent: "#7B61FF",
    softBackground: "#F4ECFF",
    heroImage: "/mockups/centerup-management-home-card.png",
    coverImage: "/mockups/centerup-management-home-card.png",
    mockupVariant: "desktop",
    homepage: {
      background: "#EFECFF",
      title:
        "Designing a management platform for modern education centers - CenterUp",
      image: "/mockups/centerup-management-home-card.png",
      mockupVariant: "desktop",
    },
    overviewFacts: [
      { label: "Type", value: "Company Project" },
      { label: "Platform", value: "Web SaaS" },
      { label: "Role", value: "UX/UI Designer" },
      { label: "Timeline", value: "10 weeks" },
    ],
    overview: [
      "CenterUp is an education center management platform designed to help training centers operate more efficiently and professionally. The platform brings key workflows such as student management, class management, staff management, finance, learning activities, and reporting into one connected system.",
      "Instead of relying on scattered tools like Excel, notebooks, Zalo, and manual reports, CenterUp provides a centralized workspace where teams can manage daily operations with clearer data, better collaboration, and more consistent processes.",
    ],
    sections: [
      {
        title: "Problem",
        items: [
          "Disconnected tools",
          "Scattered data",
          "Manual workflows",
          "Limited visibility",
          "Collaboration challenges",
          "Growing complexity",
        ],
        cards: [
          {
            title: "Disconnected tools",
            description:
              "Education centers often manage operations across many disconnected tools.",
          },
          {
            title: "Scattered data",
            description:
              "Student, class, staff, and financial data are difficult to track in one place.",
          },
          {
            title: "Manual workflows",
            description:
              "Manual workflows make daily operations time-consuming and error-prone.",
          },
          {
            title: "Limited visibility",
            description:
              "Managers lack real-time visibility into center performance.",
          },
          {
            title: "Collaboration challenges",
            description:
              "Teams have difficulty collaborating when information is scattered.",
          },
          {
            title: "Growing complexity",
            description:
              "As the center grows, operational complexity increases quickly.",
          },
        ],
      },
      {
        title: "Goals",
        items: [
          "Centralize core education center operations in one platform.",
          "Make complex management data easier to understand.",
          "Help teams work with clearer workflows and shared information.",
          "Reduce manual tracking across external tools.",
          "Improve visibility for owners and managers.",
          "Create a scalable system that can support growing education centers.",
        ],
      },
      {
        title: "Target Users",
        items: [
          "Center Owner / Manager",
          "Academic Staff",
          "Sales / Admission Team",
          "Teachers",
          "Admin / Operation Staff",
        ],
        cards: [
          {
            title: "Center Owner / Manager",
            description:
              "Needs to monitor overall center performance, student growth, revenue, staff activity, and daily operations.",
          },
          {
            title: "Academic Staff",
            description:
              "Needs to manage students, classes, learning schedules, attendance, academic progress, and communication with learners.",
          },
          {
            title: "Sales / Admission Team",
            description:
              "Needs to manage potential students, consultation activities, follow-ups, and enrollment progress.",
          },
          {
            title: "Teachers",
            description:
              "Need to view class schedules, student lists, learning materials, assignments, and teaching-related information.",
          },
          {
            title: "Admin / Operation Staff",
            description:
              "Need to update records, organize data, support daily workflows, and make sure operational information stays accurate.",
          },
        ],
      },
    ],
    flow: [
      "New Lead",
      "Assign Staff",
      "Contact Customer",
      "Add Note / Task",
      "Update Status",
      "Book Trial Class",
      "Enroll Student",
      "Continue Care",
    ],
    architecture: [
      "Customer List",
      "Customer Detail",
      "Lead Status",
      "Assigned Staff",
      "Contact Information",
      "Notes",
      "Follow-up Tasks",
      "Interaction History",
      "Tags",
      "Filters",
      "Enrollment Info",
      "Related Class / Course",
    ],
    designSystem: {
      colors: [
        {
          name: "Brand Gradient",
          value: "Accent & Highlights",
          previewValue:
            "linear-gradient(120deg, #FF7854 0%, #F53292 34%, #7B4DFF 66%, #4BC3F7 100%)",
        },
        { name: "Primary", value: "#696CFF" },
        { name: "Primary Light", value: "#A4A7FF" },
        { name: "Primary Pale", value: "#E1E1FF" },
        { name: "Success", value: "#22C55E" },
        { name: "Info", value: "#12B6CB" },
        { name: "Warning", value: "#FFAB00" },
        { name: "Error", value: "#FF5630" },
        { name: "Surface", value: "#F8F9FB" },
        { name: "Muted", value: "#6B7A88" },
      ],
      typography: [
        "Section Title|H1 / 48px / Bold",
        "Screen Title|H2 / 32px / Bold",
        "Subtitle|Subtitle / 16px / Semibold",
        "Body|P1 / 15px / Regular",
        "Caption|P2 / 12px / Regular",
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
      image: "",
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
        title: "Customer List",
        description:
          "View, search, filter, and manage leads or students in one centralized list.",
        image: "/mockups/centerup-management-screen-customer-list.png",
      },
      {
        title: "Customer Detail",
        description:
          "Show customer profile, contact information, status, notes, tasks, history, and related learning data.",
        image: "/mockups/centerup-management-screen-customer-detail.png",
      },
      {
        title: "Call Log",
        description:
          "Monitor call records, outcomes, and follow-up activities in one place.",
        image: "/mockups/centerup-management-screen-call-log.png",
      },
      {
        title: "CRM Dashboard",
        description:
          "Track key CRM metrics and admission performance through visual reports.",
        image: "/mockups/centerup-management-screen-crm-dashboard.png",
      },
      {
        title: "Lead Pipeline",
        description:
          "Track customers through different admission stages and make the next action clearer for staff.",
        image: "/mockups/centerup-management-screen-lead-pipeline.png",
      },
    ],
    learned:
      "Operational products need restraint. The UI has to reduce visual noise while keeping enough density for users who repeat the same workflow every day.",
  },
];

export const getCaseStudyBySlug = (slug: string) =>
  caseStudies.find((caseStudy) => caseStudy.slug === slug);
