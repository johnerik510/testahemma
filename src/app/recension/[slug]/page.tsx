import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import AffiliateButton from "@/components/AffiliateButton";
import AffiliateDisclaimer from "@/components/AffiliateDisclaimer";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import FaqAccordion from "@/components/FaqAccordion";
import RatingBars from "@/components/RatingBar";
import ProductCard from "@/components/ProductCard";
import StickyCTA from "@/components/StickyCTA";
import { products, getProductBySlug, getAllProductSlugs } from "@/data/products";
import { buildAffiliateUrl } from "@/lib/tracking";
import { buildReviewSchema } from "@/lib/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProductBySlug(slug);
  if (!p) return { title: "Hittades inte" };
  return {
    title: `${p.name} Recension April 2026 – Är det värt det? | Testahemma.se`,
    description: `Läs vår kompletta ${p.name} recension. Vi testar noggrannhet, provtagning, resultat och pris. ${p.shortDescription}`,
    alternates: { canonical: `https://www.testahemma.se/recension/${slug}/` },
    openGraph: {
      title: `${p.name} Recension 2026`,
      description: p.shortDescription,
      url: `https://www.testahemma.se/recension/${slug}/`,
      siteName: "Testahemma.se",
      locale: "sv_SE",
      type: "article",
    },
  };
}

