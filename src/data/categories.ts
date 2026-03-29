import type { Category } from "@/types/product";

export const categories: Category[] = [
  {
    slug: "blodtester",
    name: "Blodtester",
    description: "Testa dina blodvärden hemma – komplett panel på 2–4 dagar",
    longDescription:
      "Hemblodtester låter dig ta ett enkelt fingerblodprov och skicka det till ett ackrediterat laboratorium. Du får svar på dina blodvärden – hemoglobin, vita blodkroppar, järn, blodfetter och mycket mer – utan att behöva boka tid hos läkare.",
    icon: "",
    color: "red",
    keywords: ["blodtest hemma", "hemtest blod", "blodvärden", "blodpanel hemma"],
  },
  {
    slug: "hormontester",
    name: "Hormontester",
    description: "Mät dina hormonnivåer hemma – testosteron, östrogen, TSH och mer",
    longDescription:
      "Hormonella obalanser kan orsaka trötthet, viktuppgång, humörsvängningar och nedsatt fertilitet. Med ett hemhormonstest kan du enkelt mäta dina hormonnivåer och få svar inom några dagar.",
    icon: "",
    color: "purple",
    keywords: ["hormontester hemma", "testosteron test", "östrogen test", "TSH hemma", "sköldkörteltest"],
  },
  {
    slug: "sti-tester",
    name: "STI-tester",
    description: "Diskreta könssjukdomstester hemma – svar inom 1–3 dagar",
    longDescription:
      "Testa dig för könssjukdomar diskret hemma. Moderna STI-hemtester täcker klamydia, gonorré, syfilis, HIV, herpes och mer. Prover tas med svabb eller urin och svar levereras digitalt.",
    icon: "",
    color: "teal",
    keywords: ["STI test hemma", "könssjukdomstest hemma", "klamydiatest", "HIV test hemma", "gonorrétest"],
  },
  {
    slug: "vitamintester",
    name: "Vitamintester",
    description: "Kontrollera dina vitaminnivåer hemma – D-vitamin, B12, folat och mer",
    longDescription:
      "Vitaminbrist är vanligare än man tror – särskilt D-vitamin och B12 i Sverige. Med ett hemtest kan du enkelt kontrollera dina nivåer och se om du behöver kosttillskott.",
    icon: "",
    color: "yellow",
    keywords: ["D-vitamintest hemma", "B12 test", "vitaminbrist test", "folat test", "vitamin hemtest"],
  },
  {
    slug: "allergitester",
    name: "Allergi & Intoleranstester",
    description: "Ta reda på vad du reagerar på – mat, pollen och djur",
    longDescription:
      "Allergi- och intolerenstester hemma kan avslöja reaktioner mot hundratals ämnen – från gluten och laktos till pollen, djurepitel och nötter.",
    icon: "",
    color: "green",
    keywords: ["allergitester hemma", "matintolerans test", "glutenintolerans test", "pollenallergi test"],
  },
  {
    slug: "tarmhalsa",
    name: "Tarmhälsa & Mikrobiom",
    description: "Analysera din tarmflora och förbättra din maghälsa",
    longDescription:
      "Tarmfloran påverkar allt från immunförsvar till psykisk hälsa. Mikrobiomtester kartlägger dina tarmbakterier och ger personliga råd om kost och livsstil.",
    icon: "",
    color: "orange",
    keywords: ["tarmflora test", "mikrobiomtest", "tarmhälsa test", "avföringstest"],
  },
  {
    slug: "cancermarkorer",
    name: "Cancermarkörer",
    description: "Proaktiv hälsokontroll med cancermarkörer hemma",
    longDescription:
      "Hemtester för cancermarkörer mäter specifika proteiner och ämnen i blodet som kan indikera ökad risk. PSA för prostata, CA-125, CEA och fler. Alltid att följa upp med läkare vid förhöjda värden.",
    icon: "",
    color: "blue",
    keywords: ["PSA test hemma", "cancertest hemma", "cancermarkör test", "prostatatest"],
  },
  {
    slug: "kolesteroltester",
    name: "Kolesteroltester",
    description: "Mät ditt kolesterol hemma – LDL, HDL och triglycerider",
    longDescription:
      "Högt kolesterol ger inga symtom men ökar risken för hjärt-kärlsjukdom. Med ett enkelt hemtest kan du kontrollera ditt LDL, HDL och totalt kolesterol.",
    icon: "",
    color: "pink",
    keywords: ["kolesteroltest hemma", "LDL test", "HDL test", "hjärtmarkör test"],
  },
  {
    slug: "fertilitetstester",
    name: "Fertilitetstester",
    description: "Testa din fertilitet hemma – AMH, FSH, spermier och hormonpaneler",
    longDescription:
      "Fertilitetstester hemma mäter hormoner kopplade till fortplantning – AMH (äggstocksreserv), FSH, LH, östradiol och progesteron för kvinnor samt testosteron och spermieanalys för män. Ge dig ett första svar utan att boka tid på klinik.",
    icon: "",
    color: "rose",
    keywords: ["fertilitetstest hemma", "AMH test", "äggstocksreserv test", "spermieanalys hemma", "hormontest fertilitet"],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
