declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Track affiliate link clicks with GA4 custom event.
 * Sub-ID format: TH-[productSlug]-[pageSlug]-[position]
 * Example: TH-werlabs-blodtester-hero
 */
export function trackAffiliateClick(
  productName: string,
  network: "adtraction" | "addrevenue" | "direct",
  location: string,
  price?: string
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "affiliate_click", {
      event_category: "affiliate",
      product_name: productName,
      affiliate_network: network,
      click_location: location,
      product_price: price,
    });
  }
}

/**
 * Build the affiliate tracking URL with sub-ID.
 * Replace PROGRAM_ID and PUBLISHER_ID with real values from Adtraction/AddRevenue.
 *
 * Adtraction: https://track.adtraction.com/t/t?a=PROGRAM_ID&as=PUBLISHER_ID&t=2&tk=1&epi=SUB_ID&url=ENCODED_DEST
 * AddRevenue: https://www.addrevenue.io/click?program=PROGRAM_ID&epi=SUB_ID&url=ENCODED_DEST
 */
export function buildAffiliateUrl(
  affiliateUrl: string,
  network: "adtraction" | "addrevenue" | "direct",
  adtractionProgramId?: string,
  addRevenueProgramId?: string,
  subId?: string
): string {
  const encodedUrl = encodeURIComponent(affiliateUrl);
  const sub = subId || "testahemma";

  if (network === "adtraction" && adtractionProgramId) {
    // Replace YOUR_PUBLISHER_ID with your Adtraction publisher ID from se.adtraction.com
    const PUBLISHER_ID = process.env.NEXT_PUBLIC_ADTRACTION_PUBLISHER_ID || "YOUR_PUBLISHER_ID";
    return `https://track.adtraction.com/t/t?a=${adtractionProgramId}&as=${PUBLISHER_ID}&t=2&tk=1&epi=${sub}&url=${encodedUrl}`;
  }

  if (network === "addrevenue" && addRevenueProgramId) {
    // Replace YOUR_PUBLISHER_ID with your AddRevenue publisher ID from addrevenue.io
    return `https://www.addrevenue.io/click?program=${addRevenueProgramId}&epi=${sub}&url=${encodedUrl}`;
  }

  // Fallback: direct link (until affiliate programs are approved and IDs are filled in)
  return affiliateUrl;
}
