import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Om oss – Testahemma.se",
  description: "Lär känna teamet bakom Testahemma.se – Sveriges oberoende guide till hemtestningskit. Vi testar, jämför och hjälper dig hitta rätt hälsotest.",
  alternates: { canonical: "https://www.testahemma.se/om-oss/" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "John Erik Johansson",
  image: "https://www.testahemma.se/images/john-erik-johansson.jpg",
  jobTitle: "Grundare & hälsotestexpert",
  worksFor: {
    "@type": "Organization",
    name: "Testahemma.se",
    url: "https://www.testahemma.se",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Testahemma.se",
  url: "https://www.testahemma.se",
  foundingDate: "2025",
  description: "Sveriges oberoende guide till hemtestningskit och hälsotester.",
  email: "vpniskguiden@proton.me",
  founder: personSchema,
};

export default function OmOssPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <BreadcrumbNav items={[{ name: "Hem", href: "/" }, { name: "Om oss", href: "/om-oss/" }]} />
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Om Testahemma.se</h1>
        <div className="prose-guide">
          <p>Testahemma.se är Sveriges oberoende guide till hemtestningskit. Vi hjälper dig navigera det växande utbudet av hälsotester du kan beställa hem -- utan läkarremiss, utan kö och utan onödig kostnad.</p>

          <h2>Grundare</h2>
          <div className="flex flex-col sm:flex-row items-start gap-6 mb-6 not-prose">
            <Image src="/images/john-erik-johansson.jpg" alt="John Erik Johansson – grundare av Testahemma.se" className="w-32 h-32 rounded-full object-cover shrink-0 mx-auto sm:mx-0" width={128} height={128} />
            <div>
              <p className="text-xl font-bold text-gray-900">John Erik Johansson</p>
              <p className="text-teal-600 font-medium text-sm mb-3">Grundare & hälsotestexpert</p>
              <p className="text-gray-600 leading-relaxed">
                Testahemma.se grundades av John Erik Johansson. Med ett genuint intresse för preventiv hälsa och tillgänglig diagnostik skapade vi sajten för att hjälpa svenska konsumenter hitta rätt hemtest baserat på oberoende tester och fakta.
              </p>
            </div>
          </div>

          <h2>Varför vi grundade sajten</h2>
          <p>Hemtestmarknaden i Sverige har exploderat de senaste åren. Med dussintals aktörer, hundratals tester och varierande laboratoriekvalitet är det svårt att veta vad som faktiskt är värt att köpa. Vi skapade Testahemma.se för att ge dig en ärlig, datadriven och oberoende vägledning.</p>

          <h2>Hur vi testar</h2>
          <p>Vi beställer och testar hemtest på riktigt. Våra recensioner bygger på faktiska provtagningar, analys av laboratorieackreditering, resultatpresentation och prisvärdhet. Läs mer om vår metodik på <Link href="/hur-vi-testar/">hur vi testar</Link>.</p>

          <h2>Vår redaktionella oberoende</h2>
          <p>Testahemma.se finansieras delvis via affiliatelänkar. Det innebär att vi kan erhålla provision när du köper via våra länkar -- utan extra kostnad för dig. Vår redaktionella bedömning påverkas aldrig av kommersiella intressen. Betyg och rankingar baseras uteslutande på faktiska testresultat och objektiva kriterier.</p>

          <h2>Medicinsk ansvarsbegränsning</h2>
          <p>Innehållet på Testahemma.se är informativt och ersätter inte medicinsk rådgivning, diagnos eller behandling. Vid oro för din hälsa ska du alltid kontakta läkare eller annan behörig vårdpersonal.</p>

          <h2>Kontakta oss</h2>
          <p>Har du frågor, hittat ett fel eller vill samarbeta? Mejla oss på <a href="mailto:vpniskguiden@proton.me" className="text-teal-600 hover:underline">vpniskguiden@proton.me</a> eller besök vår <Link href="/kontakt/">kontaktsida</Link>.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
