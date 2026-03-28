import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FaqAccordion from "@/components/FaqAccordion";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "STI-testning Hemma – Diskret, Snabbt och Enkelt",
  description: "Komplett guide till STI-testning hemma. Vilka könssjukdomar kan testas? Hur diskret är det? Hur snabbt får man svar? Allt du behöver veta.",
  alternates: { canonical: "https://www.testahemma.se/guider/sti-testa-hemma/" },
};

const faqs = [
  { question: "Hur lång tid efter sex kan man testa sig?", answer: "Det beror på vilken STI du misstänker. Klamydia/gonorré: vänta minst 1–2 veckor. Syfilis: 3–6 veckor för säkert svar. HIV: 18–20 dagar med 4:e generationens test. Herpes IgG: 3–12 veckor. Testa för tidigt ger falskt negativa svar." },
  { question: "Kan man ha könssjukdomar utan symtom?", answer: "Ja – de flesta könssjukdomar ger inga eller otydliga symtom. Upp till 70 % av klamydiainfektioner är asymtomatiska. Det är en av de viktigaste anledningarna att testa sig regelbundet vid nya eller osäkra sexuella kontakter." },
  { question: "Är hemma-STI-tester lika pålitliga som kliniktest?", answer: "Moderna hemtester som använder PCR-teknik (för klamydia/gonorré) och 4:e generationens serologiska test (för HIV) är kliniskt likvärdiga med sjukhustester. Provtagningstekniken är avgörande – följ instruktionerna noggrant." },
  { question: "Vad händer om jag testar positivt?", answer: "Kontakta omedelbart din vårdcentral, ungdomsmottagning eller en STI-mottagning. De flesta STI (klamydia, gonorré, syfilis) behandlas effektivt med antibiotika. HIV behandlas med antiretrovirala läkemedel som ger nästan normal livslängd." },
  { question: "Kan man testa sig för flera STI samtidigt?", answer: "Ja. De flesta kompletta STI-paneler testar för klamydia, gonorré, HIV, syfilis, hepatit B och C i ett och samma kit. Vissa paneler inkluderar även herpes, HPV och mykoplasma genitalium. En komplett panel rekommenderas framför enstaka tester om du vill ha en helhetsbild." },
  { question: "Täcks hemma-STI-tester av högkostnadsskyddet?", answer: "Nej, hemma-STI-tester är egenfinansierade och ingår inte i högkostnadsskyddet. Däremot är testning via ungdomsmottagningar (upp till 25 år) och STI-mottagningar kostnadsfri i de flesta regioner. Klamydia- och gonorrétestning via 1177 är gratis i flera regioner. Hemtester kostar vanligtvis 500–2 000 kr beroende på antal markörer." },
];

