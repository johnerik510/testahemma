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

export const metadata: Metadata = {
  title: "Bästa Blodtester Hemma April 2026 — Jämförelse & Guide",
  description: "Jämför Sveriges bästa hemblodtester 2026. Vi testar Werlabs, Diagnostikdirekt och fler. Pris från 395 kr – SWEDAC-ackrediterat lab. Svar inom dagar.",
  alternates: { canonical: "https://www.testahemma.se/blodtester/" },
  openGraph: {
    title: "Bästa Blodtester Hemma April 2026 — Jämförelse & Guide",
    description: "Jämför Sveriges bästa hemblodtester 2026. Vi testar Werlabs, Diagnostikdirekt och fler. Pris från 395 kr – SWEDAC-ackrediterat lab. Svar inom dagar.",
    url: "https://www.testahemma.se/blodtester/",
  },
};

const faqs = [
  { question: "Hur exakt är ett hemblodtest?", answer: "Hemblodtester som analyseras av SWEDAC-ackrediterade laboratorier (t.ex. Werlabs) uppnår sjukhuskvalitet. Venösa blodprov ger högst precision, men fingerblod är tillräckligt för de flesta ändamål." },
  { question: "Vilka värden kan man mäta med ett hemblodtest?", answer: "Beroende på panel kan du mäta: blodstatus (hemoglobin, vita/röda blodkroppar), järnstatus, levervärden, njurvärden, blodfetter (kolesterol), blodsocker, hormoner, vitaminer och cancermarkörer." },
  { question: "Hur lång tid tar det att få svar?", answer: "De flesta hemblodtester ger svar inom 2–5 vardagar efter att laboratoriet tagit emot provet. Expresanalys finns hos vissa aktörer." },
  { question: "Behöver man fasta inför ett hemblodtest?", answer: "För att mäta triglycerider och blodsocker korrekt rekommenderas 8–12 timmars fasta. För de flesta andra värden spelar fasta liten roll – se varje kits instruktioner." },
  { question: "Behöver man remiss för hemblodtest?", answer: "Nej, alla tester vi rekommenderar på den här sidan kan beställas utan remiss. Du beställer direkt från aktören, tar provet hemma eller på en provtagningsstation, och får svar digitalt – utan att involvera vården." },
  { question: "Vad kostar ett hemblodtest?", answer: "Ett baspaket med de viktigaste värdena (blodstatus, järn, kolesterol, blodsocker) kostar vanligtvis 295–495 kr. Fullständiga hälsopaneler med 30–60 parametrar, hormoner och vitaminer ligger på 895–1 695 kr beroende på aktör och panel." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Bästa blodtester hemma April 2026",
  "description": "Jämförelse av Sveriges bästa hemblodtester med pris, innehåll och laboratoriecertifiering.",
  "url": "https://www.testahemma.se/blodtester/",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Werlabs Stor hälsokontroll",
      "url": "https://www.testahemma.se/recension/werlabs/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Diagnostikdirekt Baspaket",
      "url": "https://www.testahemma.se/recension/diagnostikdirekt/"
    }
  ]
};

