import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FaqAccordion from "@/components/FaqAccordion";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sköldkörteltest hemma – Kontrollera TSH, T3 och T4 April 2026",
  description:
    "Testa sköldkörteln hemma med blodprov för TSH, fritt T3 och fritt T4. Jämför tester, referensvärden och när du bör testa dig.",
  alternates: {
    canonical: "https://testahemma.se/guider/skoldkortel-test-hemma/",
  },
  openGraph: {
    title: "Sköldkörteltest hemma – Kontrollera TSH, T3 och T4 April 2026",
    description:
      "Testa sköldkörteln hemma med blodprov för TSH, fritt T3 och fritt T4. Jämför tester, referensvärden och när du bör testa dig.",
    url: "https://testahemma.se/guider/skoldkortel-test-hemma/",
  },
};

const faqs = [
  {
    question: "Vad kostar ett sköldkörteltest hemma?",
    answer:
      "Priser varierar beroende på leverantör och antal markörer. Ett grundläggande TSH-test kostar från cirka 295 kr. Ett komplett sköldkörtelpaket med TSH, fritt T3 och fritt T4 kostar 495-895 kr beroende på leverantör.",
  },
  {
    question: "Hur lång tid tar det att få svar?",
    answer:
      "De flesta leverantörer ger svar inom 2-5 arbetsdagar efter att provet anlänt till laboratoriet. Vissa erbjuder snabbsvar inom 24 timmar mot extra kostnad.",
  },
  {
    question: "Kan jag lita på resultaten från ett hemmatest?",
    answer:
      "Ja, hemmatester analyseras på samma ackrediterade laboratorier som sjukvårdens prover. Metoderna är identiska. Skillnaden är att du tar provet själv via kapillärt blodprov (fingerstick) istället för venös provtagning. Studier visar god överensstämmelse mellan metoderna för sköldkörtelmarkörer.",
  },
  {
    question: "Behöver jag fasta innan sköldkörteltestet?",
    answer:
      "Fasta är inte nödvändigt för TSH och sköldkörtelhormoner, men ta provet på morgonen (före kl. 10) för mest tillförlitliga TSH-värden. TSH har en naturlig dygnsvariation med högst värden tidigt på morgonen. Undvik biotin-tillskott 48 timmar före provtagning — biotin kan störa analysen.",
  },
  {
    question: "Vad gör jag om mina värden är avvikande?",
    answer:
      "Kontakta din vårdcentral för uppföljning. Avvikande TSH-värden kräver alltid medicinsk bedömning — självmedicinera aldrig med sköldkörtelhormoner. Läkaren kan beställa kompletterande prover och ställa diagnos.",
  },
];

