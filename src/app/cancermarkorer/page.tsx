import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import ProductCard from "@/components/ProductCard";
import ProductTable from "@/components/ProductTable";
import FaqAccordion from "@/components/FaqAccordion";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import AffiliateDisclaimer from "@/components/AffiliateDisclaimer";
import { getProductsByCategory } from "@/data/products";

export const metadata: Metadata = {
  title: "Cancermarkörer Hemma 2026 – PSA, CA-125 & CEA | Testahemma.se",
  description: "Testa cancermarkörer hemma utan remiss. PSA för prostata, CA-125, CEA och AFP. Proaktiv hälsokontroll – alltid följ upp med läkare.",
  alternates: { canonical: "https://www.testahemma.se/cancermarkorer/" },
};

const faqs = [
  { question: "Vad är cancermarkörer?", answer: "Cancermarkörer (tumörmarkörer) är proteiner eller andra ämnen i blodet vars nivåer kan stiga vid vissa cancerformer. De används för screening, uppföljning och övervakning – men ett förhöjt värde är inte detsamma som en cancerdiagnos." },
  { question: "Vad mäter PSA-testet?", answer: "PSA (prostataspecifikt antigen) är ett protein producerat av prostatakörtelns celler. Förhöjt PSA kan indikera prostatacancer, men också godartad prostataförstoring (BPH) eller prostatainflammation. Alla förhöjda PSA-värden bör utredas av läkare." },
  { question: "Kan ett hemtest för cancermarkörer diagnostisera cancer?", answer: "Nej – absolut inte. Hemtester kan indikera förhöjda nivåer som motiverar vidare utredning, men en cancerdiagnos kräver alltid läkarbedömning, bilddiagnostik och ofta biopsi. Hemtester är ett verktyg för proaktiv screening, inte för diagnos." },
  { question: "Vem bör testa cancermarkörer hemma?", answer: "PSA-test rekommenderas för män över 50, eller från 45 om det finns ärftlighet. Övriga markörer är relevanta för personer med ärftlig risk eller som kompletterar regelbundna hälsokontroller. Diskutera alltid med läkare om du är osäker." },
];

export default function CancermarkPage() {
  const products = getProductsByCategory("cancermarkorer");
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <BreadcrumbNav items={[{ name: "Hem", href: "/" }, { name: "Cancermarkörer", href: "/cancermarkorer/" }]} />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Cancermarkörer hemma 2026 – PSA och mer</h1>
        <p className="text-lg text-gray-600 mb-2 leading-relaxed">
          Proaktiv hälsokontroll med cancermarkörer – PSA, CA-125, CEA och AFP – utan remiss och utan kö. Hemtester mäter blotnivåer som kan indikera ökad risk och motivera vidare utredning.
        </p>
        <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-800 my-4 flex items-start gap-3">
          <svg className="w-5 h-5 shrink-0 mt-0.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p><strong>Viktigt:</strong> Förhöjda cancermarkörer är aldrig en diagnos. Alla avvikande svar kräver uppföljning med läkare och vidare utredning. Hemtest ersätter inte klinisk bedömning.</p>
        </div>
        <MedicalDisclaimer />
        <AffiliateDisclaimer />
        <ProductTable products={products} pageSlug="cancermarkorer" />
        <div className="space-y-5 mt-8">
          {products.map((p, i) => <ProductCard key={p.slug} product={p} position="cancermark-list" rank={i + 1} />)}
        </div>
        <FaqAccordion items={faqs} title="Vanliga frågor om cancermarkörer" />
      </main>
      <Footer />
    </>
  );
}
