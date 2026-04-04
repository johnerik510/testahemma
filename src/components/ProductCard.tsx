import Link from "next/link";
import Image from "next/image";
import AffiliateButton from "@/components/AffiliateButton";
import { buildAffiliateUrl } from "@/lib/tracking";
import type { TestProduct } from "@/types/product";

interface ProductCardProps {
  product: TestProduct;
  position?: string;
  rank?: number;
}

function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "md" }) {
  const starClass = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";
  const textClass = size === "sm" ? "text-xs" : "text-sm";
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex" role="img" aria-label={`Betyg: ${rating.toFixed(1)} av 10`}>
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`${starClass} ${star <= Math.round(rating / 2) ? "text-yellow-400" : "text-gray-200"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className={`${textClass} font-semibold text-gray-700`}>{rating.toFixed(1)}/10</span>
    </div>
  );
}

function LabBadge({ cert }: { cert: string }) {
  return (
    <span className="inline-flex items-center gap-1 bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold rounded-full px-2.5 py-0.5">
      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
      {cert}
    </span>
  );
}

function SampleTypeBadge({ type }: { type: string }) {
  return (
    <span className="inline-flex items-center gap-1 bg-gray-50 border border-gray-200 text-gray-500 text-xs rounded-full px-2 py-0.5">
      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
      {type}
    </span>
  );
}

export default function ProductCard({ product, position = "list", rank }: ProductCardProps) {
  const subId = `TH-${product.slug}-${position}`;
  const href = buildAffiliateUrl(
    product.affiliateUrl,
    product.network,
    product.adtractionProgramId,
    product.addRevenueProgramId,
    subId,
    product.awinProgramId
  );

  const featuresShown = product.features.slice(0, 5);

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">

        {/* Logo */}
        <div className="w-16 h-16 sm:w-28 sm:h-28 bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center shrink-0">
          <Image
            src={product.logoUrl}
            alt={`${product.name} logotyp`}
            width={112}
            height={112}
            className="object-contain w-full h-full p-2"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Name + price row */}
          <div className="flex items-start justify-between gap-2">
            <Link href={`/recension/${product.slug}/`} className="text-base sm:text-lg font-bold text-gray-900 hover:text-teal-600 transition-colors leading-tight">
              {rank && <span className="text-teal-600 mr-1">#{rank}</span>}
              {product.name}
            </Link>
            <div className="text-right shrink-0 ml-2">
              <div className="text-xs text-gray-400">från</div>
              <div className="text-base sm:text-xl font-bold text-gray-900 whitespace-nowrap">{product.priceFrom}</div>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-snug">{product.shortDescription}</p>

          {/* Lab cert + sample type badges */}
          <div className="flex flex-wrap items-center gap-2 mt-2">
            {product.labCertification && <LabBadge cert={product.labCertification} />}
            <SampleTypeBadge type={product.sampleType} />
          </div>

          {/* Rating + turnaround */}
          <div className="flex items-center gap-2 mt-3 flex-wrap">
            <StarRating rating={product.rating} size="sm" />
            <span className="text-xs text-gray-400">&bull;</span>
            <span className="text-xs text-gray-500">{product.turnaround}</span>
            {product.ratings.accuracy >= 9 && (
              <span className="text-xs font-medium text-teal-600 bg-teal-50 rounded-full px-2 py-0.5">
                Noggrannhet {product.ratings.accuracy}/10
              </span>
            )}
          </div>

          {/* Features */}
          <ul className="mt-2.5 space-y-1.5">
            {featuresShown.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {f}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex items-center gap-3 mt-4 flex-wrap">
            <AffiliateButton
              href={href}
              productName={product.name}
              network={product.network}
              location={subId}
              price={product.priceFrom}
              text={product.ctaText}
              size="sm"
            />
            <Link href={`/recension/${product.slug}/`} className="text-xs sm:text-sm text-teal-600 hover:underline font-medium">
              Läs recension →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
