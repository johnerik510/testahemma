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
  title: "Hormontester Hemma 2026 – Testosteron, Östrogen & TSH | Testahemma.se",
  description: "Testa dina hormonnivåer hemma. Jämför tester för testosteron, östrogen, sköldkörtel och kortisol. Svar inom 3–7 dagar.",
  alternates: { canonical: "https://www.testahemma.se/hormontester/" },
};

const faqs = [
  { question: "Vilka hormoner kan man testa hemma?", answer: "De vanligaste hemhormontest mäter: testosteron (total och fritt), östradiol, progesteron, LH, FSH, prolaktin, TSH (sköldkörtel), T3/T4, kortisol (stresshormon) och DHEA-S." },
  { question: "Vad är normalt testosteronvärde för man?", answer: "Normalt totalt testosteron för män: 8–35 nmol/L. Fritt testosteron: 170–670 pmol/L. Lågt testosteron (under 8–10 nmol/L) kan ge symtom som trötthet, nedsatt libido och muskelminskning." },
  { question: "När ska man testa hormoner?", answer: "Testa hormoner om du upplever: kronisk trötthet, viktuppgång utan förklaring, humörsvängningar, nedsatt libido, menstruationsrubbningar, håravfall eller misstänkt sköldkörtelproblematik." },
  { question: "Hur noggrant är ett hemhormonstest?", answer: "Blodbaserade hemhormontester från ackrediterade laboratorier ger kliniskt tillförlitliga resultat. Salivbaserade tester (t.ex. dygnskortisol) är validierade för hormonmätning men kan variera mer än venöst blod." },
];

export default function HormontesterPage() {
  const products = getProductsByCategory("hormontester");
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <BreadcrumbNav items={[{ name: "Hem", href: "/" }, { name: "Hormontester", href: "/hormontester/" }]} />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Hormontester hemma 2026</h1>
        <p className="text-lg text-gray-600 mb-2 leading-relaxed">
          Hormonella obalanser kan orsaka trötthet, viktuppgång och humörsvängningar. Med ett hemhormonstest kan du enkelt kartlägga dina nivåer utan läkarremiss.
        </p>
        <MedicalDisclaimer />
        <AffiliateDisclaimer />
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Jämförelsetabell – hormontester hemma</h2>
        <ProductTable products={products} pageSlug="hormontester" />
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Detaljerade recensioner</h2>
        <div className="space-y-5">
          {products.map((p, i) => <ProductCard key={p.slug} product={p} position="hormontester-list" rank={i + 1} />)}
        </div>
        <FaqAccordion items={faqs} title="Vanliga frågor om hormontester" />
      </main>
      <Footer />
    </>
  );
}
