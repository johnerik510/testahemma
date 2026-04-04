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
  title: "Werlabs vs Cerascreen April 2026 — vilket hemtest är bäst?",
  description:
    "Vi jämför Werlabs och Cerascreen sida vid sida. Priser, testutbud, laboratoriekvalitet och svarstid — vilket hemtest passar dig bäst 2026?",
  alternates: { canonical: "https://www.testahemma.se/werlabs-vs-cerascreen/" },
  openGraph: {
    title: "Werlabs vs Cerascreen April 2026 — vilket hemtest vinner?",
    description:
      "SWEDAC vs ISO 15189. Blodvärden vs vitaminer/allergi. Vi jämför Sveriges populäraste hemtesttjänster.",
    url: "https://www.testahemma.se/werlabs-vs-cerascreen/",
    siteName: "Testahemma.se",
    locale: "sv_SE",
    type: "article",
  },
};

const faqs = [
  {
    question: "Vilken är bäst — Werlabs eller Cerascreen?",
    answer:
      "Det beror på vad du vill testa. Werlabs är bäst för blodvärden (SWEDAC-ackrediterat lab, bredare blodpanel). Cerascreen är bäst för vitamintester och allergi (lägre pris, störst sortiment för specifika vitaminer). Vill du ha ett komplett blodstatus eller kolesterolvärden: Werlabs. Vill du testa D-vitamin, B12 eller allergi till lägst pris: Cerascreen.",
  },
  {
    question: "Vad är skillnaden mellan SWEDAC och ISO 15189?",
    answer:
      "SWEDAC är den svenska ackrediteringsmyndigheten och innebär att laboratoriet uppfyller svenska myndighetskrav — i praktiken sjukhuskvalitet. ISO 15189 är den internationella standarden för medicinska laboratorier och garanterar hög men inte identisk kvalitet. Werlabs SWEDAC-ackreditering är ett starkare kvalitetsintyg för medicinsk diagnostik i Sverige, men Cerascreens ISO 15189 är fortfarande ett välvaliderat, pålitligt alternativ.",
  },
  {
    question: "Är Cerascreen pålitligt för D-vitamintest?",
    answer:
      "Ja. Cerascreen är ett av de bäst testade alternativen specifikt för D-vitamintest (25-OH-D3). Deras ISO 15189-certifierade laboratorium ger kliniskt relevanta svar som stämmer väl med sjukhusprover i jämförande studier. Det är ett pålitligt val för vitamin- och mineraltester.",
  },
  {
    question: "Kan Werlabs testa allergi?",
    answer:
      "Ja, men Cerascreens allergitest är bredare och mer specialiserade. Cerascreen erbjuder allergitest för upp till 295 ämnen (mat, pollen, djur, mögel). Werlabs har allergitest men med ett mer begränsat urval. För allergi: Cerascreen är det bättre valet.",
  },
  {
    question: "Vilken är snabbast — Werlabs eller Cerascreen?",
    answer:
      "Werlabs är snabbare: normalt 2–4 vardagar från att laboratoriet tar emot provet. Cerascreen tar 3–5 vardagar. Notera att Cerascreen skickar till ett europeiskt laboratorium, vilket kan lägga till posttid. Räkna med 5–7 dagar totalt för Cerascreen mot 3–5 dagar för Werlabs.",
  },
  {
    question: "Vad kostar Werlabs vs Cerascreen?",
    answer:
      "Cerascreen är billigare för specifika tester (D-vitamin från 299 kr, B12 från 299 kr). Werlabs börjar på 495 kr för baspaket men inkluderar fler värden. Per testat ämne är priserna liknande — Cerascreens fördel är att du kan testa en enskild markör till lägre kostnad, medan Werlabs ger mer för pengarna i en samlad panel.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Werlabs vs Cerascreen April 2026 — komplett jämförelse",
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

export default function WerlabsVsCerascreenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-6">
        <BreadcrumbNav
          items={[
            { name: "Hem", href: "/" },
            { name: "Jämför hemmatester", href: "/jamfor-hemmatester/" },
            { name: "Werlabs vs Cerascreen", href: "/werlabs-vs-cerascreen/" },
          ]}
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Werlabs vs Cerascreen April 2026 — vilket hemtest är bäst?
        </h1>
        <p className="text-sm text-gray-500 mb-4">Senast uppdaterad: mars 2026</p>
        <AffiliateDisclaimer />
        <MedicalDisclaimer />

        <p className="text-gray-700 leading-relaxed mb-6 mt-4">
          Werlabs och Cerascreen är de två mest populära hemtesttjänsterna i Sverige. Werlabs dominerar
          blodvärdesanalys med SWEDAC-ackreditering. Cerascreen dominerar vitamintester och allergi med
          Europas bredaste sortiment. De är egentligen inte direkta konkurrenter — de är bra på olika saker.
        </p>

        {/* Quick verdict boxes */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-blue-700 uppercase mb-1">Bäst för blodvärden</p>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Werlabs</h2>
            <p className="text-sm text-gray-600 mb-3">
              SWEDAC-ackrediterat (sjukhuskvalitet), 100+ blodtester, gratis läkarkonsultation. Från 495 kr.
            </p>
            <a
              href="https://werlabs.se"
              rel="noopener noreferrer sponsored"
              target="_blank"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors w-full text-center"
            >
              Beställ hos Werlabs — från 495 kr
            </a>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-green-700 uppercase mb-1">Bäst för vitaminer/allergi</p>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Cerascreen</h2>
            <p className="text-sm text-gray-600 mb-3">
              50+ tester, ISO 15189-lab, allergipanel (295 ämnen). Prisvärt från 299 kr.
            </p>
            <a
              href="https://www.cerascreen.se"
              rel="noopener noreferrer sponsored"
              target="_blank"
              className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors w-full text-center"
            >
              Se alla tester hos Cerascreen — från 299 kr
            </a>
          </div>
        </div>

        {/* Comparison table */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Jämförelsetabell</h2>
        <div className="rounded-xl border border-gray-200 mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-4 py-3 font-semibold text-gray-900">Egenskap</th>
                <th className="text-left px-4 py-3 font-semibold text-blue-800">Werlabs</th>
                <th className="text-left px-4 py-3 font-semibold text-green-800">Cerascreen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Pris från</td>
                <td className="px-4 py-3 text-gray-700">495 kr (baspaket)</td>
                <td className="px-4 py-3 font-bold text-green-800">299 kr (enskilt test)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">Laboratoriecertifiering</td>
                <td className="px-4 py-3 font-bold text-blue-800">SWEDAC (svensk sjukhuskvalitet)</td>
                <td className="px-4 py-3 text-gray-700">ISO 15189 (internationell)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Svarstid</td>
                <td className="px-4 py-3 font-bold text-blue-800">2–4 vardagar</td>
                <td className="px-4 py-3 text-gray-700">3–5 vardagar</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">Antal tester</td>
                <td className="px-4 py-3 font-bold text-blue-800">100+ blodtester</td>
                <td className="px-4 py-3 font-bold text-green-800">50+ (vitaminer, allergi, hormoner)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Blodstatus (CBC)</td>
                <td className="px-4 py-3 font-bold text-blue-800">Ja — bred blodpanel</td>
                <td className="px-4 py-3 text-gray-700">Begränsat</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">Allergitest</td>
                <td className="px-4 py-3 text-gray-700">Begränsat</td>
                <td className="px-4 py-3 font-bold text-green-800">295 allergiämnen</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">D-vitamin, B12</td>
                <td className="px-4 py-3 text-gray-700">Ingår i paneler</td>
                <td className="px-4 py-3 font-bold text-green-800">Separat fr. 299 kr</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">Läkarkonsultation</td>
                <td className="px-4 py-3 font-bold text-blue-800">Gratis vid avvikande svar</td>
                <td className="px-4 py-3 text-gray-700">Ej inkluderad</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Provtagningsmetod</td>
                <td className="px-4 py-3 text-gray-700">Fingerblod</td>
                <td className="px-4 py-3 text-gray-700">Fingerblod / salivprov</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">Tarmflora</td>
                <td className="px-4 py-3 text-gray-700">Nej</td>
                <td className="px-4 py-3 font-bold text-green-800">Ja (16S rRNA)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Betyg (vår bedömning)</td>
                <td className="px-4 py-3 font-bold text-blue-800">9.2 / 10</td>
                <td className="px-4 py-3 font-bold text-green-800">8.8 / 10</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Detailed analysis */}
        <h2 className="text-2xl font-bold text-gray-900 mb-5">Djupanalys</h2>
        <div className="space-y-5 mb-10">

          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-gray-900">Laboratoriekvalitet</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700">Werlabs vinner</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Werlabs SWEDAC-ackrediteringen innebär att deras laboratorium uppfyller svenska myndighetskrav —
              samma standard som sjukhus i Sverige. Cerascreens ISO 15189 är en internationell standard med hög
              men inte identisk kvalitetsnivå. För medicinsk diagnostik och pålitliga blodvärden är Werlabs det
              tryggare valet.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-gray-900">Vitamin- och allergitest</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-green-50 text-green-700">Cerascreen vinner</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Cerascreens specialitet är vitaminer, mineraler och allergi. De erbjuder allergitest för 295 ämnen
              och specifika vitamin-/mineraltester från 299 kr. Det är svårt att slå Cerascreens bredd och pris
              för just dessa tester. Werlabs har allergi och vitaminer men de är inte primärt fokuserade på det.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-gray-900">Pris</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-green-50 text-green-700">Cerascreen vinner för enskilda test</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Cerascreen erbjuder enskilda test från 299 kr (D-vitamin, B12). Werlabs börjar på 495 kr men
              inkluderar fler blodmarkörer per paket. Per markör jämfört är priserna liknande — Cerascreens
              fördel är flexibiliteten att testa exakt det du vill till lägre instegsavgift.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-gray-900">Kompletterande tjänster</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700">Werlabs vinner</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Werlabs erbjuder gratis läkarkonsultation vid avvikande provsvar — en viktig trygghetsfunktion.
              Cerascreen ger personliga resultatrapporter med kostråd och rekommendationer, men ingen inkluderad
              medicinsk konsultation. Werlabs ger mer stöd om dina värden är utanför normalintervallet.
            </p>
          </div>

        </div>

        {/* Use-case recommendations */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Vem ska välja vad?</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">Välj Werlabs om du...</h3>
            <ul className="space-y-1.5 text-sm text-blue-800">
              <li>+ Vill ha ett komplett blodstatus (hemoglobin, kolesterol, HbA1c)</li>
              <li>+ Vill ha SWEDAC-ackrediterad sjukhuskvalitet</li>
              <li>+ Behöver gratis läkarkonsultation vid avvikande svar</li>
              <li>+ Vill ha snabbast möjlig svarstid (2–4 dagar)</li>
              <li>+ Testar för kroniska sjukdomsmarkörer</li>
            </ul>
            <a
              href="https://werlabs.se"
              rel="noopener noreferrer sponsored"
              target="_blank"
              className="inline-block mt-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors w-full text-center"
            >
              Beställ hos Werlabs
            </a>
          </div>
          <div className="bg-green-50 border border-green-100 rounded-xl p-5">
            <h3 className="font-bold text-green-900 mb-3">Välj Cerascreen om du...</h3>
            <ul className="space-y-1.5 text-sm text-green-800">
              <li>+ Vill testa ett specifikt vitamin (D-vitamin, B12) till lägst pris</li>
              <li>+ Behöver ett brett allergitest (upp till 295 ämnen)</li>
              <li>+ Är intresserad av tarmhälsa (mikrobiom-analys)</li>
              <li>+ Vill testa hormoner (kortisol, östrogen) med salivprov</li>
              <li>+ Söker prisvärd ingångspunkt för hälsokontroll</li>
            </ul>
            <a
              href="https://www.cerascreen.se"
              rel="noopener noreferrer sponsored"
              target="_blank"
              className="inline-block mt-4 bg-green-700 hover:bg-green-800 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors w-full text-center"
            >
              Se tester hos Cerascreen
            </a>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Vanliga frågor</h2>
        <FaqAccordion items={faqs} />

        {/* Related links */}
        <div className="mt-10 p-5 bg-gray-50 rounded-xl border border-gray-200">
          <h2 className="font-bold text-gray-900 mb-3">Relaterade sidor</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/recension/werlabs/" className="text-blue-700 hover:underline">Werlabs recension April 2026 — fullständig genomgång</Link></li>
            <li><Link href="/recension/cerascreen/" className="text-blue-700 hover:underline">Cerascreen recension April 2026 — fullständig genomgång</Link></li>
            <li><Link href="/jamfor-hemmatester/" className="text-blue-700 hover:underline">Jämför alla hemmatestleverantörer 2026</Link></li>
            <li><Link href="/basta-hemtest/" className="text-blue-700 hover:underline">Bästa hemtest April 2026 — topplista</Link></li>
            <li><Link href="/vitamintester/" className="text-blue-700 hover:underline">Bästa vitamintester 2026</Link></li>
            <li><Link href="/allergitester/" className="text-blue-700 hover:underline">Bästa allergitester 2026</Link></li>
          </ul>
        </div>
      </main>
      <Footer />

      <StickyCTA
        product="Werlabs"
        price="från 495 kr"
        url="https://werlabs.se"
        text="Beställ hemtest hos Werlabs"
        label="Bäst i test blodvärden"
      />
    </>
  );
}
