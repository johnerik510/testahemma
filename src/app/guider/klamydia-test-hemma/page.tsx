import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FaqAccordion from "@/components/FaqAccordion";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Klamydia Test Hemma 2026 – Diskret, Snabbt och Enkelt",
  description: "Klamydia är Sveriges vanligaste könssjukdom. Testa hemma diskret på 5 minuter – inga läkarbesök. Guide till symtom, hur testet fungerar och vad du gör om det är positivt.",
  alternates: { canonical: "https://www.testahemma.se/guider/klamydia-test-hemma/" },
  openGraph: {
    title: "Klamydia Test Hemma 2026 – Diskret, Snabbt och Enkelt",
    description: "Klamydia är Sveriges vanligaste könssjukdom. Testa hemma diskret på 5 minuter – inga läkarbesök. Guide till symtom, hur testet fungerar och vad du gör om det är positivt.",
    url: "https://www.testahemma.se/guider/klamydia-test-hemma/",
  },
};

const faqs = [
  {
    question: "Hur tillförlitligt är ett hemtest för klamydia?",
    answer: "PCR-baserade klamydiatester har en sensitivitet och specificitet på over 99 %, vilket är samma teknik och noggrannhet som används på ungdomsmottagningar och STI-kliniker. Förutsatt att provtagningen görs korrekt enligt instruktionerna är resultatet lika tillförlitligt som ett test taget av sjukvårdspersonal.",
  },
  {
    question: "Hur länge dröjer det innan klamydia syns i test?",
    answer: "Klamydia har en inkubationstid på 10–14 dagar. Det innebär att du inte ska testa dig direkt efter ett eventuellt smittotillfälle – vänta minst 2 veckor för att undvika ett falskt negativt svar. Vid symtom tidigare än så bör du kontakta en STI-mottagning.",
  },
  {
    question: "Kan klamydia gå bort av sig självt?",
    answer: "Sällan. I enstaka fall kan immunförsvaret bekämpa infektionen, men det är undantaget snarare än regeln. Obehandlad klamydia kvarstår i kroppen, kan spridas till könsorgan och äggledare och på sikt orsaka allvarliga komplikationer som infertilitet och bäckeninflammation. Behandla alltid med antibiotika om testet är positivt.",
  },
  {
    question: "Kan man testa för flera STI:er samtidigt?",
    answer: "Ja. Kombinationstester för klamydia, gonorre, syfilis och HIV finns tillgängliga och rekommenderas vid riskbeteende eller om du är osäker på vad du kan ha exponerats för. Det är praktiskt, kostnadseffektivt och ger en fullständig bild av din sexuella hälsa i ett och samma prov.",
  },
  {
    question: "Ar klamydiatest anonymt?",
    answer: "Ett hemtest är i praktiken anonymt eftersom du inte behöver uppsöka en mottagning eller skriva en remiss. Du registrerar dig med namn vid beställning, men ingen journal skapas. Observera dock att ett positivt prov enligt smittskyddslagen kräver smittskyddsrapportering och smittspårning via behandlande läkare – detta kan inte ske helt anonymt. Syftet är att skydda dina eventuella partners.",
  },
];

