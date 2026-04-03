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
  title: "GetTested vs Testmottagningen 2026 — bäst STI-test hemma?",
  description:
    "Vi jämför GetTested och Testmottagningen för STI- och sexuell hälsa. Pris, diskrethet, testutbud och svarstid — vilket hemtest ska du välja 2026?",
  alternates: { canonical: "https://www.testahemma.se/gettested-vs-testmottagningen/" },
  openGraph: {
    title: "GetTested vs Testmottagningen 2026 — bäst STI-test hemma?",
    description:
      "Båda specialiserar på STI och sexuell hälsa. Vi jämför pris, provtagningsmetod och testutbud — och ger dig ett tydligt svar.",
    url: "https://www.testahemma.se/gettested-vs-testmottagningen/",
    siteName: "Testahemma.se",
    locale: "sv_SE",
    type: "article",
  },
};

const faqs = [
  {
    question: "Vilken är bäst för STI-test — GetTested eller Testmottagningen?",
    answer:
      "GetTested är generellt bäst för diskreta hemma-STI-tester med lägst ingångspris (från 199 kr). Testmottagningen har ett bredare kliniskt testutbud och erbjuder även blodprov via vårdcentral. Vill du ha snabbaste och mest diskreta hemmalösning: GetTested. Vill du ha fler alternativ och ev. klinisk provtagning: Testmottagningen.",
  },
  {
    question: "Testar GetTested och Testmottagningen samma STI:er?",
    answer:
      "Båda testar klamydia, gonorré, syfilis och HIV. GetTested erbjuder dessutom hepatit B/C, HPV och mycoplasma. Testmottagningen har ett liknande utbud men erbjuder även herpes HSV-1 och HSV-2 separat, och bredare paneler som inkluderar fler markörer i ett prov. Kontrollera alltid vilka specifika STI:er som ingår i respektive paket.",
  },
  {
    question: "Är GetTested diskret?",
    answer:
      "Ja. GetTested är designat för diskret användning: neutral förpackning utan avsändarnamn, digitala resultat och anonym onlinebeställning. Testmottagningen är lika diskreta i sin leverans. Bägge hanterar känsliga hälsodata med hög sekretess.",
  },
  {
    question: "Hur lång är svarstiden?",
    answer:
      "GetTested: normalt 2–4 dagar från att laboratoriet tar emot provet. Testmottagningen: 2–4 dagar. Bägge är snabba och levererar resultat via en säker digital portal. Räkna med 1–2 extra dagar för posthantering.",
  },
  {
    question: "Behöver man vara symptomfri för att ta ett hemma-STI-test?",
    answer:
      "Nej. Hemmatester fungerar även om du har symtom, men om du har tydliga symtom (flytningar, sår, smärta) bör du kontakta sjukvården direkt för att snabbare få rätt diagnos och behandling. Hemmatester ersätter inte sjukvård — de är ett komplement för regelbunden hälsokontroll.",
  },
  {
    question: "Vad kostar GetTested vs Testmottagningen?",
    answer:
      "GetTested börjar från 199 kr för ett enskilt test (t.ex. klamydia) och paneler kring 499–799 kr. Testmottagningen börjar från ca 249 kr och paneler kring 599–999 kr. GetTested är generellt något billigare för enskilda tester — Testmottagningen erbjuder mer kliniskt stöd.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "GetTested vs Testmottagningen 2026 — bäst STI-test hemma?",
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

export default function GetTestedVsTestmottagningenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-6">
        <BreadcrumbNav
          items={[
            { name: "Hem", href: "/" },
            { name: "Jämför hemmatester", href: "/jamfor-hemmatester/" },
            { name: "GetTested vs Testmottagningen", href: "/gettested-vs-testmottagningen/" },
          ]}
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          GetTested vs Testmottagningen 2026 — bäst STI-test hemma?
        </h1>
        <p className="text-sm text-gray-500 mb-4">Senast uppdaterad: mars 2026</p>
        <AffiliateDisclaimer />
        <MedicalDisclaimer />

        <p className="text-gray-700 leading-relaxed mb-6 mt-4">
          GetTested och Testmottagningen är båda specialister på STI-tester och sexuell hälsa. De erbjuder diskreta hemmatester utan läkarbesök — men skiljer sig i pris, testutbud och hur de hanterar klinisk uppföljning. Här reder vi ut vilket som passar dig bäst.
        </p>

        {/* Quick verdict boxes */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-rose-50 border border-rose-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-rose-700 uppercase mb-1">Bäst pris och diskrethet</p>
            <h2 className="text-xl font-bold text-gray-900 mb-2">GetTested</h2>
            <p className="text-sm text-gray-600 mb-3">
              Lägst ingångspris från 199 kr. Specialiserat på diskreta hemma-STI-tester. Snabb digital leverans. Bäst för regelbunden screening.
            </p>
            <a
              href="https://www.gettested.com/se"
              rel="noopener noreferrer sponsored"
              target="_blank"
              className="inline-block bg-rose-700 hover:bg-rose-800 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors w-full text-center"
            >
              Beställ hos GetTested — från 199 kr
            </a>
          </div>
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-teal-700 uppercase mb-1">Bäst brett testutbud</p>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Testmottagningen</h2>
            <p className="text-sm text-gray-600 mb-3">
              Bredare testpaneler, klinisk provtagning som alternativ, HSV-typning. Bäst för djupare utredning och mer kliniskt stöd. Från 249 kr.
            </p>
            <a
              href="https://testmottagningen.se"
              rel="noopener noreferrer sponsored"
              target="_blank"
              className="inline-block bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors w-full text-center"
            >
              Beställ hos Testmottagningen — från 249 kr
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
                <th className="text-left px-4 py-3 font-semibold text-rose-800">GetTested</th>
                <th className="text-left px-4 py-3 font-semibold text-teal-800">Testmottagningen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Pris från</td>
                <td className="px-4 py-3 font-bold text-rose-800">199 kr (enskilt test)</td>
                <td className="px-4 py-3 text-gray-700">249 kr (enskilt test)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">Klamydia / Gonorré</td>
                <td className="px-4 py-3 font-bold text-rose-800">Ja</td>
                <td className="px-4 py-3 font-bold text-teal-800">Ja</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Syfilis / HIV</td>
                <td className="px-4 py-3 font-bold text-rose-800">Ja</td>
                <td className="px-4 py-3 font-bold text-teal-800">Ja</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">Hepatit B / C</td>
                <td className="px-4 py-3 font-bold text-rose-800">Ja</td>
                <td className="px-4 py-3 font-bold text-teal-800">Ja</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">HPV</td>
                <td className="px-4 py-3 font-bold text-rose-800">Ja</td>
                <td className="px-4 py-3 text-gray-700">Begränsat</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">Herpes HSV-typning</td>
                <td className="px-4 py-3 text-gray-700">Grundläggande</td>
                <td className="px-4 py-3 font-bold text-teal-800">Ja — HSV-1 och HSV-2 separat</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Klinisk provtagning</td>
                <td className="px-4 py-3 text-gray-700">Nej — enbart hemmatest</td>
                <td className="px-4 py-3 font-bold text-teal-800">Ja — alternativ</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">Svarstid</td>
                <td className="px-4 py-3 font-bold text-rose-800">2–4 dagar</td>
                <td className="px-4 py-3 font-bold text-teal-800">2–4 dagar</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Diskret förpackning</td>
                <td className="px-4 py-3 font-bold text-rose-800">Ja</td>
                <td className="px-4 py-3 font-bold text-teal-800">Ja</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">Betyg (vår bedömning)</td>
                <td className="px-4 py-3 font-bold text-rose-800">8.2 / 10</td>
                <td className="px-4 py-3 font-bold text-teal-800">8.0 / 10</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Detailed analysis */}
        <h2 className="text-2xl font-bold text-gray-900 mb-5">Djupanalys</h2>
        <div className="space-y-5 mb-10">
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-gray-900">Pris och tillgänglighet</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-rose-50 text-rose-700">GetTested vinner</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              GetTested har lägst ingångspris med enskilda tester från 199 kr och breda STI-paneler kring 499 kr. Testmottagningen börjar på 249 kr och är generellt något dyrare per test. GetTested är det enklaste och billigaste alternativet för snabb, diskret STI-screening.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-gray-900">Testutbud och kliniskt stöd</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-teal-50 text-teal-700">Testmottagningen vinner</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Testmottagningen erbjuder mer kliniskt stöd — bl.a. möjlighet till fysisk provtagning om hemmatestning inte passar, och HSV-typning för herpes. Om du misstänker herpes och vill veta om det är HSV-1 (läppherpes) eller HSV-2 (genital) ger Testmottagningen ett tydligare svar.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-gray-900">Diskrethet och användarupplevelse</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-gray-100 text-gray-700">Lika bra</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Båda levererar i neutral förpackning, hanterar data diskret och skickar svar digitalt. GetTested har en något enklare och mer mobiloptimerad beställningsupplevelse, men Testmottagningen är inte efter på diskrethet. Bägge är trygga val.
            </p>
          </div>
        </div>

        {/* Who should choose what */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Vem ska välja vad?</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-rose-50 border border-rose-100 rounded-xl p-5">
            <h3 className="font-bold text-rose-900 mb-3">Välj GetTested om du...</h3>
            <ul className="space-y-1.5 text-sm text-rose-800">
              <li>+ Vill ha lägst pris (från 199 kr)</li>
              <li>+ Vill testa diskret hemma utan krångel</li>
              <li>+ Söker regelbunden STI-screening</li>
              <li>+ Vill testa HPV (bredare urval)</li>
              <li>+ Föredrar en enkel, snabb beställningsprocess</li>
            </ul>
            <a
              href="https://www.gettested.com/se"
              rel="noopener noreferrer sponsored"
              target="_blank"
              className="inline-block mt-4 bg-rose-700 hover:bg-rose-800 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors w-full text-center"
            >
              Beställ hos GetTested
            </a>
          </div>
          <div className="bg-teal-50 border border-teal-100 rounded-xl p-5">
            <h3 className="font-bold text-teal-900 mb-3">Välj Testmottagningen om du...</h3>
            <ul className="space-y-1.5 text-sm text-teal-800">
              <li>+ Vill ha HSV-typning (herpes HSV-1 vs HSV-2)</li>
              <li>+ Föredrar möjligheten till klinisk provtagning</li>
              <li>+ Vill ha ett bredare kliniskt stöd och uppföljning</li>
              <li>+ Vill ha mer detaljerade testpaneler</li>
              <li>+ Är osäker på provtagningsmetod och vill ha vägledning</li>
            </ul>
            <a
              href="https://testmottagningen.se"
              rel="noopener noreferrer sponsored"
              target="_blank"
              className="inline-block mt-4 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors w-full text-center"
            >
              Beställ hos Testmottagningen
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
            <li><Link href="/recension/gettested/" className="text-blue-700 hover:underline">GetTested recension 2026 — fullständig genomgång</Link></li>
            <li><Link href="/recension/testmottagningen/" className="text-blue-700 hover:underline">Testmottagningen recension 2026 — fullständig genomgång</Link></li>
            <li><Link href="/sti-tester/" className="text-blue-700 hover:underline">Bästa STI-tester 2026 — diskret hemmatest</Link></li>
            <li><Link href="/jamfor-hemmatester/" className="text-blue-700 hover:underline">Jämför alla hemmatestleverantörer 2026</Link></li>
            <li><Link href="/gettested-vs-werlabs/" className="text-blue-700 hover:underline">GetTested vs Werlabs 2026 — internationell bredd mot SWEDAC-kvalitet</Link></li>
            <li><Link href="/basta-hemtest/" className="text-blue-700 hover:underline">Bästa hemtest 2026 — topplista</Link></li>
          </ul>
        </div>
      </main>
      <Footer />

      <StickyCTA
        product="GetTested"
        price="från 199 kr"
        url="https://www.gettested.com/se"
        text="Beställ STI-test hos GetTested"
        label="Bäst pris STI-test"
      />
    </>
  );
}
