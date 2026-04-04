import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FaqAccordion from "@/components/FaqAccordion";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Östrogen test hemma April 2026 – mät östradiol enkelt",
  description: "Guide till östrogen hemtest: vad östradiol mäter, referensvärden per fas och ålder, symptom på östrogenbrist och överskott, och hur du testar hemma.",
  alternates: { canonical: "https://www.testahemma.se/guider/ostrogen-test-hemma/" },
  openGraph: {
    title: "Östrogen test hemma April 2026 – mät östradiol enkelt",
    description: "Komplett guide till östrogen (östradiol E2): referensvärden, symptom på obalans, menopaus, och hur du testar hormonerna hemma.",
    url: "https://www.testahemma.se/guider/ostrogen-test-hemma/",
  },
};

const faqs = [
  {
    question: "Vad är ett normalt östrogenvärde (östradiol)?",
    answer: "Östradiol (E2) varierar kraftigt beroende på fas i menscykeln och ålder. Follikelfas (dag 1–13): 77–921 pmol/L. Ovulation (dag 14): upp till 1 460 pmol/L. Lutealfas (dag 15–28): 77–1 145 pmol/L. Postmenopaus: under 110 pmol/L (ofta under 50 pmol/L). Män: 37–184 pmol/L. Referensintervall varierar mellan laboratorier — läs alltid det specifika labbet du använt.",
  },
  {
    question: "Vilken dag i cykeln ska man ta östrogenprov?",
    answer: "Det beror på frågeställningen. Tidig follikelfas (dag 2–5): ger basnivå och används vid utredning av äggstocksfunktion och menopaus. Dag 21 (mittenlutalfas): används ofta vid utredning av ägglossning. Vid misstänkt menopaus eller prematur äggstockssvikt: ta provet dag 2–3 i cykeln. Har du oregelbunden eller ingen mens: ta provet när det passar och tolka i kontexten av LH och FSH. Hemtest bör tas i enlighet med laboratoriet instruktioner.",
  },
  {
    question: "Vilka symptom ger lågt östrogen?",
    answer: "Lågt östrogen (hypoöstrogenism): oregelbunden eller utebliven mens, värmevallningar och nattsvettningar (klassiska menopaussymptom), vaginal torrhet och smärta vid samlag, stämningsförändringar (nedstämdhet, ångest, koncentrationssvårigheter), sömnproblem, minskad benmineraltäthet (risk för osteoporos), minskad libido. Vid perimenopaus varierar nivåerna kraftigt — mätning vid besvär är informativt. Kontakta läkare vid uttalade symptom.",
  },
  {
    question: "Kan man ha för högt östrogen?",
    answer: "Ja — östrogenöverskott (hyperöstrogenism) kan uppstå vid: PCOS (polycystiskt ovariesyndrom), övervikt (fettvävnad producerar östrogen via aromatas), leversjukdom (nedsatt östrogenmetabolism), eller vid hormonbehandling. Symptom: oregelbunden mens, kraftiga blödningar, bröstsvullnad och ömhet, viktuppgång kring höfter och bröst, PMS. Förhöjt östrogen i relation till progesteron (östrogendominans) är ett vanligt problem. Mät gärna progesteron och östrogen tillsammans.",
  },
  {
    question: "Kan man testa östrogen hemma?",
    answer: "Ja — Werlabs, Diagnostikdirekt och Blodtestet.se erbjuder östradiol (E2) hemtest via fingerblodsprov. Provet skickas till ackrediterat laboratorium och svar ges digitalt inom 2–5 dagar. Större hormonspaket (FSH + LH + östradiol + testosteron + SHBG + progesteron) ger en mer komplett bild av hormonstatusen. Hemtest är praktiska men ersätter inte läkarbedömning vid symptom som kräver utredning.",
  },
  {
    question: "Vad är skillnaden mellan östradiol (E2), östron (E1) och östriol (E3)?",
    answer: "Det finns tre naturliga östrogener. Östradiol (E2): det dominerande östrogenet hos fertila kvinnor — mäts i de flesta standardblodprover. Östron (E1): det dominerande östrogenet efter menopaus — produceras i fettvävnad. Östriol (E3): produceras under graviditet av placenta. Standard östrogenprov mäter östradiol (E2). Vid menopausutredning kan östron vara mer relevant, men de flesta laboratorier rapporterar östradiol.",
  },
];

