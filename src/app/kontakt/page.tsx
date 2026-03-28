import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Kontakta oss | Testahemma.se",
  description: "Kontakta redaktionen på Testahemma.se – frågor, samarbetsförfrågningar eller felaktigheter.",
  alternates: { canonical: "https://www.testahemma.se/kontakt/" },
};

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-10">
        <BreadcrumbNav items={[{ name: "Hem", href: "/" }, { name: "Kontakt", href: "/kontakt/" }]} />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Kontakta oss</h1>
        <p className="text-gray-600 mb-8">Har du frågor om våra recensioner, hittat felaktig information eller vill diskutera ett samarbete? Vi hör gärna av dig.</p>

        <div className="space-y-4 mb-10">
          {[
            { title: "Redaktionella frågor", desc: "Felaktigheter, uppdateringsönskemål eller kompletteringar av recensioner.", email: "redaktion@testahemma.se" },
            { title: "Samarbetsförfrågningar", desc: "Affiliatesamarbeten, produkttester eller PR-förfrågningar.", email: "samarbete@testahemma.se" },
            { title: "GDPR och integritet", desc: "Frågor om personuppgiftsbehandling eller begäran om radering.", email: "gdpr@testahemma.se" },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{item.desc}</p>
              <a href={`mailto:${item.email}`} className="text-teal-600 font-medium text-sm hover:underline">{item.email}</a>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-amber-800">
          <strong>OBS:</strong> Vi kan inte ge individuell medicinsk rådgivning. Vid frågor om din hälsa eller tolkning av provsvar – kontakta din vårdcentral eller den aktör du beställt testet från.
        </div>
      </main>
      <Footer />
    </>
  );
}
