import LandingPage from "@/components/LandingPage/LandingPage";
import SEOJsonLd from "@/components/SEO/SEOJsonLD";
import { fetchCourseData } from "@/lib/api";
import { isValidOgType } from "@/types/og";
import { CourseData, MetaTag, RootResponse, SeoValue } from "@/types/types";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const json = await fetchCourseData();
  const data = json?.data;
  const seo: SeoValue | undefined = data?.seo;

  const findMeta = (name: string): string | undefined => {
    return seo?.defaultMeta?.find(
      (meta: MetaTag) =>
        meta.value === name &&
        (meta.type === "property" || meta.type === "name")
    )?.content;
  };

  const ogType = findMeta("og:type");
  const validType = isValidOgType(ogType) ? ogType : "website";

  return {
    title:
      seo?.title ||
      "Complete IELTS Course in Bangladesh - Munzereen Shahid [2025]",
    description:
      seo?.description ||
      "IELTS-এর সেরা প্রস্তুতি নিতে আজই জয়েন করুন Complete IELTS Course-টিতে, যেখানে থাকছে দেশসেরা IELTS ইন্সট্রাক্টরের গাইডলাইন, Mock Test ও প্রিমিয়াম হার্ডকপি বই।",
    keywords:
      seo?.keywords?.join(", ") ||
      "'IELTS Course','IELTS Course in BD','IELTS Preparation','IELTS Bangladesh'",
    openGraph: {
      title: findMeta("og:title") || seo?.title,
      description: findMeta("og:description") || seo?.description,
      url: findMeta("og:url"),
      locale: findMeta("og:locale"),
      type: validType,
      images: [
        {
          url: findMeta("og:image") || "",
          alt: findMeta("og:image:alt"),
          type: findMeta("og:image:type"),
        },
      ],
    },
  };
}

export default async function Page() {
  const json: RootResponse = await fetchCourseData();
  const data: CourseData = json?.data;
  const seo = data.seo;
  return (
    <div>
      <LandingPage data={data} />
      <SEOJsonLd schemas={seo.schema} />
    </div>
  );
}
