import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import ProductCard from "@/components/ProductCard";
import ProductTable from "@/components/ProductTable";
import FaqAccordion from "@/components/FaqAccordion";
import AffiliateDisclaimer from "@/components/AffiliateDisclaimer";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Bästa Hemtest 2026 – Jämförelse av Sveriges Topptester",
  description: "Vi har testat och jämfört Sveriges bästa hemtestningskit 2026. Werlabs, Cerascreen, Testmottagningen och fler. Hitta rätt test från 299 kr.",
  alternates: { canonical: "https://www.testahemma.se/basta-hemtest/" },
};

const faqs = [
  { question: "Vilket är det bästa hemtestet 2026?", answer: "Det beror på vad du vill mäta. Werlabs är bäst för blodvärden (SWEDAC-ackrediterat, bredast utbud). Cerascreen är bäst för vitaminer och allergi (störst sortiment, lägst pris). Testmottagningen är bäst för STI (snabbast, mest diskret). Biovis är bäst för tarmhälsa." },
  { question: "Hur väljer man rätt hemtest?", answer: "Börja med att identifiera vad du vill undersöka: specifika symtom, proaktiv hälsokontroll eller en viss markör. Välj sedan ett ackrediterat laboratorium, jämför vad som ingår i panelen och kontrollera provtagningsmetod (fingerblod vs. venöst)." },
  { question: "Är hemtester säkra och tillförlitliga?", answer: "Ja, om de analyseras av ett ackrediterat laboratorium (SWEDAC eller ISO 15189). Alla tester vi rekommenderar på Testahemma.se uppfyller detta krav. Fingerblodsprov är något mer variabelt än venöst blodprov, men ger kliniskt användbara svar." },
  { question: "Kan jag avdra hemtest på skatten?", answer: "Hemtest för privat hälsokontroll kan i vissa fall vara avdragsgilla om de är arbetsrelaterade eller förskrivna av läkare. Konsultera en revisor för aktuella skatteregler." },
];

export default function BastaHemtestPage() {
  const sorted = [...products].sort((a, b) => b.rating - a.rating);
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <BreadcrumbNav items={[{ name: "Hem", href: "/" }, { name: "Bästa hemtest", href: "/basta-hemtest/" }]} />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Bästa hemtester 2026 – komplett jämförelse</h1>
        <p className="text-lg text-gray-600 mb-2 leading-relaxed">
          Vi har testat och jämfört Sveriges ledande hemtestningskit. Oavsett om du vill mäta blodvärden, hormoner, STI, vitaminer eller tarmhälsa – här hittar du rätt test för dina behov.
        </p>
        <MedicalDisclaimer />
        <AffiliateDisclaimer />

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-2">Snabbvy – alla hemtester</h2>
        <ProductTable products={sorted} pageSlug="basta-hemtest" />

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Rankad lista – bästa hemtesterna 2026</h2>
        <div className="space-y-5">
          {sorted.map((p, i) => <ProductCard key={p.slug} product={p} position="basta-hemtest" rank={i + 1} />)}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Vad ska man välja?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "Bäst för blodvärden", name: "Werlabs", href: "/recension/werlabs/", desc: "SWEDAC-ackrediterat, bredast testutbud, gratis läkarkonsultation" },
            { title: "Bäst för vitaminer & allergi", name: "Cerascreen", href: "/recension/cerascreen/", desc: "Störst sortiment, lägst pris, 50+ test att välja bland" },
            { title: "Bäst för STI", name: "Testmottagningen", href: "/recension/testmottagningen/", desc: "Snabbast svar (1–3 dagar), maximalt diskret" },
            { title: "Bäst för tarmhälsa", name: "Biovis", href: "/recension/biovis/", desc: "Avancerad DNA-sekvensering, personliga kostråd" },
          ].map((item) => (
            <a key={item.title} href={item.href} className="block bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-teal-200 transition-all">
              <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-1">{item.title}</div>
              <div className="font-bold text-gray-900 text-lg">{item.name}</div>
              <div className="text-sm text-gray-500 mt-1">{item.desc}</div>
            </a>
          ))}
        </div>

        <FaqAccordion items={faqs} title="Vanliga frågor om bästa hemtest" />
      </main>
      <Footer />
    </>
  );
}
