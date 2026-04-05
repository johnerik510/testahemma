import type { TestProduct } from "@/types/product";

/**
 * Build an Article schema for guide/informational pages.
 * Ensures consistent E-E-A-T signals across all editorial content.
 */
export function buildArticleSchema({
  headline,
  description,
  datePublished,
  dateModified,
  url,
  authorName = "John Erik Johansson",
  authorUrl = "https://www.testahemma.se/om-oss/",
  authorJobTitle = "Grundare & hälsotestexpert",
}: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  url: string;
  authorName?: string;
  authorUrl?: string;
  authorJobTitle?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: authorName,
      url: authorUrl,
      jobTitle: authorJobTitle,
    },
    publisher: {
      "@type": "Organization",
      name: "Testahemma.se",
      url: "https://www.testahemma.se",
    },
    mainEntityOfPage: url,
  };
}

/**
 * Shared shipping details for all products on testahemma.se.
 * These are home-testing kits shipped within Sweden.
 */
const shippingDetails = {
  "@type": "OfferShippingDetails",
  shippingDestination: {
    "@type": "DefinedRegion",
    addressCountry: "SE",
  },
  shippingRate: {
    "@type": "MonetaryAmount",
    value: "0",
    currency: "SEK",
  },
  deliveryTime: {
    "@type": "ShippingDeliveryTime",
    handlingTime: {
      "@type": "QuantitativeValue",
      minValue: 1,
      maxValue: 3,
      unitCode: "DAY",
    },
    transitTime: {
      "@type": "QuantitativeValue",
      minValue: 1,
      maxValue: 3,
      unitCode: "DAY",
    },
  },
};

/**
 * Shared return policy for all products.
 * Most testing kits allow returns within 14 days (Swedish distance selling law).
 */
const merchantReturnPolicy = {
  "@type": "MerchantReturnPolicy",
  applicableCountry: "SE",
  returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
  merchantReturnDays: 14,
  returnMethod: "https://schema.org/ReturnByMail",
  returnFees: "https://schema.org/FreeReturn",
};

/**
 * Build a complete Product schema object with all fields required by
 * Google Merchant listings and Product snippets:
 * - image
 * - brand
 * - review + aggregateRating
 * - offers with shippingDetails + hasMerchantReturnPolicy
 */
export function buildProductSchema(p: TestProduct) {
  const price = p.priceFrom.replace(/[^0-9]/g, "");
  const imageUrl = `https://www.testahemma.se${p.productImageUrl}`;

  return {
    "@type": "Product",
    name: p.name,
    url: `https://www.testahemma.se/recension/${p.slug}/`,
    description: p.description,
    image: imageUrl,
    brand: {
      "@type": "Brand",
      name: p.name,
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: p.rating,
        bestRating: 10,
        worstRating: 1,
      },
      author: {
        "@type": "Person",
        name: p.author || "Anna Lindström",
        url: "https://www.testahemma.se/om-oss/",
      },
      publisher: {
        "@type": "Organization",
        name: "Testahemma.se",
        url: "https://www.testahemma.se",
      },
      datePublished: p.datePublished,
      reviewBody: p.review.verdict,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: p.rating,
      bestRating: 10,
      worstRating: 1,
      ratingCount: 1,
      reviewCount: 1,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "SEK",
      price: price,
      availability: "https://schema.org/InStock",
      url: p.affiliateUrl,
      seller: {
        "@type": "Organization",
        name: p.name,
      },
      shippingDetails: shippingDetails,
      hasMerchantReturnPolicy: merchantReturnPolicy,
    },
  };
}

/**
 * Build the full Review schema for a product review page.
 * The itemReviewed includes the complete Product schema with all
 * required fields (image, brand, aggregateRating, shippingDetails, returnPolicy).
 */
export function buildReviewSchema(p: TestProduct) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    name: `${p.name} recension 2026`,
    reviewBody: p.review.verdict,
    datePublished: p.datePublished,
    dateModified: p.dateModified,
    reviewRating: {
      "@type": "Rating",
      ratingValue: p.rating,
      bestRating: 10,
      worstRating: 1,
    },
    author: {
      "@type": "Person",
      name: p.author || "Anna Lindström",
      url: "https://www.testahemma.se/om-oss/",
    },
    publisher: {
      "@type": "Organization",
      name: "Testahemma.se",
      url: "https://www.testahemma.se",
    },
    itemReviewed: buildProductSchema(p),
  };
}

/**
 * Build an ItemList schema with full Product details embedded in each ListItem.
 * This ensures Product snippets and Merchant listings are valid on category/list pages.
 */
export function buildProductListSchema(
  listName: string,
  listUrl: string,
  listDescription: string,
  productList: TestProduct[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName,
    description: listDescription,
    url: listUrl,
    numberOfItems: productList.length,
    itemListElement: productList.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `https://www.testahemma.se/recension/${p.slug}/`,
      item: buildProductSchema(p),
    })),
  };
}
