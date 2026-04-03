import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Fertilitetstest Hemma 2026 – AMH, FSH och Hormonpanel",
  description: "Komplett guide till fertilitetstest hemma 2026. Lär dig vad AMH, FSH och äggstocksreserv innebär, hur du tolkar svaren och vilket test du ska välja.",
  alternates: { canonical: "https://www.testahemma.se/guider/fertilitet-test-hemma/" },
  openGraph: {
    title: "Fertilitetstest Hemma 2026 – AMH, FSH och Hormonpanel",
    description: "Komplett guide till fertilitetstest hemma 2026. Lär dig vad AMH, FSH och äggstocksreserv innebär, hur du tolkar svaren och vilket test du ska välja.",
    url: "https://www.testahemma.se/guider/fertilitet-test-hemma/",
  },
};

const faqs = [
  {
    question: "Kan man göra ett fertilitetstest hemma?",
    answer: "Ja. Moderna hemtester mäter AMH, FSH, LH, östradiol och progesteron via ett fingerblodsprov eller venöst prov. Tester analyserade på SWEDAC-ackrediterade laboratorier håller klinisk standard och ger ett tillförlitligt första underlag."
  },
  {
    question: "Vad är ett bra AMH-värde?",
    answer: "Referensvärden varierar med ålder. Generellt anses AMH över 2,2 pmol/L (0,31 ng/mL) normalt för fertil ålder. Under 1,0 pmol/L betraktas som lågt. Högt AMH (över 40 pmol/L) kan indikera PCOS. Tolka alltid värdet i relation till din ålder och prata med läkare om avvikande resultat."
  },
  {
    question: "När på dagen ska man ta ett hormonstest?",
    answer: "Kortisol och testosteron är som högst på morgonen – ta dessa prov före kl 10. AMH är cykloberoende och kan tas när som helst. FSH, LH och östradiol bör tas på dag 2–5 i menscykeln. Se alltid de specifika instruktionerna för ditt kit."
  },
  {
    question: "Hur lång tid tar det att få svar?",
    answer: "De flesta hemfertilitetstest analyseras på ett laboratorium och ger svar inom 2–5 vardagar efter att laboratoriet tagit emot provet."
  },
  {
    question: "Vad gör man om resultaten är avvikande?",
    answer: "Kontakta alltid din läkare eller gynekolog vid avvikande värden. Hemtestet är ett underlag – inte en diagnos. En specialist kan beställa kompletterande prover och bedöma din individuella situation."
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Fertilitetstest hemma 2026 – komplett guide till AMH, FSH och hormonpanel",
  "description": "Guide om hur fertilitetstest hemma fungerar, vilka hormoner som mäts och hur du tolkar resultaten.",
  "url": "https://www.testahemma.se/guider/fertilitet-test-hemma/",
  "author": { "@type": "Person", "name": "Anna Lindström" },
  "datePublished": "2026-03-29",
  "dateModified": "2026-03-29",
  "publisher": {
    "@type": "Organization",
    "name": "Testahemma.se",
    "url": "https://www.testahemma.se"
  }
};

export default function FertilitetTestHemmaGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <BreadcrumbNav
          items={[
            { name: "Hem", href: "/" },
            { name: "Guider", href: "/guider/" },
            { name: "Fertilitetstest hemma", href: "/guider/fertilitet-test-hemma/" },
          ]}
        />
        <p className="text-sm text-gray-500 mb-2">
          Granskad av Anna Lindström, leg. biomedicinsk analytiker &bull; Uppdaterad mars 2026
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Fertilitetstest hemma – komplett guide till AMH, FSH och hormonpanel
        </h1>
        <MedicalDisclaimer />

        <div className="prose-guide space-y-5 mt-6">
          <p>
            Ofrivillig barnlöshet berör ungefär var sjunde par i Sverige. Att tidigt ta reda på sin fertilitetsstatus kan ge
            värdefull information – och minska den tid det tar att söka rätt hjälp. Moderna <strong>fertilitetstester hemma</strong>
            gör det möjligt att mäta centrala hormoner utan att behöva boka tid på klinik.
          </p>
          <p>
            Den här guiden förklarar vilka hormoner som mäts, vad värdena betyder och hur du väljer rätt test utifrån din situation.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
            Vad mäter ett hemfertilitetstest?
          </h2>
          <p>
            De vanligaste hormonerna i ett hemfertilitetstest är:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>AMH (Anti-Mülleriskt Hormon)</strong> – det viktigaste enskilda måttet på äggstocksreserv. Stabilt genom hela cykeln.</li>
            <li><strong>FSH (Follikelstimulerande hormon)</strong> – stiger naturligt när äggstocksreserven minskar. Mäts dag 2–5.</li>
            <li><strong>LH (Luteiniserande hormon)</strong> – utlöser ägglossning. Hög LH/FSH-kvot kan indikera PCOS.</li>
            <li><strong>Östradiol (E2)</strong> – primärt östrogen, viktig för ägglossning och livmoderslemhinnans uppbyggnad.</li>
            <li><strong>Progesteron</strong> – mäts runt dag 21 för att bekräfta att ägglossning har skett.</li>
            <li><strong>Testosteron</strong> – påverkar spermiekvalitet hos män och kan vara förhöjt vid PCOS hos kvinnor.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
            AMH – äggstocksreservens viktigaste markör
          </h2>
          <p>
            AMH produceras av de outvecklade äggfolliklarna i äggstockarna. En hög koncentration tyder på många kvarvarande
            folliklar – en god äggstocksreserv. En låg koncentration innebär färre folliklar och kan göra det svårare att
            bli gravid, särskilt med assisterad befruktning.
          </p>
          <p>
            AMH är det enda fertilitetshormonet som kan mätas när som helst i menscykeln utan att värdet påverkas nämnvärt.
            Det gör det praktiskt för hemtestning.
          </p>
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 my-4">
            <p className="font-semibold text-gray-900 mb-2">Riktmärken för AMH (varierar med ålder)</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Över 15 pmol/L – hög äggstocksreserv (möjlig PCOS om mycket hög)</li>
              <li>5–15 pmol/L – normal äggstocksreserv</li>
              <li>2,2–5 pmol/L – lägre normal – vanligt från ca 35 år</li>
              <li>Under 2,2 pmol/L – låg äggstocksreserv</li>
              <li>Under 1,0 pmol/L – mycket låg äggstocksreserv</li>
            </ul>
            <p className="text-xs text-gray-500 mt-2">
              Referensvärden varierar mellan laboratorier. Tolka alltid i relation till ålder och prata med läkare.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
            FSH och LH – cykelberoende hormoner
          </h2>
          <p>
            FSH och LH bör mätas på <strong>dag 2–5 i menscykeln</strong> (räknat från första dagen med ordentlig blödning).
            FSH stiger naturligt med åldern när äggstocksreserven minskar – ett FSH under 10 IE/L på dag 3 anses normalt
            i de flesta laboratorier, medan värden över 12–15 IE/L kan tyda på minskad fertilitet.
          </p>
          <p>
            LH/FSH-kvoten används ibland för att bedöma PCOS: en kvot över 2:1 i kombination med andra symtom
            (oregelbunden mens, förhöjt testosteron) stärker misstanken om PCOS.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
            Manlig fertilitet – testosteron och spermier
          </h2>
          <p>
            Manlig infertilitet bidrar till ungefär hälften av alla fall av ofrivillig barnlöshet. Normalt
            testosteron (9–35 nmol/L) är nödvändigt för spermieproduktionen. Testosteron kan enkelt mätas med ett hemblodtest.
          </p>
          <p>
            För en fullständig bild av manlig fertilitet behövs dock en <strong>spermieanalys</strong> som mäter antal,
            rörlighet och morfologi. Specialiserade hemtest för spermieanalys finns men är mer komplexa – sökas via
            fertilitetsklinik för bästa precision.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
            Hur tolkar man svaren?
          </h2>
          <p>
            Ett hemfertilitetstest ger dig ett laboratoriesvar med ditt uppmätta värde och ett referensintervall.
            Kom ihåg:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Referensintervallet är populationsbaserat – ett värde nära gränsen är inte nödvändigtvis problematiskt.</li>
            <li>Hormonnivåer är alltid en del av en helhetsbedömning – ålder, symtom och menscykelregelbundenhet spelar in.</li>
            <li>Ett enskilt avvikande prov är inte detsamma som en diagnos. Alltid upprepa och bekräfta med läkare.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
            När ska man söka vård?
          </h2>
          <p>
            Sök läkare eller gynekolog om:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Du försökt bli gravid i mer än <strong>12 månader</strong> (under 35 år) utan resultat.</li>
            <li>Du är <strong>35 år eller äldre</strong> och försökt i mer än 6 månader.</li>
            <li>Du har oregelbunden eller uteblivande mens.</li>
            <li>Du har avvikande hormonvärden i ditt hemtest.</li>
          </ul>
          <p>
            Hemtestet kan vara ett värdefullt underlag att ta med till läkarbesöket.
          </p>

          <div className="bg-teal-50 border border-teal-200 rounded-xl p-5 mt-6">
            <p className="font-semibold text-teal-900 mb-2">Redo att testa?</p>
            <p className="text-sm text-teal-700 mb-3">
              Se vår jämförelse av de bästa fertilitetstest hemma – med pris, innehåll och laboratoriekvalitet.
            </p>
            <Link
              href="/fertilitetstester/"
              className="inline-block bg-teal-700 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-teal-800 transition-colors text-sm"
            >
              Jämfor fertilitetstester
            </Link>
          </div>
        </div>

        <FaqAccordion items={faqs} title="Vanliga frågor om fertilitetstest hemma" />
      </main>
      <Footer />
    </>
  );
}
