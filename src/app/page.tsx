import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import ProductCard from "@/components/ProductCard";
import FaqAccordion from "@/components/FaqAccordion";
import StickyCTA from "@/components/StickyCTA";
import { getTopProducts } from "@/data/products";
import { categories } from "@/data/categories";
import { buildAffiliateUrl } from "@/lib/tracking";

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
  const topProducts = getTopProducts(9);

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
        <section className="bg-gradient-to-br from-teal-700 via-teal-600 to-cyan-600 text-white py-8 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.08)_0%,_transparent_60%)] pointer-events-none" aria-hidden="true" />
          <div className="max-w-4xl mx-auto text-center relative">
            <div className="inline-flex items-center gap-2 bg-white text-teal-700 rounded-full px-4 py-1.5 text-sm font-bold mb-4 shadow-sm">
              <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
              Sveriges oberoende hemtestguide 2026
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-3 tracking-tight">
              Hitta rätt hemtest
              <span className="block text-cyan-200 mt-1">– direkt hem till dig</span>
            </h1>
            <p className="text-base sm:text-lg text-teal-100 mb-5 max-w-2xl mx-auto leading-relaxed">
              Vi testar och jämför hemtester – blod, hormoner, STI, vitaminer och mer. Svar digitalt inom dagar.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/basta-hemtest/" className="bg-white text-teal-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyan-50 transition-colors shadow-lg">
                Se bästa hemtesterna
              </Link>
              <Link href="/guider/vad-ar-hemtest/" className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors">
                Hur fungerar hemtest?
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-5 text-xs text-teal-100 font-medium">
              {["Oberoende tester", "GDPR-säkert", "Ackrediterade laboratorier", "Från 299 kr"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Top 3 products — above the fold */}
        <section className="py-8 px-4 max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Bästa hemtesterna 2026</h2>
              <p className="text-gray-500 text-sm mt-1">Alla 9 leverantörer jämförda – senast uppdaterad mars 2026</p>
            </div>
            <Link href="/basta-hemtest/" className="hidden sm:inline-flex items-center gap-1 text-teal-600 text-sm font-medium hover:underline">
              Se alla
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="space-y-5">
            {topProducts.map((product, i) => (
              <ProductCard key={product.slug} product={product} position="homepage-featured" rank={i + 1} />
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/basta-hemtest/" className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:underline">
              Se alla hemtester och jämförelser
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Categories */}
        <section className="py-10 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Välj testkategori</h2>
            <p className="text-gray-500 mt-2 text-sm">8 kategorier – hitta testet som passar dig</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((cat) => {
              const colorMap: Record<string, { bg: string; icon: string; border: string; text: string; iconPath: string }> = {
                red:    { bg: "bg-red-50",    icon: "text-red-500",    border: "hover:border-red-200",    text: "group-hover:text-red-600",    iconPath: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
                purple: { bg: "bg-purple-50", icon: "text-purple-500", border: "hover:border-purple-200", text: "group-hover:text-purple-600", iconPath: "M13 10V3L4 14h7v7l9-11h-7z" },
                teal:   { bg: "bg-teal-50",   icon: "text-teal-600",   border: "hover:border-teal-200",   text: "group-hover:text-teal-600",   iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
                yellow: { bg: "bg-amber-50",  icon: "text-amber-500",  border: "hover:border-amber-200",  text: "group-hover:text-amber-600",  iconPath: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" },
                green:  { bg: "bg-green-50",  icon: "text-green-600",  border: "hover:border-green-200",  text: "group-hover:text-green-600",  iconPath: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
                orange: { bg: "bg-orange-50", icon: "text-orange-500", border: "hover:border-orange-200", text: "group-hover:text-orange-600", iconPath: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
                blue:   { bg: "bg-blue-50",   icon: "text-blue-600",   border: "hover:border-blue-200",   text: "group-hover:text-blue-600",   iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                pink:   { bg: "bg-pink-50",   icon: "text-pink-500",   border: "hover:border-pink-200",   text: "group-hover:text-pink-600",   iconPath: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
              };
              const c = colorMap[cat.color] ?? colorMap["teal"];
              return (
                <Link key={cat.slug} href={`/${cat.slug}/`}
                  className={`group bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md ${c.border} transition-all text-center`}>
                  <div className={`w-10 h-10 ${c.bg} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                    <svg className={`w-5 h-5 ${c.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={c.iconPath} />
                    </svg>
                  </div>
                  <h3 className={`font-semibold text-gray-900 ${c.text} transition-colors text-sm`}>{cat.name}</h3>
                  <p className="text-xs text-gray-400 mt-1 leading-tight">{cat.description.slice(0, 50)}…</p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Providers */}
        <section className="py-10 px-4 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Testleverantörer vi har recenserat</h2>
              <p className="text-gray-500 mt-1 text-sm">9 leverantörer jämförda och betygsatta</p>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <Link href="/jamfor-hemmatester/" className="inline-flex items-center gap-1 text-teal-600 text-sm font-medium hover:underline">
                Jämförelsetabell
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/basta-hemtest/" className="inline-flex items-center gap-1 text-teal-600 text-sm font-medium hover:underline">
                Se alla
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { slug: "werlabs", name: "Werlabs", rating: "9.2" },
              { slug: "cerascreen", name: "Cerascreen", rating: "8.8" },
              { slug: "testmottagningen", name: "Testmottagningen", rating: "8.6" },
              { slug: "diagnostikdirekt", name: "Diagnostikdirekt", rating: "8.4" },
              { slug: "biovis", name: "Biovis", rating: "8.2" },
              { slug: "verisana", name: "Verisana", rating: "8.0" },
              { slug: "medisera", name: "Medisera", rating: "7.8" },
              { slug: "gettested", name: "GetTested", rating: "7.6" },
              { slug: "holistic", name: "Holistic", rating: "7.5" },
            ].map((provider) => (
              <Link
                key={provider.slug}
                href={`/recension/${provider.slug}/`}
                className="group bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-teal-200 transition-all text-center"
              >
                <div className="text-xs font-bold text-teal-600 bg-teal-50 rounded-lg px-2 py-1 inline-block mb-2">{provider.rating}/10</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors text-sm">{provider.name}</h3>
                <span className="mt-2 inline-block text-xs text-teal-600 font-medium">Läs recension</span>
              </Link>
            ))}
          </div>
        </section>

        {/* How it works */}
        <HowItWorks />

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
              { slug: "b12-brist-symtom", title: "B12-brist: symtom och hur du testar hemma", cat: "Vitamintester" },
              { slug: "jarnbrist-symtom", title: "Järnbrist: symtom, orsaker och test hemma", cat: "Blodtester" },
              { slug: "hormoner-och-halsa", title: "Hormoner och hälsa – vad påverkar dina nivåer?", cat: "Hormontester" },
              { slug: "klamydia-test-hemma", title: "Klamydiatest hemma – snabbt och diskret", cat: "STI-tester" },
              { slug: "sköldkörteltest-hemma", title: "Sköldkörteltest hemma – mät TSH, T3 och T4", cat: "Hormontester" },
              { slug: "tarmflora-halsa", title: "Tarmflora och hälsa – förbättra din mikrobiom", cat: "Tarmhälsa" },
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

      <StickyCTA
        product={topProducts[0].name}
        price={`Från ${topProducts[0].priceFrom} kr`}
        url={buildAffiliateUrl(topProducts[0].affiliateUrl, topProducts[0].network, topProducts[0].adtractionProgramId, topProducts[0].addRevenueProgramId, 'TH-homepage-sticky', topProducts[0].awinProgramId)}
        text="Se bästa hemtestet"
        label="Bäst i test 2026"
      />
      <Footer />
    </>
  );
}
