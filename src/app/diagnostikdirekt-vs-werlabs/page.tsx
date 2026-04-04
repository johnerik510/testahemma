import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import AffiliateDisclaimer from "@/components/AffiliateDisclaimer";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Diagnostikdirekt vs Werlabs April 2026 — vilket hemtest är bäst?",
  description:
    "Vi jämför Diagnostikdirekt och Werlabs sida vid sida. Pris, testutbud, svarstid och labbkvalitet — vilket hemblodtest passar dig bäst 2026?",
  alternates: { canonical: "https://www.testahemma.se/diagnostikdirekt-vs-werlabs/" },
  openGraph: {
    title: "Diagnostikdirekt vs Werlabs April 2026 — vilket hemtest vinner?",
    description: "Lägre pris eller bredare panel? Vi jämför de två populäraste hemblodtesterna i Sverige.",
    url: "https://www.testahemma.se/diagnostikdirekt-vs-werlabs/",
    siteName: "Testahemma.se",
    locale: "sv_SE",
    type: "article",
  },
};

const faqs = [
  {
    question: "Vilket är billigast — Diagnostikdirekt eller Werlabs?",
    answer: "Diagnostikdirekt är generellt billigare för enstaka markörer och baspaket. Werlabs ligger ofta 100–200 kr dyrare för jämförbara paket men inkluderar gratis läkarkonsultation vid avvikande svar, vilket kan motivera prisskillnaden. Jämför alltid exakt vad paketen innehåller – inte bara priset.",
  },
  {
    question: "Är Diagnostikdirekt SWEDAC-ackrediterat?",
    answer: "Diagnostikdirekt samarbetar med ackrediterade laboratorier i Norden. Werlabs använder ett SWEDAC-ackrediterat laboratorium i Sverige – den högsta certifieringsstandarden för svenska laboratorier. För de flesta konsumenter är skillnaden i praktiken liten, men Werlabs har ett marknadsföringsövertag med SWEDAC-stämpeln.",
  },
  {
    question: "Hur snabbt får man svar med Diagnostikdirekt vs Werlabs?",
    answer: "Werlabs: svar inom 2–4 vardagar efter att laboratoriet mottagit provet. Diagnostikdirekt: svar inom 2–5 vardagar beroende på test. Båda är jämförbara i svarstid för standardtest. Vid brådskande behov är det primärt laboratorietid som skiljer – inte tjänsteprocessen.",
  },
  {
    question: "Vilket företag erbjuder fler tester?",
    answer: "Werlabs har ett bredare utbud med 100+ individuella analyser och paket. Diagnostikdirekt har ett mer begränsat men väldefinierat utbud av de mest populära testerna. För vanliga hälsokontroller täcker Diagnostikdirekt behovet. För mer avancerade eller ovanliga tester är Werlabs mer fullständigt.",
  },
  {
    question: "Kan man ta blodprov hemma med båda?",
    answer: "Ja – båda erbjuder fingerblodprovtagning hemma med ett medföljandelansett. Provet skickas sedan med bifogat svarskuvert till laboratoriet. Ingen av dem kräver att du besöker en klinik, men Werlabs erbjuder som tillägg provtagning på samarbetsplatser om du föredrar venöst blodprov.",
  },
  {
    question: "Vilket är bättre för D-vitamintest?",
    answer: "Båda erbjuder D-vitamintest (25-OH-vitamin D) med jämförbar metodologi. Diagnostikdirekt har historiskt haft lägre priser på enstaka vitamintester. Werlabs ingår D-vitamin i sina helhetspaneler. För ett isolerat D-vitamintest: jämför aktuellt pris hos båda och välj det billigaste – analysen är identisk.",
  },
];

