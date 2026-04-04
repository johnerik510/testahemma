import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FaqAccordion from "@/components/FaqAccordion";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Järnbrist test hemma April 2026 – mät ferritin och järnstatus enkelt",
  description: "Guide till järnbrist hemtest: vad ferritin, hemoglobin och transferrinmättnad mäter, referensvärden, symptom på järnbrist och hur du testar järnstatus hemma.",
  alternates: { canonical: "https://www.testahemma.se/guider/jarnbrist-test-hemma/" },
  openGraph: {
    title: "Järnbrist test hemma April 2026 – mät ferritin enkelt",
    description: "Komplett guide till järnbrist hemtest: referensvärden för ferritin, hemoglobin och järnmättnad, och symptom på järnbristanemi.",
    url: "https://www.testahemma.se/guider/jarnbrist-test-hemma/",
  },
};

const faqs = [
  {
    question: "Vad är skillnaden mellan järnbrist och järnbristanemi?",
    answer: "Järnbrist och järnbristanemi är inte samma sak. Järnbrist (lågt ferritin) kan förekomma utan anemi — kroppen drar på järndepåerna innan hemoglobin sjunker. Järnbristanemi uppstår när järnbristen är så uttalad att hemoglobinproduktionen påverkas. Många har symptom redan vid järnbrist utan anemi (trötthet, håravfall, koncentrationssvårigheter). Ferritinmätning är känsligare än hemoglobin för tidig järnbrist.",
  },
  {
    question: "Vad är ett normalt ferritinvärde?",
    answer: "Referensvärden varierar: Kvinnor: 13–150 µg/L (men många experter anser 30–50 µg/L som minimalt funktionellt). Män: 30–400 µg/L. Gravida: bör hållas >30 µg/L. Praktisk regel: ferritin under 30 µg/L ger ofta symptom på järnbrist, trots att laboratorievärdet tekniskt sett är 'normalt' enligt de flesta referensintervall. Ferritin under 12–15 µg/L = uttömda järndepåer.",
  },
  {
    question: "Vilka symptom ger järnbrist?",
    answer: "Trötthet och minskad uthållighet (vanligaste symptomen), håravfall (telogen effluvium — diffust, inte fläckvis), sömnproblem och koncentrationssvårigheter, pervig (restless legs) — kryande känsla i benen på natten, sköra naglar och nagelförändringar (konkava naglar = koilonychi vid svår brist), blekhet (synlig vid conjunctiva/inre ögonlocken), andnöd vid ansträngning, ökad infektionskänslighet. Symptom är ofta subtila och kopplas felaktigt till stress eller utmattning.",
  },
  {
    question: "Kan man testa järnstatus hemma?",
    answer: "Ja — Werlabs, Diagnostikdirekt och Blodtestet.se erbjuder järnstatusmätning via fingerblodsprov. Tillgängliga tester: ferritin ensamt (vanligast), komplett blodstatus (CBC) med hemoglobin, hematokrit och MCV, järnpanel (ferritin + S-Fe + TIBC + transferrinmättnad). Hemtest ger jämförbara resultat med provtagning på vårdcentralen och passar bra för uppföljning av järnbehandling.",
  },
  {
    question: "Vad orsakar järnbrist?",
    answer: "Vanligaste orsaker: Otillräckligt intag (veganer/vegetarianer, restriktiva dieter), förhöjda förluster (kraftiga menstruationer är den vanligaste orsaken hos premenopausala kvinnor — kontrollera alltid gynekologisk orsak), nedsatt absorption (celiaki, atrofisk gastrit, PPIs minskar magsyrautsöndring), ökade behov (graviditet, amning, intensiv träning), kronisk blödning (GI-blödning — uteslut kolorektalcancer hos äldre med ny järnbrist). Behandla alltid grundorsaken, inte bara järnbristen.",
  },
  {
    question: "Hur länge tar det att fylla på järndepåerna?",
    answer: "Med behandling (järntabletter): ferritin börjar normaliseras efter 4–6 veckors behandling, men att helt fylla depåerna tar 3–6 månader. Hemoglobin normaliseras snabbare (2–4 veckor). Continu-dosering (varannan dag) kan ge bättre absorption än daglig dosering vid intolerans. Förstoppning, illamående och mörk avföring är vanliga biverkningar — ta järn till mat om du har problem. Järnbisflycinat tolereras bättre än järnsulfat.",
  },
];

