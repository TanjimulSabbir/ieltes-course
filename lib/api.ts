export async function getStaticProps() {
  const res = await fetch(
    "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=bn",
    {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
      },
    }
  );

  if (!res.ok) {
    return {
      notFound: true,
    };
  }

  const json = await res.json();

  return {
    props: {
      data: json.data || null,
    },
    revalidate: 60, // ISR: regenerate the page every 60 seconds
  };
}
