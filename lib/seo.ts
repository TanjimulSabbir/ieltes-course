export async function generateMetadata(data) {
  
  // Build metadata object for Next.js Head
  return {
    title: data.seo?.title || data.title,
    description: data.description,
    keywords: data.seo?.keywords?.join(", ") || undefined,
    openGraph: {
      title: data.seo?.title || data.title,
      description: data.seo?.description || data.description,
      images: data.seo?.defaultMeta
        .filter((meta) => meta.value === "og:image")
        .map((meta) => meta.content),
      type:
        data.seo?.defaultMeta.find((meta) => meta.value === "og:type")
          ?.content || "website",
      url: data.seo?.defaultMeta.find((meta) => meta.value === "og:url")
        ?.content,
      locale:
        data.seo?.defaultMeta.find((meta) => meta.value === "og:locale")
          ?.content || "en_US",
    },
    // Add other SEO tags like twitter, canonical etc if needed
  };
}
