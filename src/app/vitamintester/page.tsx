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
import StickyCTA from "@/components/StickyCTA";
import { getProductsByCategory } from "@/data/products";
import { buildAffiliateUrl } from "@/lib/tracking";

export const metadata: Metadata = {
  title: "Vitamintester Hemma 2026 – D-vitamin, B12 & Mer",
  description: "Testa dina vitaminnivåer hemma utan remiss. Jämför D-vitamintest, B12-test och omega-3 index. Ackrediterat lab, svar inom 3–5 dagar. Pris från 299 kr.",
  alternates: { canonical: "https://www.testahemma.se/vitamintester/" },
  openGraph: {
    title: "Vitamintester Hemma 2026 – D-vitamin, B12 & Mer",
    description: "Testa dina vitaminnivåer hemma utan remiss. Jämför D-vitamintest, B12-test och omega-3 index. Ackrediterat lab, svar inom 3–5 dagar. Pris från 299 kr.",
    url: "https://www.testahemma.se/vitamintester/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Bästa vitamintester hemma 2026",
  "description": "Jämförelse av de bästa hemtesterna för D-vitamin, B12, folat, järn och omega-3 på den svenska marknaden.",
  "url": "https://www.testahemma.se/vitamintester/",
  "numberOfItems": 5,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "D-vitamintest hemma" },
    { "@type": "ListItem", "position": 2, "name": "B12-test hemma" },
    { "@type": "ListItem", "position": 3, "name": "Omega-3 index hemma" },
    { "@type": "ListItem", "position": 4, "name": "Folattest hemma" },
    { "@type": "ListItem", "position": 5, "name": "Järn och ferritin hemma" },
  ],
};

const faqs = [
  { question: "Hur vanlig är D-vitaminbrist i Sverige?", answer: "Studier visar att upp till 50–70 % av svenska befolkningen har otillräckliga D-vitaminnivåer under vinterhalvåret. Sverige ligger långt norrut och solljuset räcker inte för naturlig D-vitaminproduktion oktober–april." },
  { question: "Vad är normalt D-vitaminvärde?", answer: "Optimalt D-vitamin (25-OH-D) anses vara 75–150 nmol/L. Brist definieras som under 50 nmol/L och allvarlig brist under 25 nmol/L. Många läkare rekommenderar nivåer om 100–125 nmol/L." },
  { question: "Kan man testa B12-brist hemma?", answer: "Ja. Hemtester för B12 mäter kobalamin i blodet. B12-brist är vanligt hos vegetarianer, veganer och äldre. Symtom inkluderar trötthet, stickningar och minnesproblem." },
  { question: "Behöver man fasta inför ett vitamintest?", answer: "Nej, D-vitamin och B12 behöver inte fastemätning. Omega-3-index är också oberoende av fasta. Järn och ferritin mäts helst på fastande mage för mest tillförlitligt svar." },
  { question: "Hur ofta bör man testa sina vitaminnivåer?", answer: "För de flesta räcker 1–2 tester per år – exempelvis en gång på hösten när D-vitaminnivåerna börjar sjunka och en gång på våren. Vid konstaterad brist rekommenderas uppföljningstest efter 3 månaders tillskott för att kontrollera att nivåerna normaliserats." },
  { question: "Kan man testa omega-3 hemma?", answer: "Ja. Omega-3 index mäts via ett enkelt fingerblodsprov hemma. Testet anger andelen EPA och DHA i röda blodkroppar. Ett index över 8 % anses optimalt för hjärthälsa, medan under 4 % klassas som låg nivå och innebär förhöjd risk." },
];

