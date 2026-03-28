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
  title: "STI-tester Hemma 2026 – Diskret & Snabbt | Testahemma.se",
  description: "Testa dig för könssjukdomar hemma – klamydia, gonorré, HIV och mer. Diskret leverans, svar inom 1–3 dagar. Jämför de bästa STI-testerna.",
  alternates: { canonical: "https://www.testahemma.se/sti-tester/" },
};

const faqs = [
  { question: "Vilka STI kan man testa för hemma?", answer: "De flesta STI-hemtester täcker klamydia, gonorré, syfilis, HIV 1+2, herpes simplex typ 1 och 2, HPV, hepatit B och C samt mykoplasma genitalium." },
  { question: "Är STI-testet verkligen anonymt?", answer: "Ja. De bästa aktörerna erbjuder helt anonyma tester utan personnummer, med leverans i neutralt paket och svar via engångskod på säker webbportal." },
  { question: "Hur snabbt kan man testa sig efter exponering?", answer: "Detektionstid varierar per sjukdom. HIV: 18–20 dagar (4:e gen. test). Klamydia/gonorré: 1–2 veckor. Syfilis: 3–6 veckor. Herpes IgG: 3–12 veckor. Testa för tidigt ger falskt negativa svar." },
  { question: "Vad gör jag om resultatet är positivt?", answer: "Kontakta din vårdcentral eller en STI-mottagning omedelbart. De flesta könssjukdomar (klamydia, gonorré, syfilis) behandlas effektivt med antibiotika. HIV behandlas med antiretrovirala läkemedel." },
];

export default function StiTesterPage() {
  const products = getProductsByCategory("sti-tester");
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <BreadcrumbNav items={[{ name: "Hem", href: "/" }, { name: "STI-tester", href: "/sti-tester/" }]} />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">STI-tester hemma 2026 – diskret och snabbt</h1>
        <p className="text-lg text-gray-600 mb-2 leading-relaxed">
          Moderna STI-hemtester gör det enkelt att testa sig för könssjukdomar utan att besöka klinik. Diskret leverans, anonymt provtagning och svar digitalt inom 1–3 dagar.
        </p>
        <MedicalDisclaimer />
        <AffiliateDisclaimer />
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Jämförelsetabell – STI-tester hemma</h2>
        <ProductTable products={products} pageSlug="sti-tester" />
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Detaljerade recensioner</h2>
        <div className="space-y-5">
          {products.map((p, i) => <ProductCard key={p.slug} product={p} position="sti-list" rank={i + 1} />)}
        </div>
        <FaqAccordion items={faqs} title="Vanliga frågor om STI-tester hemma" />
      </main>
      <Footer />
    </>
  );
}
