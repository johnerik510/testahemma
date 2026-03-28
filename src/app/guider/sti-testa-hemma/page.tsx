import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FaqAccordion from "@/components/FaqAccordion";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "STI-testning Hemma – Diskret, Snabbt och Enkelt | Testahemma.se",
  description: "Komplett guide till STI-testning hemma. Vilka könssjukdomar kan testas? Hur diskret är det? Hur snabbt får man svar? Allt du behöver veta.",
  alternates: { canonical: "https://www.testahemma.se/guider/sti-testa-hemma/" },
};

const faqs = [
  { question: "Hur lång tid efter sex kan man testa sig?", answer: "Det beror på vilken STI du misstänker. Klamydia/gonorré: vänta minst 1–2 veckor. Syfilis: 3–6 veckor för säkert svar. HIV: 18–20 dagar med 4:e generationens test. Herpes IgG: 3–12 veckor. Testa för tidigt ger falskt negativa svar." },
  { question: "Kan man ha könssjukdomar utan symtom?", answer: "Ja – de flesta könssjukdomar ger inga eller otydliga symtom. Upp till 70 % av klamydiainfektioner är asymtomatiska. Det är en av de viktigaste anledningarna att testa sig regelbundet vid nya eller osäkra sexuella kontakter." },
  { question: "Är hemma-STI-tester lika pålitliga som kliniktest?", answer: "Moderna hemtester som använder PCR-teknik (för klamydia/gonorré) och 4:e generationens serologiska test (för HIV) är kliniskt likvärdiga med sjukhustester. Provtagningstekniken är avgörande – följ instruktionerna noggrant." },
  { question: "Vad händer om jag testar positivt?", answer: "Kontakta omedelbart din vårdcentral, ungdomsmottagning eller en STI-mottagning. De flesta STI (klamydia, gonorré, syfilis) behandlas effektivt med antibiotika. HIV behandlas med antiretrovirala läkemedel som ger nästan normal livslängd." },
];

export default function StiGuide() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <BreadcrumbNav items={[{ name: "Hem", href: "/" }, { name: "Guider", href: "/guider/" }, { name: "STI-testning hemma", href: "/guider/sti-testa-hemma/" }]} />
        <div className="text-xs text-gray-400 mb-2">Granskad av Erik Svensson, legitimerad läkare &bull; Uppdaterad mars 2026</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">STI-testning hemma – diskret, snabbt och enkelt</h1>
        <MedicalDisclaimer />
        <div className="prose-guide">
          <p>Att testa sig för könssjukdomar är ett ansvarsfullt och viktigt beslut. Moderna hemtester gör det möjligt att testa sig diskret hemma, utan att besöka en klinik eller en läkare.</p>

          <h2>Vilka STI kan testas hemma?</h2>
          <p>De flesta vanliga könssjukdomar kan testas med ett hemkit:</p>
          <ul>
            <li><strong>Klamydia</strong> – vanligaste STI i Sverige, ofta symtomfri</li>
            <li><strong>Gonorré</strong> – ökande prevalens, antibiotikaresistens ett problem</li>
            <li><strong>Syfilis</strong> – återkommer i Sverige, testad med blodprov</li>
            <li><strong>HIV 1+2</strong> – 4:e generationens test, svar från dag 18 efter exponering</li>
            <li><strong>Herpes simplex typ 1 och 2</strong> – IgG-antikroppstest</li>
            <li><strong>HPV</strong> – högrisktyper kopplade till livmoderhalscancer</li>
            <li><strong>Hepatit B och C</strong> – blodburna virus</li>
            <li><strong>Mykoplasma genitalium</strong> – vanlig orsak till uretrit, ofta förbisedd</li>
          </ul>

          <h2>Hur fungerar ett hemma-STI-test?</h2>
          <p>Processen är enkel och tar 10–15 minuter:</p>
          <ul>
            <li>Beställ ett kit online – levereras i diskret, neutralt paket</li>
            <li>Ta prov hemma – urinprov och/eller svabb (penis, vagina, ändtarm eller svalg)</li>
            <li>Posta med förbetalt svarskuvert</li>
            <li>Svar digitalt via säker portal med engångskod inom 1–3 dagar</li>
          </ul>

          <h2>Hur diskret är hemma-STI-testning?</h2>
          <p>Ledande aktörer som <Link href="/recension/testmottagningen/">Testmottagningen</Link> erbjuder helt anonyma tester utan personnummer. Paketet saknar känslig information på utsidan. Svaren levereras via en säker webportal med engångskod, inte via e-post eller brev.</p>

          <h2>När bör du testa dig?</h2>
          <p>Du bör testa dig för STI om du:</p>
          <ul>
            <li>Haft oskyddat sex med en ny partner</li>
            <li>Fått veta att en sexuell partner testat positivt</li>
            <li>Har symtom som flytningar, sveda, utslag eller sår</li>
            <li>Vill ha ett negativt test innan oskyddat sex med en ny partner</li>
          </ul>
        </div>

        <div className="my-8 bg-teal-50 rounded-xl p-5 flex flex-col sm:flex-row items-center gap-4">
          <div>
            <div className="font-bold text-teal-900">Beställ ett diskret STI-test</div>
            <div className="text-sm text-teal-700">Svar inom 1–3 dagar – anonymt och säkert</div>
          </div>
          <Link href="/sti-tester/" className="shrink-0 bg-teal-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-teal-700 transition-colors">
            Se STI-tester
          </Link>
        </div>

        <FaqAccordion items={faqs} title="Vanliga frågor om STI-testning hemma" />
      </main>
      <Footer />
    </>
  );
}