export default function VitamintesterPage() {
  const products = getProductsByCategory("vitamintester");
  const top = products[0];
  const topUrl = top ? buildAffiliateUrl(top.affiliateUrl, top.network, top.adtractionProgramId, top.addRevenueProgramId, `TH-${top.slug}-vitamintester-sticky`, top.awinProgramId) : "";
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <BreadcrumbNav items={[{ name: "Hem", href: "/" }, { name: "Vitamintester", href: "/vitamintester/" }]} />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Vitamintester hemma 2026</h1>
        <p className="text-sm text-gray-500 mb-3">{products.length} tester jämförda – senast uppdaterad mars 2026</p>
        <p className="text-lg text-gray-600 mb-2 leading-relaxed">
          Vitaminbrist är vanligare än man tror – särskilt D-vitamin och B12 i Sverige. Med ett enkelt hemtest kan du kontrollera dina nivåer och agera med rätt kosttillskott.
        </p>
        <MedicalDisclaimer />
        <AffiliateDisclaimer />
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Jämförelsetabell – vitamintester hemma</h2>
        <ProductTable products={products} pageSlug="vitamintester" />
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Detaljerade recensioner</h2>
        <div className="space-y-5">
          {products.map((p, i) => <ProductCard key={p.slug} product={p} position="vitamintester-list" rank={i + 1} />)}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Hur väljer man rätt vitamintest?</h2>
        <div className="prose-guide">
          <p>
            Att välja rätt vitamintest beror på vilka symtom du upplever och vilken årstid det är. De vanligaste vitaminerna att testa hemma i Sverige är <strong>D-vitamin, B12, folat, järn/ferritin</strong> och <strong>omega-3</strong>.
          </p>
          <h3>Vilka vitaminer kan man testa hemma?</h3>
          <ul>
            <li><strong>D-vitamin (25-OH-D):</strong> Det i särklass vanligaste vitamintestet i Sverige. Mäts via fingerblod och ger svar på om du ligger inom optimalt intervall (75–150 nmol/L).</li>
            <li><strong>B12 (kobalamin):</strong> Viktigt för nervsystem och blodbildning. Brist är vanlig hos vegetarianer, veganer och personer över 60 år.</li>
            <li><strong>Folat (B9):</strong> Särskilt viktigt under graviditet, men brist förekommer även hos den breda befolkningen. Mäts enkelt via fingerblodsprov.</li>
            <li><strong>Järn och ferritin:</strong> Ferritin speglar kroppens järndepåer och är ett känsligare mått än serum-järn. Lågt ferritin är en vanlig orsak till trötthet, särskilt hos kvinnor i fertil ålder.</li>
            <li><strong>Omega-3 index:</strong> Mäter andelen EPA och DHA i röda blodkroppar. Optimalt index är över 8 % – de flesta svenskar ligger under det.</li>
          </ul>
          <h3>Hur yttrar sig vitaminbrist?</h3>
          <p>
            Vitaminbrist är ofta svårdiagnostiserad eftersom symtomen är diffusa och kan likna andra tillstånd. De vanligaste tecknen inkluderar <strong>kronisk trötthet</strong>, <strong>håravfall</strong> och <strong>nedsatt immunförsvar</strong>. B12-brist kan även ge stickningar i händer och fötter samt minnesproblem, medan D-vitaminbrist ofta visar sig som muskelsvaghet och sämre humör under vinterhalvåret.
          </p>
          <h3>Varför är D-vitamin extra viktigt i Sverige?</h3>
          <p>
            Sverige befinner sig på en nordlig breddgrad där solljuset under perioden oktober–april saknar tillräcklig UV-B-strålning för att huden ska kunna producera D-vitamin. Det innebär att de flesta svenska invånare är beroende av kosttillskott eller föda under stora delar av året. Studier visar att upp till 70 % av befolkningen har otillräckliga nivåer under vinterhalvåret. Ett hemtest på hösten är ett enkelt sätt att ta reda på var du ligger och anpassa ditt tillskott därefter. Läs mer i vår guide om <Link href="/guider/d-vitaminbrist-symtom/">D-vitaminbrist och symtom</Link>.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Vanliga vitaminbrister i Sverige</h2>
        <div className="prose-guide">
          <p>Dessa vitaminbrister är vanligast i den svenska befolkningen och bör övervägas vid oklara symtom:</p>
          <ul>
            <li><strong>D-vitaminbrist:</strong> Drabbar uppskattningsvis hälften av befolkningen under vinterhalvåret. Orsak: otillräcklig solexponering och lågt intag via kosten.</li>
            <li><strong>B12-brist:</strong> Vanlig bland veganer, vegetarianer och äldre. B12 finns nästan uteslutande i animaliska livsmedel och kroppen lagrar det dåligt på lång sikt.</li>
            <li><strong>Järnbrist:</strong> Den vanligaste näringsbristsjukdomen globalt. I Sverige är det framför allt menstruerande kvinnor och idrottare som riskerar lågt ferritin.</li>
            <li><strong>Folatbrist:</strong> Viktig för celldelning och nervbildning. Brist kan uppstå vid ensidig kost eller vid ökade behov, exempelvis under graviditet.</li>
            <li><strong>Omega-3-brist:</strong> Lågt omega-3 index är kopplat till ökad risk för hjärt-kärlsjukdom. De flesta nordbor äter för lite fet fisk för att nå optimala nivåer.</li>
          </ul>
          <p>
            Vill du förstå hur du tolkar dina provsvar? Läs vår guide om att <Link href="/guider/tolka-blodvarden/">tolka blodvärden från hemtest</Link>.
            {" "}Se även vår fördjupade guide om <Link href="/guider/b12-brist-symtom/" className="text-teal-700 underline hover:text-teal-900">B12-brist – symtom, test och behandling</Link>.
          </p>
        </div>

        <div className="mt-12 rounded-xl bg-teal-700 px-6 py-8 text-white">
          <h2 className="text-xl font-bold mb-2">Osäker på vilket hemtest som passar dig bäst?</h2>
          <p className="text-teal-100 mb-4 leading-relaxed">
            Se vår samlade guide med de bästa hemtesterna inom alla kategorier – vitaminer, hormoner, blod och mer.
          </p>
          <Link
            href="/basta-hemtest/"
            className="inline-block rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-teal-800 hover:bg-teal-50 transition-colors"
          >
            Se bästa hemtesten
          </Link>
        </div>

        <FaqAccordion items={faqs} title="Vanliga frågor om vitamintester" />
      </main>
      {top && (
        <StickyCTA
          product={top.name}
          price={`Fr\u00e5n ${top.priceFrom}`}
          url={topUrl}
          text={top.ctaText || "Best\u00e4ll nu"}
          label="B\u00e4st i test"
        />
      )}
      <Footer />
    </>
  );
}
