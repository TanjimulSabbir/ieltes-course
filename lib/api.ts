export async function fetchCourseData(lang = "bn") {
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