export default function JarnbristTestHemmaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Järnbrist test hemma April 2026 – mät ferritin och järnstatus enkelt",
    description: "Guide till järnbrist hemtest: ferritin, hemoglobin, symptom och behandling.",
    datePublished: "2026-04-03",
    dateModified: "2026-04-03",
    author: { "@type": "Person", name: "Anna Lindström" },
    publisher: { "@type": "Organization", name: "Testahemma.se" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.testahemma.se/" },
      { "@type": "ListItem", position: 2, name: "Guider", item: "https://www.testahemma.se/guider/" },
      { "@type": "ListItem", position: 3, name: "Järnbrist test hemma", item: "https://www.testahemma.se/guider/jarnbrist-test-hemma/" },
    ],
  };

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <BreadcrumbNav items={[
          { name: "Hem", href: "/" },
          { name: "Guider", href: "/guider/" },
          { name: "Järnbrist test hemma", href: "/guider/jarnbrist-test-hemma/" }
        ]} />
        <div className="text-xs text-gray-400 mb-2">Granskad av Anna Lindström, biomedicinsk analytiker &bull; Uppdaterad april 2026</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Järnbrist test hemma – mät ferritin 2026</h1>
        <MedicalDisclaimer />
        <div className="prose-guide">
          <p>Järnbrist är den vanligaste näringsbristsjukdomen globalt — och en av de mest underdiagnostiserade i Sverige. Många lider av järnbrist i månader utan att veta om det, eftersom symptomen (trötthet, håravfall, koncentrationssvårigheter) är ospecifika. Nu kan du mäta ditt ferritin hemma utan att boka läkartid.</p>

          <h2>Varför ferritin — inte bara hemoglobin?</h2>
          <p>Hemoglobin är det vanligaste järnmåttet på vårdcentralen, men det är en sen markör för järnbrist. Kroppen skyddar hemoglobinproduktionen till det sista — ferritin (järndepåerna) töms ut innan hemoglobin sjunker. Det innebär att du kan ha normalt hemoglobin men ändå lida av symptomatisk järnbrist.</p>
          <p><strong>Ferritin</strong> är det mest känsliga måttet för järndepåernas storlek. Det är det bästa testet för tidig järnbrist och järnbristanemi.</p>

          <h2>Järnstatus — alla markörer förklarade</h2>
          <table>
            <thead>
              <tr>
                <th>Markör</th>
                <th>Vad mäts</th>
                <th>Normalt intervall</th>
                <th>Klinisk nytta</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Ferritin (S-Ferritin)</td><td>Järndepåerna</td><td>Kvinna: 13–150 µg/L, Man: 30–400 µg/L</td><td>Bäst för järnbristdiagnos</td></tr>
              <tr><td>Hemoglobin (Hb)</td><td>Syretransporterande protein i RBC</td><td>Kvinna: 117–153 g/L, Man: 134–170 g/L</td><td>Diagnostiserar anemi — sen markör</td></tr>
              <tr><td>MCV (medelcellsvolym)</td><td>Storleken på röda blodkroppar</td><td>82–98 fL</td><td>Låg MCV = mikrocytär anemi (järnbrist)</td></tr>
              <tr><td>S-Fe (serumjärn)</td><td>Cirkulerande järn</td><td>9–30 µmol/L</td><td>Varierar kraftigt — dagsvariationer</td></tr>
              <tr><td>Transferrinmättnad (TSAT)</td><td>Andel järnbindningsplatser belagda</td><td>20–45%</td><td>Under 16% = järnbrist i erytropoesen</td></tr>
            </tbody>
          </table>

          <h2>Referensvärden och tolkning</h2>
          <p>Officiella referensvärden för ferritin är vida — men klinisk erfarenhet och forskning visar att många har symptom vid värden som tekniskt sett är "normala":</p>
          <ul>
            <li><strong>Ferritin under 12–15 µg/L:</strong> Uttömda järndepåer — järnbrist utan tvekan</li>
            <li><strong>Ferritin 15–30 µg/L:</strong> Låga depåer — många har symptom, speciellt vid inflammatorisk sjukdom (ferritin är en akutfasreaktion och kan vara falskt förhöjt)</li>
            <li><strong>Ferritin 30–50 µg/L:</strong> Borderline — kontrollera vid symptom</li>
            <li><strong>Ferritin över 50 µg/L:</strong> Tillräckliga depåer för de flesta</li>
            <li><strong>Ferritin över 200 µg/L (kvinna) / 300 µg/L (man):</strong> Förhöjt — kan indikera inflammation, leversjukdom eller hemokromatos (järnöverbelastning)</li>
          </ul>

          <h2>Riskgrupper — vem bör testa järnstatus?</h2>
          <ul>
            <li><strong>Premenopausala kvinnor:</strong> Kraftiga menstruationer är den vanligaste orsaken till järnbrist i Sverige — regelbunden kontroll rekommenderas</li>
            <li><strong>Gravida och nyblivna mödrar:</strong> Järnbehovet ökar dramatiskt under graviditet</li>
            <li><strong>Veganer och vegetarianer:</strong> Växtbaserat järn (non-hem) absorberas sämre — upp till 50% av veganer har suboptimalt ferritin</li>
            <li><strong>Elitidrottare och uthållighetstränande:</strong> Träning ökar järnbehovet och kan orsaka hemolys</li>
            <li><strong>Äldre med GI-symptom:</strong> Ny järnbrist hos äldre ska alltid utredas för GI-blödning</li>
            <li><strong>Celiakipatienter:</strong> Nedsatt järnabsorption i tunntarmen är vanlig</li>
          </ul>

          <h2>Hur testar du järnstatus hemma?</h2>
          <ol>
            <li><strong>Välj test:</strong> Ferritin (enklast) eller järnpaket (ferritin + hemoglobin + MCV). Tillgängligt hos Werlabs, Diagnostikdirekt och Blodtestet.se.</li>
            <li><strong>Timing:</strong> Järntest kräver inte fasta. Vänta minst 48 timmar efter järnsupplementering för att inte förvränga S-Fe-värdet.</li>
            <li><strong>Ta provet:</strong> Fingerblodsprov med lancett och provtagningskort enligt instruktion.</li>
            <li><strong>Skicka:</strong> Svarskuvert samma dag.</li>
            <li><strong>Svar:</strong> Digitalt inom 2–5 dagar med referensvärden.</li>
          </ol>

          <h2>Behandling av järnbrist</h2>
          <p>Järnbristbehandling kräver alltid att grundorsaken utreds (speciellt hos äldre och män — GI-blödning måste uteslutas).</p>
          <ul>
            <li><strong>Koständringar:</strong> Öka hemjärn (rött kött, lever, musslor). Vitamin C vid järnrika måltider förbättrar absorptionen. Undvik kaffe/te och kalcium vid järnrika måltider.</li>
            <li><strong>Järntillskott:</strong> Järnbisglycinate tolereras bäst (minst mag-tarmbesvär). Järnsulfat är vanligast men ger mer biverkningar. Dos: 80–160 mg elementärt järn/dag. Varannan dag-dosering kan ge bättre absorption.</li>
            <li><strong>Läkarbehandling:</strong> Vid hemoglobin under 100 g/L, snabb blödning eller otillräcklig respons på peroralt järn.</li>
          </ul>
          <p>
            Läs mer om <Link href="/guider/jarnbrist-symtom/" className="text-blue-600 hover:underline">järnbrist-symptom och tolkning av blodvärden</Link>.
          </p>
        </div>

        <FaqAccordion items={faqs} />
      </main>
      <Footer />
    </>
  );
}
