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
  title: "GetTested vs Werlabs 2026 — vilket hemtest passar dig bäst?",
  description:
    "Vi jämför GetTested och Werlabs sida vid sida. Pris, testutbud, laboratoriekvalitet, STI-tester och svarstid — internationell bredd mot svensk SWEDAC-kvalitet.",
  alternates: { canonical: "https://www.testahemma.se/gettested-vs-werlabs/" },
  openGraph: {
    title: "GetTested vs Werlabs 2026 — vilket hemtest vinner?",
    description:
      "200+ tester vs SWEDAC-ackreditering. STI, hormoner, vitaminer och blodstatus. Vi jämför GetTested och Werlabs så att du slipper.",
    url: "https://www.testahemma.se/gettested-vs-werlabs/",
    siteName: "Testahemma.se",
    locale: "sv_SE",
    type: "article",
  },
};

const faqs = [
  {
    question: "Vilken är bäst — GetTested eller Werlabs?",
    answer:
      "Beror på ditt behov. Werlabs är bäst för ett komplett blodstatus med SWEDAC-ackrediterad laboratoriekvalitet och gratis läkargenomgång — det är den starkaste garantin för medicinsk precision du kan få i ett hemtest i Sverige. GetTested är bäst om du vill ha ett specifikt test (t.ex. STI-panel, enstaka hormontest) till ett lägre pris, eller om du vill ha ett av de bredaste testutbuden i Skandinavien med 200+ tester.",
  },
  {
    question: "Är GetTested tillförlitligt?",
    answer:
      "Ja — GetTested använder ackrediterade europeiska laboratorier (ISO 15189 och CE-märkta). De är inte SWEDAC-ackrediterade som Werlabs, men deras laboratorier är välrespekterade och används av hälso- och sjukvård i flera europeiska länder. För rutinscreening är GetTested tillförlitliga. För medicinsk uppföljning där du ska jämföra med sjukhusprover: välj Werlabs.",
  },
  {
    question: "Vad kostar ett STI-test hos GetTested vs Werlabs?",
    answer:
      "GetTested erbjuder STI-tester från ca 299 kr (enstaka test) upp till ca 799 kr för en komplett STI-panel (klamydia, gonorré, syfilis, HIV, herpes m.fl.). Werlabs erbjuder STI-tester via sina paket men fokuserar primärt på blodstatus och hormonmarkörer. För STI-tester är GetTested det mer specialiserade och prisvärda alternativet.",
  },
  {
    question: "Hur snabbt får man svar från GetTested?",
    answer:
      "GetTested anger svarstid på 2–5 vardagar från att laboratoriet mottagit provet. Werlabs svarar inom 2–4 vardagar. Båda levererar digitala svar via app eller webbportal. Räkna med 1–3 extra dagar för posthantering i Sverige.",
  },
  {
    question: "Kan man beställa GetTested i Sverige?",
    answer:
      "Ja — GetTested har ett brett utbud på sin svenska sida (se.gettested.com) med tester anpassade för den svenska marknaden. Priserna visas i SEK och leveransen sker med PostNord inom Sverige. Svaren är på svenska.",
  },
  {
    question: "Vilken tjänst inkluderar läkarkonsultation?",
    answer:
      "Werlabs är unika med att inkludera gratis läkargenomgång av alla provresultat — en läkare granskar dina svar och du kan ställa frågor. GetTested erbjuder inte gratis läkarkonsultation i grundpriset men ger tydliga referensvärden för varje markör i sin digitala portal. Om läkarbetyg är viktigt för dig: Werlabs.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "GetTested vs Werlabs 2026 — komplett jämförelse",
      datePublished: "2026-04-03",
      dateModified: "2026-04-03",
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
  { feature: "Ursprung", gettested: "Europa (internationell)", werlabs: "Sverige", winner: "draw" },
  { feature: "Laboratoriecertifiering", gettested: "ISO 15189 / CE-märkt", werlabs: "SWEDAC + ISO 15189", winner: "werlabs" },
  { feature: "Ingångspris", gettested: "ca 299 kr (enstaka test)", werlabs: "495 kr (baspaket)", winner: "gettested" },
  { feature: "Antal tester i katalog", gettested: "200+", werlabs: "100+", winner: "gettested" },
  { feature: "STI-tester", gettested: "Ja — brett specialutbud", werlabs: "Begränsat utbud", winner: "gettested" },
  { feature: "Blodstatus (hematologi)", gettested: "Ja (i paket)", werlabs: "Ja — SWEDAC-kvalitet", winner: "werlabs" },
  { feature: "Gratis läkargenomgång", gettested: "Nej", werlabs: "Ja — ingår alltid", winner: "werlabs" },
  { feature: "Svarstid", gettested: "2–5 vardagar", werlabs: "2–4 vardagar", winner: "draw" },
  { feature: "Provtagningsmetod", gettested: "Fingerblodprov / urin / svabb", werlabs: "Fingerblodprov", winner: "gettested" },
  { feature: "Hormontester", gettested: "Ja — brett utbud", werlabs: "Ja (TSH, kortisol, testosteron)", winner: "draw" },
  { feature: "Fertilitetstester", gettested: "Ja", werlabs: "Ja", winner: "draw" },
  { feature: "Digital portal med svar", gettested: "Ja — webb och app", werlabs: "Ja — mobilapp", winner: "draw" },
];

export default function GetTestedVsWerlabsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-6">
        <BreadcrumbNav
          items={[
            { name: "Hem", href: "/" },
            { name: "Jämför hemmatester", href: "/jamfor-hemmatester/" },
            { name: "GetTested vs Werlabs", href: "/gettested-vs-werlabs/" },
          ]}
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          GetTested vs Werlabs 2026 — vilket hemtest passar dig bäst?
        </h1>
        <p className="text-sm text-gray-500 mb-4">Senast uppdaterad: april 2026</p>
        <AffiliateDisclaimer />
        <MedicalDisclaimer />

        <p className="text-gray-700 leading-relaxed mb-6 mt-4">
          GetTested och Werlabs är två av de mest anlitade hemtesttjänsterna i Sverige 2026. GetTested
          imponerar med över 200 tester — STI, hormoner, vitaminer, allergi och blodstatus — till
          konkurrenskraftiga priser. Werlabs är den enda tjänsten med SWEDAC-ackrediterad
          laboratoriekvalitet och gratis läkargenomgång. Här är hela jämförelsen.
        </p>

        {/* Quick verdict */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-purple-700 uppercase mb-1">Bäst för STI och bredd</p>
            <h2 className="text-xl font-bold text-gray-900 mb-2">GetTested</h2>
            <p className="text-sm text-gray-600 mb-3">
              200+ tester, bäst STI-panel, lägsta ingångspris (från 299 kr), svabb och urinprov möjligt. Bäst om du vet vad du söker.
            </p>
            <a
              href="https://se.gettested.com"
              rel="noopener noreferrer sponsored"
              target="_blank"
              className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2.5 px-4 rounded-lg text-sm transition-colors"
            >
              Se GetTesteds tester
            </a>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-blue-700 uppercase mb-1">Bäst för hälsokontroll och kvalitet</p>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Werlabs</h2>
            <p className="text-sm text-gray-600 mb-3">
              SWEDAC-ackrediterat lab (sjukhusstandard), gratis läkargenomgång av alla svar. Från 495 kr för baspaket med 20+ värden.
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
        </div>

        {/* Comparison table */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Jämförelsetabell — GetTested vs Werlabs</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full border border-gray-200 rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left p-4 font-semibold text-gray-700">Egenskap</th>
                <th className="text-center p-4 font-semibold text-purple-700">GetTested</th>
                <th className="text-center p-4 font-semibold text-blue-700">Werlabs</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.feature} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4 font-semibold text-gray-900">{row.feature}</td>
                  <td className={`p-4 text-center ${row.winner === "gettested" ? "text-purple-700 font-bold bg-purple-50" : "text-gray-600"}`}>
                    {row.gettested}
                    {row.winner === "gettested" && <span className="block text-xs font-normal text-purple-400 mt-0.5">Vinnare</span>}
                  </td>
                  <td className={`p-4 text-center ${row.winner === "werlabs" ? "text-blue-700 font-bold bg-blue-50" : "text-gray-600"}`}>
                    {row.werlabs}
                    {row.winner === "werlabs" && <span className="block text-xs font-normal text-blue-400 mt-0.5">Vinnare</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Deep dive */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Laboratoriekvalitet</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Werlabs är det enda hemtestföretag i Sverige med SWEDAC-ackreditering — den officiella
          svenska ackrediteringen för medicinska laboratorier, samma standard som sjukhus och kliniker
          måste uppfylla. Det innebär att dina Werlabs-svar är direkt jämförbara med sjukhusprover
          utan kalibreringsunsäkerheter.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          GetTested använder ISO 15189-certifierade och CE-märkta europeiska laboratorier — välrespekterade
          standarder som används i hälso- och sjukvård i hela Europa. För rutinscreening och friskvård
          är GetTesteds laboratoriekvalitet fullt tillräcklig. Vill du ha svar som direkt kan lämnas
          till din vårdcentral utan frågetecken: välj Werlabs.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">STI-tester — GetTested vinner</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          GetTested har ett av marknadens bredaste STI-utbud i Sverige. Du kan beställa enstaka
          STI-tester (klamydia, gonorré, syfilis, HIV) eller kompletta STI-paneler med 8–14 markörer.
          Provtagningsmetoden för STI-tester är urin och/eller svabb — ingen blodsticka behövs.
          Priset för en komplett STI-panel ligger på ca 599–799 kr.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          Werlabs erbjuder STI-tester men fokuserar primärt på blodbaserade markörer. Vill du ha
          ett diskret och komplett STI-test hemma är GetTested den bättre tjänsten.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Läkartjänst och uppföljning</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Werlabs inkluderar gratis läkargenomgång av alla provresultat — en läkare granskar dina
          svar och du kan ställa frågor via portalen. Det är ett unikt erbjudande som skiljer Werlabs
          från de flesta konkurrenter. Hittar läkaren avvikande värden kontaktas du aktivt.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          GetTested levererar tydliga digitala svar med referensvärden och flaggar avvikande resultat
          men inkluderar ingen läkarkonsultation i grundpriset. Du tolkar svaren själv eller med hjälp
          av din ordinarie vårdkontakt. För den som vill ha professionell tolkning inkluderat: Werlabs.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Pris och testutbud</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          GetTested har lägre ingångspris (från ca 299 kr för enstaka test) och bredare katalog med
          200+ tester — inklusive testpaneler för fertilitet, sköldkörtel, hormoner, allergier och
          detaljerade STI-paneler. Om du vet exakt vad du vill testa är GetTested ofta det billigaste
          alternativet per markör.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          Werlabs baspaket (från 495 kr) inkluderar 20+ markörer: blodstatus, D-vitamin, B12, järn,
          TSH, kolesterol och mer. Per markör är Werlabs faktiskt prisvärt — men du måste ta paketet,
          inte enstaka markörer. För en bred hälsokontroll är Werlabs konkurrenskraftigt.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Vem bör välja vad?</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-3">Välj GetTested om du:</h3>
            <ul className="text-sm text-gray-700 space-y-1.5">
              <li>Vill ha ett STI-test eller specifik hormonmarkör till lägst pris</li>
              <li>Söker ett av marknadens bredaste testutbud (200+ tester)</li>
              <li>Föredrar urin- eller svabbprov framför fingerblodprov</li>
              <li>Vill testa ett enstaka värde utan att behöva ta ett helt paket</li>
              <li>Söker fertilitetstester eller detaljerade hormonpaneler</li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-3">Välj Werlabs om du:</h3>
            <ul className="text-sm text-gray-700 space-y-1.5">
              <li>Vill ha SWEDAC-ackrediterad laboratoriekvalitet (sjukhusstandard)</li>
              <li>Vill ha gratis läkargenomgång av resultaten inkluderad</li>
              <li>Söker ett komplett blodstatus med 20+ värden i ett paket</li>
              <li>Planerar att dela svaren med din vårdcentral eller läkare</li>
              <li>Föredrar ett erkänt premiummärke med svenska rötter</li>
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
            <Link href="/werlabs-vs-medisera/" className="group block bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-teal-200 transition-all">
              <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-1">Direktjämförelse</div>
              <div className="font-bold text-gray-900 text-base group-hover:text-teal-600 transition-colors">Werlabs vs Medisera 2026</div>
              <div className="text-sm text-gray-500 mt-1">SWEDAC mot bredaste svenska utbud</div>
            </Link>
            <Link href="/gettested-vs-testmottagningen/" className="group block bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-teal-200 transition-all">
              <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-1">Direktjämförelse</div>
              <div className="font-bold text-gray-900 text-base group-hover:text-teal-600 transition-colors">GetTested vs Testmottagningen 2026</div>
              <div className="text-sm text-gray-500 mt-1">Bäst STI-test hemma jämfört</div>
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
        url="https://se.gettested.com"
        product="GetTested hemtest"
        price="från 299 kr"
        text="Se GetTesteds tester"
      />
      <Footer />
    </>
  );
}
