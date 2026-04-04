import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import FaqAccordion from "@/components/FaqAccordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Allergitestning Hemma – Mat, Pollen och Djur | Testahemma.se",
  description: "Guide till hemallergitestning. Vilka allergiämnen kan testas? Hur fungerar IgE-tester? Skillnad mellan allergi och intolerans – och vad du gör med svaret.",
  alternates: { canonical: "https://www.testahemma.se/guider/allergitestning-guide/" },
  openGraph: {
    title: "Allergitestning Hemma – Mat, Pollen och Djur | Testahemma.se",
    description: "Guide till hemallergitestning. Vilka allergiämnen kan testas? Hur fungerar IgE-tester? Skillnad mellan allergi och intolerans – och vad du gör med svaret.",
    url: "https://www.testahemma.se/guider/allergitestning-guide/",
  },
};

const faqs = [
  {
    question: "Vad är skillnaden mellan IgE-allergi och intolerans?",
    answer: "IgE-allergi: Immunsystemet producerar IgE-antikroppar mot ett allergen. Reaktionen är snabb (minuter till timmar) och kan vara allvarlig (anafylaxi). Intolerans (t.ex. laktos, gluten-känslighet): Icke-immunologisk reaktion med fördröjda, ofta lindrigare symtom (timmar till dagar). IgE-test mäter allergi – inte intolerans. Glutenintolerans och cøliaki utreds separat med IgA-antikroppar och gentest.",
  },
  {
    question: "Hur tillförlitliga är hemallergitester?",
    answer: "IgE-baserade blodprov hemma ger kliniskt jämförbara resultat med sjukhusprover när de analyseras av ackrediterade laboratorier. De är dock inte lika känsliga som pricktest för vissa allergiämnen, framför allt vid säsongsallergi. Hemtest är bäst som ett första steg för att identifiera misstänkta allergen – bekräfta fynd med en allergolog vid behov, särskilt inför immunterapi.",
  },
  {
    question: "Kan man ha hög IgE-nivå utan symtom?",
    answer: "Ja. Sensibilisering (förhöjt specifikt IgE mot ett ämne) innebär att immunsystemet reagerar på allergenet, men klinisk allergi kräver också att det ger symtom vid exponering. Ungefär 30–40 % av personer med positivt allergitest har inga kliniska besvär. Resultaten tolkas alltid tillsammans med symtomhistorik.",
  },
  {
    question: "Vad är korsallergi?",
    answer: "Korsallergi uppstår när proteiner i ett allergen liknar proteiner i ett annat, vilket gör att immunsystemet reagerar på båda. Vanliga exempel: björkpollenallergi ger ofta reaktioner mot äpplen, nötter och morötter (oralt allergisyndrom). Latexallergi korsreagerar med bananer, avokado och kiwi. Hemtester inkluderar ofta korsreaktiva allergenkomponenter.",
  },
  {
    question: "Hur förbereder jag mig för ett hemallergitest?",
    answer: "De flesta allergitester kräver ingen fasta. Antihistaminer påverkar inte IgE-blodprovet (de påverkar bara hudtester/pricktest). Ta provet när du inte är mitt i en akut allergisk reaktion eller pågående antibiotikabehandling. Fingerblodprovet tas efter lätt uppvärmning av fingret (håll händerna varma) för bäst provvolym.",
  },
  {
    question: "Vad gör jag om jag testar positivt för en matallergi?",
    answer: "Positiv IgE-nivå klass 2 eller högre för ett livsmedel bör följas upp med allergolog. Undvik inte livsmedel baserat enbart på testet – elimineringsdieter utan klinisk bekräftelse kan skapa onödiga nutritionsproblem. En allergolog kan genomföra en oral provokation (kontrollerad exponering) för att bekräfta klinisk relevans.",
  },
];