export default function StiGuide() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "STI-testning hemma – diskret, snabbt och enkelt",
    description: "Komplett guide till STI-testning hemma. Vilka könssjukdomar kan testas? Hur diskret är det? Hur snabbt får man svar?",
    datePublished: "2026-01-15",
    dateModified: "2026-03-28",
    author: { "@type": "Person", name: "Erik Svensson" },
    publisher: { "@type": "Organization", name: "Testahemma.se" },
  };

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <BreadcrumbNav items={[{ name: "Hem", href: "/" }, { name: "Guider", href: "/guider/" }, { name: "STI-testning hemma", href: "/guider/sti-testa-hemma/" }]} />
        <div className="text-xs text-gray-400 mb-2">Granskad av Erik Svensson, legitimerad läkare &bull; Uppdaterad mars 2026</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">STI-testning hemma – diskret, snabbt och enkelt</h1>
        <MedicalDisclaimer />
        <div className="prose-guide">
          <p>
            Att testa sig för könssjukdomar är ett ansvarsfullt och viktigt beslut. Moderna hemtester gör det möjligt att testa sig diskret hemma, utan att besöka en klinik eller en läkare. Provtagningen tar bara 10–15 minuter och svaret kommer digitalt inom ett par dagar.
          </p>
          <p>
            Varje år rapporteras tiotusentals fall av klamydia i Sverige, och mörkertalet är stort eftersom de flesta infektioner är asymtomatiska. Obehandlade STI kan leda till allvarliga komplikationer som infertilitet, kronisk smärta och ökad risk för andra infektioner. Regelbunden testning är det effektivaste sättet att skydda sig själv och sina partners.
          </p>

          <h2>Vilka STI kan testas hemma?</h2>
          <p>De flesta vanliga könssjukdomar kan testas med ett hemkit:</p>
          <ul>
            <li><strong>Klamydia</strong> – vanligaste STI i Sverige, ofta symtomfri</li>
            <li><strong>Gonorré</strong> – ökande prevalens, antibiotikaresistens ett problem</li>
            <li><strong>Syfilis</strong> – återkommer i Sverige, testad med blodprov</li>
            <li><strong>HIV 1+2</strong> – 4:e generationens test, svar från dag 18 efter exponering</li>
            <li><strong>Herpes simplex typ 1 och 2</strong> – IgG-antikroppstest</li>
            <li><strong>HPV</strong> – högrisktyper kopplade till livmoderhalscancer</li>
            <li><strong>Hepatit B och C</strong> – blodburna virus</li>
            <li><strong>Mykoplasma genitalium</strong> – vanlig orsak till uretrit, ofta förbisedd</li>
          </ul>

          <h2>Hur fungerar ett hemma-STI-test?</h2>
          <p>Processen är enkel och tar 10–15 minuter:</p>
          <ul>
            <li>Beställ ett kit online – levereras i diskret, neutralt paket</li>
            <li>Ta prov hemma – urinprov och/eller svabb (penis, vagina, ändtarm eller svalg)</li>
            <li>Posta med förbetalt svarskuvert</li>
            <li>Svar digitalt via säker portal med engångskod inom 1–3 dagar</li>
          </ul>
          <p>
            Provtypen beror på vilka infektioner du testar för. Klamydia och gonorré testas med urinprov eller svabb, medan HIV, syfilis och hepatit kräver ett blodprov via fingerblodprov. Vissa kompletta paneler kombinerar båda provtyperna i samma kit.
          </p>

          <h2>Inkubationstider per STI</h2>
          <p>
            En av de vanligaste frågorna vid STI-testning är hur länge man ska vänta efter en möjlig exponering innan testet ger ett tillförlitligt resultat. Testar du dig för tidigt riskerar du ett falskt negativt svar – det vill säga att testet inte upptäcker en infektion som faktiskt finns.
          </p>

          <h3>Klamydia och gonorré</h3>
          <p>
            Inkubationstid: <strong>1–2 veckor</strong>. Både klamydia och gonorré detekteras med PCR-teknik som letar efter bakteriens DNA i urin eller svabbprov. Vänta minst 7 dagar efter misstänkt exponering – optimalt 14 dagar – för att minimera risken för falskt negativa resultat.
          </p>

          <h3>Syfilis</h3>
          <p>
            Inkubationstid: <strong>3–6 veckor</strong>. Syfilis testas med serologiska metoder som mäter antikroppar i blodet. Antikroppar utvecklas 3–6 veckor efter smitta. Ett negativt resultat innan dess utesluter inte infektion. Vid stark misstanke bör du testa igen efter 3 månader.
          </p>

          <h3>HIV</h3>
          <p>
            Inkubationstid: <strong>18–90 dagar</strong> beroende på testtyp. 4:e generationens kombinationstest (ag/ab) kan ge positivt svar redan efter 18–20 dagar. Äldre antikroppstester kan kräva upp till 3 månader. Kontrollera alltid vilken testgeneration ditt hemtest använder. Ett negativt test efter 6 veckor med 4:e generationens test betraktas som högst tillförlitligt.
          </p>

          <h3>Herpes (HSV-1 och HSV-2)</h3>
          <p>
            Inkubationstid för antikroppar: <strong>3–12 veckor</strong>. IgG-antikroppstest kan ge falskt negativa resultat under de första veckorna efter smitta. Vid aktiva blåsor kan viruset också detekteras med PCR-svabb direkt från blåsan, vilket ger snabbare svar men kräver synliga symtom.
          </p>

          <h3>Hepatit B och C</h3>
          <p>
            Inkubationstid hepatit B: <strong>4–10 veckor</strong>. Inkubationstid hepatit C: <strong>2–26 veckor</strong> (typiskt 6–9 veckor). Antikroppstester för hepatit C kan ta upp till 6 månader att bli positiva i sällsynta fall. Vid stark misstanke rekommenderas uppföljningstest efter 3 och 6 månader.
          </p>

          <h3>Mykoplasma genitalium</h3>
          <p>
            Inkubationstid: <strong>1–3 veckor</strong>. Testas med PCR-teknik på urinprov eller svabb, liknande klamydia och gonorré. Mykoplasma genitalium är ofta svårare att detektera och kräver specifika PCR-analyser som inte alltid ingår i standardpaneler.
          </p>

          <h2>Smittvägar och riskbedömning</h2>
          <p>
            Olika STI sprids på olika sätt, och risken för smitta varierar beroende på typ av sexuell kontakt. Att förstå smittvägarna hjälper dig bedöma din egen risk och avgöra vilka tester som är relevanta.
          </p>

          <h3>Sexuell överföring</h3>
          <p>
            De flesta STI sprids genom slemhinnekontakt vid vaginalt, analt eller oralt sex. Risken för överföring varierar kraftigt:
          </p>
          <ul>
            <li><strong>Klamydia och gonorré</strong> – sprids effektivt vid vaginalt, analt och oralt sex. Risk per oskyddad kontakt: 20–50 %</li>
            <li><strong>Syfilis</strong> – sprids vid kontakt med syfilitiska sår (chancre). Mest smittsam i primär- och sekundärstadiet</li>
            <li><strong>HIV</strong> – sprids via blod, sperma, slidsekret och bröstmjölk. Risk per oskyddat analt sex: 0,5–3 %. Per oskyddat vaginalt sex: 0,04–0,08 % per tillfälle</li>
            <li><strong>Herpes</strong> – sprids via direkt hudkontakt med infekterat område, även utan synliga blåsor (asymtomatisk viral shedding)</li>
            <li><strong>HPV</strong> – sprids via hud-mot-hud-kontakt i genitalområdet. Kondom minskar risken men eliminerar den inte helt</li>
          </ul>

          <h3>Blodburen smitta</h3>
          <p>
            Hepatit B, hepatit C och HIV kan spridas via blod – genom delade nålar, oskyddad kontakt med infekterat blod eller från mor till barn vid förlossning. Hepatit B är betydligt mer smittsamt via blod än HIV. Om du har exponerats för blod från en okänd källa bör du testa för alla tre.
          </p>

          <h3>Riskfaktorer som ökar sannolikheten</h3>
          <ul>
            <li>Flera sexuella partners under kort tid</li>
            <li>Oskyddat sex (utan kondom)</li>
            <li>Analt sex utan kondom (högre risk för HIV och gonorré)</li>
            <li>Tidigare STI-infektion (indikerar riskbeteende och kan öka mottaglighet)</li>
            <li>Alkohol eller droger i samband med sex (leder ofta till sämre skyddsbeslut)</li>
            <li>Sexuell partner med okänd STI-status</li>
          </ul>

          <h2>Anonymitet och sekretess</h2>
          <p>
            Många undviker att testa sig på grund av rädsla för att resultatet ska bli känt. Med hemtestning kan du testa dig helt anonymt – men det finns viktiga skillnader mellan olika tjänster och vårdformer.
          </p>

          <h3>Hemtester – helt anonyma</h3>
          <p>
            Ledande aktörer som <Link href="/recension/testmottagningen/">Testmottagningen</Link> erbjuder testning utan krav på personnummer. Paketet saknar känslig information på utsidan och levereras som ett vanligt postpaket. Svaren levereras via en säker webbportal med engångskod – aldrig via e-post, sms eller brev. Resultatet registreras inte i din patientjournal.
          </p>

          <h3>Offentlig vård – sekretess men inte anonymitet</h3>
          <p>
            Testning via vårdcentral, ungdomsmottagning eller STI-mottagning dokumenteras i din journal och kopplas till ditt personnummer. Journalen skyddas av sträng sekretess enligt offentlighets- och sekretesslagen – endast behörig vårdpersonal har åtkomst. Testresultat delas aldrig med arbetsgivare, försäkringsbolag eller anhöriga utan ditt samtycke.
          </p>

          <h3>Smittskyddslagen – vad gäller juridiskt?</h3>
          <p>
            Vissa STI är anmälningspliktiga enligt smittskyddslagen: klamydia, gonorré, syfilis, HIV och hepatit B och C. Vid positivt resultat har du en lagstadgad skyldighet att informera sexuella partners (smittspårning). Testning och behandling för anmälningspliktiga STI är kostnadsfri inom den offentliga vården – inklusive läkemedel. Denna skyldighet gäller oavsett om du testade dig hemma eller på en klinik.
          </p>

          <h2>Hur diskret är hemma-STI-testning?</h2>
          <p>
            Paketet saknar känslig information på utsidan. Svaren levereras via en säker webbportal med engångskod, inte via e-post eller brev. Du behöver inte uppge personnummer, och resultatet registreras inte i någon journal. Se vår jämförelse av <Link href="/sti-tester/">bästa STI-tester hemma</Link> för aktuella alternativ.
          </p>

          <h2>Positiv? Nästa steg</h2>
          <p>
            Att få ett positivt testresultat kan kännas skrämmande, men de flesta STI är behandlingsbara och många är helt botbara. Här är vad du bör göra:
          </p>

          <h3>Steg 1: Kontakta vården</h3>
          <p>
            Boka tid på din vårdcentral, en STI-mottagning eller ungdomsmottagning (om du är under 25). Vid anmälningspliktiga sjukdomar (klamydia, gonorré, syfilis, HIV, hepatit B/C) är all behandling kostnadsfri. Du kan också ringa 1177 Vårdguiden för rådgivning.
          </p>

          <h3>Steg 2: Smittspårning</h3>
          <p>
            Vid anmälningspliktiga STI är du skyldig att medverka i smittspårning – det innebär att alla sexuella partners under den relevanta tidsperioden ska informeras och erbjudas testning. Vårdpersonalen hjälper dig med detta och kan kontakta partners anonymt om du föredrar det. Smittspårning är inte bestraffande – syftet är att bryta smittkedjor.
          </p>

          <h3>Steg 3: Behandling</h3>
          <p>
            Behandlingen varierar beroende på infektion:
          </p>
          <ul>
            <li><strong>Klamydia</strong> – enkelkur med antibiotika (doxycyklin i 7 dagar). Botbar. Kontrollprov efter 5 veckor</li>
            <li><strong>Gonorré</strong> – antibiotikainjektion plus tabletter. Botbar, men ökande antibiotikaresistens kräver resistensbestämning</li>
            <li><strong>Syfilis</strong> – penicillininjektion. Botbar i tidiga stadier. Behandlingstidens längd beror på stadium</li>
            <li><strong>HIV</strong> – antiretroviral behandling (ART) ger i dag nästan normal livslängd. Behandlingen ger omätbara virusnivåer, vilket innebär att du inte smittar vidare (U=U, undetectable = untransmittable)</li>
            <li><strong>Herpes</strong> – inte botbar, men antivirala läkemedel (aciklovir/valaciklovir) minskar och förkortar utbrott samt minskar smittsamheten</li>
            <li><strong>Hepatit B</strong> – kronisk form behandlas med antivirala läkemedel. Akut hepatit B läker ofta ut av sig själv</li>
            <li><strong>Hepatit C</strong> – botbar i över 95 % av fallen med moderna DAA-läkemedel (direct-acting antivirals). Behandlingstid: 8–12 veckor</li>
            <li><strong>Mykoplasma genitalium</strong> – antibiotika, men resistens är vanligt. Resistensbestämning rekommenderas före behandling</li>
          </ul>

          <h3>Steg 4: Uppföljning</h3>
          <p>
            De flesta bakteriella STI kräver kontrollprov efter avslutad behandling för att verifiera att infektionen är utläkt. Undvik sexuell kontakt under behandlingsperioden och tills kontrollprovet visar negativt resultat. Din behandlande läkare ger specifika instruktioner.
          </p>

          <h2>När bör du testa dig?</h2>
          <p>Du bör testa dig för STI om du:</p>
          <ul>
            <li>Haft oskyddat sex med en ny partner</li>
            <li>Fått veta att en sexuell partner testat positivt</li>
            <li>Har symtom som flytningar, sveda, utslag eller sår</li>
            <li>Vill ha ett negativt test innan oskyddat sex med en ny partner</li>
            <li>Haft flera sexuella partners under de senaste 12 månaderna</li>
            <li>Planerar graviditet – obehandlade STI kan påverka fertilitet och fosterhälsa</li>
          </ul>
        </div>

        <div className="my-8 bg-teal-50 rounded-xl p-5 flex flex-col sm:flex-row items-center gap-4">
          <div>
            <div className="font-bold text-teal-900">Beställ ett diskret STI-test</div>
            <div className="text-sm text-teal-700">Svar inom 1–3 dagar – anonymt och säkert</div>
          </div>
          <Link href="/sti-tester/" className="shrink-0 bg-teal-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-teal-700 transition-colors">
            Se STI-tester
          </Link>
        </div>

        <FaqAccordion items={faqs} title="Vanliga frågor om STI-testning hemma" />
      </main>
      <Footer />
    </>
  );
}
