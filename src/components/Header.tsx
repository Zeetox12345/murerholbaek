
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PHONE_DISPLAY, PHONE_LINK } from "@/lib/constants";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Forside', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 h-24">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/murernaestvedlogo.PNG"
              alt="Murer Næstved Logo"
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-charcoal hover:text-terracotta transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Button 
              asChild 
              className="bg-terracotta hover:bg-terracotta/90 text-white"
            >
              <a href={`tel:${PHONE_LINK}`} className="inline-flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{PHONE_DISPLAY}</span>
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="z-50 relative"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-24 bg-white shadow-lg border-t z-40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col space-y-4 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-charcoal hover:text-terracotta transition-colors duration-200 font-medium py-3 text-lg border-b border-gray-100 last:border-b-0"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Button 
                    asChild 
                    className="bg-terracotta hover:bg-terracotta/90 text-white w-full"
                    size="lg"
                  >
                    <a href={`tel:${PHONE_LINK}`} className="inline-flex items-center justify-center space-x-2">
                      <Phone className="w-5 h-5" />
                      <span>{PHONE_DISPLAY}</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