export default function KlamydiaTestHemmaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Klamydia Test Hemma 2026 – Diskret, Snabbt och Enkelt",
    description: "Klamydia är Sveriges vanligaste könssjukdom. Testa hemma diskret på 5 minuter – inga läkarbesök.",
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
        <BreadcrumbNav items={[{ name: "Hem", href: "/" }, { name: "Guider", href: "/guider/" }, { name: "Klamydia test hemma", href: "/guider/klamydia-test-hemma/" }]} />
        <div className="text-xs text-gray-400 mb-2">Granskad av Anna Lindström, biomedicinsk analytiker &bull; Uppdaterad mars 2026</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Klamydia test hemma: hur fungerar det och vad gör du sedan?</h1>
        <MedicalDisclaimer />
        <div className="prose-guide">
          <p>Klamydia är Sveriges absolut vanligaste sexuellt överförbara infektion (STI) – ca 40 000 fall rapporteras varje år och mörktalet bedöms vara minst lika stort. Det som gör klamydia extra svårbekämpat är att 70–80 % av smittade aldrig märker av några symtom alls och därmed omedvetet kan sprida infektionen vidare.</p>
          <p>Med ett <Link href="/sti-tester/">hemtest för STI</Link> kan du testa dig diskret utan att boka tid på mottagning eller förklara sig för någon. I den här guiden går vi igenom symtom, hur testet fungerar, vem som bör testa sig och vad du gör om resultatet är positivt.</p>

          <h2>Symtom på klamydia</h2>
          <p>Det viktigaste att känna till är att de allra flesta med klamydia inte har några synliga symtom. Det är just därför infektionen sprids så lätt och varför regelbunden testning är den enda pålitliga metoden. Nar symtom ändå förekommer varierar de mellan könen:</p>

          <h3>Symtom hos kvinnor</h3>
          <ul>
            <li>Ökad eller ovanlig flytning</li>
            <li>Sveda eller obehag vid urinering</li>
            <li>Blödning utanför menscykeln eller efter samlag</li>
            <li>Molande buksmärtor eller ömhet i nedre buken</li>
          </ul>

          <h3>Symtom hos män</h3>
          <ul>
            <li>Sveda eller smärta vid urinering</li>
            <li>Flöde eller sekret från penis</li>
            <li>Ömhet eller smärta i testiklarna</li>
          </ul>

          <p><strong>Viktigt:</strong> Obehandlad klamydia kan hos kvinnor leda till PID (bäckeninflammation, pelvic inflammatory disease), vilket i sin tur kan orsaka äggledarstopp och infertilitet. Hos män kan epididymit (bitestikelinflammation) uppstå. Testa dig om det finns minsta misstanke – det finns ingen anledning att chansa.</p>

          <h2>Hur fungerar ett klamydiatest hemma?</h2>
          <p>Processen är enkel och tar bara några minuter:</p>
          <ul>
            <li><strong>Provtagning:</strong> Beroende på test tar du antingen ett vaginalsvabb (svabb inuti slidan), ett urinprov (de första millilitrarna morgonurin) eller ett penissvabb. Instruktionerna medföljer och är tydliga.</li>
            <li><strong>Skicka provet:</strong> Svabben eller urinprovet placeras i det bifogade provröret och skickas med medföljer svarskuvert till ett ackrediterat laboratorium i Sverige.</li>
            <li><strong>PCR-analys:</strong> Laboratoriet analyserar provet med PCR-teknik (polymerase chain reaction), som är den känsligaste och mest tillförlitliga metoden för att påvisa klamydiabakterien Chlamydia trachomatis.</li>
            <li><strong>Digitalt svar:</strong> Du får ditt provsvar via en säker digital portal inom 2–5 vardagar.</li>
          </ul>
          <p>Diskretion är garanterad: paketet levereras i neutralt emballage utan avsändarens namn eller produktbeskrivning, och inget synligt på eventuell faktura eller kontoutdrag.</p>

          <h2>Vilka ska testa sig för klamydia?</h2>
          <p>Svenska smittskyddsmyndigheter och ungdomsmottagningar rekommenderar testning för följande grupper:</p>
          <ul>
            <li><strong>Alla sexuellt aktiva under 25 ar:</strong> Den svenska riktlinjen är att testa sig minst en gång per år, oavsett om du har symtom eller inte. Klamydia är vanligast i åldersgruppen 15–29 år.</li>
            <li><strong>Vid nytt sällskap</strong> eller byte av partner</li>
            <li><strong>Efter oskyddad sex</strong> med en person vars STI-status är okänd</li>
            <li><strong>Om du har symtom</strong> som beskrivs ovan</li>
            <li><strong>Gravida:</strong> Klamydia kan överföras till barnet vid förlossning och orsaka ögoninflammation och lunginflammation hos det nyfödda barnet</li>
          </ul>

          <h2>Vad händer om testet är positivt?</h2>
          <p>Ett positivt klamydiatest är inte ett katastrof – klamydia botas enkelt och effektivt med antibiotika:</p>
          <ul>
            <li><strong>Behandling:</strong> Vanligaste behandlingen är azitromycin som engångsdos (1 g) eller doxycyklin 100 mg två gånger dagligen i 7 dagar. Behandlingen ges på recept via din läkare eller via tjänster kopplade till hemtestet.</li>
            <li><strong>Smittspårning (lagkrav):</strong> Klamydia är en anmälningspliktig sjukdom enligt smittskyddslagen. Det innebär att du är skyldig att meddela din senaste sexualpartner (eller partners) om att de kan ha exponerats och bör testa sig. Behandlande läkare hjälper till med smittspårningen.</li>
            <li><strong>Behandla eventuell partner:</strong> För att undvika återinfektion ska även din partner behandlas innan ni har oskyddat sex igen.</li>
            <li><strong>Kontrollprov:</strong> Testa dig på nytt 3–4 veckor efter avslutad antibiotikabehandling för att bekräfta att infektionen är utläkt.</li>
          </ul>

          <h2>Klamydiatest hemma vs pa mottagning</h2>
          <p>Bada alternativen ger tillförlitliga svar – valet handlar om bekvämlighet och situation:</p>
          <div className="overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border border-gray-200 font-semibold"></th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Hemtest</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Mottagning / 1177</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">Diskretion</td>
                  <td className="p-3 border border-gray-200">Hög – ingen personal involverad</td>
                  <td className="p-3 border border-gray-200">Lägre – fysiskt besök krävs</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200 font-medium">Bekvämlighet</td>
                  <td className="p-3 border border-gray-200">Hög – testa nar det passar dig</td>
                  <td className="p-3 border border-gray-200">Lägre – kräver bokning och resa</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">Analysteknik</td>
                  <td className="p-3 border border-gray-200">PCR (känsligast, &gt;99 % noggrannhet)</td>
                  <td className="p-3 border border-gray-200">PCR (samma teknik)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200 font-medium">Svarstid</td>
                  <td className="p-3 border border-gray-200">2–5 vardagar</td>
                  <td className="p-3 border border-gray-200">1–3 vardagar (varierar)</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">Kostnad</td>
                  <td className="p-3 border border-gray-200">299–399 kr</td>
                  <td className="p-3 border border-gray-200">Gratis via ungdomsmottagning / 1177</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200 font-medium">Radgivning</td>
                  <td className="p-3 border border-gray-200">Via digital portal / support</td>
                  <td className="p-3 border border-gray-200">Omedelbar personlig rådgivning</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>Om du har akuta symtom, är gravid eller misstänker en mer komplex infektion rekommenderas alltid ett besök på mottagning. I alla andra fall är ett hemtest ett snabbt och tillförlitligt alternativ.</p>
        </div>

        <div className="my-8 bg-teal-50 rounded-xl p-5 flex flex-col sm:flex-row items-center gap-4">
          <div>
            <div className="font-bold text-teal-900">Testa klamydia diskret hemma</div>
            <div className="text-sm text-teal-700">PCR-analys på ackrediterat labb – diskret leverans – svar inom 2–5 dagar</div>
          </div>
          <Link href="/sti-tester/" className="shrink-0 bg-teal-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-teal-700 transition-colors">
            Jämför Sveriges bästa STI-tester
          </Link>
        </div>

        <FaqAccordion items={faqs} title="Vanliga frågor om klamydiatest hemma" />
      </main>
      <Footer />
    </>
  );
}
