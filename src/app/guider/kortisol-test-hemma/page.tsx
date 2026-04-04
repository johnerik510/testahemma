import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FaqAccordion from "@/components/FaqAccordion";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kortisol test hemma April 2026 – mät ditt stresshormon med blodprov",
  description: "Hur testar du kortisol hemma? Guide till kortisolvärden, symtom på högt och lågt kortisol, och hur du väljer rätt test – morgonkortisol vs dygnsprofil.",
  alternates: { canonical: "https://www.testahemma.se/guider/kortisol-test-hemma/" },
  openGraph: {
    title: "Kortisol test hemma April 2026 – mät ditt stresshormon",
    description: "Mät ditt kortisolnivå hemma. Guide till kortisolvärden, symtom på högt och lågt kortisol, och hur du tolkar provsvar.",
    url: "https://www.testahemma.se/guider/kortisol-test-hemma/",
  },
};

const faqs = [
  {
    question: "Vad är ett normalt kortisolvrde?",
    answer: "Kortisol varierar kraftigt under dygnet och mäts bäst på morgonen då det är som högst (morgontopppen). Normala morgonvärden i blod (serum): 170–540 nmol/L kl. 08:00. Kvällsvärden är normalt under 100 nmol/L. Låga morgonvärden kan indikera binjurebarkssvikt. Höga värden kan indikera Cushings syndrom eller kronisk stress. Enstaka mätning ger begränsad information — en dygnsprofil ger bättre bild av kortisolmönstret.",
  },
  {
    question: "Varför varierar kortisol så mycket under dagen?",
    answer: "Kortisol styrs av den cirkadiska rytmen via hypothalamus–hypofys–binjureaxeln (HPA-axeln). Utsöndringen når maximum ca 30–45 minuter efter uppvaknandet (cortisol awakening response, CAR) och sjunker sedan under dagen för att nå minimum runt midnatt. Stress, träning, koffein, sömnbrist och psykologisk press kan alla höja kortisol akut oavsett tidpunkt.",
  },
  {
    question: "Kan man testa kortisol hemma?",
    answer: "Ja — det finns hemtest som mäter kortisol i blod (fingerblodsprov) och i saliv (salivprov). Salivprov är praktiskt för dygnsprofil eftersom du kan ta provet på morgonen och kvällen hemma. Blodprov via hemtest (t.ex. Werlabs eller Diagnostikdirekt) mäter serum-kortisol och ger en enstaka mätpunkt. Skicka provet till ackrediterat labb och få svar digitalt.",
  },
  {
    question: "Vad är symtom på högt kortisol (hyperkortisolism)?",
    answer: "Kroniskt högt kortisol: viktuppgång (framför allt kring buken), månansikte, röd hud och akne, muskelsvaghet, svårt att sova (insomni), nedstämdhet och ångest, oregelbunden menstruation, sötsug. Extremt högt kortisol (Cushings syndrom): kraftig viktuppgång, purpurfärgade strimmor på huden, benförlust, diabetes typ 2. Kushings är sällsynt men kräver läkarbedömning.",
  },
  {
    question: "Vad är symtom på lågt kortisol (hypoadrenalism)?",
    answer: "Kroniskt lågt kortisol: extrem trötthet (fatigue), viktminskning och aptitlöshet, illamående, yrsel (ortostatisk hypotension), saltbegär, mörk hud (i armveck och handlinjer), nedstämdhet. Akut binjurebarkssvikt (Addisons kris) är ett livshotande tillstånd med buksmärta, hypotoni och medvetslöshet — kräver akutvård. Om du misstänker Addisons sjukdom: kontakta vården direkt, testa inte enbart hemma.",
  },
  {
    question: "Skiljer sig kortisol från 'stresshormon' i vardagligt tal?",
    answer: "Kortisol är det primära stresshormonet men inte det enda. Det kortikala systemet frisätter kortisol som reaktion på stress (psykisk och fysisk), medan adrenerg stress (adrenalin, noradrenalin från binjuremärgen) aktiveras snabbare men ger kortare svar. Mätning av kortisol ger information om HPA-axelns funktion — inte om adrenalinrelaterad akut stress.",
  },
];

