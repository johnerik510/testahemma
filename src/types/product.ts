export type CategorySlug =
  | "blodtester"
  | "hormontester"
  | "sti-tester"
  | "vitamintester"
  | "allergitester"
  | "tarmhalsa"
  | "cancermarkorer"
  | "kolesteroltester";

export interface TestProduct {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;

  // Pricing
  priceFrom: string;
  priceNote?: string;

  // Affiliate — replace direct URLs with Adtraction/AddRevenue tracking URLs when approved
  affiliateUrl: string;
  // Adtraction format: https://track.adtraction.com/t/t?a=PROGRAM_ID&as=PUBLISHER_ID&t=2&tk=1&url=ENCODED_DEST
  // AddRevenue format: https://www.addrevenue.io/click?program=PROGRAM_ID&epi=SUB_ID&url=ENCODED_DEST
  network: "adtraction" | "addrevenue" | "direct";
  adtractionProgramId?: string; // fill when approved by Adtraction
  addRevenueProgramId?: string; // fill when approved by AddRevenue
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
