import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FaqAccordion from "@/components/FaqAccordion";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Vad är ett hemtest? – Komplett guide 2026 | Testahemma.se",
  description: "Allt du behöver veta om hemtestningskit – hur de fungerar, vad de kostar, vilka är pålitliga och när du bör använda dem.",
  alternates: { canonical: "https://www.testahemma.se/guider/vad-ar-hemtest/" },
};
const faqs = [
  { question: "Är hemtester godkända av sjukvården?", answer: "Hemtester är CE-märkta medicintekniska produkter som uppfyller EU:s krav. De är inte 'godkända av sjukvården' i den meningen att de ersätter klinisk utredning, men ackrediterade laboratorier ger kliniskt tillförlitliga svar." },
  { question: "Vad kostar ett hemtest?", answer: "Priset varierar från 299 kr (enkel vitamintest) till 2 495 kr (avancerad tarmfloraanalys). De flesta populära blodpaneler kostar 500–1 000 kr." },
  { question: "Hur länge är ett hemtest giltigt?", answer: "Kitet har ett utgångsdatum (vanligtvis 1–2 år). Provet måste skickas inom den tid som anges på förpackningen, vanligtvis inom 24–48 timmar efter provtagning." },
];
export default function VadArHemtestPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <BreadcrumbNav items={[{ name: "Hem", href: "/" }, { name: "Guider", href: "/guider/" }, { name: "Vad är hemtest?", href: "/guider/vad-ar-hemtest/" }]} />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Vad är ett hemtest? – Komplett guide</h1>
        <MedicalDisclaimer />
        <div className="prose-guide">
          <p>Ett hemtest (hemtestningskit) är ett provtagningskit du beställer online, tar provet hemma och skickar till ett laboratorium. Du får sedan dina resultat digitalt – utan att behöva boka tid hos läkare, sitta i väntrummet eller ta ledigt från jobbet.</p>
          <h2>Hur fungerar ett hemtest?</h2>
          <p>Oavsett typ av test följer processen samma grundmönster: du beställer kitet online, följer instruktionerna för provtagning (fingerblod, urin, svabb eller avföring), postar provet med förbetalt svarskuvert och får digitalt svar inom 1–14 dagar beroende på test.</p>
          <h2>Vad kan testas med hemtest?</h2>
          <p>Det moderna hemtestsortimentet täcker: blodvärden, hormoner, vitaminer, STI/könssjukdomar, allergi och intolerans, tarmflora/mikrobiom samt cancermarkörer som PSA.</p>
          <h2>Är hemtester pålitliga?</h2>
          <p>Ja – om de analyseras av ett ackrediterat laboratorium. Välj alltid aktörer med SWEDAC-ackreditering (Sverige) eller ISO 15189-certifiering. Se vår <Link href="/basta-hemtest/">jämförelse av bästa hemtester</Link> för rekommendationer.</p>
        </div>
        <FaqAccordion items={faqs} title="Vanliga frågor om hemtester" />
      </main>
      <Footer />
    </>
  );
}
