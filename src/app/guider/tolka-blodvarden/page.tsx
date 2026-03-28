import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FaqAccordion from "@/components/FaqAccordion";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tolka Dina Blodvärden – Vad Betyder Resultaten?",
  description: "Förstå dina blodprovsresultat. Lär dig vad hemoglobin, CRP, ferritin, TSH, kolesterol och B12 betyder, vilka nivåer som är normala och när du bör agera.",
  alternates: { canonical: "https://www.testahemma.se/guider/tolka-blodvarden/" },
};

const values = [
  { name: "Hemoglobin (Hb)", normal: "Kv: 117–153 g/L | Män: 134–170 g/L", low: "Järnbristanemi, B12-brist, blodförlust", high: "Dehydrering, rökning, polycytemi" },
  { name: "CRP (inflammation)", normal: "Under 5 mg/L", low: "Inga symtom", high: "Infektion, inflammation, autoimmun sjukdom" },
  { name: "Ferritin (järndepåer)", normal: "Kv: 13–150 µg/L | Män: 30–400 µg/L", low: "Järnbrist (tidigt stadium)", high: "Inflammation, leversjukdom, hemokromatos" },
  { name: "TSH (sköldkörtel)", normal: "0,4–4,0 mIU/L", low: "Hypertyreos (överfunktion)", high: "Hypothyreos (underfunktion)" },
  { name: "LDL-kolesterol", normal: "Under 3,0 mmol/L", low: "Sällan ett problem", high: "Ökad risk för hjärt-kärlsjukdom" },
  { name: "Glukos (fasteblodsocker)", normal: "3,9–6,0 mmol/L", low: "Hypoglykemi", high: "Prediabetes (6,1–6,9) / diabetes (7,0+)" },
  { name: "HbA1c (3-mån-socker)", normal: "Under 42 mmol/mol (6 %)", low: "Sällan ett problem", high: "Prediabetes (42–47) / diabetes (48+)" },
  { name: "B12-vitamin", normal: "200–600 pmol/L", low: "Brist – trötthet, nervproblem", high: "Leversjukdom, B12-tillskott" },
  { name: "D-vitamin (25-OH)", normal: "50–125 nmol/L", low: "Brist – trötthet, immunpåverkan", high: "Toxicitet (sällsynt, vanl. vid höga tillskott)" },
  { name: "Kreatinin (njurfunktion)", normal: "Kv: 45–90 µmol/L | Män: 60–110 µmol/L", low: "Låg muskelmassa", high: "Nedsatt njurfunktion" },
];

const faqs = [
  {
    question: "Vad innebär det om ett värde är 'utanför referensintervallet'?",
    answer: "Referensintervallet representerar den normala spridningen hos 95 % av friska individer. Det betyder att 5 % av helt friska personer har ett värde utanför intervallet per definition. Att ett enda värde avviker marginellt är inte automatiskt alarmerande – det beror på hur mycket det avviker, vilka symtom du har och om det förändrats över tid. Kontakta läkare vid avvikande svar för att sätta resultatet i klinisk kontext.",
  },
  {
    question: "Varför skiljer sig referensvärden åt mellan könen och åldrar?",
    answer: "Fysiologiska skillnader påverkar många blodvärden. Hemoglobin är lägre hos kvinnor på grund av menstruation och hormoner. Testosteron skiljer sig dramatiskt. Ferritin påverkas av menscykeln. Kreatinin speglar muskelmassa som är köns- och åldersberoende. Njurfunktion (eGFR) sjunker naturligt med åldern. Se alltid till att rätt referensintervall används för din ålder och ditt kön.",
  },
  {
    question: "Hur tolkar jag CRP-värdet?",
    answer: "CRP under 5 mg/L anses normalt. CRP 5–10 mg/L tyder på mild inflammation – kan orsakas av träning, förkylning eller stress. CRP 10–100 mg/L tyder på mer signifikant inflammation – bakterieinfektion, autoimmun reaktion. CRP över 100 mg/L är ett tecken på allvarlig infektion eller inflammation och kräver akut medicinsk bedömning. Enstaka högt CRP utan symtom bör upprepas.",
  },
  {
    question: "Vad är skillnaden mellan blodsocker (glukos) och HbA1c?",
    answer: "Fasteblodsocker mäter glukosnivån vid provtagningstillfället – ett ögonblicksvärde. HbA1c (glykerat hemoglobin) mäter den genomsnittliga blodsockernivån under de senaste 2–3 månaderna och är ett mer stabilt mått för diabetesdiagnostik och uppföljning. HbA1c kräver ingen fasta och påverkas inte av vad du ätit samma dag.",
  },
  {
    question: "Vad innebär lågt ferritin?",
    answer: "Ferritin är kroppens järnlagringsprotein. Lågt ferritin (under 20 µg/L) tyder på tömt järndepåer – det tidiga stadiet av järnbrist, innan hemoglobin sjunker. Symtom kan inkludera trötthet, håravfall och nedsatt koncentration trots normalt hemoglobin. Lågt ferritin hos menstruerande kvinnor är vanligt. Behandling: järntillskott och/eller koständring – men järnbristtrötthet bör alltid utredas av läkare för att hitta grundorsaken.",
  },
  {
    question: "När bör jag söka vård baserat på mina hemtestresultat?",
    answer: "Söka vård direkt: CRP över 50 mg/L med feber eller allvarliga symtom. Glukos över 15 mmol/L. Hemoglobin under 100 g/L. TSH under 0,1 eller över 10 mIU/L. Kontakta läkare inom en vecka: Värden måttligt utanför referensintervallet. Positivt STI-test. PSA förhöjt över åldersgränsen. Normalt: Boka rutinbesök och ta med dina resultat som underlag för att diskutera trender och eventuella åtgärder.",
  },
];

