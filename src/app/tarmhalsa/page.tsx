import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import ProductCard from "@/components/ProductCard";
import ProductTable from "@/components/ProductTable";
import FaqAccordion from "@/components/FaqAccordion";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import AffiliateDisclaimer from "@/components/AffiliateDisclaimer";
import StickyCTA from "@/components/StickyCTA";
import { getProductsByCategory } from "@/data/products";
import { buildAffiliateUrl } from "@/lib/tracking";
import { buildProductListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Tarmhälsa & Mikrobiomtest Hemma April 2026 | Testahemma.se",
  description: "Analysera din tarmflora hemma med avancerad DNA-sekvensering. Jämför mikrobiomtester, få personliga kostråd baserade på dina tarmbakterier. Från 1 495 kr.",
  alternates: { canonical: "https://www.testahemma.se/tarmhalsa/" },
  openGraph: {
    title: "Tarmhälsa & Mikrobiomtest Hemma April 2026 | Testahemma.se",
    description: "Analysera din tarmflora hemma med avancerad DNA-sekvensering. Jämför mikrobiomtester, få personliga kostråd baserade på dina tarmbakterier. Från 1 495 kr.",
    url: "https://www.testahemma.se/tarmhalsa/",
  },
};

const faqs = [
  { question: "Vad visar ett tarmfloratest?", answer: "Ett tarmfloratest analyserar sammansättningen av dina tarmbakterier med DNA-sekvensering. Du får veta vilka bakteriestammar du har, hur diversifierad din flora är, om du har obalanser (dysbiosis) och personliga rekommendationer för kost och probiotika." },
  { question: "Varför är tarmfloran viktig?", answer: "Tarmfloran (mikrobiomet) påverkar immunförsvar, ämnesomsättning, psykisk hälsa och inflammation. En obalanserad tarmflora kopplas till IBS, depression, övervikt, autoimmuna sjukdomar och allergier." },
  { question: "Hur tar man ett avföringsprov hemma?", answer: "Kitet innehåller en provtagningspinne och ett rör med bevaringsmedel. Ta ett litet prov från toalettpappret, lägg i röret, förslut och posta i det medföljande kylpaketet. Processen tar 5 minuter." },
  { question: "Hur lång tid tar ett tarmfloratest?", answer: "DNA-sekvensering tar längre tid än blodanalys. Räkna med 7–14 vardagar från att laboratoriet tagit emot provet tills du får ditt resultat." },
  { question: "Hur tar man ett tarmfloratest hemma?", answer: "Du tar ett avföringsprov med medföljande provtagningspinne och provröret som ingår i kitet. Provet placeras i det bifogade kylpaketet och postas till laboratoriet med det frankerade returkuvertet. Hela provtagningen tar cirka 5 minuter och kräver inga särskilda förberedelser utöver att undvika antibiotika under de senaste veckorna." },
  { question: "Kan tarmfloran påverka mental hälsa?", answer: "Ja, forskningen visar ett tydligt samband via tarm-hjärn-axeln (gut-brain axis). Ungefär 90 procent av kroppens serotonin produceras i tarmen, och tarmbakterierna kommunicerar med hjärnan via vagusnerven. En obalanserad tarmflora kopplas till ökad risk för ångest och depression. Att förbättra tarmfloran med kost och probiotika kan därför ha positiv effekt även på psykiskt välmående." },
];

