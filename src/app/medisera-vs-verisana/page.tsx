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
  title: "Medisera vs Verisana 2026 — vilket hemtest vinner?",
  description:
    "Vi jämför Medisera och Verisana 2026. Medisera bred panel med snabb svarstid. Verisana specialiserat på hormoner och livsstilstester. Vilket passar dig?",
  alternates: { canonical: "https://www.testahemma.se/medisera-vs-verisana/" },
  openGraph: {
    title: "Medisera vs Verisana 2026 — bred panel eller hormonspecialist?",
    description:
      "Medisera bäst för komplett blodstatus. Verisana bäst för djupgående hormonanalyser. Vi jämför pris, utbud och laboratoriekvalitet.",
    url: "https://www.testahemma.se/medisera-vs-verisana/",
    siteName: "Testahemma.se",
    locale: "sv_SE",
    type: "article",
  },
};

const faqs = [
  {
    question: "Vilken är bäst — Medisera eller Verisana?",
    answer:
      "Det beror på vad du vill testa. Medisera är bäst för bred blodstatus, snabb svarstid (2–4 dagar) och ett brett sortiment till konkurrenskraftiga priser. Verisana är bäst för djupgående hormonanalyser (testosterone, östrogen, cortisol, sköldkörtel) och micronutrient-panels. Vill du ha ett komplett hälsotest: Medisera. Vill du specifikt kartlägga ditt hormonstatus: Verisana.",
  },
  {
    question: "Är Verisana pålitligt för hormontester?",
    answer:
      "Ja — Verisana är ett tyskt företag med ISO-certifierat laboratorium och lång erfarenhet av hormonanalyser. De specialiserar sig på spottestbaserade hormonanalyser (cortisol, DHEA, melatonin) och blodbaserade tester. Spottest kan ha lite lägre precision än blodtest för vissa hormoner — om du behöver klinisk precision är blodtest via Medisera eller Werlabs att föredra.",
  },
  {
    question: "Hur lång är svarstiden för Medisera vs Verisana?",
    answer:
      "Medisera är snabbare: 2–4 vardagar från laboratoriet tagit emot provet. Verisana tar 5–7 dagar eftersom proverna analyseras på tyskt laboratorium och transporteras internationellt. Räkna med 7–10 dagar totalt för Verisana från beställning till svar. Medisera är det bättre valet om du vill ha snabba svar.",
  },
  {
    question: "Kan man testa vitaminer hos Medisera och Verisana?",
    answer:
      "Ja på båda. Medisera erbjuder D-vitamin, B12, järn, folat och ferritin. Verisana erbjuder micronutrient-panels som mäter 30+ mikronäringsämnen i ett enda test — det är mer omfattande för den som vill ha en djupanalys av sin näringstatus. Vill du bara testa ett specifikt vitamin är Medisera eller Cerascreen prisvärdare.",
  },
  {
    question: "Vad är skillnaden mellan blodtest och spottest?",
    answer:
      "Blodtest (kapillärblod via stick i fingertoppen, som Medisera och de flesta hemmatester använder) är den vanligaste och kliniskt mest validerade metoden. Spottest (saliv) används av Verisana för vissa hormonmarkörer, framförallt cortisol och DHEA. Spottest är enklare att ta men har något lägre klinisk precision för hormonmarkörer. För hormoner som testosterone och östrogen är blodtest mer tillförlitligt.",
  },
  {
    question: "Vilket hemtest har bäst pris — Medisera eller Verisana?",
    answer:
      "Medisera är generellt billigare per markör. Medisera börjar på 299 kr för enskilda tester och har paket med bred panel. Verisana börjar runt 449 kr och kan bli dyrare för hormonpaneler. Vill du ha mest för pengarna per mätvärde: Medisera. Vill du ha en djupgående specialiserad hormonpanel: Verisana kan motivera prisskillnaden.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Medisera vs Verisana 2026 — komplett jämförelse",
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

export default function MediseraVsVerisanaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-6">
        <BreadcrumbNav
          items={[
            { name: "Hem", href: "/" },
            { name: "Jämför hemmatester", href: "/jamfor-hemmatester/" },
            { name: "Medisera vs Verisana", href: "/medisera-vs-verisana/" },
          ]}
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Medisera vs Verisana 2026 — bred panel eller hormonspecialist?
        </h1>
        <p className="text-sm text-gray-500 mb-4">Senast uppdaterad: mars 2026</p>
        <AffiliateDisclaimer />
        <MedicalDisclaimer />

        <p className="text-gray-700 leading-relaxed mb-6 mt-4">
          Medisera och Verisana tar olika approach till hemmatestning. Medisera erbjuder en bred, prisvärd blodpanel med snabb svarstid. Verisana specialiserar sig på hormoner och djupgående livsstilstester. Vilket passar ditt behov?
        </p>

        {/* Quick verdict boxes */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-emerald-700 uppercase mb-1">Bäst för bred hälsopanel</p>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Medisera</h2>
            <p className="text-sm text-gray-600 mb-3">
              Bred blodpanel, 2–4 dagars svarstid, ISO-certifierat lab. Bäst för komplett hälsoöversikt. Från 299 kr.
            </p>
            <a
              href="https://www.medisera.se"
              rel="noopener noreferrer sponsored"
              target="_blank"
              className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors w-full text-center"
            >
              Beställ hos Medisera — från 299 kr
            </a>
          </div>
          <div className="bg-violet-50 border border-violet-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-violet-700 uppercase mb-1">Bäst för hormoner och micronutrienter</p>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Verisana</h2>
            <p className="text-sm text-gray-600 mb-3">
              Tyskt specialiserat lab, djupgående hormonpaneler, micronutrient-analys av 30+ ämnen. Från 449 kr.
            </p>
            <a
              href="https://www.verisana.se"
              rel="noopener noreferrer sponsored"
              target="_blank"
              className="inline-block bg-violet-700 hover:bg-violet-800 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors w-full text-center"
            >
              Se hormontester hos Verisana — från 449 kr
            </a>
          </div>
        </div>

        {/* Comparison table */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Jämförelsetabell</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-4 py-3 font-semibold text-gray-900">Egenskap</th>
                <th className="text-left px-4 py-3 font-semibold text-emerald-800">Medisera</th>
                <th className="text-left px-4 py-3 font-semibold text-violet-800">Verisana</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Pris från</td>
                <td className="px-4 py-3 font-bold text-emerald-800">299 kr</td>
                <td className="px-4 py-3 text-gray-700">449 kr</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">Svarstid</td>
                <td className="px-4 py-3 font-bold text-emerald-800">2–4 vardagar</td>
                <td className="px-4 py-3 text-gray-700">5–7 vardagar</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Laboratorium</td>
                <td className="px-4 py-3 font-bold text-emerald-800">ISO-certifierat (Sverige)</td>
                <td className="px-4 py-3 text-gray-700">ISO-certifierat (Tyskland)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">Hormonpanel</td>
                <td className="px-4 py-3 text-gray-700">Standardhormontest</td>
                <td className="px-4 py-3 font-bold text-violet-800">Djupgående — specialitet</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Micronutrienter</td>
                <td className="px-4 py-3 text-gray-700">Vitaminer och mineraler separat</td>
                <td className="px-4 py-3 font-bold text-violet-800">30+ i en panel</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">Blodpanel (CBC)</td>
                <td className="px-4 py-3 font-bold text-emerald-800">Bred panel</td>
                <td className="px-4 py-3 text-gray-700">Begränsat</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Spottest (saliv)</td>
                <td className="px-4 py-3 text-gray-700">Nej</td>
                <td className="px-4 py-3 font-bold text-violet-800">Ja — cortisol, DHEA</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">Hemmatest</td>
                <td className="px-4 py-3 font-bold text-emerald-800">Ja — kapillärblod</td>
                <td className="px-4 py-3 font-bold text-violet-800">Ja — blod + spottest</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Resultatportal</td>
                <td className="px-4 py-3 font-bold text-emerald-800">Bra digital app</td>
                <td className="px-4 py-3 text-gray-700">Webbaserat</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">Bäst för</td>
                <td className="px-4 py-3 text-gray-700">Bred hälsopanel, snabb svarstid</td>
                <td className="px-4 py-3 text-gray-700">Hormoner, livsstil, nutrition</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Medisera section */}
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Medisera — höga betyg och bred panel</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Medisera är ett av Sveriges populäraste hemmatestföretag med höga kundbetyg (8,3/10). De erbjuder en bred blodpanel som täcker de flesta hälsoparametrar som svenska konsumenter efterfrågar: blodstatus, kolesterol, blodfetter, inflammationsmarkörer, sköldkörtelvärden, vitaminer och mineraler. Svarstiden på 2–4 dagar är bland de snabbaste i Sverige.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Medisera är det bästa valet för den som vill ha ett komplett och prisvärt hälsotest med snabb svarstid. Resultaten presenteras med tydlig förklaring och referensvärden. Priset börjar på 299 kr för enskilda markörer och paketen ger bra värde per mätvärde.
        </p>

        {/* Verisana section */}
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Verisana — hormonspecialisten från Tyskland</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Verisana är ett tyskt företag med fokus på hormonanalyser och nutritionsstatus. De erbjuder djupgående hormonpaneler (kortisol, DHEA, testosteron, östrogen, progesteron, sköldkörtelhormoner) och micronutrient-panels som mäter 30+ vitaminer och mineraler i ett enda test. Spottestmetoden för kortisol och DHEA gör det möjligt att mäta dygnskurvan för stresshormonet kortisol — något få konkurrenter erbjuder.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Nackdelarna: längre svarstid (5–7 dagar), högre prispunkt och internationell provhantering. Verisana motiveras när du specifikt vill kartlägga ditt hormonstatus eller din nutritionsstatus på djupet — inte för en allmän hälsokontroll.
        </p>

        {/* Who should choose what */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Vem bör välja vad?</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-3">Välj Medisera om du...</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>+ Vill ha komplett hälsoöversikt med bred panel</li>
              <li>+ Behöver snabba svar (2–4 dagar)</li>
              <li>+ Vill testa kolesterol, blodstatus och inflammationsmarkörer</li>
              <li>+ Prioriterar bäst pris per markör</li>
            </ul>
          </div>
          <div className="bg-violet-50 border border-violet-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-3">Välj Verisana om du...</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>+ Vill kartlägga hormonstatus på djupet</li>
              <li>+ Är intresserad av cortisol-dygnskurva (spottest)</li>
              <li>+ Vill testa 30+ micronutrienter i en panel</li>
              <li>+ Svarstiden är inte avgörande</li>
            </ul>
          </div>
        </div>

        <FaqAccordion faqs={faqs} />

        {/* Related */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-8">
          <h3 className="font-bold text-gray-900 mb-3">Relaterade jämförelser</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: "/werlabs-vs-medisera/", label: "Werlabs vs Medisera 2026", desc: "Blodkvalitet jämförd" },
              { href: "/cerascreen-vs-medisera/", label: "Cerascreen vs Medisera 2026", desc: "Allergi och vitaminer" },
              { href: "/werlabs-vs-cerascreen/", label: "Werlabs vs Cerascreen 2026", desc: "SWEDAC vs ISO 15189" },
              { href: "/jamfor-hemmatester/", label: "Jämför alla hemmatester", desc: "Komplett jämförelse" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-emerald-300 hover:shadow-sm transition-all group"
              >
                <p className="font-semibold text-gray-900 group-hover:text-emerald-700 text-sm mb-1">{link.label}</p>
                <p className="text-gray-500 text-xs">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />

      <StickyCTA
        product="Medisera"
        price="från 299 kr"
        url="https://www.medisera.se"
        text="Beställ hemtest hos Medisera"
        label="Bäst i test bred panel"
      />
    </>
  );
}
