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
  title: "Fertilitetstester hemma April 2026 – AMH, FSH, Hormonpanel",
  description: "Testa din fertilitet hemma 2026. Jämför AMH, FSH, äggstocksreserv och spermieanalys. SWEDAC-ackrediterade lab. Svar inom dagar. Pris från 495 kr.",
  alternates: { canonical: "https://www.testahemma.se/fertilitetstester/" },
  openGraph: {
    title: "Fertilitetstester hemma April 2026 – AMH, FSH, Hormonpanel",
    description: "Testa din fertilitet hemma 2026. Jämför AMH, FSH, äggstocksreserv och spermieanalys. SWEDAC-ackrediterade lab. Svar inom dagar. Pris från 495 kr.",
    url: "https://www.testahemma.se/fertilitetstester/",
  },
};

const faqs = [
  {
    question: "Vad mäter ett fertilitetstest hemma?",
    answer: "Beroende på test mäts AMH (äggstocksreserv), FSH, LH och östradiol för kvinnor – eller testosteron och i vissa fall spermieantal/rörlighet för män. AMH är det vanligaste enskilda hormonet att testa för en snabb bild av äggstocksreserven."
  },
  {
    question: "Hur tillförlitligt är ett hemfertilitetstest?",
    answer: "Tester som analyseras på SWEDAC-ackrediterade laboratorier håller klinisk standard och är tillförlitliga som ett första steg. De ersätter inte en fullständig fertilitetsbedömning hos gynekolog eller reproduktionsspecialist, men ger värdefull information."
  },
  {
    question: "Behöver man fasta inför ett fertilitetstest?",
    answer: "Nej, det krävs vanligtvis ingen fasta för AMH eller övriga könshormoner. Däremot är provtagningstidpunkten i menscykeln viktig: FSH och LH mäts bäst på dag 2–5 i cykeln, medan progesteron mäts runt dag 21. Se respektive kits instruktioner."
  },
  {
    question: "Vad är AMH och varför mäts det?",
    answer: "AMH (Anti-Mülleriskt Hormon) produceras av äggfolliklar och speglar äggstocksreserven – alltså hur många ägg som finns kvar. Högt AMH kan indikera PCOS medan lågt AMH tyder på minskad äggstocksreserv. AMH påverkas inte av menscykelfasen och kan mätas när som helst."
  },
  {
    question: "Kan ett hemfertilitetstest ersätta en besök på fertilitetsklinik?",
    answer: "Nej – ett hemtest är ett komplement, inte en ersättning. Om du och din partner försökt bli gravida i mer än 12 månader (eller 6 månader om du är över 35) bör ni söka hjälp av läkare. Hemtestet kan dock ge en tidig bild och hjälpa dig att förbereda inför ett klinikbesök."
  },
  {
    question: "Vad kostar ett fertilitetstest hemma?",
    answer: "Enkla hormonpaneler (AMH, FSH, LH) kostar från 495 kr. Breda fertilitetspaneler med 5–10 markörer ligger på 695–1 295 kr. Spermieanalys hemma är ett separat test och kostar vanligtvis 499–799 kr."
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Bästa fertilitetstester hemma 2026",
  "description": "Jämförelse av hemtester för fertilitet – AMH, FSH, könshormonpanel och spermieanalys.",
  "url": "https://www.testahemma.se/fertilitetstester/",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Werlabs Hormonpanel",
      "url": "https://www.testahemma.se/recension/werlabs/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Cerascreen Fertilitetstest",
      "url": "https://www.testahemma.se/recension/cerascreen/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Verisana Hormonpanel",
      "url": "https://www.testahemma.se/recension/verisana/"
    }
  ]
};

