import type { Metadata } from "next";
import Image from "next/image";
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
        <section className="text-white relative overflow-hidden min-h-[420px] sm:min-h-[480px] md:min-h-[540px] flex flex-col justify-center">
          <Image
            src="/images/hero-testahemma.webp"
            alt="Kvinna som tar ett blodprov hemma med ett hemtestningskit"
            fill
            className="object-cover -z-10"
            priority
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-teal-700/50 -z-10" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative w-full">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-semibold text-white/80 uppercase tracking-wide mb-4">
                <span className="w-1.5 h-1.5 bg-teal-300 rounded-full"></span>
                Oberoende guide 2026
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
                Hitta rätt hemtest
                <span className="block text-teal-200 mt-1">– direkt hem till dig</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed">
                Vi testar och jämför hemtester – blod, hormoner, STI, vitaminer och mer. Svar digitalt inom dagar.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/basta-hemtest/" className="inline-flex items-center justify-center bg-teal-400 hover:bg-teal-300 text-teal-900 font-bold py-3.5 px-8 rounded-xl transition-colors text-lg shadow-lg">
                  Se bästa hemtesterna
                </Link>
                <Link href="/guider/vad-ar-hemtest/" className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold py-3.5 px-8 rounded-xl transition-colors text-lg border border-white/20">
                  Hur fungerar hemtest?
                </Link>
              </div>
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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { slug: "blodtester", name: "Blodtester", img: "/images/cat-blodtester.webp", desc: "Blodvärden hemma på 2–4 dagar" },
              { slug: "hormontester", name: "Hormontester", img: "/images/cat-hormontester.webp", desc: "Testosteron, östrogen, TSH och mer" },
              { slug: "sti-tester", name: "STI-tester", img: "/images/cat-sti-tester.webp", desc: "Diskret test – svar inom 1–3 dagar" },
              { slug: "vitamintester", name: "Vitamintester", img: "/images/cat-vitamintester.webp", desc: "D-vitamin, B12, folat och mer" },
              { slug: "allergitester", name: "Allergi & Intolerans", img: "/images/cat-allergitester.webp", desc: "Ta reda på vad du reagerar på" },
              { slug: "tarmhalsa", name: "Tarmhälsa", img: "/images/cat-tarmhalsa.webp", desc: "Analysera din tarmflora" },
              { slug: "cancermarkorer", name: "Cancermarkörer", img: "/images/cat-cancermarkorer.webp", desc: "Proaktiv hälsokontroll hemma" },
              { slug: "kolesteroltester", name: "Kolesterol", img: "/images/cat-kolesteroltester.webp", desc: "LDL, HDL och triglycerider" },
            ].map((cat) => (
              <Link key={cat.slug} href={`/${cat.slug}/`} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="relative h-36 sm:h-40 overflow-hidden bg-gray-50">
                  <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-semibold text-sm sm:text-base text-gray-900 group-hover:text-teal-600 transition-colors">{cat.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Link href="/fertilitetstester/" className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-700 hover:text-teal-600 hover:border-teal-300 transition-colors">
              Fertilitetstester
            </Link>
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
