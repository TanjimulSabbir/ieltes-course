// app/page.tsx

import LandingPage from "@/components/LandingPage/LandingPage";
import SEOJsonLd from "@/components/SEO/SEOJsonLD";
import { CourseData, RootResponse } from "@/types/types";
import { Metadata } from "next";

export const revalidate = 60; // ISR

async function fetchCourseData(lang = "bn") {
  const res = await fetch(
    `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
    {
      headers: { "X-TENMS-SOURCE-PLATFORM": "web" },
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch course data");
  }

  return res.json();
}

// ⬇️ Add this to inject metadata
export async function generateMetadata(): Promise<Metadata> {
  const json = await fetchCourseData();
  const seo = json?.seo;

  const findMeta = (name: string) =>
    seo?.defaultMeta?.find((m: any) => m.value === name)?.content;

  return {
    title: seo?.title,
    description: seo?.description,
    keywords: seo?.keywords,
    openGraph: {
      title: findMeta("og:title"),
      description: findMeta("og:description"),
      url: findMeta("og:url"),
      locale: findMeta("og:locale"),
      type: findMeta("og:type"),
      images: [
        {
          url: findMeta("og:image"),
          alt: findMeta("og:image:alt"),
          type: findMeta("og:image:type"),
        },
      ],
    },
  };
}

export default async function Page() {
  const json:RootResponse = await fetchCourseData();
  const data:CourseData = json?.data;
  const seo = data.seo;

  return (
    <>
      <LandingPage data={data} />
      {/* <SEOJsonLd schemas={seo} /> */}
    </>
  );
}
