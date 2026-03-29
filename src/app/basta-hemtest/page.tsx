import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import ProductCard from "@/components/ProductCard";
import ProductTable from "@/components/ProductTable";
import FaqAccordion from "@/components/FaqAccordion";
import AffiliateDisclaimer from "@/components/AffiliateDisclaimer";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import StickyCTA from "@/components/StickyCTA";
import { products } from "@/data/products";
import { buildAffiliateUrl } from "@/lib/tracking";

export const metadata: Metadata = {
  title: "Bästa Hemtest 2026 – Topplista & Jämförelse",
  description: "Vilket hemtest är bäst 2026? Vi testar Werlabs, Cerascreen, Testmottagningen och Biovis. SWEDAC-ackrediterade lab. Pris fr. 299 kr. Se topplistan.",
  alternates: { canonical: "https://www.testahemma.se/basta-hemtest/" },
  openGraph: {
    title: "Bästa Hemtest 2026 – Topplista & Jämförelse",
    description: "Vilket hemtest är bäst 2026? Vi testar Werlabs, Cerascreen, Testmottagningen och Biovis. SWEDAC-ackrediterade lab. Pris fr. 299 kr. Se topplistan.",
    url: "https://www.testahemma.se/basta-hemtest/",
  },
};

const faqs = [
  { question: "Vilket är det bästa hemtestet 2026?", answer: "Det beror på vad du vill mäta. Werlabs är bäst för blodvärden (SWEDAC-ackrediterat, bredast utbud). Cerascreen är bäst för vitaminer och allergi (störst sortiment, lägst pris). Testmottagningen är bäst för STI (snabbast, mest diskret). Biovis är bäst för tarmhälsa." },
  { question: "Hur väljer man rätt hemtest?", answer: "Börja med att identifiera vad du vill undersöka: specifika symtom, proaktiv hälsokontroll eller en viss markör. Välj sedan ett ackrediterat laboratorium, jämför vad som ingår i panelen och kontrollera provtagningsmetod (fingerblod vs. venöst)." },
  { question: "Är hemtester säkra och tillförlitliga?", answer: "Ja, om de analyseras av ett ackrediterat laboratorium (SWEDAC eller ISO 15189). Alla tester vi rekommenderar på Testahemma.se uppfyller detta krav. Fingerblodsprov är något mer variabelt än venöst blodprov, men ger kliniskt användbara svar." },
  { question: "Kan jag avdra hemtest på skatten?", answer: "Hemtest för privat hälsokontroll kan i vissa fall vara avdragsgilla om de är arbetsrelaterade eller förskrivna av läkare. Konsultera en revisor för aktuella skatteregler." },
  { question: "Hur lång tid tar det att ta ett hemtest?", answer: "Själva provtagningen tar normalt 10–15 minuter aktiv tid. Du sticker i fingertoppen, samlar ett par droppar blod (eller lämnar saliv/urin beroende på testtyp), försluter provröret och postar det. Analysen på laboratoriet tar sedan 1–5 vardagar beroende på leverantör." },
  { question: "Kan hemtester ersätta sjukvården?", answer: "Nej – hemtester är ett komplement, inte en ersättning. De ger dig värdefull information om din hälsa och kan hjälpa dig att agera proaktivt, men de ersätter aldrig en läkarbedömning. Vid avvikande provsvar ska du alltid kontakta din läkare eller vårdcentral för rådgivning och eventuell uppföljning." },
];

