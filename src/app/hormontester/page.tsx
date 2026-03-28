import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import ProductCard from "@/components/ProductCard";
import ProductTable from "@/components/ProductTable";
import FaqAccordion from "@/components/FaqAccordion";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import AffiliateDisclaimer from "@/components/AffiliateDisclaimer";
import { getProductsByCategory } from "@/data/products";

export const metadata: Metadata = {
  title: "Hormontester Hemma 2026 – Testosteron, Östrogen & TSH | Testahemma.se",
  description: "Testa dina hormonnivåer hemma. Jämför tester för testosteron, östrogen, sköldkörtel och kortisol. Svar inom 3–7 dagar.",
  alternates: { canonical: "https://www.testahemma.se/hormontester/" },
};

const faqs = [
  { question: "Vilka hormoner kan man testa hemma?", answer: "De vanligaste hemhormontest mäter: testosteron (total och fritt), östradiol, progesteron, LH, FSH, prolaktin, TSH (sköldkörtel), T3/T4, kortisol (stresshormon) och DHEA-S." },
  { question: "Vad är normalt testosteronvärde för man?", answer: "Normalt totalt testosteron för män: 8–35 nmol/L. Fritt testosteron: 170–670 pmol/L. Lågt testosteron (under 8–10 nmol/L) kan ge symtom som trötthet, nedsatt libido och muskelminskning." },
  { question: "När ska man testa hormoner?", answer: "Testa hormoner om du upplever: kronisk trötthet, viktuppgång utan förklaring, humörsvängningar, nedsatt libido, menstruationsrubbningar, håravfall eller misstänkt sköldkörtelproblematik." },
  { question: "Hur noggrant är ett hemhormonstest?", answer: "Blodbaserade hemhormontester från ackrediterade laboratorier ger kliniskt tillförlitliga resultat. Salivbaserade tester (t.ex. dygnskortisol) är validierade för hormonmätning men kan variera mer än venöst blod." },
  { question: "Påverkar p-piller mina hormonvärden?", answer: "Ja. Östrogenbaserade p-piller höjer östrogen och SHBG (könshormonbindande globulin) i blodet, vilket också sänker fritt testosteron. Informera laboratoriet om du tar hormonell antikonception så att resultaten tolkas korrekt." },
  { question: "Kan man mäta testosteron hemma?", answer: "Ja. Flera ackrediterade hemtestleverantörer erbjuder testosteronmätning via fingerblodsprov eller salivprov. Fingerblod analyseras på lab och ger ett totalt testosteronvärde, medan salivprov mäter fritt (biologiskt aktivt) testosteron. Båda metoderna är kliniskt validierade." },
];

