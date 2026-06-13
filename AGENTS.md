# AGENTS.md — Portfolio Frontend Project

This file defines the working rules for AI coding agents in this repository.

The project is a personal portfolio website built with **Next.js**, **React**, **TypeScript**, and **Material UI (MUI)**. The main goal is to create a clean, modern, responsive, and professional portfolio that presents skills, experience, projects, and contact information clearly.

---

## 1. Project Goal

Build a high-quality portfolio website that feels:

- Modern but not over-designed
- Clean, premium, and easy to read
- Fast, responsive, and SEO-friendly
- Suitable for a Ux/Ui Designer, or product-design profile
- Easy to maintain and extend over time

Prioritize clarity, visual polish, performance, and content structure over unnecessary complexity.

---

## 2. Tech Stack

Use the following stack:

- Next.js with App Router
- React
- TypeScript
- Material UI (MUI)
- CSS-in-JS through MUI `sx` and theme customization
- Optional animation with Framer Motion only when it adds value

Do not add GraphQL, Apollo Client, complex state management, backend integration, or heavy architecture unless explicitly requested.

---

## 3. General Coding Rules

When writing code:

- Use TypeScript strictly.
- Prefer functional React components.
- Keep components small, readable, and reusable.
- Avoid over-engineering.
- Avoid unnecessary abstractions.
- Avoid deeply nested components.
- Use clear, descriptive names.
- Keep logic simple and easy to follow.
- Do not introduce libraries unless they are clearly useful.
- Do not rewrite unrelated files.
- Preserve existing project structure and style unless improvement is requested.
- Make changes that are production-ready, not just demo-level.

Before finishing a task, check for:

- TypeScript errors
- Broken imports
- Responsive issues
- Visual inconsistency
- Unused variables
- Unnecessary dependencies
- Poor accessibility
- Performance regressions

---

## 4. Folder Structure

Prefer this structure for a portfolio project:

```txt
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    layout/
      Header.tsx
      Footer.tsx
      Section.tsx
    sections/
      HeroSection.tsx
      AboutSection.tsx
      ExperienceSection.tsx
      ProjectsSection.tsx
      SkillsSection.tsx
      ContactSection.tsx
    ui/
      SectionTitle.tsx
      ProjectCard.tsx
      SkillBadge.tsx
      ExperienceCard.tsx
  data/
    profile.ts
    projects.ts
    experience.ts
    skills.ts
  theme/
    theme.ts
  types/
    portfolio.ts
```

Rules:

- Keep page-level composition inside `app/page.tsx`.
- Keep portfolio content inside `src/data`.
- Keep reusable visual components inside `components/ui`.
- Keep major page sections inside `components/sections`.
- Avoid placing large content arrays directly inside components.

---

## 5. Portfolio Content Rules

Portfolio content should be written clearly and professionally.

Use concise but strong wording.

Good content style:

- Specific achievements
- Clear technology stack
- Measurable impact when available
- Real project context
- Business value, not only technical details

Avoid:

- Generic claims like "hard-working developer"
- Too much emotional writing
- Long paragraphs
- Buzzword-heavy descriptions
- Fake numbers or exaggerated claims

For each project, prefer this shape:

```ts
export type Project = {
  title: string;
  description: string;
  role?: string;
  highlights: string[];
  techStack: string[];
  link?: string;
  github?: string;
  image?: string;
};
```

For experience, prefer this shape:

```ts
export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  techStack?: string[];
};
```

---

## 6. Visual Design Direction

The design should feel like a modern SaaS/product portfolio.

Recommended style:

- Clean layout
- Strong typography
- Generous spacing
- Soft cards
- Subtle borders
- Light shadows
- Smooth but minimal animation
- Clear section hierarchy
- Professional color palette
- Mobile-first responsive layout

Avoid:

- Too many gradients
- Too many animations
- Overly colorful UI
- Dashboard-like complexity
- Generic template feeling
- Heavy glassmorphism everywhere
- Dark mode with poor contrast

The portfolio should look premium, calm, and trustworthy.

---

## 7. Color Style Rules

Use a limited color palette.

Recommended direction:

- Neutral background
- Dark text for readability
- One primary accent color
- One soft secondary accent
- Subtle border colors
- Muted text for supporting content

Example palette direction:

```ts
const palette = {
  background: {
    default: "#F8FAFC",
    paper: "#FFFFFF",
  },
  text: {
    primary: "#0F172A",
    secondary: "#475569",
  },
  primary: {
    main: "#2563EB",
  },
  secondary: {
    main: "#7C3AED",
  },
  divider: "#E2E8F0",
};
```

