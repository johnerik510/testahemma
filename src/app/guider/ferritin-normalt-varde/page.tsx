import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FaqAccordion from "@/components/FaqAccordion";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ferritin normalt värde 2026 – Tabell och vad lågt ferritin betyder",
  description: "Vad är normalt ferritinvärde? Se referenstabell för kvinnor, män och barn. Lär dig vad lågt ferritin betyder och hur du testar järndepåerna hemma.",
  alternates: { canonical: "https://www.testahemma.se/guider/ferritin-normalt-varde/" },
  openGraph: {
    title: "Ferritin normalt värde 2026 – Tabell och vad lågt ferritin betyder",
    description: "Vad är normalt ferritinvärde? Se referenstabell för kvinnor, män och barn. Lär dig tolka ditt ferritinprov och vad du bör göra vid lågt värde.",
    url: "https://www.testahemma.se/guider/ferritin-normalt-varde/",
  },
};

const faqs = [
  {
    question: "Vad är normalt ferritinvärde för kvinnor?",
    answer: "Normalintervallet för ferritin hos vuxna kvinnor är 15–200 µg/L enligt de flesta svenska laboratorier. Många funktionsmedicinska läkare anser dock att optimalt ferritin för kvinnor är 50–100 µg/L för att ha god energinivå och friskt hår. Värden under 30 µg/L ger ofta symtom trots att de tekniskt sett ligger inom 'normalintervallet'.",
  },
  {
    question: "Vad är normalt ferritinvärde för män?",
    answer: "Normalt ferritin för vuxna män är 30–400 µg/L. Män har generellt högre ferritinvärden än kvinnor eftersom de inte förlorar järn via menstruation. Ett värde under 30 µg/L hos en man bör alltid utredas med hänsyn till orsak (blödning, malabsorption).",
  },
  {
    question: "Vilka symtom ger lågt ferritin?",
    answer: "Vanliga symtom på lågt ferritin är: extrem trötthet (även med normal sömn), håravfall (telogen effluvium), andfåddhet vid ansträngning, hjärtklappning, sämre koncentration och hjärndimma, restless legs-syndrom, spröda naglar, perverterad aptit (pica – sug efter is, smuts). Håravfall är ett av de vanligaste symtomen och drabbar framför allt kvinnor med ferritin under 30–40 µg/L.",
  },
  {
    question: "Vad skiljer ferritin från järn och hemoglobin?",
    answer: "Ferritin är kroppens järndepå – det mäter hur mycket järn som är lagrat. Järn (serum iron) mäter järn i blodet just nu. Hemoglobin mäter röda blodkroppars syretransportförmåga. Du kan ha lågt ferritin (tömd depå) länge innan hemoglobin sjunker – det är ett tidigare varningssystem. En fullständig järnstatus inkluderar ferritin, järn, TIBC och transferrinmättnad.",
  },
  {
    question: "Kan ferritin vara för högt?",
    answer: "Ja. Högt ferritin (hyperferritinemi) kan tyda på inflammation, leversjukdom, alkoholöverkonsumtion eller järnöverskottssjukdomen hereditär hemokromatos. Ferritin är ett akutfasprotein och stiger vid infektion, autoimmuna sjukdomar och cancer – ett isolerat högt ferritin utan symtom bör alltid utredas av läkare.",
  },
  {
    question: "Kan man testa ferritin hemma?",
    answer: "Ja. Werlabs och Medisera erbjuder hemtester som inkluderar ferritin i sina blodpaneler. Med ett enkelt fingerblodsprov hemma får du digitalt provsvar inom 2–4 dagar utan att boka tid på vårdcentral. Se vår jämförelse av bästa hemblodtester för att välja rätt.",
  },
  {
    question: "Hur höjer man ferritin snabbt?",
    answer: "Järntillskott (t.ex. järnsulfat, järnbisglycinat) är effektivast. Ta dem på fastande mage med C-vitamin för bästa absorption. Köttkällor ger hem-järn med hög biotillgänglighet. Undvik att dricka kaffe, te eller mjölk inom 1–2 timmar från järntillskottet. Kontrollera alltid med nytt ferritinprov efter 3 månaders behandling.",
  },
];

