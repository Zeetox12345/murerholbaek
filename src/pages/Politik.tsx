
import React from 'react';
import { PHONE_DISPLAY } from "@/lib/constants";

const Politik = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-montserrat font-bold text-4xl mb-8 text-charcoal">
            Privatlivspolitik & Cookies
          </h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-montserrat font-semibold text-2xl mb-4">Privatlivspolitik</h2>
              <p className="text-gray-700 mb-4">
                Hos <strong>Murer&nbsp;Næstved</strong> værner vi om dit privatliv. Når du
                kontakter os via vores hjemmeside eller telefon, behandler vi kun
                de personoplysninger, der er nødvendige for at kunne levere den
                service, du har bedt om.
              </p>
              <p className="text-gray-700 mb-4">
                Oplysningerne anvendes til:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>at besvare forespørgsler og udarbejde tilbud</li>
                <li>at planlægge og udføre aftalt arbejde</li>
                <li>fakturering samt bogføring i henhold til gældende lovgivning</li>
                <li>markedsføring, hvis du har givet udtrykkeligt samtykke hertil</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Retsgrundlaget for vores behandling er databeskyttelsesforordningens
                artikel&nbsp;6, stk.&nbsp;1, litra&nbsp;b&nbsp;(opfyldelse af kontrakt) og litra&nbsp;c
                (retlig forpligtelse). Oplysningerne opbevares så længe, det er
                nødvendigt, og som minimum i den periode bogføringsloven kræver.
                Vi videregiver kun oplysninger til betroede samarbejdspartnere
                (fx underleverandører og revisor) og kun, når det er nødvendigt.
              </p>
              <p className="text-gray-700 mb-4">
                Du har til enhver tid ret til indsigt, berigtigelse, sletning eller
                begrænsning af behandlingen. Henvendelser rettes til os via de
                kontaktoplysninger, der fremgår nederst på siden. Du kan også
                klage til <a href="https://www.datatilsynet.dk" target="_blank" rel="noopener noreferrer" className="underline">Datatilsynet</a>.
              </p>
            </section>

            <section>
              <h2 className="font-montserrat font-semibold text-2xl mb-4">Cookiepolitik</h2>
              <p className="text-gray-700 mb-4">
                Vores hjemmeside anvender cookies – små tekstfiler, der gemmes på
                din enhed – for at få siden til at fungere, forbedre brugeroplevelsen
                og indsamle anonym statistik. Nogle cookies er teknisk nødvendige
                (fx for at huske dine præferencer), mens andre benyttes til
                analyse&nbsp;(vi anvender <span className="italic">Google&nbsp;Analytics</span>)
                og markedsføring.
              </p>
              <p className="text-gray-700 mb-4">
                Du kan til enhver tid slette eller blokere cookies i din browser.
                Vejledning hertil findes i hjælpen til din browser. Hvis du vælger at
                afvise cookies, kan funktionaliteten på hjemmesiden være begrænset.
              </p>
              <p className="text-gray-700 mb-4">
                Cookies fra tredjepart (fx&nbsp;YouTube-videoer eller kort fra Google Maps)
                sættes kun, når du aktivt interagerer med det pågældende indhold.
              </p>
            </section>

            <section>
              <h2 className="font-montserrat font-semibold text-2xl mb-4">Kontakt</h2>
              <p className="text-gray-700 mb-4">
                Hvis du har spørgsmål til vores behandling af personoplysninger, 
                kan du kontakte os på:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Murer Næstved</strong></p>
      <p>E-mail: infomurernæstved@gmail.com</p>
                <p>Telefon: {PHONE_DISPLAY}</p>
              </div>
            </section>

            <section className="mt-8 pt-8 border-t">
              <p className="text-sm text-gray-500">
                Sidst opdateret: Juli 2025
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Politik;
