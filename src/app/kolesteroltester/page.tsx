import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import ProductCard from "@/components/ProductCard";
import ProductTable from "@/components/ProductTable";
import FaqAccordion from "@/components/FaqAccordion";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import AffiliateDisclaimer from "@/components/AffiliateDisclaimer";
import StickyCTA from "@/components/StickyCTA";
import { getProductsByCategory } from "@/data/products";
import { buildAffiliateUrl } from "@/lib/tracking";

export const metadata: Metadata = {
  title: "Kolesteroltest hemma 2026 — Jämförelse | Testahemma.se",
  description: "Mät ditt kolesterol hemma. Testa LDL, HDL, totalt kolesterol och triglycerider utan läkarbesök. Från 395 kr med svar inom dagar.",
  alternates: { canonical: "https://www.testahemma.se/kolesteroltester/" },
  openGraph: {
    title: "Kolesteroltest hemma 2026 \u2014 J\u00e4mf\u00f6relse | Testahemma.se",
    description: "Mät ditt kolesterol hemma. Testa LDL, HDL, totalt kolesterol och triglycerider utan läkarbesök. Från 395 kr med svar inom dagar.",
    url: "https://www.testahemma.se/kolesteroltester/",
  },
};

const faqs = [
  {
    question: "Vad är normalt kolesterolvärde?",
    answer: "Totalt kolesterol bör vara under 5,0 mmol/L. LDL ('dåligt') under 3,0 mmol/L för friska personer (lägre vid hjärt-kärlsjukdom). HDL ('bra') bör vara över 1,0 mmol/L (män) och 1,3 mmol/L (kvinnor). Triglycerider under 1,7 mmol/L.",
  },
  {
    question: "Vad gör jag om kolesterolet är högt?",
    answer: "Kontakta din vårdcentral. Behandling beror på nivå och övrig riskprofil: koständringar, mer motion och eventuellt kolesterolsänkande läkemedel (statiner). Hemtestet ger dig underlag för att ta ett informerat beslut om att söka hjälp.",
  },
  {
    question: "Vad mäter ett kolesteroltest?",
    answer: "Ett fullständigt kolesteroltest (lipidprofil) mäter totalt kolesterol, LDL-kolesterol (det 'dåliga'), HDL-kolesterol (det 'bra'), triglycerider och kolesterol/HDL-kvoten. Kvoten är ett viktigt riskmått – ju lägre desto bättre.",
  },
  {
    question: "Från vilken ålder bör man testa kolesterolet?",
    answer: "Socialstyrelsen rekommenderar att friska vuxna kontrollerar kolesterolet från 40 års ålder. Vid ärftlighet för hjärt-kärlsjukdom, högt blodtryck eller diabetes bör man testa tidigare – redan från 20–25 år.",
  },
  {
    question: "Behöver man fasta inför kolesteroltest?",
    answer: "Ja, för ett tillförlitligt triglyceridvärde bör du fasta i 8–12 timmar före provtagningen. Drick bara vatten under fastan. Totalt kolesterol och HDL kan visserligen mätas utan fasta, men fasta ger mest korrekta svar för hela lipidprofilen.",
  },
  {
    question: "Hur ofta bör man mäta kolesterol?",
    answer: "Friska vuxna utan riskfaktorer behöver kontrollera kolesterolet ungefär vart 5:e år. Tillhör du en riskgrupp – ärftlighet, högt blodtryck, diabetes, övervikt eller rökning – rekommenderas mätning årligen eller enligt läkares råd.",
  },
];

