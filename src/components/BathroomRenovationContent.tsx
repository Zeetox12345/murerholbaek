import React from "react";

const BathroomRenovationContent: React.FC = () => {
  const htmlContent = `
    <section class="content-section space-y-6">
      <h2 class="text-3xl font-semibold">Badeværelsesrenovering Holbæk – Fra slidt vådrum til drømmespa</h2>
              <p>Et gammelt, fugtigt eller uinspirerende badeværelse kan sænke boligens værdi, øge risikoen for skimmelsvamp – og ganske enkelt ødelægge hverdagskomforten. Med en professionel <strong>badeværelsesrenovering Holbæk</strong> får du et sundt, energirigtigt og æstetisk badeværelse, der holder i årtier. På denne side finder du den mest komplette guide til planlægning, priser, materialer, myndighedskrav og vedligehold – alt skræddersyet til Holbæk-området.</p>

      <h3 class="text-2xl font-semibold mt-8">Hvorfor er en lokal badeværelsesrenovering i Holbæk en god idé?</h3>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>Kendskab til grundvandet:</strong> Holbæk har højt grundvandsniveau, især i kældre. En lokal entreprenør ved, hvornår ekstra fugtmembran eller kapillarbrydende lag er nødvendigt.</li>
        <li><strong>Overholdelse af BR18-vådrumsregler:</strong> Vådrum skal opfylde skærpede krav til fald, fugtspærre og afløb. Lokale håndværkere har rutine i dialogen med Holbæk Kommunes byggesags­enhed.</li>
        <li><strong>Netværk af VVS- og el-specialister:</strong> Hurtig koordinering mellem murer, elektriker og autoriseret VVS’er minimerer nedetiden – du er ikke uden bad i ugevis.</li>
        <li><strong>Kort transport = lavere omkostninger:</strong> Lokale leverancer af fliser, sanitet og gips sparer både tid og CO₂.</li>
      </ul>

      <h3 class="text-2xl font-semibold mt-8">Populære løsninger til badeværelsesrenovering Holbæk</h3>
      <div class="overflow-x-auto">
        <table class="min-w-full text-sm border border-gray-200">
          <thead class="bg-gray-50">
            <tr><th class="px-3 py-2">Løsning</th><th class="px-3 py-2">Typiske features</th><th class="px-3 py-2">Fordele</th><th class="px-3 py-2">Ca. pris*</th></tr>
          </thead>
          <tbody>
            <tr class="border-t"><td class="px-3 py-2 font-medium">Basis-renovering</td><td class="px-3 py-2">Nye fliser på gulv/væg, udskiftning af sanitet</td><td class="px-3 py-2">Hurtig opgradering, lav pris</td><td class="px-3 py-2">9.500–12.000 kr./m²</td></tr>
            <tr class="border-t"><td class="px-3 py-2 font-medium">Komplet vådrum</td><td class="px-3 py-2">Nedrivning, ny fugtspærre, gulvvarme, spotlys</td><td class="px-3 py-2">Lang levetid, energibesparelse</td><td class="px-3 py-2">12.500–17.000 kr./m²</td></tr>
            <tr class="border-t"><td class="px-3 py-2 font-medium">Premium spa</td><td class="px-3 py-2">Walk-in-brus, nichehylder, regnbruser, microcement</td><td class="px-3 py-2">Luksuslook, høj boligværdi</td><td class="px-3 py-2">17.000–23.000 kr./m²</td></tr>
          </tbody>
        </table>
      </div>
      <p class="mt-2 text-sm italic">*Inkl. arbejdsløn, materialer, bortkørsel af affald, men ekskl. evt. flytning af vægge/afløb.</p>

      <h3 class="text-2xl font-semibold mt-8">Projektforløb – trin for trin</h3>
      <ol class="list-decimal ml-6 space-y-2">
        <li><strong>Gratis rådgivning & 3D-design:</strong> Ring <a href="tel:+27851381" class="text-terracotta font-semibold">+27 85 13 81</a> eller brug tilbudsformularen. Vi tager mål, scanner rørføringer og laver en fotorealistisk 3D-tegning, så du kan “gå tur” i dit nye badeværelse, før vi bygger.</li>
        <li><strong>Nedrivning & bortskaffelse:</strong> Gamle fliser, gipsvægge og støbejernsrør fjernes. Alt byggeaffald sorteres i henhold til Næstved Kommunes affaldsplan.</li>
        <li><strong>Grovarbejde:</strong>
          <ul class="list-disc ml-6 mt-1 space-y-1">
            <li>Vandtæt fugtspærre (A-kvalitet folie + flydespartel)</li>
            <li>Nyt fald mod gulvafløb (min. 1,5 % ifølge BR18)</li>
            <li>El-arbejde: separate Z-circuits til gulvvarme og spots</li>
            <li>VVS: presfittings, PEX-rør og ny vandlås til håndvask</li>
          </ul>
        </li>
        <li><strong>Fliser & finish:</strong>
          <ul class="list-disc ml-6 mt-1 space-y-1">
            <li>Storformat 60 × 60 cm fliser skæres med vandkølet kapsav for præcise kanter.</li>
            <li>Fuger med epoxy (skimmel-resistent) eller cementbaseret farvefuge.</li>
            <li>Montage af sanitet, armatur, spejl med LED-bagbelysning.</li>
          </ul>
        </li>
        <li><strong>Aflevering & garanti:</strong> Trykprøvning af afløb og vandrør, måling af fugtindhold (&lt; 85 % RF) i vægge, overdragelse af 5 års BygGaranti + 10–30 års produktgarantier.</li>
      </ol>

      <h3 class="text-2xl font-semibold mt-8">Materialer & trends 2025</h3>
      <ul class="list-disc ml-6 space-y-2">
        <li>Microcement – sømløst look, fås i 40 farver, vandafvisende.</li>
        <li>Naturstens-mosaik – giver varmt spa-udtryk som kontrast til store fliser.</li>
        <li>Matt sort & messing armatur – tidens mest efterspurgte finish.</li>
        <li>Smart shower – digital termostat, personlige temperatur-profiler.</li>
        <li>Vandbesparende toilet – dobbeltskyl, 2/4 liter; sparer op til 10 000 l/år.</li>
      </ul>

      <h3 class="text-2xl font-semibold mt-8">Energibesparelse & bæredygtighed</h3>
      <ul class="list-disc ml-6 space-y-2">
        <li>Gulvvarme med trådløs termostat: 15 % lavere elforbrug pga. præcis styring.</li>
        <li>LED-spots IP65: 50 000 timers levetid, 80 % mindre energiforbrug end halogen.</li>
        <li>FSC-certificerede møbelplader: bæredygtigt træ; modstandsdygtigt mod fugt.</li>
        <li>Genbrug af “gråt vand” fra håndvask til skyl: reducerer vandforbrug ~20 %.</li>
      </ul>

      <h3 class="text-2xl font-semibold mt-8">Priseksempel – 7 m² komplet badeværelsesrenovering i Næstved</h3>
      <div class="overflow-x-auto">
        <table class="min-w-full text-sm border border-gray-200">
          <thead class="bg-gray-50">
            <tr><th class="px-2 py-1">Post</th><th class="px-2 py-1">Enhed</th><th class="px-2 py-1">Antal</th><th class="px-2 py-1">Pris/enhed</th><th class="px-2 py-1">Delsum</th></tr>
          </thead>
          <tbody>
            <tr class="border-t"><td class="px-2 py-1">Nedrivning & affald</td><td class="px-2 py-1">m²</td><td class="px-2 py-1">7</td><td class="px-2 py-1">450 kr.</td><td class="px-2 py-1">3 150 kr.</td></tr>
            <tr class="border-t"><td class="px-2 py-1">Fugtspærre + spartel</td><td class="px-2 py-1">m²</td><td class="px-2 py-1">7</td><td class="px-2 py-1">680 kr.</td><td class="px-2 py-1">4 760 kr.</td></tr>
            <tr class="border-t"><td class="px-2 py-1">Gulvvarme el-måtte</td><td class="px-2 py-1">stk.</td><td class="px-2 py-1">1</td><td class="px-2 py-1">2 900 kr.</td><td class="px-2 py-1">2 900 kr.</td></tr>
            <tr class="border-t"><td class="px-2 py-1">Fliser 60×60 cm</td><td class="px-2 py-1">m²</td><td class="px-2 py-1">22</td><td class="px-2 py-1">350 kr.</td><td class="px-2 py-1">7 700 kr.</td></tr>
            <tr class="border-t"><td class="px-2 py-1">Flisemontage</td><td class="px-2 py-1">m²</td><td class="px-2 py-1">22</td><td class="px-2 py-1">750 kr.</td><td class="px-2 py-1">16 500 kr.</td></tr>
            <tr class="border-t"><td class="px-2 py-1">Sanitet & armatur</td><td class="px-2 py-1">pakke</td><td class="px-2 py-1">1</td><td class="px-2 py-1">14 900 kr.</td><td class="px-2 py-1">14 900 kr.</td></tr>
            <tr class="border-t"><td class="px-2 py-1">El & VVS-arbejde</td><td class="px-2 py-1">time</td><td class="px-2 py-1">27</td><td class="px-2 py-1">550 kr.</td><td class="px-2 py-1">14 850 kr.</td></tr>
          </tbody>
        </table>
      </div>
      <p class="mt-2 text-sm italic">Tip: Håndværkerfradraget (2025) giver op til 12 900 kr. pr. voksen i fradrag på arbejdsløn.</p>

      <h3 class="text-2xl font-semibold mt-8">Ofte stillede spørgsmål</h3>
      <details class="border rounded-md p-4 mb-2"><summary class="cursor-pointer font-medium">Hvor lang tid tager en badeværelsesrenovering?</summary><p>Et 5-7 m² badeværelse tager typisk 3-5 uger fra nedrivning til aflevering, afhængigt af leveringstider på fliser og specialarmatur.</p></details>
      <details class="border rounded-md p-4 mb-2"><summary class="cursor-pointer font-medium">Kan jeg beholde mine eksisterende afløb?</summary><p>Ja, hvis fald og dimensioner er OK. Flytning af gulvafløb øger dog designfriheden betydeligt.</p></details>
      <details class="border rounded-md p-4 mb-2"><summary class="cursor-pointer font-medium">Må jeg selv stå for el-arbejdet?</summary><p>Nej, alt el i vådrum (zone 0-2) skal udføres af autoriseret elektriker ifølge Stærkstrømsbekendtgørelsen.</p></details>
      <details class="border rounded-md p-4 mb-2"><summary class="cursor-pointer font-medium">Hvilket fald skal gulvet have?</summary><p>Mindst 1,5 % mod afløb, dokumenteret med laser. Vi leverer fotodokumentation til byggesagen.</p></details>
      <details class="border rounded-md p-4 mb-2"><summary class="cursor-pointer font-medium">Hvilken garanti får jeg?</summary><p>5 års BygGaranti på alt arbejde og op til 30 års produktgaranti på fliser, membran og armatur.</p></details>

      <h3 class="text-2xl font-semibold mt-8">Vedligeholdelsestips</h3>
      <ul class="list-disc ml-6 space-y-1">
        <li>Daglig ventilation: åbn vinduet fem minutter efter bad – fugten forsvinder uden varmetab.</li>
        <li>pH-neutral rengøring: bevarer fuger og microcement.</li>
        <li>Eftersilikonering: tjek elastiske fuger omkring brusehjørne hver 2.–3. år.</li>
        <li>Afkalkning: brug eddikespray på armaturer for at undgå matte kalkpletter.</li>
      </ul>

      <h3 class="text-2xl font-semibold mt-8">Kontakt os – dit nye spa-oase starter her</h3>
      <p>Telefon: <a href="tel:+4527851381" class="font-bold text-terracotta">+27 85 13 81</a></p>
              <p>E-mail: <a href="mailto:infomurernæstved@gmail.com">infomurernæstved@gmail.com</a></p>
      <p>Serviceområde: Næstved, Vordingborg, Præstø, Faxe, Køge, Haslev og omegn</p>
      <p>Udfyld formularen “Få et uforpligtende tilbud nu”, så vender vi tilbage inden for 24 timer.</p>

      <p class="mt-6">Med en professionel badeværelsesrenovering Næstved får du ikke bare et flot rum – du investerer i sundhed, energibesparelse og øget boligværdi. Ring i dag!</p>
    </section>
  `;

  return (
    <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default BathroomRenovationContent; 