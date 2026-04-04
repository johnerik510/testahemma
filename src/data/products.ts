import type { TestProduct } from "@/types/product";

export const products: TestProduct[] = [
  {
    slug: "werlabs",
    name: "Werlabs",
    shortDescription: "Hemblodtest: järn, B12, D-vitamin, TSH, kolesterol, HbA1c m.fl. – SWEDAC-lab, svar 2–4 dagar",
    description:
      "Werlabs är Sveriges mest populära tjänst för hemblodprov. Du beställer online, tar ett enkelt fingerblodprov hemma med det medföljande lansettsettet, och skickar provet till deras SWEDAC-ackrediterade laboratorium. Digitala svar inom 2–4 vardagar.",
    priceFrom: "495 kr",
    priceNote: "Från 495 kr för baspaket – fullständig hälsopanel 1 695 kr",
    affiliateUrl: "https://werlabs.se",
    network: "direct",
    awinProgramId: "",
    ctaText: "Beställ hos Werlabs",
    categories: ["blodtester", "hormontester", "vitamintester", "kolesteroltester", "cancermarkorer", "fertilitetstester"],
    rating: 9.2,
    ratings: { accuracy: 9.5, ease: 9.0, speed: 9.0, value: 8.5, support: 9.0 },
    testsIncluded: [
      "Hemoglobin", "Hematokrit", "Vita blodkroppar", "Trombocyter",
      "Ferritin", "Järn", "Transferrinmättnad", "CRP",
      "Kolesterol (LDL/HDL/total)", "Triglycerider",
      "Glukos", "HbA1c", "Kreatinin", "eGFR",
      "TSH", "Vitamin D (25-OH)", "B12", "Folat",
      "PSA (valbar)", "Testosteron (valbar)", "Östradiol (valbar)",
    ],
    sampleType: "Fingerstick (kapillärblod)",
    turnaround: "2–4 vardagar",
    labCertification: "SWEDAC-ackrediterat laboratorium",
    prescription: false,
    features: [
      "SWEDAC-ackrediterat lab – sjukhuskvalitet",
      "Över 100 olika blodtester att välja bland",
      "Digital leverans via app och webb",
      "Gratis läkarkonsultation vid avvikande svar",
      "Provtagning hemma – inget sjukhusbesök",
      "Resultat jämförs med referensvärden och trend",
    ],
    pros: [
      "Störst utbud av hemblodtester i Sverige",
      "SWEDAC-ackrediterat laboratorium – sjukhuskvalitet",
      "Tydlig app med historik och trendkurvor",
      "Gratis läkarkonsultation ingår vid avvikande svar",
      "Snabb leverans – svar inom 2–4 dagar",
    ],
    cons: [
      "Något dyrare än konkurrenterna för baspaket",
      "Kräver att du tar eget blodprov (fingerblod)",
    ],
    review: {
      intro:
        "Werlabs grundades 2013 och har vuxit till att bli Sveriges mest använda hemblodtest-tjänst. Med ett SWEDAC-ackrediterat laboratorium erbjuder de sjukhuskvalitet direkt hem till konsumenten – utan remiss och utan kö.",
      accuracy:
        "Werlabs använder ett SWEDAC-ackrediterat laboratorium, vilket innebär att analyserna uppfyller samma krav som sjukhuslaboratorier i Sverige. I vår genomgång av referensvärden och analysteknik fann vi inga avvikelser från klinisk standard.",
      process:
        "Provtagningsprocessen är enkel: Beställ online, ta fingerblodprov med det medföljande lansettsettet, lägg provet i den bifogade röret och posta i det förifyllda kuvertet. Hela processen tar 10–15 minuter.",
      results:
        "Svaren levereras via Werlabs app och webbplats. Varje värde presenteras med referensintervall, trendgraf (om du testat flera gånger) och en förklaring i klartext. Avvikande värden markeras tydligt i rött eller gult.",
      price:
        "Baspaket från 495 kr är konkurrenskraftigt för det testet inkluderar. Hälsopanelen (695 kr) och fullständig panel (1 695 kr) ger gott värde givet laboratoriekvaliteten och inkluderad läkarkonsultation.",
      verdict:
        "Werlabs är vår topprekommendation för hemblodtester i Sverige. Kombinationen av SWEDAC-ackreditering, brett testutbud och gratis läkarkonsultation gör dem till det safea valet – särskilt för dig som vill ha klinisk kvalitet hemma.",
    },
    faqs: [
      {
        question: "Hur tar man blodprovet hos Werlabs?",
        answer:
          "Du får ett komplett lansettset med din beställning. Sticka i fingertoppen, samla 5–8 droppar i det medföljande mikroröret, förslut och posta i det förifyllda svarskuvertet. Inget specialkunnande behövs.",
      },
      {
        question: "Hur snabbt får man svar från Werlabs?",
        answer:
          "Normalt 2–4 vardagar efter att laboratoriet tagit emot provet. Expresanalys är tillgänglig för vissa paneler.",
      },
      {
        question: "Är Werlabs GDPR-godkänt?",
        answer:
          "Ja. Werlabs är ett svenskt bolag som hanterar all data enligt GDPR. Dina hälsodata lagras krypterat och delas aldrig med tredje part utan ditt samtycke.",
      },
      {
        question: "Kan Werlabs ersätta ett läkarbesök?",
        answer:
          "Nej – Werlabs är ett komplement till sjukvården, inte en ersättning. Vid avvikande värden bör du alltid kontakta läkare. Werlabs erbjuder gratis läkarkonsultation för att tolka dina svar.",
      },
    ],
    logoUrl: "/logos/werlabs.png",
    productImageUrl: "/logos/werlabs.png",
    datePublished: "2025-01-15",
    dateModified: "2026-03-01",
    author: "Anna Lindström",
  },
  {
    slug: "cerascreen",
    name: "Cerascreen",
    shortDescription: "50+ hemtester: D-vitamin, B12, allergi (295 ämnen), kortisol, tarmflora – från 299 kr",
    description:
      "Cerascreen är Europas mest sålda hemtest-varumärke med över 2 miljoner sålda tester. De erbjuder ett brett sortiment: vitamintester (D-vitamin, B12, omega-3), allergitester, hormontester och tarmhälsatester. Prover tas med fingerblod eller salivprov.",
    priceFrom: "299 kr",
    priceNote: "Från 299 kr – priser varierar per test",
    affiliateUrl: "https://www.cerascreen.se",
    network: "adtraction",
    ctaText: "Se alla tester hos Cerascreen",
    categories: ["vitamintester", "allergitester", "hormontester", "tarmhalsa", "blodtester", "fertilitetstester"],
    rating: 8.8,
    ratings: { accuracy: 8.5, ease: 9.2, speed: 8.5, value: 9.0, support: 8.5 },
    testsIncluded: [
      "Vitamin D (25-OH-D3)", "Vitamin B12", "Folat",
      "Omega-3 Index", "Järn + Ferritin",
      "Kortisol (stresshormon)", "Testosteron", "Östrogen",
      "TSH (sköldkörtel)", "DHEA",
      "Allergi (IgE) – mat", "Allergi – inandning",
      "Glutenintolerans (IgA/IgG)", "Laktosin­tolerans",
      "Tarmflora (16S rRNA-sekvensering)",
    ],
    sampleType: "Fingerblod eller salivprov (beroende på test)",
    turnaround: "3–5 vardagar",
    labCertification: "ISO 15189 certifierat laboratorium",
    prescription: false,
    features: [
      "Över 50 olika hemtester att välja bland",
      "ISO 15189 certifierat laboratorium",
      "Detaljerade resultat med personliga rekommendationer",
      "Diskrekt paket – inga känsliga uppgifter syns utifrån",
      "Gratis frakt till och från laboratoriet",
      "Tillgänglig i hela Sverige",
    ],
    pros: [
      "Störst urval av vitamintester och allergitester",
      "Mycket prisvärd – från 299 kr",
      "Excellent personligt resultatrapport med kostråd",
      "Enkla provtagningskit – inget blodprov behövs för många tester",
      "Populärt i hela Europa med över 2M sålda tester",
    ],
    cons: [
      "Kundtjänst på engelska/tyska (ej alltid svenska)",
      "Sjukhuskvalitet garanteras ej (ISO 15189 ej SWEDAC)",
    ],
    review: {
      intro:
        "Cerascreen grundades i Tyskland 2015 och har blivit Europas mest populära hemtest-varumärke. Med fokus på vitaminer, allergier och hormoner erbjuder de ett imponerande sortiment till konkurrenskraftiga priser.",
      accuracy:
        "Cerascreen använder ett ISO 15189-certifierat laboratorium. Testerna är validerade och resultaten stämmer väl överens med kliniska prover i jämförande studier. Notera att SWEDAC (svensk ackreditering) ej gäller för tyska laboratorier.",
      process:
        "Provtagning varierar per test: fingerblod för vitaminer och hormoner, salivprov för kortisol och hormonell profil, avföringsprov för tarmflora. Varje kit innehåller tydliga steg-för-steg-instruktioner.",
      results:
        "Resultaten levereras via Cerascreen-appen med personliga rekommendationer baserade på dina värden. Rapporten inkluderar förklaringar, referensvärden och konkreta råd om kost och kosttillskott.",
      price:
        "Med priser från 299 kr är Cerascreen det prisvänligaste alternativet för vitamintester. Allergipaneler kostar 699–899 kr vilket fortfarande är rimligt för det inkluderade testurvalet.",
      verdict:
        "Cerascreen är vårt val nummer ett för vitamintester och allergitester. Priset är konkurrenskraftigt, sortimentet är brett och rapporterna är mycket användbara för att göra faktiska livsstilsförändringar.",
    },
    faqs: [
      {
        question: "Skickar Cerascreen till Sverige?",
        answer:
          "Ja, Cerascreen levererar till hela Sverige via deras svenska webbshop cerascreen.se med fri frakt.",
      },
      {
        question: "Hur lång tid tar det att få svar från Cerascreen?",
        answer:
          "Normalt 3–5 vardagar efter att laboratoriet tagit emot provet. Posttiden från Sverige till laboratoriet tillkommer.",
      },
      {
        question: "Är Cerascreen bra för D-vitamintest?",
        answer:
          "Ja, Cerascreen är ett av de bästa valen specifikt för D-vitamintest. Deras D-vitamintest (299 kr) är validerat och ger kliniskt relevanta resultat.",
      },
      {
        question: "Kan jag testa allergi hemma med Cerascreen?",
        answer:
          "Ja. Cerascreen erbjuder allergitest för upp till 295 allergiframkallande ämnen – mat, pollen, djur och mögel – med ett enkelt fingerblodprov.",
      },
    ],
    logoUrl: "/logos/cerascreen.png",
    productImageUrl: "/logos/cerascreen.png",
    datePublished: "2025-02-01",
    dateModified: "2026-03-01",
    author: "Anna Lindström",
  },
  {
    slug: "testmottagningen",
    name: "Testmottagningen",
    shortDescription: "STI-test hemma: klamydia, gonorré, HIV, syfilis, herpes, HPV – anonymt paket, svar 1–3 dagar",
    description:
      "Testmottagningen är Sveriges specialisttjänst för diskret hemtestning av könssjukdomar. De erbjuder tester för klamydia, gonorré, syfilis, HIV, herpes och HPV – levererade i anonymt paket. Svar digitalt inom 1–3 dagar.",
    priceFrom: "299 kr",
    priceNote: "Från 299 kr för enskilt test – komplett STI-panel 699 kr",
    affiliateUrl: "https://www.testmottagningen.se",
    network: "direct",
    ctaText: "Beställ diskret hos Testmottagningen",
    categories: ["sti-tester", "blodtester"],
    rating: 9.0,
    ratings: { accuracy: 9.0, ease: 9.5, speed: 9.5, value: 9.0, support: 8.5 },
    testsIncluded: [
      "Klamydia (Chlamydia trachomatis)",
      "Gonorré (Neisseria gonorrhoeae)",
      "Syfilis (Treponema pallidum IgM/IgG)",
      "HIV 1+2 (antigen/antikropp 4:e generationen)",
      "Herpes simplex typ 1 och 2 (IgG)",
      "HPV (högrisk­typer)",
      "Hepatit B (HBsAg)",
      "Hepatit C (Anti-HCV)",
      "Mykoplasma genitalium",
      "Trichomonas vaginalis",
    ],
    sampleType: "Urinprov, svabb (penis/vagina/ändtarm/svalg) beroende på test",
    turnaround: "1–3 vardagar",
    labCertification: "CE-märkt analyssystem",
    prescription: false,
    features: [
      "Anonymt paket – inget känsligt syns utifrån",
      "Digital svarsleverans via säker portal",
      "Komplett STI-panel täcker 10 könssjukdomar",
      "Inga personuppgifter kopplade till testet om du väljer anonynt",
      "Teststöd via chatt om du har frågor",
      "Snabbast i kategorin – svar inom 24–72 timmar",
    ],
    pros: [
      "Snabbast STI-svar i Sverige – 1–3 dagar",
      "Maximalt diskret: anonymt paket och säker digital portal",
      "Komplett panel täcker alla vanliga STI",
      "Enkelt provtagningskit – urin eller svabb",
      "Bra pris för komplett panel",
    ],
    cons: [
      "Specialiserat på STI – begränsat utbud av andra tester",
      "Anonymt läge ger ingen möjlighet till uppföljning via systemet",
    ],
    review: {
      intro:
        "Testmottagningen är Sveriges mest använda tjänst för diskret STI-testning hemma. Med fokus på integritet och snabbhet är de ett naturligt val för alla som vill testa sig för könssjukdomar utan att besöka en klinik.",
      accuracy:
        "Testmottagningen använder PCR-teknik (polymeraskedjere­aktion) och 4:e generationens HIV-tester, vilket ger hög sensitivitet och specificitet. Metodiken är jämförbar med klinisk standardtestning.",
      process:
        "Du beställer ett specifikt test eller en panel. Hemkitet innehåller urinkopp och/eller svabbar. Följ instruktionerna, posta i det anonyma kuvertet. Enklare kan det inte bli.",
      results:
        "Svar via en säker webbportal med personlig kod. Negativa och positiva svar presenteras tydligt. Vid positivt svar finns guidade råd om nästa steg och kontakt med sjukvården.",
      price:
        "Priser från 299 kr för ett enskilt test är rimliga. Komplett STI-panel för 699 kr ger mycket valuta för pengarna jämfört med klinikbesök som kan kosta 1 000–2 000 kr.",
      verdict:
        "Testmottagningen är vår topprekommendation för STI-testning hemma. Kombinationen av snabbhet, diskretion och bred testtäckning gör dem till det bästa valet på marknaden.",
    },
    faqs: [
      {
        question: "Är STI-testet verkligen anonymt?",
        answer:
          "Ja. Du kan välja att beställa utan att ange personnummer. Paketet märks inte med känslig information. Svaren levereras via en säker portal med engångskod.",
      },
      {
        question: "Hur lång tid tar ett STI-test?",
        answer:
          "Testmottagningen levererar svar inom 1–3 vardagar från att laboratoriet tagit emot provet. Det är de snabbaste hemtesterna för STI på marknaden.",
      },
      {
        question: "Vad gör jag om resultatet är positivt?",
        answer:
          "Kontakta din vårdcentral eller en STI-mottagning. De flesta könssjukdomar är enkla att behandla med antibiotika. Vänta inte – tidig behandling förhindrar smittspridning.",
      },
      {
        question: "Täcker testet HIV?",
        answer:
          "Ja, komplett STI-panel inkluderar HIV 1+2 (antigen/antikropp, 4:e generationens test) som kan upptäcka HIV så tidigt som 18–20 dagar efter exponering.",
      },
    ],
    logoUrl: "/logos/testmottagningen.svg",
    productImageUrl: "/logos/testmottagningen.svg",
    datePublished: "2025-01-20",
    dateModified: "2026-03-01",
    author: "Erik Svensson",
  },
  {
    slug: "diagnostikdirekt",
    name: "Diagnostikdirekt",
    shortDescription: "Blodprov utan remiss: PSA, cancermarkörer, hormoner, kolesterol – venöst prov eller hemkit",
    description:
      "Diagnostikdirekt erbjuder ett brett utbud av kliniska blodtester direkt till konsumenten utan remiss. Med provtagningsstationer runt om i Sverige kan du antingen ta provet hemma eller besöka en station för venöst blodprov – som ger ännu mer exakta resultat.",
    priceFrom: "395 kr",
    priceNote: "Från 395 kr – hälsopanel från 895 kr",
    affiliateUrl: "https://diagnostikdirekt.se",
    network: "direct",
    ctaText: "Beställ hos Diagnostikdirekt",
    categories: ["blodtester", "cancermarkorer", "kolesteroltester", "hormontester"],
    rating: 8.7,
    ratings: { accuracy: 9.0, ease: 8.5, speed: 8.5, value: 8.5, support: 8.0 },
    testsIncluded: [
      "Stor blodstatus (B-status)", "CRP", "SR",
      "Leverpanel (ASAT, ALAT, ALP, GT)", "Njurpanel",
      "Kolesterol (LDL/HDL/total/triglycerider)",
      "Glukos", "HbA1c", "Insulin",
      "TSH", "T3", "T4 fri",
      "PSA (total + fri)", "CA 125", "CEA", "AFP",
      "Testosteron", "Östradiol", "Prolaktin", "LH", "FSH",
      "Vitamin D", "B12", "Folat", "Järn", "Ferritin",
    ],
    sampleType: "Venöst blodprov (provtagningsstation) eller fingerblod (hemkit)",
    turnaround: "2–5 vardagar",
    labCertification: "SWEDAC-ackrediterat partnerlab",
    prescription: false,
    features: [
      "Välj mellan hemkit eller provtagningsstation",
      "Venöst blodprov ger extra hög precision",
      "Cancermarkörer inkluderade i paneler",
      "Inget remiss behövs",
      "Svar direkt i appen med referensvärden",
    ],
    pros: [
      "Unika venösa blodprovsmöjligheter – bäst precision",
      "Bred paneltäckning inklusive cancermarkörer",
      "Flexibelt: hemkit eller provtagningstation",
      "Konkurrenskraftiga priser på helspaneler",
    ],
    cons: [
      "Venöst prov kräver besök på provtagningstation",
      "Inte lika brett sortiment som Werlabs totalt",
    ],
    review: {
      intro:
        "Diagnostikdirekt erbjuder en unik kombination av hemtestning och stationärt provtagning. För dig som vill ha maximal precision erbjuder de venöst blodprov vid provtagningsstationer runt om i Sverige.",
      accuracy:
        "Venöst blodprov är den mest precisa provtagningsmetoden och används rutinmässigt i sjukvården. Diagnostikdirekt använder SWEDAC-ackrediterade partnerlab, vilket garanterar sjukvårdskvalitet på analysen.",
      process:
        "Du kan antingen beställa ett hemkit (fingerblod) eller boka tid på närmaste provtagningstation för venöst prov. Venöst prov innebär att en sjuksköterska tar blodet i armen – den vanligaste kliniska metoden.",
      results:
        "Resultat levereras via appen med tydliga referensvärden och kommentarer. Cancermarkörer och mer avancerade paneler inkluderar läkarstöd för tolkning.",
      price:
        "Priser är konkurrenskraftiga för venösa prover. Hälsopanel från 895 kr med venöst prov ger exceptionellt värde jämfört med privat läkarbesök.",
      verdict:
        "Diagnostikdirekt är idealiskt för dig som vill ha klinisk precision och inte nöjer dig med fingerblod, eller som behöver cancermarkörer och avancerade blodpaneler.",
    },
    faqs: [
      {
        question: "Vad är skillnaden mellan venöst blodprov och fingerblod?",
        answer:
          "Venöst prov (från armen) ger mer blod och kan analysera fler parametrar med högre precision. Fingerblod är enklare och kan göras hemma men kan vara något mer variabelt i resultat.",
      },
      {
        question: "Finns det provtagningsstationer nära mig?",
        answer:
          "Diagnostikdirekt har provtagningsstationer i Stockholm, Göteborg, Malmö och flera andra städer. Se deras webbplats för aktuell lista.",
      },
      {
        question: "Kan jag testa PSA hemma med Diagnostikdirekt?",
        answer:
          "Ja. PSA (prostataspecifikt antigen) kan inkluderas i hälsopanelen. Du kan välja hemkit eller venöst prov vid station.",
      },
    ],
    logoUrl: "/logos/diagnostikdirekt.svg",
    productImageUrl: "/logos/diagnostikdirekt.svg",
    datePublished: "2025-02-10",
    dateModified: "2026-03-01",
    author: "Anna Lindström",
  },
  {
    slug: "biovis",
    name: "Biovis",
    shortDescription: "Tarmfloraanalys hemma: DNA-sekvensering av 500+ bakteriestammar, personliga kostråd – fr. 1 495 kr",
    description:
      "Biovis är ett ledande svenskt laboratorium specialiserat på tarmhälsa och mikrobiomanalys. Deras tarmfloratest analyserar sammansättningen av dina tarmbakterier med avancerad DNA-sekvensering och ger personliga rekommendationer för att förbättra din maghälsa.",
    priceFrom: "1 495 kr",
    priceNote: "Tarmfloraanalys från 1 495 kr – djupanalys 2 495 kr",
    affiliateUrl: "https://www.biovis.se",
    network: "direct",
    ctaText: "Analysera din tarmflora hos Biovis",
    categories: ["tarmhalsa"],
    rating: 9.1,
    ratings: { accuracy: 9.5, ease: 8.0, speed: 8.0, value: 8.5, support: 9.0 },
    testsIncluded: [
      "16S rRNA-sekvensering av tarmbakterier",
      "Bakteriediversitet (alfa/beta-diversitet)",
      "Identifiering av 500+ bakteriestammar",
      "Dysbiosis-index",
      "Kortkedjeade fettsyror (SCFA-profil)",
      "Tarmpermeabilitet (Leaky gut-markörer)",
      "Skyddande vs inflammatoriska bakterier",
      "Personliga kostråd baserade på din flora",
    ],
    sampleType: "Avföringsprov",
    turnaround: "7–14 vardagar",
    labCertification: "ISO-certifierat laboratorium, Linköping",
    prescription: false,
    features: [
      "Avancerad DNA-sekvensering av 500+ bakteriestammar",
      "Personliga kostråd baserade på din unika flora",
      "Jämförelse med referensgrupper",
      "Uppföljningstest tillgängligt för att mäta förbättring",
      "Rapport granskas av mikrobiomspecialist",
      "Svenskt laboratorium i Linköping",
    ],
    pros: [
      "Mest avancerade tarmfloraanalysen tillgänglig i Sverige",
      "Detaljerade personliga kostråd och probiotikarekommendationer",
      "Analyserar 500+ bakteriestammar med DNA-teknik",
      "Uppföljningstest möjligt för att se förbättringar",
      "Rapport granskad av expert",
    ],
    cons: [
      "Dyrare än övriga hemtester",
      "Längre svarstid (7–14 dagar)",
      "Avföringsprov kan uppfattas som obehagligt",
    ],
    review: {
      intro:
        "Biovis är ett Linköping-baserat laboratorium som specialiserat sig på tarmhälsa sedan tidigt 2000-tal. Deras konsumentprodukter för mikrobiomanalys är de mest avancerade som finns tillgängliga utan remiss i Sverige.",
      accuracy:
        "Biovis använder 16S rRNA-sekvensering, samma teknik som används i akademisk forskning. De identifierar 500+ bakteriestammar med hög precision. ISO-certifieringen garanterar konsistenta analysresultat.",
      process:
        "Avföringsprov tas hemma med det medföljande provtagningsröret. Provet förvaras i kyl och postas i kylpack. Processen är enkel men kräver lite planering.",
      results:
        "Rapporten är den mest detaljerade vi sett på marknaden. Du får en fullständig kartläggning av din tarmflora, diversitetsindex, jämförelse med frisk referenspopulation och konkreta kostråd.",
      price:
        "Med start på 1 495 kr är Biovis det dyraste testet på vår lista, men för vad du får – avancerad DNA-sekvensering och personliga råd – är det väl värt priset.",
      verdict:
        "Biovis är det klara valet för dig som vill förstå din tarmhälsa på djupet. Analyskvaliteten och de personliga rekommendationerna är i en klass för sig.",
    },
    faqs: [
      {
        question: "Hur tar man ett tarmfloratest hemma?",
        answer:
          "Du tar ett litet avföringsprov med den medföljande provtagningspinnen, lägger det i det speciella röret med bevaringsmedel och postar det kylt i det bifogade kylpaketet. Hela processen tar 5 minuter.",
      },
      {
        question: "Vad kan man göra med resultaten från ett tarmfloratest?",
        answer:
          "Resultaten visar om din tarmflora är i balans och vilka bakterier du har för få eller för många av. Baserat på detta kan du anpassa kosten, välja rätt probiotika och göra livsstilsförändringar för bättre maghälsa.",
      },
      {
        question: "Hur länge tar det att få svar från Biovis?",
        answer:
          "Normalt 7–14 vardagar från att laboratoriet tagit emot provet. DNA-sekvensering är en avancerad process som tar längre tid än blodanalyser.",
      },
      {
        question: "Kan ett tarmfloratest diagnostisera IBS eller IBD?",
        answer:
          "Nej. Tarmfloratester kan visa obalanser som är kopplade till symtom som magont och diarré, men de är inte diagnostiska för IBS eller IBD. Vid misstanke om tarmsjukdom ska du alltid kontakta läkare.",
      },
    ],
    logoUrl: "/logos/biovis.svg",
    productImageUrl: "/logos/biovis.svg",
    datePublished: "2025-03-01",
    dateModified: "2026-03-01",
    author: "Erik Svensson",
  },
  {
    slug: "verisana",
    name: "Verisana",
    shortDescription: "Hormontest hemma: testosteron, kortisol (dygnskurva), östradiol, STI-panel – fr. 349 kr",
    description:
      "Verisana är ett tyskt laboratorieföretag som skickar hemtester till hela Europa inklusive Sverige. De specialiserar sig på hormonella tester, STI-tester och mikronäringsamneanalys. Analyserna utförs i ett tyskt ISO-certifierat laboratorium.",
    priceFrom: "349 kr",
    priceNote: "Från 349 kr – priser varierar per testpanel",
    affiliateUrl: "https://verisana.se",
    network: "direct",
    ctaText: "Beställ hos Verisana",
    categories: ["hormontester", "sti-tester", "vitamintester", "blodtester", "fertilitetstester"],
    rating: 8.4,
    ratings: { accuracy: 8.5, ease: 8.5, speed: 7.5, value: 8.5, support: 7.5 },
    testsIncluded: [
      "Testosteron fritt + totalt", "Östradiol", "Progesteron",
      "LH", "FSH", "Prolaktin", "DHEA-S", "Kortisol (dygnskurva)",
      "Klamydia + Gonorré (PCR)", "Syfilis", "HIV 1+2",
      "Herpes (IgG)", "HPV",
      "Vitamin D", "B12", "Omega-3 Index", "Zink", "Magnesium",
    ],
    sampleType: "Blod (fingerblod/torr blodfläck) eller salivprov",
    turnaround: "5–8 vardagar (inkl. frakt till tyskt lab)",
    labCertification: "ISO 9001:2015 certifierat laboratorium",
    prescription: false,
    features: [
      "Speclaliserat på hormontester och STI",
      "Dygnskortisol-analys (4 salivprover)",
      "Torr blodfläcksmetod – ingen speciell utrustning",
      "Frakt ingår i priset",
      "Resultat på svenska eller tyska",
    ],
    pros: [
      "Bäst på hormonella profiler och dygnskortisol",
      "Konkurrenskraftiga priser",
      "Bred STI-täckning utan klinikalternativ",
      "Torr blodfläck – enklare att hantera än flytande blod",
    ],
    cons: [
      "Längre leveranstid pga tyskt laboratorium",
      "Kundtjänst primärt på tyska/engelska",
      "ISO 9001 ej lika specifikt som ISO 15189 för medicinsk analys",
    ],
    review: {
      intro:
        "Verisana grundades i Hamburg och levererar hemtester till hela Europa. De har byggt ett starkt rykte för hormonella analyser, particularly dygnskortisol-mätningar som kräver 4 salivprover under en dag.",
      accuracy:
        "Verisana använder ett ISO 9001:2015-certifierat laboratorium med validerade metoder. Torr blodfläcksmetoden har dokumenterats som ekvivalent med venöst blodprov för de flesta analyser de erbjuder.",
      process:
        "Provtagning varierar per test. Hormonella tester använder salivprov eller torra blodfläckar. STI-tester använder urin/svabb. Kiten är väldesignade med tydliga instruktioner.",
      results:
        "Resultat levereras via e-post och på webportalen. Rapporten inkluderar referensintervall och kortfattade kommentarer. Något mindre detaljerade råd jämfört med Cerascreen.",
      price:
        "Verisana är priskonkurrenskraftigt med tester från 349 kr. Helhetspaket för hormonell profil (1 000–1 500 kr) ger gott värde för det inkluderade.",
      verdict:
        "Verisana är ett bra val för hormonella tester, särskilt om du vill ha dygnskortisol-analys eller en bred STI-panel till ett bra pris. Rekommenderas som komplement till Werlabs för mer specialiserade behov.",
    },
    faqs: [
      {
        question: "Hur fungerar Verisanas dygnskortisol-test?",
        answer:
          "Du tar 4 salivprover under en dag: på morgonen, mitt på dagen, på eftermiddagen och på kvällen. Detta ger en kurva över hur ditt kortisol varierar under dygnet, vilket är viktig information för stressrelaterade hälsoproblem.",
      },
      {
        question: "Är Verisanas STI-tester pålitliga?",
        answer:
          "Ja. Verisana använder PCR-teknik för klamydia och gonorré, och 4:e generationens serologiska tester för HIV. Metodiken är kliniskt validerad.",
      },
      {
        question: "Hur lång tid tar leveransen till Sverige?",
        answer:
          "Kitet levereras till dig inom 3–5 dagar. Provet skickas till det tyska laboratoriet (2–3 dagar frakt). Analystid är 3–5 dagar. Total tid från beställning till svar: ca 10–14 dagar.",
      },
    ],
    logoUrl: "/logos/verisana.svg",
    productImageUrl: "/logos/verisana.svg",
    datePublished: "2025-02-15",
    dateModified: "2026-03-01",
    author: "Anna Lindström",
  },
  {
    slug: "medisera",
    name: "Medisera",
    shortDescription: "Blodtest hemma: blodstatus, D-vitamin, järn, TSH, kolesterol, HbA1c – ISO 15189-lab, svar 1–3 dagar",
    description:
      "Medisera är en svensk tjänst för hälsokontroller via blodprov. Du beställer online, tar provet hemma eller på ett av deras provtagningsställen och får digitala svar. Medisera erbjuder ett brett sortiment av blodtester, vitamintester och hormontester till konkurrenskraftiga priser.",
    priceFrom: "295 kr",
    priceNote: "Från 295 kr – hälsopaket från 595 kr",
    affiliateUrl: "https://track.adtraction.com/t/t?a=1963727333&as=2057390123&t=2&tk=1",
    network: "adtraction",
    adtractionProgramId: "1963727333",
    ctaText: "Beställ hos Medisera",
    categories: ["blodtester", "vitamintester", "hormontester", "kolesteroltester"],
    rating: 8.6,
    ratings: { accuracy: 8.5, ease: 8.8, speed: 8.5, value: 9.0, support: 8.5 },
    testsIncluded: [
      "Komplett blodstatus (CBC)", "Ferritin", "Järn",
      "CRP (inflammation)", "Glukos", "HbA1c",
      "Kolesterol (LDL/HDL/total)", "Triglycerider",
      "Kreatinin", "eGFR",
      "TSH (sköldkörtel)", "T3/T4",
      "Vitamin D (25-OH)", "Vitamin B12", "Folat",
      "Testosteron", "Östradiol", "DHEA-S",
      "PSA (prostata)",
    ],
    sampleType: "Fingerblod eller venöst blodprov",
    turnaround: "1–3 vardagar",
    labCertification: "ISO 15189 certifierat laboratorium",
    prescription: false,
    features: [
      "Brett sortiment av hemtester",
      "ISO 15189 certifierat laboratorium",
      "Snabba svar – inom 1–3 dagar",
      "Provtagning hemma eller på provtagningsstation",
      "Digitala svar via säker portal",
    ],
    pros: [
      "Konkurrenskraftiga priser – bra valuta för pengarna",
      "Snabb svarstid (1–3 vardagar)",
      "Bred täckning – blod, vitaminer, hormoner och mer",
      "ISO 15189-certifierat laboratorium",
      "Flexibel provtagning – hemma eller på station",
    ],
    cons: [
      "Något mindre känt varumärke än Werlabs",
      "Ingen läkarkonsultation inkluderad i priset",
    ],
    review: {
      intro:
        "Medisera erbjuder hälsokontroller via blodprov med beställning och provsvar online. Tjänsten riktar sig till dig som vill ha en enkel och prisvärd väg till proaktiv hälsokontroll utan sjukhusbesök.",
      accuracy:
        "Medisera anlitar ett ISO 15189-certifierat laboratorium, vilket är den internationella standarden specifikt för medicinska laboratorier. Analyserna håller klinisk standard och referensvärdena är baserade på etablerade medicinsk normer.",
      process:
        "Beställ kitet online, ta fingerblodprov hemma med det medföljande lansettsettet, lägg i svarskuvertet och posta. Du kan också välja att ta provet på ett av Mediseras provtagningsställen för venöst blodprov.",
      results:
        "Svaren presenteras digitalt med referensintervall och tydliga markeringar för värden utanför normalintervallet. Gränssnittet är enkelt och överskådligt.",
      price:
        "Medisera är prisvärd med baspaket från 295 kr och hälsopaket från 595 kr. De erbjuder ofta kampanjpriser vilket gör dem till ett av de mer prisvärda alternativen på marknaden.",
      verdict:
        "Medisera är ett starkt val för dig som vill ha en prisvärd och pålitlig hälsokontroll. Kombinationen av ISO 15189-certifiering, snabb svarstid och låga priser gör dem konkurrenskraftiga – särskilt för vitamintester och grundläggande blodstatus.",
    },
    faqs: [
      {
        question: "Hur tar man blodprovet hos Medisera?",
        answer:
          "Du tar ett enkelt fingerblodprov hemma med det medföljande lansettsettet. Alternativt kan du besöka ett av Mediseras provtagningsställen för ett venöst blodprov. Fingerblodprovet tar ca 10 minuter.",
      },
      {
        question: "Hur snabbt får man svar från Medisera?",
        answer:
          "Normalt 1–3 vardagar efter att laboratoriet tagit emot provet. Det är bland de snabbaste svarstiderna bland svenska hemtestleverantörer.",
      },
      {
        question: "Är Mediseras tester lika tillförlitliga som sjukhustester?",
        answer:
          "Ja. Medisera använder ett ISO 15189-certifierat laboratorium, samma standard som används av sjukhuslaboratorier. Analysmetoderna är kliniskt validerade.",
      },
    ],
    logoUrl: "/logos/medisera.svg",
    productImageUrl: "/logos/medisera.svg",
    datePublished: "2026-01-10",
    dateModified: "2026-03-28",
    author: "Anna Lindström",
  },
  {
    slug: "gettested",
    name: "GetTested",
    shortDescription: "STI-test hemma: klamydia, HIV, gonorré, herpes, HPV – ISO 15189-lab, diskret leverans fr. 489 kr",
    description:
      "GetTested är en svensk tjänst specialiserad på diskreta STI-tester och sexuell hälsa. Du beställer online, tar provet hemma med ett enkelt kit och skickar till deras ISO-certifierade laboratorium. Resultaten levereras digitalt inom 1–5 dagar.",
    priceFrom: "489 kr",
    priceNote: "Från 489 kr – paketpriser med flera tester tillgängliga",
    affiliateUrl: "https://www.gettested.se",
    network: "direct",
    ctaText: "Beställ hos GetTested",
    categories: ["sti-tester", "blodtester", "hormontester"],
    rating: 8.5,
    ratings: { accuracy: 8.8, ease: 9.0, speed: 8.5, value: 8.0, support: 8.5 },
    testsIncluded: [
      "Klamydia (NAAT/PCR)", "Gonorré (NAAT/PCR)",
      "Syfilis (antikroppar)", "HIV 1+2 (antigen/antikropp)",
      "Herpes simplex (IgG)", "HPV (högrisk)",
      "Hepatit B (HBsAg)", "Hepatit C (antikroppar)",
      "Mykoplasma", "Trichomonas",
      "Testosteron", "Östradiol",
      "Vitamin D (25-OH)", "B12",
    ],
    sampleType: "Urinprov, svabbar eller fingerblod (beroende på test)",
    turnaround: "1–5 vardagar",
    labCertification: "ISO 15189 certifierat laboratorium",
    prescription: false,
    features: [
      "Specialiserat på STI och sexuell hälsa",
      "Helt diskret – neutral förpackning",
      "ISO 15189-certifierat laboratorium",
      "Digitala svar utan att behöva kontakta vården",
      "Heltäckande STI-paket tillgängliga",
    ],
    pros: [
      "Bäst på diskreta STI-tester i Sverige",
      "Heltäckande paneler för sexuell hälsa",
      "Enkel provtagning – urin och svabbar",
      "ISO 15189-certifierat laboratorium",
      "Neutral, diskret leverans",
    ],
    cons: [
      "Dyrare per enskilt test jämfört med breda blodtester",
      "Begränsat utbud utanför STI/sexuell hälsa",
    ],
    review: {
      intro:
        "GetTested är en av Sveriges ledande tjänster för diskreta STI-tester hemma. De fokuserar på att göra testning för sexuellt överförbara infektioner enkel, diskret och tillgänglig utan besök på klinik.",
      accuracy:
        "GetTested använder ett ISO 15189-certifierat laboratorium med NAAT/PCR-teknik för bakteriella infektioner som klamydia och gonorré – samma metodik som används på kliniker. Sensitiviteten och specificiteten är kliniskt validerade.",
      process:
        "Provtagningsprocessen är enkel och diskret. Beroende på test tar du urinprov, svabbprov eller fingerblod. Kitet levereras i neutral förpackning och allt material för provtagning och returfrakt ingår.",
      results:
        "Svar levereras digitalt via en säker portal. Negativa svar ges som tydliga statusmarkeringar. Vid positiva svar erbjuder GetTested vägledning om nästa steg och kontakt med sjukvård.",
      price:
        "GetTested är prissat högre än generella blodtester men konkurrenskraftigt inom STI-segmentet. Paketpriserna för kombinationstester ger bra värde för den täckning man får.",
      verdict:
        "GetTested är förstahandsvalet för diskreta STI-tester i Sverige. Kombinationen av ISO 15189-certifiering, PCR-teknik, diskret leverans och enkel provtagning gör dem till det självklara valet för sexuell hälsotestning hemma.",
    },
    faqs: [
      {
        question: "Är GetTesteds STI-tester lika tillförlitliga som kliniktester?",
        answer:
          "Ja. GetTested använder NAAT/PCR-teknik i ett ISO 15189-certifierat laboratorium – exakt samma metodik som används på sexualmottagningar och kliniker. Sensitiviteten är >99% för klamydia och gonorré.",
      },
      {
        question: "Hur diskret är leveransen från GetTested?",
        answer:
          "Helt diskret. Kitet levereras i neutral förpackning utan avsändaradress som avslöjar innehållet. Faktura och digitala kvitton är neutralt formulerade.",
      },
      {
        question: "Vad händer om jag testar positivt?",
        answer:
          "GetTested kontaktar dig med vägledning om nästa steg. Du rekommenderas att kontakta din vårdcentral eller sexualmottagning för behandling. Smittspårning är obligatorisk för vissa STI i Sverige.",
      },
    ],
    logoUrl: "/logos/gettested.svg",
    productImageUrl: "/logos/gettested.png",
    datePublished: "2026-01-15",
    dateModified: "2026-03-28",
    author: "Anna Lindström",
  },
  {
    slug: "holistic",
    name: "Holistic",
    shortDescription: "Naturliga kosttillskott och hälsotester i ett – vetenskapsbaserat",
    description:
      "Holistic är ett välkänt svenskt varumärke inom naturliga kosttillskott som även erbjuder professionella hälsotester. Deras testsortiment täcker vitaminer, mineraler, hormoner och tarmhälsa med ISO-certifierade laboratorieanalyser. Resultat inkluderar personliga rekommendationer kopplade till deras kosttillskott.",
    priceFrom: "549 kr",
    priceNote: "Från 549 kr – hälsopaket från 1 200 kr",
    affiliateUrl: "https://www.holistic.se/halsotester",
    network: "direct",
    ctaText: "Se tester hos Holistic",
    categories: ["vitamintester", "tarmhalsa", "hormontester", "blodtester"],
    rating: 8.3,
    ratings: { accuracy: 8.5, ease: 8.0, speed: 7.5, value: 7.5, support: 8.5 },
    testsIncluded: [
      "Vitamin D (25-OH-D3)", "Vitamin B12", "Folat",
      "Vitamin C", "Vitamin K2",
      "Järn + Ferritin", "Zink", "Magnesium",
      "Omega-3 Index", "Omega-6/Omega-3-kvot",
      "Kortisol (salivprov)", "DHEA-S", "Testosteron",
      "TSH", "fT4",
      "Tarmflora (metagenomik)",
    ],
    sampleType: "Fingerblod, salivprov eller avföringsprov (beroende på test)",
    turnaround: "5–10 vardagar",
    labCertification: "ISO-certifierat laboratorium",
    prescription: false,
    features: [
      "Integrerade kosttillskottsrekommendationer",
      "ISO-certifierat laboratorium",
      "Djupgående tarmfloraanalys via metagenomik",
      "Resultatrapport med personliga hälsorekommendationer",
      "Etablerat varumärke med 30 år i branschen",
    ],
    pros: [
      "Etablerat och pålitligt varumärke",
      "Personliga kosttillskottsrekommendationer baserade på ditt test",
      "Brett urval av tester – vitaminer, mineraler, hormoner, tarm",
      "Detaljerade resultatrapporter",
    ],
    cons: [
      "Dyrare jämfört med konkurrenterna för liknande tester",
      "Längre svarstid (5–10 dagar)",
      "Rekommendationerna kopplas ofta till Holistics egna produkter",
    ],
    review: {
      intro:
        "Holistic är ett av Sveriges mest välkända varumärken inom naturmedicin och kosttillskott. Sedan 1992 har de erbjudit naturliga hälsoprodukter och har nu utvidgat sin verksamhet med professionella laboratorietester.",
      accuracy:
        "Holistic anlitar ett ISO-certifierat laboratorium och analysmetoderna är validerade. Tarmfloraanalysen använder metagenomik, en av de mer avancerade metoderna för mikrobiomanalys.",
      process:
        "Provtagningsprocessen varierar per test. Vitamintest kräver fingerblodprov, hormontest salivprov och tarmfloratest avföringsprov. Instruktionerna är tydliga och kiten är välutrustade.",
      results:
        "Resultatrapporten är detaljerad och inkluderar personliga rekommendationer baserade på dina värden, ofta kopplade till Holistics kosttillskott. Det ger ett integrerat perspektiv för dig som vill följa upp tester med supplementering.",
      price:
        "Holistic är något dyrare än konkurrenter för jämförbara enskilda tester, men paketpriserna ger rimligt värde för den djupgående analysen och de personliga rekommendationerna.",
      verdict:
        "Holistic är ett bra val för dig som redan använder eller är intresserad av kosttillskott och vill ha tester som integrerar med personliga supplementrekommendationer. För rent laboratorievärde erbjuder Werlabs eller Cerascreen mer per krona.",
    },
    faqs: [
      {
        question: "Är Holistics tester lika noggranna som sjukhusprover?",
        answer:
          "Ja, för de parametrar de mäter. Holistic anlitar ett ISO-certifierat laboratorium med validerade metoder. Tänk dock på att referensintervallen kan skilja sig något från sjukvårdens.",
      },
      {
        question: "Kopplas testresultaten till kosttillskott automatiskt?",
        answer:
          "Ja. Holistics resultatrapport inkluderar rekommendationer om kosttillskott baserade på dina uppmätta värden. Du är givetvis fri att följa upp med vilken leverantör du vill.",
      },
      {
        question: "Hur lång tid tar tarmfloraanalysen?",
        answer:
          "Tarmfloraanalysen (metagenomik) tar längre tid än blodtester – normalt 7–10 vardagar. Provtagningen sker med ett avföringsprov och är enkel att genomföra hemma.",
      },
    ],
    logoUrl: "/logos/holistic.png",
    productImageUrl: "/logos/holistic.png",
    datePublished: "2026-01-20",
    dateModified: "2026-03-28",
    author: "Anna Lindström",
  },
  {
    slug: "nordictest",
    name: "Nordictest",
    shortDescription: "CE-märkta självtester till Sveriges lägsta priser – STI, blod, allergi, fertilitet",
    description:
      "Nordictest är en svensk onlinebutik som säljer CE-märkta hemtester till marknadens lägsta priser. Sortimentet täcker STI-tester (klamydia, HIV, gonorré, syfilis), blodtester, allergi, fertilitet och läkemedelstester. Alla tester är CE-märkta och enkla att utföra hemma utan recept.",
    priceFrom: "99 kr",
    priceNote: "Från 99 kr – ett av marknadens billigaste utbud",
    affiliateUrl: "https://addrevenue.io/t?a=985053&c=3467323",
    network: "direct",
    ctaText: "Se tester hos Nordictest",
    categories: ["blodtester", "sti-tester", "vitamintester", "allergitester", "fertilitetstester"],
    rating: 7.8,
    ratings: { accuracy: 7.5, ease: 8.5, speed: 8.0, value: 9.5, support: 7.5 },
    testsIncluded: [
      "Klamydia (självtest)",
      "HIV 1+2 (självtest)",
      "Gonorré (självtest)",
      "Syfilis (självtest)",
      "Hepatit B + C",
      "Vitamin D",
      "Järn / Ferritin",
      "Graviditetstest",
      "Fertilitetstest (FSH)",
      "Allergitest (inhalationsallergener)",
      "COVID-19 antigentest",
      "Narkotikatest",
    ],
    sampleType: "Varierar per test: urin, blodstick, näspinne eller salivpinne",
    turnaround: "Resultat på 5–20 minuter (snabbtester) eller 2–5 dagar (lab-tester)",
    labCertification: "CE-märkta tester",
    prescription: false,
    features: [
      "CE-märkta tester av hög kvalitet",
      "Sveriges lägsta priser på hemtester",
      "Brett sortiment: STI, blod, allergi, fertilitet",
      "Diskret leverans – neutralt paket",
      "Snabb leverans, ofta 1–2 dagar",
      "Snabbtester med svar på några minuter",
    ],
    pros: [
      "Lägst pris på marknaden",
      "Stor produktbredd – ett stopp för flera tester",
      "CE-märkta och tillförlitliga",
      "Ingen läkare eller remiss krävs",
      "Diskret leverans",
    ],
    cons: [
      "Snabbtester är mindre känsliga än lab-analyser",
      "Ingen inkluderad läkarkonsultation vid avvikande svar",
      "Inte SWEDAC-ackrediterat laboratorium för lab-tester",
    ],
    review: {
      intro:
        "Nordictest är det självklara valet för dig som vill testa dig hemma utan att tömma plånboken. Med priser från 99 kr och ett brett sortiment av CE-märkta tester täcker de de vanligaste behovsområdena.",
      accuracy:
        "Alla tester är CE-märkta, vilket är EU:s miniminorm för medicintekniska produkter. Snabbtesterna för STI har god specificitet men lägre sensitivitet än PCR-tester – vid negativt svar och kvarvarande symtom bör man komplettera med labtest.",
      process:
        "Beställ online, provtagning hemma med enkla instruktioner. Snabbtester ger svar inom 5–20 minuter. Lab-baserade tester skickas till ett externt laboratorium och svar levereras digitalt.",
      results:
        "Snabbtester visar positivt/negativt direkt på testremsan. Lab-tester levererar digitala svar med referensvärden inom 2–5 dagar beroende på analystyp.",
      price:
        "Nordictest erbjuder marknadens lägsta priser med enskilda tester från 99 kr. För den prismedvetne konsumenten som behöver ett enkelt screeningtest är det ett utmärkt alternativ.",
      verdict:
        "Nordictest är den bästa budgetalternativet för hemtester i Sverige. Passar dig som vill ha en snabb och billig screening – men för klinisk noggrannhet på blodprover rekommenderas SWEDAC-ackrediterade alternativ som Werlabs.",
    },
    faqs: [
      {
        question: "Är Nordictests tester tillförlitliga?",
        answer:
          "Ja, alla Nordictests tester är CE-märkta enligt EU:s regelverk för medicintekniska produkter. Snabbtester är pålitliga för screening men har lägre sensitivitet än PCR-baserade lab-tester. Vid hög risk för infektion och negativt snabbtest bör du komplettera med ett lab-baserat test.",
      },
      {
        question: "Hur snabbt får man svar?",
        answer:
          "Snabbtester (klamydia, HIV etc.) ger svar direkt på plats inom 5–20 minuter. Lab-baserade blodtester skickas till laboratorium och svar levereras digitalt inom 2–5 vardagar.",
      },
      {
        question: "Är leveransen diskret?",
        answer:
          "Ja. Nordictest skickar alla beställningar i neutrala paket utan logotyp eller innehållsangivelse på utsidan. Avsändaradressen är heller inte avslöjande.",
      },
      {
        question: "Behövs recept för Nordictests tester?",
        answer:
          "Nej. Alla tester hos Nordictest kan beställas direkt utan recept eller läkarkonsultation. Du väljer själv vilket test du vill utföra.",
      },
    ],
    logoUrl: "/logos/nordictest.png",
    productImageUrl: "/logos/nordictest.png",
    datePublished: "2026-04-04",
    dateModified: "2026-04-04",
    author: "Anna Lindström",
  },
  {
    slug: "snabbtesta",
    name: "Snabbtesta.se",
    shortDescription: "CE-märkta snabbtester för STI och droger – svar inom 15 min, diskret leverans från 1–2 dagar",
    description:
      "Snabbtesta.se är en svensk webbutik specialiserad på CE-märkta snabbtester du utför hemma. Sortimentet täcker STI-tester (klamydia, gonorré, syfilis), drogtester (cannabis, kokain, amfetamin m.fl.) och graviditetstester. Testerna är enkla att använda och ger svar direkt på plats – utan att skicka prov till ett labb.",
    priceFrom: "99 kr",
    priceNote: "Från 99 kr per test – paket och flerpack tillgängliga",
    affiliateUrl: "https://addrevenue.io/t?a=987645&c=3467323",
    network: "direct",
    ctaText: "Se tester hos Snabbtesta",
    categories: ["sti-tester"],
    rating: 7.6,
    ratings: { accuracy: 7.5, ease: 9.0, speed: 9.5, value: 9.0, support: 7.0 },
    testsIncluded: [
      "Klamydia (snabbtest)",
      "Gonorré (snabbtest)",
      "Syfilis (snabbtest)",
      "HIV 1+2 (snabbtest)",
      "Cannabis / THC",
      "Kokain",
      "Amfetamin",
      "Drogtest 12-panel",
      "Graviditetstest",
      "Superpaket kvinna (STI-kombination)",
    ],
    sampleType: "Urin, svabb eller blodstick beroende på test",
    turnaround: "Svar direkt på plats – 5–20 minuter",
    labCertification: "CE-märkta tester",
    prescription: false,
    features: [
      "Svar direkt hemma – inget labb-väntan",
      "CE-märkta tester av hög kvalitet",
      "Diskret leverans inom 1–2 dagar",
      "Brett sortiment: STI, drogtester, graviditet",
      "Inget recept eller läkarbesök krävs",
    ],
    pros: [
      "Svar direkt hemma på 5–20 minuter",
      "Låga priser – enskilda tester från 99 kr",
      "Enkla och diskreta att beställa",
      "Bra för snabb screening av STI",
      "Inga abonnemang – beställ det du behöver",
    ],
    cons: [
      "Snabbtester är mindre känsliga än PCR-labb-tester",
      "Inget ackrediterat laboratorium i kedjan",
      "Ingen inkluderad läkarkonsultation",
      "Positiva snabbresultat bör alltid bekräftas med labb-test",
    ],
    review: {
      intro:
        "Snabbtesta.se är den rätta lösningen när du vill ha svar nu – inte om 3–5 dagar. Webbbutiken säljer CE-märkta snabbtester primärt för STI och droger, med leverans inom 1–2 dagar och tester du utför hemma på ett kvart.",
      accuracy:
        "Snabbtester är CE-märkta men har lägre sensitivitet än PCR-baserade laboratoriemetoder. För STI-tester innebär det att ett negativt snabbresultat inte utesluter infektion vid hög risk – ett kompletterande labb-test rekommenderas alltid vid kvarstående symtom.",
      process:
        "Beställ online och paketet levereras i ett neutralt kuvert. Följ de bifogade instruktionerna för provtagning (urin, svabb eller blodstick beroende på test). Lägg testkassetten på en plan yta och avläs resultatet efter 5–20 minuter.",
      results:
        "Resultatet visas direkt på testkassettens streck – ett eller två streck avläses enligt medföljande instruktion. Inget digitalt svar eller app behövs. Positiva resultat bör alltid bekräftas med ett laboratorie-test hos en vårdcentral.",
      price:
        "Snabbtesta.se är priskonkurrenta med tester från 99 kr per styck. Flerpack och kombinationspaket ger ytterligare rabatt. För den som behöver ett snabbt svar utan att betala för ett fullständigt labb-paket är det ett ekonomiskt val.",
      verdict:
        "Snabbtesta.se är idealisk för snabb STI-screening hemma – när du vill ha svar direkt och inte kan vänta på labb-analys. Kom ihåg att ett negativt snabbresultat inte är detsamma som ett kliniskt friintyg. Vill du ha det mest tillförlitliga svaret välj ett SWEDAC-ackrediterat alternativ som Werlabs.",
    },
    faqs: [
      {
        question: "Hur tillförlitliga är Snabbtesta.se:s tester?",
        answer:
          "Testerna är CE-märkta, vilket uppfyller EU:s krav för medicintekniska produkter. Snabbtester har generellt lägre sensitivitet (känslighet) än PCR-tester. Det innebär att ett falskt negativt resultat är möjligt – särskilt tidigt i en infektion. Positivt resultat är mer tillförlitligt.",
      },
      {
        question: "Hur lång tid tar leveransen?",
        answer:
          "Snabbtesta.se levererar normalt inom 1–2 vardagar efter belagd beställning. Paketet skickas i en diskret förpackning utan avsändarinformation som avslöjar innehållet.",
      },
      {
        question: "Behöver jag recept för att beställa?",
        answer:
          "Nej. Alla tester hos Snabbtesta.se säljs receptfritt och kan beställas direkt utan läkarinblandning.",
      },
      {
        question: "Vad gör jag om testet är positivt?",
        answer:
          "Kontakta en vårdcentral eller STI-mottagning för bekräftande labb-test och behandling. Snabbtestets positiva resultat ska alltid verifieras – det är inte tillräckligt som klinisk diagnos.",
      },
    ],
    logoUrl: "/logos/snabbtesta.png",
    productImageUrl: "/logos/snabbtesta.png",
    datePublished: "2026-04-04",
    dateModified: "2026-04-04",
    author: "Anna Lindström",
  },
  {
    slug: "testivo",
    name: "Testivo",
    shortDescription: "Hemtester till låga priser – snabb leverans 1–3 dagar, CE-märkta tester utan recept",
    description:
      "Testivo är en svensk onlinebutik som erbjuder CE-märkta hemtester till konkurrenskraftiga priser. Med snabb leverans och ett sortiment av vanliga hemtester är de ett prisvärt alternativ för den som vill göra en snabb hälsokoll hemma utan att behöva boka läkartid.",
    priceFrom: "99 kr",
    priceNote: "Konkurrenskraftiga priser – kolla aktuella erbjudanden på sajten",
    affiliateUrl: "https://addrevenue.io/t?a=987744&c=3467323",
    network: "direct",
    ctaText: "Se tester hos Testivo",
    categories: ["sti-tester", "blodtester"],
    rating: 7.5,
    ratings: { accuracy: 7.5, ease: 8.5, speed: 8.5, value: 9.0, support: 7.5 },
    testsIncluded: [
      "STI-tester (klamydia, gonorré, syfilis)",
      "HIV-test",
      "Blodtester (hemma)",
      "Graviditetstest",
      "Drogtester",
    ],
    sampleType: "Varierar per test – urin, svabb eller blodstick",
    turnaround: "Snabbtester: svar direkt på plats. Övriga: 2–5 dagar",
    labCertification: "CE-märkta tester",
    prescription: false,
    features: [
      "Kvalitetsprodukter till låga priser",
      "Leverans inom 1–3 dagar",
      "CE-märkta tester",
      "Inget recept krävs",
      "Enkel beställning online",
    ],
    pros: [
      "Konkurrenskraftiga priser",
      "Snabb leverans 1–3 dagar",
      "Enkelt att beställa utan recept",
      "CE-märkta tester",
    ],
    cons: [
      "Snabbtester är mindre känsliga än labb-PCR-tester",
      "Inget SWEDAC-ackrediterat laboratorium",
      "Ingen inkluderad läkarkonsultation",
    ],
    review: {
      intro:
        "Testivo erbjuder CE-märkta hemtester till konkurrenskraftiga priser med snabb leverans inom 1–3 dagar. Ett prisvärt val för den som söker en enkel hälsokoll hemma.",
      accuracy:
        "Testerna är CE-märkta enligt EU:s standard för medicintekniska produkter. Snabbtester har lägre sensitivitet än laboratoriemetoder – vid positiva resultat eller kvarstående symtom bör du alltid kontakta sjukvården för bekräftelse.",
      process:
        "Beställ online och få paketet hem på 1–3 dagar. Följ instruktionerna för provtagning och avläs resultatet direkt eller via inlämning till labb beroende på testtyp.",
      results:
        "Snabbtester ger svar direkt på plats. Labb-baserade tester levererar digitala svar inom 2–5 dagar. Avvikande svar bör alltid följas upp hos läkare.",
      price:
        "Testivo erbjuder konkurrenskraftiga priser och är ett prisvärt alternativ för den som vill göra en hemtestkontroll utan att betala för ett fullständigt labbpaket.",
      verdict:
        "Testivo är ett prisvärt och smidigt alternativ för grundläggande hemtester med snabb leverans. För mer avancerade analyser och klinisk precision rekommenderas SWEDAC-ackrediterade alternativ som Werlabs.",
    },
    faqs: [
      {
        question: "Hur snabb är leveransen från Testivo?",
        answer:
          "Testivo levererar normalt inom 1–3 vardagar. Paketet skickas diskret utan avsändarinformation som avslöjar innehållet.",
      },
      {
        question: "Behöver jag recept för att beställa hos Testivo?",
        answer:
          "Nej. Alla tester kan beställas direkt utan recept eller läkarkonsultation.",
      },
      {
        question: "Är Testivos tester tillförlitliga?",
        answer:
          "Testerna är CE-märkta vilket uppfyller EU:s krav för medicintekniska produkter. Snabbtester är bra för screening men labb-PCR är mer känsligt. Positiva snabbresultat bör alltid bekräftas med ett labb-test hos sjukvården.",
      },
    ],
    logoUrl: "/logos/testivo.png",
    productImageUrl: "/logos/testivo.png",
    datePublished: "2026-04-04",
    dateModified: "2026-04-04",
    author: "Anna Lindström",
  },
];

export function getProductBySlug(slug: string): TestProduct | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}

export function getProductsByCategory(category: string): TestProduct[] {
  return products.filter((p) => p.categories.includes(category as import("@/types/product").CategorySlug));
}

export function getTopProducts(count: number = 3): TestProduct[] {
  return [...products].sort((a, b) => b.rating - a.rating).slice(0, count);
}
