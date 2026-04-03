import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FaqAccordion from "@/components/FaqAccordion";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HbA1c test hemma 2026 – mät långtidsblodsocker enkelt",
  description: "Hur testar du HbA1c hemma? Guide till vad HbA1c mäter, vad referensvärden innebär, hur du förbereder dig och varför det är viktigare än ett vanligt blodsockertest.",
  alternates: { canonical: "https://www.testahemma.se/guider/hba1c-test-hemma/" },
  openGraph: {
    title: "HbA1c test hemma 2026 – mät långtidsblodsocker",
    description: "Komplett guide till HbA1c: vad det mäter, referensvärden, prediabetes, och hur du testar hemma med ett fingerblodsprov.",
    url: "https://www.testahemma.se/guider/hba1c-test-hemma/",
  },
};

const faqs = [
  {
    question: "Vad är ett normalt HbA1c-värde?",
    answer: "Normalt HbA1c: under 42 mmol/mol (6,0%). Prediabetes: 42–47 mmol/mol (6,0–6,4%). Diabetes: 48 mmol/mol (6,5%) eller högre vid upprepad mätning. Välkontrollerad diabetes: under 52–53 mmol/mol (<7%) är ett vanligt behandlingsmål, men det individualiseras av läkare. Läs alltid referensintervallet från det laboratorium som analyserade ditt prov.",
  },
  {
    question: "Hur ofta ska man testa HbA1c?",
    answer: "Friska utan riskfaktorer: screening vart 3–5 år från 40 år rekommenderas av Socialstyrelsen. Prediabetes: var 6–12:e månad för att följa utvecklingen. Typ 2-diabetes med kostbehandling: 2 gånger per år. Typ 2-diabetes med läkemedel: 2–4 gånger per år. Typ 1-diabetes: 3–4 gånger per år. Hemtest gör det enkelt att testa oftare utan att boka läkartid.",
  },
  {
    question: "Kan man testa HbA1c hemma?",
    answer: "Ja — HbA1c-hemtest finns hos Werlabs, Diagnostikdirekt och Blodtestet.se. Du tar ett fingerblodsprov med en sticklancett, applicerar på provkort och skickar till ackrediterat labb. Svar digitalt inom 2–5 dagar. Hemtest är ackrediterade och ger jämförbara resultat med provtagning på vårdcentralen.",
  },
  {
    question: "Är HbA1c bättre än fasteblodsockret?",
    answer: "HbA1c och fasteblodsockret (P-glukos) mäter olika saker. HbA1c reflekterar genomsnittlig blodsockerkontroll under 2–3 månader — det påverkas inte av vad du åt dagen innan. Fasteblodsockret ger en ögonblicksbild. HbA1c är bättre för att diagnostisera och följa upp typ 2-diabetes och prediabetes. Fasteblodsockret är användbart för att se akuta förändringar och för daglig monitorering vid känd diabetes.",
  },
  {
    question: "Kan HbA1c ge falskt normala eller falskt höga värden?",
    answer: "Ja. Falskt lågt (HbA1c underskattar blodsockret): järnbrist-anemi, hemolys, blödning, nyligen blodtransfusion, graviditet. Falskt högt (HbA1c överskattar): järnbristanemi (ibland), njursvikt, hemoglobinopatier. Om du har något av dessa tillstånd bör tolkningen göras av läkare som tar hänsyn till kontexten.",
  },
  {
    question: "Vad ska man göra om HbA1c visar prediabetes?",
    answer: "Prediabetes (42–47 mmol/mol) är reversibelt med livsstilsförändringar. Forskning (Diabetes Prevention Program, DPP) visar att 5–7% viktminskning + 150 minuters måttlig träning per vecka minskar risken att utveckla typ 2-diabetes med 58%. Praktiska åtgärder: minska intaget av raffinerade kolhydrater och socker, öka rörelseaktivitet, förbättra sömnkvalitet (sömnbrist ökar insulinresistens), sluta röka. Kontakta din läkare för uppföljningsplan.",
  },
];