Do not randomly introduce new colors in individual components. Prefer using the MUI theme.

---

## 8. Typography Rules

Typography is one of the most important parts of the portfolio.

Use:

- Large, confident hero title
- Clear section headings
- Comfortable body text
- Short paragraphs
- Strong contrast between title, subtitle, and metadata

Recommended hierarchy:

- Hero title: very large, bold, tight line-height
- Section title: medium-large, bold
- Card title: semi-bold
- Body text: readable, not too small
- Metadata: smaller and muted

Avoid:

- Long text blocks
- Tiny body text
- Too many font weights
- Too many heading styles
- Center-aligning everything

Default preference:

- Use left-aligned content for readability.
- Center alignment is acceptable for hero sections or short intro blocks.

---

## 9. Spacing and Layout Rules

Use consistent spacing.

Recommended layout rules:

- Use `Container` for page width.
- Use `Box`, `Stack`, and `Grid` from MUI for layout.
- Use generous vertical spacing between sections.
- Use consistent card padding.
- Use responsive spacing values through MUI breakpoints.

Example:

```tsx
<Box
  component="section"
  sx={{
    py: { xs: 8, md: 12 },
  }}
>
```

Avoid:

- Random margins
- Inconsistent padding
- Sections that feel cramped
- Cards with different spacing rules
- Fixed heights unless necessary

---

## 10. MUI Usage Rules

Use MUI properly and consistently.

Prefer:

- `Box` for structural layout
- `Stack` for vertical/horizontal spacing
- `Container` for max-width
- `Typography` for text
- `Button` for actions
- `Card` or `Paper` for content blocks
- `Chip` for skills and tags
- `Grid` for responsive layouts

Use `sx` for component-level styling.

Do not:

- Use inline `style={{}}` unless absolutely necessary.
- Mix too many styling approaches.
- Hardcode repeated values everywhere.
- Overuse custom CSS classes.
- Override MUI deeply unless needed.

Prefer theme customization for global style decisions.

---

## 11. Component Design Rules

Each component should have a clear responsibility.

Good components:

- `HeroSection`
- `AboutSection`
- `ExperienceSection`
- `ProjectsSection`
- `SkillsSection`
- `ContactSection`
- `SectionTitle`
- `ProjectCard`
- `ExperienceCard`
- `SkillBadge`

Rules:

- Keep section components focused on layout and rendering.
- Keep data outside components when possible.
- Use typed props.
- Do not make components too generic too early.
- Do not add complex state unless the UI really needs it.

---

## 12. Responsive Design Rules

The portfolio must work well on:

- Mobile
- Tablet
- Desktop
- Large desktop screens

Mobile-first rules:

- Hero title must not overflow.
- Cards should stack vertically on mobile.
- Navigation should be simple and usable.
- Buttons should be easy to tap.
- Section spacing should be reduced on smaller screens.
- Images should scale properly.
- No horizontal scrolling.

Use MUI responsive syntax:

```tsx
sx={{
  fontSize: { xs: 36, md: 56 },
  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
}}
```

---

## 13. Animation Rules

Animation should be subtle and purposeful.

Use animation for:

- Hero entrance
- Section fade-in
- Card hover
- Button hover
- Small transitions

Avoid:

- Too much movement
- Slow animations
- Distracting effects
- Animation that hurts readability
- Animation-heavy pages that reduce performance

If using Framer Motion:

- Keep animations simple.
- Use reusable motion variants.
- Respect performance.
- Avoid animating large layout-heavy elements unnecessarily.

---

## 14. SEO Rules

The portfolio should be SEO-friendly.

Use:

- Proper metadata in `app/layout.tsx`
- Meaningful page title
- Clear description
- Open Graph metadata when appropriate
- Semantic HTML
- Proper heading order
- Descriptive links
- Alt text for images

The homepage should clearly communicate:

- Who the person is
- What they do
- Key skills
- Notable projects
- Contact path

---

## 15. Accessibility Rules

Do not sacrifice accessibility for visual style.

Required:

- Good text contrast
- Semantic sections
- Proper button and link labels
- Keyboard-friendly navigation
- Visible focus states
- Alt text for meaningful images
- Do not use color alone to communicate meaning

Avoid:

- Clickable `div`s
- Missing `aria-label` on icon-only buttons
- Poor contrast text
- Overly small tap targets

---

## 16. Performance Rules

The portfolio should be fast.

Prioritize:

- Static rendering where possible
- Minimal dependencies
- Optimized images
- Lazy loading non-critical content
- Avoiding heavy animation
- Avoiding unnecessary client components

Next.js rules:

- Use Server Components by default.
- Use `"use client"` only when needed.
- Keep client components small.
- Do not move the whole page to client-side rendering unless necessary.
- Use `next/image` for images when possible.
- Use `next/link` for internal navigation.

---

## 17. Content Sections

Recommended portfolio sections:

1. Hero
2. About
3. Skills
4. Experience
5. Projects
6. Contact

Optional sections:

- Testimonials
- Certifications
- Blog
- Case studies
- Tech stack
- Featured achievements

Do not add too many sections unless they add real value.

---

## 18. Hero Section Rules

The hero section should quickly answer:

- Who is this person?
- What role do they target?
- What value do they bring?
- What should the visitor do next?

Recommended hero content:

- Name
- Role/title
- Short positioning statement
- Primary CTA
- Secondary CTA
- Key stats or badges

Avoid:

- Long biography in the hero
- Too many buttons
- Overly abstract slogans
- Weak headline

---

## 19. Project Section Rules

Projects should be presented like case studies, not just screenshots.

Each project card should show:

- Project name
- Short description
- Role
- Key achievements
- Tech stack
- Optional links

Emphasize:

- Problem solved
- Technical ownership
- Business/user impact
- Scale when available
- Engineering quality

Avoid:

- Listing only technologies
- Overly long descriptions
- Too many projects with no depth

---

## 20. Experience Section Rules

Experience should highlight responsibility and impact.

Good highlights:

- Built and maintained production systems
- Improved performance
- Led technical decisions
- Designed architecture
- Mentored or supported team members
- Delivered measurable business value

Avoid:

- Copying a full CV into the website
- Too much internal company detail
- Long paragraphs

---

## 21. Skills Section Rules

Skills should be grouped clearly.

Recommended groups:

- Frontend
- Backend
- Architecture
- DevOps / Infrastructure
- Databases
- Tools
- AI / Automation

For a portfolio website, skills should be scannable.

Use chips, cards, or grouped lists.

Avoid:

- Huge unstructured skill lists
- Claiming expertise in too many unrelated tools
- Over-designing the skills section

---

## 22. Contact Section Rules

The contact section should be simple and clear.

Include:

- Email
- LinkedIn
- GitHub
- Optional CV download link
- Optional short invitation message

Avoid:

- Complicated contact forms unless required
- Asking for too much information
- Making contact hard to find

---

## 23. Code Style Example

Good MUI component style:

```tsx
import { Box, Container, Typography } from "@mui/material";

export function AboutSection() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography
          component="h2"
          variant="h3"
          sx={{
            fontWeight: 700,
            letterSpacing: "-0.03em",
            mb: 3,
          }}
        >
          About me
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            maxWidth: 720,
            fontSize: { xs: 16, md: 18 },
            lineHeight: 1.8,
          }}
        >
          I build scalable, product-focused web applications with strong
          attention to user experience, system design, and maintainable
          engineering.
        </Typography>
      </Container>
    </Box>
  );
}
```

---

## 24. Things the Agent Should Not Do

Do not:

- Add GraphQL or Apollo Client unless explicitly requested.
- Add authentication unless explicitly requested.
- Add dashboard architecture unless explicitly requested.
- Add database logic.
- Add backend API layers.
- Add complex global state management.
- Add unnecessary form libraries.
- Add random UI libraries that conflict with MUI.
- Replace MUI with Tailwind unless explicitly requested.
- Create a generic template-looking design.
- Ignore mobile responsiveness.
- Ignore SEO metadata.
- Hardcode all content inside UI components.
- Add fake achievements, fake companies, or fake numbers.

---

## 25. Task Execution Rules

When working on a task:

1. Understand the requested change.
2. Inspect existing structure before editing.
3. Reuse existing components and style patterns.
4. Make the smallest clean change that solves the task.
5. Keep design consistent with the portfolio style.
6. Check responsive behavior.
7. Check TypeScript correctness.
8. Summarize what changed after completion.

When uncertain, choose the simpler and cleaner solution.

---

## 26. Preferred Design Personality

The preferred design personality is:

- Professional
- Calm
- Confident
- Product-minded
- Technical but human
- Premium but not flashy
- Clear and conversion-focused

The final website should feel like a serious personal brand website, not a playful landing page or a generic developer template.

---

## 27. Final Review Checklist

Before considering any task complete, verify:

- The page looks good on mobile and desktop.
- Typography is consistent.
- Spacing is consistent.
- Colors come from the theme where possible.
- Components are readable and maintainable.
- There are no unused imports.
- There are no obvious TypeScript errors.
- SEO metadata is not broken.
- Accessibility is acceptable.
- No unnecessary dependency was added.
- The result supports a strong personal portfolio.
