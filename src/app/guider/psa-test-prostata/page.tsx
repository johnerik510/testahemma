import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import FaqAccordion from "@/components/FaqAccordion";
import Link from "next/link";
export const metadata: Metadata = {
  title: "PSA-test Hemma – Prostatahälsa och Vad Värdet Betyder | Testahemma.se",
  description: "Guide till PSA-testning hemma. Vad är normalt PSA-värde? Vem bör testa och hur ofta? Allt om prostatahälsa och hemtest.",
  alternates: { canonical: "https://www.testahemma.se/guider/psa-test-prostata/" },
};
const faqs = [
  { question: "Vad är normalt PSA-värde?", answer: "PSA-referensvärden varierar med ålder. Under 50 år: under 2,5 µg/L. 50–59 år: under 3,5 µg/L. 60–69 år: under 4,5 µg/L. 70+ år: under 6,5 µg/L. Dessa är riktlinjer – din läkare bedömer alltid PSA i ett kliniskt sammanhang." },
  { question: "Kan förhöjt PSA bero på annat än cancer?", answer: "Ja. Förhöjt PSA kan orsakas av godartad prostataförstoring (BPH, mycket vanlig hos äldre män), prostatainflammation (prostatit), cykelsport, samlag och prostatabiopsi. Förhöjt PSA = vidare utredning, inte automatiskt cancer." },
  { question: "Hur ofta bör man testa PSA?", answer: "Män från 50 år bör diskutera PSA-screening med sin läkare. Från 45 år vid ärftlighet (far eller bror med prostatacancer). Testfrekvens bestäms utifrån utgångsvärde och riskprofil – vanligtvis vartannat år." },
];
export default function PsaTestPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <BreadcrumbNav items={[{ name: "Hem", href: "/" }, { name: "Guider", href: "/guider/" }, { name: "PSA-test prostata", href: "/guider/psa-test-prostata/" }]} />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">PSA-test hemma – prostatahälsa och vad värdet betyder</h1>
        <MedicalDisclaimer />
        <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-800 my-4"><strong>OBS:</strong> Förhöjt PSA är ALDRIG en cancerdiagnos. Alla avvikande PSA-värden kräver uppföljning med läkare och vidare utredning.</div>
        <div className="prose-guide">
          <p>PSA (prostataspecifikt antigen) är ett protein som produceras av prostatakörtelns celler. Förhöjda nivåer kan indikera prostatacancer men också godartade tillstånd. PSA-testning är ett viktigt verktyg för proaktiv prostatahälsa.</p>
          <h2>Vem bör testa PSA hemma?</h2>
          <ul>
            <li>Män från 50 år som vill ha en proaktiv hälsokontroll</li>
            <li>Män från 45 år med ärftlighet för prostatacancer</li>
            <li>Afrosvenska män från 45 år (högre risk)</li>
            <li>Män med symtom: täta trängningar, svag urinstråle, nattliga toalettbesök</li>
          </ul>
          <h2>Hur testar man PSA hemma?</h2>
          <p>PSA testas med ett enkelt fingerblodprov som del av en blodpanel. Se <Link href="/cancermarkorer/">bästa cancermarkörtest hemma</Link> för alternativ.</p>
        </div>
        <FaqAccordion items={faqs} title="Vanliga frågor om PSA-test" />
      </main>
      <Footer />
    </>
  );
}
