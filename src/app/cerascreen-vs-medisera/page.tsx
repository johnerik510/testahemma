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
  title: "Cerascreen vs Medisera 2026 — vilket hemtest vinner?",
  description:
    "Vi jämför Cerascreen och Medisera sida vid sida. Vitamintester, allergi, pris och svarstid — vilket hemtest är bäst för vitaminer och hormoner 2026?",
  alternates: { canonical: "https://www.testahemma.se/cerascreen-vs-medisera/" },
  openGraph: {
    title: "Cerascreen vs Medisera 2026 — vilket hemtest vinner?",
    description: "50+ vs 150+ tester. Europeisk eller svensk leverantör. Vi jämför pris, kvalitet och utbud.",
    url: "https://www.testahemma.se/cerascreen-vs-medisera/",
    siteName: "Testahemma.se",
    locale: "sv_SE",
    type: "article",
  },
};

const faqs = [
  {
    question: "Vilken är bäst — Cerascreen eller Medisera?",
    answer:
      "Det beror på vad du vill testa. Cerascreen är bäst för allergitester (295 ämnen) och är välkänd för D-vitamintester. Medisera är bättre för blodbaserade hälsotester, bredare panel och erbjuder venprov på provtagningsplatser i Sverige. Vill du testa allergi eller specifika vitaminer: Cerascreen. Vill du ha ett brett blodstatus eller snabb svarstid: Medisera.",
  },
  {
    question: "Är Cerascreen ISO 15189-certifierat?",
    answer:
      "Ja — Cerascreens laboratorier är ISO 15189-certifierade, vilket är den internationella standarden för medicinska laboratorier. Proverna analyseras i ett tyskt laboratorium (Düsseldorf). Medisera använder också ISO 15189-certifierade laboratorier i Sverige. Ingendera har SWEDAC-ackreditering (Werlabs är det enda i Sverige med SWEDAC).",
  },
  {
    question: "Hur lång tid tar provet med Cerascreen vs Medisera?",
    answer:
      "Medisera är snabbare: svarstid 1–3 vardagar från att laboratoriet mottagit provet. Cerascreen skickar till ett tyskt laboratorium — räkna med 5–7 dagar totalt inklusive internationell postförsändelse. Vill du ha snabbast möjliga svar: Medisera.",
  },
  {
    question: "Vilket är billigast för D-vitamintest?",
    answer:
      "Prismässigt är de liknande. Cerascreen D-vitamin: ca 299–349 kr. Medisera D-vitamin: ca 295–395 kr. Cerascreen har historiskt haft kampanjer som gör D-vitamintester extra billiga. Båda är billigare än Werlabs för enstaka vitamintester.",
  },
  {
    question: "Har Cerascreen allergitest?",
    answer:
      "Ja — Cerascreen har Europas bredaste allergitestutbud med upp till 295 allergiämnen (pollen, mat, djur, mögel, insekter). Det är det starkaste säljargumentet för Cerascreen. Medisera har IgE-baserade allergitester men med ett mer begränsat urval jämfört med Cerascreens sortiment.",
  },
  {
    question: "Kan man ta blodprov hemma med båda?",
    answer:
      "Ja — båda erbjuder fingerblodprov hemma med ett medföljandelansett. Medisera erbjuder dessutom venprov på sina provtagningsplatser i Sverige, vilket ger lägre felmarginal för blodbaserade tester. Cerascreen har enbart fingerblodprov/salivprov.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Cerascreen vs Medisera 2026 — komplett jämförelse",
      datePublished: "2026-03-30",
      dateModified: "2026-03-30",
      author: { "@type": "Person", name: "Anna Lindström" },
      publisher: { "@type": "Organization", name: "Testahemma.se", url: "https://www.testahemma.se" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
};

const comparisonRows = [
  { feature: "Ursprung", cerascreen: "Tyskt (Düsseldorf)", medisera: "Svenskt", winner: "medisera" },
  { feature: "Laboratoriecertifiering", cerascreen: "ISO 15189", medisera: "ISO 15189", winner: "draw" },
  { feature: "Ingångspris", cerascreen: "299 kr (vitamintester)", medisera: "295 kr (enstaka test)", winner: "draw" },
  { feature: "Svarstid", cerascreen: "5–7 dagar (inkl. post till Tyskland)", medisera: "1–3 vardagar", winner: "medisera" },
  { feature: "Allergitest (ämnen)", cerascreen: "295 ämnen — branschbäst", medisera: "Begränsat urval", winner: "cerascreen" },
  { feature: "Vitamin/mineraltester", cerascreen: "Bred — D-vit, B12, omega-3, zink", medisera: "Bra men mer begränsat", winner: "cerascreen" },
  { feature: "Venprov", cerascreen: "Nej — enbart fingerblodprov", medisera: "Ja — på provtagningsplatser", winner: "medisera" },
  { feature: "Antal tester totalt", cerascreen: "50+", medisera: "150+", winner: "medisera" },
  { feature: "Läkarkonsultation", cerascreen: "Nej (extra)", medisera: "Tillval", winner: "draw" },
  { feature: "Tarmfloratest", cerascreen: "Ja", medisera: "Nej", winner: "cerascreen" },
];

export default function CerascreenVsMediseraPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-6">
        <BreadcrumbNav
          items={[
            { name: "Hem", href: "/" },
            { name: "Jämför hemmatester", href: "/jamfor-hemmatester/" },
            { name: "Cerascreen vs Medisera", href: "/cerascreen-vs-medisera/" },
          ]}
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Cerascreen vs Medisera 2026 — vitamintester och hälsokontroller jämförda
        </h1>
        <p className="text-sm text-gray-500 mb-4">Senast uppdaterad: mars 2026</p>
        <AffiliateDisclaimer />
        <MedicalDisclaimer />

        <p className="text-gray-700 leading-relaxed mb-6 mt-4">
          Cerascreen är ett tyskt hemtestbolag med Europas bredaste allergitestutbud. Medisera är ett
          svenskt alternativ med snabbare svarstid och möjlighet till venprov. Båda erbjuder vitamintester
          hemma med fingerblodprov — men de passar för lite olika behov.
        </p>

        {/* Quick verdict */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-orange-700 uppercase mb-1">Bäst för allergi och vitaminer</p>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Cerascreen</h2>
            <p className="text-sm text-gray-600 mb-3">
              295 allergiämnen, tarmfloratest, omega-3-index. Europas bredaste vitamin/allergi-sortiment. Från 299 kr.
            </p>
            <a
              href="https://www.cerascreen.se"
              rel="noopener noreferrer"
              target="_blank"
              className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2.5 px-4 rounded-lg text-sm transition-colors"
            >
              Se Cerascreen tester
            </a>
          </div>
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-teal-700 uppercase mb-1">Bäst pris och snabb svarstid</p>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Medisera</h2>
            <p className="text-sm text-gray-600 mb-3">
              Svar 1–3 dagar, 150+ tester, venprov på svenska platser. Bäst för snabb hälsokontroll.
            </p>
            <a
              href="https://www.medisera.se"
              rel="noopener noreferrer"
              target="_blank"
              className="block w-full text-center bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2.5 px-4 rounded-lg text-sm transition-colors"
            >
              Se Medisera tester
            </a>
          </div>
        </div>

        {/* Comparison table */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Jämförelsetabell</h2>
        <div className="mb-10">
          <table className="w-full border border-gray-200 rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left p-4 font-semibold text-gray-700">Egenskap</th>
                <th className="text-center p-4 font-semibold text-orange-700">Cerascreen</th>
                <th className="text-center p-4 font-semibold text-teal-700">Medisera</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.feature} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4 font-semibold text-gray-900">{row.feature}</td>
                  <td className={`p-4 text-center ${row.winner === "cerascreen" ? "text-orange-700 font-bold bg-orange-50" : "text-gray-600"}`}>
                    {row.cerascreen}
                    {row.winner === "cerascreen" && <span className="block text-xs font-normal text-orange-400 mt-0.5">Vinnare</span>}
                  </td>
                  <td className={`p-4 text-center ${row.winner === "medisera" ? "text-teal-700 font-bold bg-teal-50" : "text-gray-600"}`}>
                    {row.medisera}
                    {row.winner === "medisera" && <span className="block text-xs font-normal text-teal-400 mt-0.5">Vinnare</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Who section */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Vem bör välja vad?</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-3">Välj Cerascreen om du:</h3>
            <ul className="text-sm text-gray-700 space-y-1.5">
              <li>Vill göra ett brett allergitest (295 ämnen)</li>
              <li>Vill testa tarmfloran (microbiome-test)</li>
              <li>Vill testa omega-3-index</li>
              <li>Vill ha ett välkänt europeiskt märke</li>
              <li>Kan vänta 5–7 dagar på svar</li>
            </ul>
          </div>
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-3">Välj Medisera om du:</h3>
            <ul className="text-sm text-gray-700 space-y-1.5">
              <li>Vill ha svar snabbast (1–3 dagar)</li>
              <li>Bor nära ett provtagningsställe och vill ha venprov</li>
              <li>Vill ha ett brett blodpannel</li>
              <li>Föredrar ett svenskt bolag</li>
              <li>Vill ha bredast utbud totalt (150+ tester)</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Vanliga frågor</h2>
        <FaqAccordion items={faqs} />

        {/* Related */}
        <div className="mt-10 pt-8 border-t border-gray-100">
          <h3 className="font-bold text-gray-700 mb-4">Fler jämförelser</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/werlabs-vs-cerascreen/" className="group block bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-teal-200 transition-all">
              <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-1">Direktjämförelse</div>
              <div className="font-bold text-gray-900 text-base group-hover:text-teal-600 transition-colors">Werlabs vs Cerascreen 2026</div>
              <div className="text-sm text-gray-500 mt-1">SWEDAC mot EU:s bredaste sortiment</div>
            </Link>
            <Link href="/werlabs-vs-medisera/" className="group block bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-teal-200 transition-all">
              <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-1">Direktjämförelse</div>
              <div className="font-bold text-gray-900 text-base group-hover:text-teal-600 transition-colors">Werlabs vs Medisera 2026</div>
              <div className="text-sm text-gray-500 mt-1">Två svenska alternativ jämförda</div>
            </Link>
            <Link href="/jamfor-hemmatester/" className="group block bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-teal-200 transition-all">
              <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-1">Oversikt</div>
              <div className="font-bold text-gray-900 text-base group-hover:text-teal-600 transition-colors">Jämför alla hemmatester</div>
              <div className="text-sm text-gray-500 mt-1">Komplett översikt</div>
            </Link>
          </div>
        </div>
      </main>
      <StickyCTA
        url="https://www.cerascreen.se"
        product="Cerascreen allergitester"
        price="från 299 kr"
        text="Se Cerascreen tester"
      />
      <Footer />
    </>
  );
}
