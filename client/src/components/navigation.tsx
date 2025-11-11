import { useState, useEffect } from 'react';
import { Menu, X, Facebook, Phone, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';
import logoPath from '@/assets/roltech-logo.jpg';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      setLocation('/');
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth',
        });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top tier */}
      <div className="bg-primary-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            {/* Left side */}
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <button
                onClick={() => {
                  setLocation('/');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-yellow-accent transition-colors duration-200"
              >
                {t.navigation.home}
              </button>
              <button
                onClick={() => setLocation('/contact')}
                className="hover:text-yellow-accent transition-colors duration-200"
              >
                {t.navigation.contact}
              </button>
              <a
                href="https://www.facebook.com/Rolltech2021"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-yellow-accent transition-colors duration-200"
              >
                <Facebook className="h-4 w-4 mr-1" />
                Facebook
              </a>
            </div>

            {/* Right side - Phones */}
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <a href="tel:+359876782271" className="flex items-center hover:text-yellow-accent transition-colors duration-200">
                <Phone className="h-4 w-4 mr-1" />
                +359 87 678 2271
              </a>
              <a href="tel:+359888295088" className="flex items-center hover:text-yellow-accent transition-colors duration-200">
                <Phone className="h-4 w-4 mr-1" />
                +359 88 829 5088
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom tier */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center" style={{ height: '100px' }}>
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <button
              onClick={() => {
                setLocation('/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center text-2xl font-bold text-gray-800 hover:text-primary-blue transition-colors"
            >
              <img
                src={logoPath}
                alt="РОЛТЕХ Logo"
                className="w-auto object-contain"
                style={{ height: '90px', maxWidth: '200px' }}
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-baseline space-x-6">
              {/* Garage Doors */}
              <div className="relative group">
                <button className="text-gray-800 hover:text-primary-blue transition-colors duration-200 font-medium text-sm whitespace-nowrap flex items-center">
                  Гаражни врати
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200">
                  <div className="py-2">
                    <button onClick={() => setLocation('/sectional-doors')} className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:text-primary-blue hover:bg-gray-50 transition-colors">
                      Секционни гаражни врати
                    </button>
                    <button onClick={() => setLocation('/roller-doors')} className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:text-primary-blue hover:bg-gray-50 transition-colors">
                      Ролетни гаражни врати
                    </button>
                  </div>
                </div>
              </div>

              {/* Pedestrian Doors */}
              <button onClick={() => setLocation('/pedestrian-doors-steel')} className="text-gray-800 hover:text-primary-blue transition-colors duration-200 font-medium text-sm whitespace-nowrap">
                Пешеходни врати
              </button>

              {/* Industrial Doors */}
              <div className="relative group">
                <button className="text-gray-800 hover:text-primary-blue transition-colors duration-200 font-medium text-sm whitespace-nowrap flex items-center">
                  Индустриални врати
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200">
                  <div className="py-2">
                    <button onClick={() => setLocation('/industrial-sectional-doors')} className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:text-primary-blue hover:bg-gray-50 transition-colors">
                      Индустриални секционни врати
                    </button>
                    <button onClick={() => setLocation('/industrial-roller-doors')} className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:text-primary-blue hover:bg-gray-50 transition-colors">
                      Индустриални ролетни врати
                    </button>
                  </div>
                </div>
              </div>

              {/* Automation */}
              <div className="relative group">
                <button className="text-gray-800 hover:text-primary-blue transition-colors duration-200 font-medium text-sm whitespace-nowrap flex items-center">
                  Автоматика
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200">
                  <div className="py-2">
                    <button onClick={() => setLocation('/automation-sommer')} className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:text-primary-blue hover:bg-gray-50 transition-colors">
                      Автоматика за секционни врати
                    </button>
                    <button onClick={() => setLocation('/automation-somfy')} className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:text-primary-blue hover:bg-gray-50 transition-colors">
                      Автоматика за ролетни врати
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant={language === 'bg' ? 'default' : 'outline'} size="sm" onClick={() => setLanguage('bg')}>BG</Button>
            <Button variant={language === 'en' ? 'default' : 'outline'} size="sm" onClick={() => setLanguage('en')}>EN</Button>
            <Button onClick={() => setLocation('/contact')} size="sm" className="bg-primary-blue hover:bg-secondary-blue text-white">
              {t.navigation.freeQuote}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-800 hover:text-primary-blue focus:outline-none">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => { setLocation('/'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-gray-800 hover:text-primary-blue font-medium">{t.navigation.home}</button>

            {/* Garage Doors */}
            <div className="px-3 py-2">
              <div className="font-semibold text-gray-900 mb-2">Гаражни врати</div>
              <button onClick={() => { setLocation('/sectional-doors'); setMobileMenuOpen(false); }} className="block w-full text-left pl-4 py-2 text-sm text-gray-800 hover:text-primary-blue">Секционни гаражни врати</button>
              <button onClick={() => { setLocation('/roller-doors'); setMobileMenuOpen(false); }} className="block w-full text-left pl-4 py-2 text-sm text-gray-800 hover:text-primary-blue">Ролетни гаражни врати</button>
            </div>

            {/* Pedestrian Doors */}
            <button onClick={() => { setLocation('/pedestrian-doors-steel'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-gray-800 hover:text-primary-blue font-medium">Пешеходни врати</button>

            {/* Industrial Doors */}
            <div className="px-3 py-2">
              <div className="font-semibold text-gray-900 mb-2">Индустриални врати</div>
              <button onClick={() => { setLocation('/industrial-sectional-doors'); setMobileMenuOpen(false); }} className="block w-full text-left pl-4 py-2 text-sm text-gray-800 hover:text-primary-blue">Индустриални секционни врати</button>
              <button onClick={() => { setLocation('/industrial-roller-doors'); setMobileMenuOpen(false); }} className="block w-full text-left pl-4 py-2 text-sm text-gray-800 hover:text-primary-blue">Индустриални ролетни врати</button>
            </div>

            {/* Automation */}
            <div className="px-3 py-2">
              <div className="font-semibold text-gray-900 mb-2">Автоматика</div>
              <button onClick={() => { setLocation('/automation-sommer'); setMobileMenuOpen(false); }} className="block w-full text-left pl-4 py-2 text-sm text-gray-800 hover:text-primary-blue">Автоматика за секционни врати</button>
              <button onClick={() => { setLocation('/automation-somfy'); setMobileMenuOpen(false); }} className="block w-full text-left pl-4 py-2 text-sm text-gray-800 hover:text-primary-blue">Автоматика за ролетни врати</button>
            </div>

            <button onClick={() => { setLocation('/contact'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-gray-800 hover:text-primary-blue font-medium">{t.navigation.contact}</button>

            <a href="https://www.facebook.com/Rolltech2021" target="_blank" rel="noopener noreferrer" className="flex items-center px-3 py-2 text-gray-800 hover:text-primary-blue" onClick={() => setMobileMenuOpen(false)}>
              <Facebook className="h-4 w-4 mr-2" /> Facebook
            </a>

            <div className="px-3 py-2 space-y-2">
              <a href="tel:+359876782271" className="flex items-center text-gray-800 hover:text-primary-blue"><Phone className="h-4 w-4 mr-2" />+359 87 678 2271</a>
              <a href="tel:+359888295088" className="flex items-center text-gray-800 hover:text-primary-blue"><Phone className="h-4 w-4 mr-2" />+359 88 829 5088</a>
            </div>

            <div className="flex items-center space-x-2 px-3 py-2">
              <Button variant={language === 'bg' ? 'default' : 'outline'} size="sm" onClick={() => setLanguage('bg')}>BG</Button>
              <Button variant={language === 'en' ? 'default' : 'outline'} size="sm" onClick={() => setLanguage('en')}>EN</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