export default function TarmhalsaPage() {
  const products = getProductsByCategory("tarmhalsa");
  const top = products[0];
  const topUrl = top ? buildAffiliateUrl(top.affiliateUrl, top.network, top.adtractionProgramId, top.addRevenueProgramId, `TH-${top.slug}-tarmhalsa-sticky`, top.awinProgramId) : "";

  const jsonLd = buildProductListSchema(
    "Bästa tarmfloratester hemma April 2026",
    "https://www.testahemma.se/tarmhalsa/",
    "Jämförelse av de bästa hemtesterna för tarmhälsa och mikrobiomanalys tillgängliga i Sverige.",
    products,
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-6">
        <BreadcrumbNav items={[{ name: "Hem", href: "/" }, { name: "Tarmhälsa & Mikrobiom", href: "/tarmhalsa/" }]} />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Tarmhälsa & mikrobiomtest hemma 2026</h1>
        <p className="text-sm text-gray-500 mb-3">{products.length} tester jämförda – senast uppdaterad april 2026</p>
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

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Hur väljer man rätt tarmhälsotest?</h2>
        <div className="prose-guide">
          <p>Det finns flera typer av tarmtester och de mäter olika saker. Vilket test som passar dig beror på dina symtom och vad du vill undersöka.</p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Typer av tarmtester</h3>
          <ul>
            <li><strong>Tarmfloraanalys / mikrobiomtest:</strong> Kartlägger vilka bakteriestammar du har i tjocktarmen med DNA-sekvensering. Ger en bred bild av din mikrobiomhälsa och diversitet.</li>
            <li><strong>Calprotectin:</strong> Mäter ett inflammationsprotein i avföringen. Förhöjda värden kan tyda på inflammatorisk tarmsjukdom (IBD) som Crohns sjukdom eller ulcerös kolit.</li>
            <li><strong>Ockult blod (F-Hb):</strong> Letar efter dolt blod i avföringen som inte syns med blotta ögat. Används som screening för polyper och tarmcancer.</li>
            <li><strong>Parasitdiagnostik:</strong> Identifierar parasiter, protozoer och maskägg i avföringen. Aktuellt vid utlandsvistelse eller långvarig diarré.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">DNA-sekvensering jämfört med odling</h3>
          <p>Traditionell laboratorieodling kan bara identifiera ett fåtal hundra bakterietyper och missar de flesta anaeroba bakterier som dominerar tarmen. Modern DNA-sekvensering (metagenomik eller 16S rRNA-analys) identifierar tusentals mikroorganismer direkt från avföringen – även sådana som inte kan odlas i laboratorium. Hemtester för mikrobiomet använder nästan uteslutande DNA-baserade metoder, vilket ger ett betydligt mer komplett resultat.</p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Vem har nytta av ett tarmfloratest?</h3>
          <ul>
            <li>Personer med IBS-symtom som uppblåsthet, magkramper eller oregelbunden avföring</li>
            <li>Den som lider av kronisk trötthet, hudproblem eller täta infektioner (tecken på nedsatt immunförsvar)</li>
            <li>Efter en kur med antibiotika – för att se hur floran återhämtar sig och vilka probiotika som kan hjälpa</li>
            <li>Den som vill optimera kost och kosttillskott baserat på sin unika tarmbiologi</li>
          </ul>
          <p>
            Vill du veta mer om hur testerna fungerar rent tekniskt? Läs vår guide om{" "}
            <Link href="/guider/hur-fungerar-hemtest/" className="text-teal-700 underline hover:text-teal-900">
              hur hemtest fungerar
            </Link>.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Vad säger tarmfloran om din hälsa?</h2>
        <div className="prose-guide">
          <p>
            Tarmen innehåller ungefär 38 biljoner mikroorganismer – bakterier, svampar och virus – som tillsammans väger lika mycket som hjärnan. Detta ekosystem kallas mikrobiomet och är unikt för varje individ. En rik och diversifierad tarmflora förknippas med lägre risk för ett brett spektrum av sjukdomar, från typ 2-diabetes och övervikt till autoimmuna tillstånd och psykisk ohälsa.
          </p>
          <p>
            Tarmens bakterier bryter ner kostfibrer till kortkedjiga fettsyror (SCFA) som butyrat, propionat och acetat. Dessa ämnen fungerar som bränsle för tarmens celler, dämpar inflammation och signalerar mättnad till hjärnan. När floran är i obalans – ett tillstånd som kallas dysbiosis – minskar produktionen av SCFA, tarmbarriären försvagas och skadliga ämnen läcker in i blodbanan.
          </p>
          <p>
            Läs mer om sambanden i vår fördjupande guide om{" "}
            <Link href="/guider/tarmflora-halsa/" className="text-teal-700 underline hover:text-teal-900">
              tarmflora och hälsa
            </Link>.
          </p>
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

        <div className="mt-12 rounded-xl bg-teal-50 border border-teal-200 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-teal-900 mb-2">Vill du lära dig mer om tarmfloran?</h2>
          <p className="text-teal-800 mb-4">
            Vår kompletta guide täcker allt du behöver veta om mikrobiomets roll, vad som skadar tarmfloran och konkreta steg för att förbättra den.
          </p>
          <Link
            href="/guider/tarmflora-halsa/"
            className="inline-block bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-800 transition-colors"
          >
            Läs guiden om tarmflora och hälsa
          </Link>
        </div>

        <FaqAccordion items={faqs} title="Vanliga frågor om tarmfloratester" />
      </main>
      {top && (
        <StickyCTA
          product={top.name}
          price={`Fr\u00e5n ${top.priceFrom}`}
          url={topUrl}
          text={top.ctaText || "Best\u00e4ll nu"}
          label="B\u00e4st i test"
        />
      )}
      <Footer />
    </>
  );
}
