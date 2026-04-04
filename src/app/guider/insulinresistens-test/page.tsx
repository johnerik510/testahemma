import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FaqAccordion from "@/components/FaqAccordion";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insulinresistens test hemma April 2026 – Symtom och vilka blodprov du ska ta",
  description: "Lär dig känna igen insulinresistens. Vilka blodprov bekräftar diagnosen? Se referensvärden för HbA1c, fasteglukos och HOMA-IR – och hur du testar hemma.",
  alternates: { canonical: "https://www.testahemma.se/guider/insulinresistens-test/" },
  openGraph: {
    title: "Insulinresistens test hemma April 2026 – Symtom och blodprov",
    description: "Komplett guide om insulinresistens: symtom, riskgrupper, vilka blodprov du behöver och hur du testar glukos och HbA1c hemma utan remiss.",
    url: "https://www.testahemma.se/guider/insulinresistens-test/",
  },
};

const faqs = [
  {
    question: "Vilka blodprov visar insulinresistens?",
    answer: "Det finns inget enskilt standardblodprov för insulinresistens i klinisk rutin. De bästa markörerna är: fasteglukos (normalt under 6,0 mmol/L), HbA1c (normalt under 48 mmol/mol / 6,5%), fasteinsulin (helst under 50–70 pmol/L på fastande mage), HOMA-IR (beräknas från fasteinsulin och fasteglukos – under 2,0 anses normalt), och triglycerider (höga triglycerider i kombination med lågt HDL är ett starkt insulinresistenstecken).",
  },
  {
    question: "Vad är HOMA-IR och hur beräknas det?",
    answer: "HOMA-IR (Homeostatic Model Assessment for Insulin Resistance) är ett beräknat mått: HOMA-IR = (fasteinsulin i µIE/mL × fasteglukos i mmol/L) ÷ 22,5. Under 1,0 = utmärkt insulinkänslighet. 1,0–2,0 = normalt. 2,0–3,0 = mild insulinresistens. Över 3,0 = tydlig insulinresistens. Över 5,0 = allvarlig insulinresistens. Beräkningen kräver att du mäter fasteinsulin, vilket inte alltid ingår i standardblodprov.",
  },
  {
    question: "Vad är typiska symtom på insulinresistens?",
    answer: "Vanligaste symtomen: bukfetma (midjeomfång över 94 cm för män, 80 cm för kvinnor), trötthet och energidippar efter kolhydratrika måltider, sockersuget och konstant hunger, svårt att gå ner i vikt trots diet, mörk hud i veckor/axlar/nacke (acanthosis nigricans), lågt HDL och höga triglycerider, högt blodtryck. Många har insulinresistens i 5–10 år utan att veta om det.",
  },
  {
    question: "Är insulinresistens och prediabetes samma sak?",
    answer: "Insulinresistens är mekanismen; prediabetes är när glukosvärdena börjar stiga som resultat. Prediabetes definieras som fasteglukos 6,1–6,9 mmol/L eller HbA1c 42–47 mmol/mol. Du kan ha insulinresistens med normalt glukos – kroppen kompenserar med mer insulin. Prediabetes är det stadium då kompensationen sviktar. Runt 30% av svenska vuxna beräknas ha prediabetes eller insulinresistens.",
  },
  {
    question: "Kan man vända insulinresistens?",
    answer: "Ja, insulinresistens är reversibel i de tidiga stadierna. De mest effektiva åtgärderna är: viktnedgång (5–10% viktnedgång förbättrar insulinkänsligheten signifikant), styrketräning (ökar musklernas glukosupptag utan insulin), lågkolhydratkost (LCHF/keto minskar insulinbelastningen), intermittent fasta (sänker insulinnivåerna under fastefönstret), sömn och stresshantering (kortisol driver insulinresistens), omega-3 (förbättrar insulinkänslighet i cellmembranen).",
  },
  {
    question: "Kan man testa insulinresistens hemma?",
    answer: "Du kan mäta fasteglukos och HbA1c hemma via hemblodtester (Werlabs, Medisera). Fasteinsulin kan beställas via vissa hemtesttjänster. Med fasteglukos och fasteinsulin kan du sedan beräkna HOMA-IR. Det är den bästa hemtestbara approximationen av insulinresistens. Se vår jämförelse av bästa hemblodtester för att beställa rätt paket.",
  },
];

