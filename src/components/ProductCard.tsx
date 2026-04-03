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

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">

        {/* Mobile top row: logo + name + price */}
        <div className="flex items-start gap-3 sm:block">
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

          {/* Name + price: visible on mobile next to logo, hidden on desktop */}
          <div className="sm:hidden flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <Link href={`/recension/${product.slug}/`} className="text-base font-bold text-gray-900 hover:text-teal-600 transition-colors leading-tight">
                {rank && <span className="text-teal-600 mr-1">#{rank}</span>}
                {product.name}
              </Link>
              <div className="text-right shrink-0">
                <div className="text-xs text-gray-400">från</div>
                <div className="text-base font-bold text-gray-900 whitespace-nowrap">{product.priceFrom}</div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-0.5">{product.shortDescription}</p>
          </div>
        </div>

        {/* Desktop content */}
        <div className="hidden sm:block flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <Link href={`/recension/${product.slug}/`} className="text-lg font-bold text-gray-900 hover:text-teal-600 transition-colors leading-tight">
              {rank && <span className="text-teal-600 mr-1">#{rank}</span>}
              {product.name}
            </Link>
            <div className="text-right shrink-0 ml-2">
              <div className="text-xs text-gray-400">från</div>
              <div className="text-xl font-bold text-gray-900 whitespace-nowrap">{product.priceFrom}</div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{product.shortDescription}</p>
        </div>

        {/* Star rating + features + CTA — full width below on mobile, in desktop column */}
        <div className="sm:hidden">
          <div className="flex items-center gap-2 mt-1">
            <div className="flex" role="img" aria-label={`Betyg: ${product.rating.toFixed(1)} av 10`}>
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={`w-3.5 h-3.5 ${star <= Math.round(product.rating / 2) ? "text-yellow-400" : "text-gray-200"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs font-semibold text-gray-700">{product.rating.toFixed(1)}/10</span>
            <span className="text-xs text-gray-400">&bull; {product.turnaround}</span>
          </div>
          <ul className="mt-2 space-y-1">
            {product.features.slice(0, 3).map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-gray-600">
                <svg className="w-3.5 h-3.5 text-teal-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {f}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 mt-3 flex-wrap">
            <AffiliateButton
              href={href}
              productName={product.name}
              network={product.network}
              location={subId}
              price={product.priceFrom}
              text={product.ctaText}
              size="sm"
            />
            <Link href={`/recension/${product.slug}/`} className="text-xs text-teal-600 hover:underline font-medium">
              Läs recension →
            </Link>
          </div>
        </div>

      </div>

      {/* Desktop: rating + features + CTA in the content column */}
      <div className="hidden sm:block mt-3 pl-[calc(7rem+1rem)]">
        <div className="flex items-center gap-2">
          <div className="flex" role="img" aria-label={`Betyg: ${product.rating.toFixed(1)} av 10`}>
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-4 h-4 ${star <= Math.round(product.rating / 2) ? "text-yellow-400" : "text-gray-200"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm font-semibold text-gray-700">{product.rating.toFixed(1)}/10</span>
          <span className="text-xs text-gray-400">&bull; {product.turnaround}</span>
        </div>
        <ul className="mt-2 space-y-1">
          {product.features.slice(0, 3).map((f, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-4 h-4 text-teal-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
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
          <Link href={`/recension/${product.slug}/`} className="text-sm text-teal-600 hover:underline font-medium">
            Läs recension →
          </Link>
        </div>
      </div>
    </div>
  );
}
