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
  title: "Werlabs vs Medisera 2026 — vilket hemtest passar dig bäst?",
  description:
    "Vi jämför Werlabs och Medisera sida vid sida. Priser, testutbud, laboratoriekvalitet och svarstid — båda svenska, vilket är bättre 2026?",
  alternates: { canonical: "https://www.testahemma.se/werlabs-vs-medisera/" },
  openGraph: {
    title: "Werlabs vs Medisera 2026 — vilket hemtest vinner?",
    description:
      "SWEDAC vs ISO 15189. Blodvärden, D-vitamin, TSH och hormoner. Vi jämför Sveriges populäraste svenska hemtesttjänster.",
    url: "https://www.testahemma.se/werlabs-vs-medisera/",
    siteName: "Testahemma.se",
    locale: "sv_SE",
    type: "article",
  },
};

const faqs = [
  {
    question: "Vilken är bäst — Werlabs eller Medisera?",
    answer:
      "Båda är starka svenska alternativ. Werlabs är bäst om du vill ha ett komplett blodstatus med SWEDAC-ackreditering (sjukhuskvalitet) och gratis läkarkonsultation inkluderat. Medisera är bättre om du vill ha ett enstaka test till lägre pris (från 295 kr) eller om du bor nära ett av deras provtagningsställen för venprov. Medisera erbjuder fler tester i sin katalog totalt sett.",
  },
  {
    question: "Vad är skillnaden mellan Werlabs och Medisera?",
    answer:
      "Werlabs och Medisera är båda svenska företag med ISO 15189-certifierade laboratorier. Werlabs är dessutom SWEDAC-ackrediterade vilket är ett starkare intyg för medicinsk diagnostik i Sverige. Medisera erbjuder fler enstaka tester och lägre ingångspris. Werlabs inkluderar gratis läkargenomgång av alla resultat, Medisera erbjuder läkarkonsultation som tillägg.",
  },
  {
    question: "Kan man ta blodprov hemma med Medisera?",
    answer:
      "Ja, Medisera erbjuder fingerblodprov hemma för de flesta av sina tester. De erbjuder också venprov på sina provtagningsplatser i Sverige, vilket ger lägre felmarginal för vissa tester. Werlabs erbjuder enbart fingerblodprov hemma.",
  },
  {
    question: "Vilken är snabbast — Werlabs eller Medisera?",
    answer:
      "Medisera är snabbast med svarstid 1–3 vardagar. Werlabs tar 2–4 vardagar. Båda räknar från att laboratoriet mottagit provet, inte från att du skickat det. Postavsändning tillkommer i båda fallen och kan variera med 1–2 dagar.",
  },
  {
    question: "Vad kostar ett D-vitamintest hos Werlabs vs Medisera?",
    answer:
      "Medisera är billigare för enstaka vitamintester. Medisera D-vitamintest (25-OH-D3): ca 295–395 kr. Werlabs ingår D-vitamin i sina paket från 495 kr men säljer inte D-vitamin som enstaka test. Vill du enbart testa D-vitamin är Medisera (eller Cerascreen) det prisvärdaste alternativet.",
  },
  {
    question: "Är hemblodprov (fingerblodprov) lika pålitliga som venöst blodprov?",
    answer:
      "Fingerblodprov (kapillärt blodprov) är kliniskt validerade för de flesta markörer som används i hemtester — D-vitamin, TSH, kolesterol, HbA1c, järn m.fl. Avvikelsen mot venöst blodprov är i regel inom acceptabla kliniska marginaler. Undantag: vid extremt höga eller låga värden kan venöst prov krävas för bekräftelse. För rutinscreening är hemblodprov tillräckligt pålitliga.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Werlabs vs Medisera 2026 — komplett jämförelse",
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
  { feature: "Ursprung", werlabs: "Svensk", medisera: "Svensk", winner: "draw" },
  { feature: "Laboratoriecertifiering", werlabs: "SWEDAC + ISO 15189", medisera: "ISO 15189", winner: "werlabs" },
  { feature: "Ingångspris", werlabs: "495 kr (baspaket)", medisera: "295 kr (enstaka test)", winner: "medisera" },
  { feature: "Svarstid", werlabs: "2–4 vardagar", medisera: "1–3 vardagar", winner: "medisera" },
  { feature: "Gratis läkargenomgång", werlabs: "Ja — ingår alltid", medisera: "Tillägg (mot avgift)", winner: "werlabs" },
  { feature: "Venprov möjligt", werlabs: "Nej (enbart fingerblodprov)", medisera: "Ja — på provtagningsplatser", winner: "medisera" },
  { feature: "Provtagning i app", werlabs: "Ja — mobilapp", medisera: "Webb och app", winner: "draw" },
  { feature: "Hormontester", werlabs: "Ja (TSH, kortisol, testosteron)", medisera: "Ja — brett utbud", winner: "draw" },
  { feature: "Fertilitetstester", werlabs: "Ja", medisera: "Ja", winner: "draw" },
  { feature: "Allergi/intolerans", werlabs: "Begränsat", medisera: "Ja — IgE-tester", winner: "medisera" },
  { feature: "Totalt antal tester i katalog", werlabs: "100+", medisera: "150+", winner: "medisera" },
];

export default function WerlabsVsMediseraPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-6">
        <BreadcrumbNav
          items={[
            { name: "Hem", href: "/" },
            { name: "Jämför hemmatester", href: "/jamfor-hemmatester/" },
            { name: "Werlabs vs Medisera", href: "/werlabs-vs-medisera/" },
          ]}
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Werlabs vs Medisera 2026 — vilket hemtest passar dig bäst?
        </h1>
        <p className="text-sm text-gray-500 mb-4">Senast uppdaterad: mars 2026</p>
        <AffiliateDisclaimer />
        <MedicalDisclaimer />

        <p className="text-gray-700 leading-relaxed mb-6 mt-4">
          Werlabs och Medisera är Sveriges två ledande svenska hemtesttjänster för blodprov. Båda erbjuder
          fingerblodprov hemma med digitala svar — men de skiljer sig i pris, laboratoriecertifiering,
          inkluderad läkartjänst och bredd på testutbudet. Vi reder ut vad som faktiskt skiljer dem åt.
        </p>

        {/* Quick verdict */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-blue-700 uppercase mb-1">Bäst för fullständig hälsokontroll</p>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Werlabs</h2>
            <p className="text-sm text-gray-600 mb-3">
              SWEDAC-ackrediterat lab (Sveriges starkaste intyg), gratis läkargenomgång av alla svar. Från 495 kr för baspaket.
            </p>
            <a
              href="https://werlabs.se"
              rel="noopener noreferrer sponsored"
              target="_blank"
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg text-sm transition-colors"
            >
              Se Werlabs tester
            </a>
          </div>
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-teal-700 uppercase mb-1">Bäst pris och bredd</p>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Medisera</h2>
            <p className="text-sm text-gray-600 mb-3">
              Från 295 kr, 150+ tester, snabbast svarstid (1–3 dagar), venprov möjligt. Bäst för enstaka tester.
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Jämförelsetabell — Werlabs vs Medisera</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full border border-gray-200 rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left p-4 font-semibold text-gray-700">Egenskap</th>
                <th className="text-center p-4 font-semibold text-blue-700">Werlabs</th>
                <th className="text-center p-4 font-semibold text-teal-700">Medisera</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.feature} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4 font-semibold text-gray-900">{row.feature}</td>
                  <td className={`p-4 text-center ${row.winner === "werlabs" ? "text-blue-700 font-bold bg-blue-50" : "text-gray-600"}`}>
                    {row.werlabs}
                    {row.winner === "werlabs" && <span className="block text-xs font-normal text-blue-400 mt-0.5">Vinnare</span>}
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

        {/* Deep dive */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Laboratoriekvalitet</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Werlabs laboratorium är SWEDAC-ackrediterat — den officiella svenska ackrediteringen som
          sjukhus och kliniker i Sverige måste uppfylla. Det innebär att Werlabs analysmetoder är
          validerade av en oberoende svensk myndighet. Medisera använder ett ISO 15189-certifierat
          laboratorium, vilket är den internationella standarden för medicinska laboratorier och ett
          välrespekterat intyg, men inte SWEDAC.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          I praktiken innebär skillnaden att Werlabs svar kan jämföras direkt med sjukhusprover utan
          kalibreringsunsäkerheter. För rutinscreening är Mediseras ISO 15189-certifiering tillräcklig.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Läkartjänst</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Werlabs inkluderar gratis läkargenomgång av alla provresultat utan extra kostnad. En läkare
          granskar dina svar och du kan ställa frågor via deras plattform. Det är ett unikt erbjudande
          som gör Werlabs till ett komplett alternativ för den som vill ha professionell tolkning.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          Medisera erbjuder läkarkonsultation som ett tilläggsalternativ mot avgift. Grundpaketet inkluderar
          digitala resultat med referensvärden men ingen läkargenomgång. Om läkarkonsultation är viktigt
          för dig: Werlabs är det bättre valet.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Pris och testutbud</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Medisera har lägre ingångspris och bredare katalog. Enstaka tester från 295 kr och ett
          sortiment på 150+ tester gör Medisera till det bästa valet om du vet exakt vad du vill testa
          (t.ex. enbart TSH eller enbart D-vitamin och vill hålla kostnaden låg).
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          Werlabs räknar med sina paket — ett baspaket på 495 kr inkluderar 20+ värden inklusive blodstatus,
          D-vitamin, B12, TSH, järn och kolesterol. För en bred hälsokontroll ger Werlabs mer per krona.
          Werlabs fullständiga panel (1 695 kr) är en av de mest kompletta hemtester som finns i Sverige.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Vem bör välja vad?</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-3">Välj Werlabs om du:</h3>
            <ul className="text-sm text-gray-700 space-y-1.5">
              <li>Vill ha SWEDAC-ackrediterad kvalitet (sjukhusstandard)</li>
              <li>Vill ha gratis läkargenomgång av resultaten</li>
              <li>Vill ha ett komplett blodstatus med 20+ värden</li>
              <li>Föredrar ett erkänt premium-märke för hälsokontroll</li>
              <li>Tar provet regelbundet och vill jämföra med sjukhusvärden</li>
            </ul>
          </div>
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-3">Välj Medisera om du:</h3>
            <ul className="text-sm text-gray-700 space-y-1.5">
              <li>Vill testa ett enstaka värde till lägst kostnad</li>
              <li>Vill ha snabbast möjliga svarstid (1–3 dagar)</li>
              <li>Bor nära ett provtagningsställe och vill ha venprov</li>
              <li>Vill testa allergi/IgE eller hormoner med brett urval</li>
              <li>Behöver tester som Werlabs inte erbjuder</li>
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Vanliga frågor</h2>
        <FaqAccordion items={faqs} />

        {/* Related */}
        <div className="mt-10 pt-8 border-t border-gray-100">
          <h3 className="font-bold text-gray-700 mb-4">Fler jämförelser och guider</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/gettested-vs-werlabs/" className="group block bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-teal-200 transition-all">
              <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-1">Direktjämförelse</div>
              <div className="font-bold text-gray-900 text-base group-hover:text-teal-600 transition-colors">GetTested vs Werlabs 2026</div>
              <div className="text-sm text-gray-500 mt-1">Internationell bredd mot SWEDAC-kvalitet</div>
            </Link>
            <Link href="/werlabs-vs-cerascreen/" className="group block bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-teal-200 transition-all">
              <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-1">Direktjämförelse</div>
              <div className="font-bold text-gray-900 text-base group-hover:text-teal-600 transition-colors">Werlabs vs Cerascreen 2026</div>
              <div className="text-sm text-gray-500 mt-1">SWEDAC-ackreditering mot bredaste testutbud</div>
            </Link>
            <Link href="/jamfor-hemmatester/" className="group block bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-teal-200 transition-all">
              <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-1">Oversikt</div>
              <div className="font-bold text-gray-900 text-base group-hover:text-teal-600 transition-colors">Jämför alla hemmatester 2026</div>
              <div className="text-sm text-gray-500 mt-1">Komplett oversikt av alla tjänster</div>
            </Link>
          </div>
        </div>
      </main>
      <StickyCTA
        url="https://werlabs.se"
        product="Werlabs hälsokontroll"
        price="från 495 kr"
        text="Se Werlabs tester"
      />
      <Footer />
    </>
  );
}
