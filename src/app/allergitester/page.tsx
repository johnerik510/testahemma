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
  title: "Allergitester Hemma 2026 – Mat, Pollen & Djur | Testahemma.se",
  description: "Testa allergi och intolerans hemma. Mät IgE-reaktioner mot hundratals allergiframkallande ämnen. Från 699 kr.",
  alternates: { canonical: "https://www.testahemma.se/allergitester/" },
};

const faqs = [
  { question: "Vad är skillnaden mellan allergi och intolerans?", answer: "Allergi innebär en IgE-medierad immunreaktion som kan ge snabba och allvarliga symtom (nässelutslag, anafylaxi). Intolerans (t.ex. laktosintolerans, glutenkänslighet) är icke-immunologisk och ger vanligtvis matsmältningsproblem." },
  { question: "Kan man testa celiaki hemma?", answer: "Hemtester kan mäta IgA-antikroppar mot transglutaminas (tTG-IgA) och deamiderat gliadinpeptid (DGP), vilket är markörer för celiaki. Ett positivt svar bör alltid bekräftas med gastroskopi och tarmbiopsier hos läkare." },
  { question: "Hur många allergiämnen täcker ett hemtest?", answer: "Beroende på panel: 20–295 ämnen. Cerascreen erbjuder allergitest för upp till 295 allergiframkallande ämnen – mat, pollen, djurepitel, mögel och insekter." },
  { question: "Är hemallergitester lika pålitliga som kliniktest?", answer: "IgE-baserade blodprov hemma ger kliniskt jämförbara resultat med sjukhusprover. Pricktest (hudstick) kan inte göras hemma och ger ibland kompletterande information. Konsultera allergolog för komplexa fall." },
];

export default function AllergitesterPage() {
  const products = getProductsByCategory("allergitester");
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <BreadcrumbNav items={[{ name: "Hem", href: "/" }, { name: "Allergi & Intolerans", href: "/allergitester/" }]} />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Allergitester & intolerenstester hemma 2026</h1>
        <p className="text-lg text-gray-600 mb-2 leading-relaxed">
          Ta reda på exakt vad du reagerar på – mat, pollen, djur eller mögel – med ett enkelt blodprov hemma. Upp till 295 allergiämnen i ett test.
        </p>
        <MedicalDisclaimer />
        <AffiliateDisclaimer />
        <ProductTable products={products} pageSlug="allergitester" />
        <div className="space-y-5 mt-8">
          {products.map((p, i) => <ProductCard key={p.slug} product={p} position="allergi-list" rank={i + 1} />)}
        </div>
        <FaqAccordion items={faqs} title="Vanliga frågor om allergitester" />
      </main>
      <Footer />
    </>
  );
}
