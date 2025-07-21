import React from "react";

const ExtensionContent: React.FC = () => {
  const htmlContent = `
    <section class="content-section space-y-6">
      <h2 class="text-3xl font-semibold">Tilbygninger Næstved – Udvid boligen med stil, funktion og værdi</h2>
              <p>Pladsen bliver trang, familien vokser, eller drømmen om en lys udestue presser på. Med en gennemtænkt <strong>tilbygning Næstved</strong> kan du forvandle boligen uden at flytte – og samtidigt øge ejendomsværdien markant. Her får du den mest detaljerede guide til lokalplaner, design, materialer, tidsplaner og priser for tilbygninger i Næstved-området.</p>

      <h3 class="text-2xl font-semibold mt-8">Hvorfor vælge en lokal specialist i tilbygninger i Næstved?</h3>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>Indgående kendskab til lokalplaner:</strong> En lokal entreprenør ved præcis, hvordan dit projekt kan godkendes – uden dyre omprojekteringer.</li>
        <li><strong>Håndtering af BR18 & energikrav:</strong> Ved en tilbygning &gt; 50 m² sørger vi for energirammeberegning, lavenergivinduer og ekstra isolering.</li>
        <li><strong>Netværk til geoteknik & kloakmester:</strong> Korrekt fundering og regnvandshåndtering i første forsøg.</li>
        <li><strong>Kort afstand = lavere transporttid:</strong> Lokale materialeleverancer sparer både CO₂ og ventetid.</li>
      </ul>

      <h3 class="text-2xl font-semibold mt-8">De mest efterspurgte typer tilbygninger 2025</h3>
      <div class="overflow-x-auto">
        <table class="min-w-full text-sm border border-gray-200">
          <thead class="bg-gray-50">
            <tr><th class="px-3 py-2">Type</th><th class="px-3 py-2">Størrelse</th><th class="px-3 py-2">Typiske materialer</th><th class="px-3 py-2">Fordele</th><th class="px-3 py-2">Ca. pris*</th></tr>
          </thead>
          <tbody>
            <tr class="border-t"><td class="px-3 py-2 font-medium">Garage / Carport</td><td class="px-3 py-2">25–40 m²</td><td class="px-3 py-2">Træskelet, tagpap</td><td class="px-3 py-2">Beskytter bil, ekstra opbevaring</td><td class="px-3 py-2">9.000–12.000 kr./m²</td></tr>
            <tr class="border-t"><td class="px-3 py-2 font-medium">Orangeri / Udestue</td><td class="px-3 py-2">15–30 m²</td><td class="px-3 py-2">Limtræ, 3-lags glas</td><td class="px-3 py-2">Året-rundt ophold, høj lysindfald</td><td class="px-3 py-2">11.000–15.000 kr./m²</td></tr>
            <tr class="border-t"><td class="px-3 py-2 font-medium">Overetage</td><td class="px-3 py-2">40–100 m²</td><td class="px-3 py-2">Letklinker + tegl</td><td class="px-3 py-2">Ekstra værelser, udsigt</td><td class="px-3 py-2">13.000–18.000 kr./m²</td></tr>
            <tr class="border-t"><td class="px-3 py-2 font-medium">Kælderudvidelse</td><td class="px-3 py-2">20–60 m²</td><td class="px-3 py-2">Beton, drænplader</td><td class="px-3 py-2">Hobbyrum, vinrum</td><td class="px-3 py-2">15.000–22.000 kr./m²</td></tr>
            <tr class="border-t"><td class="px-3 py-2 font-medium">Havekontor</td><td class="px-3 py-2">10–25 m²</td><td class="px-3 py-2">CLT, sedumtag</td><td class="px-3 py-2">Hjemmekontor, gæstehus</td><td class="px-3 py-2">8.500–11.500 kr./m²</td></tr>
          </tbody>
        </table>
      </div>
      <p class="mt-2 text-sm italic">*Inkl. projektering, byggetilladelse, materialer og arbejdsløn; terrænforhold kan påvirke prisen.</p>

      <h3 class="text-2xl font-semibold mt-8">Projektforløbet – trin for trin</h3>
      <ol class="list-decimal ml-6 space-y-2">
        <li><strong>Gratis skitseforslag & budgetramme:</strong> Ring <a href="tel:+27851381" class="text-terracotta font-semibold">+27 85 13 81</a>. Du modtager 3D-skitse og overslag samme uge.</li>
        <li><strong>Myndighedsbehandling:</strong> Digital ansøgning, energiramme og evt. naboorientering. Sagsbehandling 3-6 uger.</li>
        <li><strong>Detaljeret projektering:</strong> Statik, kloaktegning, materialevalg, brandklasser.</li>
        <li><strong>Udførelse:</strong> Fundament, råhus, installationer og finish.</li>
        <li><strong>Aflevering & garanti:</strong> Blower-door test, opdateret energimærke og 5 års BygGaranti.</li>
      </ol>

      <h3 class="text-2xl font-semibold mt-8">Energibesparelse & bæredygtighed</h3>
      <ul class="list-disc ml-6 space-y-2">
        <li>Svanemærkede materialer reducerer VOC og forbedrer indeklima.</li>
        <li>Solcelletagsten kan dække op til 20 % af husets elforbrug.</li>
        <li>Ler-puds giver naturlig fugtregulering og bedre akustik.</li>
        <li>Regnvandsopsamling til toiletskyl og havevanding.</li>
      </ul>

      <h3 class="text-2xl font-semibold mt-8">Lokale regler for tilbygning Næstved</h3>
      <div class="overflow-x-auto">
        <table class="min-w-full text-sm border border-gray-200">
          <thead class="bg-gray-50">
            <tr><th class="px-2 py-1">Parameter</th><th class="px-2 py-1">Standardkrav*</th><th class="px-2 py-1">Bemærkning</th></tr>
          </thead>
          <tbody>
            <tr class="border-t"><td class="px-2 py-1">Bebyggelsesprocent</td><td class="px-2 py-1">30 %</td><td class="px-2 py-1">Parcelhus – kan variere</td></tr>
            <tr class="border-t"><td class="px-2 py-1">Afstand til skel</td><td class="px-2 py-1">≥ 2,5 m</td><td class="px-2 py-1">Carporte &lt; 50 m²: 0,5 m</td></tr>
            <tr class="border-t"><td class="px-2 py-1">Højde</td><td class="px-2 py-1">Max 8,5 m</td><td class="px-2 py-1">Dispensation ved førstesal</td></tr>
            <tr class="border-t"><td class="px-2 py-1">Terrænregulering</td><td class="px-2 py-1">± 0,5 m</td><td class="px-2 py-1">Større kræver godkendelse</td></tr>
            <tr class="border-t"><td class="px-2 py-1">Udestue isolering</td><td class="px-2 py-1">Loft 300 mm</td><td class="px-2 py-1">Helårsrum klassificeres som bolig</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-2xl font-semibold mt-8">Priseksempel – 30 m² orangeri</h3>
      <div class="overflow-x-auto">
        <table class="min-w-full text-sm border border-gray-200">
          <thead class="bg-gray-50">
            <tr><th class="px-2 py-1">Post</th><th class="px-2 py-1">Enhed</th><th class="px-2 py-1">Antal</th><th class="px-2 py-1">Pris/enhed</th><th class="px-2 py-1">Delsum</th></tr>
          </thead>
          <tbody>
            <tr class="border-t"><td class="px-2 py-1">Projektering & byggetilladelse</td><td class="px-2 py-1">stk.</td><td class="px-2 py-1">1</td><td class="px-2 py-1">28 000 kr.</td><td class="px-2 py-1">28 000 kr.</td></tr>
            <tr class="border-t"><td class="px-2 py-1">Jord & betonfundament</td><td class="px-2 py-1">m²</td><td class="px-2 py-1">30</td><td class="px-2 py-1">1 100 kr.</td><td class="px-2 py-1">33 000 kr.</td></tr>
            <tr class="border-t"><td class="px-2 py-1">Limtræskonstruktion</td><td class="px-2 py-1">m²</td><td class="px-2 py-1">30</td><td class="px-2 py-1">1 850 kr.</td><td class="px-2 py-1">55 500 kr.</td></tr>
            <tr class="border-t"><td class="px-2 py-1">3-lags energiglas</td><td class="px-2 py-1">m²</td><td class="px-2 py-1">45</td><td class="px-2 py-1">1 200 kr.</td><td class="px-2 py-1">54 000 kr.</td></tr>
            <tr class="border-t"><td class="px-2 py-1">Gulvvarme + flydespartel</td><td class="px-2 py-1">m²</td><td class="px-2 py-1">30</td><td class="px-2 py-1">450 kr.</td><td class="px-2 py-1">13 500 kr.</td></tr>
            <tr class="border-t"><td class="px-2 py-1">El, ventilation, maler</td><td class="px-2 py-1">pakke</td><td class="px-2 py-1">1</td><td class="px-2 py-1">29 000 kr.</td><td class="px-2 py-1">29 000 kr.</td></tr>
          </tbody>
        </table>
      </div>
      <p class="mt-2">Finansiering: Realkredit 30 år, rente 4 % → ca. 1.050 kr./md netto efter skat.</p>

      <h3 class="text-2xl font-semibold mt-8">Tilskud & fradrag</h3>
      <ul class="list-disc ml-6 space-y-2">
        <li>Bygningspuljen – Op til 25 % tilskud ved markant energiforbedring.</li>
        <li>Håndværkerfradrag – Op til 12 900 kr. pr. voksen.</li>
        <li>Kommunekredit-lån til klimasikring.</li>
      </ul>

      <h3 class="text-2xl font-semibold mt-8">FAQ – ofte stillede spørgsmål</h3>
      <details class="border rounded-md p-4 mb-2"><summary class="cursor-pointer font-medium">Hvor lang tid tager en byggetilladelse?</summary><p>Normalt 4-6 uger, afhængigt af kommunens travlhed.</p></details>
      <details class="border rounded-md p-4 mb-2"><summary class="cursor-pointer font-medium">Kan jeg bygge i træ for at spare tid?</summary><p>Ja, træskelet er hurtigt at rejse og giver lavt CO₂-aftryk. Brandklasse skal dokumenteres.</p></details>
      <details class="border rounded-md p-4 mb-2"><summary class="cursor-pointer font-medium">Skal jeg have energimærke?</summary><p>Ved opvarmet areal kræves新版 energy frame calculation and perhaps updated energy label.</p></details>
      <details class="border rounded-md p-4 mb-2"><summary class="cursor-pointer font-medium">Hvad koster arkitekt/ingeniør?</summary><p>Typisk 8-12 % af entreprisesummen inkl. statik.</p></details>
      <details class="border rounded-md p-4 mb-2"><summary class="cursor-pointer font-medium">Kan I hjælpe med indretning?</summary><p>Ja, vi tilbyder 3D-VR workshop.</p></details>

      <h3 class="text-2xl font-semibold mt-8">Vedligeholdelse & eftersyn</h3>
      <ul class="list-disc ml-6 space-y-1">
        <li>Rens tagrender hvert efterår.</li>
        <li>Kontroller elastiske fuger hvert 5. år.</li>
        <li>Skift ventilationsfilter 2× årligt.</li>
        <li>Olie træbeklædning hvert 4-6. år.</li>
      </ul>

      <h3 class="text-2xl font-semibold mt-8">Kontakt os</h3>
      <p>Telefon: <a href="tel:+4527851381" class="font-bold text-terracotta">+27 85 13 81</a></p>
              <p>E-mail: <a href="mailto:infomurernæstved@gmail.com">infomurernæstved@gmail.com</a></p>
      <p>Serviceområde: Næstved, Vordingborg, Præstø, Faxe, Køge, Haslev og omegn</p>
      <p>Udfyld formularen “Få et uforpligtende tilbud” – budgetoverslag inden for 72 timer.</p>

      <p class="mt-6">Med en professionel tilbygning Næstved får du plads, komfort og energirigtige løsninger – uden at flytte. Tag det første skridt i dag!</p>
    </section>
  `;

  return (
    <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default ExtensionContent; 