import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Allergitest hemma 2026 – Hur fungerar det och vad mäts?",
  description:
    "Guide om allergitest hemma: vad som kan testas (IgE, mat, pollen, pälsdjur), hur prick-test skiljer sig från blodprov och vilka hemtester som faktiskt fungerar.",
  alternates: { canonical: "https://www.testahemma.se/guider/allergitest-hemma/" },
  openGraph: {
    title: "Allergitest hemma 2026 – Guide till blodtest och IgE-analys",
    description: "Vad kan du faktiskt testa hemma för allergi? Guide till IgE-blodprov, tolkning av svar och när du bör söka läkare.",
    url: "https://www.testahemma.se/guider/allergitest-hemma/",
    siteName: "Testahemma.se",
    locale: "sv_SE",
    type: "article",
  },
};

const faqs = [
  {
    question: "Kan man verkligen testa allergi hemma?",
    answer:
      "Ja — med ett IgE-blodprov som du tar hemma med fingerblod. Hemtestet mäter specifika IgE-antikroppar mot ett panel av allergener (pollen, pälsdjur, dammkvalster, livsmedel). Det ger ett indikativt svar om sensibilisering. Det ersätter inte ett hudpricktest (SPT) eller provokationstest hos allergolog, men är ett bra startpunkt för att identifiera troliga allergener.",
  },
  {
    question: "Vad är skillnaden mellan IgE-blodprov och hudpricktest?",
    answer:
      "Hudpricktest (SPT) utförs av läkare som applicerar allergener på huden och mäter reaktion. Det anses som guldstandard men kräver läkarbesök och att du inte tar antihistamin 5–7 dagar innan. IgE-blodprov mäter antikroppar i blodet och påverkas inte av antihistamin — det kan tas när som helst. Sensitiviteten och specificiteten är likvärdig för de flesta luftburna allergener. För livsmedelsallergi är blodprov något sämre på att förutsäga klinisk reaktion.",
  },
  {
    question: "Vad visar ett IgE-blodprov?",
    answer:
      "IgE-blodprov mäter sensibilisering — att kroppen producerar IgE-antikroppar mot ett specifikt allergen. Det innebär inte nödvändigtvis klinisk allergi. En person kan ha förhöjt IgE mot björkpollen utan att ha symtom. Omvänt kan man ha allergi med lågt IgE-svar. Positiva svar bör alltid tolkas i relation till symtomhistorik.",
  },
  {
    question: "Vilka allergener kan man testa hemma?",
    answer:
      "De vanligaste hemtestpanelerna inkluderar: pollen (björk, gräs, gråbo), pälsdjur (katt, hund, häst), dammkvalster, mögel (Cladosporium, Alternaria), och livsmedel (jordnöt, mjölk, ägg, vete, soja, fisk). Werlabs erbjuder en inhalationsallergenspanel med 20+ allergener. Mer sällsynta allergener kräver remiss till specialistlabb.",
  },
  {
    question: "Hur lång tid tar det att få svar på ett allergitest hemma?",
    answer:
      "Svarstid varierar mellan leverantörerna: Werlabs 2–4 vardagar, Diagnostikdirekt 2–5 vardagar, Verisana 5–10 vardagar. Provet analyseras vid SWEDAC-ackrediterat laboratorium (Werlabs) eller motsvarigt nordiskt lab. Svaret levereras digitalt i app eller webb.",
  },
  {
    question: "När ska jag söka läkare för allergi istället för att testa hemma?",
    answer:
      "Sök läkare om: du har haft anafylaktisk reaktion, du misstänker astma eller allergisk astma, du vill ha immunterapi (allergivaccination) — det kräver bekräftad diagnos från läkare, du vill ha recept på adrenalinpenna (EpiPen). Hemtestet är ett komplement, inte en ersättning för medicinsk utredning vid svåra eller oklara fall.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Allergitest hemma 2026 – Guide till IgE-blodprov och hemtester",
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
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.testahemma.se/" },
        { "@type": "ListItem", position: 2, name: "Guider", item: "https://www.testahemma.se/guider/" },
        { "@type": "ListItem", position: 3, name: "Allergitest hemma", item: "https://www.testahemma.se/guider/allergitest-hemma/" },
      ],
    },
  ],
};

