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
  title: "Vitamintester Hemma 2026 – D-vitamin, B12 & mer | Testahemma.se",
  description: "Testa dina vitaminnivåer hemma. Jämför D-vitamintest, B12-test och omega-3 index. Svar inom 3–5 dagar. Från 299 kr.",
  alternates: { canonical: "https://www.testahemma.se/vitamintester/" },
};

const faqs = [
  { question: "Hur vanlig är D-vitaminbrist i Sverige?", answer: "Studier visar att upp till 50–70 % av svenska befolkningen har otillräckliga D-vitaminnivåer under vinterhalvåret. Sverige ligger långt norrut och solljuset räcker inte för naturlig D-vitaminproduktion oktober–april." },
  { question: "Vad är normalt D-vitaminvärde?", answer: "Optimalt D-vitamin (25-OH-D) anses vara 75–150 nmol/L. Brist definieras som under 50 nmol/L och allvarlig brist under 25 nmol/L. Många läkare rekommenderar nivåer om 100–125 nmol/L." },
  { question: "Kan man testa B12-brist hemma?", answer: "Ja. Hemtester för B12 mäter kobalamin i blodet. B12-brist är vanligt hos vegetarianer, veganer och äldre. Symtom inkluderar trötthet, stickningar och minnesproblem." },
  { question: "Behöver man fasta inför ett vitamintest?", answer: "Nej, D-vitamin och B12 behöver inte fastemätning. Omega-3-index är också oberoende av fasta. Järn och ferritin mäts helst på fastande mage för mest tillförlitligt svar." },
];

export default function VitamintesterPage() {
  const products = getProductsByCategory("vitamintester");
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <BreadcrumbNav items={[{ name: "Hem", href: "/" }, { name: "Vitamintester", href: "/vitamintester/" }]} />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Vitamintester hemma 2026</h1>
        <p className="text-lg text-gray-600 mb-2 leading-relaxed">
          Vitaminbrist är vanligare än man tror – särskilt D-vitamin och B12 i Sverige. Med ett enkelt hemtest kan du kontrollera dina nivåer och agera med rätt kosttillskott.
        </p>
        <MedicalDisclaimer />
        <AffiliateDisclaimer />
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Jämförelsetabell – vitamintester hemma</h2>
        <ProductTable products={products} pageSlug="vitamintester" />
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Detaljerade recensioner</h2>
        <div className="space-y-5">
          {products.map((p, i) => <ProductCard key={p.slug} product={p} position="vitamintester-list" rank={i + 1} />)}
        </div>
        <FaqAccordion items={faqs} title="Vanliga frågor om vitamintester" />
      </main>
      <Footer />
    </>
  );
}
