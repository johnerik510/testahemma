import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Integritetspolicy | Testahemma.se",
  description: "Läs Testahemma.se integritetspolicy – hur vi hanterar dina personuppgifter och cookies i enlighet med GDPR.",
  alternates: { canonical: "https://www.testahemma.se/integritetspolicy/" },
};

export default function IntegritetspolicyPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <BreadcrumbNav items={[{ name: "Hem", href: "/" }, { name: "Integritetspolicy", href: "/integritetspolicy/" }]} />
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Integritetspolicy</h1>
        <p className="text-sm text-gray-400 mb-6">Senast uppdaterad: mars 2026</p>
        <div className="prose-guide">
          <h2>Personuppgiftsansvarig</h2>
          <p>Testahemma.se är personuppgiftsansvarig för behandlingen av personuppgifter på denna webbplats. Vi behandlar personuppgifter i enlighet med EU:s dataskyddsförordning (GDPR). Kontakt: <a href="mailto:vpniskguiden@proton.me" className="text-teal-600 hover:underline">vpniskguiden@proton.me</a></p>

          <h2>Vilka uppgifter samlar vi in?</h2>
          <p>Vi samlar in följande uppgifter när du besöker sajten:</p>
          <ul>
            <li>Anonymiserad besöksdata via Google Analytics 4 (om du accepterar cookies) – t.ex. sidvisningar, besöksvaraktighet och enhetsinformation</li>
            <li>Klickdata på affiliatelänkar via Adtraction och AddRevenue (anonymiserat)</li>
            <li>Om du kontaktar oss: namn och e-postadress</li>
          </ul>

          <h2>Cookies</h2>
          <p>Vi använder analytiska cookies (Google Analytics) enbart med ditt uttryckliga samtycke. Vi använder Google Consent Mode v2 som standard nekar all datalagring tills du aktivt godkänner. Du kan när som helst återkalla ditt samtycke via vår cookie-inställning.</p>
          <p>Affiliatenätverken (Adtraction, AddRevenue) placerar sessionscookies för konverteringsspårning när du klickar på affiliatelänkar. Dessa cookies är nödvändiga för att säkerställa att eventuell provision krediteras korrekt.</p>

          <h2>Delning av uppgifter</h2>
          <p>Vi säljer aldrig personuppgifter. Vi delar anonymiserad data med Google Analytics och Ahrefs Analytics för webbanalys. Affiliatenätverken mottar klick- och konverteringsdata per avtal.</p>

          <h2>Dina rättigheter</h2>
          <p>Du har rätt att begära tillgång till, rättelse av eller radering av dina personuppgifter. Kontakta oss på <a href="mailto:vpniskguiden@proton.me" className="text-teal-600 hover:underline">vpniskguiden@proton.me</a> för att utöva dina rättigheter.</p>

          <h2>Dataskyddsmyndigheten</h2>
          <p>Om du anser att vi behandlar dina personuppgifter felaktigt har du rätt att lämna in ett klagomål till Integritetsskyddsmyndigheten (IMY) på imy.se.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