export default function AllergiTestHemmaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-6">
        <BreadcrumbNav
          items={[
            { name: "Hem", href: "/" },
            { name: "Guider", href: "/guider/" },
            { name: "Allergitest hemma", href: "/guider/allergitest-hemma/" },
          ]}
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Allergitest hemma 2026 – Vad kan testas och hur fungerar det?
        </h1>
        <p className="text-sm text-gray-500 mb-4">Senast uppdaterad: april 2026</p>
        <MedicalDisclaimer />

        <p className="text-gray-700 leading-relaxed mb-6 mt-4">
          Allergi drabbar ungefär en tredjedel av den svenska befolkningen. Att veta exakt vad man reagerar mot är
          startpunkten för rätt behandling. Den här guiden förklarar vad ett hemtest kan — och inte kan — mäta,
          och när ett läkarbesök är nödvändigt.
        </p>

        {/* Quick summary box */}
        <div className="bg-teal-50 border border-teal-100 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-teal-900 mb-2">Det viktigaste på ett ögonblick</h2>
          <ul className="text-sm text-teal-800 space-y-1 list-disc pl-4">
            <li>Hemtester mäter IgE-antikroppar i blodet — en stark indikator på sensibilisering</li>
            <li>Täcker vanliga allergener: pollen, pälsdjur, dammkvalster, livsmedel</li>
            <li>Kräver inte läkarrecept och påverkas inte av antihistamin</li>
            <li>Positiva svar innebär sensibilisering — inte nödvändigtvis klinisk allergi</li>
            <li>Ersätter inte allergolog vid svåra fall eller anafylaxihistorik</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Vad kan man testa hemma för allergi?</h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Allergengrupp</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Testbart hemma</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Noggrannhet</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Kommentar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["Pollen (björk, gräs, gråbo)", "Ja", "God", "Bäst lämpad för hemtest"],
                ["Pälsdjur (katt, hund, häst)", "Ja", "God", "Hög IgE-svar vid allergi"],
                ["Dammkvalster", "Ja", "God", "Viktig orsak till helårsallergi"],
                ["Mögel (Cladosporium)", "Ja", "Måttlig", "Kan kräva kompletterande test"],
                ["Livsmedel (jordnöt, mjölk, ägg)", "Ja", "Måttlig", "Klinisk relevans kräver läkarbedömning"],
                ["Insektsgift (bi, geting)", "Nej", "–", "Kräver remiss till allergolog"],
                ["Kontaktallergi (nickel, latex)", "Nej", "–", "Kräver lapptest hos läkare"],
              ].map(([allergen, testable, accuracy, comment], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-medium text-gray-700">{allergen}</td>
                  <td className={`px-4 py-3 ${testable === "Ja" ? "text-green-700 font-medium" : "text-gray-500"}`}>{testable}</td>
                  <td className="px-4 py-3 text-gray-600">{accuracy}</td>
                  <td className="px-4 py-3 text-gray-600 text-xs">{comment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Hur fungerar ett IgE-blodprov?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          IgE (immunglobulin E) är en antikropp som immunsystemet producerar som svar på allergen. Vid allergi
          har kroppen bildat specifika IgE-antikroppar riktade mot ett visst ämne — exempelvis björkpollenproteinet
          Bet v 1 eller kattproteinet Fel d 1.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Hemtestet fungerar så att du tar ett fingerblodsprov, skickar det till laboratoriet och provet
          analyseras med ImmunoCAP-metodik (fluoroenzymimmunoassay). Svaret anges i kUA/L (kilo unit per liter):
        </p>
        <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-6 text-sm">
          <li><strong>Klass 0 (&lt;0,35 kUA/L):</strong> Negativ — ingen sensibilisering</li>
          <li><strong>Klass 1 (0,35–0,69 kUA/L):</strong> Tveksam — möjlig sensibilisering</li>
          <li><strong>Klass 2 (0,70–3,49 kUA/L):</strong> Låg sensibilisering</li>
          <li><strong>Klass 3 (3,50–17,49 kUA/L):</strong> Måttlig sensibilisering</li>
          <li><strong>Klass 4+ (&gt;17,50 kUA/L):</strong> Hög sensibilisering</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-6">
          Klass 2+ med symtom som matchar allergenet indikerar klinisk allergi. Klass 1 utan symtom är ofta kliniskt
          insignifikant. Alltid tolka i relation till symtomhistorik.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Bästa hemtester för allergi</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          De bästa hemtestalternativen för allergiutredning i Sverige:
        </p>
        <div className="space-y-4 mb-8">
          {[
            {
              name: "Werlabs Allergipaket",
              pros: ["SWEDAC-ackrediterat lab", "20+ allergener i en panel", "Gratis läkarkonsultation vid avvikande svar", "App med historik"],
              cons: ["Något dyrare än konkurrenterna"],
              verdict: "Bäst totalt",
              href: "/recension/werlabs/",
              color: "blue",
            },
            {
              name: "Diagnostikdirekt Allergitest",
              pros: ["Lägre prispunkt", "Täcker de vanligaste allergenerna", "Enkel beställningsprocess"],
              cons: ["Smalare panel", "Ingen inbyggd läkarkonsultation"],
              verdict: "Bäst för pris",
              href: "/recension/diagnostikdirekt/",
              color: "teal",
            },
          ].map(({ name, pros, cons, verdict, href, color }) => (
            <div key={name} className={`border border-${color}-100 rounded-xl p-5 bg-${color}-50`}>
              <div className={`text-xs font-bold text-${color}-600 uppercase tracking-wide mb-1`}>{verdict}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{name}</h3>
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div>
                  <p className="text-xs font-semibold text-gray-500 mb-1">Fördelar</p>
                  <ul className="text-sm text-gray-700 space-y-0.5">
                    {pros.map(p => <li key={p} className="flex items-start gap-1"><span className="text-green-600 mt-0.5">+</span>{p}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 mb-1">Nackdelar</p>
                  <ul className="text-sm text-gray-700 space-y-0.5">
                    {cons.map(c => <li key={c} className="flex items-start gap-1"><span className="text-red-500 mt-0.5">–</span>{c}</li>)}
                  </ul>
                </div>
              </div>
              <Link href={href} className={`text-sm text-${color}-700 font-semibold hover:underline`}>
                Se fullständig recension →
              </Link>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Hemtest vs. läkare – när räcker hemtest?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-green-50 border border-green-100 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">Hemtest räcker om:</h3>
            <ul className="text-gray-700 space-y-1 text-sm list-disc pl-4">
              <li>Du har milda till måttliga säsongssymtom (rinnande näsa, ögonirritation)</li>
              <li>Du vill bekräfta misstänkt pälsdjurs- eller pollenallergi</li>
              <li>Du vill veta om ditt barn verkar reagera på katt</li>
              <li>Du vill ha ett underlag inför läkarbesök</li>
            </ul>
          </div>
          <div className="bg-orange-50 border border-orange-100 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">Sök läkare om:</h3>
            <ul className="text-gray-700 space-y-1 text-sm list-disc pl-4">
              <li>Du har haft anafylaktisk reaktion</li>
              <li>Du misstänker astma</li>
              <li>Du vill ha allergivaccination (immunterapi)</li>
              <li>Barnet reagerar med svullnad, andningssvårigheter</li>
              <li>Du vill ha adrenalinpenna utskriven</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
          <h3 className="font-bold text-gray-900 mb-2">Relaterade guider</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/basta-hemtest/" className="text-blue-700 hover:underline">Bästa hemtester 2026 – komplett jämförelse</Link></li>
            <li><Link href="/guider/ferritin-normalt-varde/" className="text-blue-700 hover:underline">Ferritin normalvärde – tolkning av blodprov</Link></li>
            <li><Link href="/guider/tolka-blodvarden/" className="text-blue-700 hover:underline">Tolka blodvärden hemma – guide</Link></li>
            <li><Link href="/diagnostikdirekt-vs-werlabs/" className="text-blue-700 hover:underline">Diagnostikdirekt vs Werlabs – jämförelse</Link></li>
          </ul>
        </div>

        <FaqAccordion items={faqs} />
      </main>
      <Footer />
    </>
  );
}
