
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Hammer, Home, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PHONE_DISPLAY, PHONE_LINK } from "@/lib/constants";

const Services = () => {
  const services = [
    {
      title: 'Facaderenovering',
      description: 'Professionel renovering af facader, murstensskifte og fugtproblemer.',
      icon: Home,
      slug: 'facaderenovering',
      features: ['Murstensskifte', 'Fugeskrabning', 'Fugtproblemer', 'Isolering']
    },
    {
      title: 'Badeværelsesrenovering',
      description: 'Komplette badeværelsesrenovering og flisearbejde i høj kvalitet.',
      icon: Wrench,
      slug: 'badevaerelsesrenovering',
      features: ['Flisearbejde', 'Membran', 'VVS-samarbejde', 'Design-rådgivning']
    },
    {
      title: 'Flisearbejde',
      description: 'Eksperter i fliser og klinker til køkken, bad og terrasse.',
      icon: Wrench,
      slug: 'flisearbejde',
      features: ['Klinker', 'Natursten', 'Køkkenfliser', 'Udendørsbelægning']
    },
    {
      title: 'Tilbygninger',
      description: 'Murværk til tilbygninger, carporte og andre byggeprojekter.',
      icon: Hammer,
      slug: 'tilbygninger',
      features: ['Fundamenter', 'Murværk', 'Carporte', 'Terrasser']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-charcoal text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
              Vores Services
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Vi leverer professionel murertjenester til private og erhvervskunder 
              i Næstved og omegn. Se vores specialer nedenfor.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-terracotta rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="font-montserrat text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <ChevronRight className="w-4 h-4 text-terracotta mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button asChild className="w-full bg-terracotta hover:bg-terracotta/90">
                    <Link to={`/services/${service.slug}`}>
                      Læs mere om {service.title}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-off-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl mb-4">
            Ikke sikker på hvilken service du har brug for?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ring til os på {PHONE_DISPLAY}, så hjælper vi dig med at finde den rigtige løsning til dit projekt.
          </p>
          <Button asChild size="lg" className="bg-terracotta hover:bg-terracotta/90">
            <a href={`tel:${PHONE_LINK}`}>Ring nu for rådgivning</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
