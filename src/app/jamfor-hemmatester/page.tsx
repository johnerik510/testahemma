import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import AffiliateDisclaimer from "@/components/AffiliateDisclaimer";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Jämför hemmatester 2026 — Alla leverantörer",
  description:
    "Vi jämför alla hemmatestleverantörer 2026 — pris, testutbud, svarstid och kvalitet. Hitta rätt blodprov, hormontest eller STI-test för dig.",
  alternates: { canonical: "https://www.testahemma.se/jamfor-hemmatester/" },
  openGraph: {
    title: "Jämför hemmatester 2026 — Alla leverantörer",
    description:
      "Vi jämför alla hemmatestleverantörer 2026 — pris, testutbud, svarstid och kvalitet. Hitta rätt blodprov, hormontest eller STI-test för dig.",
    url: "https://www.testahemma.se/jamfor-hemmatester/",
    siteName: "Testahemma.se",
    locale: "sv_SE",
    type: "article",
  },
};

const providers = [
  {
    name: "Werlabs",
    slug: "werlabs",
    rating: 9.0,
    testRange: "Blod/hormoner/vitaminer",
    priceFrom: 299,
    turnaround: "1–3 dagar",
    homeDelivery: true,
  },
  {
    name: "Cerascreen",
    slug: "cerascreen",
    rating: 8.5,
    testRange: "Allergier/vitaminer/hormoner",
    priceFrom: 399,
    turnaround: "3–5 dagar",
    homeDelivery: true,
  },
  {
    name: "Testmottagningen",
    slug: "testmottagningen",
    rating: 8.0,
    testRange: "Blod/STI/hormoner",
    priceFrom: 249,
    turnaround: "2–4 dagar",
    homeDelivery: true,
  },
  {
    name: "Diagnostikdirekt",
    slug: "diagnostikdirekt",
    rating: 7.8,
    testRange: "Blod/vitaminer",
    priceFrom: 349,
    turnaround: "2–3 dagar",
    homeDelivery: true,
  },
  {
    name: "GetTested",
    slug: "gettested",
    rating: 8.2,
    testRange: "STI/sexuell hälsa",
    priceFrom: 199,
    turnaround: "3–5 dagar",
    homeDelivery: true,
  },
  {
    name: "Holistic",
    slug: "holistic",
    rating: 7.5,
    testRange: "Näring/vitaminer",
    priceFrom: 499,
    turnaround: "5–7 dagar",
    homeDelivery: true,
  },
  {
    name: "Biovis",
    slug: "biovis",
    rating: 8.0,
    testRange: "Bred panel",
    priceFrom: 395,
    turnaround: "3–5 dagar",
    homeDelivery: true,
  },
  {
    name: "Verisana",
    slug: "verisana",
    rating: 7.8,
    testRange: "Hormoner/vitaminer",
    priceFrom: 449,
    turnaround: "5–7 dagar",
    homeDelivery: true,
  },
  {
    name: "Medisera",
    slug: "medisera",
    rating: 8.3,
    testRange: "Bred panel",
    priceFrom: 299,
    turnaround: "2–4 dagar",
    homeDelivery: true,
  },
];

const sortedProviders = [...providers].sort((a, b) => b.rating - a.rating);

const recommendations = [
  {
    label: "Bäst för blodvärden",
    name: "Werlabs",
    slug: "werlabs",
    reason: "SWEDAC-ackrediterat lab, bredast testutbud och snabbast svarstid",
  },
  {
    label: "Bäst för allergier",
    name: "Cerascreen",
    slug: "cerascreen",
    reason: "Störst sortiment av allergi- och intoleranstester, leverans hem",
  },
  {
    label: "Bäst för STI",
    name: "GetTested",
    slug: "gettested",
    reason: "Specialiserad på sexuell hälsa, diskret leverans och lågt pris",
  },
  {
    label: "Bäst budget",
    name: "GetTested / Testmottagningen",
    slug: "gettested",
    reason: "Lägst ingångspris — GetTested från 199 kr, Testmottagningen från 249 kr",
  },
  {
    label: "Bäst brett utbud",
    name: "Medisera / Werlabs",
    slug: "medisera",
    reason: "Täcker flest hälsoområden med en enda beställning",
  },
];

