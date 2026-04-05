import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Annonsering & Affiliatepolicy | Testahemma.se",
  description: "Läs om hur Testahemma.se finansieras via affiliatelänkar och hur det påverkar (eller inte påverkar) våra recensioner.",
  alternates: { canonical: "https://www.testahemma.se/annonsering/" },
  robots: { index: false, follow: false },
};

export default function AnnonseringPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <BreadcrumbNav items={[{ name: "Hem", href: "/" }, { name: "Annonsering & affiliate", href: "/annonsering/" }]} />
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Annonsering & affiliatepolicy</h1>
        <div className="prose-guide">
          <h2>Hur vi finansieras</h2>
          <p>Testahemma.se är en oberoende informationssajt som finansieras delvis via affiliateprogram. Det innebär att vi kan erhålla en provision när du köper en produkt via ett av våra spårade länkar – utan extra kostnad för dig. Provisionen påverkar varken produktens pris eller tillgänglighet.</p>

          <h2>Vilka affiliatenätverk använder vi?</h2>
          <p>Vi samarbetar primärt med Adtraction och AddRevenue, som är etablerade och transparenta affiliatenätverk med tydliga regelverk. Alla samarbeten sker i enlighet med respektive nätverks villkor.</p>

          <h2>Påverkar affiliatesamarbeten våra betyg?</h2>
          <p><strong>Nej – aldrig.</strong> Vår redaktionella bedömning är helt oberoende av kommersiella intressen. Betyg och rankingar baseras uteslutande på faktiska testresultat, laboratoriekvalitet, användarvänlighet, svarstid och pris. Vi listar och recenserar produkter vi faktiskt testat, oavsett om vi har ett affiliateprogram med aktören eller inte.</p>

          <h2>Märkning av affiliatelänkar</h2>
          <p>Alla affiliatelänkar på Testahemma.se märks med <code>rel="sponsored"</code> i HTML-koden, i enlighet med Googles riktlinjer och svensk marknadsrättspraxis. Vi visar även en synlig disclaimer ("Sajten innehåller affiliatelänkar") på alla relevanta sidor.</p>

          <h2>GDPR och spårning</h2>
          <p>Affiliatenätverken kan placera cookies för spårning av klick och konverteringar. Vi informerar om detta i vår cookie-banner och integritetspolicy. Du kan välja att neka cookies, vilket inte påverkar din möjlighet att använda sajten.</p>

          <h2>Kontakta oss för samarbete</h2>
          <p>Är du en aktör inom hemtestning och vill samarbeta med oss? Skicka ett mejl till <a href="mailto:vpniskguiden@proton.me" className="text-teal-600 hover:underline">vpniskguiden@proton.me</a>. Vi utvärderar alla samarbetsförfrågningar utifrån om produkten uppfyller våra kvalitetskrav.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
