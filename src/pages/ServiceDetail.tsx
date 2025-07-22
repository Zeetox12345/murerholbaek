
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Phone, CheckCircle, Clock, Euro } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import QuoteForm from '@/components/QuoteForm';
import { PHONE_DISPLAY, PHONE_LINK } from "@/lib/constants";
import FacadeRenovationContent from "@/components/FacadeRenovationContent";
import BathroomRenovationContent from "@/components/BathroomRenovationContent";
import TileWorkContent from "@/components/TileWorkContent";
import ExtensionContent from "@/components/ExtensionContent";

interface ServiceData {
  title: string;
  description: string;
  heroImage: string;
  benefits: string[];
  priceFactors: string[];
  timeline: string;
  seoTitle?: string;
  seoDescription?: string;
  ogTitle?: string;
  ogDescription?: string;
}

const ServiceDetail = () => {
  const { slug } = useParams();

  const services: Record<string, ServiceData> = {
    'facaderenovering': {
      title: 'Facaderenovering',
      description: 'Professionel renovering af facader med fokus på kvalitet og holdbarhed',
      heroImage: '/facaderenovering.jpg',
      benefits: [
        'Øget værdi på din ejendom',
        'Bedre isolering og energibesparelse',
        'Beskyttelse mod fugt og vejrlig',
        'Moderne og flot udseende'
      ],
      priceFactors: [
        'Facadens størrelse og tilstand',
        'Type af materialer',
        'Kompleksitet af arbejdet',
        'Stilladsbehov'
      ],
      timeline: '2-6 uger afhængig af projekt størrelse',
          seoTitle: 'Facaderenovering Holbæk | Omfugning, Vandskuring & Isolering – Gratis facadetjek',
    seoDescription: 'Faglig facaderenovering i Holbæk: omfugning, vandskuring, facadeisolering og netpuds. Få gratis facadescan og fast pris – ring +27 85 13 81.',
    ogTitle: 'Facaderenovering Holbæk – Giv huset nyt liv',
    ogDescription: 'Professionel facaderenovering i Holbæk. Spar energi og forlæng facadelevetiden. Kontakt os for gratis tjek.'
    },
    'badevaerelsesrenovering': {
      title: 'Badeværelsesrenovering',
      description: 'Komplette badeværelsesrenovering og professionelt flisearbejde',
      heroImage: '/badevaerelserenovering.jpg',
      benefits: [
        'Vandtæt og holdbar løsning',
        'Moderne design og funktionalitet',
        'Øget komfort og værdi',
        'Professionelt håndværk'
      ],
      priceFactors: [
        'Badeværelsets størrelse',
        'Valg af fliser og materialer',
        'VVS-arbejde inkluderet',
        'Kompleksitet af layout'
      ],
      timeline: '3-5 uger afhængig af størrelse',
          seoTitle: 'Badeværelsesrenovering Holbæk | Eksperter i vådrum – Fast pris & 3D-design',
    seoDescription: 'Komplet badeværelsesrenovering i Holbæk. Certificeret vådrum, gulvvarme, microcement & luksusfliser. Få 3D-tegning og uforpligtende tilbud.',
    ogTitle: 'Badeværelsesrenovering Holbæk – Skab drømmebadet',
    ogDescription: 'Vi bygger moderne badeværelser i Holbæk med garanti. Ring for gratis rådgivning +27 85 13 81.'
    },
    'flisearbejde': {
      title: 'Flisearbejde',
      description: 'Eksperter i fliser og klinker – millimeterpræcision og holdbare fuger',
      heroImage: '/flisearbejde.jpg',
      benefits: [
        'Perfekt fugeafslutning',
        'Skræddersyede mønstre',
        'Holdbare materialer',
        'Vandtæt membran'
      ],
      priceFactors: [
        'Flisernes type og størrelse',
        'Underlagets beskaffenhed',
        'Rumstørrelse',
        'Detaljegrad'
      ],
      timeline: '1-2 uger for standard badeværelse',
          seoTitle: 'Flisearbejde Holbæk | Fliser, Klinker & Natursten – Millimeterpræcision',
    seoDescription: 'Perfekt flisearbejde i Holbæk til køkken, bad & terrasse. Vi leverer skærefaste fuger og slidstærke løsninger. Gratis rådgivning – kontakt os.',
    ogTitle: 'Flisearbejde Holbæk – Flotte fliser der holder',
    ogDescription: 'Din specialist i fliser og klinker i Holbæk. Få fast m²-pris og garanti.'
    },
    'tilbygninger': {
      title: 'Tilbygninger',
      description: 'Murværk til tilbygninger, carporte og andre byggeprojekter',
      heroImage: '/tilbygninger.jpg',
      benefits: [
        'Ekstra plads til familien',
        'Professionelt fundament',
        'Kvalitetsmurværk',
        'Øget boligværdi'
      ],
      priceFactors: [
        'Størrelse af tilbygning',
        'Fundamentsarbejde',
        'Materialevalg',
        'Terrænforhold'
      ],
      timeline: '3-8 uger afhængig af størrelse',
          seoTitle: 'Tilbygning Holbæk | Garage, Udestue & Overetage – Én totalentreprenør',
    seoDescription: 'Skal du bygge til? Vi designer og opfører tilbygninger i Holbæk med byggetilladelse, energiberegning og fast pris. Gratis skitseforslag – ring +27 85 13 81.',
    ogTitle: 'Tilbygning Holbæk – Udvid boligen med værdi',
    ogDescription: 'Få mere plads med en professionel tilbygning i Holbæk. Kontakt os for uforpligtende møde.'
    }
  };

  const service = services[slug as keyof typeof services];

  // Update meta tags
  useEffect(() => {
    if (service) {
      // Dynamic <title>
      document.title = service.seoTitle ?? `${service.title} Holbæk | Murermester Holbæk`;

      // Meta Description
      const metaDesc = document.querySelector("meta[name='description']");
      if (metaDesc) {
        metaDesc.setAttribute('content', service.seoDescription ?? service.description);
      }

      // Open Graph tags
      const ogTitle = document.querySelector("meta[property='og:title']");
      if (ogTitle) {
        ogTitle.setAttribute('content', service.ogTitle ?? document.title);
      }
      const ogDesc = document.querySelector("meta[property='og:description']");
      if (ogDesc) {
        ogDesc.setAttribute('content', service.ogDescription ?? service.seoDescription ?? service.description);
      }
    }
  }, [service]);

  if (!service) {
    return <div>Service ikke fundet</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-terracotta">Forside</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link to="/services" className="text-gray-500 hover:text-terracotta">Services</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-charcoal font-medium">{service.title}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative">
        <div 
          className="h-64 md:h-96 bg-cover bg-center relative"
          style={{ backgroundImage: `url('${service.heroImage}')` }}
        >
          <div className="absolute inset-0 bg-charcoal/70"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-white max-w-2xl">
                <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">
                  {service.title}
                </h1>
                <p className="text-xl text-gray-200">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call Banner */}
      <section className="bg-terracotta text-white py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="font-montserrat font-semibold text-xl mb-2">
                Få et gratis tilbud på din {service.title.toLowerCase()}
              </h2>
              <p className="text-gray-100">Ring til os nu - vi svarer inden for 24 timer</p>
            </div>
            <Button 
              asChild 
              size="lg"
              className="bg-white text-terracotta hover:bg-gray-100 mt-4 md:mt-0"
            >
              <a href={`tel:${PHONE_LINK}`} className="inline-flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Ring på {PHONE_DISPLAY}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Benefits */}
              <div>
                <h2 className="font-montserrat font-bold text-2xl mb-6">
                  Fordele ved {service.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Factors */}
              <div>
                <h2 className="font-montserrat font-bold text-2xl mb-6">
                  Hvad Påvirker Prisen?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.priceFactors.map((factor, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Euro className="w-5 h-5 text-terracotta mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{factor}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h2 className="font-montserrat font-bold text-2xl mb-6">
                  Tidsplan
                </h2>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-terracotta mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{service.timeline}</span>
                </div>
              </div>

              {/* Inline Quote Form */}
              <div className="lg:hidden">
                <QuoteForm title={`Få tilbud på ${service.title.toLowerCase()}`} />
              </div>

              {/* SEO Rich Content */}
              {slug === 'facaderenovering' && (
                <div className="space-y-12">
                  <FacadeRenovationContent />
                </div>
              )}

              {slug === 'badevaerelsesrenovering' && (
                <div className="space-y-12">
                  <BathroomRenovationContent />
                </div>
              )}

              {slug === 'flisearbejde' && (
                <div className="space-y-12">
                  <TileWorkContent />
                </div>
              )}

              {slug === 'tilbygninger' && (
                <div className="space-y-12">
                  <ExtensionContent />
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Sticky Quote Form - Desktop */}
              <div className="hidden lg:block sticky top-8">
                <QuoteForm title={`Få tilbud på ${service.title.toLowerCase()}`} />
              </div>

              {/* Additional Info Card */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-montserrat">Har du spørgsmål?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Vi er altid klar til at svare på dine spørgsmål om {service.title.toLowerCase()}.
                  </p>
                  <div className="space-y-3">
                    <Button asChild className="w-full bg-terracotta hover:bg-terracotta/90">
                      <a href={`tel:${PHONE_LINK}`}>Ring {PHONE_DISPLAY}</a>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <a href="mailto:infomurerholbaek@gmail.com">Send email</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