export default function OstrogenTestHemmaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Östrogen test hemma April 2026 – mät östradiol enkelt",
    description: "Guide till östrogen hemtest: referensvärden per fas, symptom på östrogenbrist och överskott, och hur du testar hemma.",
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
      { "@type": "ListItem", position: 3, name: "Östrogen test hemma", item: "https://www.testahemma.se/guider/ostrogen-test-hemma/" },
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
          { name: "Östrogen test hemma", href: "/guider/ostrogen-test-hemma/" }
        ]} />
        <div className="text-xs text-gray-400 mb-2">Granskad av Anna Lindström, biomedicinsk analytiker &bull; Uppdaterad april 2026</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Östrogen test hemma – mät östradiol 2026</h1>
        <MedicalDisclaimer />
        <div className="prose-guide">
          <p>Östrogen är ett av kroppens viktigaste hormoner — det styr menscykeln, påverkar benhälsa, humör, libido och kardiovaskulär hälsa. Obalanserade östrogennivåer ger symptom som kan vara svåra att skilja från andra tillstånd. Nu kan du ta ett östrogen hemtest utan att boka läkartid.</p>

          <h2>Vad är östrogen och vad mäter ett prov?</h2>
          <p>Östrogen är en grupp hormoner som produceras primärt i äggstockarna (hos fertila kvinnor), men även i fettvävnad och binjurar. Det finns tre naturliga östrogener: östradiol (E2), östron (E1) och östriol (E3). Standard blodprover mäter östradiol (E2) — det biologiskt mest aktiva och dominerande östrogenet hos fertila kvinnor.</p>
          <p>Östradiol produceras av foliklarna i äggstockarna och varierar enormt under menscykeln. Det styr äggmogning, endometrietillväxt, och påverkar ben, hjärna, hjärta och hud.</p>

          <h2>Östradiol referensvärden per fas</h2>
          <table>
            <thead>
              <tr>
                <th>Fas / Grupp</th>
                <th>Östradiol (pmol/L)</th>
                <th>Tolkning</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Follikelfas (dag 1–13)</td><td>77–921</td><td>Basnivå, stiger mot ovulation</td></tr>
              <tr><td>Ovulation (dag 14)</td><td>upp till 1 460</td><td>Pik — triggrar LH-ökning</td></tr>
              <tr><td>Lutealfas (dag 15–28)</td><td>77–1 145</td><td>Högt om ägglossning skett</td></tr>
              <tr><td>Postmenopaus</td><td>under 110 (ofta &lt;50)</td><td>Lägre nivåer är normalt</td></tr>
              <tr><td>Graviditet (3:e trimestern)</td><td>upp till 150 000+</td><td>Produceras av placenta</td></tr>
              <tr><td>Män</td><td>37–184</td><td>Lägre men nödvändigt</td></tr>
            </tbody>
          </table>
          <p>Referensintervall varierar mellan laboratorier. Tolka alltid mot det labb som analyserat ditt prov.</p>

          <h2>Symptom på lågt östrogen (hypoöstrogenism)</h2>
          <ul>
            <li><strong>Värmevallningar och nattsvettningar:</strong> Klassiska menopaussymptom, men kan förekomma vid prematur äggstockssvikt (POI) hos yngre</li>
            <li><strong>Oregelbunden eller utebliven mens:</strong> Amenorré kan bero på lågt östrogen (hypogonadism)</li>
            <li><strong>Vaginal torrhet och smärta:</strong> Östrogen underhåller vaginalslemhinnans tjocklek och fuktighet</li>
            <li><strong>Humörsvängningar, nedstämdhet, ångest:</strong> Östrogen påverkar serotoninproduktionen</li>
            <li><strong>Sömnproblem:</strong> Lågt östrogen störer sömnkvalitet</li>
            <li><strong>Minskad benmassa:</strong> Östrogen hämmar osteoklaster (benbrytande celler) — brist ökar osteoporosrisken</li>
            <li><strong>Koncentrationssvårigheter ("hjärndimma"):</strong> Östrogen påverkar kognition och minne</li>
          </ul>

          <h2>Symptom på högt östrogen (hyperöstrogenism)</h2>
          <ul>
            <li><strong>Kraftiga eller oregelbundna menstruationer:</strong> Ökat östrogen bygger tjockare endometrium</li>
            <li><strong>Bröstsvullnad och ömhet:</strong> Vanligare premenstruellt men kan vara konstant</li>
            <li><strong>Viktuppgång kring höfter och bröst</strong></li>
            <li><strong>PMS-symptom:</strong> Irritabilitet, humörsvängningar, uppblåsthet</li>
            <li><strong>Trötthet och låg libido</strong></li>
          </ul>
          <p>Östrogenöverskott uppstår vid PCOS, övervikt, leversjukdom eller hormonbehandling. Det kan också bero på <strong>östrogendominans</strong> — relativt högt östrogen i förhållande till progesteron, även om båda är normala absolut.</p>

          <h2>Östrogen och menopaus</h2>
          <p>Under perimenopaus (övergångsåldern, typiskt 45–55 år) minskar äggstockarnas östrogenproduktion gradvis och oregelbundet. Östradiolnivåerna kan variera kraftigt månad för månad innan de stabiliseras på en låg postmenopausnivå. FSH (follikelstimulerande hormon) stiger kompensatoriskt.</p>
          <p>En kombinerad mätning av <strong>östradiol + FSH</strong> är standardutredning vid misstänkt menopaus:</p>
          <ul>
            <li>FSH &gt; 40 IU/L + lågt östradiol på två tillfällen med 4–6 veckors mellanrum = menopaus diagnosticeras</li>
            <li>FSH 10–40 IU/L = perimenopaus (övergångsperiod)</li>
          </ul>
          <p>
            Läs mer i vår guide om <Link href="/guider/menopaus-blodprov/" className="text-blue-600 hover:underline">menopaus blodprov och hormonpanel</Link>.
          </p>

          <h2>Hur testar du östrogen hemma?</h2>
          <ol>
            <li><strong>Välj rätt test:</strong> Beställ ett östradiol (E2) hemtest, eller ett hormonpaket med FSH + LH + östradiol + testosteron + SHBG. Finns hos Werlabs, Diagnostikdirekt och Blodtestet.se.</li>
            <li><strong>Välj rätt tidpunkt:</strong> För basnivå och menopausutredning: ta provet dag 2–5 i din cykel. Vid oregelbunden eller ingen mens: ta när det passar.</li>
            <li><strong>Ta fingerblodsprov:</strong> Sticklancett, applicera på provtagningskort enligt instruktion.</li>
            <li><strong>Skicka:</strong> Medföljande svarskuvert, skicka samma dag.</li>
            <li><strong>Svar:</strong> Digitalt via app inom 2–5 dagar med referensintervall och kommentarer.</li>
          </ol>

          <h2>Vem bör testa östrogen?</h2>
          <ul>
            <li>Kvinnor med oregelbunden mens, utebliven mens eller misstänkt PCOS</li>
            <li>Kvinnor 40+ med symptom på perimenopaus (vallningar, sömnproblem, humörförändringar)</li>
            <li>Vid misstänkt prematur äggstockssvikt (POI) under 40 år</li>
            <li>Vid utredning av fertilitetsproblem</li>
            <li>Män med misstänkt östrogenöverskott (gynekomasti, minskad libido, viktuppgång)</li>
            <li>Vid uppföljning av hormonbehandling (HRT, antiöstrogen-terapi)</li>
          </ul>
        </div>

        <FaqAccordion items={faqs} />
      </main>
      <Footer />
    </>
  );
}
