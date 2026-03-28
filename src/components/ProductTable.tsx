"use client";
import Link from "next/link";
import AffiliateButton from "@/components/AffiliateButton";
import type { TestProduct } from "@/types/product";

interface ProductTableProps {
  products: TestProduct[];
  pageSlug?: string;
}

export default function ProductTable({ products, pageSlug = "table" }: ProductTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm my-8">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-600 text-left">
          <tr>
            <th className="px-4 py-3 font-semibold">Produkt</th>
            <th className="px-4 py-3 font-semibold">Pris från</th>
            <th className="px-4 py-3 font-semibold hidden md:table-cell">Svarstid</th>
            <th className="px-4 py-3 font-semibold hidden lg:table-cell">Provtyp</th>
            <th className="px-4 py-3 font-semibold">Betyg</th>
            <th className="px-4 py-3 font-semibold"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {products.map((p, i) => (
            <tr key={p.slug} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
              <td className="px-4 py-4">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 text-xs font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <Link href={`/recension/${p.slug}/`} className="font-semibold text-gray-900 hover:text-teal-600 transition-colors">
                      {p.name}
                    </Link>
                    <div className="text-xs text-gray-400 mt-0.5 hidden sm:block">{p.shortDescription.slice(0, 40)}…</div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 font-semibold text-gray-900">{p.priceFrom}</td>
              <td className="px-4 py-4 text-gray-600 hidden md:table-cell">{p.turnaround}</td>
              <td className="px-4 py-4 text-gray-600 hidden lg:table-cell">{p.sampleType.split("(")[0].trim()}</td>
              <td className="px-4 py-4">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-semibold text-gray-900">{p.rating.toFixed(1)}</span>
                </div>
              </td>
              <td className="px-4 py-4">
                <AffiliateButton
                  href={p.affiliateUrl}
                  productName={p.name}
                  network={p.network}
                  location={`TH-${p.slug}-${pageSlug}-table`}
                  price={p.priceFrom}
                  text="Köp"
                  size="sm"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