export default function KortisolTestHemmaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Kortisol test hemma April 2026 – mät ditt stresshormon med blodprov",
    description: "Guide till kortisolvärden, symtom på högt och lågt kortisol, och hur du testar kortisol hemma.",
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
      { "@type": "ListItem", position: 3, name: "Kortisol test hemma", item: "https://www.testahemma.se/guider/kortisol-test-hemma/" },
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
          { name: "Kortisol test hemma", href: "/guider/kortisol-test-hemma/" }
        ]} />
        <div className="text-xs text-gray-400 mb-2">Granskad av Anna Lindström, biomedicinsk analytiker &bull; Uppdaterad april 2026</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Kortisol test hemma April 2026 – mät ditt stresshormon</h1>
        <MedicalDisclaimer />
        <div className="prose-guide">
          <p>Kortisol kallas ofta stresshormonet men det är mycket mer än så. Det styr energimetabolism, immunförsvar, blodtryck och hjärnfunktion. Kroniskt för högt eller för lågt kortisol kan ha allvarliga hälsokonsekvenser. Med ett hemtest kan du mäta dina kortisolnivåer enkelt — utan att boka läkartid.</p>

          <h2>Vad är kortisol och vad gör det?</h2>
          <p>Kortisol är ett steroidhormon som produceras i binjurebarken som svar på ACTH-signalering från hypofysen. Det fyller flera kritiska funktioner:</p>
          <ul>
            <li><strong>Energihantering:</strong> Kortisol mobiliserar glukos och fettsyror för energiproduktion — speciellt viktigt vid stress och fasta.</li>
            <li><strong>Immunreglering:</strong> I kortvariga svängningar är kortisol anti-inflammatoriskt. Kroniskt höga nivåer supprimerar dock immunförsvaret och ökar infektionskänsligheten.</li>
            <li><strong>Blodtryck och vätskebalans:</strong> Kortisol upprätthåller blodkärlets responsvitet mot katekolaminer och bidrar till natriumretention.</li>
            <li><strong>Stressrespons:</strong> Aktiverar kamp-eller-flykt-responsen via HPA-axeln (hypothalamus–hypofys–binjure).</li>
            <li><strong>Dygnsrytm:</strong> Kortisolets dygnsvariation driver uppvaknandet och ger energi under dagen.</li>
          </ul>

          <h2>Normala kortisolnivåer under dygnet</h2>
          <p>Kortisol är inte statiskt — det varierar dramatiskt under dygnet och det är ett av skälen till att enstaka mätningar kan vara svåra att tolka:</p>
          <table>
            <thead>
              <tr>
                <th>Tidpunkt</th>
                <th>Normalt kortisol (serum, nmol/L)</th>
                <th>Förklaring</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Kl. 07:00–09:00</td><td>170–540 nmol/L</td><td>Morgontopp (CAR) — högsta nivån</td></tr>
              <tr><td>Kl. 12:00–14:00</td><td>65–290 nmol/L</td><td>Gradvis sjunkande</td></tr>
              <tr><td>Kl. 16:00–18:00</td><td>50–200 nmol/L</td><td>Fortsatt sjunkande</td></tr>
              <tr><td>Kl. 23:00–01:00</td><td>Under 50 nmol/L</td><td>Nattminimum</td></tr>
            </tbody>
          </table>
          <p>Blodprov för kortisol tas standardmässigt kl. 08:00 för att fånga morgontoppens värde. Hemtest ger bäst information om du tar provet på morgonen inom 30–60 minuter efter uppvaknandet.</p>

          <h2>Symtom på högt kortisol</h2>
          <p>Kroniskt förhöjt kortisol — oavsett om det beror på stress, sömnbrist, Cushings syndrom eller andra faktorer — ger ett karakteristiskt mönster:</p>
          <ul>
            <li><strong>Viktuppgång runt buken</strong> och ansiktet (månansikte vid Cushings)</li>
            <li><strong>Sömnsvårigheter (insomni)</strong> — högt kortisol på kvällen stör sömnen</li>
            <li><strong>Ångest och irritabilitet</strong> — HPA-axeln överstimulerar amygdala</li>
            <li><strong>Högt blodsocker och sötsug</strong> — kortisol ökar glukoneogenesen</li>
            <li><strong>Nedsatt immunförsvar</strong> — frekventa förkylningar och långsam läkning</li>
            <li><strong>Muskelsvaghet</strong> — kortisol bryter ned muskelprotein vid kronisk elevation</li>
            <li><strong>Oregelbunden menstruation</strong> hos kvinnor — HPA-axelns överstimulering hämmar GnRH</li>
          </ul>

          <h2>Symtom på lågt kortisol</h2>
          <p>Lågt kortisol (hypoadrenalism, binjurebarkssvikt) är allvarligare och kräver medicinsk utredning:</p>
          <ul>
            <li><strong>Extrem utmattning (fatigue)</strong> som inte förbättras av vila</li>
            <li><strong>Viktminskning och aptitlöshet</strong></li>
            <li><strong>Illamående och kräkningar</strong></li>
            <li><strong>Yrsel vid uppresning</strong> (ortostatisk hypotension)</li>
            <li><strong>Saltbegär</strong> — binjurebark-insufficiens minskar aldosteronproduktionen</li>
            <li><strong>Hyperpigmentering</strong> — mörk hud i handlinjer, ärr och slemhinnor vid primär Addisons</li>
          </ul>
          <p>Misstänker du Addisons sjukdom eller binjurebarkssvikt: kontakta sjukvården. Dessa tillstånd är livshotande vid akut stress utan behandling och hemtest räcker inte för diagnos.</p>

          <h2>Hur testar du kortisol hemma?</h2>
          <p>Det finns två typer av hemtest för kortisol:</p>
          <ul>
            <li>
              <strong>Blodprov (fingerblodsprov):</strong> Du tar ett litet blodprov via sticklancett på fingret, applicerar på provtagningskort och skickar med bifogat svarskuvert. Resultaten rapporterar serum-kortisol (nmol/L). Bäst för enstaka morgonmätning. Tillgängligt via Werlabs, Diagnostikdirekt och Blodtestet.se.
            </li>
            <li>
              <strong>Salivprov (dygnsprofil):</strong> Du tar saliv vid 4 tidpunkter under dygnet (morgon, lunch, kväll, natt) och skickar in salivpinnarna. Ger en fullständig dygnskurva och bättre bild av HPA-axelns funktion. Används av integrativ medicin och kräver ibland läkare för ordination.
            </li>
          </ul>
          <p>
            För de flesta är ett <Link href="/hormontester/" className="text-blue-600 hover:underline">hormontest hemma</Link> via blodprov tillräckligt för initial screening. Ta provet kl. 08:00 för jämförbara referensvärden.
          </p>

          <h2>Werlabs vs Diagnostikdirekt — kortisol</h2>
          <p>Båda de stora aktörerna erbjuder kortisolmätning:</p>
          <ul>
            <li><strong>Werlabs:</strong> Kortisol ingår i deras hormonpaket eller kan beställas separat. Prov kan tas hemma (fingerblodsprov) eller på provtagningsstation. Svar via appen.</li>
            <li><strong>Diagnostikdirekt:</strong> Erbjuder kortisolmätning i deras stresspaket. Fingerblodsprov, svar digitalt via e-post inom 2–4 dagar.</li>
          </ul>
          <p>
            Läs vår fullständiga <Link href="/guider/allergitest-hemma/" className="text-blue-600 hover:underline">guide till hemtest</Link> för mer om hur du väljer rätt leverantör.
          </p>

          <h2>När ska du kontakta vården istället för att testa hemma?</h2>
          <ul>
            <li>Symtom på Addisons sjukdom (extrem fatigue, hyperpigmentering, viktminskning)</li>
            <li>Symtom på Cushings syndrom (månansikte, bufkelnacke, purpurstrimmor)</li>
            <li>Hemtest visar värden utanför referensintervallet vid upprepade mätningar</li>
            <li>Du tar kortisol-påverkande läkemedel (kortison, prednisolon, p-piller)</li>
          </ul>
          <p>Hemtest är ett komplement till — inte ersättning för — medicinsk utredning vid misstänkt endokrin sjukdom.</p>
        </div>

        <FaqAccordion items={faqs} />
      </main>
      <Footer />
    </>
  );
}
