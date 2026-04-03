import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FaqAccordion from "@/components/FaqAccordion";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Menopaus blodprov hemma 2026 – Vilka hormontest ska man ta?",
  description: "Vilka blodprov bör du ta vid menopaus? Lär dig om FSH, LH, östradiol och TSH – och hur du enkelt testar hormonnivåerna hemma utan remiss.",
  alternates: { canonical: "https://www.testahemma.se/guider/menopaus-blodprov/" },
  openGraph: {
    title: "Menopaus blodprov hemma 2026 – Vilka hormontest ska man ta?",
    description: "Komplett guide: vilka hormontest vid menopaus, vad FSH och östradiol-värden betyder, och hur du testar hemma utan att boka tid på vårdcentral.",
    url: "https://www.testahemma.se/guider/menopaus-blodprov/",
  },
};

const faqs = [
  {
    question: "Vilket blodprov visar om man är i menopaus?",
    answer: "FSH (follikelstimulerande hormon) är det primära testet. FSH över 25–30 IE/L i kombination med utebliven menstruation i 12+ månader bekräftar menopaus. Östradiol (E2) är också lågt vid menopaus (under 100 pmol/L). LH stiger parallellt med FSH. Viktigt: ta aldrig ett enstaka prov som definitivt svar – hormoner varierar och FSH bör mätas vid minst 2 tillfällen med 6 veckors mellanrum.",
  },
  {
    question: "Vad är normalt FSH-värde vid menopaus?",
    answer: "Normalt FSH vid menopaus är över 25–40 IE/L. Under den fertila perioden ligger FSH på 3–10 IE/L i follikelfasen. Perimenopaus: 10–25 IE/L med oregelbundna cykler. Postmenopaus: konstant FSH över 30–40 IE/L. FSH varierar dock kraftigt i perimenopaus, varför ett enstaka värde kan vara missvisande.",
  },
  {
    question: "Ska jag testa sköldkörteln vid menopausbesvär?",
    answer: "Ja, absolut. Sköldkörtelrubbning (hypo- och hypertyreos) ger symtom som liknar menopaus: trötthet, humörsvängningar, viktsförändringar, hjärtklappning och värmevallningar. TSH bör alltid kontrolleras vid klimakteriebesvär. Upp till 10% av kvinnor over 50 har oupptäckt hypotyreoidism. Om TSH är avvikande bör fT4 och ibland TPO-antikroppar kontrolleras.",
  },
  {
    question: "Vad är skillnaden mellan perimenopaus och menopaus?",
    answer: "Perimenopaus är övergångsfasen (vanligtvis 2–10 år) med oregelbundna cykler, fluktuerande hormoner och klimakteriella symtom. Menopaus definieras som 12 månader utan menstruation. Postmenopaus är perioden därefter. Hormonbehandling (MHT) diskuteras oftast i perimenopaus och tidigt postmenopaus för att lindra symtom.",
  },
  {
    question: "Hur påverkas järn och D-vitamin av menopaus?",
    answer: "Järnstatus förbättras ofta efter menopaus eftersom menstruationsblödningar upphör – ferritin stiger hos många. D-vitamin minskar dock i effektivitet med åren: vitamin D-receptorer minskar och D-vitaminbrist ökar risken för benskörhet (osteoporos) postmenopausalt. Regelbunden D-vitamintest rekommenderas. Ca och D-vitamin är grundpelaren i benskyddet efter menopaus.",
  },
  {
    question: "Kan man testa menopausblodet hemma?",
    answer: "Ja. FSH, LH och östradiol kan mätas via fingerblodprov hemma hos tjänster som Werlabs och Medisera. Du beställer ett hormonstatus-paket, tar provet på dag 2–4 i menscykeln (om du fortfarande har cykler), skickar det och får digitalt svar inom 2–4 dagar. Vi rekommenderar att inkludera TSH, järnstatus och D-vitamin för en komplett bild.",
  },
];