const faqs = [
  {
    question: "Vilken hemmatestleverantör är bäst 2026?",
    answer:
      "Det beror på vad du vill mäta. Werlabs är bäst för blodvärden tack vare SWEDAC-ackrediterade laboratorier och snabbast svarstid (1–3 dagar). GetTested och Testmottagningen är bäst för STI. Cerascreen leder inom allergi och vitaminer. Medisera och Biovis passar dig som vill ha ett brett panel-test.",
  },
  {
    question: "Vad kostar ett hemmatest och vad ingår i priset?",
    answer:
      "Priserna börjar från 199 kr (GetTested STI-test) och kan gå upp till flera tusen kronor för breda hälsopaneler. I priset ingår normalt provtagningskit, analyser på certifierat laboratorium, frakt till labbet och digitala resultat. Frakt av kit till dig tillkommer ibland. Jämför alltid pris per inkluderad parameter — ett billigt test med få parametrar kan vara dyrare per markör än ett dyrare brett test.",
  },
  {
    question: "Hur snabbt får jag svar på mitt hemmatest?",
    answer:
      "Svarstiden varierar beroende på leverantör och testtyp. Werlabs levererar svar på 1–3 dagar, Testmottagningen och Diagnostikdirekt på 2–4 dagar. Internationella leverantörer som Holistic och Verisana tar 5–7 dagar. Räkna in 1–2 dagar extra för posthantering. De flesta leverantörer skickar ett SMS eller mejl när svaret är klart.",
  },
  {
    question: "Behöver jag läkarremiss för att beställa ett hemmatest?",
    answer:
      "Nej — alla leverantörer i vår jämförelse säljer tester utan läkarremiss eller recept. Du beställer direkt online, tar provet hemma och skickar det till laboratoriet. Vissa leverantörer som Werlabs erbjuder frivillig läkarkonsultation om dina svar visar avvikande värden. Hemmatester ersätter inte sjukvård — kontakta alltid läkare om du har symtom eller avvikande provsvar.",
  },
];

const comparisonSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Jämför hemmatestleverantörer 2026",
  description:
    "Jämförelse av alla hemmatestleverantörer i Sverige 2026 — pris, betyg, testutbud och svarstid.",
  url: "https://www.testahemma.se/jamfor-hemmatester/",
  numberOfItems: sortedProviders.length,
  itemListElement: sortedProviders.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: p.name,
    url: `https://www.testahemma.se/recension/${p.slug}/`,
  })),
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.testahemma.se/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Jämför hemmatester",
      item: "https://www.testahemma.se/jamfor-hemmatester/",
    },
  ],
};

