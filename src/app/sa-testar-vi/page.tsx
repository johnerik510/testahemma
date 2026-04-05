import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import AuthorByline from "@/components/AuthorByline";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Så testar vi hemtester – Vår metodik | Testahemma.se",
  description:
    "Så testar, jämför och betygsätter vi hemtestningskit på Testahemma.se. Läs om våra kriterier, granskningsprocess och kvalitetssäkring.",
  alternates: { canonical: "https://www.testahemma.se/sa-testar-vi/" },
  openGraph: {
    title: "Så testar vi hemtester – Vår metodik | Testahemma.se",
    description:
      "Så testar, jämför och betygsätter vi hemtestningskit på Testahemma.se. Läs om våra kriterier, granskningsprocess och kvalitetssäkring.",
    url: "https://www.testahemma.se/sa-testar-vi/",
  },
};

const criteria = [
  {
    title: "Testkvalitet och tillförlitlighet (30%)",
    desc: "Vi kontrollerar laboratorieackreditering (SWEDAC, ISO 15189), CE-märkning, analysmetod och validering. Vi jämför hemtestresultat med parallella kliniska blodprov för att verifiera noggrannhet. Utan ackrediterat laboratorium kan vi inte garantera sjukvårdskvalitet – det är det viktigaste enskilda kriteriet.",
    icon: (
      <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Användarvänlighet (20%)",
    desc: "Hur tydliga är instruktionerna? Hur enkel är provtagningen – kan en förstagångsanvändare klara det själv? Vi bedömer hela användarresan: beställning, kit-innehåll, provtagning, inskick och resultatpresentation i app eller webbportal.",
    icon: (
      <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Pris och värde (20%)",
    desc: "Vi analyserar pris per biomarkör, vad som ingår i panelen och om priset motiveras av laboratoriekvalitet och extra tjänster (exempelvis inkluderad läkarkonsultation, uppföljning eller digitala hälsoinsikter). Vi jämför alltid med konkurrenter i samma kategori.",
    icon: (
      <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Resultatpresentation (15%)",
    desc: "Är resultaten lättbegripliga för en vanlig konsument? Finns referensvärden, färgkodning och förklaringar? Erbjuds uppföljning med läkare eller hälsocoach? Vi bedömer hur väl aktören hjälper användaren förstå och agera på sina resultat.",
    icon: (
      <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Kundservice och support (15%)",
    desc: "Vi kontaktar kundtjänst med faktiska frågor och bedömer svarstid, kompetens och tillgänglighet. Vi utvärderar även returpolicy, reklamationshantering och om aktören erbjuder medicinsk rådgivning vid avvikande resultat.",
    icon: (
      <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.testahemma.se/" },
    { "@type": "ListItem", position: 2, name: "Så testar vi", item: "https://www.testahemma.se/sa-testar-vi/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Så testar vi hemtester – vår metodik och betygskriterier",
  description: "Så testar, jämför och betygsätter vi hemtestningskit på Testahemma.se.",
  datePublished: "2026-01-15",
  dateModified: "2026-04-05",
  author: {
    "@type": "Person",
    name: "John Erik Johansson",
    url: "https://www.testahemma.se/om-oss/",
    jobTitle: "Grundare & hälsotestexpert",
  },
  publisher: {
    "@type": "Organization",
    name: "Testahemma.se",
    url: "https://www.testahemma.se",
  },
  mainEntityOfPage: "https://www.testahemma.se/sa-testar-vi/",
};

export default function SaTestarViPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <BreadcrumbNav items={[{ name: "Hem", href: "/" }, { name: "Så testar vi", href: "/sa-testar-vi/" }]} />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Så testar vi hemtester</h1>
        <AuthorByline datePublished="2026-01-15" dateModified="2026-04-05" />
        <MedicalDisclaimer />

        <div className="prose-guide">
          <p>
            På Testahemma.se testar vi hemtestningskit på riktigt. Vi beställer, tar prov, analyserar resultaten och jämför med kliniska standarder. Vår metodik är transparent, repeterbar och helt oberoende från kommersiella intressen.
          </p>
          <p>
            Den här sidan beskriver exakt hur vi utvärderar och betygsätter varje hemtest – så att du kan lita på våra rekommendationer.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Våra betygskriterier</h2>
        <p className="text-gray-600 mb-6">
          Varje hemtest bedöms på en skala 1–10 baserat på fem viktade kriterier. Totalbetyget är ett viktat genomsnitt där testkvalitet väger tyngst – för det är det enda som egentligen spelar roll för din hälsa.
        </p>

        <div className="space-y-4 mb-10">
          {criteria.map((c) => (
            <div key={c.title} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm flex gap-4">
              <div className="shrink-0 mt-0.5">{c.icon}</div>
              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">{c.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="prose-guide">
          <h2>Hur vi jämför hemtester</h2>
          <p>
            När vi jämför hemtester mot varandra använder vi ytterligare kvalitetsindikatorer utöver betygskriterierna ovan:
          </p>
          <ul>
            <li><strong>Labcertifieringar:</strong> Vi kontrollerar SWEDAC-ackreditering, ISO 15189-certifiering och övrig erkänd certifiering. Labb utan ackreditering får en tydlig markering i våra recensioner.</li>
            <li><strong>CE-märkning:</strong> Alla hemtester som säljs i Sverige ska vara CE-märkta som medicintekniska produkter. Vi verifierar detta för varje kit.</li>
            <li><strong>Referenslabb:</strong> För blodtester jämför vi resultat med parallella venösa blodprov tagna vid klinik. Det ger oss ett objektivt mått på noggrannhet.</li>
            <li><strong>Pris per biomarkör:</strong> Istället för att bara jämföra totalpris analyserar vi kostnad per analyserat värde – det ger en rättvisare bild.</li>
            <li><strong>Svarstid:</strong> Vi mäter faktisk tid från inskick till svar, inte annonserade tider.</li>
          </ul>

          <h2>Vår granskningsprocess</h2>
          <p>Varje recension på Testahemma.se genomgår följande steg:</p>
          <ol>
            <li><strong>Beställning:</strong> Vi beställer minst ett kit per aktör med egna pengar – aldrig gratisprodukter från företagen.</li>
            <li><strong>Provtagning:</strong> Vi genomför provtagningen enligt instruktionerna och dokumenterar upplevelsen.</li>
            <li><strong>Labgranskning:</strong> Vi kontrollerar ackreditering, analysmetod och valideringsdata.</li>
            <li><strong>Parallell klinisk provtagning:</strong> För blodtester tar vi ett parallellt venöst prov vid klinik för jämförelse.</li>
            <li><strong>Resultatanalys:</strong> Vi utvärderar app/webbportal, referensvärden, förklaringar och uppföljning.</li>
            <li><strong>Betygsättning:</strong> Vi tilldelar betyg baserat på våra viktade kriterier.</li>
            <li><strong>Medicinsk granskning:</strong> Alla recensioner granskas av biomedicinsk analytiker eller legitimerad läkare.</li>
          </ol>

          <h2>Uppdateringsfrekvens</h2>
          <p>
            Recensioner uppdateras minst var sjätte månad, eller omedelbart vid väsentliga förändringar som prisändringar, ändrad laboratorieackreditering eller förändrat testutbud. Datumet &quot;senast uppdaterad&quot; på varje sida är alltid äkta – vi ändrar det bara när innehållet faktiskt uppdaterats.
          </p>

          <h2>Oberoende och transparens</h2>
          <p>
            Testahemma.se finansieras delvis via affiliatelänkar. Det innebär att vi kan erhålla provision när du köper via våra länkar – utan extra kostnad för dig. Vår redaktionella bedömning påverkas aldrig av kommersiella intressen. Betyg och rankingar baseras uteslutande på faktiska testresultat och objektiva kriterier.
          </p>
          <p>
            Läs mer om vår affiliatepolicy på <Link href="/annonsering/">annonserings- och affiliatesidan</Link>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
