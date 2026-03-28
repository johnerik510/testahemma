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
  title: "Tarmhälsa & Mikrobiomtest Hemma 2026 | Testahemma.se",
  description: "Analysera din tarmflora hemma med DNA-sekvensering. Få personliga kostråd baserade på dina tarmbakterier. Från 1 495 kr.",
  alternates: { canonical: "https://www.testahemma.se/tarmhalsa/" },
};

const faqs = [
  { question: "Vad visar ett tarmfloratest?", answer: "Ett tarmfloratest analyserar sammansättningen av dina tarmbakterier med DNA-sekvensering. Du får veta vilka bakteriestammar du har, hur diversifierad din flora är, om du har obalanser (dysbiosis) och personliga rekommendationer för kost och probiotika." },
  { question: "Varför är tarmfloran viktig?", answer: "Tarmfloran (mikrobiomet) påverkar immunförsvar, ämnesomsättning, psykisk hälsa och inflammation. En obalanserad tarmflora kopplas till IBS, depression, övervikt, autoimmuna sjukdomar och allergier." },
  { question: "Hur tar man ett avföringsprov hemma?", answer: "Kitet innehåller en provtagningspinne och ett rör med bevaringsmedel. Ta ett litet prov från toalettpappret, lägg i röret, förslut och posta i det medföljande kylpaketet. Processen tar 5 minuter." },
  { question: "Hur lång tid tar ett tarmfloratest?", answer: "DNA-sekvensering tar längre tid än blodanalys. Räkna med 7–14 vardagar från att laboratoriet tagit emot provet tills du får ditt resultat." },
];

export default function TarmhalsaPage() {
  const products = getProductsByCategory("tarmhalsa");
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <BreadcrumbNav items={[{ name: "Hem", href: "/" }, { name: "Tarmhälsa & Mikrobiom", href: "/tarmhalsa/" }]} />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Tarmhälsa & mikrobiomtest hemma 2026</h1>
        <p className="text-lg text-gray-600 mb-2 leading-relaxed">
          Din tarmflora påverkar allt från immunförsvar och ämnesomsättning till psykisk hälsa. Med ett modernt mikrobiomtest kartlägger du dina tarmbakterier med avancerad DNA-teknik – hemma, utan remiss.
        </p>
        <MedicalDisclaimer />
        <AffiliateDisclaimer />
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Bästa tarmfloratester hemma</h2>
        <ProductTable products={products} pageSlug="tarmhalsa" />
        <div className="space-y-5 mt-8">
          {products.map((p, i) => <ProductCard key={p.slug} product={p} position="tarmhalsa-list" rank={i + 1} />)}
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Vad kan du göra med resultaten?</h2>
        <div className="prose-guide">
          <p>Ett tarmfloraresultat ger dig en karta över ditt mikrobiomet. Med den informationen kan du:</p>
          <ul>
            <li>Välja probiotika riktade mot dina specifika brister</li>
            <li>Anpassa kosten för att gynna nyttiga bakteriestammar (fler fermenterade livsmedel, fibrer, prebiotika)</li>
            <li>Mäta förbättring med ett uppföljningstest efter 3–6 månader</li>
            <li>Identifiera dysbiosis som kan förklara symtom som IBS, uppblåsthet eller trötthet</li>
          </ul>
          <p>Kom ihåg: tarmfloratest diagnostiserar inte sjukdomar. Kontakta alltid läkare vid misstanke om tarmsjukdom.</p>
        </div>
        <FaqAccordion items={faqs} title="Vanliga frågor om tarmfloratester" />
      </main>
      <Footer />
    </>
  );
}
