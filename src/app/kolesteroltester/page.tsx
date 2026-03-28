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
  title: "Kolesteroltest Hemma 2026 – LDL, HDL & Triglycerider | Testahemma.se",
  description: "Mät ditt kolesterol hemma. Testa LDL, HDL, totalt kolesterol och triglycerider utan läkarbesök. Från 395 kr med svar inom dagar.",
  alternates: { canonical: "https://www.testahemma.se/kolesteroltester/" },
};

const faqs = [
  { question: "Vad är normalt kolesterolvärde?", answer: "Totalt kolesterol bör vara under 5,0 mmol/L. LDL ('dåligt') under 3,0 mmol/L för friska personer (lägre vid hjärt-kärlsjukdom). HDL ('bra') bör vara över 1,0 mmol/L (män) och 1,3 mmol/L (kvinnor). Triglycerider under 1,7 mmol/L." },
  { question: "Måste man fasta inför ett kolesteroltest?", answer: "För att mäta triglycerider korrekt bör du fasta 10–12 timmar. Totalt kolesterol, LDL och HDL kan mätas utan fasta, men fasta ger mest tillförlitliga svar för en komplett lipidprofil." },
  { question: "Hur ofta bör man kontrollera kolesterolet?", answer: "Friska vuxna från 40 år bör kontrollera kolesterolet vart 5:e år. Vid förhöjda värden, hjärt-kärlsjukdom eller diabetes rekommenderas tätare kontroller – diskutera med din läkare." },
  { question: "Vad gör jag om kolesterolet är högt?", answer: "Kontakta din vårdcentral. Behandling beror på nivå och övrig riskprofil: koständringar, mer motion och eventuellt kolesterolsänkande läkemedel (statiner). Hemtestet ger dig underlag för att ta ett informerat beslut om att söka hjälp." },
];

export default function KolesteroltesterPage() {
  const products = getProductsByCategory("kolesteroltester");
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <BreadcrumbNav items={[{ name: "Hem", href: "/" }, { name: "Kolesteroltester", href: "/kolesteroltester/" }]} />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Kolesteroltest hemma 2026</h1>
        <p className="text-lg text-gray-600 mb-2 leading-relaxed">
          Högt kolesterol är tyst – inga symtom, men stor risk för hjärt-kärlsjukdom. Med ett hemtest kan du mäta LDL, HDL och triglycerider enkelt hemma och agera tidigt.
        </p>
        <MedicalDisclaimer />
        <AffiliateDisclaimer />
        <ProductTable products={products} pageSlug="kolesteroltester" />
        <div className="space-y-5 mt-8">
          {products.map((p, i) => <ProductCard key={p.slug} product={p} position="kolesterol-list" rank={i + 1} />)}
        </div>
        <FaqAccordion items={faqs} title="Vanliga frågor om kolesteroltester" />
      </main>
      <Footer />
    </>
  );
}
