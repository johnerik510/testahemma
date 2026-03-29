import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import FaqAccordion from "@/components/FaqAccordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kolesterolvärden – Normalt, Högt och Farligt",
  description: "Komplett guide till kolesterolvärden. Vad är normalt LDL, HDL och totalt kolesterol? Vad orsakar högt kolesterol och hur sänker du det?",
  alternates: { canonical: "https://www.testahemma.se/guider/kolesterol-varden/" },
};

const faqs = [
  {
    question: "Vad är skillnaden mellan LDL och HDL?",
    answer: "LDL-kolesterol ('dåligt') transporterar kolesterol från levern till kroppens celler och till artärväggar där det kan bilda plack (ateroskleros). HDL-kolesterol ('bra') transporterar kolesterol från artärerna tillbaka till levern för nedbrytning och eliminering. Högt LDL och lågt HDL ökar risken för hjärtinfarkt och stroke. Kvoten totalt kolesterol/HDL är ett bättre riskverktyg än LDL ensamt.",
  },
  {
    question: "Kan kost sänka kolesterolet?",
    answer: "Ja, men effekten är begränsad – typiskt 10–15 % LDL-sänkning. De mest effektiva kostinsatserna: minska mättat fett (kött, smör, ost), ersätt med omättat fett (olivolja, avokado, nötter), öka lösliga fibrer (havre, bönor, psylliumskal, linsfrö) och ät mer fet fisk rik på omega-3. Plansteroler (i margarin och funktionella livsmedel) sänker LDL med ytterligare 5–10 %. Vid LDL över 5,0 mmol/L trots livsstilsförändringar behövs vanligtvis statiner.",
  },
  {
    question: "Vad är triglycerider och när är det farligt?",
    answer: "Triglycerider är blodets primära fettform och lagras i fettvävnad som energireserv. Förhöjda triglycerider (over 1,7 mmol/L) ökar risk för hjärt-kärlsjukdom och pankreatit (bukspottkörteln). Vanliga orsaker: övervikt, typ 2-diabetes, alkohol, socker- och kolhydratrik kost. Triglycerider svarar snabbt på livsstilsförändringar – minskat socker, alkohol och raffinerade kolhydrater.",
  },
  {
    question: "Hur ofta bör man mäta sitt kolesterol?",
    answer: "Friska vuxna under 40 år med inga riskfaktorer: var 5:e år. Vuxna 40–75 år: var 3–5:e år. Vid förhöjda värden, diabetes, hypertoni, rökning eller ärftlighet: var 1–2:e år. Om du behandlas med statiner: 3 månader efter insättning och sedan 1 gång per år. Ett hemtest är ett praktiskt sätt att följa sin trend mellan läkarbesök.",
  },
  {
    question: "Vad är familjär hyperkolesterolemi?",
    answer: "Familjär hyperkolesterolemi (FH) är en ärftlig sjukdom (autosomal dominant) som orsakar kraftigt förhöjt LDL redan från födseln – typiskt 5,0–10,0 mmol/L obehandlat. Drabbar ca 1 av 200–500 personer. Orsakas oftast av mutation i LDL-receptorgenen. Obehandlad FH ger hjärtinfarkt tidigt i livet (30–50 år). Diagnosen ställs med blodfett + familjehistoria + genetiskt test. Behandling: statiner + ev. PCSK9-hämmare.",
  },
  {
    question: "Kan statiner orsaka biverkningar?",
    answer: "Muskelvärk är den vanligaste biverkningen (5–10 % av användare). Allvarlig muskelnedbrytning (rabdomyolys) är sällsynt. Mild leverpåverkan ses hos en del. Vissa studier antyder lätt ökad diabetesrisk. De flesta tolererar statiner väl. Vid besvär: prova ett annat statinpreparat (de skiljer sig i biverkningsmönster) eller byt dos. Diskutera alltid med din läkare.",
  },
];

