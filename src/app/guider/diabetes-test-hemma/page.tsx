import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FaqAccordion from "@/components/FaqAccordion";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diabetestest hemma April 2026 – testa blodsockret utan att boka tid",
  description: "Hur testar du diabetes hemma? Guide till HbA1c, fasteblodsockret och insulinresistens – vad proven mäter, referensvärden och när du ska kontakta läkare.",
  alternates: { canonical: "https://www.testahemma.se/guider/diabetes-test-hemma/" },
  openGraph: {
    title: "Diabetestest hemma April 2026 – testa blodsockret utan att boka tid",
    description: "Komplett guide till diabetestest hemma: HbA1c, fasteblodsockret, prediabetes och vad dina värden betyder. Utan läkartid.",
    url: "https://www.testahemma.se/guider/diabetes-test-hemma/",
  },
};

const faqs = [
  {
    question: "Kan man verkligen testa diabetes hemma?",
    answer: "Ja — HbA1c-hemtest (det viktigaste diabetestestet) finns hos Werlabs, Diagnostikdirekt och Blodtestet.se. Du tar ett fingerblodsprov med sticklancett, skickar in provkortet och får digitalt svar inom 2–5 dagar. Hemtest för HbA1c är kliniskt ackrediterade och ger jämförbara resultat med provtagning på vårdcentral. Självtestern i apotek (direktresultat) mäter blodsockret vid ett enda tillfälle — de är inte tillräckliga för diabetesdiagnostik.",
  },
  {
    question: "Vad är skillnaden på HbA1c och blodsockret?",
    answer: "Blodsockertest (P-glukos) mäter blodsockerhalten vid ett specifikt tillfälle — det varierar med vad du åt, stress och dygnsrytm. HbA1c mäter andelen glykerat hemoglobin och reflekterar genomsnittlig blodsockerkontroll under 2–3 månader. HbA1c är bättre för att diagnostisera och följa diabetes — det är mer stabilt och kräver ingen fasta. Blodsockermätaren i daglig drift används av dem med känd diabetes för att se akuta variationer.",
  },
  {
    question: "Vad är ett normalt HbA1c-värde?",
    answer: "Normalt: under 42 mmol/mol (6,0%). Prediabetes: 42–47 mmol/mol (6,0–6,4%). Diabetes: 48 mmol/mol (6,5%) eller högre, bekräftat vid upprepad mätning. Välkontrollerad diabetes: under 52–53 mmol/mol (<7%) är ett vanligt behandlingsmål. Kontrollera alltid referensintervallet från det laboratorium som analyserade ditt prov.",
  },
  {
    question: "Kan man testa diabetes utan fasta?",
    answer: "Ja — HbA1c kräver ingen fasta och kan tas när som helst. Det är en av huvudfördelarna med HbA1c som screening-test. Fasteblodsockret (P-glukos) kräver 8–10 timmars fasta och används som komplement, inte primärtest för screening. Om du beställer ett HbA1c-hemtest kan du ta provet direkt, utan förberedelser.",
  },
  {
    question: "Vad ska jag göra om testet visar prediabetes?",
    answer: "Prediabetes är reversibelt. Forskning (Diabetes Prevention Program) visar att 5–7% viktminskning + 150 minuters måttlig träning per vecka minskar risken att utveckla typ 2-diabetes med 58%. Kontakta din vårdcentral för uppföljningsplan. Boka test igen om 6–12 månader för att följa förloppet. Prediabetes är ett varningssignal — inte en diagnos.",
  },
  {
    question: "Vilka symptom kan tyda på diabetes?",
    answer: "Vanliga symptom på typ 2-diabetes (kan vara subtila): ökad törst och urinering, trötthet och energibrist, suddig syn, långsam sårläkning, frekventa infektioner, stickningar i händer/fötter. Typ 2-diabetes har ofta inga symptom alls i tidiga stadier — det är varför screening är viktigt. Om du misstänker diabetes: testa HbA1c och kontakta läkare. Vänta inte på symptom.",
  },
];

