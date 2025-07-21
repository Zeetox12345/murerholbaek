import React, { useEffect } from 'react';
import { Phone } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import { PHONE_DISPLAY, PHONE_LINK } from '@/lib/constants';
import { Button } from '@/components/ui/button';

const Kontakt = () => {
  useEffect(() => {
    document.title = "Kontakt | Murer Næstved - Få et uforpligtende tilbud";
  }, []);

  return (
    <div className="bg-off-white py-16 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-montserrat font-bold text-4xl mb-12 text-charcoal text-center">
          Kontakt os
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Quote Form */}
          <QuoteForm />

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-lg text-gray-700">
              Har du spørgsmål eller ønsker du et tilbud på dit projekt? Du er altid velkommen til at kontakte os direkte.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-terracotta hover:bg-terracotta/90 text-white w-fit"
            >
              <a href={`tel:${PHONE_LINK}`} className="inline-flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Ring {PHONE_DISPLAY}</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontakt; 