const comparisonRows = [
  { feature: "Ursprung", diagnostikdirekt: "Nordiskt (Sverige/Danmark)", werlabs: "Svenskt", winner: "draw" },
  { feature: "Laboratoriecertifiering", diagnostikdirekt: "Ackrediterat lab", werlabs: "SWEDAC-ackrediterat", winner: "werlabs" },
  { feature: "Ingångspris", diagnostikdirekt: "Lägre (konkurrenskraftigt)", werlabs: "Något högre", winner: "diagnostikdirekt" },
  { feature: "Svarstid", diagnostikdirekt: "2–5 vardagar", werlabs: "2–4 vardagar", winner: "werlabs" },
  { feature: "Antal tester/analyser", diagnostikdirekt: "Begränsat urval", werlabs: "100+ analyser", winner: "werlabs" },
  { feature: "Gratis läkarkonsultation", diagnostikdirekt: "Nej (tillval)", werlabs: "Ja vid avvikande svar", winner: "werlabs" },
  { feature: "Venprov", diagnostikdirekt: "Nej", werlabs: "Ja (på provplatser)", winner: "werlabs" },
  { feature: "Digital leverans", diagnostikdirekt: "Ja – webb/app", werlabs: "Ja – app och webb med historik", winner: "werlabs" },
  { feature: "Hormonstatus", diagnostikdirekt: "Grundläggande", werlabs: "Komplett (TSH, testosteron, östradiol m.fl.)", winner: "werlabs" },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Diagnostikdirekt vs Werlabs April 2026 — komplett jämförelse",
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

export default function DiagnostikdirektVsWerlabsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-6">
        <BreadcrumbNav
          items={[
            { name: "Hem", href: "/" },
            { name: "Jämför hemmatester", href: "/jamfor-hemmatester/" },
            { name: "Diagnostikdirekt vs Werlabs", href: "/diagnostikdirekt-vs-werlabs/" },
          ]}
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Diagnostikdirekt vs Werlabs April 2026 — vilket hemblodtest vinner?
        </h1>
        <p className="text-sm text-gray-500 mb-4">Senast uppdaterad: april 2026</p>
        <AffiliateDisclaimer />
        <MedicalDisclaimer />

        <p className="text-gray-700 leading-relaxed mb-6 mt-4">
          Diagnostikdirekt och Werlabs är två av de mest köpta hemblodtesterna i Sverige. Diagnostikdirekt
          konkurrerar på pris och enkelhet. Werlabs satsar på bredd, SWEDAC-ackreditering och gratis
          läkarkonsultation. Den här jämförelsen hjälper dig att välja rätt för dina behov.
        </p>

        {/* Quick verdict */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-teal-50 border border-teal-100 rounded-xl p-5">
            <div className="text-xs font-bold text-teal-600 uppercase tracking-wide mb-1">Bäst för pris</div>
            <div className="text-xl font-bold text-gray-900 mb-2">Diagnostikdirekt</div>
            <p className="text-sm text-gray-600">Lägre priser på enstaka test. Enkel process. Bra för dig som vet exakt vad du vill testa.</p>
            <Link href="/recension/diagnostikdirekt/" className="mt-3 inline-block text-sm text-teal-600 font-semibold hover:underline">
              Se fullständig recension →
            </Link>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
            <div className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">Bäst totalt</div>
            <div className="text-xl font-bold text-gray-900 mb-2">Werlabs</div>
            <p className="text-sm text-gray-600">Bredast utbud, SWEDAC-ackrediterat lab, gratis läkarkonsultation. Bäst för fullständig hälsokontroll.</p>
            <Link href="/recension/werlabs/" className="mt-3 inline-block text-sm text-blue-600 font-semibold hover:underline">
              Se fullständig recension →
            </Link>
          </div>
        </div>

        {/* Comparison table */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Jämförelsetabell</h2>
        <div className="mb-10">
          <table className="w-full text-sm border-collapse rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Funktion</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Diagnostikdirekt</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Werlabs</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {comparisonRows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-medium text-gray-700">{row.feature}</td>
                  <td className={`px-4 py-3 ${row.winner === "diagnostikdirekt" ? "font-semibold text-teal-700" : "text-gray-600"}`}>
                    {row.winner === "diagnostikdirekt" && <span className="mr-1">✓</span>}
                    {row.diagnostikdirekt}
                  </td>
                  <td className={`px-4 py-3 ${row.winner === "werlabs" ? "font-semibold text-blue-700" : "text-gray-600"}`}>
                    {row.winner === "werlabs" && <span className="mr-1">✓</span>}
                    {row.werlabs}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Diagnostikdirekt – djupdykning</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Diagnostikdirekt är en nordisk aktör som erbjuder hemtestlösningar för de mest efterfrågade hälsomarkörerna. Styrkan är priset – Diagnostikdirekt ligger generellt under Werlabs för jämförbara enstaka test. Processen är enkel: beställ online, ta fingerblodsprov hemma, skicka med bifogat kuvert och få digitalt svar.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Begränsningarna är ett smalare testutbud och avsaknad av SWEDAC-ackreditering (det svenska ackrediteringsorganets högsta certifikat). För grundläggande hälsokontroller – D-vitamin, järnstatus, kolesterol och HbA1c – är Diagnostikdirekt fullt tillräckligt och ett kostnadseffektivt val.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Werlabs – djupdykning</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Werlabs grundades 2013 och är Sveriges mest kända hemblodtesttjänst. Det SWEDAC-ackrediterade laboratoriet är det starkaste försäljningsargumentet – det innebär att analyserna uppfyller exakt samma krav som sjukhuslaboratorier. Med 100+ tillgängliga analyser, en välutvecklad app med historik och trendkurvor, samt gratis läkarkonsultation vid avvikande svar är Werlabs det mest kompletta alternativet.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Nackdelen är priset: Werlabs kostar mer, framför allt för enstaka test. Men för en fullständig hälsopanel är prisskillnaden per analys ofta mindre dramatisk.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Vilket ska du välja?</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-teal-50 rounded-xl p-5 border border-teal-100">
            <h3 className="font-bold text-gray-900 mb-2">Välj Diagnostikdirekt om:</h3>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>Du vill ha ett specifikt enstaka test till lägsta pris</li>
              <li>Du vet exakt vad du vill mäta (ett vitamin, ett hormon)</li>
              <li>SWEDAC-ackreditering inte är ett krav för dig</li>
              <li>Du inte behöver läkarkonsultation inkluderat</li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
            <h3 className="font-bold text-gray-900 mb-2">Välj Werlabs om:</h3>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>Du vill ha en fullständig hälsopanel</li>
              <li>SWEDAC-ackreditering är viktigt för dig</li>
              <li>Du vill ha gratis läkarkonsultation inkluderat</li>
              <li>Du vill följa trender i din hälsa via app</li>
              <li>Du vill ha tillgång till 100+ analyser</li>
            </ul>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-8">
          Se även vår{" "}
          <Link href="/basta-hemtest/" className="text-teal-600 hover:underline font-medium">
            fullständiga topplista över bästa hemblodtester
          </Link>{" "}
          där vi rankar alla tillgängliga tjänster.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Vanliga frågor</h2>
        <FaqAccordion items={faqs} />
      </main>
      <Footer />
    </>
  );
}
