import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FaqAccordion from "@/components/FaqAccordion";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inflammationsmarkörer – Testa CRP och SR hemma April 2026",
  description:
    "Guide till inflammationsmarkörer: CRP, hsCRP och SR. Vad avvikande värden betyder, referensvärden och hur du testar hemma.",
  alternates: {
    canonical: "https://testahemma.se/guider/inflammationsmarkorer-test/",
  },
  openGraph: {
    title: "Inflammationsmarkörer – Testa CRP och SR hemma April 2026",
    description:
      "Guide till inflammationsmarkörer: CRP, hsCRP och SR. Vad avvikande värden betyder, referensvärden och hur du testar hemma.",
    url: "https://testahemma.se/guider/inflammationsmarkorer-test/",
  },
};

const faqs = [
  {
    question: "Vad är skillnaden mellan CRP och hsCRP?",
    answer:
      "CRP (C-reaktivt protein) mäter inflammation vid akuta infektioner och sjukdomar — normalt under 5 mg/L. hsCRP (högkänsligt CRP) mäter låggradig kronisk inflammation med högre precision — normalt under 1 mg/L. hsCRP används för att bedöma kardiovaskulär risk, medan vanlig CRP används vid akuta tillstånd.",
  },
  {
    question: "Kan stress orsaka högt CRP?",
    answer:
      "Ja, kronisk stress kan bidra till låggradig inflammation och förhöjt hsCRP. Akut stress har dock liten effekt på CRP. Andra faktorer som påverkar CRP inkluderar sömnbrist, övervikt, rökning, hög alkoholkonsumtion och brist på fysisk aktivitet.",
  },
  {
    question: "Behöver jag fasta innan CRP-testet?",
    answer:
      "Nej, fasta krävs inte för CRP eller hsCRP. Däremot bör du undvika intensiv träning 24-48 timmar innan provtagning — träning orsakar tillfällig inflammation som kan ge falskt förhöjda värden. Undvik även att testa under en pågående förkylning eller infektion om du vill mäta kronisk inflammation.",
  },
  {
    question: "Hur ofta bör jag kontrollera inflammationsmarkörer?",
    answer:
      "För generell hälsoövervakning räcker det med ett test per år. Om du har förhöjda värden och gör livsstilsförändringar (kost, motion, stresshantering) kan du testa igen efter 3-6 månader för att se effekten. Vid kroniska sjukdomar bestämmer din läkare hur ofta kontroll behövs.",
  },
  {
    question: "Kan kost sänka inflammationsmarkörer?",
    answer:
      "Ja, en antiinflammatorisk kost kan sänka hsCRP signifikant. Medelhavskosten har starkast evidens — rik på omega-3, olivolja, grönsaker, bär och fullkorn. Specifika livsmedel som fet fisk, nötter, gurkmeja och grönt te har dokumenterade antiinflammatoriska effekter. Att minska intaget av ultraprocessad mat, socker och transfetter hjälper också.",
  },
];

