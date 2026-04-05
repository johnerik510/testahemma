import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import AuthorByline from "@/components/AuthorByline";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Redaktionell policy | Testahemma.se",
  description:
    "Läs om Testahemma.ses redaktionella riktlinjer, oberoende, medicinsk granskning och hur vi säkerställer korrekt hälsoinformation.",
  alternates: { canonical: "https://www.testahemma.se/redaktionell-policy/" },
  openGraph: {
    title: "Redaktionell policy | Testahemma.se",
    description:
      "Läs om Testahemma.ses redaktionella riktlinjer, oberoende, medicinsk granskning och hur vi säkerställer korrekt hälsoinformation.",
    url: "https://www.testahemma.se/redaktionell-policy/",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.testahemma.se/" },
    { "@type": "ListItem", position: 2, name: "Redaktionell policy", item: "https://www.testahemma.se/redaktionell-policy/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Redaktionell policy – Testahemma.se",
  description: "Testahemma.ses redaktionella riktlinjer för oberoende, korrekthet och medicinsk granskning.",
  datePublished: "2026-01-15",
  dateModified: "2026-04-05",
  author: {
    "@type": "Person",
    name: "John Erik Johansson",
    url: "https://www.testahemma.se/om-oss/",
    jobTitle: "Grundare & hälsotestexpert",
  },
  publisher: {
    "@type": "Organization",
    name: "Testahemma.se",
    url: "https://www.testahemma.se",
  },
  mainEntityOfPage: "https://www.testahemma.se/redaktionell-policy/",
};

export default function RedaktionellPolicyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <BreadcrumbNav items={[{ name: "Hem", href: "/" }, { name: "Redaktionell policy", href: "/redaktionell-policy/" }]} />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Redaktionell policy</h1>
        <AuthorByline datePublished="2026-01-15" dateModified="2026-04-05" />

        <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-8">
          <p className="text-amber-900 font-semibold mb-2">Viktigt om hälsoinformation</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            Testahemma.se publicerar innehåll inom YMYL-kategorin (Your Money or Your Life) – hälsa och medicinsk information som kan påverka läsarens välmående. Vi tar detta ansvar på största allvar. Allt innehåll granskas medicinskt och bygger på vetenskapliga källor. Informationen på sajten ersätter aldrig medicinsk rådgivning, diagnos eller behandling.
          </p>
        </div>

        <div className="prose-guide">
          <h2>Vårt uppdrag</h2>
          <p>
            Testahemma.se är Sveriges oberoende guide till hemtestningskit. Vårt uppdrag är att ge svenska konsumenter ärlig, faktabaserad och lättillgänglig information så att de kan fatta välgrundade beslut om sin hälsa. Vi testar på riktigt, granskar noggrant och rekommenderar bara produkter vi själva skulle använda.
          </p>

          <h2>Redaktionellt oberoende</h2>
          <p>
            Vår redaktionella bedömning är helt oberoende från kommersiella intressen. Inga annonsörer, affiliatepartners eller tredje parter har inflytande över våra betyg, rankingar eller rekommendationer. Vi följer dessa principer:
          </p>
          <ul>
            <li>Betyg baseras uteslutande på faktiska testresultat och objektiva kriterier</li>
            <li>Vi listar och recenserar produkter vi faktiskt testat – oavsett om vi har ett affiliateprogram med aktören</li>
            <li>Inga företag kan köpa sig en högre placering eller bättre betyg</li>
            <li>Om vi har en kommersiell relation med en aktör markeras detta tydligt med affiliatedisclosure</li>
            <li>Vi beställer och betalar för alla testkit med egna medel – aldrig gratisprodukter</li>
          </ul>

          <h2>Medicinsk granskning</h2>
          <p>
            Eftersom hemtestning är ett hälsoområde tar vi medicinsk korrekthet på största allvar. Allt innehåll som rör hälsovärden, biomarkörer, diagnoser eller behandlingar granskas av kvalificerad hälso- och sjukvårdspersonal innan publicering:
          </p>
          <ul>
            <li>Recensioner och guider granskas av biomedicinsk analytiker eller legitimerad läkare</li>
            <li>Referensvärden och normalvärden verifieras mot aktuella kliniska riktlinjer</li>
            <li>Medicinska påståenden stöds alltid av vetenskapliga källor eller etablerad medicinsk praxis</li>
            <li>Vi undviker spekulativa eller obevisade hälsopåståenden</li>
          </ul>

          <h2>Källhantering</h2>
          <p>
            Vi använder tillförlitliga källor och är transparenta med var information kommer ifrån:
          </p>
          <ul>
            <li>Vetenskapliga studier från PubMed, Lancet, JAMA och liknande erkända tidskrifter</li>
            <li>Riktlinjer från Socialstyrelsen, Folkhälsomyndigheten och WHO</li>
            <li>Officiell information från tillverkare och laboratorier (verifierad mot oberoende källor)</li>
            <li>SWEDACs databas för laboratorieackreditering</li>
            <li>Egna testresultat och parallella kliniska provtagningar</li>
          </ul>

          <h2>Korrigeringspolicy</h2>
          <p>
            Om vi upptäcker ett faktafel, föråldrad information eller en läsare påpekar ett misstag agerar vi omedelbart:
          </p>
          <ul>
            <li>Faktafel rättas samma dag de upptäcks</li>
            <li>Väsentliga ändringar markeras tydligt med uppdaterat datum</li>
            <li>Vi tar aldrig bort innehåll utan motivering – vid behov uppdaterar vi istället</li>
            <li>Läsare kan rapportera fel via <a href="mailto:vpniskguiden@proton.me" className="text-teal-600 hover:underline">vpniskguiden@proton.me</a></li>
          </ul>

          <h2>Affiliatelänkar och finansiering</h2>
          <p>
            Testahemma.se finansieras delvis via affiliateprogram. När du köper via våra länkar kan vi erhålla en provision – utan extra kostnad för dig. Detta påverkar aldrig vår bedömning. Läs mer på vår <Link href="/annonsering/">annonserings- och affiliatesida</Link>.
          </p>

          <h2>Innehållsstandarder</h2>
          <p>Allt innehåll på Testahemma.se ska uppfylla följande krav:</p>
          <ul>
            <li>Faktabaserat och verifierbart – inga spekulationer presenterade som fakta</li>
            <li>Tydligt och lättförståeligt – medicinsk jargong förklaras alltid</li>
            <li>Uppdaterat – priser, produktinfo och referensvärden granskas regelbundet</li>
            <li>Balanserat – både för- och nackdelar presenteras för varje produkt</li>
            <li>Tillgängligt – innehållet ska vara begripligt oavsett förkunskap</li>
          </ul>
        </div>

        <MedicalDisclaimer />
      </main>
      <Footer />
    </>
  );
}
