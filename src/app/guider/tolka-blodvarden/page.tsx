import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FaqAccordion from "@/components/FaqAccordion";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Tolka dina blodvärden – Vad betyder resultaten? | Testahemma.se",
  description: "Förstå dina blodprovsresultat. Lär dig vad hemoglobin, CRP, ferritin, TSH, kolesterol och blodsocker betyder och vilka nivåer som är normala.",
  alternates: { canonical: "https://www.testahemma.se/guider/tolka-blodvarden/" },
};
const values = [
  { name: "Hemoglobin (Hb)", normal: "Kvinnor: 117–153 g/L | Män: 134–170 g/L", low: "Järnbristanemi, B12-brist, blodförlust", high: "Dehydrering, rökning, polycytemi" },
  { name: "CRP (C-reaktivt protein)", normal: "Under 5 mg/L", low: "Inga symtom", high: "Infektion, inflammation, autoimmun sjukdom" },
  { name: "Ferritin (järndepåer)", normal: "Kvinnor: 13–150 µg/L | Män: 30–400 µg/L", low: "Järnbrist (tidigt stadium, före anemi)", high: "Inflammation, leversjukdom, hemokromatos" },
  { name: "TSH (sköldkörtelhormon)", normal: "0,4–4,0 mIU/L", low: "Överfungerande sköldkörtel (hypertyreos)", high: "Underfungerande sköldkörtel (hypothyreos)" },
  { name: "Kolesterol (LDL)", normal: "Under 3,0 mmol/L", low: "Sällan ett problem", high: "Ökad risk för hjärt-kärlsjukdom" },
  { name: "Glukos (fasteblodsocker)", normal: "3,9–6,0 mmol/L", low: "Hypoglykemi (lågt blodsocker)", high: "Prediabetes (6,1–6,9) eller diabetes (7,0+)" },
];
const faqs = [
  { question: "Vad innebär det om ett värde är 'utanför referensintervallet'?", answer: "Referensintervallet representerar det normala spridningen hos 95 % av friska individer. Att ett värde ligger utanför intervallet betyder inte automatiskt att något är fel – det beror på hur mycket det avviker och vilka symtom du har. Kontakta alltid läkare vid avvikande svar." },
  { question: "Varför skiljer sig referensvärden åt mellan könen?", answer: "Fysiologiska skillnader påverkar många blodvärden. Hemoglobin är lägre hos kvinnor pga menstruation. Testosteron skiljer sig dramatiskt. Ferritin påverkas av menscykeln. Se alltid till att rätt referensintervall används för din ålder och ditt kön." },
];
export default function TolkaBlodvardenPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <BreadcrumbNav items={[{ name: "Hem", href: "/" }, { name: "Guider", href: "/guider/" }, { name: "Tolka blodvärden", href: "/guider/tolka-blodvarden/" }]} />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Tolka dina blodvärden – vad betyder resultaten?</h1>
        <MedicalDisclaimer />
        <div className="prose-guide">
          <p>Att förstå sina blodprovsresultat kan kännas överväldigande. Den här guiden förklarar de vanligaste blodvärdena i ett hemtest på ett lättförståeligt sätt.</p>
          <p>Vill du ta ett hemblodtest? Se vår guide till <Link href="/blodtester/">bästa blodtester hemma</Link>.</p>
          <h2>Vanliga blodvärden och vad de mäter</h2>
        </div>
        <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm my-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600 text-left">
              <tr>
                <th className="px-4 py-3 font-semibold">Värde</th>
                <th className="px-4 py-3 font-semibold">Normalintervall</th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">Lågt kan tyda på</th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">Högt kan tyda på</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {values.map((v, i) => (
                <tr key={v.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="px-4 py-3 font-semibold text-gray-900">{v.name}</td>
                  <td className="px-4 py-3 text-gray-600">{v.normal}</td>
                  <td className="px-4 py-3 text-gray-500 hidden md:table-cell">{v.low}</td>
                  <td className="px-4 py-3 text-gray-500 hidden md:table-cell">{v.high}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <FaqAccordion items={faqs} title="Vanliga frågor om blodvärden" />
      </main>
      <Footer />
    </>
  );
}