export default function KolesteroltesterPage() {
  const products = getProductsByCategory("kolesteroltester");
  const top = products[0];
  const topUrl = top ? buildAffiliateUrl(top.affiliateUrl, top.network, top.adtractionProgramId, top.addRevenueProgramId, `TH-${top.slug}-kolesteroltester-sticky`) : "";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Bästa kolesteroltest hemma 2026",
    url: "https://www.testahemma.se/kolesteroltester/",
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `https://www.testahemma.se/kolesteroltester/${p.slug}/`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <BreadcrumbNav
          items={[
            { name: "Hem", href: "/" },
            { name: "Kolesteroltester", href: "/kolesteroltester/" },
          ]}
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Kolesteroltest hemma 2026
        </h1>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Högt kolesterol är tyst – inga symtom, men stor risk för hjärt-kärlsjukdom. Med ett hemtest kan du mäta LDL, HDL och triglycerider enkelt hemma och agera tidigt.
        </p>

        <MedicalDisclaimer />
        <AffiliateDisclaimer />

        <ProductTable products={products} pageSlug="kolesteroltester" />
        <div className="space-y-5 mt-8">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} position="kolesterol-list" rank={i + 1} />
          ))}
        </div>

        {/* Köpguide */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Hur väljer man rätt kolesteroltest?
          </h2>

          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
            Vad mäter ett kolesteroltest?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            Ett fullständigt kolesteroltest, ofta kallat lipidprofil, mäter fem värden: totalt kolesterol, LDL-kolesterol (lågdensitetslipoprotein, det "dåliga"), HDL-kolesterol (högdensitetslipoprotein, det "bra"), triglycerider samt kolesterol/HDL-kvoten. Kvoten är ett viktigt sammansatt riskmått – ett värde under 4,0 anses gynnsamt. Välj ett test som inkluderar alla fem markörer för en komplett bild av din hjärtkärlhälsa.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
            Nar bör man testa kolesterolet?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            För friska vuxna utan riskfaktorer rekommenderas en första kontroll från 40 års ålder. Har du nära släktingar med tidig hjärt-kärlsjukdom, familjär hyperkolesterolemi, högt blodtryck eller diabetes bör du testa tidigare – redan i 20–25-årsåldern. Regelbunden uppföljning är viktig eftersom kolesterolet kan stiga utan att du märker av det.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
            Fastekrav inför provtagning
          </h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            För ett korrekt triglyceridvärde krävs fasta i 8–12 timmar före provtagningen. Drick enbart vatten under fastan och undvik alkohol kvällen innan. Totalt kolesterol och HDL påverkas relativt lite av fasta, men en fullständig lipidprofil ger mest tillförlitliga svar när du fastat. Planera gärna provtagningen på morgonen direkt efter nattens naturliga fasta.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Vill du veta mer om hur du tolkar dina provsvar? Läs vår guide om{" "}
            <Link href="/guider/tolka-blodvarden/" className="text-teal-700 underline hover:text-teal-900">
              hur man tolkar blodvärden
            </Link>
            .
          </p>
        </section>

        {/* Referensvärden */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Referensvärden for kolesterol
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Nedanstående riktvärden gäller friska vuxna utan känd hjärt-kärlsjukdom. Vid konstaterad sjukdom eller hög risk är målvärdena striktare – rådfråga din läkare.
          </p>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-700 font-semibold">
                <tr>
                  <th scope="col" className="px-4 py-3">Markör</th>
                  <th scope="col" className="px-4 py-3">Optimalt värde</th>
                  <th scope="col" className="px-4 py-3">Förhöjt / risk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-600">
                <tr>
                  <td className="px-4 py-3">Totalt kolesterol</td>
                  <td className="px-4 py-3">&lt; 5,0 mmol/L</td>
                  <td className="px-4 py-3">&ge; 5,0 mmol/L</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">LDL-kolesterol</td>
                  <td className="px-4 py-3">&lt; 3,0 mmol/L</td>
                  <td className="px-4 py-3">&ge; 3,0 mmol/L</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">HDL-kolesterol (man)</td>
                  <td className="px-4 py-3">&gt; 1,0 mmol/L</td>
                  <td className="px-4 py-3">&lt; 1,0 mmol/L</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">HDL-kolesterol (kvinna)</td>
                  <td className="px-4 py-3">&gt; 1,3 mmol/L</td>
                  <td className="px-4 py-3">&lt; 1,3 mmol/L</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Triglycerider</td>
                  <td className="px-4 py-3">&lt; 1,7 mmol/L</td>
                  <td className="px-4 py-3">&ge; 1,7 mmol/L</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Kolesterol/HDL-kvot</td>
                  <td className="px-4 py-3">&lt; 4,0</td>
                  <td className="px-4 py-3">&ge; 4,0</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Kalla: Socialstyrelsen och Europeiska kardiologsällskapet (ESC). Värdena är riktlinjer – individuell bedömning görs av läkare.
          </p>
        </section>

        {/* CTA-block */}
        <section className="mt-10 rounded-xl bg-teal-50 border border-teal-200 px-6 py-7">
          <h2 className="text-xl font-bold text-teal-900 mb-2">
            Vill du forstå dina kolesterolvärden på djupet?
          </h2>
          <p className="text-teal-800 mb-4 leading-relaxed">
            Lär dig vad LDL, HDL, triglycerider och kolesterol/HDL-kvoten egentligen betyder – och vad du kan göra om ett värde är utanför referensintervallet.
          </p>
          <Link
            href="/guider/kolesterol-varden/"
            className="inline-block bg-teal-700 hover:bg-teal-800 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Las var guide om kolesterolvarden
          </Link>
        </section>

        <FaqAccordion items={faqs} title="Vanliga frågor om kolesteroltester" />
      </main>
      {top && (
        <StickyCTA
          product={top.name}
          price={`Fr\u00e5n ${top.priceFrom}`}
          url={topUrl}
          text={top.ctaText || "Best\u00e4ll nu"}
          label="B\u00e4st i test"
        />
      )}
      <Footer />
    </>
  );
}
