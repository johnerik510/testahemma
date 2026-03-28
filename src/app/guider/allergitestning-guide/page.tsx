import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import FaqAccordion from "@/components/FaqAccordion";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Allergitestning Hemma – Mat, Pollen och Djur | Testahemma.se",
  description: "Guide till hemallergitestning. Vilka allergiämnen kan testas? Hur fungerar IgE-tester? Skillnad mellan allergi och intolerans.",
  alternates: { canonical: "https://www.testahemma.se/guider/allergitestning-guide/" },
};
const faqs = [
  { question: "Vad är skillnaden mellan IgE-allergi och intolerans?", answer: "IgE-allergi: Immunsystemet producerar IgE-antikroppar mot ett allergen. Reaktionen är snabb (minuter) och kan vara allvarlig (anafylaxi). Intolerans (t.ex. laktos, gluten-känslighet): Icke-immunologisk reaktion, vanligtvis lindrigare och fördröjd (timmar)." },
  { question: "Hur tillförlitliga är hemallergitester?", answer: "IgE-baserade blodprov hemma ger kliniskt jämförbara resultat med sjukhusprover. De är dock inte lika känsliga som pricktest för vissa allergiämnen. Hemtest är bäst som ett första steg – bekräfta fynd med en allergolog vid behov." },
];
export default function AllergitestningGuidePage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <BreadcrumbNav items={[{ name: "Hem", href: "/" }, { name: "Guider", href: "/guider/" }, { name: "Allergitestning guide", href: "/guider/allergitestning-guide/" }]} />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Allergitestning hemma – mat, pollen och djur</h1>
        <MedicalDisclaimer />
        <div className="prose-guide">
          <p>Allergi och intolerans är vanligt i Sverige – nästan en tredjedel av befolkningen har någon form av allergisk sjukdom. Med ett hemtest kan du kartlägga dina reaktioner mot hundratals ämnen utan att boka tid hos allergolog.</p>
          <h2>Vad kan testas med ett hemallergitest?</h2>
          <ul>
            <li><strong>Matallergier:</strong> Nötter, jordnötter, mjölk, ägg, fisk, skaldjur, vete, soja (de 8 vanligaste)</li>
            <li><strong>Pollenallergi:</strong> Björk, gräs, gråbo, hassel, al</li>
            <li><strong>Djurepitel:</strong> Katt, hund, häst, marsvin</li>
            <li><strong>Mögel och damm:</strong> Alternaria, husdammskvalster, mögeltyperna Cladosporium</li>
            <li><strong>Matintolerans:</strong> Gluten (IgA/IgG), laktos (indirekt via gentest)</li>
          </ul>
          <h2>Hur fungerar ett IgE-hemtest?</h2>
          <p>Du tar ett fingerblodprov som analyseras med ELISA- eller ImmunoCAP-teknik. Testet mäter IgE-antikroppar (klass 0–6) mot varje allergen. Klass 2 och uppåt anses kliniskt relevant men korrelerar inte alltid med symtomseveritet.</p>
          <p>Se vår jämförelse av <Link href="/allergitester/">bästa allergitester hemma</Link>.</p>
        </div>
        <FaqAccordion items={faqs} title="Vanliga frågor om allergitestning" />
      </main>
      <Footer />
    </>
  );
}