export default function AllergitestningGuidePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Allergitestning hemma – mat, pollen och djur",
    description: "Guide till hemallergitestning. Vilka allergiämnen kan testas? Hur fungerar IgE-tester? Skillnad mellan allergi och intolerans.",
    datePublished: "2026-01-01",
    dateModified: "2026-03-28",
    author: { "@type": "Person", name: "Anna Lindström" },
    publisher: { "@type": "Organization", name: "Testahemma.se" },
  };

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <BreadcrumbNav
          items={[
            { name: "Hem", href: "/" },
            { name: "Guider", href: "/guider/" },
            { name: "Allergitestning guide", href: "/guider/allergitestning-guide/" },
          ]}
        />
        <div className="text-xs text-gray-400 mb-2">
          Granskad av Anna Lindström, biomedicinsk analytiker &bull; Uppdaterad april 2026
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Allergitestning hemma – mat, pollen och djur
        </h1>
        <MedicalDisclaimer />
        <div className="prose-guide">
          <p>
            Allergi och intolerans är vanligt i Sverige – nästan en tredjedel av befolkningen har någon form av allergisk sjukdom. Med ett hemtest kan du kartlägga dina reaktioner mot hundratals ämnen utan att boka tid hos allergolog. Den här guiden förklarar hur IgE-tester fungerar, vad som kan testas och vad du gör med svaret.
          </p>

          <h2>Vad kan testas med ett hemallergitest?</h2>
          <p>
            Moderna hemallergitester kan mäta specifikt IgE mot ett brett spektrum av allergen:
          </p>
          <ul>
            <li><strong>Matallergier:</strong> Nötter (valnöt, cashew, mandel), jordnötter, mjölk, ägg, fisk, skaldjur, vete och soja – de 8 vanligaste livsmedelsallergenen som orsakar 90 % av svåra reaktioner</li>
            <li><strong>Pollenallergi:</strong> Björk, gräs (timotej), gråbo, hassel och al – de viktigaste inhemska pollenallergenen i Sverige</li>
            <li><strong>Djurepitel:</strong> Katt, hund, häst och marsvin – vanliga inomhusallergen som dröjer kvar länge i miljön</li>
            <li><strong>Mögel och damm:</strong> Alternaria, husdammskvalster (Dermatophagoides pteronyssinus och farinae), mögeltyperna Cladosporium och Aspergillus</li>
            <li><strong>Matintolerans:</strong> Cøliaki/glutenintolerans (IgA mot transglutaminas och deamiderat gliadinpeptid), laktosintolerans (via gentest för LCT-genen)</li>
            <li><strong>Insekter:</strong> Bi- och getingstick – IgE-sensibilisering som vid kraftiga lokala reaktioner kan motivera immunterapi</li>
          </ul>

          <h2>Hur fungerar ett IgE-hemtest?</h2>
          <p>
            Du tar ett fingerblodprov hemma (2–5 droppar blod) som analyseras med ELISA- eller ImmunoCAP-teknik på laboratoriet. Testet mäter koncentrationen av specifikt IgE (klass 0–6) mot varje allergen:
          </p>
          <ul>
            <li><strong>Klass 0 (under 0,35 kU/L):</strong> Ingen sensibilisering – allergi mot detta ämne osannolikt</li>
            <li><strong>Klass 1 (0,35–0,7 kU/L):</strong> Tveksam sensibilisering – klinisk betydelse oklar</li>
            <li><strong>Klass 2 (0,7–3,5 kU/L):</strong> Låg sensibilisering – klinisk allergi möjlig</li>
            <li><strong>Klass 3–4 (3,5–100 kU/L):</strong> Måttlig till hög sensibilisering – ökar sannolikhet för klinisk reaktion</li>
            <li><strong>Klass 5–6 (över 100 kU/L):</strong> Mycket hög sensibilisering – stark korrelation med allvarliga reaktioner</li>
          </ul>
          <p>
            Viktigt: IgE-klass korrelerar inte perfekt med reaktionssvårighet – en klass 2 kan ge kraftig reaktion hos en individ och ingen hos en annan. Symtomhistorik avgör alltid klinisk relevans.
          </p>

          <h2>Allergitest hemma vs. pricktest hos allergolog</h2>
          <p>
            Pricktest (hudtest) och blodbaserat IgE-test mäter båda sensibilisering men på olika sätt:
          </p>
          <ul>
            <li><strong>Blodprov (hemtest):</strong> Mäter cirkulerande IgE i blodet. Påverkas inte av antihistaminer. Kan tas när som helst. Bra för att screena brett mot många allergen.</li>
            <li><strong>Pricktest (klinik):</strong> Applicerar allergenlösning på huden och mäter hudreaktion. Mer känsligt för vissa pollenallergen och matallergier. Kräver läkare/sköterska och avslutad antihistaminbehandling 3–5 dagar före.</li>
          </ul>
          <p>
            Hemtest är ett utmärkt första steg för att identifiera misstänkta allergen. Positiva fynd som kräver behandling – speciellt immunterapi (allergivaccin) – bekräftas alltid av allergolog.
          </p>

          <h2>Komponentiallergitest – nästa nivå</h2>
          <p>
            Avancerade tester (som ISAC-chip eller Alex-multiplex) mäter inte bara totala IgE mot ett allergen utan mot specifika allergenkomponenter (proteiner). Detta ger viktig information:
          </p>
          <ul>
            <li>Skillnad mellan äkta allergi och korsreaktivitet (t.ex. Bet v 1 från björk vs. Ara h 1 från jordnöt)</li>
            <li>Prognos för reaktionssvårighet – Ara h 2 (jordnöt) kopplas till risk för anafylaxi</li>
            <li>Vägledning för immunterapi – viktigt att behandla mot rätt komponent</li>
          </ul>

          <h2>Vad gör du med testet?</h2>
          <p>
            Positiva fynd klass 2 eller högre för allergen du misstänker ge symtom bör diskuteras med läkare. Kontakta din vårdcentral eller begär remiss till allergolog för:
          </p>
          <ul>
            <li>Bekräftelse av klinisk allergi via oral provokation eller kompletterande tester</li>
            <li>Kostråd och elimineringsplan vid matallergi</li>
            <li>Allergimedicinering (antihistaminer, nässprej, astmainhalatorer)</li>
            <li>Immunterapi (allergivaccin) vid svår pollen- eller insektsallergi</li>
          </ul>
          <p>
            Se vår jämförelse av <Link href="/allergitester/">bästa allergitester hemma</Link> för aktuella alternativ och priser.
          </p>
        </div>

        <div className="my-8 bg-teal-50 rounded-xl p-5 flex flex-col sm:flex-row items-center gap-4">
          <div>
            <div className="font-bold text-teal-900">Testa dina allergier hemma</div>
            <div className="text-sm text-teal-700">IgE-analys av 100+ allergen – svar inom 5–7 dagar</div>
          </div>
          <Link
            href="/allergitester/"
            className="shrink-0 bg-teal-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-teal-700 transition-colors"
          >
            Se allergitester
          </Link>
        </div>

        <FaqAccordion items={faqs} title="Vanliga frågor om allergitestning" />
      </main>
      <Footer />
    </>
  );
}