export default function InflammationsmarkorerGuide() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Inflammationsmarkörer – Testa CRP och SR hemma",
            description:
              "Komplett guide till inflammationsmarkörer: CRP, hsCRP och SR. Referensvärden, tolkning och hemmatest.",
            datePublished: "2026-04-04",
            dateModified: "2026-04-04",
            author: { "@type": "Person", name: "Anna Lindström" },
            publisher: {
              "@type": "Organization",
              name: "Testahemma.se",
            },
          }),
        }}
      />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <BreadcrumbNav
          items={[
            { name: "Guider", href: "/guider/" },
            {
              name: "Inflammationsmarkörer",
              href: "/guider/inflammationsmarkorer-test/",
            },
          ]}
        />

        <div className="text-xs text-gray-400 mb-2">
          Medicinskt granskad av Anna Lindström, biomedicinsk analytiker |
          Uppdaterad april 2026
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Inflammationsmarkörer – Testa CRP och SR hemma
        </h1>

        <MedicalDisclaimer />

        <div className="prose-guide">
          <p className="text-gray-700 leading-relaxed mb-6">
            Inflammation är kroppens naturliga försvar mot skador och
            infektioner. Men kronisk låggradig inflammation — som ofta inte ger
            tydliga symtom — kopplas till hjärt-kärlsjukdom, typ 2-diabetes,
            autoimmuna sjukdomar och vissa cancerformer. Genom att mäta
            inflammationsmarkörer som CRP och hsCRP kan du upptäcka dolda
            inflammationsprocesser och vidta åtgärder i tid.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            De viktigaste inflammationsmarkörerna
          </h2>

          <div className="bg-gray-50 rounded-xl p-5 my-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-700 border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 font-bold text-gray-900">
                      Markör
                    </th>
                    <th className="text-left py-2 pr-4 font-bold text-gray-900">
                      Referensvärde
                    </th>
                    <th className="text-left py-2 font-bold text-gray-900">
                      Mäter
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-medium">CRP</td>
                    <td className="py-2 pr-4">&lt; 5 mg/L</td>
                    <td className="py-2">
                      Akut inflammation (infektioner, skador, autoimmuna
                      sjukdomar)
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-medium">hsCRP</td>
                    <td className="py-2 pr-4">&lt; 1 mg/L (låg risk)</td>
                    <td className="py-2">
                      Kronisk låggradig inflammation, kardiovaskulär risk
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-medium">SR (sänka)</td>
                    <td className="py-2 pr-4">
                      Män: &lt; 20 mm/h<br />
                      Kvinnor: &lt; 30 mm/h
                    </td>
                    <td className="py-2">
                      Generell inflammation — långsammare respons än CRP
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium">Ferritin</td>
                    <td className="py-2 pr-4">30-300 µg/L</td>
                    <td className="py-2">
                      Järndepåer, men stiger även vid inflammation
                      (akutfasprotein)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            CRP vs hsCRP — vilken ska du välja?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Valet beror på vad du vill undersöka:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="bg-gray-50 rounded-xl p-5">
              <h3 className="text-base font-bold text-gray-900 mb-3">
                CRP (standard)
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                Mäter akut inflammation vid infektioner, skador och autoimmuna
                skov. Normalvärde under 5 mg/L. Värden över 10 mg/L tyder
                på aktiv infektion eller inflammation.
              </p>
              <p className="text-sm text-gray-600 font-medium">
                Välj CRP om du misstänker pågående sjukdom eller infektion.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <h3 className="text-base font-bold text-gray-900 mb-3">
                hsCRP (högkänsligt)
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                Mäter låggradig kronisk inflammation med högre precision.
                Används för att bedöma kardiovaskulär risk. Under 1 mg/L = låg
                risk. 1-3 mg/L = medelhög risk. Över 3 mg/L = hög risk.
              </p>
              <p className="text-sm text-gray-600 font-medium">
                Välj hsCRP för generell hälsokontroll och hjärthälsa.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Vad orsakar förhöjda inflammationsmarkörer?
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
            <li>
              <strong>Infektioner</strong> — Bakteriella, virala och svampinfektioner
              höjer CRP markant
            </li>
            <li>
              <strong>Autoimmuna sjukdomar</strong> — RA, lupus, Crohns sjukdom,
              psoriasis
            </li>
            <li>
              <strong>Övervikt</strong> — Fettvävnad producerar
              inflammatoriska cytokiner som höjer hsCRP
            </li>
            <li>
              <strong>Rökning</strong> — Kronisk inflammation i blodkärl och
              lungor
            </li>
            <li>
              <strong>Sömnbrist</strong> — Kronisk sömnbrist (under 6 timmar)
              höjer inflammationsmarkörer
            </li>
            <li>
              <strong>Stress</strong> — Kronisk stress aktiverar
              inflammationsvägar via kortisol
            </li>
            <li>
              <strong>Ohälsosam kost</strong> — Ultraprocessad mat, socker och
              transfetter driver inflammation
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Hur sänker du inflammation naturligt?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Livsstilsförändringar kan sänka hsCRP signifikant:
          </p>
          <ol className="list-decimal list-inside text-gray-700 leading-relaxed mb-4 space-y-3">
            <li>
              <strong>Medelhavskost</strong> — Studier visar 20-30% sänkning av
              hsCRP med medelhavskost rik på omega-3, olivolja, grönsaker och
              nötter
            </li>
            <li>
              <strong>Regelbunden motion</strong> — 150 minuter måttlig
              aktivitet per vecka sänker CRP med i genomsnitt 30%. Styrketräning
              har särskilt stark effekt
            </li>
            <li>
              <strong>Viktnedgång</strong> — Varje 5% viktminskning sänker
              hsCRP med cirka 30% hos överviktiga
            </li>
            <li>
              <strong>Sömn</strong> — 7-8 timmar per natt. Sömnbrist ökar
              CRP med upp till 30% enligt studier
            </li>
            <li>
              <strong>Omega-3</strong> — 2-3 gram EPA/DHA dagligen sänker
              CRP med 20-30% i metaanalyser
            </li>
            <li>
              <strong>Sluta röka</strong> — CRP sjunker redan inom 2 veckor
              efter rökstopp
            </li>
          </ol>

          <div className="bg-teal-50 rounded-xl p-5 flex flex-col sm:flex-row items-center gap-4 my-8">
            <div className="flex-1">
              <p className="font-bold text-teal-900 mb-1">
                Kontrollera dina inflammationsvärden
              </p>
              <p className="text-sm text-teal-700">
                Jämför hemmatester med CRP och hsCRP — snabbt, enkelt och
                ackrediterat.
              </p>
            </div>
            <Link
              href="/blodprov/"
              className="bg-teal-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-teal-700 transition-colors whitespace-nowrap"
            >
              Jämför blodprov
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Relaterade tester
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
            <li>
              <Link
                href="/guider/kolesteroltest-hemma/"
                className="text-teal-600 hover:underline"
              >
                Kolesteroltest hemma
              </Link>{" "}
              — inflammation och högt kolesterol samverkar vid
              hjärt-kärlsjukdom
            </li>
            <li>
              <Link
                href="/guider/jarnbrist-symtom/"
                className="text-teal-600 hover:underline"
              >
                Järnbrist
              </Link>{" "}
              — ferritin stiger vid inflammation och kan maskera järnbrist
            </li>
            <li>
              <Link
                href="/guider/diabetes-test-hemma/"
                className="text-teal-600 hover:underline"
              >
                Diabetestest hemma
              </Link>{" "}
              — kronisk inflammation och insulinresistens hänger ihop
            </li>
          </ul>
        </div>

        <FaqAccordion
          items={faqs}
          title="Vanliga frågor om inflammationsmarkörer"
        />
      </main>
      <Footer />
    </>
  );
}
