import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";
import { profile } from "@/data/profile";
import { ThemeRegistry } from "@/theme/ThemeRegistry";

export const metadata: Metadata = {
  metadataBase: new URL("https://ngankhanh.design"),
  title: {
    default: `${profile.name} - UX/UI Designer Portfolio`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Portfolio của Ngân Khánh, UX/UI Designer tập trung vào product thinking, interface design, design systems và case studies.",
  keywords: [
    "UX/UI Designer",
    "Product Designer",
    "Portfolio",
    "UX Research",
    "UI Design",
    "Design System",
    "Figma",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    title: `${profile.name} - UX/UI Designer Portfolio`,
    description:
      "Case studies, product thinking và kỹ năng UX/UI của Ngân Khánh.",
    type: "website",
    locale: "vi_VN",
    url: "https://ngankhanh.design",
    siteName: `${profile.name} Portfolio`,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
        <Analytics />
      </body>
    </html>
  );
}
