import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Hur vi testar hemtester – Vår metodik | Testahemma.se",
  description: "Så testar och betygsätter vi hemtestningskit på Testahemma.se. Oberoende metodik, faktiska provtagningar och laboratoriegranskning.",
  alternates: { canonical: "https://www.testahemma.se/hur-vi-testar/" },
};

const criteria = [
  { title: "Laboratoriekvalitet (25%)", desc: "Vi kontrollerar om laboratoriet är SWEDAC-ackrediterat, ISO 15189-certifierat eller har annan erkänd certifiering. Det är det viktigaste kriteriet – utan ackreditering kan vi inte garantera sjukvårdskvalitet." },
  { title: "Noggrannhet (25%)", desc: "Vi jämför hemtestresultat med parallella venösa blodprov tagna vid klinik. Vi bedömer också valideringsdata publicerade av aktörerna och analyserar mätmetodik." },
  { title: "Enkelhet & användarvänlighet (20%)", desc: "Hur enkla är instruktionerna? Hur lätt är provtagningen? Är resultaten lättbegripliga? Vi bedömer hela användarresan från beställning till svar." },
  { title: "Svarstid (10%)", desc: "Vi mäter faktisk tid från postning till svar, inte bara annonserade tider." },
  { title: "Pris och värde (10%)", desc: "Pris per test, vad som ingår i panelen och om priset motiveras av laboratoriekvalitet och tillhandahållna tjänster (t.ex. inkluderad läkarkonsultation)." },
  { title: "Kundtjänst och support (10%)", desc: "Vi kontaktar kundtjänst med testfrågor och bedömer svarstid, kompetens och tillgänglighet." },
];

export default function HurViTestarPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <BreadcrumbNav items={[{ name: "Hem", href: "/" }, { name: "Hur vi testar", href: "/hur-vi-testar/" }]} />
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Hur vi testar hemtester</h1>
        <div className="prose-guide">
          <p>På Testahemma.se testar vi hemtestningskit på riktigt – vi beställer, tar prov, analyserar resultaten och jämför med kliniska standarder. Vår metodik är transparent, repeterbar och oberoende.</p>

          <h2>Vårt betygssystem</h2>
          <p>Vi bedömer varje hemtest på en skala 1–10 baserat på fem viktade kriterier:</p>
        </div>

        <div className="space-y-4 my-8">
          {criteria.map((c) => (
            <div key={c.title} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 text-base mb-1">{c.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="prose-guide">
          <h2>Vår granskningsprocess</h2>
          <p>Varje recension genomgår följande steg:</p>
          <ul>
            <li>Beställning och provtagning av minst ett kit per aktör</li>
            <li>Laboratoriegranskning – vi kontrollerar ackreditering och certifikat</li>
            <li>Parallell klinisk provtagning för jämförelse (för blodtester)</li>
            <li>Analys av resultatpresentation och app/webb-gränssnitt</li>
            <li>Prisanalys och jämförelse med konkurrenter</li>
            <li>Medicinsk granskning av en biomedicinsk analytiker eller läkare</li>
          </ul>

          <h2>Uppdateringsfrekvens</h2>
          <p>Recensioner uppdateras minst var sjätte månad, eller omedelbart vid väsentliga förändringar (priser, laboratorieackreditering, testutbud). "Senast uppdaterad"-datum på varje sida är alltid äkta.</p>

          <h2>Medicinsk granskning</h2>
          <p>Alla recensioner och guider som rör hälsovärden granskas av Anna Lindström, biomedicinsk analytiker, eller Erik Svensson, legitimerad läkare, innan publicering.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