export default function SkoldkortelTestGuide() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Sköldkörteltest hemma – Kontrollera TSH, T3 och T4",
            description:
              "Komplett guide till sköldkörteltest hemma: TSH, fritt T3, fritt T4, referensvärden och bästa testerna.",
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
            { name: "Sköldkörteltest hemma", href: "/guider/skoldkortel-test-hemma/" },
          ]}
        />

        <div className="text-xs text-gray-400 mb-2">
          Medicinskt granskad av Anna Lindström, biomedicinsk analytiker |
          Uppdaterad april 2026
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Sköldkörteltest hemma – Kontrollera TSH, T3 och T4
        </h1>

        <MedicalDisclaimer />

        <div className="prose-guide">
          <p className="text-gray-700 leading-relaxed mb-6">
            Sköldkörteln styr ämnesomsättningen i hela kroppen. Obalans i
            sköldkörtelhormonerna påverkar energi, vikt, humör, hud, hår och
            hjärtfunktion. Uppskattningsvis har 5-8% av Sveriges befolkning en
            sköldkörtelsjukdom — och många vet inte om det. Med ett hemmatest
            kan du enkelt kontrollera dina sköldkörtelvärden utan
            vårdcentralsbesök.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Vilka markörer testas?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ett komplett sköldkörteltest mäter tre huvudmarkörer:
          </p>

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
                      Kommentar
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-medium">TSH</td>
                    <td className="py-2 pr-4">0,4 – 4,0 mIE/L</td>
                    <td className="py-2">
                      Styrhormon från hypofysen — den viktigaste markören
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-medium">Fritt T4</td>
                    <td className="py-2 pr-4">12 – 22 pmol/L</td>
                    <td className="py-2">
                      Aktivt sköldkörtelhormon — mäter aktuell funktion
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-medium">Fritt T3</td>
                    <td className="py-2 pr-4">3,1 – 6,8 pmol/L</td>
                    <td className="py-2">
                      Mest biologiskt aktivt hormon — omvandlas från T4
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium">TPO-antikroppar</td>
                    <td className="py-2 pr-4">&lt; 34 kIE/L</td>
                    <td className="py-2">
                      Indikerar autoimmun sköldkörtelsjukdom (Hashimotos)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Referensvärden kan variera något mellan laboratorier. Tolka alltid
              resultaten i samråd med vården.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Symtom på sköldkörtelrubbning
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="bg-gray-50 rounded-xl p-5">
              <h3 className="text-base font-bold text-gray-900 mb-3">
                Underfunktion (hypotyreos)
              </h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Trötthet och orkeslöshet</li>
                <li>Oförklarlig viktuppgång</li>
                <li>Frusenhet</li>
                <li>Torr hud och håravfall</li>
                <li>Förstoppning</li>
                <li>Depression och nedstämdhet</li>
                <li>Muskelsvaghet och ledvärk</li>
                <li>Oregelbunden mens</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <h3 className="text-base font-bold text-gray-900 mb-3">
                Överfunktion (hypertyreos)
              </h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Hjärtklappning och tremor</li>
                <li>Oförklarlig viktnedgång</li>
                <li>Värmekänsla och svettning</li>
                <li>Nervositet och ångest</li>
                <li>Sömnsvårigheter</li>
                <li>Frekvent avföring</li>
                <li>Muskelsvaghet</li>
                <li>Utstående ögon (Graves sjukdom)</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Vem bör testa sig?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sköldkörtelsjukdomar är vanligare än många tror. Följande grupper
            har förhöjd risk:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
            <li>
              <strong>Kvinnor över 35</strong> — Sköldkörtelsjukdom är 5-8
              gånger vanligare hos kvinnor
            </li>
            <li>
              <strong>Familjehistorik</strong> — Autoimmun sköldkörtelsjukdom
              (Hashimotos, Graves) har stark genetisk komponent
            </li>
            <li>
              <strong>Gravida och nyförlösta</strong> — Postpartum tyreoidit
              drabbar 5-10% av nyblivna mammor
            </li>
            <li>
              <strong>Typ 1-diabetes</strong> — Autoimmun samsjuklighet ökar
              risken för sköldkörtelsjukdom
            </li>
            <li>
              <strong>Oförklarlig trötthet eller viktförändring</strong> —
              Vanliga symtom som ofta förbises
            </li>
            <li>
              <strong>Ältade med kolesterol</strong> — Hypotyreos är en vanlig
              orsak till förhöjt kolesterol
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Hur fungerar testet?
          </h2>
          <ol className="list-decimal list-inside text-gray-700 leading-relaxed mb-4 space-y-3">
            <li>
              <strong>Beställ testet online</strong> — Välj en leverantör som
              erbjuder sköldkörtelpaket med TSH, fritt T3 och fritt T4
            </li>
            <li>
              <strong>Ta provet hemma</strong> — Du får ett kit med
              fingerstick-lancett och provtagningsrör. Ta provet på morgonen
              (före kl. 10) för mest tillförlitliga TSH-värden
            </li>
            <li>
              <strong>Skicka in</strong> — Posta provet i det medföljande
              frankerade kuvertet samma dag som provtagningen
            </li>
            <li>
              <strong>Få svar</strong> — Resultaten finns tillgängliga online
              inom 2-5 arbetsdagar med referensvärden och kommentarer
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Tips för tillförlitliga resultat
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
            <li>
              Ta provet på morgonen (kl. 7-10) — TSH är högst tidigt och sjunker
              under dagen
            </li>
            <li>
              Undvik biotintillskott 48 timmar före provtagning — biotin stör
              sköldkörtelanalysen
            </li>
            <li>
              Om du tar sköldkörtelhormon (Levaxin): ta provet FÖRE
              morgondosen, inte efter
            </li>
            <li>
              Fasta krävs inte, men undvik att äta direkt innan provtagning
            </li>
            <li>
              Undvik intensiv träning kvällen innan — det kan tillfälligt
              påverka TSH
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Tolka dina resultat
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sköldkörtelvärdena tolkas alltid tillsammans, aldrig enskilt:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
            <li>
              <strong>Högt TSH + lågt fritt T4:</strong> Tyder på
              underfunktion (hypotyreos) — hypofysen försöker stimulera en
              underaktiv sköldkörtel
            </li>
            <li>
              <strong>Lågt TSH + högt fritt T4:</strong> Tyder på
              överfunktion (hypertyreos) — sköldkörteln producerar för mycket
              hormon
            </li>
            <li>
              <strong>Högt TSH + normalt fritt T4:</strong> Subklinisk
              hypotyreos — tidig underfunktion som kan behöva uppföljning
            </li>
            <li>
              <strong>Förhöjda TPO-antikroppar:</strong> Indikerar autoimmun
              sköldkörtelsjukdom (Hashimotos tyreoidit)
            </li>
          </ul>

          <div className="bg-teal-50 rounded-xl p-5 flex flex-col sm:flex-row items-center gap-4 my-8">
            <div className="flex-1">
              <p className="font-bold text-teal-900 mb-1">
                Testa din sköldkörtelfunktion hemma
              </p>
              <p className="text-sm text-teal-700">
                Jämför de bästa hemmatester för sköldkörteln — snabbt svar och
                ackrediterade laboratorier.
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
          <p className="text-gray-700 leading-relaxed mb-4">
            Sköldkörtelproblem kan kopplas till andra bristtillstånd:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
            <li>
              <Link
                href="/guider/d-vitaminbrist-symtom/"
                className="text-teal-600 hover:underline"
              >
                D-vitaminbrist
              </Link>{" "}
              — vanligt vid autoimmun sköldkörtelsjukdom
            </li>
            <li>
              <Link
                href="/guider/jarnbrist-symtom/"
                className="text-teal-600 hover:underline"
              >
                Järnbrist
              </Link>{" "}
              — påverkar sköldkörtelhormonproduktionen negativt
            </li>
            <li>
              <Link
                href="/guider/b12-brist-symtom/"
                className="text-teal-600 hover:underline"
              >
                B12-brist
              </Link>{" "}
              — samsjuklighet med autoimmun sköldkörtelsjukdom
            </li>
          </ul>
        </div>

        <FaqAccordion items={faqs} title="Vanliga frågor om sköldkörteltest" />
      </main>
      <Footer />
    </>
  );
}
