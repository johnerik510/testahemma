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
import { buildProductListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Blodprov Hemma April 2026 – Beställ utan Remiss från 295 kr",
  description:
    "Ta blodprov hemma utan remiss. Vi jämför Sveriges bästa hemblodprov – Werlabs, Diagnostikdirekt och fler. SWEDAC-ackrediterade lab. Svar inom 2–5 dagar.",
  alternates: { canonical: "https://www.testahemma.se/blodprov-hemma/" },
  openGraph: {
    title: "Blodprov Hemma April 2026 – Beställ utan Remiss från 295 kr",
    description:
      "Ta blodprov hemma utan remiss. Vi jämför Sveriges bästa hemblodprov – Werlabs, Diagnostikdirekt och fler. SWEDAC-ackrediterade lab. Svar inom 2–5 dagar.",
    url: "https://www.testahemma.se/blodprov-hemma/",
  },
};

const faqs = [
  {
    question: "Behöver man remiss för blodprov hemma?",
    answer:
      "Nej. Alla tester vi rekommenderar kan beställas direkt online utan remiss.",
  },
  {
    question: "Hur tillförlitligt är ett blodprov hemma?",
    answer:
      "Laboratorier med SWEDAC-ackreditering uppnår sjukhuskvalitet. Fingerblod är något mer variabelt än venöst prov men kliniskt tillförlitligt för de flesta analyser.",
  },
  {
    question: "Vad kostar ett hemblodprov?",
    answer:
      "Baspaket 295–495 kr. Hälsopaneler med 30–50 parametrar kostar 695–1 695 kr.",
  },
  {
    question: "Hur snabbt får man svar?",
    answer:
      "2–5 vardagar efter att laboratoriet tagit emot provet. Expresanalys finns hos vissa aktörer.",
  },
  {
    question: "Kan hemblodprov ersätta sjukvården?",
    answer:
      "Nej. Hemtest är ett komplement. Vid avvikande värden ska du alltid kontakta läkare.",
  },
];

export default function BlodprovHemmaPage() {
  const products = getProductsByCategory("blodtester");
  const top = products[0];
  const topUrl = top
    ? buildAffiliateUrl(
        top.affiliateUrl,
        top.network,
        top.adtractionProgramId,
        top.addRevenueProgramId,
        `TH-${top.slug}-blodprov-hemma-sticky`,
        top.awinProgramId
      )
    : "";

  const jsonLd = buildProductListSchema(
    "Blodprov hemma 2026",
    "https://www.testahemma.se/blodprov-hemma/",
    "Jämförelse av Sveriges bästa hemblodprov utan remiss – pris, innehåll och laboratoriecertifiering.",
    products,
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-6">
        <BreadcrumbNav
          items={[
            { name: "Hem", href: "/" },
            { name: "Blodprov hemma", href: "/blodprov-hemma/" },
          ]}
        />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Blodprov hemma April 2026 – ta prov utan remiss
        </h1>
        <p className="text-sm text-gray-500 mb-3">
          {products.length} tester jämförda – senast uppdaterad april 2026
        </p>
        <p className="text-lg text-gray-600 mb-2 leading-relaxed">
          Med hemblodprov kan du mäta över 100 olika blodvärden utan att boka
          tid på vårdcentral. Ingen remiss behövs. Beställ online, ta provet
          hemma och få digitala svar inom 2–5 dagar.{" "}
          <Link
            href="/guider/hur-fungerar-hemtest/"
            className="text-teal-700 underline hover:text-teal-900"
          >
            Läs vår guide om hur hemtest fungerar
          </Link>
          .
        </p>
        <MedicalDisclaimer />
        <AffiliateDisclaimer />

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Jämförelsetabell – blodprov hemma
        </h2>
        <ProductTable products={products} pageSlug="blodprov-hemma" />

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
          Detaljerade recensioner
        </h2>
        <div className="space-y-5">
          {products.map((p, i) => (
            <ProductCard
              key={p.slug}
              product={p}
              position="blodprov-hemma-list"
              rank={i + 1}
            />
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          Vad kan du mata med blodprov hemma?
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Beroende på vilken panel du väljer kan ett hemblodprov täcka ett brett
          spektrum av hälsovärden. Nedan är de vanligaste kategorierna:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>
            <strong>Blodstatus</strong> – hemoglobin, röda blodkroppar, vita
            blodkroppar, trombocyter
          </li>
          <li>
            <strong>Järnstatus</strong> – ferritin, järn, transferrin
          </li>
          <li>
            <strong>Blodsockervärden</strong> – glukos, HbA1c
          </li>
          <li>
            <strong>Lever- och njurvärden</strong> – ALAT, kreatinin, eGFR,
            bilirubin
          </li>
          <li>
            <strong>Sköldkörtelhormon</strong> – TSH, T4
          </li>
          <li>
            <strong>Vitaminer</strong> – D-vitamin, B12, folat
          </li>
          <li>
            <strong>Könshormoner</strong> – testosteron, östrogen
          </li>
          <li>
            <strong>Cancermarkörer</strong> – PSA, CA125
          </li>
        </ul>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Välj panel utifrån vad du vill veta. En bred hälsopanel ger mer
          information men kostar mer – ett baspaket räcker för de flesta som
          vill ha en grundläggande hälsokoll.{" "}
          <Link
            href="/guider/tolka-blodvarden/"
            className="text-teal-700 underline hover:text-teal-900"
          >
            Lär dig tolka dina blodvärden
          </Link>
          .
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          Hur tar man blodprov hemma?
        </h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-4">
          <li>
            <strong>Beställ provtagningskit online</strong> – välj panel utifrån
            vad du vill mata
          </li>
          <li>
            <strong>Ta fingerblodprov hemma</strong> med det medföljande
            lansettsettet (tar 10–15 min)
          </li>
          <li>
            <strong>Förslut provröret och posta</strong> i det förifyllda
            svarskuvertet
          </li>
          <li>
            <strong>Fa digitala provsvar</strong> via app/webbplats inom 2–5
            vardagar
          </li>
        </ol>
        <p className="text-gray-700 mb-4 leading-relaxed">
          <Link
            href="/guider/hur-fungerar-hemtest/"
            className="text-teal-700 underline hover:text-teal-900"
          >
            Se vår kompletta guide om hur hemtest fungerar
          </Link>{" "}
          for en steg-för-steg-genomgång med bilder och tips.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          Vanliga frågor
        </h2>
        <FaqAccordion items={faqs} />
      </main>
      {top && (
        <StickyCTA
          product={top.name}
          price={`Från ${top.priceFrom}`}
          url={topUrl}
          text={top.ctaText || "Beställ nu"}
          label="Bäst i test"
        />
      )}
      <Footer />
    </>
  );
}
