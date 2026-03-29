export type CategorySlug =
  | "blodtester"
  | "hormontester"
  | "sti-tester"
  | "vitamintester"
  | "allergitester"
  | "tarmhalsa"
  | "cancermarkorer"
  | "kolesteroltester"
  | "fertilitetstester";

export interface TestProduct {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;

  // Pricing
  priceFrom: string;
  priceNote?: string;

  // Affiliate — replace direct URLs with tracking URLs when approved
  affiliateUrl: string;
  network: "adtraction" | "addrevenue" | "awin" | "direct";
  adtractionProgramId?: string; // fill when approved by Adtraction
  addRevenueProgramId?: string; // fill when approved by AddRevenue
  awinProgramId?: string; // fill when approved by Awin (merchant ID / awinmid)
  ctaText: string;

  // Categories
  categories: CategorySlug[];

  // Ratings (1–10)
  rating: number;
  ratings: {
    accuracy: number;
    ease: number;
    speed: number;
    value: number;
    support: number;
  };

  // Product details
  testsIncluded: string[];
  sampleType: string;
  turnaround: string;
  labCertification?: string;
  prescription: boolean;
  ageRestriction?: string;

  // Content
  features: string[];
  pros: string[];
  cons: string[];
  review: {
    intro: string;
    accuracy: string;
    process: string;
    results: string;
    price: string;
    verdict: string;
  };
  faqs: { question: string; answer: string }[];

  // Images — real product images from manufacturer
  logoUrl: string;
  productImageUrl: string;

  // SEO
  datePublished: string;
  dateModified: string;
  author?: string;
}

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  longDescription: string;
  icon: string;
  color: string;
  keywords: string[];
}
