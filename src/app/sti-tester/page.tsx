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
  title: "STI-tester Hemma 2026 — Diskret & Snabbt | Testahemma.se",
  description: "Testa dig för könssjukdomar hemma – klamydia, gonorré, HIV och mer. Diskret leverans, svar inom 1–3 dagar. Jämför de bästa STI-testerna.",
  alternates: { canonical: "https://www.testahemma.se/sti-tester/" },
  openGraph: {
    title: "STI-tester Hemma 2026 — Diskret & Snabbt | Testahemma.se",
    description: "Testa dig för könssjukdomar hemma – klamydia, gonorré, HIV och mer. Diskret leverans, svar inom 1–3 dagar.",
    url: "https://www.testahemma.se/sti-tester/",
  },
};

const faqs = [
  {
    question: "Vilka STI kan man testa för hemma?",
    answer: "De flesta STI-hemtester täcker klamydia, gonorré, syfilis, HIV 1+2, herpes simplex typ 1 och 2, HPV, hepatit B och C samt mykoplasma genitalium.",
  },
  {
    question: "Är STI-testet verkligen anonymt?",
    answer: "Ja. De bästa aktörerna erbjuder helt anonyma tester utan personnummer, med leverans i neutralt paket och svar via engångskod på säker webbportal.",
  },
  {
    question: "Hur snabbt kan man testa sig efter exponering?",
    answer: "Detektionstid varierar per sjukdom. Klamydia och gonorré: 1–2 veckor. HIV (4:e gen. test): 2–4 veckor. Syfilis: 3–6 veckor. Herpes IgG: 3–12 veckor. Testa för tidigt ger falskt negativa svar – vänta tills rekommenderad fönsterperiod passerat.",
  },
  {
    question: "Vad gör jag om resultatet är positivt?",
    answer: "Kontakta din vårdcentral eller en STI-mottagning omedelbart. De flesta könssjukdomar (klamydia, gonorré, syfilis) behandlas effektivt med antibiotika. HIV behandlas med antiretrovirala läkemedel.",
  },
  {
    question: "Vilken provtagningsmetod används i hemtesterna?",
    answer: "Det beror på vilken STI som testas. Klamydia och gonorré diagnosticeras vanligtvis via urinprov eller svabb. HIV, syfilis och hepatit kräver blodprov – antingen via ett litet stickprov på fingret (fingerstick) eller venblod. Herpes och HPV testas med svabb från slemhinnor. Paneltest skickar med alla provtagningsinstrument i ett paket.",
  },
  {
    question: "Är STI-tester diskreta?",
    answer: "Ja. Seriösa aktörer skickar alltid i neutralt ytterpaket utan avsändarinformation som avslöjar innehållet. Betalningen syns på kontoutdraget under ett generiskt företagsnamn. Svaret levereras digitalt via en säker portal eller e-post – inte med vanlig post.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Bästa STI-tester hemma 2026",
  "description": "Jämförelse av de bästa STI-hemtesterna på den svenska marknaden.",
  "url": "https://www.testahemma.se/sti-tester/",
};

export default function StiTesterPage() {
  const products = getProductsByCategory("sti-tester");
  const top = products[0];
  const topUrl = top ? buildAffiliateUrl(top.affiliateUrl, top.network, top.adtractionProgramId, top.addRevenueProgramId, `TH-${top.slug}-sti-tester-sticky`, top.awinProgramId) : "";

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
            { name: "STI-tester", href: "/sti-tester/" },
          ]}
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          STI-tester hemma 2026 – diskret och snabbt
        </h1>
        <p className="text-sm text-gray-500 mb-3">{products.length} tester jämförda – senast uppdaterad mars 2026</p>
        <p className="text-lg text-gray-600 mb-2 leading-relaxed">
          Moderna STI-hemtester gör det enkelt att testa sig för könssjukdomar utan att besöka klinik. Diskret leverans, anonym provtagning och svar digitalt inom 1–3 dagar.
        </p>

        <MedicalDisclaimer />
        <AffiliateDisclaimer />

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Jämförelsetabell – STI-tester hemma</h2>
        <ProductTable products={products} pageSlug="sti-tester" />

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Detaljerade recensioner</h2>
        <div className="space-y-5">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} position="sti-list" rank={i + 1} />
          ))}
        </div>

        {/* Varför testa sig */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Varför testa sig?</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Klamydia är den vanligaste anmälningspliktiga sjukdomen i Sverige med runt 30 000 nya fall per år enligt Folkhälsomyndigheten. Gonorré har ökat stadigt sedan 2010-talet, och syfilis är på en historiskt hög nivå. Det oroväckande är att de flesta STI saknar tydliga symtom – uppskattningsvis 70–80 procent av alla klamydiainfektioner ger inga besvär alls.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Obehandlade könssjukdomar kan leda till allvarliga komplikationer: infertilitet, kronisk smärta och ökad risk att föra vidare andra infektioner inklusive HIV. Regelbunden testning är därför viktigt för alla som är sexuellt aktiva – inte bara vid symtom.
          </p>
          <p className="text-gray-700 leading-relaxed">
            STI-hemtester tar bort de praktiska hindren: ingen tid att boka, inget väntrumsstigma och möjlighet att testa sig helt anonymt. Läs vår guide om du vill veta mer:{" "}
            <Link href="/guider/sti-testa-hemma/" className="text-teal-700 underline hover:text-teal-900">
              Hur man testar sig för STI hemma
            </Link>
            {" "}eller vår fördjupade guide om{" "}
            <Link href="/guider/klamydia-test-hemma/" className="text-teal-700 underline hover:text-teal-900">
              klamydia test hemma
            </Link>
            .
          </p>
        </section>

        {/* Köpguide */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Hur väljer man rätt STI-test?</h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Vilka STI kan testas hemma?</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Ett bra paneltest täcker de vanligaste och allvarligaste könssjukdomarna: <strong>klamydia</strong>, <strong>gonorré</strong>, <strong>syfilis</strong>, <strong>HIV 1 och 2</strong>, <strong>herpes simplex typ 1 och 2</strong>, <strong>HPV</strong> (högrisk-stammar), <strong>hepatit B och C</strong> samt <strong>mykoplasma genitalium</strong>. Ju fler markörer som ingår, desto mer komplett bild får du av din hälsa med ett enda prov.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Provtagningsmetoder</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Metoden varierar beroende på vilken STI som diagnosticeras:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-3">
            <li><strong>Urinprov:</strong> Används för klamydia och gonorré. Enkelt att ta hemma – samla ett morgonprov i det medföljande provröret.</li>
            <li><strong>Svabb:</strong> Används för herpes, HPV och kompletterande klamydia-/gonorré-test från slemhinnor (hals, rektalt). Medföljande pinnar och instruktioner ingår alltid.</li>
            <li><strong>Blodprov (fingerstick):</strong> Krävs för HIV, syfilis, hepatit B och C. En liten lansett sticks mot fingertoppens sida – några droppar räcker. Blodkortet skickas till laboratoriet i bifogat kuvert.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Paneltester skickar alla nödvändiga provtagningsinstrument i ett paket – du behöver aldrig köpa något extra.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Inkubationstider – vänta tillräckligt länge</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Varje STI har en fönsterperiod där testet kan ge falskt negativt svar om man testar för tidigt efter en möjlig exponering:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-3">
            <li><strong>Klamydia och gonorré:</strong> 1–2 veckor</li>
            <li><strong>HIV (4:e generationens kombinationstest):</strong> 2–4 veckor</li>
            <li><strong>Syfilis:</strong> 3–6 veckor</li>
            <li><strong>Herpes IgG-antikroppar:</strong> 3–12 veckor</li>
            <li><strong>Hepatit B och C:</strong> 6–8 veckor (antigen/antikropp)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Är du osäker på när exponering skedde rekommenderas ett uppföljningstest efter 12 veckor för säkrare resultat, framför allt gällande HIV och syfilis.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Anonymitet och diskretion</h3>
          <p className="text-gray-700 leading-relaxed">
            Seriösa aktörer garanterar full diskretion: neutralt ytterpaket, anonymt användarnamn utan personnummer och svar via säker digital portal. Välj aktörer som är tydliga med sin anonymitetspolicy och som har ackrediterade laboratorier i Sverige eller EU.
          </p>
        </section>

        {/* Teal CTA block */}
        <div className="mt-12 rounded-2xl bg-teal-50 border border-teal-200 p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-teal-900 mb-2">Vill du veta mer om hur hemtestning fungerar?</h2>
            <p className="text-teal-800 leading-relaxed">
              Vår kompletta guide tar dig igenom hela processen – från att beställa testet till att tolka svaret och vad du gör vid ett positivt resultat.
            </p>
          </div>
          <Link
            href="/guider/sti-testa-hemma/"
            className="shrink-0 rounded-xl bg-teal-700 px-6 py-3 text-white font-semibold hover:bg-teal-800 transition-colors"
          >
            Läs guiden
          </Link>
        </div>

        <FaqAccordion items={faqs} title="Vanliga frågor om STI-tester hemma" />
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
