import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FaqAccordion from "@/components/FaqAccordion";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Järnbrist: Symtom, Orsaker och Test Hemma April 2026",
  description: "Järnbrist är den vanligaste näringsbristsjukdomen i Sverige – drabbar var tredje kvinna. Lär dig symtomen, referensvärdena och hur du testar järnvärdet hemma.",
  alternates: { canonical: "https://www.testahemma.se/guider/jarnbrist-symtom/" },
  openGraph: {
    title: "Järnbrist: Symtom, Orsaker och Test Hemma April 2026",
    description: "Järnbrist är den vanligaste näringsbristsjukdomen i Sverige – drabbar var tredje kvinna. Lär dig symtomen, referensvärdena och hur du testar järnvärdet hemma.",
    url: "https://www.testahemma.se/guider/jarnbrist-symtom/",
  },
};

const faqs = [
  {
    question: "Hur snabbt stiger ferritin efter järntillskott?",
    answer: "Ferritin ökar långsamt: räkna med 3–6 månader för att normalisera lagren. Hemoglobin normaliseras vanligtvis inom 4–8 veckor. Det är viktigt att fortsätta ta tillskott i ytterligare 3 månader efter att hemoglobin normaliserats – annars riskerar du att lagren töms igen.",
  },
  {
    question: "Kan man ta för mycket järn?",
    answer: "Ja, järnöverskott (hemokromatos) är skadligt för kroppen. Ta aldrig järntillskott utan att först bekräfta brist via blodprov. Överdosering över tid kan orsaka skador på lever, hjärta och leder. Järntillskott i höga doser kan också orsaka förstoppning och magbesvär vid kortvarig användning.",
  },
  {
    question: "Vad är bäst att äta för att höja järnvärdet?",
    answer: "Hemjärn från animaliska källor absorberas bäst av kroppen: rött kött, lever och sardiner är de rikaste källorna. Icke-hemjärn från växtbaserade livsmedel absorberas sämre men kan kombineras smart: linser, bönor, spenat och quinoa är bra alternativ. Ta C-vitamin i samband med järnrika vegetariska livsmedel för att öka absorptionen. Undvik te och kaffe nära järnrika måltider – tanninerna minskar järnupptaget.",
  },
  {
    question: "Kan man testa järn om man har mens?",
    answer: "Vänta helst 5–7 dagar efter menstruationen för det mest representativa resultatet, speciellt när det gäller ferritin. Ferritin kan tillfälligt sjunka under och efter mens och kan också påverkas av akut inflammation. Hemoglobin är mer stabilt men ger en mer rättvisande bild utanför menstruationen.",
  },
  {
    question: "Vad är skillnaden mellan järntillskott och järninfusion?",
    answer: "Järntillskott i tablettform är förstahandsval vid järnbrist och fungerar bra för de flesta, men tar längre tid – räkna med 3–6 månader. Järninfusion (intravenöst järn) ges vid allvarlig järnbristanemi, vid malabsorption (till exempel celiaki eller IBD), eller när snabb effekt krävs, till exempel inför operation. Järninfusion kräver alltid läkarbedömning och recept och ges på vårdinrättning.",
  },
];

