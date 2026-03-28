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
  title: "Cancermarkörer Hemma 2026 – PSA, CA-125 & CEA",
  description: "Testa cancermarkörer hemma utan remiss. PSA för prostata, CA-125, CEA och AFP. Proaktiv hälsokontroll – alltid följ upp med läkare.",
  alternates: { canonical: "https://www.testahemma.se/cancermarkorer/" },
};

const faqs = [
  {
    question: "Vad är cancermarkörer?",
    answer: "Cancermarkörer (tumörmarkörer) är proteiner eller andra ämnen i blodet vars nivåer kan stiga vid vissa cancerformer. De används för screening, uppföljning och övervakning – men ett förhöjt värde är inte detsamma som en cancerdiagnos.",
  },
  {
    question: "Vad mäter PSA-testet?",
    answer: "PSA (prostataspecifikt antigen) är ett protein producerat av prostatakörtelns celler. Förhöjt PSA kan indikera prostatacancer, men också godartad prostataförstoring (BPH) eller prostatainflammation. Alla förhöjda PSA-värden bör utredas av läkare.",
  },
  {
    question: "Vem bör testa cancermarkörer hemma?",
    answer: "PSA-test rekommenderas för män över 50, eller från 45 om det finns ärftlighet för prostatacancer i nära släkting. Övriga markörer är relevanta för personer med ärftlig risk eller som kompletterar regelbundna hälsokontroller. Diskutera alltid med läkare om du är osäker.",
  },
  {
    question: "Vad gör jag om mitt testsvar är förhöjt?",
    answer: "Kontakta alltid din vårdcentral om du får ett förhöjt värde. Förhöjda markörer har ofta godartade förklaringar, men det kräver alltid läkarbedömning för att utesluta allvarlig sjukdom. Ta inte egna beslut baserat enbart på ett hemtest.",
  },
  {
    question: "Kan ett hemtest diagnostisera cancer?",
    answer: "Nej – absolut inte. Cancermarkörer indikerar en förhöjd risk som behöver utredas vidare, men ger ingen diagnos. En cancerdiagnos kräver alltid läkarbedömning, bilddiagnostik och i de flesta fall biopsi. Hemtest är ett verktyg för proaktiv screening, inte ett diagnostiskt instrument.",
  },
  {
    question: "Vad är PSA och vad betyder ett högt värde?",
    answer: "PSA (prostataspecifikt antigen) är ett protein som produceras av prostatans celler. Ett högt PSA-värde kan ha flera förklaringar: godartad prostataförstoring (BPH), prostatainflammation (prostatit) eller prostatacancer. Högt PSA betyder alltså inte automatiskt cancer – men det kräver alltid uppföljning hos läkare för att ta reda på orsaken.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Bästa hemtester för cancermarkörer 2026",
  "description": "Rankad lista över hemtester för cancermarkörer – PSA, CA-125, CEA och AFP.",
  "url": "https://www.testahemma.se/cancermarkorer/",
  "itemListOrder": "https://schema.org/ItemListOrderDescending",
};

export default function CancermarkPage() {
  const products = getProductsByCategory("cancermarkorer");
  const top = products[0];
  const topUrl = top ? buildAffiliateUrl(top.affiliateUrl, top.network, top.adtractionProgramId, top.addRevenueProgramId, `TH-${top.slug}-cancermarkorer-sticky`) : "";
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
            { name: "Cancermarkörer", href: "/cancermarkorer/" },
          ]}
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Cancermarkörer hemma 2026 – PSA och mer
        </h1>
        <p className="text-lg text-gray-600 mb-2 leading-relaxed">
          Proaktiv hälsokontroll med cancermarkörer – PSA, CA-125, CEA och AFP – utan remiss och utan kö. Hemtester mäter blotnivåer som kan indikera ökad risk och motivera vidare utredning.
        </p>

        <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-800 my-4 flex items-start gap-3">
          <svg className="w-5 h-5 shrink-0 mt-0.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p>
            <strong>Viktigt:</strong> Förhöjda cancermarkörer är aldrig en diagnos. Alla avvikande svar kräver uppföljning med läkare och vidare utredning. Hemtest ersätter inte klinisk bedömning.
          </p>
        </div>

        <MedicalDisclaimer />
        <AffiliateDisclaimer />
        <ProductTable products={products} pageSlug="cancermarkorer" />
        <div className="space-y-5 mt-8">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} position="cancermark-list" rank={i + 1} />
          ))}
        </div>

        {/* Köpguide */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Vad är cancermarkörer?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cancermarkörer – eller tumörmarkörer – är ämnen, vanligtvis proteiner, som kan mätas i blod, urin eller vävnad. Förhöjda nivåer kan förekomma vid vissa cancerformer, men också vid en lång rad godartade tillstånd. De vanligaste markörerna du kan testa hemma är:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li><strong>PSA (prostataspecifikt antigen)</strong> – används primärt för att screena för prostatacancer hos män.</li>
            <li><strong>CA 125</strong> – förhöjda nivåer kan förekomma vid äggstockscancer, men också vid endometrios och andra godartade tillstånd.</li>
            <li><strong>CEA (karcinoembryonalt antigen)</strong> – förhöjt vid bland annat tjocktarmscancer, lungcancer och bröstcancer, men också vid rökning och inflammation.</li>
            <li><strong>AFP (alfafetoprotein)</strong> – kan stiga vid levercancer och testikelcancer, men är även förhöjt under graviditet.</li>
            <li><strong>CA 19-9</strong> – associeras framför allt med bukspottkörtelcancer och gallvägscancer.</li>
          </ul>

          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-900 mb-6">
            <strong>Viktigt att veta:</strong> Cancermarkörer är screeningverktyg – inte diagnostiska test. Ett förhöjt värde betyder inte att du har cancer. Ett normalt värde utesluter inte cancer. Resultatet ska alltid tolkas av en läkare i kombination med din övriga hälsobild, symtom och eventuella riskfaktorer.
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3">När bör du testa?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            PSA-test rekommenderas generellt för män från 50 års ålder. Har du en nära manlig släkting (far, bror) som fått prostatacancer bör du börja testa från 45 år. Regelbunden testning ger en baslinje som gör det lättare att upptäcka förändringar över tid.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            För övriga markörer som CA 125, CEA och AFP saknas tydliga nationella screeningrekommendationer för friska individer. De är mest användbara om du har känd ärftlig risk, tidigare cancersjukdom eller diskuterat testning med din läkare. Läs mer i vår guide om att{" "}
            <Link href="/guider/tolka-blodvarden/" className="text-teal-700 underline hover:text-teal-900">
              tolka blodvärden
            </Link>
            .
          </p>
        </section>

        {/* Begränsningar */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Begränsningar – förhöjda markörer betyder inte cancer</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            En av de vanligaste missuppfattningarna är att ett förhöjt värde automatiskt innebär cancer. Det stämmer inte. Cancermarkörer är känsliga men inte specifika – de kan stiga av många godartade orsaker:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>PSA kan stiga vid godartad prostataförstoring (BPH), prostatainflammation eller efter ridning och cykling.</li>
            <li>CA 125 kan vara förhöjt vid endometrios, myom och under menstruation.</li>
            <li>CEA är förhöjt hos rökare även utan cancersjukdom.</li>
            <li>AFP stiger normalt under graviditet.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Omvänt utesluter ett normalt värde inte cancer – en del cancertumörer producerar inte mätbara mängder av sina associerade markörer. Det är därför hemtester för cancermarkörer alltid ska ses som ett komplement till – aldrig en ersättning för – regelbundna läkarbesök och hälsokontroller i sjukvården.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Vill du veta mer om hur PSA-värden tolkas och vad nästa steg kan vara?{" "}
            <Link href="/guider/psa-test-prostata/" className="text-teal-700 underline hover:text-teal-900">
              Lär dig mer i vår guide om PSA-test och prostata
            </Link>
            .
          </p>
        </section>

        {/* Teal CTA block */}
        <section className="mt-10 bg-teal-50 border border-teal-200 rounded-xl px-6 py-6">
          <h2 className="text-xl font-bold text-teal-900 mb-2">Forstår du ditt PSA-svar?</h2>
          <p className="text-teal-800 text-sm leading-relaxed mb-4">
            PSA-värdet ensamt berättar inte hela historien. I vår guide går vi igenom vad olika PSA-nivåer innebär, när du bör kontakta sjukvården och vad som händer vid en vidare utredning.
          </p>
          <Link
            href="/guider/psa-test-prostata/"
            className="inline-block bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
          >
            Las PSA-guiden
          </Link>
        </section>

        <FaqAccordion items={faqs} title="Vanliga frågor om cancermarkörer" />
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
