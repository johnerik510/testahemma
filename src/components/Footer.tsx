import Link from "next/link";

const categories = [
  { slug: "blodtester", name: "Blodtester" },
  { slug: "hormontester", name: "Hormontester" },
  { slug: "sti-tester", name: "STI-tester" },
  { slug: "vitamintester", name: "Vitamintester" },
  { slug: "allergitester", name: "Allergi & Intolerans" },
  { slug: "tarmhalsa", name: "Tarmhälsa" },
  { slug: "cancermarkorer", name: "Cancermarkörer" },
  { slug: "kolesteroltester", name: "Kolesteroltester" },
];

const guides = [
  { slug: "d-vitaminbrist-symtom", name: "D-vitaminbrist symtom" },
  { slug: "vad-ar-hemtest", name: "Vad är hemtest?" },
  { slug: "hur-fungerar-hemtest", name: "Hur fungerar hemtest?" },
  { slug: "sti-testa-hemma", name: "STI – testa hemma" },
  { slug: "hormoner-och-halsa", name: "Hormoner och hälsa" },
  { slug: "tolka-blodvarden", name: "Tolka dina blodvärden" },
  { slug: "kolesterol-varden", name: "Kolesterolvärden guide" },
  { slug: "tarmflora-halsa", name: "Tarmflora och hälsa" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              <span className="text-white text-xl font-bold">
                TestaHemma<span className="text-teal-400">.se</span>
              </span>
            </Link>
            <p className="text-sm leading-6">
              Sveriges oberoende guide till hemtestningskit. Vi hjälper dig hitta rätt test för din hälsa.
            </p>
            <p className="text-xs mt-4 text-gray-500">
              Innehållet är informativt och ersätter inte medicinsk rådgivning. Kontakta alltid läkare vid hälsoproblem.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Testkategorier</h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/${cat.slug}/`} className="text-sm hover:text-white transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Guider</h3>
            <ul className="space-y-2">
              {guides.map((guide) => (
                <li key={guide.slug}>
                  <Link href={`/guider/${guide.slug}/`} className="text-sm hover:text-white transition-colors">
                    {guide.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Information</h3>
            <ul className="space-y-2">
              <li><Link href="/om-oss/" className="text-sm hover:text-white transition-colors">Om oss</Link></li>
              <li><Link href="/hur-vi-testar/" className="text-sm hover:text-white transition-colors">Hur vi testar</Link></li>
              <li><Link href="/annonsering/" className="text-sm hover:text-white transition-colors">Annonsering & affiliate</Link></li>
              <li><Link href="/integritetspolicy/" className="text-sm hover:text-white transition-colors">Integritetspolicy</Link></li>
              <li><Link href="/kontakt/" className="text-sm hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} TestaHemma.se — Oberoende hemtestguide</p>
          <p>
            Sajten innehåller affiliatelänkar. Vi kan erhålla provision vid köp via våra länkar – utan extra kostnad för dig.{" "}
            <Link href="/annonsering/" className="underline hover:text-gray-400">Läs mer</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