export default function HbA1cTestHemmaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "HbA1c test hemma 2026 – mät långtidsblodsocker enkelt",
    description: "Guide till HbA1c: vad det mäter, referensvärden, prediabetes och diabetes, och hur du testar hemma.",
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
      { "@type": "ListItem", position: 3, name: "HbA1c test hemma", item: "https://www.testahemma.se/guider/hba1c-test-hemma/" },
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
          { name: "HbA1c test hemma", href: "/guider/hba1c-test-hemma/" }
        ]} />
        <div className="text-xs text-gray-400 mb-2">Granskad av Anna Lindström, biomedicinsk analytiker &bull; Uppdaterad april 2026</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">HbA1c test hemma – mät långtidsblodsocker 2026</h1>
        <MedicalDisclaimer />
        <div className="prose-guide">
          <p>HbA1c — glykerat hemoglobin — är det viktigaste provet för att diagnostisera och följa upp diabetes och prediabetes. Till skillnad från ett vanligt blodsockertest ger HbA1c en bild av ditt genomsnittliga blodsocker under de senaste 2–3 månaderna. Och nu kan du ta testet hemma, utan att boka tid hos läkare.</p>

          <h2>Vad är HbA1c och vad mäter det?</h2>
          <p>Hemoglobin är proteinet i röda blodkroppar som transporterar syre. Glukos (blodsocker) binder spontant till hemoglobin i en process som kallas glykering — ju högre blodsockernivå, desto mer glykerat hemoglobin bildas. HbA1c mäter andelen glykerat hemoglobin i blodet.</p>
          <p>Eftersom röda blodkroppar lever ca 90–120 dagar, reflekterar HbA1c genomsnittligt blodsocker under dessa månader. Det gör det till ett av de mest stabila och informativa blodsockermarkörerna.</p>

          <h2>HbA1c referensvärden — vad är normalt?</h2>
          <table>
            <thead>
              <tr>
                <th>HbA1c (mmol/mol)</th>
                <th>HbA1c (%)</th>
                <th>Tolkning</th>
                <th>Åtgärd</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Under 42</td><td>Under 6,0%</td><td>Normalt</td><td>Förebyggande livsstil</td></tr>
              <tr><td>42–47</td><td>6,0–6,4%</td><td>Prediabetes (IFG/IGT)</td><td>Livsstilsförändringar, täta kontroller</td></tr>
              <tr><td>48 eller högre</td><td>6,5% eller högre</td><td>Diabetes (vid upprepad mätning)</td><td>Kontakta läkare för utredning</td></tr>
            </tbody>
          </table>
          <p>Notera: ett enstaka HbA1c-värde på 48+ bekräftar inte diagnosen ensamt — Socialstyrelsen kräver bekräftande mätning vid ett annat tillfälle, eller kompletterande test (fasteblodsockret, oralt glukostoleranstest).</p>

          <h2>Varför är HbA1c bättre än fasteblodsockret för screening?</h2>
          <ul>
            <li><strong>Kräver ingen fasta:</strong> HbA1c kan tas när som helst — du behöver inte fasta 8–10 timmar innan. Det gör hemtest praktiskt.</li>
            <li><strong>Stabilt över tid:</strong> Inte påverkat av daglig variation, stress, koffein eller senaste måltid.</li>
            <li><strong>Lång reflektionsperiod:</strong> Ger en 90-dagars bild — en enstaka hög dag höjer inte HbA1c märkbart.</li>
            <li><strong>Standardiserat:</strong> Analyseras på samma sätt i alla ackrediterade laboratorier — jämförbara resultat oavsett var du testar.</li>
          </ul>

          <h2>Vem bör testa HbA1c?</h2>
          <p>Socialstyrelsen rekommenderar screening för typ 2-diabetes hos:</p>
          <ul>
            <li>Vuxna 40 år och äldre utan känd riskfaktor — vart 3–5 år</li>
            <li>Överviktiga (BMI &gt;25) från 18 år</li>
            <li>Förstgradssläkting med diabetes</li>
            <li>Tidigare graviditetsdiabetes</li>
            <li>Högt blodtryck, höga blodfetter, hjärt-kärlsjukdom</li>
            <li>Polycystiskt ovariesyndrom (PCOS)</li>
            <li>Stillasittande livsstil med ohälsosam kost</li>
          </ul>
          <p>Om du har prediabetes bör du testa var 6–12:e månad för att följa förloppet.</p>

          <h2>Hur testar du HbA1c hemma?</h2>
          <p>HbA1c-hemtest är enkla att använda och ger kliniskt reliabla resultat:</p>
          <ol>
            <li><strong>Beställ ett ackrediterat hemtest</strong> via Werlabs, Diagnostikdirekt eller Blodtestet.se. Paketet innehåller sticklancett, provtagningskort och svarskuvert.</li>
            <li><strong>Ta provet:</strong> Stick på fingertoppens sida (inte toppen — mer känsligt). Klam ut bloddropparna och applicera på provkortet enligt instruktionen.</li>
            <li><strong>Skicka:</strong> Paketet med svarskuvert skickas samma dag eller nästa dag för att säkra proven.</li>
            <li><strong>Svar:</strong> Digitalt resultat inom 2–5 dagar via app eller e-post.</li>
          </ol>
          <p>Du behöver inte fasta innan HbA1c-provtagning — det är en av fördelarna jämfört med fasteblodsockerprov.</p>

          <h2>Prediabetes — vad ska du göra nu?</h2>
          <p>Prediabetes (HbA1c 42–47) är ett kritiskt tillfälle. Studier visar tydligt att livsstilsintervention är effektiv:</p>
          <ul>
            <li><strong>Viktnedgång 5–7%:</strong> Minskar diabetesrisken med 58% i randomiserade studier (Diabetes Prevention Program)</li>
            <li><strong>Fysisk aktivitet:</strong> 150 minuter/vecka med måttlig intensitet (rask promenad) förbättrar insulinkänsligheten</li>
            <li><strong>Kostförändringar:</strong> Minska raffinerade kolhydrater, vitt bröd, socker och söta drycker</li>
            <li><strong>Sömnoptimering:</strong> Kronisk sömnbrist (under 6 timmar) ökar insulinresistensen — prioritera sömn</li>
          </ul>
          <p>
            Kontakta din vårdcentral för uppföljningsplan vid prediabetes. Läs även om <Link href="/guider/insulinresistens-test/" className="text-blue-600 hover:underline">insulinresistens och vad det innebär</Link>.
          </p>

          <h2>HbA1c vid känd diabetes — behandlingsmål</h2>
          <p>Vid diabetes sätts individuella HbA1c-mål av läkare. Vanliga riktlinjer:</p>
          <ul>
            <li><strong>Typ 2-diabetes (yngre, utan komplikationer):</strong> Under 52 mmol/mol (6,9%)</li>
            <li><strong>Typ 2-diabetes (äldre, med komplikationer):</strong> Under 58–70 mmol/mol — individualiserat</li>
            <li><strong>Typ 1-diabetes:</strong> Under 52–58 mmol/mol (7,0–7,4%)</li>
            <li><strong>Graviditet med diabetes:</strong> Under 48 mmol/mol (6,5%) — strikt kontroll viktigt</li>
          </ul>
          <p>Hemtest möjliggör tätare monitorering utan att boka tid — men ersätter inte regelbunden kontakt med diabetesteamet.</p>
        </div>

        <FaqAccordion items={faqs} />
      </main>
      <Footer />
    </>
  );
}
