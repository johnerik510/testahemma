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
  title: "Allergitester Hemma 2026 – Mat, pollen och djur (jämförelse)",
  description: "Testa allergi och intolerans hemma utan remiss. Mät IgE-reaktioner mot hundratals ämnen – mat, pollen och djur. Svar inom dagar. Pris från 699 kr.",
  alternates: { canonical: "https://www.testahemma.se/allergitester/" },
  openGraph: {
    title: "Allergitester Hemma 2026 – Mat, pollen och djur (jämförelse)",
    description: "Testa allergi och intolerans hemma utan remiss. Mät IgE-reaktioner mot hundratals ämnen – mat, pollen och djur. Svar inom dagar. Pris från 699 kr.",
    url: "https://www.testahemma.se/allergitester/",
  },
};

const faqs = [
  {
    question: "Vad är skillnaden mellan allergi och intolerans?",
    answer:
      "Allergi innebär en IgE-medierad immunreaktion som kan ge snabba och allvarliga symtom (nässelutslag, anafylaxi). Intolerans (t.ex. laktosintolerans, glutenkänslighet) är icke-immunologisk och ger vanligtvis matsmältningsproblem utan att immunförsvaret aktiveras.",
  },
  {
    question: "Kan man testa celiaki hemma?",
    answer:
      "Hemtester kan mäta IgA-antikroppar mot transglutaminas (tTG-IgA) och deamiderat gliadinpeptid (DGP), vilket är markörer för celiaki. Ett positivt svar bör alltid bekräftas med gastroskopi och tarmbiopsier hos läkare.",
  },
  {
    question: "Hur många allergiämnen täcker ett hemtest?",
    answer:
      "Beroende på panel: 20–295 ämnen. Cerascreen erbjuder allergitest för upp till 295 allergiframkallande ämnen – mat, pollen, djurepitel, mögel och insekter.",
  },
  {
    question: "Är hemallergitester lika pålitliga som kliniktest?",
    answer:
      "IgE-baserade blodprov hemma ger kliniskt jämförbara resultat med sjukhusprover. Pricktest (hudstick) kan inte göras hemma och ger ibland kompletterande information. Konsultera allergolog för komplexa fall.",
  },
  {
    question: "Kan barn ta allergitest hemma?",
    answer:
      "Ja, de flesta IgE-baserade hemtester fungerar från ungefär 4 års ålder. Testet utförs med ett litet fingerblodsprov och kräver ingen nål i armen. Läs alltid tillverkarens åldersgräns i produktinformationen och rådfråga barnläkare vid tveksamhet.",
  },
  {
    question: "Vad är skillnaden mellan allergi och intolerans – kort svar?",
    answer:
      "Allergi aktiverar immunförsvaret via IgE-antikroppar och kan ge livshotande reaktioner (anafylaxi). Intolerans är en icke-immunologisk reaktion – t.ex. brist på enzymet laktas vid laktosintolerans – och är sällan farlig men kan ge besvärliga symtom. IgE-allergitest mäter allergi, inte intolerans.",
  },
];