export default function JamforHemmatesterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-10">
        <BreadcrumbNav
          items={[
            { name: "Hem", href: "/" },
            { name: "Jämför hemmatester", href: "/jamfor-hemmatester/" },
          ]}
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Jämför hemmatester 2026 — Alla leverantörer
        </h1>
        <p className="text-sm text-gray-500 mb-3">
          9 leverantörer jämförda — senast uppdaterad mars 2026
        </p>
        <p className="text-lg text-gray-600 mb-2 leading-relaxed">
          Vi har granskat alla stora hemmatestleverantörer i Sverige och Europa. Jämför pris,
          testutbud, svarstid och kvalitet — och hitta rätt test för dig.
        </p>

        <AffiliateDisclaimer />

        {/* Comparison table */}
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Stor jämförelsetabell — alla leverantörer
        </h2>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-100 shadow-sm mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-5 py-4 font-semibold text-gray-700">Leverantör</th>
                <th className="text-left px-5 py-4 font-semibold text-gray-700">Betyg</th>
                <th className="text-left px-5 py-4 font-semibold text-gray-700">Testutbud</th>
                <th className="text-left px-5 py-4 font-semibold text-gray-700">Pris från</th>
                <th className="text-left px-5 py-4 font-semibold text-gray-700">Svarstid</th>
                <th className="text-left px-5 py-4 font-semibold text-gray-700">Utskick hem</th>
                <th className="px-5 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {sortedProviders.map((p, i) => (
                <tr
                  key={p.slug}
                  className={`hover:bg-gray-50 transition-colors ${i === 0 ? "bg-teal-50/40" : "bg-white"}`}
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      {i === 0 && (
                        <span className="bg-teal-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                          Nr 1
                        </span>
                      )}
                      <Link
                        href={`/recension/${p.slug}/`}
                        className="font-semibold text-gray-900 hover:text-teal-600 transition-colors"
                      >
                        {p.name}
                      </Link>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-gray-900">{p.rating.toFixed(1)}</span>
                      <span className="text-gray-400 text-xs">/10</span>
                      <div className="flex gap-0.5 ml-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <svg
                            key={s}
                            className={`w-3.5 h-3.5 ${
                              s <= Math.round(p.rating / 2)
                                ? "text-yellow-400"
                                : "text-gray-200"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-gray-600">{p.testRange}</td>
                  <td className="px-5 py-4 font-semibold text-gray-900">{p.priceFrom} kr</td>
                  <td className="px-5 py-4 text-gray-600">{p.turnaround}</td>
                  <td className="px-5 py-4">
                    <span className="inline-flex items-center gap-1 text-green-700 font-medium text-xs">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Ja
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <Link
                      href={`/recension/${p.slug}/`}
                      className="inline-flex items-center gap-1 bg-teal-600 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap"
                    >
                      Läs recension
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4 mb-10">
          {sortedProviders.map((p, i) => (
            <div
              key={p.slug}
              className={`rounded-xl border p-4 shadow-sm ${
                i === 0 ? "border-teal-200 bg-teal-50/30" : "border-gray-100 bg-white"
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  {i === 0 && (
                    <span className="bg-teal-600 text-white text-xs font-bold px-2 py-0.5 rounded-full mb-1 inline-block">
                      Nr 1
                    </span>
                  )}
                  <h3 className="font-bold text-gray-900 text-base">{p.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{p.testRange}</p>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-bold text-gray-900 text-lg">{p.rating.toFixed(1)}<span className="text-xs text-gray-400 font-normal">/10</span></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                <div className="bg-gray-50 rounded-lg p-2">
                  <div className="text-xs text-gray-400">Pris från</div>
                  <div className="font-semibold text-gray-900">{p.priceFrom} kr</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <div className="text-xs text-gray-400">Svarstid</div>
                  <div className="font-semibold text-gray-900">{p.turnaround}</div>
                </div>
              </div>
              <Link
                href={`/recension/${p.slug}/`}
                className="flex items-center justify-center gap-1 bg-teal-600 text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-teal-700 transition-colors w-full"
              >
                Läs recension
              </Link>
            </div>
          ))}
        </div>

        {/* Which test suits you */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Vilket test passar dig?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {recommendations.map((rec) => (
            <Link
              key={rec.label}
              href={`/recension/${rec.slug}/`}
              className="block bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-teal-200 transition-all"
            >
              <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-1">
                {rec.label}
              </div>
              <div className="font-bold text-gray-900 text-lg">{rec.name}</div>
              <div className="text-sm text-gray-500 mt-1">{rec.reason}</div>
            </Link>
          ))}
        </div>

        {/* All reviews internal links */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Alla recensioner</h2>
        <p className="text-gray-600 mb-5">
          Vill du läsa en djupgående recension av en specifik leverantör? Nedan hittar du direktlänkar
          till alla våra recensioner med detaljerade genomgångar av testprocess, laboratoriekvalitet,
          pris och svarstid.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
          {providers.map((p) => (
            <Link
              key={p.slug}
              href={`/recension/${p.slug}/`}
              className="group flex items-center justify-between bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm hover:shadow-md hover:border-teal-200 transition-all"
            >
              <div>
                <div className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                  {p.name}
                </div>
                <div className="text-xs text-gray-400 mt-0.5">Betyg: {p.rating.toFixed(1)}/10</div>
              </div>
              <svg
                className="w-4 h-4 text-teal-500 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>

        {/* Head-to-head comparisons */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Direktjämförelser</h2>
        <p className="text-gray-600 mb-5">
          Osäker på vilken leverantör du ska välja? Läs våra direktjämförelser för att se vem som
          vinner kategori för kategori.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <Link
            href="/werlabs-vs-cerascreen/"
            className="group block bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-teal-200 transition-all"
          >
            <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-1">
              Direktjämforelse
            </div>
            <div className="font-bold text-gray-900 text-base group-hover:text-teal-600 transition-colors">
              Werlabs vs Cerascreen 2026
            </div>
            <div className="text-sm text-gray-500 mt-1">
              SWEDAC-ackreditering mot bredaste testutbud — vilket passar dig?
            </div>
          </Link>
          <Link
            href="/werlabs-vs-medisera/"
            className="group block bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-teal-200 transition-all"
          >
            <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-1">
              Direktjämforelse
            </div>
            <div className="font-bold text-gray-900 text-base group-hover:text-teal-600 transition-colors">
              Werlabs vs Medisera 2026
            </div>
            <div className="text-sm text-gray-500 mt-1">
              Två svenska alternativ — SWEDAC vs ISO 15189, pris och svarstid
            </div>
          </Link>
          <Link
            href="/cerascreen-vs-medisera/"
            className="group block bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-teal-200 transition-all"
          >
            <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-1">
              Direktjämforelse
            </div>
            <div className="font-bold text-gray-900 text-base group-hover:text-teal-600 transition-colors">
              Cerascreen vs Medisera 2026
            </div>
            <div className="text-sm text-gray-500 mt-1">
              Tyskt bredaste allergitest mot snabbast svenska leverantör
            </div>
          </Link>
          <Link
            href="/medisera-vs-verisana/"
            className="group block bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-teal-200 transition-all"
          >
            <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-1">
              Direktjämforelse
            </div>
            <div className="font-bold text-gray-900 text-base group-hover:text-teal-600 transition-colors">
              Medisera vs Verisana 2026
            </div>
            <div className="text-sm text-gray-500 mt-1">
              Bred hälsopanel mot djupgående hormonspecialist
            </div>
          </Link>
          <Link
            href="/werlabs-vs-verisana/"
            className="group block bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-teal-200 transition-all"
          >
            <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-1">
              Direktjämforelse
            </div>
            <div className="font-bold text-gray-900 text-base group-hover:text-teal-600 transition-colors">
              Werlabs vs Verisana 2026
            </div>
            <div className="text-sm text-gray-500 mt-1">
              SWEDAC-blodvärden mot tyskt hormon- och mikrobiomspecialistlab
            </div>
          </Link>
          <Link
            href="/gettested-vs-testmottagningen/"
            className="group block bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-teal-200 transition-all"
          >
            <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-1">
              Direktjämforelse
            </div>
            <div className="font-bold text-gray-900 text-base group-hover:text-teal-600 transition-colors">
              GetTested vs Testmottagningen 2026
            </div>
            <div className="text-sm text-gray-500 mt-1">
              Bäst STI-test hemma — pris, diskrethet och testutbud jämfört
            </div>
          </Link>
        </div>

        {/* FAQ */}
        <FaqAccordion items={faqs} title="Vanliga frågor om hemmatester" />

        {/* CTA block */}
        <div className="bg-teal-600 rounded-2xl p-6 sm:p-8 mt-6 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Redo att ta kontroll över din hälsa?
          </h3>
          <p className="text-teal-100 mb-5 max-w-xl mx-auto">
            Se vår topplista med bästa hemtesterna 2026 — rankade efter betyg, pris och kvalitet.
          </p>
          <Link
            href="/basta-hemtest/"
            className="inline-block bg-white text-teal-700 font-bold px-7 py-3 rounded-xl hover:bg-teal-50 transition-colors shadow-sm"
          >
            Se bästa hemtesterna
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