export default function JarnbristSymtomPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Järnbrist: Symtom, Orsaker och Test Hemma April 2026",
    description: "Järnbrist är den vanligaste näringsbristsjukdomen i Sverige – drabbar var tredje kvinna. Lär dig symtomen, referensvärdena och hur du testar järnvärdet hemma.",
    datePublished: "2026-01-15",
    dateModified: "2026-03-29",
    author: { "@type": "Person", name: "Anna Lindström" },
    publisher: { "@type": "Organization", name: "Testahemma.se" },
  };

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <BreadcrumbNav items={[{ name: "Hem", href: "/" }, { name: "Guider", href: "/guider/" }, { name: "Järnbrist symtom", href: "/guider/jarnbrist-symtom/" }]} />
        <div className="text-xs text-gray-400 mb-2">Granskad av Anna Lindström, biomedicinsk analytiker &bull; Uppdaterad mars 2026</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Järnbrist: symtom, orsaker och hur du testar hemma</h1>
        <MedicalDisclaimer />
        <div className="prose-guide">
          <p>Järnbrist är världens vanligaste näringsbristsjukdom och ett utbrett problem i Sverige. Upp till 30 % av fertila kvinnor i landet har järnbrist – många utan att veta om det. Järnet är nödvändigt för produktionen av hemoglobin, det protein i de röda blodkropparna som transporterar syre till kroppens alla vävnader.</p>
          <p>I den här guiden går vi igenom de vanligaste symtomen, skillnaden mellan järnbrist och anemi, vad referensvärdena innebär och hur du enkelt kan <Link href="/blodtester/">testa ditt järnvärde hemma</Link>.</p>

          <h2>Symtom på järnbrist</h2>
          <p>Järnbrist utvecklas gradvis och symtomen kan vara diffusa i tidiga stadier. De vanligaste tecknen att känna igen är:</p>
          <ul>
            <li><strong>Extrem trötthet</strong> – det dominerande symtomet. Tröttheten beror på att syre inte når musklerna och organen effektivt. Den skiljer sig från vanlig trötthet genom att vila inte hjälper.</li>
            <li><strong>Blekhet</strong> – huden, naglarna och ögonvitorna kan bli bleka eller gulvita när hemoglobinhalten sjunker. Dra försiktigt ner det undre ögonlocket – den inre slemhinnan ska vara rosenröd.</li>
            <li><strong>Andfåddhet vid ansträngning</strong> – redan vid lättare aktivitet som trappgång kan andfåddhet uppstå när blodet inte bär tillräckligt med syre.</li>
            <li><strong>Hjärtklappning</strong> – hjärtat kompenserar för syrebristen genom att slå snabbare, vilket kan upplevas som hjärtklappning eller oregelbunden puls.</li>
            <li><strong>Kallkänsla</strong> – speciellt i händer och fötter. Dålig cirkulation till extremiteterna är ett tidigt tecken på järnbrist.</li>
            <li><strong>Restless legs</strong> – oroliga ben, speciellt på kvällen eller natten. Järnbrist är en av de vanligaste bakomliggande orsakerna till restless legs-syndrom.</li>
            <li><strong>Spröda naglar och håravfall</strong> – naglarna kan bli tunna, rännade eller forma sig som skedar (koilonychi). Diffust håravfall är vanligt vid ferritinbrist.</li>
            <li><strong>Pica – ätbegär efter icke-mat</strong> – ett ovanligt men karakteristiskt symtom där man känner stark lust att äta lera, is, stärkelse eller till och med jord. Orsakerna är inte helt klarlagda men starkt kopplat till järnbrist.</li>
            <li><strong>Koncentrationssvårigheter och brain fog</strong> – järn behövs för neurotransmittorproduktionen i hjärnan. Brist ger nedsatt koncentration, minnesproblem och mental dimma.</li>
          </ul>

          <h2>Järnbrist vs anemi – vad är skillnaden?</h2>
          <p>Järnbrist och anemi används ofta synonymt, men de är inte samma sak – och skillnaden är kliniskt viktig.</p>
          <p><strong>Järnbrist</strong> innebär att kroppens järnlager är uttömda, vilket mäts med ferritin. Det kan förekomma utan att hemoglobin ännu sjunkit. I det stadiet – kallat latent järnbrist – kan symtom som trötthet, håravfall och brain fog redan finnas, trots att ett vanligt blodvärde (hemoglobin) ser normalt ut.</p>
          <p><strong>Anemi</strong> definieras som ett hemoglobinvärde under:</p>
          <ul>
            <li>120 g/L för kvinnor</li>
            <li>130 g/L för män</li>
          </ul>
          <p><strong>Järnbristanemi</strong> är när både ferritin och hemoglobin är låga – det allvarligare stadiet. Många patienter med tydliga symtom har järnbrist utan anemi, vilket innebär att ett enkelt hemoglobinprov inte räcker – ferritin måste alltid ingå i utredningen.</p>

          <h2>Referensvärden för järnmarkörer</h2>
          <p>Nedan visas de viktigaste markörerna och deras referensvärden. Observera att laboratoriers labbgränser för ferritin ofta är lågt satta – många specialister rekommenderar ferritin över 50 µg/L för att vara symtomfri.</p>
          <table>
            <thead>
              <tr>
                <th>Markör</th>
                <th>Referensvärde</th>
                <th>Kommentar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ferritin (kvinnor)</td>
                <td>12–150 µg/L</td>
                <td>Optimal nivå rekommenderas &gt;50 µg/L</td>
              </tr>
              <tr>
                <td>Ferritin (män)</td>
                <td>30–300 µg/L</td>
                <td>Lågt ferritin trots normalt hemoglobin kan ge symtom</td>
              </tr>
              <tr>
                <td>Hemoglobin (kvinnor)</td>
                <td>&gt;120 g/L</td>
                <td>Under gränsen = anemi</td>
              </tr>
              <tr>
                <td>Hemoglobin (män)</td>
                <td>&gt;130 g/L</td>
                <td>Under gränsen = anemi</td>
              </tr>
              <tr>
                <td>Transferrinmättnad</td>
                <td>20–45 %</td>
                <td>Under 20 % tyder på järnbrist</td>
              </tr>
              <tr>
                <td>S-järn</td>
                <td>10–30 µmol/L</td>
                <td>Varierar under dagen, ferritin är mer stabilt</td>
              </tr>
            </tbody>
          </table>

          <h2>Vem löper störst risk för järnbrist?</h2>
          <p>Vissa grupper är betydligt mer utsatta för järnbrist och bör testa regelbundet:</p>
          <ul>
            <li><strong>Menstruerande kvinnor</strong> – den i särklass största riskgruppen. Riklig eller långvarig menstruation kan tömma järnlagren snabbare än kosten ersätter dem.</li>
            <li><strong>Gravida och ammande</strong> – järnbehovet ökar kraftigt under graviditet. Fostret prioriterar järn framför modern, vilket ökar risken för brist.</li>
            <li><strong>Veganer och vegetarianer</strong> – växtbaserat järn (icke-hemjärn) absorberas sämre. Utan aktiv planering är järnbrist vanligt i dessa grupper.</li>
            <li><strong>Elitidrottare</strong> – intensiv träning, speciellt löpning, orsakar hemolys (nedbrytning av röda blodkroppar) och ökar järnförlusterna via svett.</li>
            <li><strong>Blodgivare</strong> – regelbunden blodgivning tömmer järnlagren och kräver aktiv uppföljning.</li>
            <li><strong>Celiaki och IBD</strong> – inflammatorisk tarmsjukdom och celiaki försämrar järnabsorptionen i tunntarmen, oavsett intag.</li>
            <li><strong>Äldre</strong> – nedsatt matintag och sämre absorption gör att äldre löper ökad risk, speciellt vid vegankost eller ensidig mathållning.</li>
          </ul>

          <h2>Hur testar du järnvärdet hemma?</h2>
          <p>Det snabbaste och enklaste sättet att kontrollera ditt järnvärde är ett hemtest via fingerblodsprov. Ett bra järntest täcker hemoglobin, ferritin och transferrinmättnad – de tre viktigaste markörerna för att bedöma om du har järnbrist, latent brist eller järnbristanemi.</p>
          <p>Se till att välja ett test som inkluderar ferritin och inte bara hemoglobin. Många med järnbrist har normalt hemoglobin men lågt ferritin – och missar sin brist vid ett enkelt blodvärdestest.</p>
          <ul>
            <li>Beställ ett <Link href="/blodtester/">blodtest hemma</Link> som täcker järnmarkörer</li>
            <li>Ta ett litet fingerblodsprov med medföljande lansett</li>
            <li>Posta till laboratoriet med bifogat svarskuvert</li>
            <li>Få digitalt provsvar inom 3–5 dagar</li>
          </ul>
          <p>Läs vår recension av <Link href="/recension/werlabs/">Werlabs</Link> – ett av de vanligaste alternativen för blodtester hemma med ackrediterat laboratorium.</p>
        </div>

        <div className="my-8 bg-teal-50 rounded-xl p-5 flex flex-col sm:flex-row items-center gap-4">
          <div>
            <div className="font-bold text-teal-900">Testa ditt järnvärde hemma</div>
            <div className="text-sm text-teal-700">Fingerblodsprov – ferritin, hemoglobin och transferrinmättnad</div>
          </div>
          <Link href="/blodtester/" className="shrink-0 bg-teal-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-teal-700 transition-colors">
            Jämför Sveriges bästa blodtester
          </Link>
        </div>

        <FaqAccordion items={faqs} title="Vanliga frågor om järnbrist" />
      </main>
      <Footer />
    </>
  );
}
