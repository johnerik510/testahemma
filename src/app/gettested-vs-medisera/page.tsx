import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import AffiliateDisclaimer from "@/components/AffiliateDisclaimer";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import FaqAccordion from "@/components/FaqAccordion";
import StickyCTA from "@/components/StickyCTA";

export const metadata: Metadata = {
  title: "GetTested vs Medisera 2026 — vilket hemtest ska du välja?",
  description:
    "Vi jämför GetTested och Medisera sida vid sida. Pris, testutbud, laboratoriekvalitet, leveranshastighet och kundservice — skandinavisk bredd mot svenska apotek.",
  alternates: { canonical: "https://www.testahemma.se/gettested-vs-medisera/" },
  openGraph: {
    title: "GetTested vs Medisera 2026 — vilket hemtest vinner?",
    description:
      "200+ tester vs apoteksgodkänd kvalitet. Hormoner, vitaminer, STI och blodstatus. Vi jämför GetTested och Medisera direkt.",
    url: "https://www.testahemma.se/gettested-vs-medisera/",
    siteName: "Testahemma.se",
    locale: "sv_SE",
    type: "article",
  },
};

const faqs = [
  {
    question: "Vilken är bäst — GetTested eller Medisera?",
    answer:
      "Beror på vad du letar efter. GetTested har det bredaste utbudet (200+ tester) och är ofta billigare per enstaka test — starkast för STI-tester och hormoner. Medisera är ett svenskregistrerat apotek med starkare reglering och är ett tryggare val om du vill ha ett apoteksgodkänt alternativ med bättre kundservice på svenska. För bred screening: GetTested. För tryggheten av apotek: Medisera.",
  },
  {
    question: "Är GetTested eller Medisera billigast?",
    answer:
      "GetTested är ofta billigare per enstaka test — STI-tester från ca 299 kr, hormonpaneler från ca 499 kr. Medisera har konkurrenskraftiga paketpriser men kan vara dyrare på enstaka markörer. Jämför alltid specifika tester du behöver — prisskillnaden varierar beroende på test.",
  },
  {
    question: "Hur lång är svarstiden hos GetTested vs Medisera?",
    answer:
      "GetTested: 2–5 vardagar från att laboratoriet mottagit provet. Medisera: 2–5 vardagar. Båda levererar digitala svar. Räkna med 1–3 extra dagar för posthantering i Sverige (proven skickas med post till laboratoriet).",
  },
  {
    question: "Vilka laboratorier används av GetTested och Medisera?",
    answer:
      "GetTested använder ackrediterade europeiska laboratorier med ISO 15189 och CE-märkning. Medisera samarbetar med SYNLAB och andra SWEDAC-ackrediterade laboratorier i Sverige. Medisera har starkare anknytning till svenska ackrediterade laboratorier, vilket kan vara viktigt om du ska jämföra med sjukhusprover.",
  },
  {
    question: "Kan man beställa STI-test hos GetTested och Medisera?",
    answer:
      "Ja, båda erbjuder STI-tester. GetTested är mer specialiserat på STI med ett brett urval (klamydia, gonorré, syfilis, HIV, herpes, HPV etc.) från ca 299 kr. Medisera erbjuder STI-tester men med ett smalare sortiment. För komplett STI-screening: GetTested.",
  },
  {
    question: "Är hemtester lika tillförlitliga som vårdens prover?",
    answer:
      "Hemtester som använder ackrediterade laboratorier (SWEDAC eller ISO 15189) är analytiskt jämförbara med vårdens prover. Variansen kan uppstå i provtagningssteget — om du inte tar provet korrekt kan resultaten avvika. Följ alltid instruktionerna noga. Vid klinisk uppföljning rekommenderas alltid bekräftelse via sjukvården.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "GetTested vs Medisera 2026 — vilket hemtest ska du välja?",
  datePublished: "2026-04-03",
  dateModified: "2026-04-03",
  author: { "@type": "Organization", name: "Testahemma" },
  publisher: { "@type": "Organization", name: "Testahemma" },
};

const comparisonRows = [
  { label: "Antal tester", gt: "200+", med: "80+", winner: "gt" },
  { label: "STI-tester", gt: "Ja — brett utbud", med: "Ja — begränsat utbud", winner: "gt" },
  { label: "Hormonpanel", gt: "Ja", med: "Ja", winner: "draw" },
  { label: "Vitaminer/mineraler", gt: "Ja", med: "Ja", winner: "draw" },
  { label: "Laboratoriereglering", gt: "ISO 15189, CE-märkt", med: "SWEDAC-ackrediterat", winner: "med" },
  { label: "Svenska apotek", gt: "Nej", med: "Ja — apoteksgodkänt", winner: "med" },
  { label: "Svarstid", gt: "2–5 vardagar", med: "2–5 vardagar", winner: "draw" },
  { label: "Pris (enstaka test)", gt: "Från ca 299 kr", med: "Från ca 349 kr", winner: "gt" },
  { label: "Läkarrådgivning", gt: "Nej (hänvisar till 1177)", med: "Nej (hänvisar till 1177)", winner: "draw" },
  { label: "Ursprung", gt: "Danmark", med: "Sverige", winner: "med" },
];

export default function GetTestedVsMedisera() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <BreadcrumbNav
          items={[
            { name: "Hem", href: "/" },
            { name: "Jämför hemtester", href: "/jamfor-hemmatester/" },
            { name: "GetTested vs Medisera", href: "" },
          ]}
        />

        <AffiliateDisclaimer />

        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full">Jämförelse 2026</span>
            <span className="bg-green-50 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">Uppdaterat 3 april 2026 · Oberoende analys</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">GetTested vs Medisera 2026</h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            GetTested erbjuder Skandinaviens bredaste hemtestutbud med 200+ tester till konkurrenskraftiga priser. Medisera är ett SWEDAC-kopplat, apoteksgodkänt alternativ med starkare svensk förankring. Vilket passar dig?
          </p>
        </header>

        <MedicalDisclaimer />

        {/* Quick verdict */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-blue-700 uppercase mb-1">Bäst urval och pris</p>
            <h2 className="text-xl font-bold text-gray-900 mb-2">GetTested</h2>
            <p className="text-sm text-gray-600 mb-4">
              200+ tester, ISO 15189, specialiserat på STI och hormoner. Bred skandinavisk leverantör med konkurrenskraftiga priser från 299 kr.
            </p>
            <a
              href="https://www.gettested.com/sv"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 px-4 rounded-lg text-center transition-colors"
            >
              Se tester hos GetTested
            </a>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-purple-700 uppercase mb-1">Bäst apoteksreglering och svenska lab</p>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Medisera</h2>
            <p className="text-sm text-gray-600 mb-4">
              Apoteksgodkänt, SWEDAC-kopplade laboratorier, svensk aktör. Tryggare val om du vill ha starkare reglering och svenska resultat jämförbara med vård.
            </p>
            <a
              href="https://www.medisera.se"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold py-2.5 px-4 rounded-lg text-center transition-colors"
            >
              Se tester hos Medisera
            </a>
          </div>
        </div>

        {/* Comparison table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Jämförelsetabell</h2>
          <div className="">
            <table className="w-full border border-gray-200 rounded-xl overflow-hidden text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left p-4 font-semibold text-gray-700">Egenskap</th>
                  <th className="text-center p-4 font-semibold text-blue-700">GetTested</th>
                  <th className="text-center p-4 font-semibold text-purple-700">Medisera</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? "" : "bg-gray-50/50"}`}>
                    <td className="p-4 font-semibold text-gray-900">{row.label}</td>
                    <td className={`p-4 text-center ${row.winner === "gt" ? "text-blue-700 font-bold bg-blue-50" : "text-gray-600"}`}>
                      {row.gt}
                      {row.winner === "gt" && <span className="block text-xs font-normal text-blue-400 mt-0.5">Vinnare</span>}
                    </td>
                    <td className={`p-4 text-center ${row.winner === "med" ? "text-purple-700 font-bold bg-purple-50" : "text-gray-600"}`}>
                      {row.med}
                      {row.winner === "med" && <span className="block text-xs font-normal text-purple-400 mt-0.5">Vinnare</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Who should choose */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Vem bör välja vad?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-bold text-blue-800 mb-3">Välj GetTested om du...</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-blue-600 font-bold">+</span><span>Vill göra ett STI-test — störst urval och lägst pris</span></li>
                <li className="flex gap-2"><span className="text-blue-600 font-bold">+</span><span>Vill ha ett av Skandinaviens bredaste utbud (200+ tester)</span></li>
                <li className="flex gap-2"><span className="text-blue-600 font-bold">+</span><span>Söker ett specifikt hormon- eller vitamintest till lägsta pris</span></li>
                <li className="flex gap-2"><span className="text-blue-600 font-bold">+</span><span>Är nöjd med europeiska ackrediterade laboratorier (ISO 15189)</span></li>
              </ul>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
              <h3 className="font-bold text-purple-800 mb-3">Välj Medisera om du...</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-purple-600 font-bold">+</span><span>Vill ha ett apoteksgodkänt alternativ med starkare reglering</span></li>
                <li className="flex gap-2"><span className="text-purple-600 font-bold">+</span><span>Vill ha svenska SWEDAC-kopplade laboratorier för medicinska jämförelser</span></li>
                <li className="flex gap-2"><span className="text-purple-600 font-bold">+</span><span>Värdesätter en svensk aktör med lokal kundservice</span></li>
                <li className="flex gap-2"><span className="text-purple-600 font-bold">+</span><span>Behöver prover som är kompatibla med svenska vårdens referensvärden</span></li>
              </ul>
            </div>
          </div>
        </section>

        <FaqAccordion items={faqs} />

        {/* Related */}
        <section className="mt-10 pt-8 border-t border-gray-100">
          <h3 className="font-bold text-gray-700 mb-4">Relaterade jämförelser</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Link href="/gettested-vs-werlabs/" className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-sm transition-all group">
              <p className="font-semibold text-gray-900 group-hover:text-blue-600 text-sm mb-1">GetTested vs Werlabs</p>
              <p className="text-gray-500 text-xs">Skandinavisk bredd vs SWEDAC</p>
            </Link>
            <Link href="/werlabs-vs-medisera/" className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-sm transition-all group">
              <p className="font-semibold text-gray-900 group-hover:text-blue-600 text-sm mb-1">Werlabs vs Medisera</p>
              <p className="text-gray-500 text-xs">Två svenska alternativ</p>
            </Link>
            <Link href="/gettested-vs-testmottagningen/" className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-sm transition-all group">
              <p className="font-semibold text-gray-900 group-hover:text-blue-600 text-sm mb-1">GetTested vs Testmottagningen</p>
              <p className="text-gray-500 text-xs">Hemtest vs drop-in klinik</p>
            </Link>
            <Link href="/jamfor-hemmatester/" className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-sm transition-all group">
              <p className="font-semibold text-gray-900 group-hover:text-blue-600 text-sm mb-1">Alla jämförelser</p>
              <p className="text-gray-500 text-xs">Komplett lista</p>
            </Link>
            <Link href="/basta-hemtest/" className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-sm transition-all group">
              <p className="font-semibold text-gray-900 group-hover:text-blue-600 text-sm mb-1">Bästa hemtest 2026</p>
              <p className="text-gray-500 text-xs">Topplista alla leverantörer</p>
            </Link>
          </div>
        </section>
      </main>

      <StickyCTA
        product="GetTested"
        price="Från 299 kr"
        url="https://www.gettested.com/sv"
        text="Se tester hos GetTested"
      />
      <Footer />
    </>
  );
}