export default function KolesterolVardenPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Kolesterolvärden – vad är normalt och farligt?",
    description: "Komplett guide till kolesterolvärden. Vad är normalt LDL, HDL och totalt kolesterol? Hur sänker du det?",
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
            { name: "Kolesterolvärden", href: "/guider/kolesterol-varden/" },
          ]}
        />
        <div className="text-xs text-gray-400 mb-2">
          Granskad av Anna Lindström, biomedicinsk analytiker &bull; Uppdaterad mars 2026
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Kolesterolvärden – vad är normalt och farligt?
        </h1>
        <MedicalDisclaimer />
        <div className="prose-guide">
          <p>
            Högt kolesterol är tyst – det ger inga symtom men ökar risken för hjärtinfarkt och stroke dramatiskt. Hjärt-kärlsjukdom är fortfarande den vanligaste dödsorsaken i Sverige och en av de mest utbredda <a href="https://folksjukdomar.se" target="_blank" rel="noopener">folksjukdomarna</a> – och högt LDL-kolesterol är en av de mest påverkbara riskfaktorerna. Det enda sättet att veta var du står är ett blodprov.
          </p>
          <p>
            Den här guiden förklarar vad kolesterolvärdena betyder, vilka nivåer som är normala respektive farliga, och vad du kan göra för att påverka dina värden.
          </p>

          <h2>Vad är kolesterol?</h2>
          <p>
            Kolesterol är ett fettliknande ämne (sterol) som är livsnödvändigt för kroppen – det ingår i alla cellmembran, är råmaterial för könshormonerna och D-vitamin, och behövs för att bilda gallsyror. Levern producerar ungefär 75 % av kroppens kolesterol; resterande 25 % kommer från kosten.
          </p>
          <p>
            Kolesterol transporteras i blodet bundet till lipoproteiner – proteinkomplex som varierar i täthet och funktion. De viktigaste är LDL (Low-Density Lipoprotein) och HDL (High-Density Lipoprotein).
          </p>

          <h2>Referensvärden för kolesterol</h2>
          <p>
            Följande gränsvärden används av svenska och europeiska riktlinjer:
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm my-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-4 py-3 text-left font-semibold text-gray-700">Värde</th>
                <th scope="col" className="px-4 py-3 text-left font-semibold text-green-700">Optimalt</th>
                <th scope="col" className="px-4 py-3 text-left font-semibold text-yellow-700">Gränsfall</th>
                <th scope="col" className="px-4 py-3 text-left font-semibold text-red-700">Förhöjt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { name: "Totalt kolesterol", opt: "Under 5,0 mmol/L", border: "5,0–6,2", high: "Över 6,2" },
                { name: "LDL ('dåligt')", opt: "Under 3,0 mmol/L", border: "3,0–4,1", high: "Över 4,1" },
                { name: "HDL ('bra') – Män", opt: "Över 1,0 mmol/L", border: "0,9–1,0", high: "Under 0,9" },
                { name: "HDL ('bra') – Kvinnor", opt: "Över 1,3 mmol/L", border: "1,1–1,3", high: "Under 1,1" },
                { name: "Triglycerider", opt: "Under 1,7 mmol/L", border: "1,7–5,6", high: "Över 5,6" },
                { name: "Kolesterol/HDL-kvot", opt: "Under 4,0", border: "4,0–5,0", high: "Över 5,0" },
              ].map((r, i) => (
                <tr key={r.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="px-4 py-3 font-medium text-gray-900">{r.name}</td>
                  <td className="px-4 py-3 text-green-700">{r.opt}</td>
                  <td className="px-4 py-3 text-yellow-700">{r.border}</td>
                  <td className="px-4 py-3 text-red-700">{r.high}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-guide">
          <p>
            Dessa gränsvärden är generella riktlinjer. Vid befintlig hjärt-kärlsjukdom, diabetes eller familjär hyperkolesterolemi sätts lägre LDL-mål (under 1,8–2,6 mmol/L beroende på risknivå).
          </p>

          <h2>Vad orsakar högt kolesterol?</h2>

          <h3>Kost och livsstil</h3>
          <p>
            Mättat fett från kött, smör, ost och kokosolja höjer LDL mest. Transfetter (delvis härdade vegetabiliska oljor, fortfarande förekommande i importerade livsmedel) höjer LDL och sänker HDL. Socker och raffinerade kolhydrater höjer triglycerider. Fysisk inaktivitet sänker HDL.
          </p>

          <h3>Genetik</h3>
          <p>
            Familjär hyperkolesterolemi (FH) drabbar ca 1 av 200–500 personer och ger kraftigt förhöjt LDL (ofta 5–10 mmol/L) oavsett kost. Misstänks vid LDL över 5,0 mmol/L utan uppenbar livsstilsorsak, eller vid tidig hjärt-kärlsjukdom i familjen. Kräver medicinsk behandling.
          </p>

          <h3>Underliggande sjukdomar</h3>
          <p>
            Hypothyreos (låg sköldkörtelaktivitet), typ 2-diabetes, kronisk njursjukdom och leversjukdom kan alla ge sekundär hyperkolesterolemi. Att åtgärda grundorsaken normaliserar ofta lipidprofilen.
          </p>

          <h2>Hur sänker du ditt kolesterol?</h2>

          <h3>Koständringar</h3>
          <ul>
            <li>Ersätt mättat fett med omättat fett: olivolja, rapsolja, avokado, nötter och fisk</li>
            <li>Öka lösliga fibrer: havregryn, bönor, linser, äpplen och psylliumfröskal</li>
            <li>Ät fet fisk 2–3 gånger per vecka för omega-3-effekten på triglycerider</li>
            <li>Minska socker och vitt bröd som höjer triglycerider</li>
            <li>Plansteroler (2 g/dag) via berikade livsmedel sänker LDL med 7–10 %</li>
          </ul>

          <h3>Fysisk aktivitet</h3>
          <p>
            Regelbunden aerob träning (150 min/vecka med måttlig intensitet) höjer HDL med 5–10 % och sänker triglycerider. Viktminskning på 5–10 % förbättrar hela lipidprofilen markant.
          </p>

          <h3>Läkemedel</h3>
          <p>
            Statiner (simvastatin, atorvastatin, rosuvastatin) är förstahandsvalet vid medicinsk behandling och sänker LDL med 30–55 %. PCSK9-hämmare (injektioner var 2–4:e vecka) sänker LDL ytterligare 50–60 % och används vid FH eller statinintolerans. Behandlingsbeslut fattas alltid av läkare baserat på total kardiovaskulär risk – inte enbart kolesterolvärdet.
          </p>

          <p>
            Testa ditt kolesterol hemma – se <Link href="/kolesteroltester/">bästa kolesteroltester hemma</Link> för aktuella alternativ och priser.
          </p>
        </div>

        <div className="my-8 bg-teal-50 rounded-xl p-5 flex flex-col sm:flex-row items-center gap-4">
          <div>
            <div className="font-bold text-teal-900">Testa ditt kolesterol hemma</div>
            <div className="text-sm text-teal-700">LDL, HDL och triglycerider – svar inom 3–5 dagar</div>
          </div>
          <Link
            href="/kolesteroltester/"
            className="shrink-0 bg-teal-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-teal-700 transition-colors"
          >
            Se kolesteroltester
          </Link>
        </div>

        <FaqAccordion items={faqs} title="Vanliga frågor om kolesterol" />
      </main>
      <Footer />
    </>
  );
}