export default function BastaHemtestPage() {
  const sorted = [...products].sort((a, b) => b.rating - a.rating);
  const top = sorted[0];
  const topUrl = top ? buildAffiliateUrl(top.affiliateUrl, top.network, top.adtractionProgramId, top.addRevenueProgramId, `TH-${top.slug}-basta-hemtest-sticky`, top.awinProgramId) : "";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Bästa hemtester 2026",
    description: "Rankad lista över Sveriges bästa hemtestningskit för blodvärden, hormoner, STI, vitaminer och tarmhälsa.",
    url: "https://www.testahemma.se/basta-hemtest/",
    numberOfItems: sorted.length,
    itemListElement: sorted.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `https://www.testahemma.se/recension/${p.slug}/`,
      description: p.shortDescription,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-6">
        <BreadcrumbNav items={[{ name: "Hem", href: "/" }, { name: "Bästa hemtest", href: "/basta-hemtest/" }]} />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Bästa hemtester 2026 – komplett jämförelse</h1>
        <p className="text-sm text-gray-500 mb-2">{sorted.length} tester jämförda – senast uppdaterad mars 2026</p>
        <AffiliateDisclaimer />

        <h2 className="text-2xl font-bold text-gray-900 mt-3 mb-2">Snabbvy – alla hemtester</h2>
        <ProductTable products={sorted} pageSlug="basta-hemtest" />
        <MedicalDisclaimer />

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Rankad lista – bästa hemtesterna 2026</h2>
        <div className="space-y-5">
          {sorted.map((p, i) => <ProductCard key={p.slug} product={p} position="basta-hemtest" rank={i + 1} />)}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Vad ska man välja?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "Bäst för blodvärden", name: "Werlabs", href: "/recension/werlabs/", desc: "SWEDAC-ackrediterat, bredast testutbud, gratis läkarkonsultation" },
            { title: "Bäst för vitaminer & allergi", name: "Cerascreen", href: "/recension/cerascreen/", desc: "Störst sortiment, lägst pris, 50+ test att välja bland" },
            { title: "Bäst för STI", name: "Testmottagningen", href: "/recension/testmottagningen/", desc: "Snabbast svar (1–3 dagar), maximalt diskret" },
            { title: "Bäst för tarmhälsa", name: "Biovis", href: "/recension/biovis/", desc: "Avancerad DNA-sekvensering, personliga kostråd" },
          ].map((item) => (
            <Link key={item.title} href={item.href} className="block bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-teal-200 transition-all">
              <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-1">{item.title}</div>
              <div className="font-bold text-gray-900 text-lg">{item.name}</div>
              <div className="text-sm text-gray-500 mt-1">{item.desc}</div>
            </Link>
          ))}
        </div>

        {/* Köpguide */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Så väljer du rätt hemtest – komplett köpguide</h2>

        <div className="space-y-6 mb-10">
          <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Bestäm vad du vill mäta</h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              Det första steget är att identifiera vilket hälsoområde du vill undersöka. Välj rätt kategori från start så undviker du att betala för parametrar du inte behöver.
            </p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li><Link href="/blodtester/" className="text-teal-600 hover:underline font-medium">Blodtester</Link> – hemoglobin, ferritin, CRP, glukos och allmän hälsostatus</li>
              <li><Link href="/hormontester/" className="text-teal-600 hover:underline font-medium">Hormontester</Link> – TSH, testosteron, östradiol, kortisol</li>
              <li><Link href="/fertilitetstester/" className="text-teal-600 hover:underline font-medium">Fertilitetstester</Link> – AMH, FSH, äggstocksreserv och spermieanalys</li>
              <li><Link href="/sti-tester/" className="text-teal-600 hover:underline font-medium">STI-tester</Link> – klamydia, gonorré, syfilis, HIV</li>
              <li><Link href="/vitamintester/" className="text-teal-600 hover:underline font-medium">Vitamintester</Link> – D-vitamin, B12, folat, järn</li>
              <li><Link href="/tarmhalsa/" className="text-teal-600 hover:underline font-medium">Tarmhälsa</Link> – mikrobiom, tarmflora, matsmältningsproblem</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Kontrollera laboratoriekvaliteten</h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              Laboratoriet bakom analysen är den viktigaste faktorn för tillförlitliga svar. Kontrollera alltid att leverantören uppfyller minst ett av dessa krav:
            </p>
            <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
              <li><span className="font-semibold">SWEDAC-ackreditering</span> – svensk ackreditering som motsvarar sjukhuslaboratoriers krav</li>
              <li><span className="font-semibold">ISO 15189</span> – internationell standard specifikt för medicinska laboratorier</li>
              <li><span className="font-semibold">CE-märkning</span> – obligatorisk för diagnostiska produkter som säljs inom EU, men räcker inte ensam</li>
            </ul>
            <p className="text-sm text-gray-500 mt-3">Alla tester vi rekommenderar på Testahemma.se uppfyller minst ett av dessa krav.</p>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Jämför pris per parameter</h3>
            <p className="text-gray-600 leading-relaxed">
              Stirra inte enbart på totalpriset – räkna ut vad varje enskild markör kostar. Ett test för 999 kr som mäter 30 parametrar kostar 33 kr per parameter, medan ett test för 399 kr med 5 parametrar kostar 80 kr per parameter. Om du bara behöver kontrollera D-vitamin och B12 är ett fokuserat vitaminkittest ofta billigare och mer träffsäkert än en bred hälsopanel.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Provtagningsmetod</h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              Provtagningsmetoden påverkar både bekvämlighet och precision. Välj den metod som passar din situation:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="font-semibold text-gray-800 mb-1">Fingerblod (kapillärblod)</div>
                <div className="text-gray-600">Enkelt hemma, liten nål i fingertoppen. Något mer variabelt men kliniskt tillförlitligt för de flesta markörer.</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="font-semibold text-gray-800 mb-1">Venöst blodprov</div>
                <div className="text-gray-600">Högst precision. Tas via provtagningsstation eller av sjuksköterska – passar dig som vill ha maximalt tillförlitliga svar.</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="font-semibold text-gray-800 mb-1">Saliv</div>
                <div className="text-gray-600">Används för hormonanalyser (t.ex. kortisol) och STI-tester. Smidigast – ingen nål, ingen blod.</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="font-semibold text-gray-800 mb-1">Urin</div>
                <div className="text-gray-600">Vanlig metod för STI-tester och metabola markörer. Enkelt att samla hemma utan specialutrustning.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Populära kategorier */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Populära kategorier</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {[
            { name: "Blodtester", href: "/blodtester/" },
            { name: "Vitamintester", href: "/vitamintester/" },
            { name: "Hormontester", href: "/hormontester/" },
            { name: "Fertilitetstester", href: "/fertilitetstester/" },
            { name: "STI-tester", href: "/sti-tester/" },
            { name: "Allergitester", href: "/allergitester/" },
            { name: "Kolesteroltester", href: "/kolesteroltester/" },
            { name: "Cancermarkörer", href: "/cancermarkorer/" },
            { name: "Tarmhälsa", href: "/tarmhalsa/" },
          ].map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="block text-center bg-white border border-gray-100 rounded-xl py-3 px-2 text-sm font-medium text-gray-700 shadow-sm hover:border-teal-300 hover:text-teal-700 hover:shadow-md transition-all"
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Guider */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Lär dig mer – våra guider</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/guider/hur-fungerar-hemtest/" className="flex-1 block bg-white border border-gray-100 rounded-lg p-4 hover:border-teal-200 hover:shadow-sm transition-all">
              <div className="font-semibold text-teal-700 mb-1">Hur fungerar ett hemtest?</div>
              <div className="text-sm text-gray-500">Steg-för-steg genomgång från beställning till svar</div>
            </Link>
            <Link href="/guider/tolka-blodvarden/" className="flex-1 block bg-white border border-gray-100 rounded-lg p-4 hover:border-teal-200 hover:shadow-sm transition-all">
              <div className="font-semibold text-teal-700 mb-1">Tolka dina blodvärden</div>
              <div className="text-sm text-gray-500">Vad referensvärdena betyder och när du bör agera</div>
            </Link>
          </div>
        </div>

        {/* CTA-block */}
        <div className="bg-teal-600 rounded-2xl p-6 sm:p-8 mb-10 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Redo att ta kontroll över din hälsa?</h3>
          <p className="text-teal-100 mb-5 max-w-xl mx-auto">
            Jämför alla hemtester och hitta det som passar dina behov – snabba svar, ackrediterade laboratorier, leverans hem till dörren.
          </p>
          <Link
            href="/blodtester/"
            className="inline-block bg-white text-teal-700 font-bold px-7 py-3 rounded-xl hover:bg-teal-50 transition-colors shadow-sm"
          >
            Se alla blodtester
          </Link>
        </div>

        <FaqAccordion items={faqs} title="Vanliga frågor om bästa hemtest" />
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
