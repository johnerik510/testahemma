import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import FaqAccordion from "@/components/FaqAccordion";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Hormoner och Hälsa – Guide till Hormonella Obalanser | Testahemma.se",
  description: "Förstå hur hormoner påverkar din hälsa. Lär dig om testosteron, östrogen, kortisol och sköldkörtelhormon och hur du testar dem hemma.",
  alternates: { canonical: "https://www.testahemma.se/guider/hormoner-och-halsa/" },
};
const faqs = [
  { question: "Vilka symtom tyder på hormonell obalans?", answer: "Vanliga symtom: kronisk trötthet, viktförändringar utan förklaring, humörsvängningar, nedsatt libido, menstruationsrubbningar, håravfall, sömnproblem, akne hos vuxna och muskelsvaghet. Symtomen är ofta diffusa och kan misstas för stress eller åldrande." },
  { question: "Kan man ha hormonell obalans utan symtom?", answer: "Ja. Mild hormonell obalans kan vara asymtomatisk men ändå påverka välmående subtilt. Testning ger objektiv data snarare än att förlita sig enbart på symtom." },
];
export default function HormonerPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <BreadcrumbNav items={[{ name: "Hem", href: "/" }, { name: "Guider", href: "/guider/" }, { name: "Hormoner och hälsa", href: "/guider/hormoner-och-halsa/" }]} />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Hormoner och hälsa – guide till hormonella obalanser</h1>
        <MedicalDisclaimer />
        <div className="prose-guide">
          <p>Hormoner är kemiska budbärare som reglerar nästan alla kroppens funktioner – ämnesomsättning, humör, sömn, fertilitet och energi. En obalans, även mild, kan påverka hur du mår markant.</p>
          <h2>De viktigaste hormonerna</h2>
          <h3>Testosteron</h3>
          <p>Primärt manligt könshormon men viktigt även för kvinnor. Lågt testosteron hos män ger: trötthet, nedsatt libido, minskat muskelmassa och depression. Normalt totalt testosteron: 8–35 nmol/L (män), 0,3–2,4 nmol/L (kvinnor).</p>
          <h3>Östradiol (östrogen)</h3>
          <p>Primärt kvinnligt könshormon. Reglerar menscykeln, benhälsa och kardiovaskulär hälsa. Obalans kopplas till PMS, klimakterieproblem och osteoporos.</p>
          <h3>TSH (sköldkörtelhormon)</h3>
          <p>TSH reglerar sköldkörteln. Hypothyreos (högt TSH) ger trötthet, viktuppgång och frusenhet. Hypertyreos (lågt TSH) ger viktnedgång, hjärtklappning och ångest. Normalt TSH: 0,4–4,0 mIU/L.</p>
          <h3>Kortisol</h3>
          <p>Stresshormon producerat av binjurarna. Kroniskt högt kortisol (stressrespons) kopplas till sömnproblem, viktuppgång kring magen och nedsatt immunförsvar. Dygnskortisol-test (salivprov x4) ger bäst bild av mönstret.</p>
          <p>Vill du testa dina hormoner? Se vår guide till <Link href="/hormontester/">bästa hormontester hemma</Link>.</p>
        </div>
        <FaqAccordion items={faqs} title="Vanliga frågor om hormoner" />
      </main>
      <Footer />
    </>
  );
}
