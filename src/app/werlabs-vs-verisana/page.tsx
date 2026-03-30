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
  title: "Werlabs vs Verisana 2026 — vilket hemtest passar dig bäst?",
  description:
    "Vi jämför Werlabs och Verisana sida vid sida. SWEDAC vs europeiskt lab, pris, hormontest och svarstid — vilket hemtest ska du välja 2026?",
  alternates: { canonical: "https://www.testahemma.se/werlabs-vs-verisana/" },
  openGraph: {
    title: "Werlabs vs Verisana 2026 — SWEDAC mot europeiskt hormonlab",
    description:
      "Werlabs dominerar blodvärden. Verisana specialiserar på hormoner och mikrobiom. Vi avgör vilket som passar din hälsokontroll bäst.",
    url: "https://www.testahemma.se/werlabs-vs-verisana/",
    siteName: "Testahemma.se",
    locale: "sv_SE",
    type: "article",
  },
};

const faqs = [
  {
    question: "Vilken är bäst — Werlabs eller Verisana?",
    answer:
      "Det beror på vad du vill testa. Werlabs är bäst för blodvärden (SWEDAC-ackrediterat lab, snabb svarstid, gratis läkarkonsultation). Verisana är bäst för hormonpaneler (kortisol, östrogen, testosteron via salivprov) och mikrobiomanalys. Vill du ha ett komplett blodstatus: Werlabs. Vill du djupdyka i hormoner eller tarmbakterierna: Verisana.",
  },
  {
    question: "Är Verisana tillförlitligt för hormontest?",
    answer:
      "Ja. Verisana är ett tyskt laboratorium med ISO 15189-certifiering specialiserat på hormoner via salivprov. Salivprov för kortisol, DHEA och könshormoner ger kliniskt relevanta resultat och är en validerad metod. De är ett av de starkare alternativen specifikt för hormonanalys utanför sjukvård.",
  },
  {
    question: "Kan Werlabs testa hormoner lika bra som Verisana?",
    answer:
      "Werlabs erbjuder hormontest (TSH, testosteron, östradiol) via blodprov, vilket är den kliniskt mest validerade metoden. Verisana mäter hormoner via salivprov, som är bekvämare men inte alltid identisk med blodvärden vid läkarbedömning. För klinisk relevans: Werlabs. För tillgänglighet och djupanalys av stresshormoner och mikrobiom: Verisana.",
  },
  {
    question: "Hur lång är svarstiden hos Werlabs och Verisana?",
    answer:
      "Werlabs: 2–4 vardagar från att laboratoriet tar emot provet. Verisana: 5–7 vardagar plus posthantering till och från Tyskland — räkna med 7–10 dagar totalt. Werlabs är betydligt snabbare för de flesta tester.",
  },
  {
    question: "Vad kostar Werlabs vs Verisana?",
    answer:
      "Werlabs börjar på ca 495 kr för ett baspaket blodvärden. Verisana-tester börjar från ca 449 kr för enskilda hormon-/vitamintester och kan gå upp till 1 500 kr för breda hormonstatus- eller mikrobiom-paneler. Werlabs ger generellt mer blodmarkörer per krona, medan Verisana erbjuder unik salivbaserad hormonanalys som Werlabs inte kan matcha.",
  },
  {
    question: "Har Werlabs mikrobiomanalys?",
    answer:
      "Nej, Werlabs erbjuder inte tarmflora-/mikrobiomanalys. Verisana är ett av få hemmalternativ i Sverige som erbjuder 16S rRNA-baserad tarmfloraanalys. Om du vill analysera din tarmbakterieprofil är Verisana det tydliga valet.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Werlabs vs Verisana 2026 — komplett jämförelse",
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

export default function WerlabsVsVerisanaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-6">
        <BreadcrumbNav
          items={[
            { name: "Hem", href: "/" },
            { name: "Jämför hemmatester", href: "/jamfor-hemmatester/" },
            { name: "Werlabs vs Verisana", href: "/werlabs-vs-verisana/" },
          ]}
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Werlabs vs Verisana 2026 — blodvärden mot hormonspecialist
        </h1>
        <p className="text-sm text-gray-500 mb-4">Senast uppdaterad: mars 2026</p>
        <AffiliateDisclaimer />
        <MedicalDisclaimer />

        <p className="text-gray-700 leading-relaxed mb-6 mt-4">
          Werlabs är Sveriges ledande hemtesttjänst för blodvärden med SWEDAC-ackrediteringoch snabb svarstid. Verisana är ett tyskt laboratorium specialiserat på hormoner via salivprov och mikrobiomanalys. De konkurrerar delvis inom hormontest men riktar sig mot lite olika behov.
        </p>

        {/* Quick verdict boxes */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-blue-700 uppercase mb-1">Bäst för blodvärden</p>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Werlabs</h2>
            <p className="text-sm text-gray-600 mb-3">
              SWEDAC-ackrediterat (sjukhuskvalitet), 100+ blodtester, gratis läkarkonsultation. Snabbaste svarstiden — 2–4 dagar. Från 495 kr.
            </p>
            <a
              href="https://werlabs.se"
              rel="noopener sponsored"
              target="_blank"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors w-full text-center"
            >
              Beställ hos Werlabs — från 495 kr
            </a>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-amber-700 uppercase mb-1">Bäst för hormoner och mikrobiom</p>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Verisana</h2>
            <p className="text-sm text-gray-600 mb-3">
              Hormonpaneler via salivprov (kortisol, DHEA, östrogen, testosteron), tarmfloraanalys. ISO 15189-certifierat tyskt lab. Från 449 kr.
            </p>
            <a
              href="https://www.verisana.se"
              rel="noopener sponsored"
              target="_blank"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors w-full text-center"
            >
              Se Verisanas tester — från 449 kr
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
                <th className="text-left px-4 py-3 font-semibold text-blue-800">Werlabs</th>
                <th className="text-left px-4 py-3 font-semibold text-amber-800">Verisana</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Pris från</td>
                <td className="px-4 py-3 text-gray-700">495 kr (baspaket)</td>
                <td className="px-4 py-3 text-gray-700">449 kr (enskilt test)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">Laboratoriecertifiering</td>
                <td className="px-4 py-3 font-bold text-blue-800">SWEDAC (svensk sjukhuskvalitet)</td>
                <td className="px-4 py-3 text-gray-700">ISO 15189 (tyskt speciallab)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Svarstid</td>
                <td className="px-4 py-3 font-bold text-blue-800">2–4 vardagar</td>
                <td className="px-4 py-3 text-gray-700">7–10 dagar (inkl. posthantering)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">Blodstatus (CBC)</td>
                <td className="px-4 py-3 font-bold text-blue-800">Ja — bred blodpanel</td>
                <td className="px-4 py-3 text-gray-700">Nej</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Hormontest</td>
                <td className="px-4 py-3 text-gray-700">Blodprov (TSH, testosteron)</td>
                <td className="px-4 py-3 font-bold text-amber-800">Salivprov — djup hormonstatus</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">Kortisol / DHEA</td>
                <td className="px-4 py-3 text-gray-700">Begränsat</td>
                <td className="px-4 py-3 font-bold text-amber-800">Ja — specialitet</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Mikrobiomanalys</td>
                <td className="px-4 py-3 text-gray-700">Nej</td>
                <td className="px-4 py-3 font-bold text-amber-800">Ja (16S rRNA)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">Läkarkonsultation</td>
                <td className="px-4 py-3 font-bold text-blue-800">Gratis vid avvikande svar</td>
                <td className="px-4 py-3 text-gray-700">Ej inkluderad</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Provtagningsmetod</td>
                <td className="px-4 py-3 text-gray-700">Fingerblod</td>
                <td className="px-4 py-3 text-gray-700">Salivprov / avföringsprov</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">Betyg (vår bedömning)</td>
                <td className="px-4 py-3 font-bold text-blue-800">9.0 / 10</td>
                <td className="px-4 py-3 font-bold text-amber-800">7.8 / 10</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Detailed analysis */}
        <h2 className="text-2xl font-bold text-gray-900 mb-5">Djupanalys</h2>
        <div className="space-y-5 mb-10">
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-gray-900">Laboratoriekvalitet och tillförlitlighet</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700">Werlabs vinner</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Werlabs SWEDAC-ackreditering innebär att deras laboratorium uppfyller svenska myndighetskrav — samma standard som sjukhus i Sverige. Verisanas ISO 15189 är ett välkänt internationellt certifikat men inte identiskt med svensk myndighetskvalitet. För blodvärden som ska ligga till grund för medicinska beslut är Werlabs det tryggare valet.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-gray-900">Hormonanalys</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-50 text-amber-700">Verisana vinner</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Verisana är specialiserade på hormonpaneler via salivprov — kortisol (4 tidpunkter), DHEA, östrogen, progesteron och testosteron. Salivprov för kortisol ger dagsprofil som inte är möjlig med ett enskilt blodprov. Det gör Verisana till ett unikt alternativ för dig som misstänker stressrelaterade hormonstörningar eller hormonell obalans.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-gray-900">Mikrobiomanalys</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-50 text-amber-700">Verisana vinner</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Werlabs erbjuder ingen tarmfloraanalys. Verisana erbjuder 16S rRNA-baserad mikrobiomanalys som kartlägger sammansättningen av tarmbakterierna och ger rekommendationer om kost och probiotika. Om tarmhälsa är ditt fokus är Verisana det enda alternativet av dessa två.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-gray-900">Svarstid och bekvämlighet</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700">Werlabs vinner</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Werlabs levererar svar på 2–4 vardagar. Verisana skickar provet till ett tyskt laboratorium — räkna med 7–10 dagar totalt inklusive posthantering i bägge riktningar. Werlabs är klart snabbare och enklare logistiskt sett.
            </p>
          </div>
        </div>

        {/* Who should choose what */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Vem ska välja vad?</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">Välj Werlabs om du...</h3>
            <ul className="space-y-1.5 text-sm text-blue-800">
              <li>+ Vill ha ett komplett blodstatus (kolesterol, hemoglobin, HbA1c)</li>
              <li>+ Prioriterar SWEDAC-ackrediterad (sjukhus-) kvalitet</li>
              <li>+ Behöver gratis läkarkonsultation vid avvikande svar</li>
              <li>+ Vill ha snabbaste möjliga svarstid (2–4 dagar)</li>
              <li>+ Testar för kroniska sjukdomsmarkörer (diabetes, sköldkörtel)</li>
            </ul>
            <a
              href="https://werlabs.se"
              rel="noopener sponsored"
              target="_blank"
              className="inline-block mt-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors w-full text-center"
            >
              Beställ hos Werlabs
            </a>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-5">
            <h3 className="font-bold text-amber-900 mb-3">Välj Verisana om du...</h3>
            <ul className="space-y-1.5 text-sm text-amber-800">
              <li>+ Vill testa stresshormoner (kortisol, DHEA) via salivprov</li>
              <li>+ Misstänker hormonell obalans (östrogen, progesteron, testosteron)</li>
              <li>+ Vill analysera din tarmflora med mikrobiomtest</li>
              <li>+ Föredrar salivprov framför fingerblod</li>
              <li>+ Letar efter alternativ som Werlabs inte erbjuder</li>
            </ul>
            <a
              href="https://www.verisana.se"
              rel="noopener sponsored"
              target="_blank"
              className="inline-block mt-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors w-full text-center"
            >
              Se tester hos Verisana
            </a>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Vanliga frågor</h2>
        <FaqAccordion faqs={faqs} />

        {/* Related links */}
        <div className="mt-10 p-5 bg-gray-50 rounded-xl border border-gray-200">
          <h2 className="font-bold text-gray-900 mb-3">Relaterade sidor</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/recension/werlabs/" className="text-blue-700 hover:underline">Werlabs recension 2026 — fullständig genomgång</Link></li>
            <li><Link href="/recension/verisana/" className="text-blue-700 hover:underline">Verisana recension 2026 — fullständig genomgång</Link></li>
            <li><Link href="/werlabs-vs-cerascreen/" className="text-blue-700 hover:underline">Werlabs vs Cerascreen 2026</Link></li>
            <li><Link href="/medisera-vs-verisana/" className="text-blue-700 hover:underline">Medisera vs Verisana 2026</Link></li>
            <li><Link href="/jamfor-hemmatester/" className="text-blue-700 hover:underline">Jämför alla hemmatestleverantörer 2026</Link></li>
            <li><Link href="/hormontester/" className="text-blue-700 hover:underline">Bästa hormontester 2026</Link></li>
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
