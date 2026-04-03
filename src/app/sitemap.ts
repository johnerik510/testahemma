import type { MetadataRoute } from "next";
import { getAllProductSlugs } from "@/data/products";

const BASE = "https://www.testahemma.se";

const categories = [
  "blodtester", "hormontester", "sti-tester", "vitamintester",
  "allergitester", "tarmhalsa", "cancermarkorer", "kolesteroltester",
];

const guides = [
  "d-vitaminbrist-symtom", "vad-ar-hemtest", "hur-fungerar-hemtest",
  "sti-testa-hemma", "hormoner-och-halsa", "tolka-blodvarden",
  "kolesterol-varden", "tarmflora-halsa", "psa-test-prostata",
  "allergitestning-guide", "b12-brist-symtom", "sköldkörteltest-hemma",
  "testosteron-test-hemma", "jarnbrist-symtom", "klamydia-test-hemma",
  "ferritin-normalt-varde", "menopaus-blodprov", "insulinresistens-test",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const slugs = getAllProductSlugs();

  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/basta-hemtest/`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE}/blodprov-hemma/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    ...categories.map((c) => ({
      url: `${BASE}/${c}/`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...slugs.map((s) => ({
      url: `${BASE}/recension/${s}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    { url: `${BASE}/guider/`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...guides.map((g) => ({
      url: `${BASE}/guider/${g}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    { url: `${BASE}/om-oss/`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/hur-vi-testar/`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/annonsering/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/integritetspolicy/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/kontakt/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
