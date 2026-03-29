import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import FaqAccordion from "@/components/FaqAccordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hur fungerar hemtest? Steg för steg 2026 | Testahemma.se",
  description: "Steg-för-steg-guide till hemtestningskit. Från beställning och provtagning till analys och svar. Provtagningstyper, tips och vanliga misstag.",
  alternates: { canonical: "https://www.testahemma.se/guider/hur-fungerar-hemtest/" },
  openGraph: {
    title: "Hur fungerar hemtest? Steg för steg 2026 | Testahemma.se",
    description: "Steg-för-steg-guide till hemtestningskit. Från beställning och provtagning till analys och svar. Provtagningstyper, tips och vanliga misstag.",
    url: "https://www.testahemma.se/guider/hur-fungerar-hemtest/",
  },
};

const steps = [
  {
    step: "1",
    title: "Välj test och beställ online",
    desc: "Gå igenom våra kategorisidor och recensioner för att hitta rätt test för dina behov. Beställ direkt hos aktören – kitet levereras till din dörr inom 2–3 dagar i diskret, neutralt paket utan känslig information på utsidan.",
  },
  {
    step: "2",
    title: "Läs instruktionerna noga",
    desc: "Olika tester har olika förberedelsekrav. Blodprov bör tas på morgonen (hormoner) eller kräver fasta (glukos). Urinprov tas mitt i urinstrålen. STI-svabbar tas mot specifika platser. Läs alltid hela instruktionen innan du börjar.",
  },
  {
    step: "3",
    title: "Ta provet hemma",
    desc: "För fingerblod: värm händerna, stick i sidan av fingertoppen med den medföljande lansetten, mjölka ut droppar i provröret. För urin: fyll behållaren mitt i urinstrålen. För svabb: rotera svabben mot angivet ställe i 30–60 sekunder. För avföring: samla provet med medföljande sked i provbehållaren.",
  },
  {
    step: "4",
    title: "Förvara och posta provet",
    desc: "Följ förvaringsinstruktionerna (många blodprov ska inte frysas). Förslut provröret noggrant, lägg i skyddspåsen och posta med det medföljande förbetalt svarskuvertet. Blodprov bör postas samma dag eller dagen efter provtagning.",
  },
  {
    step: "5",
    title: "Vänta på analyssvar",
    desc: "Laboratoriet analyserar provet med kliniska metoder. Du får ett e-post- eller SMS-meddelande när resultaten är klara. Svartid varierar: STI 1–3 dagar, blod/hormoner 2–5 dagar, tarmflora 7–21 dagar.",
  },
  {
    step: "6",
    title: "Läs och agera på dina resultat",
    desc: "Resultaten presenteras i en säker webbportal eller app med dina värden, referensintervall och tolkningshjälp. Vid avvikande värden rekommenderas uppföljning med läkare. Ta med utskriften till ditt läkarbesök som underlag.",
  },
];

const faqs = [
  {
    question: "Hur tar jag ett fingerblodprov hemma?",
    answer: "Värm händerna i varmt vatten i 1–2 minuter för bättre blodflöde. Använd den medföljande enkångslansetten och stick i sidan av fingertoppen (undvik tummen och pekfingret). Mjölka fingret nedåt mot spetsen för att samla droppar – pressa inte för hårt. Torka bort den första droppen och samla de efterföljande i provröret. De flesta tester behöver 250–500 µL blod (ca 5–10 droppar). Förslut röret och blanda enligt instruktion.",
  },
  {
    question: "Vad händer om jag inte lyckas samla tillräckligt med blod?",
    answer: "Otillräcklig provvolym är den vanligaste orsaken till ogiltiga hemtestresultat. Tips: ta provet på morgonen (inte direkt efter uppvaknandet), värm händerna, drick ett glas vatten dessförinnan och stå upp under provtagning. Om du fortfarande har problem, kontakta aktören – de flesta erbjuder ersättningskit utan extra kostnad.",
  },
  {
    question: "Kan jag ta ett hemtest om jag tar mediciner?",
    answer: "Beror på testet och medicinen. Antihistaminer påverkar inte blodbaserade IgE-allergitester. Hormontester kan påverkas av p-piller, kortison och sköldkörtelläkemedel – ange detta när du registrerar provet. Statiner och blodtrycksmediciner påverkar inte de flesta blodpaneler. Vid tveksamhet, kontakta aktören eller din läkare.",
  },
  {
    question: "Hur länge håller ett hemtest i oöppnad förpackning?",
    answer: "Kitet har ett utgångsdatum på förpackningen, vanligtvis 12–24 månader från tillverkningsdatum. Förvara det på ett svalt, torrt ställe – inte i badrumsskåpet där fukt och temperaturväxlingar kan påverka komponenterna.",
  },
  {
    question: "Vad är skillnaden mellan kapillärblod och venöst prov?",
    answer: "Kapillärblod (fingerblodprov) tas från fingertoppens kapillärer och används i de flesta hemtest. Det ger tillförlitliga resultat för de flesta analyser. Venöst prov tas från arm-venen av sjukvårdspersonal och är standardmetoden på klinik. För de flesta markörer är resultaten jämförbara, men för hormonanalyser och vissa specifika analyser föredrar laboratorier ibland venöst prov.",
  },
];