export default function DiabetesTestHemmaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Diabetestest hemma April 2026 – testa blodsockret utan att boka tid",
    description: "Guide till diabetestest hemma: HbA1c, fasteblodsockret, prediabetes-screening och referensvärden.",
    datePublished: "2026-04-04",
    dateModified: "2026-04-04",
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
      { "@type": "ListItem", position: 3, name: "Diabetestest hemma", item: "https://www.testahemma.se/guider/diabetes-test-hemma/" },
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
          { name: "Diabetestest hemma", href: "/guider/diabetes-test-hemma/" }
        ]} />
        <div className="text-xs text-gray-400 mb-2">Granskad av Anna Lindström, biomedicinsk analytiker &bull; Uppdaterad april 2026</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Diabetestest hemma – testa blodsockret utan att boka tid 2026</h1>
        <MedicalDisclaimer />
        <div className="prose-guide">
          <p>Diabetes typ 2 är en av de vanligaste kroniska sjukdomarna i Sverige — och upp till 200 000 personer beräknas ha sjukdomen utan att veta om det. Med moderna hemtest kan du nu testa om du har prediabetes eller diabetes med ett enkelt fingerblodsprov, utan att boka tid på vårdcentralen.</p>

          <h2>Vilket diabetestest ska du använda hemma?</h2>
          <p>Det finns tre huvudtyper av tester som kan hjälpa dig identifiera blodsockerproblem:</p>

          <table>
            <thead>
              <tr>
                <th>Test</th>
                <th>Mäter</th>
                <th>Kräver fasta?</th>
                <th>Lämpad för</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>HbA1c</strong></td>
                <td>Genomsnittligt blodsocker 2–3 månader</td>
                <td>Nej</td>
                <td>Screening, uppföljning</td>
              </tr>
              <tr>
                <td><strong>Fasteblodsockret (P-glukos)</strong></td>
                <td>Blodsocker vid provtagningstillfället</td>
                <td>Ja (8–10 h)</td>
                <td>Komplement till HbA1c</td>
              </tr>
              <tr>
                <td><strong>Insulinresistens (HOMA-IR)</strong></td>
                <td>Kroppens insulinsvar</td>
                <td>Ja</td>
                <td>Tidig detektion</td>
              </tr>
            </tbody>
          </table>

          <p>För hemtestning rekommenderar vi HbA1c som primärtest — det kräver ingen fasta, är stabilt och ger en 90-dagars bild av ditt blodsocker. Apotekens blodsockermätare ger bara ett ögonblicksvärde och räcker inte för diabetesdiagnostik.</p>

          <h2>HbA1c — det viktigaste diabetestestet</h2>
          <p><strong>Vad det mäter:</strong> HbA1c (glykerat hemoglobin) reflekterar hur mycket socker som bundits till röda blodkroppar under de senaste 2–3 månaderna. Ju högre blodsockernivå, desto mer glykerat hemoglobin bildas.</p>

          <p><strong>Referensvärden:</strong></p>
          <ul>
            <li><strong>Under 42 mmol/mol:</strong> Normalt — inget tecken på prediabetes eller diabetes</li>
            <li><strong>42–47 mmol/mol:</strong> Prediabetes — livsstilsintervention rekommenderas</li>
            <li><strong>48+ mmol/mol:</strong> Diabetes — kontakta läkare för utredning och behandling</li>
          </ul>

          <p>Viktigt: ett enstaka HbA1c-värde på 48+ bekräftar inte diabetesdiagnos ensamt. Socialstyrelsen kräver bekräftande mätning vid ett annat tillfälle, alternativt kompletterande test.</p>

          <h2>Vem bör testa sig hemma för diabetes?</h2>
          <p>Socialstyrelsen rekommenderar regelbunden screening för:</p>
          <ul>
            <li>Vuxna 40 år och äldre — vart 3–5 år</li>
            <li>Överviktiga (BMI över 25) från 18 år</li>
            <li>Förstgradssläkting med typ 2-diabetes</li>
            <li>Tidigare graviditetsdiabetes</li>
            <li>Högt blodtryck eller höga blodfetter</li>
            <li>Stillasittande livsstil och ohälsosam kost</li>
            <li>Polycystiskt ovariesyndrom (PCOS)</li>
          </ul>
          <p>Om du har prediabetes: testa var 6–12:e månad för att följa förloppet. Hemtest möjliggör tätare uppföljning utan att belasta vården.</p>

          <h2>Hur testar du diabetes hemma — steg för steg</h2>
          <ol>
            <li><strong>Välj ett ackrediterat hemtest:</strong> Werlabs, Diagnostikdirekt och Blodtestet.se erbjuder HbA1c-hemtest som analyseras av ackrediterade laboratorier. Paketet skickas hem.</li>
            <li><strong>Ta provet:</strong> Stick på fingertoppens sida (inte toppen — mer känsligt). Pressa ut bloddropparna och applicera på provkortet. Inga förberedelser krävs.</li>
            <li><strong>Skicka samma dag:</strong> Paketets svarskuvert skickas för att säkra provets stabilitet. Skicka hellre morgonen än kvällen.</li>
            <li><strong>Få digitalt svar:</strong> Resultat via app eller e-post inom 2–5 dagar, med referensvärden och förklaringar.</li>
          </ol>

          <h2>Prediabetes — vad gör du nu?</h2>
          <p>Prediabetes (HbA1c 42–47) är ett kritiskt tillfälle och är reversibelt med rätt insatser:</p>
          <ul>
            <li><strong>Viktminskning 5–7%:</strong> Minskar risken att utveckla typ 2-diabetes med 58% (Diabetes Prevention Program, randomiserad studie)</li>
            <li><strong>Fysisk aktivitet:</strong> 150 minuter/vecka med måttlig intensitet förbättrar insulinkänsligheten signifikant</li>
            <li><strong>Kostomläggning:</strong> Minska raffinerade kolhydrater, socker och söta drycker</li>
            <li><strong>Sömnkvalitet:</strong> Sömnbrist ökar kortisol och insulinresistens — prioritera 7–9 timmars sömn</li>
          </ul>
          <p>Boka uppföljningstid på din vårdcentral. Kontrollera HbA1c igen om 6 månader för att mäta förbättring. Läs mer om <Link href="/guider/insulinresistens-test/" className="text-blue-600 hover:underline">insulinresistens och vad det innebär</Link>.</p>

          <h2>Relaterade tester</h2>
          <ul>
            <li><Link href="/guider/hba1c-test-hemma/" className="text-blue-600 hover:underline">HbA1c test hemma — komplett guide</Link></li>
            <li><Link href="/guider/insulinresistens-test/" className="text-blue-600 hover:underline">Insulinresistenstest — HOMA-IR guide</Link></li>
            <li><Link href="/guider/kolesterol-varden/" className="text-blue-600 hover:underline">Kolesterolvärden — vad är normalt?</Link></li>
            <li><Link href="/blodtester/" className="text-blue-600 hover:underline">Alla blodtester hemma — komplett lista</Link></li>
          </ul>
        </div>

        <FaqAccordion items={faqs} />
      </main>
      <Footer />
    </>
  );
}
