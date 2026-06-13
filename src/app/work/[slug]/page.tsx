import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CaseStudyDetail } from "@/components/sections/CaseStudyDetail";
import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {};
  }

  return {
    title: caseStudy.title,
    description: caseStudy.summary,
    openGraph: {
      title: `${caseStudy.title} - Ngân Khánh`,
      description: caseStudy.summary,
      images: [caseStudy.coverImage],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <CaseStudyDetail caseStudy={caseStudy} />
      </main>
      <Footer />
    </>
  );
}
