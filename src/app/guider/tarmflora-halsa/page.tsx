import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import FaqAccordion from "@/components/FaqAccordion";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Tarmflora och Hälsa – Varför Dina Tarmbakterier Spelar Roll | Testahemma.se",
  description: "Lär dig om tarmflorans påverkan på immunförsvar, humör och ämnesomsättning. Guide till tarmfloratester och hur du förbättrar din maghälsa.",
  alternates: { canonical: "https://www.testahemma.se/guider/tarmflora-halsa/" },
};
const faqs = [
  { question: "Hur förbättrar man sin tarmflora?", answer: "De mest effektiva metoderna: 1) Öka kostfibrerna (grönsaker, baljväxter, fullkorn) som matar nyttiga bakterier. 2) Ät fermenterade livsmedel (yoghurt, kefir, surkål, kimchi). 3) Minska ultraprocessad mat och socker. 4) Undvik onödig antibiotikaanvändning. 5) Rör på dig regelbundet – motion påverkar tarmfloran positivt." },
  { question: "Kan man ta probiotika utan att testa tarmfloran?", answer: "Ja, men ett tarmfloratest hjälper dig att välja rätt probiotikastammar baserat på vad du faktiskt saknar. Generella probiotika innehåller ofta Lactobacillus och Bifidobacterium men täcker inte alla eventuella brister." },
];
export default function TarmfloraPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <BreadcrumbNav items={[{ name: "Hem", href: "/" }, { name: "Guider", href: "/guider/" }, { name: "Tarmflora och hälsa", href: "/guider/tarmflora-halsa/" }]} />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Tarmflora och hälsa – varför dina tarmbakterier spelar roll</h1>
        <MedicalDisclaimer />
        <div className="prose-guide">
          <p>Din tarm är hem för ungefär 100 biljoner bakterier, svampar och virus – det som kallas mikrobiomet. Dessa mikroorganismer spelar en avgörande roll för din hälsa, långt bortom matsmältningen.</p>
          <h2>Vad påverkar tarmfloran?</h2>
          <ul>
            <li><strong>Immunförsvar:</strong> 70–80 % av immunsystemet finns i tarmen. Tarmfloran tränar immunförsvaret att skilja på vänner och fiender.</li>
            <li><strong>Psykisk hälsa:</strong> Tarm-hjärn-axeln kopplar tarmen direkt till hjärnan via vagusnerven. Tarmfloran producerar 90 % av kroppens serotonin.</li>
            <li><strong>Ämnesomsättning:</strong> Tarmfloran påverkar hur effektivt du absorberar kalorier och reglerar blodsockret.</li>
            <li><strong>Inflammation:</strong> En obalanserad tarmflora (dysbiosis) kopplas till kronisk låggradig inflammation – en riskfaktor för hjärtsjukdom, diabetes och autoimmuna tillstånd.</li>
          </ul>
          <h2>Tecken på obalanserad tarmflora</h2>
          <p>Uppblåsthet, diarré, förstoppning, IBS-liknande symtom, kronisk trötthet, hudirritation och frekventa infektioner kan alla vara tecken på dysbiosis.</p>
          <p>Vill du analysera din tarmflora? Se <Link href="/tarmhalsa/">bästa tarmfloratester hemma</Link>.</p>
        </div>
        <FaqAccordion items={faqs} title="Vanliga frågor om tarmflora" />
      </main>
      <Footer />
    </>
  );
}