export default function TolkaBlodvardenPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Tolka dina blodvärden – vad betyder resultaten?",
    description: "Förstå dina blodprovsresultat. Vad hemoglobin, CRP, ferritin, TSH, kolesterol och blodsocker betyder och vilka nivåer som är normala.",
    datePublished: "2026-01-01",
    dateModified: "2026-03-28",
    author: { "@type": "Person", name: "Anna Lindström" },
    publisher: { "@type": "Organization", name: "Testahemma.se" },
  };

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <BreadcrumbNav
          items={[
            { name: "Hem", href: "/" },
            { name: "Guider", href: "/guider/" },
            { name: "Tolka blodvärden", href: "/guider/tolka-blodvarden/" },
          ]}
        />
        <div className="text-xs text-gray-400 mb-2">
          Granskad av Anna Lindström, biomedicinsk analytiker &bull; Uppdaterad mars 2026
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Tolka dina blodvärden – vad betyder resultaten?
        </h1>
        <MedicalDisclaimer />
        <div className="prose-guide">
          <p>
            Att förstå sina blodprovsresultat kan kännas överväldigande. Siffror och förkortningar fylls av referensvärden, pilar och oklara kommentarer. Den här guiden förklarar de vanligaste blodvärdena på ett lättförståeligt sätt – vad de mäter, vad avvikande värden kan tyda på och när du bör agera.
          </p>
          <p>
            Vill du ta ett hemblodtest? Se vår guide till <Link href="/blodtester/">bästa blodtester hemma</Link>.
          </p>

          <h2>Vanliga blodvärden och vad de mäter</h2>
          <p>
            Tabellen nedan visar referensintervall och vad höga eller låga värden kan indikera. Alla avvikelser bör diskuteras med läkare – tabellen är ett orientieringsverktyg, inte en diagnos.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm my-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600 text-left">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">Värde</th>
                <th scope="col" className="px-4 py-3 font-semibold">Normalintervall</th>
                <th scope="col" className="px-4 py-3 font-semibold hidden md:table-cell">Lågt kan tyda på</th>
                <th scope="col" className="px-4 py-3 font-semibold hidden md:table-cell">Högt kan tyda på</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {values.map((v, i) => (
                <tr key={v.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="px-4 py-3 font-semibold text-gray-900">{v.name}</td>
                  <td className="px-4 py-3 text-gray-600">{v.normal}</td>
                  <td className="px-4 py-3 text-gray-500 hidden md:table-cell">{v.low}</td>
                  <td className="px-4 py-3 text-gray-500 hidden md:table-cell">{v.high}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-guide">
          <h2>Djupdykning: de vanligaste markörerna</h2>

          <h3>Hemoglobin – syretransport i blodet</h3>
          <p>
            Hemoglobin är proteinet i röda blodkroppar som binder och transporterar syre. Lågt hemoglobin (anemi) ger trötthet, andningssvårigheter och blek hud. Den vanligaste orsaken är järnbrist, men B12- och folsyrabrist, kronisk sjukdom och blödningar är andra orsaker. Högt hemoglobin ses vid rökning, höghöjdsvistelse eller som tecken på polycytemia vera.
          </p>

          <h3>CRP – inflammationsmarkör</h3>
          <p>
            C-reaktivt protein produceras av levern som svar på inflammation. Det är kroppens akuta-fas-reaktant och stiger snabbt (inom 6–12 timmar) vid infektion, vävnadsskada eller autoimmun aktivering. CRP är ett känsligt men ospecifikt mått – det talar om att inflammation föreligger, men inte var eller varför. Upprepade mätningar och symtomkorrelation är nödvändiga för tolkning.
          </p>

          <h3>Ferritin – järndepåernas status</h3>
          <p>
            Ferritin är ett lagerprotein för järn och speglar kroppens totala järndepåer. Det sjunker innan hemoglobin påverkas och är därför den känsligaste markören för tidig järnbrist. Lågt ferritin (under 20 µg/L) är vanligt hos menstruerande kvinnor och vegetarianer. Högt ferritin kan tyda på inflammation (ferritin är också ett akuta-fas-protein) eller järnöverskott.
          </p>

          <h3>TSH – sköldkörtelns styrning</h3>
          <p>
            TSH (tyrotropin) är hypofysens signalhormon till sköldkörteln. Högt TSH = hypofysen kämpar för att stimulera en trög sköldkörtel = hypothyreos. Lågt TSH = hypofysen dämpar sköldkörteln för att den producerar för mycket = hypertyreos. TSH är den känsligaste screeningmarkören för sköldkörtelrubbningar och ska kombineras med fritt T4 vid avvikelse. Läs mer i vår guide <Link href="/guider/hormoner-och-halsa/">hormoner och hälsa</Link>.
          </p>

          <h3>HbA1c – genomsnittligt blodsocker</h3>
          <p>
            HbA1c mäter hur stor andel av hemoglobinet som är glykerat (sockerbundet). Eftersom röda blodkroppar lever ca 120 dagar speglar HbA1c blodsockerkontrollen under 2–3 månader. HbA1c under 42 mmol/mol är normalt; 42–47 = prediabetes; 48 och över = diabetes. Kräver ingen fasta och är det primära måttet för diabetesdiagnostik och uppföljning.
          </p>

          <h3>Vitamin D – immunförsvar och benstyrka</h3>
          <p>
            D-vitamin syntetiseras i huden via solljus och reglerar kalciumupptag, immunfunktion och muskelstyrka. Brist är extremt vanligt i Sverige under vinterhalvåret – upp till 50 % av befolkningen har otillräckliga nivåer. Optimal nivå: 75–125 nmol/L. Under 50 nmol/L anses brist. Tillskott 1 000–2 000 IE/dag är säkert för de flesta – men mät nivån för att dosera rätt.
          </p>

          <h2>Hur tar du nästa steg?</h2>
          <p>
            Vid avvikande värden: ta med ditt testresultat till läkaren som ett underlag. Ange att det är ett hemtest analyserat av ett ackrediterat laboratorium. De flesta läkare välkomnar proaktiva patienter med dokumenterade värden – det sparar tid och ger ett bättre samtal om din hälsa.
          </p>
          <p>
            Vid normala värden: notera dina baslinjevärden för framtida jämförelse. Trenden över tid är ofta viktigare än ett enskilt mätvärde.
          </p>
        </div>

        <div className="my-8 bg-teal-50 rounded-xl p-5 flex flex-col sm:flex-row items-center gap-4">
          <div>
            <div className="font-bold text-teal-900">Ta ett komplett blodtest hemma</div>
            <div className="text-sm text-teal-700">10–25 markörer – digitala svar inom 3–5 dagar</div>
          </div>
          <Link
            href="/blodtester/"
            className="shrink-0 bg-teal-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-teal-700 transition-colors"
          >
            Se blodtester
          </Link>
        </div>

        <FaqAccordion items={faqs} title="Vanliga frågor om blodvärden" />
      </main>
      <Footer />
    </>
  );
}