export default async function RecensionPage({ params }: Props) {
  const { slug } = await params;
  const p = getProductBySlug(slug);
  if (!p) notFound();

  const others = products.filter((x) => x.slug !== p.slug).slice(0, 3);
  const affiliateHref = buildAffiliateUrl(
    p.affiliateUrl,
    p.network,
    p.adtractionProgramId,
    p.addRevenueProgramId,
    `TH-${p.slug}-recension`,
    p.awinProgramId
  );

  const reviewSchema = buildReviewSchema(p);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.testahemma.se/" },
      { "@type": "ListItem", position: 2, name: "Recensioner", item: "https://www.testahemma.se/basta-hemtest/" },
      { "@type": "ListItem", position: 3, name: `${p.name} recension`, item: `https://www.testahemma.se/recension/${slug}/` },
    ],
  };

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <main className="max-w-5xl mx-auto px-4 py-6">
        <BreadcrumbNav items={[
          { name: "Hem", href: "/" },
          { name: "Bästa hemtest", href: "/basta-hemtest/" },
          { name: `${p.name} recension`, href: `/recension/${slug}/` },
        ]} />

        {/* Hero */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 md:p-8 mb-8">
          <MedicalDisclaimer />
          <AffiliateDisclaimer />

          <div className="flex flex-col md:flex-row gap-6 mt-4">
            <div className="shrink-0">
              <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gray-50 border border-gray-100">
                <Image src={p.logoUrl} alt={`${p.name} logotyp`} width={96} height={96} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{p.name} recension 2026</h1>
                  <p className="text-gray-500 mt-1">{p.shortDescription}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-900">{p.priceFrom}</div>
                  <div className="text-xs text-gray-400">från</div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3 mt-3">
                <div className="flex">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} className={`w-5 h-5 ${s <= Math.round(p.rating/2) ? "text-yellow-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xl font-bold text-gray-900">{p.rating.toFixed(1)}<span className="text-sm font-normal text-gray-400">/10</span></span>
                <span className="text-sm text-gray-400">Svarstid: {p.turnaround}</span>
              </div>

              {/* Key details */}
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  p.sampleType.split("(")[0].trim(),
                  p.labCertification || "Certifierat lab",
                  p.prescription ? "Kräver recept" : "Utan recept",
                ].map((tag) => (
                  <span key={tag} className="bg-teal-50 text-teal-700 text-xs font-medium px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <AffiliateButton
                  href={affiliateHref}
                  productName={p.name}
                  network={p.network}
                  location={`TH-${p.slug}-recension-hero`}
                  price={p.priceFrom}
                  text={p.ctaText}
                  size="lg"
                />
                {p.priceNote && <p className="text-sm text-gray-400 self-center">{p.priceNote}</p>}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="prose-guide">
              <h2>Introduktion</h2>
              <p>{p.review.intro}</p>

              <h2>Noggrannhet och laboratoriekvalitet</h2>
              <p>{p.review.accuracy}</p>

              <h2>Provtagningsprocess</h2>
              <p>{p.review.process}</p>

              <h2>Resultatpresentation</h2>
              <p>{p.review.results}</p>

              <h2>Pris och värde</h2>
              <p>{p.review.price}</p>
            </div>

            {/* Pros / Cons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-5">
                <h3 className="font-bold text-green-800 mb-3">Fördelar</h3>
                <ul className="space-y-2">
                  {p.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2 text-sm text-green-700">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-5">
                <h3 className="font-bold text-red-800 mb-3">Nackdelar</h3>
                <ul className="space-y-2">
                  {p.cons.map((con) => (
                    <li key={con} className="flex items-start gap-2 text-sm text-red-700">
                      <svg className="w-4 h-4 text-red-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Verdict */}
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-teal-900 mb-3">Slutbetyg & Omdöme</h2>
              <p className="text-gray-700 leading-relaxed">{p.review.verdict}</p>
              <div className="mt-4">
                <AffiliateButton
                  href={affiliateHref}
                  productName={p.name}
                  network={p.network}
                  location={`TH-${p.slug}-recension-verdict`}
                  price={p.priceFrom}
                  text={p.ctaText}
                  size="md"
                />
              </div>
            </div>

            {/* Tests included */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Inkluderade tester</h2>
              <div className="flex flex-wrap gap-2">
                {p.testsIncluded.map((t) => (
                  <span key={t} className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full">{t}</span>
                ))}
              </div>
            </div>

            <FaqAccordion items={p.faqs} title={`Vanliga frågor om ${p.name}`} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Rating breakdown */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Detaljbetyg</h3>
              <div className="mb-4 flex items-center gap-2">
                <span className="text-4xl font-bold text-teal-600">{p.rating.toFixed(1)}</span>
                <span className="text-gray-400 text-lg">/10</span>
              </div>
              <RatingBars ratings={p.ratings} />
            </div>

            {/* Quick facts */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Snabbfakta</h3>
              <dl className="space-y-3 text-sm">
                {[
                  { label: "Pris från", value: p.priceFrom },
                  { label: "Svarstid", value: p.turnaround },
                  { label: "Provtyp", value: p.sampleType.split("(")[0].trim() },
                  { label: "Laboratorium", value: p.labCertification || "Certifierat" },
                  { label: "Utan recept", value: p.prescription ? "Nej" : "Ja" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between gap-2">
                    <dt className="text-gray-500">{label}</dt>
                    <dd className="font-medium text-gray-900 text-right">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5">
                <AffiliateButton
                  href={affiliateHref}
                  productName={p.name}
                  network={p.network}
                  location={`TH-${p.slug}-recension-sidebar`}
                  price={p.priceFrom}
                  text={p.ctaText}
                  size="sm"
                  className="w-full justify-center"
                />
              </div>
            </div>

            {/* Last updated */}
            <p className="text-xs text-gray-400 text-center">
              Senast uppdaterad: {new Date(p.dateModified).toLocaleDateString("sv-SE", { year: "numeric", month: "long", day: "numeric" })}<br />
              Granskad av: {p.author || "Anna Lindström"}
            </p>
          </div>
        </div>

        {/* Related products */}
        {others.length > 0 && (
          <div className="mt-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Liknande hemtester</h2>
            <div className="space-y-4">
              {others.map((other) => (
                <ProductCard key={other.slug} product={other} position={`${p.slug}-related`} />
              ))}
            </div>
          </div>
        )}
      </main>

      <StickyCTA
        product={p.name}
        price={`Från ${p.priceFrom}`}
        url={affiliateHref}
        text={p.ctaText || "Beställ nu"}
      />

      <Footer />
    </>
  );
}