export default function HurFungerarPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Hur fungerar hemtest? Steg för steg",
    description: "En komplett steg-för-steg-guide till hela processen med ett hemtestningskit – från beställning till svar.",
    step: steps.map((s) => ({
      "@type": "HowToStep",
      name: s.title,
      text: s.desc,
    })),
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
            { name: "Hur fungerar hemtest?", href: "/guider/hur-fungerar-hemtest/" },
          ]}
        />
        <div className="text-xs text-gray-400 mb-2">
          Granskad av Anna Lindström, biomedicinsk analytiker &bull; Uppdaterad mars 2026
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Hur fungerar hemtest? Steg för steg
        </h1>
        <MedicalDisclaimer />
        <div className="prose-guide">
          <p>
            Att ta ett hemtest är enklare än de flesta tror. Hela processen – från beställning till svar – tar vanligtvis under en vecka och kräver bara 10–15 minuters aktiv tid. Den här guiden går igenom varje steg och de vanligaste provtagningsmetoderna.
          </p>
        </div>

        <div className="space-y-4 my-8">
          {steps.map((s) => (
            <div key={s.step} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
              <div className="w-9 h-9 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                {s.step}
              </div>
              <div>
                <div className="font-bold text-gray-900 mb-1">{s.title}</div>
                <div className="text-sm text-gray-600 leading-relaxed">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="prose-guide">
          <h2>Provtagningstyper – en översikt</h2>

          <h3>Fingerblod (kapillärblod)</h3>
          <p>
            Den vanligaste metoden för hemtester. Används för blod-, hormon-, vitamin- och kolesterolanalyser. Provet tas med en engångslansett mot fingertoppens sida och samlas i ett litet provrör. Ger kliniskt tillförlitliga resultat för de flesta analyser. Viktigt: ta provet på morgonen för hormoner (testosteron är som högst), välj rätt finger och värm händerna väl.
          </p>

          <h3>Urinprov</h3>
          <p>
            Används för STI-tester (klamydia, gonorré), hormonmarkörer (LH, FSH, HCG) och njurfunktion. Samla urin mitt i urinstrålen (midstream) – inte de första eller sista dropparna – i den medföljande behållaren. För STI-prov: undvik att kissa 1–2 timmar före provtagning för bästa resultat.
          </p>

          <h3>Svabb (pinnprov)</h3>
          <p>
            Används för STI-testning av specifika platser (penis/urethra, vagina, livmoderhalsen, ändtarm och svalg). Roteras mot angivna ställen i 30–60 sekunder. Viktigt att provtagningen sker mot rätt anatomisk plats – felaktig provtagning är den vanligaste orsaken till falskt negativa STI-resultat.
          </p>

          <h3>Avföringsprov</h3>
          <p>
            Används för tarmfloraanalys (mikrobiom), calprotectin (tarminflamation), ockult blod och parasitdiagnostik. Provet samlas med medföljande sked i en speciell provbehållare. Tarmfloraprover fryses ofta innan de postas – följ alltid aktörens specifika instruktioner noga.
          </p>

          <h3>Salivprov</h3>
          <p>
            Används för kortisolmätning (4 prover under ett dygn för att fånga dygnsrytmen) och DNA-baserade tester. Samlas i ett speciellt rör och är enklast att ta – kräver inga speciella förberedelser utöver att undvika mat och dryck 30 minuter före provtagning.
          </p>

          <h2>Vanliga misstag – och hur du undviker dem</h2>
          <ul>
            <li><strong>Otillräcklig provvolym:</strong> Värm alltid händerna och stå upp vid fingerblodprovtagning</li>
            <li><strong>Fel tid på dygnet:</strong> Hormontester (testosteron, kortisol) tas på morgonen – annars missvisande resultat</li>
            <li><strong>Fördröjd postning:</strong> Posta blodprov samma dag eller dagen efter – förvara svalt men frys inte</li>
            <li><strong>Inte fasta inför blodsocker:</strong> HbA1c kräver ingen fasta, men fasteglukos kräver 8–12 timmars fasta</li>
            <li><strong>STI-prov för tidigt:</strong> Respektera inkubationstider – testa för tidigt ger falskt negativt svar</li>
          </ul>

          <h2>Vad händer på laboratoriet?</h2>
          <p>
            Ditt prov analyseras av ett ackrediterat laboratorium med kliniska metoder: fotometri för blodvärden, ELISA/ImmunoCAP för hormoner och allergi, PCR för STI och serologiska metoder för antikroppar. Svartiden beror på analysmetoden och om laboratoriet kör batchar (tarmfloraanalyser samlas ofta upp till 1–2 gånger per vecka).
          </p>
          <p>
            Välj alltid aktörer som samarbetar med SWEDAC-ackrediterade laboratorier – det är din garanti för att analyserna håller klinisk standard.
          </p>
          <p>
            Se vår guide <Link href="/basta-hemtest/">bästa hemtester 2026</Link> för att hitta rätt test för dina behov.
          </p>
        </div>

        <div className="my-8 bg-teal-50 rounded-xl p-5 flex flex-col sm:flex-row items-center gap-4">
          <div>
            <div className="font-bold text-teal-900">Redo att ta ditt första hemtest?</div>
            <div className="text-sm text-teal-700">Jämförelse av bästa hemtester i Sverige 2026</div>
          </div>
          <Link
            href="/basta-hemtest/"
            className="shrink-0 bg-teal-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-teal-700 transition-colors"
          >
            Se alla hemtester
          </Link>
        </div>

        <FaqAccordion items={faqs} title="Vanliga frågor om hemtestning" />
      </main>
      <Footer />
    </>
  );
}
