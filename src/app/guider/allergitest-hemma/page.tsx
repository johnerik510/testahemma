import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Allergitest hemma 2026 – IgE-test för mat och pollen",
  description:
    "Hur fungerar hemallergitester? IgE-mätning för matvara och luftvägsallergener. Begränsningar vs. klinisk testning. Referensvärden och tolkning av sIgE-klasser.",
  alternates: { canonical: "https://www.testahemma.se/guider/allergitest-hemma/" },
  openGraph: {
    title: "Allergitest hemma 2026 – IgE-test för mat och pollen",
    description: "Hur fungerar hemallergitester? IgE-mätning för matvara och luftvägsallergener. Begränsningar vs. klinisk testning.",
    url: "https://www.testahemma.se/guider/allergitest-hemma/",
    siteName: "Testahemma.se",
    locale: "sv_SE",
    type: "article",
  },
};

const faqs = [
  {
    question: "Vad är skillnaden mellan IgE-test och lapptest?",
    answer:
      "IgE-test (blodprov) mäter immunglobulin E-antikroppar mot specifika allergener — det identifierar IgE-medierad allergi (typ 1-överkänslighet), vilket innefattar de flesta pollen-, pälsdjurs- och livsmedelsallergier. Lapptest (epikutant test) utförs av dermatolog och testar kontaktallergi (typ 4-överkänslighet) — reaktioner mot nickel, parfym, gummi och andra ämnen som orsakar kontakteksem. Kontaktallergi involverar inte IgE utan T-lymfocyter. Hemtest kan mäta IgE men kan inte ersätta lapptest.",
  },
  {
    question: "Kan man testa matallergier hemma?",
    answer:
      "Ja, med viktiga reservationer. IgE-blodprov för livsmedel (jordnöt, mjölk, ägg, vete, fisk, soja) är tillgängliga som hemtest. Men matallergitester via IgE är sämre prediktorer för klinisk allergi än inhalationsallergentester. En positiv IgE mot ett livsmedel innebär sensibilisering, inte nödvändigtvis klinisk allergi — studier visar att upp till 50% av IgE-positiva individer för vissa livsmedel inte reagerar kliniskt. Guldstandard för matallergidiagnos är fortfarande oralt provokationstest (OPT) under medicinsk övervakning. Hemtest är ett underlag, inte en diagnos.",
  },
  {
    question: "Vad är tot-IgE och vad betyder ett förhöjt värde?",
    answer:
      "Totalt IgE (tot-IgE) mäter den samlade mängden IgE-antikroppar i blodet oavsett specificitet. Normalvärde: under 100 kE/L (kiloenheter per liter) för vuxna. Förhöjt tot-IgE kan indikera atopisk sjukdom (allergi, eksem, astma), parasitinfektion, eller sällsynta immunologiska tillstånd. Ett förhöjt tot-IgE bekräftar inte specifik allergi — det är ett flaggvärde som motiverar specifik sIgE-testning. Normalt tot-IgE utesluter inte allergi, eftersom specifika IgE-nivåer kan vara förhöjda med normalt totalt IgE.",
  },
  {
    question: "Hur tillförlitliga är hemtester för allergi?",
    answer:
      "Hemtester för inhalationsallergener (pollen, pälsdjur, dammkvalster) har hög specificitet och sensitivitet jämförbar med provtagning på vårdcentral, förutsatt att provet analyseras vid ackrediterat laboratorium. Werlabs använder SWEDAC-ackrediterade laboratorier med ImmunoCAP-metodik — samma metodik som används kliniskt. Tillförlitligheten minskar för livsmedelsallergier och är lägre vid låggradig sensibilisering (klass 1). Hemtest bör ses som ett screening-verktyg som ger vägledning, inte som definitiv diagnos.",
  },
  {
    question: "Behövs läkare för allergiutredning?",
    answer:
      "Det beror på situationen. Hemtest räcker för att bekräfta misstänkt pollen- eller pälsdjursallergi vid milda säsongssymtom, och som underlag inför läkarbesök. Läkare eller allergolog krävs vid: anafylaktiska reaktioner eller misstänkt risk för anafylaxi, misstänkt astma eller allergisk astma, önskan om allergivaccination (immunterapi — kräver bekräftad klinisk diagnos), svårtolkade resultat med oklart samband till symtom, barn med allvarliga reaktioner. Vid positiva IgE-svar på livsmedel utan tydlig symtomhistorik bör alltid allergolog konsulteras.",
  },
  {
    question: "Vad är korsreaktioner vid allergi?",
    answer:
      "Korsreaktioner uppstår när proteiner i olika allergenkällor är strukturellt likartade och IgE-antikroppar reagerar mot båda. Det vanligaste exemplet i Sverige är björkpollen och livsmedel: björkpollenallergi (mot proteinet Bet v 1) korsreagerar med liknande proteiner i äpple, päron, körsbär, plommon, persika (rosaceae-frukter), hasselnöt, mandel, selleri och rå morot. Det kallas oral allergisyndrom (OAS) eller björk-pollen-förenat matallergisyndrom och ger oftast klåda och svullnad i munnen vid intag av råa frukter och nötter. Reaktionerna är sällan allvarliga och försvinner ofta vid upphettning av maten (proteinerna denatureras). Korsreaktioner kan ge IgE-positivt mot ett livsmedel utan att patienten haft direktkontakt med det.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Allergitest hemma 2026 – IgE-test för mat och pollen",
      description: "Hur fungerar hemallergitester? IgE-mätning för matvara och luftvägsallergener. Begränsningar vs. klinisk testning.",
      datePublished: "2026-04-04",
      dateModified: "2026-04-04",
      author: { "@type": "Person", name: "Anna Lindström", jobTitle: "Biomedicinsk analytiker" },
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
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.testahemma.se/" },
        { "@type": "ListItem", position: 2, name: "Guider", item: "https://www.testahemma.se/guider/" },
        { "@type": "ListItem", position: 3, name: "Allergitest hemma", item: "https://www.testahemma.se/guider/allergitest-hemma/" },
      ],
    },
  ],
};