export default function BlodtesterPage() {
  const products = getProductsByCategory("blodtester");
  const top = products[0];
  const topUrl = top ? buildAffiliateUrl(top.affiliateUrl, top.network, top.adtractionProgramId, top.addRevenueProgramId, `TH-${top.slug}-blodtester-sticky`, top.awinProgramId) : "";
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-6">
        <BreadcrumbNav items={[{ name: "Hem", href: "/" }, { name: "Blodtester", href: "/blodtester/" }]} />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Bästa blodtester hemma 2026</h1>
        <p className="text-sm text-gray-500 mb-3">{products.length} tester jämförda – senast uppdaterad mars 2026</p>
        <p className="text-lg text-gray-600 mb-2 leading-relaxed">
          Hemblodtester gör det möjligt att mäta hundratals blodvärden utan att boka tid på vårdcentral. Blodprover kan avslöja tidiga tecken på <a href="https://folksjukdomar.se" target="_blank" rel="noopener noreferrer">folksjukdomar</a> som diabetes, hjärt-kärlsjukdom och sköldkörtelrubbningar. Vi har testat och jämfört Sveriges ledande aktörer – från SWEDAC-ackrediterade laboratorier till mer prisvärda alternativ.
        </p>
        <MedicalDisclaimer />
        <AffiliateDisclaimer />
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Jämförelsetabell – blodtester hemma</h2>
        <ProductTable products={products} pageSlug="blodtester" />
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Detaljerade recensioner</h2>
        <div className="space-y-5">
          {products.map((p, i) => <ProductCard key={p.slug} product={p} position="blodtester-list" rank={i + 1} />)}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Hur väljer man rätt blodtest hemma?</h2>
        <div className="prose-guide space-y-4">
          <p>När du väljer ett hemblodtest finns tre avgörande faktorer: <strong>laboratoriekvalitet</strong>, <strong>provtagningsmetod</strong> och <strong>pris per test</strong>.</p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Vad mäter ett blodtest?</h3>
          <p>
            Olika paneler mäter olika saker. Ett <strong>baspaket</strong> täcker vanligtvis blodstatus (hemoglobin, vita och röda blodkroppar, trombocyter) samt järnstatus och blodsocker. Vill du ha en bredare bild av din hälsa inkluderar <strong>hälsokontrollpaneler</strong> även kolesterol (LDL, HDL, triglycerider), levervärden och njurvärden. För mer specifika frågor finns paneler inriktade på <strong>hormoner</strong> (testosteron, östrogen, TSH/T4 för sköldkörteln) eller <strong>vitaminer</strong> (D-vitamin, B12, folsyra, järn). Välj panel utifrån vad du faktiskt vill veta – en bred panel ger mer information men kostar mer.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Venöst prov eller fingerblod?</h3>
          <p>
            <strong>Fingerblod (kapillärblod)</strong> tas hemma med ett lansett – enkelt och smärtfritt. Det räcker för de flesta analyser som blodstatus, kolesterol och vitaminer. <strong>Venöst blodprov</strong> tas via en provtagningsstation (ofta apotek eller klinik) och ger högre precision. Det är obligatoriskt för vissa avancerade paneler – exempelvis hormoner och koagulationsprover – och rekommenderas om du behöver kliniskt tillförlitliga svar inför ett läkarbesök. Kontrollera alltid vilken metod som krävs för den panel du väljer.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Laboratoriecertifiering: SWEDAC vs ISO 15189</h3>
          <p>
            Välj alltid en aktör vars laboratorium har <strong>SWEDAC-ackreditering</strong> (den svenska ackrediteringsmyndigheten) eller är certifierat enligt <strong>ISO 15189</strong> – den internationella standarden för medicinska laboratorier. Dessa certifieringar innebär externa granskningar och garanterar att analyserna håller klinisk standard. Aktörer utan certifiering saknar denna kvalitetssäkring och bör undvikas om du planerar att använda provsvaren i ett medicinskt sammanhang.{" "}
            <Link href="/guider/hur-fungerar-hemtest/" className="text-teal-700 underline hover:text-teal-900">
              Lär dig mer om hur hemtest fungerar
            </Link>.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Populära blodtestpaneler</h2>
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          {[
            { namn: "Baspaket", innehall: "Blodstatus, järn, blodsocker, kolesterol", for: "Allmän hälsokoll, startpunkt" },
            { namn: "Stor hälsokontroll", innehall: "30–50 parametrar inkl. lever, njure, sköldkörtel", for: "Årlig hälsoundersökning" },
            { namn: "Hormonpanel", innehall: "Testosteron, östrogen, progesteron, TSH, T4", for: "Trötthet, humörsvängningar, fertilitet" },
            { namn: "Vitaminpanel", innehall: "D-vitamin, B12, folsyra, järn, ferritin", for: "Trötthet, immunförsvar, vegankost" },
            { namn: "Hjärt-kärlpanel", innehall: "LDL, HDL, triglycerider, homocystein, CRP", for: "Familjehistorik av hjärtsjukdom" },
            { namn: "Diabetesuppföljning", innehall: "Blodsocker (fasteglukos), HbA1c, insulin", for: "Riskbedömning eller uppföljning av diabetes" },
          ].map((panel) => (
            <div key={panel.namn} className="border border-gray-200 rounded-lg p-4 bg-white">
              <p className="font-semibold text-gray-900">{panel.namn}</p>
              <p className="text-sm text-gray-600 mt-1">{panel.innehall}</p>
              <p className="text-xs text-teal-700 mt-2 font-medium">Passar: {panel.for}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Vill du veta mer om hur du tolkar dina provsvar?{" "}
          <Link href="/guider/tolka-blodvarden/" className="text-teal-700 underline hover:text-teal-900">
            Lär dig tolka blodvärden
          </Link>.{" "}
          Misstänker du järnbrist? Läs vår guide:{" "}
          <Link href="/guider/jarnbrist-symtom/" className="text-teal-700 underline hover:text-teal-900">
            Järnbrist – symtom och test hemma
          </Link>.
        </p>

        <p className="text-sm text-gray-500 mt-2 mb-10">
          Söker du efter ett enskilt blodprov? Se vår sida om{" "}
          <Link href="/blodprov-hemma/" className="text-teal-700 underline hover:text-teal-900">blodprov hemma</Link>.
        </p>

        <div className="bg-teal-700 rounded-xl p-6 sm:p-8 mt-0 text-white">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Osäker på vilket test som passar dig?</h2>
          <p className="text-teal-100 mb-4">
            Vi har sammanställt en guide till det bästa hemtestet baserat på syfte, budget och metod – med tydliga rekommendationer per kategori.
          </p>
          <Link
            href="/basta-hemtest/"
            className="inline-block bg-white text-teal-800 font-semibold px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors"
          >
            Se bästa hemtest 2026
          </Link>
        </div>

        <FaqAccordion items={faqs} title="Vanliga frågor om hemblodtester" />
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
