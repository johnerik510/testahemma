import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import FaqAccordion from "@/components/FaqAccordion";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Kolesterolvärden – Vad är Normalt och Farligt? | Testahemma.se",
  description: "Komplett guide till kolesterolvärden. Vad är normalt LDL, HDL och totalt kolesterol? Hur testar du hemma och när bör du agera?",
  alternates: { canonical: "https://www.testahemma.se/guider/kolesterol-varden/" },
};
const faqs = [
  { question: "Vad är skillnaden mellan LDL och HDL?", answer: "LDL-kolesterol ('dåligt') transporterar kolesterol till artärväggar och kan bilda plack som minskar blodflödet. HDL-kolesterol ('bra') transporterar kolesterol från artärerna till levern för nedbrytning. Högt LDL och lågt HDL ökar risken för hjärtinfarkt." },
  { question: "Kan kost sänka kolesterolet?", answer: "Ja. Mät med ett hemtest och börja med: mindre mättat fett (kött, smör, ost), mer omättat fett (olivolja, avokado, nötter), mer kostfibrer (havre, bönor, linsfrö), mer fisk rik på omega-3. Effekten är måttlig (10–15 % LDL-sänkning). Vid höga värden kan statiner behövas." },
];
export default function KolesterolVardenPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <BreadcrumbNav items={[{ name: "Hem", href: "/" }, { name: "Guider", href: "/guider/" }, { name: "Kolesterolvärden", href: "/guider/kolesterol-varden/" }]} />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Kolesterolvärden – vad är normalt och farligt?</h1>
        <MedicalDisclaimer />
        <div className="prose-guide">
          <p>Högt kolesterol är tyst – det ger inga symtom men ökar risken för hjärtinfarkt och stroke dramatiskt. Det enda sättet att veta är ett blodprov.</p>
          <h2>Referensvärden för kolesterol</h2>
        </div>
        <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm my-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50"><tr><th className="px-4 py-3 text-left font-semibold">Värde</th><th className="px-4 py-3 text-left font-semibold">Optimalt</th><th className="px-4 py-3 text-left font-semibold">Gränsfall</th><th className="px-4 py-3 text-left font-semibold">Förhöjt</th></tr></thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { name: "Totalt kolesterol", opt: "Under 5,0 mmol/L", border: "5,0–6,2", high: "Över 6,2" },
                { name: "LDL ('dåligt')", opt: "Under 3,0 mmol/L", border: "3,0–4,1", high: "Över 4,1" },
                { name: "HDL ('bra') – Män", opt: "Över 1,0 mmol/L", border: "0,9–1,0", high: "Under 0,9" },
                { name: "HDL ('bra') – Kvinnor", opt: "Över 1,3 mmol/L", border: "1,1–1,3", high: "Under 1,1" },
                { name: "Triglycerider", opt: "Under 1,7 mmol/L", border: "1,7–5,6", high: "Över 5,6" },
              ].map((r, i) => (
                <tr key={r.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="px-4 py-3 font-medium text-gray-900">{r.name}</td>
                  <td className="px-4 py-3 text-green-700">{r.opt}</td>
                  <td className="px-4 py-3 text-yellow-700">{r.border}</td>
                  <td className="px-4 py-3 text-red-700">{r.high}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="prose-guide">
          <p>Testa ditt kolesterol hemma – se <Link href="/kolesteroltester/">bästa kolesteroltester</Link>.</p>
        </div>
        <FaqAccordion items={faqs} title="Vanliga frågor om kolesterol" />
      </main>
      <Footer />
    </>
  );
}