export default function AllergiTestHemmaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-6">
        <BreadcrumbNav
          items={[
            { name: "Hem", href: "/" },
            { name: "Guider", href: "/guider/" },
            { name: "Allergitest hemma", href: "/guider/allergitest-hemma/" },
          ]}
        />

        <div className="text-xs text-gray-400 mb-2">
          Granskad av Anna Lindström, biomedicinsk analytiker &bull; april 2026
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Allergitest hemma 2026 – IgE-test for mat och pollen
        </h1>
        <MedicalDisclaimer />

        <p className="text-gray-700 leading-relaxed mb-6 mt-4">
          Allergi drabbar ungefär en tredjedel av den svenska befolkningen. Hemtester baserade på IgE-mätning
          kan identifiera sensibilisering mot pollen, pälsdjur, dammkvalster och livsmedel utan läkarbesök.
          Den här guiden förklarar vad IgE-tester faktiskt mäter, hur du tolkar sIgE-klasser och vad
          hemtestens begränsningar är jämfört med klinisk utredning.
        </p>

        <div className="bg-teal-50 border border-teal-100 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-teal-900 mb-2">Det viktigaste</h2>
          <ul className="text-sm text-teal-800 space-y-1 list-disc pl-4">
            <li>Hemtester mater totalt IgE och specifikt IgE (sIgE) mot ett panel av allergener</li>
            <li>IgE-positivt innebar sensibilisering -- inte nodvandigtvis klinisk allergi</li>
            <li>Inhalationsallergentester (pollen, palsjur) ar mer tillforlitliga an mattester</li>
            <li>Totalt IgE normalt under 100 kE/L; sIgE anges i klasser 0-6</li>
            <li>Klinisk allergiutredning kravs vid anafylaxirisk, astma eller oklara resultat</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Vad mats: totalt IgE och specifikt IgE</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Hemallergitester mater tva typer av IgE-antikroppar i blodet:
        </p>
        <p className="text-gray-700 leading-relaxed mb-2">
          <strong>Totalt IgE (tot-IgE)</strong> ar den samlade mangden IgE-antikroppar oavsett vad de reagerar mot.
          Normalt varde ar under 100 kE/L for vuxna. Forhojt tot-IgE ar ett flaggvarde som indikerar atopisk
          konstitution men bekraftar ingen specifik allergi.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>Specifikt IgE (sIgE)</strong> mater antikroppar riktade mot ett bestamt allergen --
          exempelvis bjorkpollen, katt eller jordnot. Det ar sIgE som avgor om du ar sensibiliserad
          mot ett specifikt amne. Resultaten anges i kUA/L och klassificeras i klasser 0-6.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">sIgE-klasser och referensvardesystem</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Specifikt IgE anges i klasser enligt ett standardiserat system:
        </p>
        <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-6 text-sm">
          <li><strong>Klass 0 (&lt;0,35 kUA/L):</strong> Negativ -- ingen sensibilisering pavisad</li>
          <li><strong>Klass 1 (0,35-0,69 kUA/L):</strong> Tvetydig -- mojlig sensibilisering, lag klinisk relevans</li>
          <li><strong>Klass 2 (0,70-3,49 kUA/L):</strong> Lag sensibilisering</li>
          <li><strong>Klass 3 (3,50-17,49 kUA/L):</strong> Mattlig sensibilisering</li>
          <li><strong>Klass 4 (17,50-49,99 kUA/L):</strong> Hog sensibilisering</li>
          <li><strong>Klass 5 (50-99,99 kUA/L):</strong> Mycket hog sensibilisering</li>
          <li><strong>Klass 6 (&gt;100 kUA/L):</strong> Extremt hog sensibilisering</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-6">
          Klass 2 eller hogre med symtom som matchar allergenet tyder pa klinisk allergi. Klass 1 utan
          symtom ar oftast kliniskt insignifikant. Viktigt: ca 20% av IgE-positiva individer har inga
          kliniska symtom -- sensibilisering ar inte detsamma som allergi.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tillgangliga hemtester i Sverige</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Foljande hemtester ar relevanta for allergiutredning pa den svenska marknaden:
        </p>
        <div className="space-y-3 mb-8">
          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-bold text-gray-900 mb-1">Werlabs Allergipanel</h3>
            <p className="text-sm text-gray-600 mb-1">
              Inhalationsallergener: gras, bjork, mogel, dammkvalster, katt, hund, hast.
              SWEDAC-ackrediterat laboratorium med ImmunoCAP-metodik. Inkluderar lakarkonsultation
              vid avvikande svar. Svarstid 2-4 vardagar.
            </p>
            <p className="text-xs text-gray-500">Tillganglig: werlabs.se</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-bold text-gray-900 mb-1">Diagnostikdirekt Allergitest</h3>
            <p className="text-sm text-gray-600 mb-1">
              Tacker de vanligaste allergenerna till lagre prispunkt. Enkel bestellningsprocess
              utan lakarkonsultation inbyggd. Svarstid 2-5 vardagar.
            </p>
            <p className="text-xs text-gray-500">Tillganglig: diagnostikdirekt.se</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-bold text-gray-900 mb-1">Celiaki IgA (Diagnostikdirekt)</h3>
            <p className="text-sm text-gray-600 mb-1">
              Mater IgA-antikroppar mot transglutaminas (tTG-IgA) -- screeningtest for celiaki.
              Notera: celiaki ar en autoimmun sjukdom, inte en allergi, men hemtest ar tillgangligt
              och anvandbart for initial screening.
            </p>
            <p className="text-xs text-gray-500">Tillganglig: diagnostikdirekt.se</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Allergen -- oversikt over hemtestbarhet</h2>
        <div className="mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-4 py-3 font-semibold text-gray-700 border border-gray-200">Allergen</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700 border border-gray-200">Vad det testar</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700 border border-gray-200">Tillgangligt hemma</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700 border border-gray-200">Klinisk nytta</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["Bjorkpollen", "sIgE mot Bet v 1 och relaterade proteiner", "Ja (Werlabs, Diagnostikdirekt)", "Hog -- bra prediktor for klinisk pollenallergi"],
                ["Graspollen", "sIgE mot graspollen-panel", "Ja", "Hog -- vanligaste pollenallergin i Sverige"],
                ["Katt", "sIgE mot Fel d 1 (kattprotein)", "Ja", "Hog -- stark korrelation sIgE och symtom"],
                ["Hund", "sIgE mot Can f 1 och Can f 2", "Ja", "God -- nagra falskt positiva"],
                ["Dammkvalster", "sIgE mot Der p 1 och Der f 1", "Ja", "God -- viktig orsak till helarsallergi"],
                ["Jordnot", "sIgE mot Ara h 1-9", "Ja (vissa paneler)", "Mattlig -- krav klinisk bedomning vid positivt svar"],
                ["Komjolksprotein", "sIgE mot kasein, beta-laktoglobulin", "Ja (vissa paneler)", "Mattlig -- korsreaktioner och toleransutveckling vanliga"],
                ["Insektsgift (bi, geting)", "sIgE mot Api m 1, Ves v 5", "Nej", "Kravs allergologremiss"],
                ["Kontaktallergi (nickel, latex)", "IgE-negativ -- T-cellsmedierad", "Nej", "Kravs lapptest hos dermatolog"],
              ].map(([allergen, tests, available, utility], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-medium text-gray-700 border border-gray-200">{allergen}</td>
                  <td className="px-4 py-3 text-gray-600 border border-gray-200 text-xs">{tests}</td>
                  <td className={`px-4 py-3 border border-gray-200 ${available.startsWith("Ja") ? "text-green-700 font-medium" : "text-gray-500"}`}>{available}</td>
                  <td className="px-4 py-3 text-gray-600 border border-gray-200 text-xs">{utility}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Begransningar -- vad hemtest inte kan</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          IgE-baserade hemtester har viktiga begransningar som maste forstAs for korrekt tolkning:
        </p>
        <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6 text-sm">
          <li>
            <strong>Sensibilisering ar inte allergi:</strong> Upp till 20% av IgE-positiva individer har inga
            kliniska symtom. Positiv IgE maste alltid tolkas mot symtomhistorik.
          </li>
          <li>
            <strong>Matallergitester ar svagare prediktorer:</strong> For livsmedel ar sIgE ett samre
            diagnostiskt verktyg an for inhalationsallergener. Guldstandard for matallergidiagnos
            ar oralt provokationstest (OPT) under medicinsk overvakning.
          </li>
          <li>
            <strong>Korsreaktioner skapar falska positiva:</strong> Bjorkpollenallergi orsakar ofta
            positiva sIgE-svar mot apple, hasselnot och selleri utan att personen har primara
            livsmedelsallergier mot dessa amnen (oral allergisyndrom, OAS).
          </li>
          <li>
            <strong>Kontaktallergi mats inte:</strong> Nickel-, latex- och parfymallergi ar T-cellsmedierade
            och kan inte identifieras med IgE-blodprov.
          </li>
          <li>
            <strong>Antihistaminets effekt ar ingen faktor:</strong> Till skillnad fran hudpricktest
            pAverkas IgE-blodprov inte av antihistaminintag -- ett viktigt praktiskt foretrade.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Riskgrupper -- vem bor testa allergi hemma?</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-8 text-sm">
          <li><strong>Eksem/atopisk dermatit:</strong> Atopiskt eksem ar starkt kopplat till IgE-medierad allergi och over 50% av barn med atopiskt eksem har matallergier</li>
          <li><strong>Astma:</strong> 80% av astmatiker har allergisk komponent -- allergitest kan identifiera utlosande faktorer</li>
          <li><strong>Kronisk rinnsnuva (allergisk rinit):</strong> Helarsrinit tyder pa inomhusallergener (kvalster, palsdjur), sasongsbunden rinit pa pollenallergi</li>
          <li><strong>Misstankt celiaki:</strong> IgA-baserat hemtest kan ge forsta indikation innan gastroskopi och tunntarmsbiopsi</li>
          <li><strong>Foralder till barn med misstankt allergi:</strong> Hemtest kan ge en forsta bild innan barnallergologremiss</li>
        </ul>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
          <h3 className="font-bold text-gray-900 mb-2">Relaterade guider</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/basta-hemtest/" className="text-blue-700 hover:underline">Basta hemtester 2026 -- komplett jamforelse</Link></li>
            <li><Link href="/guider/jarnbrist-test-hemma/" className="text-blue-700 hover:underline">Jarnbrist test hemma -- mat ferritin och jarnstatus</Link></li>
            <li><Link href="/guider/ferritin-normalt-varde/" className="text-blue-700 hover:underline">Ferritin normalvarde -- tolkning av blodprov</Link></li>
            <li><Link href="/diagnostikdirekt-vs-werlabs/" className="text-blue-700 hover:underline">Diagnostikdirekt vs Werlabs -- jamforelse</Link></li>
          </ul>
        </div>

        <FaqAccordion items={faqs} />
      </main>
      <Footer />
    </>
  );
}
