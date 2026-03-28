import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Hur fungerar hemtest? Steg för steg | Testahemma.se",
  description: "En enkel steg-för-steg-guide till hela processen med ett hemtestningskit – från beställning till svar.",
  alternates: { canonical: "https://www.testahemma.se/guider/hur-fungerar-hemtest/" },
};
const steps = [
  { step: "1", title: "Välj test och beställ", desc: "Gå igenom våra kategorisidor och recensioner för att hitta rätt test. Beställ direkt hos aktören. Kitet levereras till din dörr inom 2–3 dagar i diskret paket." },
  { step: "2", title: "Förbered och ta provet", desc: "Följ instruktionerna i kitet noga. För fingerblod: stick i fingertoppen, samla droppar i röret. För urinprov: fyll behållaren mitt i urinstrålen. För svabb: rotera svabben mot angivet ställe i 30–60 sekunder." },
  { step: "3", title: "Posta till laboratoriet", desc: "Lägg provet i det angivna röret/behållaren, förslut ordentligt och posta med det medföljande förbetalt svarskuvertet. Skicka inom angiven tid (vanligtvis 24–48 timmar)." },
  { step: "4", title: "Vänta på svar", desc: "Beroende på test och aktör: blodprov 2–5 dagar, STI 1–3 dagar, tarmflora 7–14 dagar. Du får ett meddelande när resultaten är klara." },
  { step: "5", title: "Läs och agera", desc: "Resultaten presenteras i appen eller på webportalen med referensvärden och tolkningshjälp. Vid avvikande värden – kontakta läkare för vidare utredning." },
];
export default function HurFungerarPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <BreadcrumbNav items={[{ name: "Hem", href: "/" }, { name: "Guider", href: "/guider/" }, { name: "Hur fungerar hemtest?", href: "/guider/hur-fungerar-hemtest/" }]} />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Hur fungerar hemtest? Steg för steg</h1>
        <MedicalDisclaimer />
        <div className="prose-guide">
          <p>Att ta ett hemtest är enklare än de flesta tror. Hela processen – från beställning till svar – tar vanligtvis under en vecka och kräver bara 10–15 minuters aktiv tid.</p>
        </div>
        <div className="space-y-4 my-8">
          {steps.map((s) => (
            <div key={s.step} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
              <div className="w-9 h-9 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">{s.step}</div>
              <div>
                <div className="font-bold text-gray-900 mb-1">{s.title}</div>
                <div className="text-sm text-gray-600 leading-relaxed">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="prose-guide">
          <h2>Provtagningstyper – en översikt</h2>
          <p><strong>Fingerblod (kapillärblod):</strong> Vanligast för blod-, hormon- och vitamintester. Enkelt att ta hemma, ger kliniskt tillförlitliga resultat för de flesta analyser.</p>
          <p><strong>Urinprov:</strong> Används för STI (klamydia, gonorré), hormoner och njurfunktion. Enkelt att ta utan specialutrustning.</p>
          <p><strong>Svabb:</strong> Används för STI-testning av specifika platser (penis, vagina, ändtarm, svalg) och för DNA-testning.</p>
          <p><strong>Avföringsprov:</strong> Används för tarmfloraanalys och analys av tarmhälsomarkörer.</p>
          <p>Se vår guide <Link href="/basta-hemtest/">bästa hemtester 2026</Link> för att hitta rätt test för dina behov.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
