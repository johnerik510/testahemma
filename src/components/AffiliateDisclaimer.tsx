import Link from "next/link";

export default function AffiliateDisclaimer() {
  return (
    <div className="flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 text-sm text-blue-800 my-4">
      <svg className="w-5 h-5 shrink-0 mt-0.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <p>
        <strong>Transparens:</strong> Denna sida innehåller affiliatelänkar. Om du köper via våra länkar kan vi få en provision –
        utan extra kostnad för dig. Det påverkar aldrig våra betyg eller rekommendationer.{" "}
        <Link href="/annonsering/" className="underline hover:text-blue-900">Läs mer om hur vi finansieras.</Link>
      </p>
    </div>
  );
}
