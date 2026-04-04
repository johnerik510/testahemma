import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Hälsoguider – Hemtestning & Hälsovärden | Testahemma.se",
  description: "Kompletta guider om hemtestning, hälsovärden och hur du tolkar dina provsvar. D-vitamin, STI, hormoner, blodvärden och mer.",
  alternates: { canonical: "https://www.testahemma.se/guider/" },
  openGraph: {
    title: "Hälsoguider – Hemtestning & Hälsovärden | Testahemma.se",
    description: "Kompletta guider om hemtestning, hälsovärden och hur du tolkar dina provsvar. D-vitamin, STI, hormoner, blodvärden och mer.",
    url: "https://www.testahemma.se/guider/",
  },
};

const guides = [
  { slug: "vad-ar-hemtest", title: "Vad är ett hemtest? – Komplett guide", cat: "Grundguider", desc: "Allt du behöver veta om hemtestningskit – hur de fungerar, vad de kostar och när du bör använda dem." },
  { slug: "hur-fungerar-hemtest", title: "Hur fungerar hemtest? Steg för steg", cat: "Grundguider", desc: "Från beställning till svar – en enkel genomgång av hela processen med ett hemtestningskit." },
  { slug: "tolka-blodvarden", title: "Tolka dina blodvärden – vad betyder resultaten?", cat: "Blodtester", desc: "En lättförståelig guide till de vanligaste blodvärdena – hemoglobin, CRP, ferritin, kolesterol och mer." },
  { slug: "d-vitaminbrist-symtom", title: "D-vitaminbrist: 8 symtom och hur du testar hemma", cat: "Vitaminer", desc: "D-vitaminbrist är extremt vanlig i Sverige. Lär dig känna igen symtomen och hur du enkelt testar dina nivåer hemma." },
  { slug: "b12-brist-symtom", title: "B12-brist: Symtom, test och behandling", cat: "Vitaminer", desc: "B12-brist kan ge allvarliga neurologiska skador. Lär dig symtomen, riskgrupperna och hur du testar B12 hemma." },
  { slug: "hormoner-och-halsa", title: "Hormoner och hälsa – guide till hormonella obalanser", cat: "Hormoner", desc: "Hur hormoner påverkar din hälsa och när du bör testa dina nivåer hemma." },
  { slug: "testosteron-test-hemma", title: "Testosteron test hemma – symtom, värden och guide", cat: "Hormoner", desc: "Var fjärde man över 40 har lågt testosteron. Lär dig symtomen, referensvärdena och hur du testar hemma." },
  { slug: "sköldkörteltest-hemma", title: "Sköldkörteltest hemma – TSH, T4 och vad värdena betyder", cat: "Hormoner", desc: "Sköldkörtelproblem drabbar 1 av 10 svenskar. Testa TSH och T4 hemma och förstå vad resultaten innebär." },
  { slug: "sti-testa-hemma", title: "STI-testning hemma – diskret, snabbt och enkelt", cat: "STI", desc: "Allt om diskret STI-testning hemma. Vilka könssjukdomar kan testas? Hur snabbt? Vad kostar det?" },
  { slug: "kolesterol-varden", title: "Kolesterolvärden – vad är normalt och farligt?", cat: "Hjärthälsa", desc: "En guide till LDL, HDL och triglycerider. Vad är normalt, vad är riskabelt och när bör du testa?" },
  { slug: "tarmflora-halsa", title: "Tarmflora och hälsa – varför dina tarmbakterier spelar roll", cat: "Tarmhälsa", desc: "Din tarmflora påverkar immunförsvar, humör och ämnesomsättning. Lär dig mer och förstå din mikrobiomanalys." },
  { slug: "psa-test-prostata", title: "PSA-test hemma – prostatahälsa och vad värdet betyder", cat: "Cancermarkörer", desc: "Guide till PSA-testning hemma. Vad är normalt PSA? Vem bör testa och hur ofta?" },
  { slug: "jarnbrist-symtom", title: "Järnbrist: Symtom, orsaker och test hemma", cat: "Blodtester", desc: "Järnbrist drabbar var tredje fertil kvinna i Sverige. Lär dig symtomen, referensvärdena och hur du testar ferritin hemma." },
  { slug: "allergitestning-guide", title: "Allergitestning hemma – mat, pollen och djur", cat: "Allergi", desc: "Hur fungerar hemallergitester? Vad kan testas och hur tillförlitliga är resultaten?" },
  { slug: "klamydia-test-hemma", title: "Klamydia test hemma – diskret, snabbt och enkelt", cat: "STI", desc: "Klamydia är Sveriges vanligaste könssjukdom. Testa hemma diskret utan läkarbesök. Guide till symtom, provtagning och vad ett positivt svar innebär." },
  { slug: "ferritin-normalt-varde", title: "Ferritin normalt värde – referenstabell och tolkning", cat: "Blodtester", desc: "Vad är normalt ferritinvärde? Referenstabell för kvinnor, män och barn. Vad lågt ferritin betyder och hur du testar järndepåerna hemma." },
  { slug: "menopaus-blodprov", title: "Menopaus blodprov hemma – vilka hormontest ska du ta?", cat: "Hormoner", desc: "Vilka blodprov bör du ta vid menopaus? Guide till FSH, LH, östradiol och TSH – och hur du testar hormonnivåerna hemma utan remiss." },
  { slug: "insulinresistens-test", title: "Insulinresistens test hemma – symtom och blodprov", cat: "Blodtester", desc: "Hur testar du insulinresistens? Vilka blodprov bekräftar diagnosen? Se referensvärden för HbA1c, fasteglukos och HOMA-IR." },
  { slug: "jarnbrist-test-hemma", title: "Järnbrist test hemma April 2026 – mät ferritin och järnstatus", cat: "Blodtester", desc: "Mät ferritin och järnstatus hemma utan läkarbesök. Guide till referensvärden, riskgrupper och hur du tolkar ditt provsvar." },
  { slug: "hba1c-test-hemma", title: "HbA1c test hemma April 2026 – mät långtidsblodsocker", cat: "Blodtester", desc: "Vad är HbA1c? Referensvärden för prediabetes och diabetes, hur du testar hemma och vad resultaten betyder." },
  { slug: "diabetes-test-hemma", title: "Diabetestest hemma April 2026 – testa blodsockret utan läkartid", cat: "Blodtester", desc: "Guide till HbA1c, fasteblodsockret och insulinresistens — vilket test ska du använda, referensvärden och vad du gör vid prediabetes." },
  { slug: "kortisol-test-hemma", title: "Kortisol test hemma April 2026 – mät stresshormon", cat: "Hormoner", desc: "Kortisolmätning hemma: referensvärden, vad förhöjt och lågt kortisol betyder, och hur dygnsvariationen påverkar resultaten." },
  { slug: "ostrogen-test-hemma", title: "Östrogen test hemma April 2026 – östrogennivåer och referensvärden", cat: "Hormoner", desc: "Referensvärden för östradiol per cykeldag och klimakteriefas, symtom på östrogenbrist och hur du testar hemma." },
  { slug: "fertilitet-test-hemma", title: "Fertilitet test hemma April 2026 – AMH, FSH och mer", cat: "Hormoner", desc: "AMH, FSH och östradiol: de viktigaste markörerna för äggstocksreserv och fertilitet. Guide till hemtest för fertilitetsutredning." },
  { slug: "allergitest-hemma", title: "Allergitest hemma April 2026 – IgE, mat och pollen", cat: "Allergi", desc: "Hur fungerar hemallergitester med IgE-mätning? Vilka allergener kan testas? Begränsningar vs. klinisk testning." },
];

export default function GuiderPage() {
  const categories = [...new Set(guides.map((g) => g.cat))];
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <BreadcrumbNav items={[{ name: "Hem", href: "/" }, { name: "Guider", href: "/guider/" }]} />
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Hälsoguider & hemtestguider</h1>
        <p className="text-gray-500 mb-10">Fördjupad information om hemtestning, hälsovärden och hur du tolkar dina provsvar.</p>
        {categories.map((cat) => (
          <div key={cat} className="mb-10">
            <h2 className="text-lg font-bold text-gray-700 border-b border-gray-100 pb-2 mb-4">{cat}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {guides.filter((g) => g.cat === cat).map((guide) => (
                <Link key={guide.slug} href={`/guider/${guide.slug}/`}
                  className="group bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-teal-200 transition-all">
                  <h3 className="font-bold text-gray-900 group-hover:text-teal-600 transition-colors mb-1 leading-snug">{guide.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{guide.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm text-teal-600 font-medium">
                    Läs guide <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
}
