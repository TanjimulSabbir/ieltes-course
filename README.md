# 🌐 IELTS Course Landing Page 

This is a fully dynamic and SEO-optimized product landing page built with the latest Next.js 15 (App Router), leveraging the power of React Server Components, TypeScript, and TailwindCSS for fast, scalable, and maintainable frontend development.

The application fetches all content dynamically from an external API and renders it using modern rendering strategies such as Incremental Static Regeneration (ISR) and server-side rendering, ensuring both performance and freshness. It features reusable, modular components and supports localization, allowing content to be displayed in multiple languages (en and bn).

To enhance discoverability and sharing, it includes automated SEO metadata using generateMetadata(), full Open Graph support, and JSON-LD structured data injected directly into the page. The design is fully responsive and optimized for all screen sizes, providing a seamless experience on both desktop and mobile devices.

---
### Live Demo

✨ **Experience the full demo live:**  
👉 [**Explore the IELTS Course Landing Page »**](https://ieltes-course.vercel.app/)  

---


### Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/docs/app)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **SEO**: Native `generateMetadata()`, Open Graph, JSON-LD Schema
- **Rendering**: Server Components + Incremental Static Regeneration (ISR)
- **Deployment**: Vercel / Netlify / Docker-ready

---

### Features

##### Core Functionalities

| Feature                         | Status         | Details                                                  |
|----------------------------------|----------------|----------------------------------------------------------|
| Server-side Rendering            | ✅ Implemented | `async function Page()` in `app/page.tsx`                |
| Incremental Static Regeneration | ✅ Implemented | `export const revalidate = 60;`                          |
| SEO Metadata                     | ✅ Implemented | Dynamic `generateMetadata()` with Open Graph             |
| JSON-LD Structured Data          | ✅ Implemented | Injected via `<Script type="application/ld+json" />`     |
| Responsive Design                | ✅ Implemented | Fully responsive using TailwindCSS                       |
| TypeScript                       | ✅ Used        | With custom `types.ts`                                   |
| Localization                     | ✅ Supported   | Supports `lang=en` or `lang=bn` in API query             |
| Component Reusability            | ✅ Applied     | Structured by feature (LandingPage, SEO, etc.)           |

---

### Sections Included

The following data-driven sections are rendered dynamically:

- 📌 **Title** and HTML **Description**
- 👩‍🏫 **Course Instructors** (`sections[]` with `type=instructor`)
- 🎥 **Product Trailer** (`media` array → YouTube video)
- 🧠 **What You Will Learn** (`sections[]` with `type=pointers`)
- 📖 **Course Layout & About** (`sections[]` with `type=features` and `about`)
- ✅ **Checklist** (from `checklist[]`)
- 🔖 **Call to Action** (`cta_text`)
- 💬 **Testimonials** (user reviews, video, and text)

---

### API Usage

**Endpoint**:
```http
GET https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=en
X-TENMS-SOURCE-PLATFORM: web
```


####  1. Clone Repository

```
git clone https://github.com/your-username/ielts-course-landing.git
```

```
cd ielts-course-landing
```

#### 2. Install Dependencies

```
npm install
```

#### 3. Start Local Server

```
npm run dev
```

Visit http://localhost:3000

---

### Author
<h3 style="margin: 0; font-size: 2rem; font-weight: 800;">
  Tanjimul Islam Sabbir
</h3>
<h6 style="margin-top: 2px; margin-bottom:40px; font-size: .8rem;  font-weight: 400; color: #555;">
  Software Developer & Frontend Enthusiast
</h6>


[![Email](https://img.shields.io/badge/Email-tanjimulsabbir.dev%40gmail.com-red?style=flat-square&logo=gmail)](mailto:tanjimulsabbir.dev@gmail.com)  
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-0a192f?style=flat-square&logo=vercel&logoColor=white)](https://tanjimulsabbir.vercel.app/)  
[![GitHub](https://img.shields.io/badge/GitHub-TanjimulSabbir-181717?style=flat-square&logo=github)](https://github.com/TanjimulSabbir)


Let me know if you also want:
- `package.json` optimization tips
- Deployment instructions (Vercel, Netlify)

Good luck with your submission! ✅


