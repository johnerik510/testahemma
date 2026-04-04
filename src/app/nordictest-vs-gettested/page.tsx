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
  title: "Nordictest vs GetTested April 2026 — STI-test hemma: vilket väljer du?",
  description:
    "Vi jämför Nordictest och GetTested sida vid sida. Pris, testutbud, laboratoriekvalitet och diskretion. Nordictest från 99 kr vs GetTested från 489 kr — är prisskillnaden värd det?",
  alternates: { canonical: "https://www.testahemma.se/nordictest-vs-gettested/" },
  openGraph: {
    title: "Nordictest vs GetTested April 2026 — vilket STI-test är bäst?",
    description:
      "CE-märkta tester från 99 kr mot ISO 15189-certifierade laboratorietester. Pris, kvalitet och diskretion jämfört.",
    url: "https://www.testahemma.se/nordictest-vs-gettested/",
    siteName: "Testahemma.se",
    locale: "sv_SE",
    type: "article",
  },
};

const faqs = [
  {
    question: "Vilken är bäst — Nordictest eller GetTested?",
    answer:
      "Det beror på vad du behöver. Nordictest är bäst om du vill ha ett snabbt, billigt screeningtest (från 99 kr) utan labbanalys — svaret ges direkt hemma inom 15–30 minuter. GetTested är bäst om du vill ha laboratorieanalys med PCR/NAAT-teknik och ett digitalt svar via säker portal — det ger högre sensitivitet och är bättre för kliniska ändamål. Behöver du ett bevis för sjukvård: välj GetTested. Vill du snabbkolla diskret hemma: Nordictest.",
  },
  {
    question: "Är Nordictests tester lika tillförlitliga som GetTested?",
    answer:
      "Nej, inte fullt ut. GetTested analyserar provet i ett ISO 15189-certifierat laboratorium med PCR/NAAT-teknik — samma metod som kliniker använder. Nordictest säljer CE-märkta snabbtester (kassettformat) som du tolkar hemma, liknande antigentester. Sensitiviteten är generellt lägre hos snabbtester. Vid ett positivt Nordictest-resultat bör du alltid bekräfta med ett laboratorietest.",
  },
  {
    question: "Vilken är billigast?",
    answer:
      "Nordictest är avsevärt billigare: enstaka snabbtester kostar 99–299 kr beroende på typ. GetTested startar på ca 489 kr per test och kan kosta 1 000–2 000 kr for ett brett STI-paket. Nordictests låga pris reflekterar dock att det är snabbtester utan laboratorieanalys — du betalar för bekvämlighet, inte klinisk precision.",
  },
  {
    question: "Kan man använda Nordictest-resultaten i sjukvården?",
    answer:
      "Nej — ett positivt Nordictest-snabbtest är inte ett kliniskt bekräftat resultat. Om testet visar positivt ska du alltid söka sjukvård för bekräftande laboratorieanalys. GetTested däremot analyserar i ackrediterat lab och deras resultat kan presenteras för sjukvård vid behov, men gäller som ett komplement till — inte ersättning för — klinisk utredning.",
  },
  {
    question: "Hur diskret är respektive tjänst?",
    answer:
      "Båda är diskreta. Nordictest levererar i neutralt paket utan avsändarinformation, provtagningen sker hemma och det finns inget digitalt register med ditt namn kopplat till resultatet. GetTested skickar också diskret, men eftersom analysen sker i labb och resultaten levereras via en lösenordsskyddad portal, finns ett digitalt spår. Nordictest är det absolut mest anonyma alternativet av de två.",
  },
  {
    question: "Vilka STI täcker respektive tjänst?",
    answer:
      "Nordictest erbjuder snabbtester för: klamydia, gonorré, syfilis, HIV (1+2), herpes simplex (typ 1/2), hepatit B/C, och mykoplasma. GetTested täcker samma infektioner men med laboratorieanalys och kan erbjuda bredare panel-tester (HPV, Trichomonas, Chlamydia trachomatis sub-typer). For det bredaste laboratoriekonfirmerade utbudet: GetTested.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Nordictest vs GetTested April 2026 — komplett jämförelse",
      datePublished: "2026-04-04",
      dateModified: "2026-04-04",
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

const comparisonRows = [
  { feature: "Testtyp", nordictest: "Snabbtest (kassett, hemma)", gettested: "Laboratorieanalys (PCR/NAAT)", winner: "gettested" },
  { feature: "Certifiering", nordictest: "CE-märkt", gettested: "ISO 15189-certifierat lab", winner: "gettested" },
  { feature: "Ingångspris", nordictest: "ca 99 kr", gettested: "ca 489 kr", winner: "nordictest" },
  { feature: "Svarstid", nordictest: "15–30 min (hemma)", gettested: "1–5 vardagar (digitalt)", winner: "nordictest" },
  { feature: "Anonymitet", nordictest: "Hög — inget labbregister", gettested: "God — men digitalt svar via portal", winner: "nordictest" },
  { feature: "Klinisk precision (sensitivitet)", nordictest: "Lägre (snabbtest)", gettested: "Hög (PCR-nivå)", winner: "gettested" },
  { feature: "Godkänd av sjukvård", nordictest: "Nej — bekräfta vid positivt svar", gettested: "Ja — ackrediterat resultat", winner: "gettested" },
  { feature: "STI-täckning (antal)", nordictest: "10+ enskilda tester", gettested: "20+ inklusive paneler", winner: "gettested" },
  { feature: "Provtagningsmetod", nordictest: "Fingerstick / svabb / urin", gettested: "Fingerstick / svabb / urin", winner: "draw" },
  { feature: "Leveransdiskret", nordictest: "Ja — neutralt paket", gettested: "Ja — neutralt paket", winner: "draw" },
];

export default function NordictestVsGetTestedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-6">
        <BreadcrumbNav
          items={[
            { name: "Hem", href: "/" },
            { name: "Jämför hemmatester", href: "/jamfor-hemmatester/" },
            { name: "Nordictest vs GetTested", href: "/nordictest-vs-gettested/" },
          ]}
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Nordictest vs GetTested April 2026 — vilket STI-test passar dig?
        </h1>
        <p className="text-sm text-gray-500 mb-4">Senast uppdaterad: april 2026</p>
        <AffiliateDisclaimer />
        <MedicalDisclaimer />

        <p className="text-gray-700 leading-relaxed mb-6 mt-4">
          Nordictest och GetTested är båda populära val för diskreta STI-tester hemma — men de fungerar
          fundamentalt olika. Nordictest säljer CE-märkta snabbtester som ger svar direkt hemma, ungefär
          som ett graviditetstest. GetTested skickar ett provtagningskit, analyserar i ett ISO-certifierat
          laboratorium och ger ett digitalt svar inom 1–5 dagar med klinisk precision.
        </p>

        {/* Quick verdict */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="border-2 border-emerald-500 rounded-xl p-5">
            <div className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-2">Välj Nordictest om du...</div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold mt-0.5">+</span>Vill ha svar samma dag (15–30 min)</li>
              <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold mt-0.5">+</span>Har begränsad budget (från 99 kr)</li>
              <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold mt-0.5">+</span>Vill ha maximal anonymitet</li>
              <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold mt-0.5">+</span>Gör ett snabbt screeningtest</li>
            </ul>
            <Link
              href="https://addrevenue.io/t?a=985053&c=3467323"
              rel="sponsored noopener noreferrer"
              target="_blank"
              className="mt-4 inline-flex items-center justify-center w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-2.5 rounded-lg transition-colors text-sm"
            >
              Se tester hos Nordictest
            </Link>
          </div>
          <div className="border-2 border-blue-500 rounded-xl p-5">
            <div className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-2">Välj GetTested om du...</div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-blue-500 font-bold mt-0.5">+</span>Behöver klinisk precision (PCR/NAAT)</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 font-bold mt-0.5">+</span>Vill presentera resultatet for sjukvård</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 font-bold mt-0.5">+</span>Testar ett brett STI-paket</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 font-bold mt-0.5">+</span>Kan vänta 1–5 dagar på svar</li>
            </ul>
            <Link
              href="https://www.gettested.se"
              rel="noopener noreferrer"
              target="_blank"
              className="mt-4 inline-flex items-center justify-center w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2.5 rounded-lg transition-colors text-sm"
            >
              Se tester hos GetTested
            </Link>
          </div>
        </div>

        {/* Comparison table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Jämförelsetabell — Nordictest vs GetTested</h2>
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 w-1/3">Egenskap</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 w-1/3">Nordictest</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 w-1/3">GetTested</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800">{row.feature}</td>
                    <td className={`px-4 py-3 ${row.winner === "nordictest" ? "font-semibold text-emerald-700" : "text-gray-600"}`}>
                      {row.winner === "nordictest" && <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-2" />}
                      {row.nordictest}
                    </td>
                    <td className={`px-4 py-3 ${row.winner === "gettested" ? "font-semibold text-blue-700" : "text-gray-600"}`}>
                      {row.winner === "gettested" && <span className="inline-block w-2 h-2 rounded-full bg-blue-400 mr-2" />}
                      {row.gettested}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Deep dive */}
        <section className="mb-10 space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Djupanalys</h2>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Testmetod — snabbtest vs laboratorieanalys</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Den fundamentala skillnaden är testmetoden. Nordictests snabbtester fungerar som en immunokromatografisk
              kassett — du tillsätter ett prov (urin, blod från fingerstick eller svabb) och en kemisk reaktion
              producerar ett synligt resultat inom 15–30 minuter. Tekniken liknar antigentester for Covid-19.
            </p>
            <p className="text-gray-700 leading-relaxed">
              GetTested analyserar istället i ett ISO 15189-certifierat laboratorium med PCR (polymeraskedjereaktion)
              eller NAAT (Nucleic Acid Amplification Test). PCR detekterar arvsmassan hos bakterier och virus
              med extremt hog sensitivitet — ner till enstaka kopior av DNA/RNA. Det är samma teknik som
              sjukvården använder och ger kliniskt tillförlitliga resultat.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Pris — stor skillnad i prisklass</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nordictest är klart billigare: enstaka snabbtester kostar 99–299 kr beroende på test.
              Ett komplett STI-paneltest kan köpas för 399–599 kr. GetTested tar mer: enstaka tester
              börjar på ca 489 kr och ett brett STI-paket (HIV, klamydia, gonorré, syfilis, herpes, hepatit)
              kostar ofta 1 200–1 800 kr.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Prisskillnaden reflekterar kostnadsskillnaden i analys: snabbtester är billiga att producera,
              laboratorieanalyser kräver utrustning, personal och ackreditering. Är du prismedveten och
              gör ett screeningtest: Nordictest. Vill du ha maximal precision: GetTested är pengarna värt.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Anonymitet — viktigt for diskret testning</h3>
            <p className="text-gray-700 leading-relaxed">
              Nordictest är det mest anonyma alternativet. Du köper testet, tar provet hemma och tolkar
              resultatet — det finns inget labb som registrerar ditt prov med ditt namn. GetTested ger
              ett digitalt svar via en lösenordsskyddad portal, vilket innebär att ett digitalt spår
              existerar. Båda skickar i diskret ytterpaket utan avsändarinformation. Om total anonymitet
              är ditt primat: Nordictest.
            </p>
          </div>
        </section>

        <FaqAccordion items={faqs} />

        {/* Bottom CTA */}
        <section className="mt-10 p-6 bg-gray-50 rounded-xl border border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Vart köper du?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <p className="font-semibold text-gray-900 mb-1">Nordictest — från 99 kr</p>
              <p className="text-sm text-gray-600 mb-3">CE-märkta snabbtester. Svar hemma direkt.</p>
              <Link
                href="https://addrevenue.io/t?a=985053&c=3467323"
                rel="sponsored noopener noreferrer"
                target="_blank"
                className="inline-flex items-center justify-center w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-2.5 rounded-lg transition-colors text-sm"
              >
                Gå till Nordictest
              </Link>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <p className="font-semibold text-gray-900 mb-1">GetTested — från 489 kr</p>
              <p className="text-sm text-gray-600 mb-3">ISO-certifierat lab. Klinisk precision.</p>
              <Link
                href="https://www.gettested.se"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center justify-center w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2.5 rounded-lg transition-colors text-sm"
              >
                Gå till GetTested
              </Link>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Relaterat: <Link href="/recension/nordictest" className="text-blue-600 hover:underline">Nordictest recension</Link> —{" "}
            <Link href="/recension/gettested" className="text-blue-600 hover:underline">GetTested recension</Link> —{" "}
            <Link href="/sti-tester/" className="text-blue-600 hover:underline">Bästa STI-tester hemma 2026</Link>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
