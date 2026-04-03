import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import AffiliateDisclaimer from "@/components/AffiliateDisclaimer";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import FaqAccordion from "@/components/FaqAccordion";
import StickyCTA from "@/components/StickyCTA";

export const metadata: Metadata = {
  title: "Cerascreen vs Verisana 2026 — vilket hemtest passar dig?",
  description:
    "Vi jämför Cerascreen och Verisana 2026. Cerascreen bäst för vitaminer och allergi. Verisana bäst för hormoner och mikrobiom. Vilket ska du välja?",
  alternates: { canonical: "https://www.testahemma.se/cerascreen-vs-verisana/" },
  openGraph: {
    title: "Cerascreen vs Verisana 2026 — vitaminer vs hormoner",
    description:
      "Cerascreen dominerar vitamintester och allergi. Verisana specialiserar på hormoner via salivprov och mikrobiomanalys. Vi avgör vilket som passar din hälsokontroll.",
    url: "https://www.testahemma.se/cerascreen-vs-verisana/",
    siteName: "Testahemma.se",
    locale: "sv_SE",
    type: "article",
  },
};

const faqs = [
  {
    question: "Cerascreen eller Verisana — vilket hemtest är bäst?",
    answer:
      "Det beror på vad du vill testa. Cerascreen är bäst för vitamintester (D-vitamin, B12, järn, folsyra), allergitester (40+ livsmedel) och tungt metaller. Verisana är bäst för hormonpaneler (kortisol, testosteron, östrogen via salivprov) och mikrobiomanalys. Vill du kolla vitaminstatus eller matallergier: Cerascreen. Vill du analysera stresshormoner eller tarmfloran: Verisana.",
  },
  {
    question: "Är Cerascreen och Verisana pålitliga?",
    answer:
      "Ja, båda är ISO 15189-certifierade laboratorier med klinisk standard. Cerascreen är ett tyskt laboratorium med fokus på vitaminer och allergen. Verisana är ett tyskt laboratorium specialiserat på hormoner och mikrobiom. Båda är välkända aktörer i Europa för hemmadiagnostik. Resultaten är kliniskt relevanta men ersätter inte en läkarbedömning.",
  },
  {
    question: "Kan Verisana testa allergier lika bra som Cerascreen?",
    answer:
      "Nej — Cerascreen är tydligt starkare på allergitester. De erbjuder IgE-tester för 40+ livsmedelsallergen, pollen, husdjur och mögel. Verisana fokuserar på hormoner och mikrobiom snarare än allergi. För matallergier och sensitiviteter: Cerascreen.",
  },
  {
    question: "Vad kostar Cerascreen vs Verisana?",
    answer:
      "Cerascreen: D-vitamintest från 299 kr, breda vitaminstatus-paneler från 599 kr, allergitester från 499 kr. Verisana: hormontester från 449 kr, mikrobiomanalys från 799 kr, breda hormonstatus-paneler upp till 1 499 kr. Per testat ämne är priserna liknande — Cerascreens styrka är bredd inom vitaminer och allergi, Verisanas styrka är djup inom hormoner.",
  },
  {
    question: "Har Verisana mikrobiomtest?",
    answer:
      "Ja — Verisana är ett av få alternativ i Sverige för 16S rRNA-baserad tarmfloraanalys. Testet analyserar balansen av tarmbakterier och ger rekommendationer baserade på ditt mikrobiom. Cerascreen erbjuder inte mikrobiomanalys. Om tarmfloran intresserar dig: Verisana är det enda valet av dessa två.",
  },
  {
    question: "Vilken är snabbast med svar?",
    answer:
      "Cerascreen: 3–5 vardagar från laboratoriet tar emot provet — räkna med 5–8 dagar totalt. Verisana: 5–7 vardagar i laboratoriet — räkna med 7–10 dagar totalt. Cerascreen är något snabbare, men skillnaden är inte dramatisk. Båda skickar provet till tyska laboratorier.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Cerascreen vs Verisana 2026 — komplett jämförelse",
      datePublished: "2026-04-03",
      dateModified: "2026-04-03",
      author: { "@type": "Person", name: "Anna Lindström" },
      publisher: { "@type": "Organization", name: "Testahemma.se", url: "https://www.testahemma.se" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
};

export default function CeraScreenVsVerisanaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-6">
        <BreadcrumbNav
          items={[
            { name: "Hem", href: "/" },
            { name: "Jämför hemmatester", href: "/jamfor-hemmatester/" },
            { name: "Cerascreen vs Verisana", href: "/cerascreen-vs-verisana/" },
          ]}
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Cerascreen vs Verisana 2026 — vitaminer &amp; allergi mot hormoner &amp; mikrobiom
        </h1>
        <p className="text-sm text-gray-500 mb-4">Senast uppdaterad: april 2026</p>
        <AffiliateDisclaimer />
        <MedicalDisclaimer />

        <p className="text-gray-600 mb-6 mt-4">
          Cerascreen och Verisana är båda tyska hemtestlaboratorier med ISO 15189-certifiering — men de specialiserar sig på helt olika saker. Cerascreen dominerar vitamintester och allergi. Verisana är specialist på hormoner via salivprov och tarmfloraanalys. Vilket passar din hälsokontroll?
        </p>

        {/* Quick verdict */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-purple-700 uppercase mb-1">Bäst vitaminer &amp; allergi</p>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Cerascreen</h2>
            <p className="text-sm text-gray-600 mb-4">ISO 15189. D-vitamin, B12, järn, folsyra, allergi (40+ allergen), tungmetaller. Från 299 kr. Snabbast svarstid.</p>
            <a
              href="https://www.cerascreen.se"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition-colors"
            >
              Se tester hos Cerascreen
            </a>
          </div>
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-teal-700 uppercase mb-1">Bäst hormoner &amp; mikrobiom</p>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Verisana</h2>
            <p className="text-sm text-gray-600 mb-4">ISO 15189. Kortisol, testosteron, östrogen, DHEA via salivprov. Mikrobiomanalys. Från 449 kr.</p>
            <a
              href="https://www.verisana.se"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="block w-full text-center bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition-colors"
            >
              Se tester hos Verisana
            </a>
          </div>
        </div>

        {/* Comparison table */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Jämförelsetabell</h2>
        <div className="mb-8">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-4 font-semibold text-gray-700">Egenskap</th>
                <th className="text-center p-4 font-semibold text-purple-700">Cerascreen</th>
                <th className="text-center p-4 font-semibold text-teal-700">Verisana</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "Labbcertifiering", cera: "ISO 15189", veri: "ISO 15189", winner: null },
                { label: "Startpris", cera: "Från 299 kr", veri: "Från 449 kr", winner: "cera" },
                { label: "Vitamintester (D3, B12, järn)", cera: "Ja — specialitet", veri: "Begränsat", winner: "cera" },
                { label: "Allergitester (IgE)", cera: "Ja — 40+ allergen", veri: "Nej", winner: "cera" },
                { label: "Tungmetaller (bly, kvicksilver)", cera: "Ja", veri: "Nej", winner: "cera" },
                { label: "Hormonpanel (salivprov)", cera: "Nej", veri: "Ja — specialitet", winner: "veri" },
                { label: "Mikrobiomanalys", cera: "Nej", veri: "Ja", winner: "veri" },
                { label: "Biologisk ålder", cera: "Ja", veri: "Nej", winner: "cera" },
                { label: "Svarstid", cera: "3–5 vardagar (labb)", veri: "5–7 vardagar (labb)", winner: "cera" },
                { label: "Provtyp", cera: "Blod (fingerstick) / urin", veri: "Saliv / blod / avföring", winner: null },
                { label: "Ursprungsland", cera: "Tyskland", veri: "Tyskland", winner: null },
              ].map((row, i) => (
                <tr key={row.label} className={`border-t border-gray-100 ${i % 2 === 0 ? "" : "bg-gray-50/50"}`}>
                  <td className="p-4 font-semibold text-gray-900">{row.label}</td>
                  <td className={`p-4 text-center ${row.winner === "cera" ? "text-purple-700 font-bold bg-purple-50" : "text-gray-600"}`}>
                    {row.cera}
                    {row.winner === "cera" && <span className="block text-xs font-normal text-purple-400 mt-0.5">Vinnare</span>}
                  </td>
                  <td className={`p-4 text-center ${row.winner === "veri" ? "text-teal-700 font-bold bg-teal-50" : "text-gray-600"}`}>
                    {row.veri}
                    {row.winner === "veri" && <span className="block text-xs font-normal text-teal-400 mt-0.5">Vinnare</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Analysis */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Djupanalys</h2>

        <div className="space-y-6 mb-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Cerascreen — vitaminer, allergi och tungmetaller</h3>
            <p className="text-gray-600 text-sm mb-3">
              Cerascreen har bredden inom vitamintester och allergi. D-vitamintest (25-OH-D3), B12, ferritin (järn), folsyra och sköldkörtelhormoner (TSH, T3, T4) är alla tillgängliga som separata test eller i paneler. Priserna börjar på 299 kr per test.
            </p>
            <p className="text-gray-600 text-sm">
              Allergitestutbudet är unikt — IgE-baserade tester för livsmedelsallergen (glutenprotein, laktose, nötter, ägg, skaldjur), pollen, husdjursdander och mögel. Tungmetalltesterna (bly, kvicksilver, arsenik, kadmium) är ett nischerat erbjudande som Verisana inte matchar.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Verisana — hormoner och tarmfloran</h3>
            <p className="text-gray-600 text-sm mb-3">
              Verisana specialiserar sig på hormonanalys via salivprov — kortisol (stresshormoner vid olika tidpunkter på dygnet), DHEA, testosteron, östradiol och progesteron. Salivprovets fördel: det fångar den biologiskt aktiva (obundna) fraktionen av hormonet, vilket ger ett kompletterande perspektiv till blodprov.
            </p>
            <p className="text-gray-600 text-sm">
              Mikrobiomanalysen är Verisanas mest unika erbjudande. Via avföringsprov analyseras tarmflorans bakterieprofil med 16S rRNA-sekvensering, och du får rekommendationer om kost och livsstil baserade på din personliga tarmflora. Cerascreen erbjuder inget liknande.
            </p>
          </div>
        </div>

        {/* Who should choose */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Vem bör välja vad?</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
            <h3 className="font-bold text-purple-800 mb-3">Välj Cerascreen om du...</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2"><span className="text-purple-600 font-bold">+</span><span>Vill kontrollera D-vitaminbrist, B12 eller järnnivåer</span></li>
              <li className="flex gap-2"><span className="text-purple-600 font-bold">+</span><span>Misstänker matallergi eller sensitivitet</span></li>
              <li className="flex gap-2"><span className="text-purple-600 font-bold">+</span><span>Vill testa exponering för tungmetaller</span></li>
              <li className="flex gap-2"><span className="text-purple-600 font-bold">+</span><span>Vill ha snabb svarstid och lägre startpris</span></li>
            </ul>
          </div>
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
            <h3 className="font-bold text-teal-800 mb-3">Välj Verisana om du...</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2"><span className="text-teal-600 font-bold">+</span><span>Vill kartlägga stresshormoner (kortisol, DHEA) under dygnet</span></li>
              <li className="flex gap-2"><span className="text-teal-600 font-bold">+</span><span>Vill testa könshormonbalans (testosteron, östrogen)</span></li>
              <li className="flex gap-2"><span className="text-teal-600 font-bold">+</span><span>Är intresserad av tarmflorans sammansättning</span></li>
              <li className="flex gap-2"><span className="text-teal-600 font-bold">+</span><span>Föredrar salivprov framför blodprov (fingerstick)</span></li>
            </ul>
          </div>
        </div>

        {/* Related */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Relaterade jämförelser</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { href: "/gettested-vs-cerascreen/", a: "GetTested", b: "Cerascreen", desc: "Bredast sortiment vs vitaminspecialist" },
            { href: "/werlabs-vs-verisana/", a: "Werlabs", b: "Verisana", desc: "SWEDAC vs hormonspecialist" },
            { href: "/medisera-vs-verisana/", a: "Medisera", b: "Verisana", desc: "Kliniklabb vs salivprov" },
            { href: "/werlabs-vs-cerascreen/", a: "Werlabs", b: "Cerascreen", desc: "SWEDAC vs ISO 15189" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
            >
              <p className="font-bold text-gray-900 text-sm">{item.a} vs {item.b} 2026</p>
              <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
            </Link>
          ))}
        </div>

        <FaqAccordion items={faqs} />
      </main>
      <Footer />

      <StickyCTA
        product="Cerascreen"
        price="från 299 kr"
        url="https://www.cerascreen.se"
      />
    </>
  );
}