export default function FertilitetstesterPage() {
  const products = getProductsByCategory("fertilitetstester");
  const top = products[0];
  const topUrl = top
    ? buildAffiliateUrl(
        top.affiliateUrl,
        top.network,
        top.adtractionProgramId,
        top.addRevenueProgramId,
        `TH-${top.slug}-fertilitetstester-sticky`,
        top.awinProgramId
      )
    : "";

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
            { name: "Fertilitetstester", href: "/fertilitetstester/" },
          ]}
        />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Fertilitetstester hemma April 2026 – jämförelse av AMH, FSH och hormonpaneler
        </h1>
        <p className="text-sm text-gray-500 mb-3">
          {products.length} tester jämförda – senast uppdaterad april 2026
        </p>
        <p className="text-lg text-gray-600 mb-2 leading-relaxed">
          Fertilitetstester hemma gör det möjligt att mäta centrala hormoner kopplade till fortplantning –
          utan remiss och utan klinikbesök. Vi har jämfört de bästa alternativen för både kvinnor och män,
          från AMH och FSH till spermieanalys. Resultaten ger en tidig bild och kan hjälpa dig att förbereda
          ett samtal med din gynekolog eller läkare.
        </p>
        <MedicalDisclaimer />
        <AffiliateDisclaimer />

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Jämförelsetabell – fertilitetstester hemma
        </h2>
        <ProductTable products={products} pageSlug="fertilitetstester" />

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Detaljerade recensioner</h2>
        <div className="space-y-5">
          {products.map((p, i) => (
            <ProductCard
              key={p.slug}
              product={p}
              position="fertilitetstester-list"
              rank={i + 1}
            />
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          Vilka hormoner ska man mäta?
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          {[
            {
              hormon: "AMH (Anti-Mülleriskt Hormon)",
              vad: "Mäter äggstocksreserven – hur många ägg som finns kvar",
              nar: "Kan tas när som helst i cykeln",
              for: "Kvinnor som vill veta sin äggstocksreserv"
            },
            {
              hormon: "FSH (Follikelstimulerande hormon)",
              vad: "Högt FSH på dag 2–5 kan tyda på minskad äggstocksreserv",
              nar: "Dag 2–5 i menscykeln",
              for: "Komplement till AMH för äggstocksreserv"
            },
            {
              hormon: "LH (Luteiniserande hormon)",
              vad: "Styr ägglossningen. Högt LH-/FSH-kvotvärde kan indikera PCOS",
              nar: "Dag 2–5 i menscykeln",
              for: "PCOS-utredning, ägglossningsproblem"
            },
            {
              hormon: "Östradiol (E2)",
              vad: "Primärt östrogen – viktigt för ägglossning och befruktning",
              nar: "Dag 2–5 i menscykeln",
              for: "Hormonell obalans, klimakteriebesvär"
            },
            {
              hormon: "Progesteron",
              vad: "Bekräftar om ägglossning ägt rum",
              nar: "Runt dag 21 i en 28-dagarscykel",
              for: "Kontroll av ägglossning"
            },
            {
              hormon: "Testosteron (män)",
              vad: "Lågt testosteron påverkar spermiekvalitet och libido",
              nar: "Morgon (nivåerna är som högst)",
              for: "Manlig fertilitetsbedömning"
            },
          ].map((item) => (
            <div key={item.hormon} className="border border-gray-200 rounded-lg p-4 bg-white">
              <p className="font-semibold text-gray-900 text-sm">{item.hormon}</p>
              <p className="text-sm text-gray-600 mt-1">{item.vad}</p>
              <p className="text-xs text-teal-700 mt-2 font-medium">Provtagning: {item.nar}</p>
              <p className="text-xs text-gray-500 mt-1">Passar: {item.for}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          Hur väljer man rätt fertilitetstest?
        </h2>
        <div className="prose-guide space-y-4">
          <p>
            Vilket test som passar beror på vad du vill ta reda på och var du befinner dig i din fertilitetsbedömning.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
            Snabb screening – börja med AMH
          </h3>
          <p>
            Om du vill ha en snabb bild av din äggstocksreserv utan att mäta hela hormonprofilen är ett
            enskilt <strong>AMH-test</strong> det enklaste steget. AMH kan mätas när som helst i menscykeln
            och ger ett stabilt svar. Högt AMH (över 4–5 nmol/L) tyder på god äggstocksreserv, medan lågt
            AMH (under 1 nmol/L) kan signalera minskad reserv.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
            Bred fertilitetspanel – för en fullständigare bild
          </h3>
          <p>
            Vill du ha ett mer komplett underlag inför ett samtal med läkare eller fertilitetsklinik är en
            <strong> fertilitetspanel</strong> med AMH, FSH, LH och östradiol mer informativ. Dessa mäts
            bäst på dag 2–5 i menscykeln. Progesteron (dag 21) kan läggas till för att bekräfta att ägglossning sker.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
            Manlig fertilitet
          </h3>
          <p>
            Manlig infertilitet orsakar ungefär hälften av alla fall av ofrivillig barnlöshet. Ett enkelt
            <strong> testosterontest</strong> kan ingå i en bred hormonpanel. För spermieanalys (antal, rörlighet,
            morfologi) finns separata hemtester – kontrollera att laboratoriet är ISO-certifierat.
          </p>
        </div>

        <div className="bg-teal-700 rounded-xl p-6 sm:p-8 mt-10 text-white">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">
            Osäker på vilket hemtest som passar dig?
          </h2>
          <p className="text-teal-100 mb-4">
            Se vår kompletta jämförelse av alla kategorier – blodtester, hormontester, STI och mer.
          </p>
          <Link
            href="/basta-hemtest/"
            className="inline-block bg-white text-teal-800 font-semibold px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors"
          >
            Se bästa hemtest 2026
          </Link>
        </div>

        <div className="mt-8 p-5 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3">Relaterade guider</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/guider/hormoner-och-halsa/" className="text-teal-700 underline hover:text-teal-900">
                Hormoner och hälsa – guide till hormonella obalanser
              </Link>
            </li>
            <li>
              <Link href="/hormontester/" className="text-teal-700 underline hover:text-teal-900">
                Hormontester hemma – fullständig jämförelse
              </Link>
            </li>
            <li>
              <Link href="/blodtester/" className="text-teal-700 underline hover:text-teal-900">
                Blodtester hemma – se alla alternativ
              </Link>
            </li>
          </ul>
        </div>

        <FaqAccordion items={faqs} title="Vanliga frågor om fertilitetstester" />
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
