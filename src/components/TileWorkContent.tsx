import React from "react";

const TileWorkContent: React.FC = () => {
  const htmlContent = `
    <section class="content-section space-y-6">
      <h2 class="text-3xl font-semibold">Flisearbejde Næstved – Perfektion i hver eneste fuge</h2>
              <p>Skal der renoveres badeværelse, køkken eller terrasse, er solidt <strong>flisearbejde Næstved</strong> nøglen til et resultat, der både ser godt ud – og holder i årtier. Her får du den mest detaljerede guide til alt, hvad du skal vide om fliser, materialer, priser, trends og vedligehold i Næstved-området.</p>

              <h3 class="text-2xl font-semibold mt-8">Hvorfor vælge lokalt flisearbejde i Næstved?</h3>
      <ul class="list-disc ml-6 space-y-2">
        <li>Lokal byggestandard – Næstved Kommune kræver dokumenteret vådrumssikring (BR18) og frostsikre materialer udendørs.</li>
                  <li>Kendskab til underlag – Gammelt pudslag i Næstveds murermestervillaer og letbeton i nyere rækkehuse kræver forskellig primer og klæb.</li>
        <li>Hurtig problemløsning – Hvis fliser krakelerer eller fuger bliver utætte, kan det ofte udbedres samme dag.</li>
        <li>Præcis levering – Lokale grossister som Stark Næstved har de fleste fliser på lager, så projektet ikke forsinkes.</li>
      </ul>

              <h3 class="text-2xl font-semibold mt-8">Populære fliseløsninger i Næstved 2025</h3>
      <div class="overflow-x-auto">
        <table class="min-w-full text-sm border border-gray-200">
          <thead class="bg-gray-50">
            <tr><th class="px-3 py-2">Løsning</th><th class="px-3 py-2">Typiske projekter</th><th class="px-3 py-2">Fordele</th><th class="px-3 py-2">Ca. pris*</th></tr>
          </thead>
          <tbody>
            <tr class="border-t"><td class="px-3 py-2 font-medium">Storformat 60×120 cm</td><td class="px-3 py-2">Badeværelsesgulv & væg</td><td class="px-3 py-2">Færre fuger, moderne look</td><td class="px-3 py-2">700-950 kr./m²</td></tr>
            <tr class="border-t"><td class="px-3 py-2 font-medium">Mosaik</td><td class="px-3 py-2">Nichehylde, bruseniche, køkken­stænkvæg</td><td class="px-3 py-2">Fleksibel til buer & hjørner</td><td class="px-3 py-2">900-1 250 kr./m²</td></tr>
            <tr class="border-t"><td class="px-3 py-2 font-medium">Naturstens-skifer</td><td class="px-3 py-2">Udendørs terrasse, gangareal</td><td class="px-3 py-2">Skridsikker, patinerer flot</td><td class="px-3 py-2">850-1 150 kr./m²</td></tr>
            <tr class="border-t"><td class="px-3 py-2 font-medium">Hexagonfliser</td><td class="px-3 py-2">Entré, gæstebad</td><td class="px-3 py-2">Grafisk mønster, tidløs</td><td class="px-3 py-2">750-1 000 kr./m²</td></tr>
            <tr class="border-t"><td class="px-3 py-2 font-medium">Herringbone-klinker</td><td class="px-3 py-2">Køkkengulv, bryggers</td><td class="px-3 py-2">Luksuriøst mønster, robust</td><td class="px-3 py-2">800-1 050 kr./m²</td></tr>
          </tbody>
        </table>
      </div>
      <p class="mt-2 text-sm italic">*Priser inkl. arbejdsløn, klæb & fuge, men ekskl. selve fliserne.</p>

      <h3 class="text-2xl font-semibold mt-8">Sådan forløber et projekt – trin for trin</h3>
      <ol class="list-decimal ml-6 space-y-2">
        <li><strong>Gratis opmåling & design:</strong> Ring <a href="tel:+27851381" class="text-terracotta font-semibold">+27 85 13 81</a> eller brug formularen “Få et uforpligtende tilbud”. Vi laseropmåler rummets vinkler, kontrollerer underlag og hjælper med flisevalg – du kan se 3D-visualisering før arbejdet starter.</li>
        <li><strong>Forberedelse af underlag:</strong> Priming med SD-vurderet primer og udlægning af selvnivellerende gulvspartel for at sikre maks. 2 mm variation på 2 meters retskinne.</li>
        <li><strong>Fliselægning:</strong> Snorlaser justerer startlinje, butter-back teknik og levelling-system sikrer plan overflade.</li>
        <li><strong>Fuge & finish:</strong> Epoxy- eller cementfuge, silikone i hjørner, rengøring og imprægnering ved natursten.</li>
        <li><strong>Kvalitetstjek & overdragelse:</strong> Kontrol af fugebredde ± 0,5 mm og termografisk test af gulvvarme. 5 års BygGaranti.</li>
      </ol>

      <h3 class="text-2xl font-semibold mt-8">Materialer, trends og teknologier</h3>
      <ul class="list-disc ml-6 space-y-2">
        <li>Porcelænsglasur: Vandabsorptionsgrad &lt; 0,5 % – ideel til vådrum.</li>
        <li>UVEA-trykte fliser: Realistisk naturstens- eller terrazzo-look uden vedligehold.</li>
        <li>Antibakterielle fuger: Fugemasse med sølvioner reducerer skimmeldannelse med op til 99 %.</li>
        <li>LED-profiler i sokkel: Skaber diskret nattelys og fremhæver hexagon-mønstre.</li>
        <li>CO₂-neutrale fliser: Producenter som Florim® tilbyder klimakompenserede kollektioner.</li>
      </ul>

              <h3 class="text-2xl font-semibold mt-8">Prisguide – hvad koster flisearbejde i Næstved?</h3>
      <div class="overflow-x-auto">
        <table class="min-w-full text-sm border border-gray-200">
          <thead class="bg-gray-50">
            <tr><th class="px-2 py-1">Post</th><th class="px-2 py-1">Enhed</th><th class="px-2 py-1">Prisintervall</th></tr>
          </thead>
          <tbody>
            <tr class="border-t"><td class="px-2 py-1">Forberedelse (primer + spartel)</td><td class="px-2 py-1">m²</td><td class="px-2 py-1">110-170 kr.</td></tr>
            <tr class="border-t"><td class="px-2 py-1">Fliselægning standard 30×60 cm</td><td class="px-2 py-1">m²</td><td class="px-2 py-1">350-500 kr.</td></tr>
            <tr class="border-t"><td class="px-2 py-1">XL-fliser &gt; 60×120 cm</td><td class="px-2 py-1">m²</td><td class="px-2 py-1">450-650 kr.</td></tr>
            <tr class="border-t"><td class="px-2 py-1">Mosaik på net</td><td class="px-2 py-1">m²</td><td class="px-2 py-1">550-750 kr.</td></tr>
            <tr class="border-t"><td class="px-2 py-1">Epoxyfuge</td><td class="px-2 py-1">løbende m</td><td class="px-2 py-1">45-60 kr.</td></tr>
            <tr class="border-t"><td class="px-2 py-1">Silikonefuge</td><td class="px-2 py-1">løbende m</td><td class="px-2 py-1">35-50 kr.</td></tr>
            <tr class="border-t"><td class="px-2 py-1">El-gulvvarme</td><td class="px-2 py-1">m²</td><td class="px-2 py-1">260-320 kr.</td></tr>
          </tbody>
        </table>
      </div>
              <p class="mt-2">Tip: Kombinér flisearbejde Næstved med vores badeværelsesrenovering og spar op til 12 % på samlet arbejdsløn.</p>

      <h3 class="text-2xl font-semibold mt-8">Tilskud & fradrag</h3>
      <ul class="list-disc ml-6 space-y-2">
        <li>Håndværkerfradrag (2025) – op til 12 900 kr. pr. voksen på arbejdsløn ved indendørs flisearbejde.</li>
        <li>Bygningspuljen – Gulvvarme og ekstra isolering kan give 15-25 % tilskud, hvis energimærke forbedres.</li>
        <li>Skattefradrag for tilgængelighed – Ombygning til plan bruseniche kan give støtte ved handicaptilpasning.</li>
      </ul>

      <h3 class="text-2xl font-semibold mt-8">FAQ – det spørger kunder om</h3>
      <details class="border rounded-md p-4 mb-2"><summary class="cursor-pointer font-medium">Hvor hurtigt kan I starte?</summary><p>Normalt inden for 10-14 dage, men akutte reparationer kan ofte klares samme uge.</p></details>
      <details class="border rounded-md p-4 mb-2"><summary class="cursor-pointer font-medium">Hvilken fugetype bør jeg vælge?</summary><p>Epoxyfuge til udsatte zoner som bruser og storkøkken; cementbaseret fuger er billigere og nemmere at reparere.</p></details>
      <details class="border rounded-md p-4 mb-2"><summary class="cursor-pointer font-medium">Kan jeg lægge fliser oven på fliser?</summary><p>Ja, hvis underlaget er plant og fliserne sidder fast. Vi primer med hæftemørtel og reducerer byggehøjden med kun 3-4 mm.</p></details>
      <details class="border rounded-md p-4 mb-2"><summary class="cursor-pointer font-medium">Hvordan undgår jeg revner i storformatfliser?</summary><p>Vi bruger levelling-system, butter-back teknik og klasse C2te S1 klæb, der reducerer spændinger.</p></details>
      <details class="border rounded-md p-4 mb-2"><summary class="cursor-pointer font-medium">Er natursten frostsikker?</summary><p>Skifer og granit er frostbestandige; marmor bør kun lægges indendørs eller overdækket.</p></details>

      <h3 class="text-2xl font-semibold mt-8">Vedligeholdelse – sådan holder dine fliser sig som nye</h3>
      <ul class="list-disc ml-6 space-y-1">
        <li>Daglig rengøring: pH-neutral sæbe, ingen syre på natursten.</li>
        <li>Fugesikring: Voks- eller nano-forsegling reducerer misfarvning.</li>
        <li>Årlig eftersyn: Kontrol af silikonefuger, især ved glasvægge og brusehjørne.</li>
        <li>Frostsikring (udendørs): Sørg for fald på mindst 1,5 % og årlig rens af dræn.</li>
      </ul>

      <h3 class="text-2xl font-semibold mt-8">Kontakt os</h3>
      <p>Telefon: <a href="tel:+4527851381" class="font-bold text-terracotta">+27 85 13 81</a></p>
              <p>E-mail: <a href="mailto:infomurernæstved@gmail.com">infomurernæstved@gmail.com</a></p>
              <p>Serviceområde: Næstved, Vordingborg, Præstø, Faxe, Køge, Haslev og omegn</p>
      <p>Udfyld formularen “Få et uforpligtende tilbud” – vi vender tilbage samme hverdag!</p>

              <p class="mt-6">Professionelt flisearbejde Næstved sikrer millimeterpræcision, skimmelfri fuger og et resultat, der tåler hverdagens slid – kontakt os i dag, og lad os lægge grund­stenene til dit næste drømmeprojekt!</p>
    </section>
  `;

  return (
    <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default TileWorkContent; 