export default function FerritinNormaltVardePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Ferritin normalt värde – referenstabell och tolkning",
        description: "Vad är normalt ferritinvärde? Referenstabell för kvinnor, män och barn, symtom på lågt ferritin och hur du testar hemma.",
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
            { name: "Ferritin normalt värde", href: "/guider/ferritin-normalt-varde/" },
          ]}
        />
        <div className="text-xs text-gray-400 mb-2">
          Granskad av Anna Lindström, biomedicinsk analytiker &bull; Uppdaterad april 2026
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Ferritin normalt värde: referenstabell och vad lågt ferritin betyder
        </h1>
        <MedicalDisclaimer />

        <div className="prose-guide">
          <p>
            Ferritin är ett av de viktigaste blodvärdena att följa – men ett av de mest missförstådda. Många får ett provsvar som visar ferritin inom "normalintervallet" men ändå lider av extrem trötthet, håravfall och hjärtklappning. Anledningen är att normalintervallen för ferritin är breda och inkluderar värden som är funktionellt låga.
          </p>
          <p>
            I den här guiden går vi igenom referensvärden för ferritin, vad lågt respektive högt ferritin innebär, vilka symtom du ska känna igen – och hur du enkelt kan <Link href="/blodtester/" className="text-blue-600 hover:underline">testa dina järndepåer hemma</Link> utan att boka tid på vårdcentral.
          </p>

          <h2>Vad är ferritin?</h2>
          <p>
            Ferritin är ett protein som lagrar järn inuti celler. Det fungerar som kroppens järndepå och är det känsligaste måttet på järnstatus. Serumferritin (ferritin i blodet) speglar hur välfyllda depåerna är. Sjunker ferritin under en viss nivå börjar kroppen "stjäla" järn från vävnader som hår, naglar och muskler – länge innan hemoglobin påverkas.
          </p>
          <p>
            Därför är ferritin ett viktigare mått än hemoglobin för att fånga järnbrist tidigt. Du kan ha normalt hemoglobin men ändå ha tömda järndepåer och tydliga symtom.
          </p>

          <h2>Referenstabell – ferritin normalt värde</h2>
          <div className="my-6">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-800">Grupp</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-800">Normalintervall (lab)</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-800">Funktionellt optimalt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 text-gray-700">Vuxna kvinnor</td>
                  <td className="px-4 py-3 text-gray-700">15–200 µg/L</td>
                  <td className="px-4 py-3 text-gray-700">50–100 µg/L</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-gray-700">Vuxna män</td>
                  <td className="px-4 py-3 text-gray-700">30–400 µg/L</td>
                  <td className="px-4 py-3 text-gray-700">80–200 µg/L</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-700">Barn 1–12 år</td>
                  <td className="px-4 py-3 text-gray-700">7–140 µg/L</td>
                  <td className="px-4 py-3 text-gray-700">20–60 µg/L</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-gray-700">Gravida</td>
                  <td className="px-4 py-3 text-gray-700">Individuell bedömning</td>
                  <td className="px-4 py-3 text-gray-700">70+ µg/L rekommenderas</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-700">Idrottare</td>
                  <td className="px-4 py-3 text-gray-700">Samma som kön</td>
                  <td className="px-4 py-3 text-gray-700">100+ µg/L för optimal prestation</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            Referensintervall varierar något mellan laboratorier. Kontrollera alltid mot det intervall som anges på ditt provsvar.
          </p>

          <h2>Vad betyder lågt ferritin?</h2>
          <p>
            Lågt ferritin innebär att jernlagren börjar ta slut. Det är ofta det första tecknet på järnbrist – innan hemoglobin sjunker och anemi uppstår. Processen ser ut såhär:
          </p>
          <ol>
            <li><strong>Fas 1 – Depåtömning:</strong> Ferritin sjunker, hemoglobin fortfarande normalt. Symtom kan redan börja.</li>
            <li><strong>Fas 2 – Järnbrist utan anemi:</strong> Ferritin lågt, järn sjunker, hemoglobin fortfarande normalt. Tydliga symtom.</li>
            <li><strong>Fas 3 – Järnbristanemi:</strong> Hemoglobin sjunker. Mer allvarliga symtom som andfåddhet och hjärtklappning.</li>
          </ol>
          <p>
            Många behandlas inte förrän i fas 3, trots att symtomen i fas 1–2 är påtagliga och onödiga att bära på.
          </p>

          <h2>Vanliga symtom på lågt ferritin</h2>
          <ul>
            <li><strong>Håravfall (telogen effluvium):</strong> Det vanligaste och mest uppmärksammade symtomet. Håret "glesnar" diffust. Ferritin under 30–40 µg/L är en vanlig orsak.</li>
            <li><strong>Kronisk trötthet:</strong> Järn behövs för mitokondriernas energiproduktion. Lågt ferritin ger cellulär energibrist långt innan anemi uppstår.</li>
            <li><strong>Restless legs:</strong> Stark koppling till lågt ferritin, speciellt hos kvinnor. Järnbehandling minskar ofta symtomen signifikant.</li>
            <li><strong>Koncentrationssvårigheter:</strong> Järn är nödvändigt för dopaminproduktionen i hjärnan, som styr fokus och arbetsminne.</li>
            <li><strong>Hjärtklappning vid ansträngning:</strong> Hjärtat kompenserar för sämre syretransport genom att slå snabbare.</li>
            <li><strong>Spröda naglar och naglar med längsränder:</strong> Nagelvävnad är känslig för järnbrist.</li>
            <li><strong>Kyla i händer och fötter:</strong> Järnbrist försämrar blodcirkulationen i perifera extremiteter.</li>
          </ul>

          <h2>Orsaker till lågt ferritin</h2>
          <p>Vanligaste orsakerna hos kvinnor:</p>
          <ul>
            <li>Rikliga menstruationer (den absolut vanligaste orsaken)</li>
            <li>Graviditet och amning (ökade järnbehov)</li>
            <li>Otillräckligt järnintag (vegetarisk/vegansk kost)</li>
            <li>Malabsorption (celiaki, inflammatorisk tarmsjukdom, H. pylori-infektion)</li>
          </ul>
          <p>Hos män bör alltid en bakomliggande blödning uteslutas (mag-tarmblödning, ulcus).</p>

          <h2>Hur testar du ferritin hemma?</h2>
          <p>
            Det enklaste sättet att kontrollera ferritin är med ett hemblodtest. Du tar ett fingerblodsprov hemma och skickar det till ett ackrediterat laboratorium med bifogat svarskuvert. Digitalt svar inom 2–4 dagar.
          </p>
          <p>
            Vi rekommenderar att inkludera ett komplett <Link href="/blodtester/" className="text-blue-600 hover:underline">järnstatus</Link> med ferritin, järn, TIBC och transferrinmättnad för att få en fullständig bild. Se vår jämförelse av <Link href="/basta-hemtest/" className="text-blue-600 hover:underline">bästa hemblodtester i Sverige</Link> för att välja rätt tjänst.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 my-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Vad ska ingå i ett komplett järnstatus?</h3>
            <ul className="text-gray-700 space-y-1">
              <li><strong>Ferritin</strong> – järndepåerna</li>
              <li><strong>S-järn (serum iron)</strong> – järn i blodet just nu</li>
              <li><strong>TIBC</strong> – total järnbindningskapacitet</li>
              <li><strong>Transferrinmättnad</strong> – andel järnbindningsprotein som bär järn</li>
              <li><strong>Hemoglobin (Hb)</strong> – för att utesluta anemi</li>
              <li><strong>MCV/MCH</strong> – röda blodkropparnas storlek och järninnehåll</li>
            </ul>
          </div>

          <h2>Vad gör man vid lågt ferritin?</h2>
          <p>
            Om ditt ferritin är lågt är första steget att identifiera orsaken (blödning? kostrelaterat? malabsorption?). Behandlingen är sedan:
          </p>
          <ol>
            <li><strong>Järntillskott:</strong> Järnsulfat eller järnbisglycinat, 100–200 mg elementärt järn per dag. Ta på fastande mage med C-vitamin för bästa absorption.</li>
            <li><strong>Kostanpassning:</strong> Öka intaget av hem-järn (rött kött, lever) och icke-hem-järn (baljväxter, spenat) kombinerat med C-vitamin.</li>
            <li><strong>Uppföljning:</strong> Kontrollera ferritin igen efter 3 månaders behandling. Det tar tid att fylla depåerna – räkna med 3–6 månader för normalisering.</li>
          </ol>
          <p>
            Vid ferritin under 15 µg/L, vid graviditet, eller om du inte svarar på oral järnbehandling: kontakta läkare för eventuell intravenös järninfusion.
          </p>

          <h2>Kan ferritin vara för högt?</h2>
          <p>
            Ja. Hyperferritinemi (högt ferritin) kan bero på:
          </p>
          <ul>
            <li><strong>Inflammation/infektion:</strong> Ferritin är ett akutfasprotein och stiger vid akut och kronisk inflammation (ledgångsreumatism, IBD, m.fl.).</li>
            <li><strong>Hereditär hemokromatos:</strong> Ärftlig järnöverskottssjukdom. Ferritin &gt;300 µg/L hos kvinnor eller &gt;400 µg/L hos män utan inflammation bör utredas.</li>
            <li><strong>Leversjukdom:</strong> Alkohol, fettlever (NAFLD), hepatit.</li>
            <li><strong>Metabolt syndrom:</strong> Insulinresistens och fetma höjer ferritin.</li>
          </ul>
          <p>
            Högt ferritin utan tydlig förklaring ska alltid utredas av läkare. Läs mer i vår guide om att{" "}
            <Link href="/guider/tolka-blodvarden/" className="text-blue-600 hover:underline">tolka blodvärden</Link>.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Vanliga frågor om ferritin</h2>
        <FaqAccordion items={faqs} />

        <div className="mt-10 p-5 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Relaterade guider</h3>
          <ul className="space-y-2 text-blue-600">
            <li><Link href="/guider/jarnbrist-symtom/" className="hover:underline">Järnbrist – symtom och behandling</Link></li>
            <li><Link href="/guider/tolka-blodvarden/" className="hover:underline">Tolka dina blodvärden</Link></li>
            <li><Link href="/blodtester/" className="hover:underline">Bästa hemblodtester 2026</Link></li>
            <li><Link href="/guider/b12-brist-symtom/" className="hover:underline">B12-brist symtom</Link></li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
