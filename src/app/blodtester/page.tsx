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
  title: "Bästa Blodtester Hemma 2026 – Jämförelse & Guide",
  description: "Jämför Sveriges bästa hemblodtester. Vi testar Werlabs, Diagnostikdirekt och fler. Pris från 395 kr – SWEDAC-ackrediterat lab.",
  alternates: { canonical: "https://www.testahemma.se/blodtester/" },
};

const faqs = [
  { question: "Hur exakt är ett hemblodtest?", answer: "Hemblodtester som analyseras av SWEDAC-ackrediterade laboratorier (t.ex. Werlabs) uppnår sjukhuskvalitet. Venösa blodprov ger högst precision, men fingerblod är tillräckligt för de flesta ändamål." },
  { question: "Vilka värden kan man mäta med ett hemblodtest?", answer: "Beroende på panel kan du mäta: blodstatus (hemoglobin, vita/röda blodkroppar), järnstatus, levervärden, njurvärden, blodfetter (kolesterol), blodsocker, hormoner, vitaminer och cancermarkörer." },
  { question: "Hur lång tid tar det att få svar?", answer: "De flesta hemblodtester ger svar inom 2–5 vardagar efter att laboratoriet tagit emot provet. Expresanalys finns hos vissa aktörer." },
  { question: "Behöver man fasta inför ett hemblodtest?", answer: "För att mäta triglycerider och blodsocker korrekt rekommenderas 8–12 timmars fasta. För de flesta andra värden spelar fasta liten roll – se varje kits instruktioner." },
];

export default function BlodtesterPage() {
  const products = getProductsByCategory("blodtester");
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <BreadcrumbNav items={[{ name: "Hem", href: "/" }, { name: "Blodtester", href: "/blodtester/" }]} />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Bästa blodtester hemma 2026</h1>
        <p className="text-lg text-gray-600 mb-2 leading-relaxed">
          Hemblodtester gör det möjligt att mäta hundratals blodvärden utan att boka tid på vårdcentral. Vi har testat och jämfört Sveriges ledande aktörer – från SWEDAC-ackrediterade laboratorier till mer prisvärda alternativ.
        </p>
        <MedicalDisclaimer />
        <AffiliateDisclaimer />
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Jämförelsetabell – blodtester hemma</h2>
        <ProductTable products={products} pageSlug="blodtester" />
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Detaljerade recensioner</h2>
        <div className="space-y-5">
          {products.map((p, i) => <ProductCard key={p.slug} product={p} position="blodtester-list" rank={i + 1} />)}
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Hur väljer man rätt blodtest hemma?</h2>
        <div className="prose-guide">
          <p>När du väljer ett hemblodtest finns tre avgörande faktorer: <strong>laboratoriekvalitet</strong>, <strong>provtagningsmetod</strong> och <strong>pris per test</strong>.</p>
          <p><strong>Laboratoriekvalitet:</strong> Välj alltid en aktör med SWEDAC-ackreditering (Sverige) eller ISO 15189-certifiering. Det garanterar att analyserna uppfyller klinisk standard.</p>
          <p><strong>Provtagningsmetod:</strong> Fingerblod (kapillärblod) är enkelt att ta hemma och räcker för de flesta analyser. Venöst blodprov (från armen via provtagningsstation) ger högst precision och är obligatoriskt för vissa avancerade paneler.</p>
          <p><strong>Pris per test:</strong> Jämför vad som ingår i varje panel. En dyrare panel med 30+ parametrar kan ge bättre värde än ett billigare test med 5 parametrar.</p>
        </div>
        <FaqAccordion items={faqs} title="Vanliga frågor om hemblodtester" />
      </main>
      <Footer />
    </>
  );
}
