"use client";

import { SchemaItem } from "@/types/types";
import Script from "next/script";

export default function SEOJsonLd({ schemas }: { schemas?: SchemaItem[] }) {
  if (!schemas || schemas.length === 0) return null;

  return (
    <>
      {schemas
        ?.filter((schema) => schema?.meta_value?.trim())
        ?.map((schema, index) => (
          <Script
            key={index}
            id={`seo-schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: schema.meta_value,
            }}
          />
        ))}
    </>
  );
}
