import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FaqAccordion from "@/components/FaqAccordion";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sköldkörteltest Hemma April 2026 – TSH, T4 och symtom",
  description: "Sköldkörtelproblem drabbar 1 av 10 svenskar. Testa TSH och T4 hemma med ett enkelt blodprov. Guide till symtom, referensvärden och bästa testerna.",
  alternates: { canonical: "https://www.testahemma.se/guider/sköldkörteltest-hemma/" },
  openGraph: {
    title: "Sköldkörteltest Hemma April 2026 – TSH, T4 och symtom",
    description: "Sköldkörtelproblem drabbar 1 av 10 svenskar. Testa TSH och T4 hemma med ett enkelt blodprov. Guide till symtom, referensvärden och bästa testerna.",
    url: "https://www.testahemma.se/guider/sköldkörteltest-hemma/",
  },
};

const faqs = [
  {
    question: "Vad är TSH och vad mäter det?",
    answer: "TSH (tyreoideastimulerande hormon) är ett signalhormon som produceras av hypofysen och styr sköldkörtelns aktivitet. Högt TSH innebär att hypofysen försöker stimulera en trög sköldkörtel – ett tecken på hypotyreos. Lågt TSH innebär att hypofysen bromsar en överaktiv sköldkörtel – ett tecken på hypertyreos. TSH är det känsligaste måttet för att screena sköldkörtelfunktionen.",
  },
  {
    question: "Kan man ha sköldkörtelproblem med normalt TSH?",
    answer: "Ja. I tidiga stadier eller vid subkliniska former kan TSH ligga inom referensintervallet trots att T3 eller T4 avviker. Symtom kan också kvarstå trots normalt TSH, till exempel vid Hashimotos tyreoidit eller konverteringsproblem (T4 omvandlas inte till T3 effektivt). Kompletterande tester av fritt T4, fritt T3 och TPO-antikroppar ger en mer fullständig bild.",
  },
  {
    question: "Hur vanligt är sköldkörtelproblem i Sverige?",
    answer: "Ungefär 3–5 % av Sveriges befolkning har manifest hypo- eller hypertyreos, och ytterligare 5–7 % beräknas ha en subklinisk form. Totalt beräknas ca 10 % av befolkningen ha någon form av sköldkörtelpåverkan. Kvinnor drabbas 5–8 gånger oftare än män, och risken ökar med åldern.",
  },
  {
    question: "Ska jag fasta inför sköldkörteltestet?",
    answer: "Fasta är inte strikt nödvändigt för TSH-analys, men rekommenderas för konsistens – särskilt om du testar flera värden samtidigt. TSH varierar något under dygnet och är som högst på morgonen. Ta provet på morgonen före frukost för mest tillförlitliga och jämförbara resultat.",
  },
  {
    question: "Kan jag behandla sköldkörtelproblem själv?",
    answer: "Nej. Medicinsk behandling av hypotyreos (vanligen levotyroxin) eller hypertyreos kräver alltid läkarbedömning och recept. Du kan dock stödja sköldkörtelfunktionen med rätt näring: jod (skaldjur, fisk, ägg, mejeriprodukter), selen (paranötter, tonfisk) och zink (kött, frön) är viktiga mikronäringsämnen för sköldkörteln. Vid påvisade avvikelser i provet ska du alltid kontakta läkare.",
  },
];

export default function SkoldkortelTestHemmaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Sköldkörteltest hemma: TSH, T4 och vad värdena betyder",
    description: "Sköldkörtelproblem drabbar 1 av 10 svenskar. Testa TSH och T4 hemma med ett enkelt blodprov. Guide till symtom, referensvärden och bästa testerna.",
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
        <BreadcrumbNav items={[{ name: "Hem", href: "/" }, { name: "Guider", href: "/guider/" }, { name: "Sköldkörteltest hemma", href: "/guider/sköldkörteltest-hemma/" }]} />
        <div className="text-xs text-gray-400 mb-2">Granskad av Anna Lindström, biomedicinsk analytiker &bull; Uppdaterad april 2026</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Sköldkörteltest hemma: TSH, T4 och vad värdena betyder</h1>
        <MedicalDisclaimer />
        <div className="prose-guide">
          <p>Sköldkörteln är en liten fjärilsformad körtel i halsen som reglerar ämnesomsättningen, kroppstemperaturen, hjärtfrekvensen och energinivån. Trots sin ringa storlek påverkar den nästan varje cell i kroppen. Ungefär 10 % av Sveriges befolkning beräknas ha någon form av sköldkörtelpåverkan – många utan att veta om det.</p>
          <p>Symtomen är ofta diffusa och överlappar med andra tillstånd, vilket gör dem lätta att missa. I den här guiden går vi igenom de vanligaste symtomen, vilka värden som mäts och hur du enkelt kan <Link href="/blodtester/">testa sköldkörteln hemma</Link> med ett <Link href="/hormontester/">hormontest</Link>.</p>

          <h2>Symtom på sköldkörtelproblem</h2>
          <p>Beroende på om sköldkörteln är under- eller överaktiv skiljer sig symtombilden markant:</p>

          <div className="grid sm:grid-cols-2 gap-6 my-4 not-prose">
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
              <div className="font-bold text-blue-900 mb-3">Hypotyreos (underfunktion)</div>
              <ul className="text-sm text-blue-800 space-y-1.5">
                <li>Kronisk trötthet och utmattning</li>
                <li>Viktuppgang trots normal kost</li>
                <li>Frusenhet, kall om händer och fötter</li>
                <li>Förstoppning</li>
                <li>Torr hud och sprött hår</li>
                <li>Håravfall</li>
                <li>Depression och nedstämdhet</li>
                <li>Långsam hjärtfrekvens</li>
                <li>Koncentrationssvårigheter och minnesproblem</li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-xl p-5 border border-orange-100">
              <div className="font-bold text-orange-900 mb-3">Hypertyreos (överfunktion)</div>
              <ul className="text-sm text-orange-800 space-y-1.5">
                <li>Oavsiktlig viktnedgång</li>
                <li>Hjärtklappning och snabb puls</li>
                <li>Svettningar och värmekänsla</li>
                <li>Sömnproblem och insomni</li>
                <li>Nervositet, oro och irritabilitet</li>
                <li>Diarré</li>
                <li>Skakningar i händerna</li>
                <li>Ögonbesvär (vid Graves sjukdom)</li>
              </ul>
            </div>
          </div>

          <h2>Vad mäter ett sköldkörteltest?</h2>
          <p>Ett fullständigt sköldkörteltest mäter flera olika markörer som tillsammans ger en heltäckande bild av sköldkörtelns funktion:</p>
          <ul>
            <li><strong>TSH (tyreoideastimulerande hormon):</strong> Produceras av hypofysen och styr sköldkörtelns aktivitet. Referensvärde: 0,4–4,0 mIE/L. TSH är det känsligaste enskilda måttet och används som primär screening.</li>
            <li><strong>Fritt T4 (tyroxin):</strong> Sköldkörtelns viktigaste hormon i blodbanan. Referensvärde: 10–22 pmol/L. Lågt fritt T4 vid högt TSH bekräftar hypotyreos.</li>
            <li><strong>Fritt T3 (trijodtyronin):</strong> Den aktiva formen av sköldkörtelhormon – T4 omvandlas till T3 i vävnaderna. Referensvärde: 3,1–6,8 pmol/L. Viktig markör om symtom kvarstår trots normalt TSH och T4.</li>
            <li><strong>TPO-antikroppar (tyreoideaperoxidas-antikroppar):</strong> Autoimmuna antikroppar mot sköldkörteln. Förhöjda TPO-antikroppar tyder på Hashimotos tyreoidit, den vanligaste orsaken till hypotyreos i Sverige.</li>
          </ul>

          <h2>Referensvärden för sköldkörtelhormon</h2>
          <p>Nedan visas de referensvärden som används av svenska laboratorier, tillsammans med tolkningsguide:</p>
          <div className="my-4">
            <table className="w-full text-sm border-collapse not-prose">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Markör</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Referensvärde</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Tolkning vid avvikelse</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">TSH</td>
                  <td className="p-3 border border-gray-200">0,4–4,0 mIE/L</td>
                  <td className="p-3 border border-gray-200">Högt TSH = hypotyreos, lågt TSH = hypertyreos</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200 font-medium">Fritt T4</td>
                  <td className="p-3 border border-gray-200">10–22 pmol/L</td>
                  <td className="p-3 border border-gray-200">Lågt = otillräcklig sköldkörtelproduktion</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">Fritt T3</td>
                  <td className="p-3 border border-gray-200">3,1–6,8 pmol/L</td>
                  <td className="p-3 border border-gray-200">Lågt kan förklara kvarstående symtom trots normalt T4</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200 font-medium">TPO-antikroppar</td>
                  <td className="p-3 border border-gray-200">&lt; 34 kIE/L</td>
                  <td className="p-3 border border-gray-200">Förhöjt tyder på Hashimotos tyreoidit (autoimmun)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>Referensintervallen kan variera något mellan laboratorier. Använd alltid de referensvärden som anges i ditt eget provsvar.</p>

          <h2>Hur testar du sköldkörteln hemma?</h2>
          <p>Det enklaste sättet att screena sköldkörtelfunktionen är ett hemtest via post. Processen är enkel:</p>
          <ul>
            <li>Beställ ett <Link href="/blodtester/">sköldkörteltest hemma</Link> – finns som TSH-test eller komplett panel med TSH, T4, T3 och TPO</li>
            <li>Ta ett fingerblodsprov hemma med medföljande lansett – tar under 5 minuter</li>
            <li>Posta till det ackrediterade laboratoriet med bifogat svarskuvert</li>
            <li>Få digitalt provsvar inom 3–5 dagar</li>
          </ul>
          <p>Observera att venöst blodprov (taget på klinik) ger mer precisa värden för fritt T3 och T4, medan fingerblodsprov räcker väl för TSH-screening. Om TSH avviker rekommenderas uppföljning med venöst prov hos läkare för bekräftelse. Jämför tillgängliga tester i vår guide om <Link href="/recension/werlabs/">Werlabs</Link> och övriga <Link href="/blodtester/">blodtester</Link>.</p>

          <h2>Sköldkörteltest: vad händer efter provet?</h2>
          <p>När provsvaret är klart gäller följande riktlinjer:</p>
          <ul>
            <li><strong>Alla värden inom referensintervallet:</strong> Sköldkörtelfunktionen är sannolikt normal. Om symtom kvarstår kan andra orsaker behöva utredas.</li>
            <li><strong>TSH utanför referensintervallet:</strong> Kontakta alltid läkare för uppföljning. Avvikande TSH är ett tydligt tecken på att vidare utredning behövs.</li>
            <li><strong>Bekräftad hypotyreos:</strong> Behandlas vanligen med levotyroxin (syntetiskt T4-hormon). Dosen anpassas individuellt och följs upp med regelbundna blodprover.</li>
            <li><strong>Bekräftad hypertyreos:</strong> Behandlingsalternativ inkluderar tyreostatika (medicinsk bromsning), radioaktivt jod eller kirurgi beroende på orsak och svårighetsgrad.</li>
            <li><strong>Förhöjda TPO-antikroppar:</strong> Tyder på Hashimotos tyreoidit. Tillståndet behöver inte alltid behandlas direkt, men kräver regelbunden kontroll av TSH och T4.</li>
          </ul>
          <p>Behandling av sköldkörtelproblem kräver alltid läkarbedömning – börja aldrig med behandling baserat enbart på ett hemtest.</p>
        </div>

        <div className="my-8 bg-teal-50 border border-teal-200 rounded-xl p-5 flex flex-col sm:flex-row items-center gap-4">
          <div>
            <div className="font-bold text-teal-900">Testa sköldkörteln hemma</div>
            <div className="text-sm text-teal-700">Välj mellan TSH-screening eller komplett sköldkörtelpaket</div>
          </div>
          <Link href="/blodtester/" className="shrink-0 bg-teal-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-teal-700 transition-colors">
            Jämför Sveriges bästa blodtester &rarr;
          </Link>
        </div>

        <FaqAccordion items={faqs} title="Vanliga frågor om sköldkörteltest hemma" />
      </main>
      <Footer />
    </>
  );
}
