import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import ProductCard from "@/components/ProductCard";
import FaqAccordion from "@/components/FaqAccordion";
import { getTopProducts } from "@/data/products";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "Testahemma.se – Bästa Hemtester för Sverige 2026",
  description:
    "Sveriges guide till hemtestningskit. Vi testar och jämför blodtester, hormontester, STI-tester och vitamintester. Hitta rätt test från 299 kr.",
  alternates: { canonical: "https://www.testahemma.se/" },
};

const homepageFaqs = [
  {
    question: "Vad är ett hemtest?",
    answer:
      "Ett hemtest (hemtestningskit) är ett provtagningskit du beställer online, tar provet hemma och skickar till ett laboratorium. Du får sedan dina resultat digitalt – utan läkarbesök eller lång väntan.",
  },
  {
    question: "Är hemtester tillförlitliga?",
    answer:
      "Ja, om de analyseras av ett ackrediterat laboratorium. Ledande aktörer som Werlabs använder SWEDAC-ackrediterade lab som uppfyller samma krav som sjukhuslaboratorier. Det är viktigt att alltid följa upp avvikande värden med läkare.",
  },
  {
    question: "Vilka hemtester finns i Sverige?",
    answer:
      "I Sverige finns hemtester för blodvärden, hormoner (testosteron, östrogen, TSH), STI/könssjukdomar, vitaminer (D-vitamin, B12), allergi & intolerans, tarmflora/mikrobiom, cancermarkörer och kolesterol.",
  },
  {
    question: "Kan hemtester ersätta ett läkarbesök?",
    answer:
      "Nej. Hemtester är ett komplement – ett verktyg för proaktiv hälsokoll. Vid avvikande värden eller symtom ska du alltid kontakta sjukvården. Hemtester ger dig information, inte diagnoser.",
  },
  {
    question: "Vilket hemtest är bäst?",
    answer:
      "Det beror på vad du vill mäta. För blodvärden är Werlabs bäst. För vitaminer och allergi är Cerascreen utmärkt. För STI är Testmottagningen störst och snabbast. Se våra kategorisidor för detaljerade jämförelser.",
  },
];

export default function HomePage() {
  const topProducts = getTopProducts(3);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Bästa hemtester Sverige 2026",
    itemListElement: topProducts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `https://www.testahemma.se/recension/${p.slug}/`,
    })),
  };

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-teal-300 rounded-full animate-pulse"></span>
              Sveriges oberoende hemtestguide 2026
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Hitta rätt hemtest
              <span className="block text-teal-200 mt-1">– direkt hem till dig</span>
            </h1>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Vi testar och jämför blodtester, hormontester, STI-tester, vitamintester och mer.
              Inga köer. Inget läkarbesök. Svar digitalt inom dagar.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/basta-hemtest/" className="bg-white text-teal-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal-50 transition-colors shadow-lg">
                Se bästa hemtesterna
              </Link>
              <Link href="/guider/vad-ar-hemtest/" className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors">
                Hur fungerar hemtest?
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-teal-200">
              {["Oberoende tester", "GDPR-säkert", "Ackrediterade laboratorier", "Från 299 kr"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Välj testkategori</h2>
            <p className="text-gray-500 mt-2">8 kategorier – hitta testet som passar dig</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/${cat.slug}/`}
                className="group bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-teal-200 transition-all text-center">
                <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors text-sm">{cat.name}</h3>
                <p className="text-xs text-gray-400 mt-1 leading-tight">{cat.description.slice(0, 50)}…</p>
              </Link>
            ))}
          </div>
        </section>

        {/* How it works */}
        <HowItWorks />

        {/* Top 3 products */}
        <section className="py-16 px-4 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Bästa hemtesterna 2026</h2>
            <p className="text-gray-500 mt-2">Våra topprekommendationer – noggrant testade och jämförda</p>
          </div>
          <div className="space-y-5">
            {topProducts.map((product, i) => (
              <ProductCard key={product.slug} product={product} position="homepage-featured" rank={i + 1} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/basta-hemtest/" className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:underline">
              Se alla hemtester och jämförelser
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Trust section */}
        <section className="bg-gray-50 py-14 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Ackrediterade laboratorier",
                body: "Alla tester vi rekommenderar analyseras av SWEDAC- eller ISO-certifierade laboratorier.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
              {
                title: "Oberoende recensioner",
                body: "Vi köper och testar produkterna själva. Inga betalda placeringar påverkar våra betyg.",
                icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
              },
              {
                title: "GDPR & Integritet",
                body: "Alla aktörer vi listar hanterar dina hälsodata säkert och i enlighet med GDPR.",
                icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
              },
            ].map((item) => (
              <div key={item.title}>
                <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Latest guides */}
        <section className="py-16 px-4 max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Hälsoguider</h2>
            <Link href="/guider/" className="text-teal-600 text-sm font-medium hover:underline">Alla guider →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { slug: "d-vitaminbrist-symtom", title: "D-vitaminbrist: 8 symtom och hur du testar hemma", cat: "Vitamintester" },
              { slug: "sti-testa-hemma", title: "STI-testning hemma – diskret och enkelt", cat: "STI-tester" },
              { slug: "tolka-blodvarden", title: "Tolka dina blodvärden – vad betyder resultaten?", cat: "Blodtester" },
            ].map((guide) => (
              <Link key={guide.slug} href={`/guider/${guide.slug}/`}
                className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                <span className="text-xs font-semibold text-teal-600 uppercase tracking-wider">{guide.cat}</span>
                <h3 className="mt-2 font-bold text-gray-900 group-hover:text-teal-600 transition-colors leading-snug">{guide.title}</h3>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-teal-600 font-medium">
                  Läs guide <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-6 px-4 max-w-3xl mx-auto">
          <FaqAccordion items={homepageFaqs} title="Vanliga frågor om hemtest" />
        </section>
      </main>

      <Footer />
    </>
  );
}
