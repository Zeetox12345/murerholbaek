import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { PHONE_DISPLAY, PHONE_LINK } from "@/lib/constants";

interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "Hvor hurtigt kan I starte?",
    answer: "Som regel inden for 14 dage; akutte sager håndteres samme uge."
  },
  {
    question: "Skal jeg selv søge byggetilladelse?",
    answer: "Nej, vi kan klare hele byggesagen for et mindre gebyr."
  },
  {
    question: "Hvordan foregår betalingen?",
    answer: "Bankoverførsel i rater; MobilePay ved små reparationer."
  },
  {
    question: "Hvad hvis I finder skjulte skader?",
    answer: "Vi dokumenterer med billeder og fremlægger fast tillægspris, før vi fortsætter."
  },
  {
    question: "Giver I garanti?",
    answer: "Ja, 5 års BygGaranti samt 30 års materialegaranti på udvalgte tegl."
  }
];

const SEOContent = () => {
  return (
    <>
      {/* Intro */}
      <section id="intro" className="content-section container mx-auto px-4 sm:px-6 lg:px-8 my-16 max-w-prose">
              <h1 className="text-3xl lg:text-4xl font-semibold mb-4">Murer&nbsp;Holbæk – Din komplette guide til stærkt, langtidsholdbart murerarbejde</h1>
      <p className="mb-4">Velkommen til Holbæks mest omfattende ressource om professionelt murerarbejde. Her finder du alt, du skal vide, før du hyrer en <strong>murer Holbæk</strong> – fra konkrete priseksempler og materialevalg til tips om myndighedskrav, klimasikring og energibesparelse. Formålet er at give dig et solidt beslutningsgrundlag, så du kan vælge den rigtige løsning og undgå dyre fejltagelser.</p>
      </section>

      {/* Why local */}
      <section id="why-local" className="content-section container mx-auto px-4 sm:px-6 lg:px-8 my-16 max-w-prose">
        <h2 className="text-2xl font-semibold mb-3">Hvorfor vælge en lokal murer i Holbæk?</h2>
        <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Materialerne</strong> – De røde Holbæk-sten, kalksandsten og gule flensburgersten varierer i sugeevne og kræver forskellige mørteltyper.</li>
        <li><strong>Kommunens byggeregler</strong> – Holbæk Kommune har skærpede krav til kystnært byggeri, bebyggelsesprocenter i sommerhusområder og afstand til skel.</li>
          <li><strong>Leverandørnetværket</strong> – Hurtig levering af specialbrændte sten, stillads og letklinkerblokke sparer dig både tid og penge.</li>
          <li><strong>Responstiden</strong> – Akutte fugtskader eller frostsprængte fuger kan oftest udbedres samme uge – nogle gange samme dag.</li>
        </ul>
      </section>

      {/* Top tasks table */}
      <section id="top-tasks" className="content-section container mx-auto px-4 sm:px-6 lg:px-8 my-16 overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4">De 5 mest efterspurgte mureropgaver i Holbæk</h2>
        <table className="min-w-full text-sm border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left">Opgave</th>
              <th className="px-3 py-2 text-left">Kort beskrivelse</th>
              <th className="px-3 py-2">Tidsforbrug</th>
              <th className="px-3 py-2">Ca. pris*</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-3 py-2 font-medium"><Link to="/services/facaderenovering" className="text-terracotta hover:underline">Facaderenovering</Link></td>
              <td className="px-3 py-2">Vandskuring, omfugning, netpuds</td>
              <td className="px-3 py-2">5-10 dage</td>
              <td className="px-3 py-2">550-800 kr./m²</td>
            </tr>
            <tr className="border-t">
              <td className="px-3 py-2 font-medium"><Link to="/services/badevaerelsesrenovering" className="text-terracotta hover:underline">Badeværelses­renovering</Link></td>
              <td className="px-3 py-2">Total vådrum inkl. VVS & el</td>
              <td className="px-3 py-2">3-5 uger</td>
              <td className="px-3 py-2">110.000-220.000 kr.</td>
            </tr>
            <tr className="border-t">
              <td className="px-3 py-2 font-medium">Tilbygning / garage</td>
              <td className="px-3 py-2">Sokkel, råhus, inder/ydre vægge</td>
              <td className="px-3 py-2">4-8 uger</td>
              <td className="px-3 py-2">6.500-9.500 kr./m²</td>
            </tr>
            <tr className="border-t">
              <td className="px-3 py-2 font-medium"><Link to="/services/flisearbejde" className="text-terracotta hover:underline">Flisearbejde</Link></td>
              <td className="px-3 py-2">Gulv- &amp; vægfliser, natursten</td>
              <td className="px-3 py-2">1-4 dage</td>
              <td className="px-3 py-2">550-950 kr./m²</td>
            </tr>
            <tr className="border-t">
              <td className="px-3 py-2 font-medium">Fugtsikring</td>
              <td className="px-3 py-2">Kemisk injektion &amp; omfangsdræn</td>
              <td className="px-3 py-2">3-7 dage</td>
              <td className="px-3 py-2">25.000-70.000 kr.</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2 text-sm italic">*Erfaringspriser; varierer efter adgang, materialer og sæson.</p>
      </section>

      {/* 3. Sådan forløber et murerprojekt */}
      <section id="process" className="content-section container mx-auto px-4 sm:px-6 lg:px-8 my-16 max-w-prose">
        <h2 className="text-2xl font-semibold mb-4">Sådan forløber et murerprojekt – trin for trin</h2>
        <ol className="list-decimal ml-6 space-y-3">
          <li>
            <strong>Gratis rådgivning &amp; opmåling:</strong> Ring <a href={`tel:${PHONE_LINK}`} className="text-terracotta font-semibold">{PHONE_DISPLAY}</a> eller udfyld tilbudsformularen. En lokal murer fra Holbæk møder op og gennemgår alt fra fundament til skorsten.
          </li>
          <li>
            <strong>Tilbud &amp; tidsplan:</strong> Du modtager et skriftligt tilbud med fast pris, realistisk tidslinje og betalingsmilepæle.
          </li>
          <li>
            <strong>Myndighedsansøgning:</strong> Tilbygninger &gt; 50 m² eller facadeændringer mod vej kræver byggetilladelse – vi tager dialogen med kommunen.
          </li>
          <li>
            <strong>Materialevalg:</strong>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Mursten: håndstrøgne, maskinsten eller genbrug.</li>
              <li>Mørtel: KC 50/50/700, NHL 3.5 eller farvet mørtel.</li>
              <li>Fliser: keramik, porcelæn, natursten, terrazzo.</li>
            </ul>
          </li>
          <li>
            <strong>Udførelse &amp; tilsyn:</strong> Daglig oprydning, affaldssortering og kvalitetskontrol af fuge-dybde, lod og vinkel.
          </li>
          <li>
            <strong>Aflevering &amp; garanti:</strong> Vi gennemgår arbejdet med laserscanner, udsteder BygGaranti og leverer en serviceplan til forebyggende vedligehold.
          </li>
        </ol>
      </section>

      {/* 4. Materialer, metoder og miljø */}
      <section id="materials" className="content-section container mx-auto px-4 sm:px-6 lg:px-8 my-16 max-w-prose">
        <h2 className="text-2xl font-semibold mb-4">Materialer, metoder og miljø i 2025</h2>
        <h3 className="text-xl font-semibold mt-6 mb-2">Mursten &amp; blokke</h3>
        <p>Håndstrøgne blødstrøgne sten: levende struktur, men høj vandabsorbering → kræver diffusionsåben puds.</p>
        <p>Skærpede tegl: giver knivskarpe fuger til moderne huse.</p>
        <p>Letklinkerblokke: populære til fundamenter pga. lav vægt og god isolering.</p>
        <h3 className="text-xl font-semibold mt-6 mb-2">Mørtel &amp; fuger</h3>
        <p>KC-mørtel er standard til nybyg.</p>
        <p>Ren kalkmørtel anvendes i bevaringsværdige huse for at undgå spændinger.</p>
        <p>Farvet mørtel kan tone facaden uden maling.</p>
        <h3 className="text-xl font-semibold mt-6 mb-2">Isolering</h3>
        <p>Granuleret glasuld blæst i hulmur giver op til 25 % lavere varmeforbrug.</p>
        <p>Facadeisolering med netpuds kombinerer energiforbedring og moderne udtryk.</p>
        <h3 className="text-xl font-semibold mt-6 mb-2">Klimasikring</h3>
        <p>Holbæk har mere end 100 regnvejrsdage om året. Vælg høj sokkel, kapillarbrydende lag og tagrender Ø100 mm for at undgå fugtskader.</p>
      </section>

      {/* 5. Prisguide */}
      <section id="prices" className="content-section container mx-auto px-4 sm:px-6 lg:px-8 my-16 overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4">Prisguide: Hvad koster en murer i Holbæk?</h2>
        <table className="min-w-full text-sm border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left">Arbejde</th>
              <th className="px-3 py-2">Timepris</th>
              <th className="px-3 py-2 text-left">Fastpris-eksempler</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-3 py-2 font-medium">Standard murerarbejde</td>
              <td className="px-3 py-2">480-550 kr.</td>
              <td className="px-3 py-2">Nye fuger på 25 m² facade fra 18.000 kr.</td>
            </tr>
            <tr className="border-t">
              <td className="px-3 py-2 font-medium">Vådrumsspecialist</td>
              <td className="px-3 py-2">550-650 kr.</td>
              <td className="px-3 py-2">Badeværelse 5 m² total fra 115.000 kr.</td>
            </tr>
            <tr className="border-t">
              <td className="px-3 py-2 font-medium">Flisemurer</td>
              <td className="px-3 py-2">500-600 kr.</td>
              <td className="px-3 py-2">Gulvfliser 20 m² natursten fra 24.000 kr.</td>
            </tr>
            <tr className="border-t">
              <td className="px-3 py-2 font-medium">Lærling/hjælper</td>
              <td className="px-3 py-2">280-320 kr.</td>
              <td className="px-3 py-2">Afrensning af puds 60 m² fra 9.000 kr.</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2">Tip: Indhent minimum to tilbud, men undgå “sort arbejde”. Autoriserede murere er dækket af BygGaranti – din sikkerhed, hvis noget går galt.</p>
      </section>

      {/* 6. Energibesparelse & bæredygtighed */}
      <section id="sustainability" className="content-section container mx-auto px-4 sm:px-6 lg:px-8 my-16 max-w-prose">
        <h2 className="text-2xl font-semibold mb-4">Energibesparelse &amp; bæredygtighed</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Genbrugsmursten reducerer CO₂-aftrykket med ca. 60 %.</li>
          <li>Kalkbaseret mørtel forbedrer indeklimaet ved at lade murværket ånde.</li>
          <li>Solcelletagsten integreres ubemærket og sænker el-regningen.</li>
          <li>Regnvandsopsamling aflaster kloakken og giver gratis havevanding.</li>
        </ul>
      </section>

      {/* 7. Case Study */}
      <section id="case-study" className="content-section container mx-auto px-4 sm:px-6 lg:px-8 my-16 max-w-prose">
        <h2 className="text-2xl font-semibold mb-4">Case study – fra slidt 70’er-villa til energirigtig perle</h2>
        <p><strong>Adresse:</strong> Centrum, Holbæk</p>
        <p><strong>Projekt:</strong> Facaderenovering + hulmurs­isolering</p>
        <p><strong>Varighed:</strong> 8 uger</p>
        <p><strong>Resultat:</strong> Kælderens luftfugtighed faldt fra 72 % til 58 %. Varmeregningen faldt 17 %.</p>
        <blockquote className="border-l-4 border-terracotta pl-4 italic my-4">"Vi søgte murer Holbæk og fandt dette team. Prisen holdt, tidsplanen blev overholdt, og huset ser ud som nyt. Kan varmt anbefales." – Mette &amp; Anders</blockquote>
      </section>

      {/* 9. Vedligeholdelse */}
      <section id="maintenance" className="content-section container mx-auto px-4 sm:px-6 lg:px-8 my-16 max-w-prose">
        <h2 className="text-2xl font-semibold mb-4">Vedligeholdelsesguide – sådan holder murværket i topform</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Årlig inspektion i foråret for revner &gt; 0,2 mm.</li>
          <li>Algefjerner på nordsiden hvert tredje år.</li>
          <li>Rens tagrender før vinter.</li>
          <li>Elastisk facademørtel til smårevner – undgå silikone, der lukker fugt inde.</li>
          <li>Diffusionsåben imprægnering efter facaderens, især på vindblæste gavle.</li>
        </ul>
      </section>

      {/* 10. Checklist */}
      <section id="checklist" className="content-section container mx-auto px-4 sm:px-6 lg:px-8 my-16 overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4">Tjekliste før du vælger din murer i Holbæk</h2>
        <table className="min-w-full text-sm border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left">Spørgsmål</th>
              <th className="px-3 py-2 text-left">Hvorfor?</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t"><td className="px-3 py-2">CVR-registreret?</td><td className="px-3 py-2">Sikrer lovlig drift og forsikring</td></tr>
            <tr className="border-t"><td className="px-3 py-2">Vådrums­certificering?</td><td className="px-3 py-2">Lovkrav til badeværelser</td></tr>
            <tr className="border-t"><td className="px-3 py-2">Lokale referencer?</td><td className="px-3 py-2">Beviser kvalitet i nærområdet</td></tr>
            <tr className="border-t"><td className="px-3 py-2">BygGaranti?</td><td className="px-3 py-2">Ekstra tryghed ved fejl</td></tr>
            <tr className="border-t"><td className="px-3 py-2">Skriftlig tidsplan?</td><td className="px-3 py-2">Minimerer forsinkelser</td></tr>
            <tr className="border-t"><td className="px-3 py-2">Fast samarbejde med VVS/el?</td><td className="px-3 py-2">Giver én kontaktperson</td></tr>
          </tbody>
        </table>
      </section>

      {/* 11. Contact */}
      <section id="contact" className="content-section container mx-auto px-4 sm:px-6 lg:px-8 my-16 max-w-prose">
        <h2 className="text-2xl font-semibold mb-4">Kontakt os</h2>
        <p>Telefon: <a href={`tel:${PHONE_LINK}`} className="text-terracotta font-semibold">{PHONE_DISPLAY}</a> (man-fre 07:00-18:00)</p>
        <p>E-mail: <a href="mailto:infomurerholbaek@gmail.com" className="underline">infomurerholbaek@gmail.com</a></p>
        <p>Serviceområde: Holbæk + 30 km (Kalundborg, Odsherred, Lejre, Ringsted, Sorø m.fl.)</p>
        
      </section>

      {/* 12. Afsluttende ord & CTA */}
      <section id="conclusion" className="content-section container mx-auto px-4 sm:px-6 lg:px-8 my-16 max-w-prose text-center">
        <h2 className="text-2xl font-semibold mb-4">Afsluttende ord</h2>
        <p className="mb-4">At finde den rette murer Holbæk handler om mere end pris: Det handler om lokalt kendskab, kvalitetshåndværk og en transparent proces fra første opkald til sidste fuge. Med prisguides, tjeklister og ekspertråd her på siden står du stærkt rustet til at træffe den rigtige beslutning.</p>
      </section>

      {/* Kontakt CTA (flyttet til slutningen som ekstra call) */}
      <section id="contact-cta" className="content-section container mx-auto px-4 sm:px-6 lg:px-8 my-16 text-center">
        <p className="text-lg font-medium">Har du spørgsmål? Ring til os på <a href={`tel:${PHONE_LINK}`} className="font-bold text-terracotta">{PHONE_DISPLAY}</a> eller udfyld formularen <em>“Få et uforpligtende tilbud nu”</em>. Vi vender tilbage samme hverdag!</p>
      </section>

      {/* FAQ */}
      <section id="faq" className="content-section container mx-auto px-4 sm:px-6 lg:px-8 my-16 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-6">Ofte stillede spørgsmål</h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, idx) => (
            <AccordionItem key={idx} value={`faq-${idx}`} className="border rounded-lg px-4">
              <AccordionTrigger className="font-medium text-left hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
};

export default SEOContent; 