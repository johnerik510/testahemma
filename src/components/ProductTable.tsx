"use client";
import Link from "next/link";
import AffiliateButton from "@/components/AffiliateButton";
import { buildAffiliateUrl } from "@/lib/tracking";
import type { TestProduct } from "@/types/product";

interface ProductTableProps {
  products: TestProduct[];
  pageSlug?: string;
}

export default function ProductTable({ products, pageSlug = "table" }: ProductTableProps) {
  return (
    <div className="my-8">
      {/* Mobilkort */}
      <div className="md:hidden space-y-3">
        {products.map((p, i) => {
          const subId = `TH-${p.slug}-${pageSlug}-table`;
          const href = buildAffiliateUrl(
            p.affiliateUrl,
            p.network,
            p.adtractionProgramId,
            p.addRevenueProgramId,
            subId,
            p.awinProgramId
          );
          return (
            <div key={p.slug} className={`rounded-2xl border p-4 ${i === 0 ? 'border-teal-300 bg-teal-50' : 'border-gray-100 bg-white'}`}>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-full bg-teal-100 text-teal-700 text-xs font-bold flex items-center justify-center shrink-0" aria-hidden="true">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <Link href={`/recension/${p.slug}/`} className="font-semibold text-gray-900 hover:text-teal-600 transition-colors">
                    {p.name}
                  </Link>
                  <div className="text-xs text-gray-400 mt-0.5">{p.shortDescription.slice(0, 50)}...</div>
                </div>
                <div className="shrink-0 text-right">
                  <div className="font-semibold text-gray-900 text-sm">{p.priceFrom}</div>
                  <div className="flex items-center gap-1 justify-end mt-1">
                    <svg className="w-3.5 h-3.5 text-yellow-400 shrink-0" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-xs font-semibold text-gray-900">{p.rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 mb-3">
                <div><span className="font-semibold text-gray-700">Svarstid:</span> {p.turnaround}</div>
                <div><span className="font-semibold text-gray-700">Provtyp:</span> {p.sampleType.split("(")[0].trim()}</div>
              </div>
              <AffiliateButton
                href={href}
                productName={p.name}
                network={p.network}
                location={subId}
                price={p.priceFrom}
                text="Köp"
                size="sm"
                className="w-full justify-center"
              />
            </div>
          );
        })}
      </div>

      {/* Desktoptabell */}
      <table className="hidden md:table w-full text-sm rounded-2xl border border-gray-100 shadow-sm" role="region" aria-label="Jämförelsetabell">
        <thead className="bg-gray-50 text-gray-600 text-left">
          <tr>
            <th scope="col" className="px-4 py-3 font-semibold">Produkt</th>
            <th scope="col" className="px-4 py-3 font-semibold">Pris från</th>
            <th scope="col" className="px-4 py-3 font-semibold">Svarstid</th>
            <th scope="col" className="px-4 py-3 font-semibold">Provtyp</th>
            <th scope="col" className="px-4 py-3 font-semibold">Betyg</th>
            <th scope="col" className="px-4 py-3 font-semibold"><span className="sr-only">Åtgärd</span></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {products.map((p, i) => {
            const subId = `TH-${p.slug}-${pageSlug}-table`;
            const href = buildAffiliateUrl(
              p.affiliateUrl,
              p.network,
              p.adtractionProgramId,
              p.addRevenueProgramId,
              subId,
              p.awinProgramId
            );
            return (
              <tr key={p.slug} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 text-xs font-bold flex items-center justify-center shrink-0" aria-hidden="true">
                      {i + 1}
                    </span>
                    <div>
                      <Link href={`/recension/${p.slug}/`} className="font-semibold text-gray-900 hover:text-teal-600 transition-colors">
                        {p.name}
                      </Link>
                      <div className="text-xs text-gray-400 mt-0.5 hidden sm:block">{p.shortDescription.slice(0, 40)}...</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 font-semibold text-gray-900">{p.priceFrom}</td>
                <td className="px-4 py-4 text-gray-600">{p.turnaround}</td>
                <td className="px-4 py-4 text-gray-600">{p.sampleType.split("(")[0].trim()}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-yellow-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-semibold text-gray-900">{p.rating.toFixed(1)}</span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <AffiliateButton
                    href={href}
                    productName={p.name}
                    network={p.network}
                    location={subId}
                    price={p.priceFrom}
                    text="Köp"
                    size="sm"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