export default function MenopausBlodprovPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Menopaus blodprov hemma – vilka hormontest ska man ta?",
        description: "Komplett guide om blodprov vid menopaus: FSH, LH, östradiol, TSH och hur du testar hemma utan remiss.",
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
            { name: "Menopaus blodprov", href: "/guider/menopaus-blodprov/" },
          ]}
        />
        <div className="text-xs text-gray-400 mb-2">
          Granskad av Anna Lindström, biomedicinsk analytiker &bull; Uppdaterad april 2026
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Menopaus blodprov hemma: vilka hormontest ska du ta?
        </h1>
        <MedicalDisclaimer />

        <div className="prose-guide">
          <p>
            Klimakteriet – perimenopaus och menopaus – är en biologisk process som påverkar hela kroppen. Symtomen varierar enormt: värmevallningar, sömnproblem, humörsvängningar, trötthet, minskad libido och kognitiv dimma. Men samma symtom kan också ha andra orsaker, framför allt sköldkörtelsjukdom och järnbrist.
          </p>
          <p>
            Den enda säkra vägen att skilja på vad som driver dina besvär är ett blodprov. Den här guiden förklarar exakt vilka prover du bör ta, vad värdena betyder – och hur du enkelt gör det hemma via ett <Link href="/hormontester/" className="text-blue-600 hover:underline">hormontest hemma</Link>.
          </p>

          <h2>Dessa blodprov bör tas vid klimakteriebesvär</h2>

          <h3>1. FSH – follikelstimulerande hormon</h3>
          <p>
            FSH är det primära markörhormonet för menopaus. När äggstockarna slutar svara på FSH stiger nivåerna kraftigt. FSH över 25 IE/L med 12 månaders utebliven menstruation bekräftar menopaus.
          </p>
          <p>
            <strong>Tidpunkt:</strong> Ta provet på cykeldag 2–4 om du fortfarande har cykler. I perimenopaus varierar FSH kraftigt – ett enstaka värde räcker inte, ta minst 2 prover med 6 veckors mellanrum.
          </p>

          <h3>2. Östradiol (E2)</h3>
          <p>
            Östradiol är det viktigaste östrogenet under den fertila perioden. Vid menopaus sjunker det till under 100 pmol/L (ofta &lt;50 pmol/L postmenopausalt). Lågt östradiol driver de flesta klimakteriella symtom: värmevallningar, vaginal torrhet, humörsvängningar och benskörhet.
          </p>

          <h3>3. LH – luteiniserande hormon</h3>
          <p>
            LH stiger parallellt med FSH vid menopaus. Mäts ofta i kombination med FSH för att ge en fullständig bild av ovariefunktionen.
          </p>

          <h3>4. TSH – sköldkörtelstimulerade hormon</h3>
          <p>
            Sköldkörtelrubbning är vanligt hos medelålders kvinnor och ger symtom som liknar klimakteriella besvär: trötthet, viktsförändringar, värmekänslighet/köldkänslighet, hjärtklappning och humörsvängningar. Upp till 10% av kvinnor över 50 har oupptäckt hypotyreoidism.
          </p>
          <p>
            TSH ska alltid ingå i ett klimakterieprov. Se vår guide om <Link href="/guider/sköldkörteltest-hemma/" className="text-blue-600 hover:underline">sköldkörteltest hemma</Link> för mer information.
          </p>

          <h3>5. Ferritin och järnstatus</h3>
          <p>
            Järnbrist är extremt vanlig hos menstruerande kvinnor och ger symtom som liknar klimakteriella besvär: trötthet, hjärtklappning, koncentrationssvårigheter. I perimenopaus – med oregelbundna och ibland rikligare blödningar – ökar risken ytterligare. Se vår guide om <Link href="/guider/ferritin-normalt-varde/" className="text-blue-600 hover:underline">ferritin normalt värde</Link>.
          </p>

          <h3>6. Vitamin D</h3>
          <p>
            D-vitaminbrist ökar dramatiskt risken för osteoporos postmenopausalt, eftersom östrogen normalt skyddar skelettet. D-vitamin (25-OH-D) bör ligga på 75–125 nmol/L. Tillskott är nödvändigt för de flesta under vinterhalvåret i Sverige.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 my-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Rekommenderat provpaket vid klimakteriebesvär</h3>
            <ul className="text-gray-700 space-y-2">
              <li>FSH + LH + Östradiol (E2)</li>
              <li>TSH (+ fT4 om TSH är avvikande)</li>
              <li>Ferritin + S-järn + TIBC</li>
              <li>Vitamin D (25-OH-D)</li>
              <li>Hemoglobin (fullständigt blodstatus)</li>
              <li>CRP (inflammationsmarkör – utesluter infektion som orsak)</li>
            </ul>
          </div>

          <h2>Referensvärden vid menopaus</h2>
          <div className="my-6">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-800">Markör</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-800">Fertil kvinna</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-800">Perimenopaus</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-800">Postmenopaus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">FSH (IE/L)</td>
                  <td className="px-4 py-3 text-gray-700">3–10 (dag 2–4)</td>
                  <td className="px-4 py-3 text-gray-700">10–25 (varierar)</td>
                  <td className="px-4 py-3 text-gray-700">&gt;30–40</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-700">Östradiol E2 (pmol/L)</td>
                  <td className="px-4 py-3 text-gray-700">100–400 (cykel)</td>
                  <td className="px-4 py-3 text-gray-700">Varierar kraftigt</td>
                  <td className="px-4 py-3 text-gray-700">&lt;100</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">LH (IE/L)</td>
                  <td className="px-4 py-3 text-gray-700">2–15</td>
                  <td className="px-4 py-3 text-gray-700">Stiger</td>
                  <td className="px-4 py-3 text-gray-700">&gt;15–30</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-700">TSH (mIE/L)</td>
                  <td className="px-4 py-3 text-gray-700">0,4–4,0</td>
                  <td className="px-4 py-3 text-gray-700">0,4–4,0</td>
                  <td className="px-4 py-3 text-gray-700">0,4–4,0</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Hormonbehandling (MHT) – när är det aktuellt?</h2>
          <p>
            Menopaushormonterapi (MHT, tidigare kallat HRT) är den mest effektiva behandlingen för klimakteriella besvär. Moderna kombinationspreparat (östrogen + gestagen) anses säkra för de flesta friska kvinnor under 60 år och inom 10 år från menopaus.
          </p>
          <p>
            Beslut om MHT fattas alltid av läkare baserat på symtom, blodprovssvar och individuell riskbedömning. Blodprovsresultat är ett viktigt underlag – ta med dina värden till konsultationen.
          </p>

          <h2>Testa hormoner hemma – steg för steg</h2>
          <ol>
            <li>Välj ett hemtestföretag som erbjuder hormonpanel (Werlabs eller Medisera)</li>
            <li>Beställ ett hormonstatus-paket som inkluderar FSH, LH, östradiol och TSH</li>
            <li>Ta provet på dag 2–4 i cykeln om du fortfarande har cykler (eller när som helst postmenopausalt)</li>
            <li>Ta provet på morgonen – hormoner varierar under dygnet</li>
            <li>Skicka provet med bifogat svarskuvert</li>
            <li>Digitalt svar inom 2–4 dagar, jämfört med referensvärden</li>
          </ol>
          <p>
            Se vår jämförelse av <Link href="/hormontester/" className="text-blue-600 hover:underline">bästa hormontester hemma</Link> för att välja rätt tjänst och paket.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Vanliga frågor om menopaus och blodprov</h2>
        <FaqAccordion items={faqs} />

        <div className="mt-10 p-5 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Relaterade guider</h3>
          <ul className="space-y-2 text-blue-600">
            <li><Link href="/hormontester/" className="hover:underline">Bästa hormontester hemma 2026</Link></li>
            <li><Link href="/guider/hormoner-och-halsa/" className="hover:underline">Hormoner och hälsa – komplett guide</Link></li>
            <li><Link href="/guider/sköldkörteltest-hemma/" className="hover:underline">Sköldkörteltest hemma</Link></li>
            <li><Link href="/guider/ferritin-normalt-varde/" className="hover:underline">Ferritin normalt värde</Link></li>
            <li><Link href="/guider/d-vitaminbrist-symtom/" className="hover:underline">D-vitaminbrist symtom</Link></li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
