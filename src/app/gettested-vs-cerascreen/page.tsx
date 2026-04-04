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
  title: "GetTested vs CeraScreen April 2026 — vilket hemtest väljer du?",
  description:
    "Vi jämför GetTested och CeraScreen sida vid sida. Pris, testutbud, laboratoriekvalitet, allergi- och intoleranstester — internationell bredd mot tyskt specialistkvalitet.",
  alternates: { canonical: "https://www.testahemma.se/gettested-vs-cerascreen/" },
  openGraph: {
    title: "GetTested vs CeraScreen April 2026 — vilket hemtest vinner?",
    description:
      "200+ tester vs tyskt specialistlabb. STI, vitaminer, allergi och livsstilsmarkörer. Vi jämför GetTested och CeraScreen.",
    url: "https://www.testahemma.se/gettested-vs-cerascreen/",
    siteName: "Testahemma.se",
    locale: "sv_SE",
    type: "article",
  },
};

const faqs = [
  {
    question: "Vilken är bäst — GetTested eller CeraScreen?",
    answer:
      "Det beror på vad du vill testa. GetTested är bäst om du vill ha brett utbud med STI-tester, hormoner, vitaminer och blodstatus till konkurrenskraftiga priser (från 299 kr). CeraScreen är bäst om du specifikt söker allergi- och intoleranstester (gluten, laktos, histamin, 40+ livsmedelsallergener) eller tungmetallmätning — det är deras specialitet. GetTested har bredast katalog. CeraScreen djupast allergispecialisering.",
  },
  {
    question: "Är CeraScreen tillförlitligt?",
    answer:
      "Ja — CeraScreen är ett tyskt medicintekniskt företag grundat 2014 som använder ISO-certifierade laboratorier i Europa. Deras livsmedelsintoleranstester och vitaminpaneler är välrespekterade och används av tiotusentals kunder i Sverige, Tyskland och UK. För livsstilsbaserade hälsotest är CeraScreen tillförlitliga. För medicinsk uppföljning som ska presenteras för sjukvård: välj Werlabs med SWEDAC-ackreditering.",
  },
  {
    question: "Vilken tjänst är billigast för vitamintest?",
    answer:
      "GetTested är generellt billigare per markör. Ett D-vitamintest hos GetTested kostar ca 299 kr. CeraScreen D-vitamintest kostar ca 399–449 kr. GetTested D-vitamin + B12 + Ferritin-paket kan vara mer prisvärt per markör. För fullständig vitaminpanel: jämför pris per markör noga — det varierar beroende på aktuella erbjudanden.",
  },
  {
    question: "Vilken är bäst för allergi- och intoleranstester?",
    answer:
      "CeraScreen vinner tydligt på allergi- och intoleranstester. De erbjuder tester för 40+ livsmedelsallergener, gluten (celiaki), laktosintoleransen, histaminintolerans och nickelkänslighet. GetTested har allergitest i katalogen men inte lika djupt specialiserat utbud. Misstänker du livsmedelsintolerans eller allergi: CeraScreen.",
  },
  {
    question: "Hur fungerar provtagningen hos GetTested och CeraScreen?",
    answer:
      "Båda skickar ett provtagningskit hem till dig. GetTested stödjer fingerblodprov, urinprov och svabbprov beroende på test. CeraScreen använder primärt fingerblodprov för blod- och vitaminmarkörer, och stickprov/svabb för allergi. Provet skickas med bifogat kuvert till laboratoriet och svaren levereras digitalt.",
  },
  {
    question: "Vad testar CeraScreen som GetTested inte gör?",
    answer:
      "CeraScreen har unika test som GetTested saknar eller har mer begränsat utbud av: detaljerade livsmedelsintoleranspaneler (40+ allergener), tungmetallmätning (bly, kvicksilver, arsenik, kadmium), oxidativ stress, tarmhälsopanel och biologisk ålder-test. GetTested täcker mer av STI-spektrumet och hormoner. Det är mer komplementära tjänster än direkt konkurrerande.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "GetTested vs CeraScreen April 2026 — komplett jämförelse",
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
  { feature: "Ursprung", gettested: "Europa (internationell)", cerascreen: "Tyskland (specialiserat)", winner: "draw" },
  { feature: "Laboratoriecertifiering", gettested: "ISO 15189 / CE-märkt", cerascreen: "ISO-certifierat (tyskt lab)", winner: "draw" },
  { feature: "Ingångspris", gettested: "ca 299 kr (enstaka test)", cerascreen: "ca 349–449 kr", winner: "gettested" },
  { feature: "Antal tester i katalog", gettested: "200+", cerascreen: "80+", winner: "gettested" },
  { feature: "STI-tester", gettested: "Ja — brett specialutbud", cerascreen: "Nej", winner: "gettested" },
  { feature: "Allergi- och intoleranstester", gettested: "Begränsat", cerascreen: "Ja — 40+ allergener", winner: "cerascreen" },
  { feature: "Tungmetallmätning", gettested: "Begränsat", cerascreen: "Ja (bly, kvicksilver, arsenik)", winner: "cerascreen" },
  { feature: "Vitamintester (D, B12)", gettested: "Ja", cerascreen: "Ja", winner: "draw" },
  { feature: "Gratis läkargenomgång", gettested: "Nej", cerascreen: "Nej", winner: "draw" },
  { feature: "Svarstid", gettested: "2–5 vardagar", cerascreen: "3–7 vardagar", winner: "gettested" },
  { feature: "Provtagningsmetod", gettested: "Fingerblod / urin / svabb", cerascreen: "Fingerblod / svabb", winner: "gettested" },
  { feature: "Biologisk ålder-test", gettested: "Nej", cerascreen: "Ja", winner: "cerascreen" },
];

export default function GetTestedVsCeraScreenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-6">
        <BreadcrumbNav
          items={[
            { name: "Hem", href: "/" },
            { name: "Jämför hemmatester", href: "/jamfor-hemmatester/" },
            { name: "GetTested vs CeraScreen", href: "/gettested-vs-cerascreen/" },
          ]}
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          GetTested vs CeraScreen April 2026 — vilket hemtest passar dig bäst?
        </h1>
        <p className="text-sm text-gray-500 mb-4">Senast uppdaterad: april 2026</p>
        <AffiliateDisclaimer />
        <MedicalDisclaimer />

        <p className="text-gray-700 leading-relaxed mb-6 mt-4">
          GetTested och CeraScreen är båda populära hemtesttjänster i Sverige — men med tydligt
          olika specialiseringar. GetTested imponerar med 200+ tester och marknadens bästa STI-utbud.
          CeraScreen är det tyska specialistlabbet för allergi- och intoleranstester med 40+ matallergener,
          tungmetallmätning och biologisk ålder. Här är hela jämförelsen.
        </p>

        {/* Quick verdict */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-purple-700 uppercase mb-1">Bäst för bredd och STI</p>
            <h2 className="text-xl font-bold text-gray-900 mb-2">GetTested</h2>
            <p className="text-sm text-gray-600 mb-3">
              200+ tester, bäst STI-panel, från 299 kr, svabb och urinprov möjligt. Brett utbud av hormoner, vitaminer och blodstatus.
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
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-teal-700 uppercase mb-1">Bäst för allergi och intolerans</p>
            <h2 className="text-xl font-bold text-gray-900 mb-2">CeraScreen</h2>
            <p className="text-sm text-gray-600 mb-3">
              40+ livsmedelsallergener, tungmetallmätning, biologisk ålder. Tyskt specialistlabb med djupt allergi- och livsstilsfokus.
            </p>
            <a
              href="https://www.cerascreen.se"
              rel="noopener noreferrer sponsored"
              target="_blank"
              className="block w-full text-center bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2.5 px-4 rounded-lg text-sm transition-colors"
            >
              Se CeraScreens tester
            </a>
          </div>
        </div>

        {/* Comparison table */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Jämförelsetabell — GetTested vs CeraScreen</h2>
        <div className="mb-10">
          <table className="w-full border border-gray-200 rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left p-4 font-semibold text-gray-700">Egenskap</th>
                <th className="text-center p-4 font-semibold text-purple-700">GetTested</th>
                <th className="text-center p-4 font-semibold text-teal-700">CeraScreen</th>
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
                  <td className={`p-4 text-center ${row.winner === "cerascreen" ? "text-teal-700 font-bold bg-teal-50" : "text-gray-600"}`}>
                    {row.cerascreen}
                    {row.winner === "cerascreen" && <span className="block text-xs font-normal text-teal-400 mt-0.5">Vinnare</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Deep dive */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Allergi och intolerans — CeraScreen vinner</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          CeraScreen är grundat av läkare och allergologer med ett tydligt fokus: göra avancerade
          allergi- och intoleranstester tillgängliga utan remiss. Deras livsmedelsintoleranspanel täcker
          40+ livsmedelsallergener — laktos, gluten (celiaki-markörer), histamin, nickel och
          specifika matprotein-IgE-markörer som normalt kräver specialistremiss.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          GetTested har allergitest i katalogen men CeraScreens djup och specificitet inom allergi
          är markant högre. Misstänker du en specifik matintolerans eller vill utesluta celiaki:
          CeraScreen är det rätta valet.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">STI och hormoner — GetTested vinner</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          GetTested har ett av marknadens bredaste STI-utbud — enstaka tester (klamydia, gonorré,
          syfilis, HIV) eller kompletta STI-paneler med 8–14 markörer från ca 599–799 kr.
          CeraScreen erbjuder inga STI-tester. Vill du testa för STI hemma: GetTested är det
          enda alternativet av dessa två.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          Hormontester (testosteron, kortisol, TSH, östrogen, FSH) finns hos båda — men GetTested
          har bredare urval och lägre pris per enskild markör. För hormoner: GetTested är mer
          kostnadseffektivt.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tungmetaller och biologisk ålder — CeraScreens unika nisch</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          CeraScreen erbjuder tungmetallmätning (bly, kvicksilver, arsenik, kadmium) — ett test
          som GetTested saknar. Relevant för de som bor i äldre hus (blyrör, blybaserad färg),
          äter mycket fisk eller arbetar i industrimiljöer med metallexponering.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          CeraScreen har även ett biologisk ålder-test (epigenetisk åldersbestämning) som mäter
          hur gammalt din biologi är i förhållande till din kronologiska ålder — baserat på
          DNA-metylering. Unikt på hemtestmarknaden i Sverige.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Vem bör välja vad?</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-3">Välj GetTested om du:</h3>
            <ul className="text-sm text-gray-700 space-y-1.5">
              <li>Vill ha ett STI-test hemma — GetTested är bättre alternativet</li>
              <li>Söker brett utbud av hormoner, vitaminer och blodstatus</li>
              <li>Vill ha lägst pris per test och flexibelt enstaka testval</li>
              <li>Föredrar urin eller svabb som provtagningsmetod för vissa tester</li>
              <li>Söker 200+ tester i en och samma portal</li>
            </ul>
          </div>
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-3">Välj CeraScreen om du:</h3>
            <ul className="text-sm text-gray-700 space-y-1.5">
              <li>Misstänker livsmedelsintolerans — gluten, laktos, histamin, nickel</li>
              <li>Vill testa för allergi mot 40+ livsmedelsallergener i ett test</li>
              <li>Vill mäta tungmetaller (bly, kvicksilver, arsenik) i blodet</li>
              <li>Är nyfiken på biologisk ålder (epigenetisk test)</li>
              <li>Söker tyskt specialistkvalitet för livsstilsbaserade hälsotester</li>
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
            <Link href="/cerascreen-vs-medisera/" className="group block bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-teal-200 transition-all">
              <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-1">Direktjämförelse</div>
              <div className="font-bold text-gray-900 text-base group-hover:text-teal-600 transition-colors">CeraScreen vs Medisera 2026</div>
              <div className="text-sm text-gray-500 mt-1">Tyskt specialistlabb vs bredt svenskt utbud</div>
            </Link>
            <Link href="/gettested-vs-werlabs/" className="group block bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-teal-200 transition-all">
              <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-1">Direktjämförelse</div>
              <div className="font-bold text-gray-900 text-base group-hover:text-teal-600 transition-colors">GetTested vs Werlabs 2026</div>
              <div className="text-sm text-gray-500 mt-1">200+ tester vs SWEDAC-ackreditering</div>
            </Link>
            <Link href="/gettested-vs-medisera/" className="group block bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-teal-200 transition-all">
              <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-1">Direktjämförelse</div>
              <div className="font-bold text-gray-900 text-base group-hover:text-teal-600 transition-colors">GetTested vs Medisera 2026</div>
              <div className="text-sm text-gray-500 mt-1">Internationell bredd vs svenska apotek</div>
            </Link>
            <Link href="/jamfor-hemmatester/" className="group block bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-teal-200 transition-all">
              <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-1">Översikt</div>
              <div className="font-bold text-gray-900 text-base group-hover:text-teal-600 transition-colors">Jämför alla hemmatester 2026</div>
              <div className="text-sm text-gray-500 mt-1">Komplett jämförelse av 6 tjänster</div>
            </Link>
          </div>
        </div>
      </main>

      <StickyCTA product="GetTested" price="Från 299 kr" url="https://se.gettested.com" />
      <Footer />
    </>
  );
}