export default function InsulinresistensTestPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Insulinresistens test hemma – symtom och vilka blodprov du ska ta",
        description: "Lär dig känna igen insulinresistens och vilka blodprov som bekräftar det – med referensvärden och guide till hemtestning.",
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <BreadcrumbNav
          items={[
            { name: "Hem", href: "/" },
            { name: "Guider", href: "/guider/" },
            { name: "Insulinresistens test", href: "/guider/insulinresistens-test/" },
          ]}
        />
        <div className="text-xs text-gray-400 mb-2">
          Granskad av Anna Lindström, biomedicinsk analytiker &bull; Uppdaterad april 2026
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Insulinresistens test: symtom och vilka blodprov du ska ta
        </h1>
        <MedicalDisclaimer />

        <div className="prose-guide">
          <p>
            Insulinresistens är ett av de vanligaste och mest underdiagnostiserade hälsoproblemen i Sverige. Uppskattningsvis 25–30% av vuxna har grader av insulinresistens – ofta utan att veta om det. Tillståndet föregår typ 2-diabetes i 10–15 år och driver en rad andra hälsoproblem: PCOS, fettlever, hjärt-kärlsjukdom och kronisk låggradig inflammation.
          </p>
          <p>
            Den goda nyheten: insulinresistens kan identifieras tidigt med blodprov och vändas med livsstilsförändringar. Den här guiden förklarar vad du ska testa, hur du tolkar värdena – och hur du kan göra det via ett <Link href="/blodtester/" className="text-blue-600 hover:underline">blodtest hemma</Link>.
          </p>

          <h2>Vad är insulinresistens?</h2>
          <p>
            Insulin är hormonet som signalerar celler (främst muskler, lever och fettväv) att ta upp glukos från blodet. Vid insulinresistens svarar cellerna sämre på signalen – bukspottkörteln måste producera allt mer insulin för att hålla blodsockret normalt.
          </p>
          <p>
            I det tidiga stadiet klarar bukspottkörteln av kompensationen: blodsockret är normalt men insulinnivåerna är höga. Symtomen är diffusa. Utan förändring slutar kompensationen efter år till decennier – blodsockret börjar stiga och prediabetes/typ 2-diabetes uppstår.
          </p>

          <h2>Riskgrupper för insulinresistens</h2>
          <ul>
            <li>Bukfetma (midjeomfång &gt;94 cm man, &gt;80 cm kvinna)</li>
            <li>Stillasittande livsstil</li>
            <li>Kost rik på ultraprocessad mat och snabba kolhydrater</li>
            <li>Sömnbrist (under 7 timmar per natt höjer insulinresistens på kort tid)</li>
            <li>Kronisk stress (kortisol driver insulinresistens)</li>
            <li>Ärftlighet för typ 2-diabetes</li>
            <li>PCOS (polycystiskt ovariesyndrom – 70–80% har insulinresistens)</li>
            <li>Graviditetsdiabetes i historiken</li>
            <li>Ålder över 45 (insulinkänsligheten minskar med åldern)</li>
          </ul>

          <h2>Symtom på insulinresistens</h2>
          <p>
            Insulinresistens är ofta asymtomatisk i tidiga stadier. När symtom uppstår kan de vara:
          </p>
          <ul>
            <li><strong>Energidipp och trötthet efter måltider</strong> – speciellt efter kolhydratrika måltider</li>
            <li><strong>Konstant hunger och sockersuget</strong> – trots att du just ätit</li>
            <li><strong>Svårighet att gå ner i vikt</strong> – speciellt kring magen</li>
            <li><strong>Hjärndimma och koncentrationssvårigheter</strong> – blodsockersvängningar påverkar hjärnan</li>
            <li><strong>Acanthosis nigricans</strong> – mörk, sammetsluden hud i hudveck (axel, nacke, ljumskar)</li>
            <li><strong>Högt blodtryck</strong> – insulin påverkar natriummekanism i njurarna</li>
            <li><strong>Oregelbunden menstruation (PCOS)</strong> – koppling via LH/insulinaxeln</li>
            <li><strong>Frekvent urinering</strong> – vid glukos som "spills" ut i urinen (sent stadium)</li>
          </ul>

          <h2>Vilka blodprov bekräftar insulinresistens?</h2>

          <div className="my-6">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-800">Blodprov</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-800">Normalt</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-800">Varningsnivå</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-800">Hemtestbart</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">Fasteglukos</td>
                  <td className="px-4 py-3 text-gray-700">&lt;6,0 mmol/L</td>
                  <td className="px-4 py-3 text-gray-700">6,1–6,9 (prediabetes)</td>
                  <td className="px-4 py-3 text-green-600 font-medium">Ja</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-700">HbA1c</td>
                  <td className="px-4 py-3 text-gray-700">&lt;42 mmol/mol</td>
                  <td className="px-4 py-3 text-gray-700">42–47 (prediabetes)</td>
                  <td className="px-4 py-3 text-green-600 font-medium">Ja</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">Fasteinsulin</td>
                  <td className="px-4 py-3 text-gray-700">&lt;50–70 pmol/L</td>
                  <td className="px-4 py-3 text-gray-700">&gt;100 pmol/L</td>
                  <td className="px-4 py-3 text-yellow-600 font-medium">Vissa tjänster</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-700">HOMA-IR</td>
                  <td className="px-4 py-3 text-gray-700">&lt;2,0</td>
                  <td className="px-4 py-3 text-gray-700">&gt;3,0</td>
                  <td className="px-4 py-3 text-yellow-600 font-medium">Beräknat (kräver insulin)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">Triglycerider</td>
                  <td className="px-4 py-3 text-gray-700">&lt;1,7 mmol/L</td>
                  <td className="px-4 py-3 text-gray-700">&gt;2,0 mmol/L</td>
                  <td className="px-4 py-3 text-green-600 font-medium">Ja (i kolesterol-panel)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-700">HDL-kolesterol</td>
                  <td className="px-4 py-3 text-gray-700">&gt;1,0 (man), &gt;1,3 (kvinna)</td>
                  <td className="px-4 py-3 text-gray-700">&lt;1,0 mmol/L</td>
                  <td className="px-4 py-3 text-green-600 font-medium">Ja</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Triglycerid/HDL-kvoten</strong> är ett lättillgängligt surrogatmått: kvot under 1,5 är bra, 1,5–3,0 är borderline, och över 3,0 är ett starkt tecken på insulinresistens.
          </p>

          <h2>Hur testar du insulinresistens hemma?</h2>
          <p>
            Det enklaste hemtestet är ett <Link href="/kolesteroltester/" className="text-blue-600 hover:underline">kolesterol- och metabolisk panel</Link> som inkluderar:
          </p>
          <ul>
            <li>Fasteglukos + HbA1c</li>
            <li>Fullständig lipidpanel (kolesterol, LDL, HDL, triglycerider)</li>
            <li>Insulin (om möjligt)</li>
          </ul>
          <p>
            <strong>Viktigt:</strong> Ta provet efter minst 8–10 timmars fasta för att fasteglukos och fasteinsulin ska vara tillförlitliga. Drick enbart vatten under fastan.
          </p>
          <p>
            Se vår jämförelse av <Link href="/basta-hemtest/" className="text-blue-600 hover:underline">bästa hemblodtester</Link> för att välja rätt paket.
          </p>

          <h2>Vad kan du göra åt insulinresistens?</h2>
          <p>
            Insulinresistens är reversibel med livsstilsförändringar. Evidensbaserade åtgärder:
          </p>
          <ul>
            <li><strong>Viktnedgång:</strong> 5–10% viktnedgång förbättrar insulinkänsligheten markant.</li>
            <li><strong>Styrketräning:</strong> Muskler tar upp glukos utan insulin och är den enskilt effektivaste insulinkänslighetsförbättraren.</li>
            <li><strong>Lågkolhydratkost:</strong> Minskar insulinstimulansen direkt. LCHF och keto har starkt stöd för glukosregleringsförbättring.</li>
            <li><strong>Intermittent fasta:</strong> Låter insulinnivåerna sjunka under fastefönstret.</li>
            <li><strong>Sömn:</strong> En vecka med 4–5 timmars sömn försämrar insulinkänsligheten lika mycket som 10 kg viktuppgång.</li>
            <li><strong>Stresshantering:</strong> Kortisol driver levern att producera mer glukos och hämmar insulinsignalering.</li>
          </ul>
          <p>
            Läkemedel (metformin) används vid prediabetes och typ 2-diabetes. Vid insulinresistens utan glukosavvikelse är livsstilsintervention förstahandsval.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Vanliga frågor om insulinresistens</h2>
        <FaqAccordion items={faqs} />

        <div className="mt-10 p-5 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Relaterade guider</h3>
          <ul className="space-y-2 text-blue-600">
            <li><Link href="/kolesteroltester/" className="hover:underline">Kolesteroltest hemma 2026</Link></li>
            <li><Link href="/guider/tolka-blodvarden/" className="hover:underline">Tolka dina blodvärden</Link></li>
            <li><Link href="/blodtester/" className="hover:underline">Bästa hemblodtester 2026</Link></li>
            <li><Link href="/guider/hormoner-och-halsa/" className="hover:underline">Hormoner och hälsa</Link></li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
