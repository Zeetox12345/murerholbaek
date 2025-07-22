import React from "react";

const FacadeRenovationContent: React.FC = () => {
  const htmlContent = `
    <section class="content-section space-y-6">
      <h2 class="text-3xl font-semibold">Facaderenovering Holbæk – Styrk huset og spar energi</h2>
              <p>Har din murstensfacade set bedre dage? Frostsprængte fuger, afskalninger og mørke fugtpletter er ikke kun et æstetisk problem – de kan føre til kuldebroer, skimmelsvamp og dyrere varmeregninger. På denne side får du det komplette overblik over facaderenovering Holbæk: metoder, materialer, priseksempler, tilskud og praktiske tips til et varigt resultat.</p>

      <h3 class="text-2xl font-semibold mt-8">Hvorfor er facaderenovering i Holbæk særlig vigtig?</h3>
      <ul class="list-disc ml-6 space-y-2">
        <li>Forebygger fugtskader – tætte fuger og diffusionsåben puds holder vandet ude.</li>
        <li>Reducerer varmetab – nye fuger + evt. facadeisolering nedbringer U-værdien.</li>
        <li>Forlænger levetiden – korrekt mørtelblanding matcher dine teglsten og undgår spændinger.</li>
        <li>Øger boligens salgsværdi – en velholdt facade signalerer sundt hus og mindre vedligehold.</li>
      </ul>

      <h3 class="text-2xl font-semibold mt-8">De tre mest brugte metoder til facaderenovering Holbæk</h3>
      <div class="overflow-x-auto">
        <table class="min-w-full text-sm border border-gray-200">
          <thead class="bg-gray-50">
            <tr><th class="px-3 py-2">Metode</th><th class="px-3 py-2">Hvornår bruges den?</th><th class="px-3 py-2">Fordele</th><th class="px-3 py-2">Ca. pris*</th></tr>
          </thead>
          <tbody>
            <tr class="border-t"><td class="px-3 py-2 font-medium">Omfugning</td><td class="px-3 py-2">Fugerne er krakelerede eller smuldrer</td><td class="px-3 py-2">Billigst pr. m², bevarer originalt murværk</td><td class="px-3 py-2">550-700 kr./m²</td></tr>
            <tr class="border-t"><td class="px-3 py-2 font-medium">Vandskuring</td><td class="px-3 py-2">Overfladen er ujævn, men tegl er intakte</td><td class="px-3 py-2">Ensartet look, skjuler reparationer</td><td class="px-3 py-2">650-900 kr./m²</td></tr>
            <tr class="border-t"><td class="px-3 py-2 font-medium">Netpuds / facadeisolering</td><td class="px-3 py-2">Revner i mursten, behov for efterisolering</td><td class="px-3 py-2">Høj energieffekt, moderniserer udtryk</td><td class="px-3 py-2">1.100-1.600 kr./m²</td></tr>
          </tbody>
        </table>
      </div>
      <p class="mt-2 text-sm italic">*Priser inkluderer stillads, afdækning og oprydning; ekskl. moms.</p>

      <h4 class="text-xl font-semibold mt-8">Omfugning – facadens livsforlængende vitamin</h4>
      <ul class="list-decimal ml-6 space-y-1">
        <li>Fjerne gamle fuger med roterende fræser (5-6 mm dybde).</li>
        <li>Rense støv med trykluft og støvsuger.</li>
        <li>Ny mørtel vælges efter stenens sugeevne (KC 50/50/700 til moderne tegl, NHL 3.5 til ældre kalksten).</li>
        <li>Eftervanding i 3-5 døgn sikrer hærdning.</li>
      </ul>
      <p class="mt-2">Tip: Kombinér omfugning med hulmursisolering for optimal energigevinst.</p>

      <h4 class="text-xl font-semibold mt-6">Vandskuring – silkeblød strukturoverflade</h4>
      <ul class="list-disc ml-6 space-y-1">
        <li>Fortyndet puds (1:1 mørtel og vand) påføres med mursten eller stålbræt.</li>
        <li>Giver en halvtransparent finish, hvor teglens farve anes.</li>
        <li>Kan pigmenteres – fx lys grå for moderne look.</li>
        <li>Forlæng holdbarhed med silikatmaling efter 14 dage.</li>
      </ul>

      <h4 class="text-xl font-semibold mt-6">Netpuds – stærk, isolerende skal</h4>
      <ul class="list-disc ml-6 space-y-1">
        <li>Påføring af EPS-plader (30-100 mm) klæbet med mineralmørtel.</li>
        <li>Glasfibernet indlejres i første pudslag → forhindrer revner.</li>
        <li>Slutpuds i ønsket kornstørrelse (1,5–3 mm).</li>
        <li>Mulighed for hydrofob coating mod alger og graffiti.</li>
      </ul>

      <h3 class="text-2xl font-semibold mt-10">Sådan forløber dit projekt – trin for trin</h3>
      <ol class="list-decimal ml-6 space-y-2">
        <li>Gratis facadetjek (0-2 dage): Ring <a href="tel:+27851381" class="text-terracotta font-semibold">+27 85 13 81</a>, så kommer en facaderenovering Holbæk-ekspert forbi og laserscanner muren for revner og fugt.</li>
        <li>Detaljeret tilbud (2-4 dage): Fast pris pr. m², tidsplan, stilladsplan, affaldshåndtering og betalingsmilepæle.</li>
        <li>Myndighedsgodkendelse (hvis krævet): Farveskift og facadeisolering mod offentlig vej kræver i visse zoner tilladelse fra Holbæk Kommune – vi klarer papirarbejdet.</li>
        <li>Udførelse (1-10 dage): Stillads op, afdæk vinduer, mekanisk rens, udfør valgt metode.</li>
        <li>Aflevering & garanti: Gennemgang med dig samt 5 års BygGaranti. Du modtager vedligeholdelsesvejledning.</li>
      </ol>

      <h3 class="text-2xl font-semibold mt-10">Hvor meget kan jeg spare på varmeregningen?</h3>
      <ul class="list-disc ml-6 space-y-1">
        <li>Omfugning: 3-5 % reduktion (mindre træk).</li>
        <li>Vandskuring + hulmursisolering: 8-12 %.</li>
        <li>Netpuds m. 100 mm EPS: Op til 25 %.</li>
      </ul>
      <p>Holbæk hører til klimazone 3; her er tilbagebetalingstiden for facadeisolering typisk 8-12 år.</p>

      <h3 class="text-2xl font-semibold mt-10">Tilskud og fradrag til facaderenovering i Holbæk</h3>
      <ul class="list-disc ml-6 space-y-1">
        <li>Håndværkerfradraget – op til 12.900 kr. pr. voksen til arbejdsløn (2025-satser).</li>
        <li>Energistyrelsens Bygningspulje – facader med energiforbedring kan få 15-25 % tilskud; kræver energimærke før/efter.</li>
        <li>Realkreditlån – facadeisolering kan finansieres via tillægslån pga. øget ejendomsværdi.</li>
      </ul>

      <h3 class="text-2xl font-semibold mt-10">Ofte stillede spørgsmål (FAQ)</h3>
      <details class="border rounded-md p-4 mb-2"><summary class="cursor-pointer font-medium">Hvor lang tid tager en facaderenovering?</summary><p>En typisk <strong>facaderenovering Holbæk</strong> på 140 m² tager 5-8 arbejdsdage inkl. stillads og oprydning.</p></details>
      <details class="border rounded-md p-4 mb-2"><summary class="cursor-pointer font-medium">Kan man renovere facade om vinteren?</summary><p>Ja, men temperaturen skal holdes over 5 °C; vi anvender vintermørtel og telt med varmeblæsere for at sikre hærdning.</p></details>
      <details class="border rounded-md p-4 mb-2"><summary class="cursor-pointer font-medium">Hvilken mørteltype er bedst?</summary><p>Til moderne tegl anbefales KC 50/50/700; til ældre kalksten skal du vælge en ren kalkmørtel som NHL 3.5 for at undgå afskalninger.</p></details>
      <details class="border rounded-md p-4 mb-2"><summary class="cursor-pointer font-medium">Kan jeg selv fugte muren efter omfugning?</summary><p>Ja, let dusch morgen og aften i 3 dage hjælper hærdningen – men undgå højtryksspuler.</p></details>
      <details class="border rounded-md p-4 mb-2"><summary class="cursor-pointer font-medium">Giver I garanti?</summary><p>Vi tilbyder 5 års BygGaranti på alt arbejde og op til 30 års materialegaranti på godkendte puds- og isoleringssystemer.</p></details>

      <h3 class="text-2xl font-semibold mt-10">Vedligeholdelsestips</h3>
      <ul class="list-disc ml-6 space-y-1">
        <li>Visuel kontrol hver forår: revner &gt; 0,2 mm bør udbedres.</li>
        <li>Algefjerning: pH-neutral midlet hvert 3. år på nordsider.</li>
        <li>Tagrender/nedløb: hold dem rene – vand, der sprøjter på murværket, fremskynder slid.</li>
        <li>Silan-imprægnering efter vandskuring forlænger levetiden med 5-10 år.</li>
      </ul>

      <h3 class="text-2xl font-semibold mt-10">Kontakt os i dag</h3>
      <p>Telefon: <a href="tel:+4527851381" class="font-bold text-terracotta">+27 85 13 81</a></p>
              <p>E-mail: <a href="mailto:infomurerholbaek@gmail.com">infomurerholbaek@gmail.com</a></p>
      <p>Serviceområde: Holbæk, Kalundborg, Odsherred, Lejre, Ringsted, Sorø og omegn</p>
      <p>Gratis facadetjek: Udfyld formularen “Få et uforpligtende tilbud” – vi svarer inden for 24 timer.</p>

      <p class="mt-8">Der er ingen grund til at leve med en træt facade. Med en professionel facaderenovering Holbæk får du et sundere, mere energieffektivt og flottere hjem – og det starter med et enkelt opkald.</p>
    </section>
  `;

  return (
    <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default FacadeRenovationContent; 