export default function HormontesterPage() {
  const products = getProductsByCategory("hormontester");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Bästa hormontester hemma 2026",
    url: "https://www.testahemma.se/hormontester/",
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `https://www.testahemma.se/recension/${p.slug}/`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <BreadcrumbNav items={[{ name: "Hem", href: "/" }, { name: "Hormontester", href: "/hormontester/" }]} />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Hormontester hemma 2026</h1>
        <p className="text-lg text-gray-600 mb-2 leading-relaxed">
          Hormonella obalanser kan orsaka trötthet, viktuppgång och humörsvängningar. Med ett hemhormonstest kan du enkelt kartlägga dina nivåer utan läkarremiss.
        </p>
        <MedicalDisclaimer />
        <AffiliateDisclaimer />

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Jämförelsetabell – hormontester hemma</h2>
        <ProductTable products={products} pageSlug="hormontester" />

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Detaljerade recensioner</h2>
        <div className="space-y-5">
          {products.map((p, i) => <ProductCard key={p.slug} product={p} position="hormontester-list" rank={i + 1} />)}
        </div>

        {/* Köpguide */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Hur väljer man rätt hormontest?</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          Hormoner samverkar i komplexa system och vad du bör mäta beror på dina symtom och livssituation. Här är det viktigaste att ha koll på innan du beställer ett test.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Vilka hormoner kan man testa?</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
          <li><strong>Testosteron</strong> – totalt och fritt testosteron, viktigt för både män och kvinnor.</li>
          <li><strong>Östrogen (östradiol)</strong> – central för menscykel, fertilitet och benhälsa.</li>
          <li><strong>Progesteron</strong> – balanserar östrogen och analyseras ofta i lutealfasen.</li>
          <li><strong>Sköldkörtelhormoner (TSH, T3, T4)</strong> – styr ämnesomsättning och energinivåer.</li>
          <li><strong>Kortisol</strong> – stresshormonen; ett dygnskortisol (4 salivprover) ger en komplett bild.</li>
          <li><strong>DHEA-S</strong> – förstadium till könshormoner, sjunker med åldern.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">När på dagen (och månaden) ska man testa?</h3>
        <p className="text-gray-600 mb-2 leading-relaxed">
          Tidpunkten för provtagning spelar stor roll för ett korrekt resultat:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
          <li><strong>Testosteron och kortisol</strong> – ta provet på morgonen (07:00–09:00) då värdena är som högst.</li>
          <li><strong>Progesteron</strong> – mäts bäst dag 19–22 i menscykeln (lutealfasen), inte under mens.</li>
          <li><strong>Dygnskortisol (saliv)</strong> – fyra prover under dagen: morgon, middag, eftermiddag och kväll.</li>
          <li><strong>TSH</strong> – kan tas när som helst på dygnet, gärna fastemätning för jämförbara värden.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Fingerblod vs. salivprov – vad är bäst för hormoner?</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Fingerblodsprov skickas till ett ackrediterat lab och mäter totala hormonnivåer i serum – samma metod som på en vårdcentral. Salivprov mäter det fritt tillgängliga (biologiskt aktiva) hormonet och är särskilt användbart för kortisol och fritt testosteron. Båda metoderna är kliniskt validierade; välj utifrån vilket hormon och vilken aspekt du vill kartlägga. Läs mer i vår guide om{" "}
          <Link href="/guider/tolka-blodvarden/" className="text-teal-700 underline hover:text-teal-900">
            hur man tolkar blodvärden
          </Link>.
        </p>

        {/* Vanliga hormontester */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Vanliga hormontester – kort översikt</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            {
              title: "Sköldkörteltester",
              desc: "Mäter TSH, fritt T3 och fritt T4. Lågt TSH kan tyda på överfunktion; högt TSH på underfunktion (hypotyreoidism). Vanliga symtom: trötthet, frusenhet, viktuppgång eller hjärtklappning.",
            },
            {
              title: "Könshormontester",
              desc: "Täcker testosteron, östradiol, progesteron, LH, FSH och SHBG. Används vid misstänkt PCOS, klimakterie, lågt testosteron eller fertilitetsfrågor.",
            },
            {
              title: "Stresshormontest",
              desc: "Mäter kortisol och DHEA-S. Kronisk stress kan leda till utmattning och utbrändhet. Ett dygnskortisol (salivprov x4) ger en komplett bild av binjureaxelns funktion.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
              <div className="font-bold text-gray-900 mb-2">{item.title}</div>
              <div className="text-sm text-gray-600 leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>

        <p className="text-gray-600 mb-8">
          Vill du fördjupa dig i hur hormoner påverkar din hälsa? Läs vår guide om{" "}
          <Link href="/guider/hormoner-och-halsa/" className="text-teal-700 underline hover:text-teal-900">
            hormoner och halsa
          </Link>.
        </p>

        {/* Teal CTA block */}
        <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="font-bold text-teal-900 text-lg mb-1">Osäker på vilket test du behöver?</div>
            <p className="text-teal-800 text-sm leading-relaxed">
              Se vår samlade jämförelse av Sveriges bästa hemtester och hitta det test som passar dina behov och din budget.
            </p>
          </div>
          <Link
            href="/basta-hemtest/"
            className="shrink-0 inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg px-6 py-3 text-sm transition-colors text-center"
          >
            Se bästa hemtesterna
          </Link>
        </div>

        <FaqAccordion items={faqs} title="Vanliga frågor om hormontester" />
      </main>
      <Footer />
    </>
  );
}