export default function AllergitesterPage() {
  const products = getProductsByCategory("allergitester");
  const top = products[0];
  const topUrl = top ? buildAffiliateUrl(top.affiliateUrl, top.network, top.adtractionProgramId, top.addRevenueProgramId, `TH-${top.slug}-allergitester-sticky`) : "";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Bästa allergitesterna hemma 2026",
    url: "https://www.testahemma.se/allergitester/",
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `https://www.testahemma.se/recension/${p.slug}/`,
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
            { name: "Allergi & Intolerans", href: "/allergitester/" },
          ]}
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Allergitester &amp; intolerenstester hemma 2026
        </h1>
        <p className="text-sm text-gray-500 mb-3">{products.length} tester jämförda – senast uppdaterad mars 2026</p>
        <p className="text-lg text-gray-600 mb-2 leading-relaxed">
          Ta reda på exakt vad du reagerar på – mat, pollen, djur eller mögel – med ett enkelt blodprov hemma. Upp till 295 allergiämnen i ett test.
        </p>

        <MedicalDisclaimer />
        <AffiliateDisclaimer />

        <ProductTable products={products} pageSlug="allergitester" />
        <div className="space-y-5 mt-8">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} position="allergi-list" rank={i + 1} />
          ))}
        </div>

        {/* Köpguide */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Hur väljer man rätt allergitest?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Utbudet av hemtest för allergi och intolerans växer snabbt. Nedan förklarar vi de viktigaste skillnaderna så att du väljer ett test som faktiskt svarar på din fråga.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">Typer av allergitester</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>
              <strong>IgE-baserade blodtester</strong> – Mäter specifika IgE-antikroppar i blodet mot enskilda allergen. Kan utföras hemma med ett fingerblodsprov och analyseras på ackrediterat laboratorium. Täcker ofta 20–295 ämnen beroende på panel.
            </li>
            <li>
              <strong>Pricktest</strong> – Utförs av allergolog på klinik. En liten droppe allergenextrakt placeras på huden och huden sticks lätt. Ger snabbt svar men kan inte göras hemma.
            </li>
            <li>
              <strong>Komponentallergi (CRD)</strong> – Avancerat blodprov som identifierar vilka specifika proteiner i ett allergen du reagerar på. Viktigt för att avgöra risk för korsreaktioner och allvarliga reaktioner, t.ex. vid jordnötsallergi.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">Vad kan testas?</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li><strong>Pollen</strong> – björk, gräs, gråbo, alm och många fler</li>
            <li><strong>Pälsdjur</strong> – katt, hund, häst, kanin, marsvin</li>
            <li><strong>Livsmedel</strong> – mjölk, ägg, vete, soja, jordnöt, trädnötter, skaldjur, fisk</li>
            <li><strong>Kvalster</strong> – husdammkvalster (Dermatophagoides pteronyssinus och farinae)</li>
            <li><strong>Mögel</strong> – Alternaria, Cladosporium, Aspergillus</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Skillnaden mellan IgE-allergi och intolerans
          </h3>
          <p className="text-gray-700 mb-2 leading-relaxed">
            En allergi involverar immunförsvaret: IgE-antikroppar binder till mastceller och frisätter histamin vid kontakt med allergen. Reaktionen kan komma inom minuter och i värsta fall leda till anafylaxi.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Intolerans (t.ex. laktosintolerans, fruktosmalabsorption) är en icke-immunologisk reaktion orsakad av enzymbrist eller överkänslighet i mag-tarmkanalen. Symtomen – uppblåsthet, diarré, magkramp – kan likna varandra men mekanismen är helt annorlunda. IgE-allergitest mäter inte intolerans.
          </p>
          <p className="mt-3 text-gray-700">
            Vill du veta mer?{" "}
            <Link
              href="/guider/allergitestning-guide/"
              className="text-teal-700 underline hover:text-teal-900"
            >
              Läs vår kompletta guide om allergitestning hemma
            </Link>
            .
          </p>
        </section>

        {/* Vanliga kategorier */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Vanliga allergitest-kategorier
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Matallergitest</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Täcker de 14 obligatoriska allergenerna (EU-förordning) plus ett brett urval av livsmedel. Bra startpunkt om du misstänker reaktioner efter måltider.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pollenallergitest</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Identifierar vilka pollen du reagerar på under säsong. Hjälper dig att planera medicinering och utomhusaktiviteter mer träffsäkert.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Djurallergitest</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Mäter IgE mot katt-, hund-, häst- och andra pälsdjursallergen. Relevant innan du skaffar husdjur eller vid återkommande symtom i hemmet.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Korsallergitest</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Pollenallergiker reagerar ofta på råa frukter och grönsaker (oral allergisyndrom). Komponentanalys visar exakt vilka proteiner som orsakar korsreaktioner.
              </p>
            </div>
          </div>
        </section>

        {/* CTA-block */}
        <section className="mt-12 bg-teal-700 rounded-xl px-6 py-8 text-white">
          <h2 className="text-xl font-bold mb-2">Osäker på vilket test som passar dig?</h2>
          <p className="text-teal-100 mb-4 leading-relaxed">
            Se vår samlade guide med de bästa hemtesterna inom alla kategorier – rangordnade efter noggrannhet, pris och hur många ämnen som täcks.
          </p>
          <Link
            href="/basta-hemtest/"
            className="inline-block bg-white text-teal-800 font-semibold px-5 py-2.5 rounded-lg hover:bg-teal-50 transition-colors"
          >
            Se bästa hemtester 2026
          </Link>
        </section>

        <FaqAccordion items={faqs} title="Vanliga frågor om allergitester" />
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
