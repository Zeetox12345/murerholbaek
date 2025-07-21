
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Clock, Users, Award, Star, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import QuoteForm from '@/components/QuoteForm';
import { PHONE_DISPLAY, PHONE_LINK } from "@/lib/constants";
import SEOContent, { faqItems } from "@/components/SEOContent";

const Index = () => {
  useEffect(() => {
    document.title = "Murer Næstved | Murermester – Facaderenovering, Badeværelse & Tilbygninger";
    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Din erfarne murer i Næstved. Vi udfører facaderenovering, badeværelsesrenovering, flisearbejde og tilbygninger. Få GRATIS tilbud – ring +27 85 13 81.');
    }
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-charcoal via-charcoal/95 to-charcoal/90 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/mason-2376322.jpg')"
          }}
          aria-hidden="true"
        />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-20">
            <div className="lg:col-span-2">
              <div className="animate-fade-in-up">
                <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                  Murer Næstved – Lokalt murermesterteam med garanti
                </h1>
                <h2 className="text-xl md:text-2xl mb-8 text-gray-200 font-medium max-w-3xl">
                  Vi hjælper private & erhverv i hele Næstved-området med alt fra energirigtig facaderenovering og eksklusive badeværelser til millimeterpræcist flisearbejde og nøglefærdige tilbygninger.
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-yellow-500 hover:bg-yellow-400 text-charcoal font-semibold text-lg px-8 py-4"
                  >
                    <a href={`tel:${PHONE_LINK}`} className="inline-flex items-center">
                      <Phone className="w-5 h-5 mr-2" />
                      Ring {PHONE_DISPLAY}
                    </a>
                  </Button>
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-white text-charcoal hover:bg-gray-100"
                  >
                    <a href="#services">Se Vores Services</a>
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-terracotta">10+</div>
                    <div className="text-sm text-gray-300">Års erfaring</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-terracotta">500+</div>
                    <div className="text-sm text-gray-300">Projekter</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-terracotta">24t</div>
                    <div className="text-sm text-gray-300">Svartid</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sticky Quote Form */}
            <div className="lg:block">
              <div className="sticky-form">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Copy Section */}
      <section className="py-12 bg-off-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl space-y-6 text-gray-700">
                      <h2 className="font-montserrat font-bold text-2xl text-charcoal">Hvorfor vælge en lokal murer i Næstved?</h2>
          <p>
            Næstveds særlige klimaforhold stiller krav til alt fra fugtsikring til materialevalg. Som lokal murermester kender vi de gældende byggestandarder, myndighedskrav og de typiske murstenstyper i området. Det betyder mere holdbare løsninger, færre overraskelser og kort responstid, når du kontakter os på {PHONE_DISPLAY}.
          </p>

          <h2 className="font-montserrat font-bold text-2xl text-charcoal">Vores kerneydelser</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border border-gray-200 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 font-semibold">Ydelse</th>
                  <th className="px-4 py-2">Typiske opgaver</th>
                  <th className="px-4 py-2">Fordele</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2 font-medium">Facaderenovering</td>
                  <td className="px-4 py-2">Vandskuring, omfugning, netpuds</td>
                  <td className="px-4 py-2">Forlænger levetiden, reducerer varmetab</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2 font-medium">Badeværelses­renovering</td>
                  <td className="px-4 py-2">Nyt vådrum, fliseopsætning, gulvvarme</td>
                  <td className="px-4 py-2">Øger boligværdien, bedre fugtsikring</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2 font-medium">Tilbygninger & Nybyg</td>
                  <td className="px-4 py-2">Garage, udestue, ekstra etage</td>
                  <td className="px-4 py-2">Skræddersyede løsninger, byggestyring</td>
                </tr>
                <tr className="border-t">
                                      <td className="px-4 py-2 font-medium">Flisearbejde Næstved</td>
                  <td className="px-4 py-2">Køkken­fliser, klinker, natursten</td>
                  <td className="px-4 py-2">Millimeterpræcision, slidstærke fuger</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-16 bg-off-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4 text-charcoal">
              Vores Specialer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi tilbyder professionelle murerløsninger til både private og erhvervskunder i Næstved og omegn.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Facaderenovering',
                description: 'Professionel renovering af facader med fokus på kvalitet og holdbarhed.',
                image: '/facaderenovering.jpg',
                link: '/services/facaderenovering'
              },
              {
                title: 'Badeværelsesrenovering',
                description: 'Komplette badeværelsesrenovering og professionelt flisearbejde.',
                image: '/badevaerelserenovering.jpg',
                link: '/services/badevaerelsesrenovering'
              },
              {
                title: 'Flisearbejde',
                description: 'Eksperter i fliser & klinker – skarpe linjer og holdbare fuger.',
                image: '/flisearbejde.jpg',
                link: '/services/flisearbejde'
              }
            ].map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={`${service.title} - Murer Næstved`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button asChild variant="secondary">
                      <Link to={service.link}>
                        Læs mere <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-montserrat text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={service.link}>Få Tilbud</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4 text-charcoal">
              Sådan Arbejder Vi
            </h2>
            <p className="text-lg text-gray-600">
              En simpel og gennemsigtig proces fra første kontakt til færdigt projekt.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Phone, title: 'Kontakt', description: 'Ring eller skriv til os for en uforpligtende snak' },
              { icon: Users, title: 'Besigtigelse', description: 'Vi kommer ud og ser på opgaven - gratis og uforpligtende' },
              { icon: CheckCircle, title: 'Tilbud', description: 'Du får et detaljeret tilbud inden for 24 timer' },
              { icon: Award, title: 'Udførelse', description: 'Vi udfører arbejdet professionelt og til tiden' }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-terracotta rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-montserrat font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Longform Content */}
      <SEOContent />

      {/* Trust Badges */}
      <section className="py-12 bg-off-white border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="text-center">
              <div className="text-2xl font-bold text-terracotta">BygGaranti</div>
              <div className="text-sm text-gray-600">Medlem</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-terracotta">10+</div>
              <div className="text-sm text-gray-600">Års erfaring</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-terracotta">Autoriseret</div>
              <div className="text-sm text-gray-600">Murermester</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-terracotta">Forsikret</div>
              <div className="text-sm text-gray-600">Arbejde</div>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Murer Næstved",
            "description": "Professionel murermester i Næstved med speciale i facaderenovering, badeværelser og flisearbejde",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Murer Næstved",
                "telephone": PHONE_LINK,
                "email": "infomurernæstved@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Næstved",
                "addressRegion": "Sjælland",
                "addressCountry": "DK"
              }
            },
            "areaServed": "Næstved",
            "serviceType": "Murermester"
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqItems.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.answer
                }
              }))
            }
          ])
        }}
      />
    </>
  );
};

export default Index;
