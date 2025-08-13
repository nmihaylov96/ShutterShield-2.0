import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';


export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const [, setLocation] = useLocation();

  // Handle scroll effect
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
          behavior: 'smooth'
        });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setLocation('/')}
                className="flex items-center space-x-3 text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
              >
                <img 
                  src="/roltech-logo.svg" 
                  alt="Ролтех Logo" 
                  className="h-11 w-auto object-contain"
                />
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {t.navigation.home}
              </button>
              
              <div className="relative group">
                <button className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium flex items-center">
                  {t.navigation.products}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200">
                  <div className="py-2">
                    <button
                      onClick={() => setLocation('/sectional-doors')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                    >
                      {t.navigation.sectional}
                    </button>
                    <button
                      onClick={() => setLocation('/roller-doors')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                    >
                      {t.navigation.roller}
                    </button>
                    <button
                      onClick={() => setLocation('/berry-doors')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                    >
                      {t.navigation.berry}
                    </button>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => setLocation('/services')}
                className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {t.navigation.services}
              </button>
              
              <button
                onClick={() => setLocation('/about')}
                className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {t.navigation.about}
              </button>
              
              <button
                onClick={() => setLocation('/contact')}
                className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {t.navigation.contact}
              </button>
            </div>
          </div>

          {/* Language Switcher & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Button
                variant={language === 'bg' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('bg')}
                className="px-3 py-1"
              >
                BG
              </Button>
              <Button
                variant={language === 'en' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('en')}
                className="px-3 py-1"
              >
                EN
              </Button>
            </div>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              {t.navigation.freeQuote}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => setLocation('/')}
              className="block w-full text-left px-3 py-2 text-gray-800 hover:text-blue-600 font-medium"
            >
              {t.navigation.home}
            </button>
            <button
              onClick={() => setLocation('/sectional-doors')}
              className="block w-full text-left px-3 py-2 text-gray-800 hover:text-blue-600"
            >
              {t.navigation.sectional}
            </button>
            <button
              onClick={() => setLocation('/roller-doors')}
              className="block w-full text-left px-3 py-2 text-gray-800 hover:text-blue-600"
            >
              {t.navigation.roller}
            </button>
            <button
              onClick={() => setLocation('/berry-doors')}
              className="block w-full text-left px-3 py-2 text-gray-800 hover:text-blue-600"
            >
              {t.navigation.berry}
            </button>
            <button
              onClick={() => setLocation('/services')}
              className="block w-full text-left px-3 py-2 text-gray-800 hover:text-blue-600 font-medium"
            >
              {t.navigation.services}
            </button>
            <button
              onClick={() => setLocation('/about')}
              className="block w-full text-left px-3 py-2 text-gray-800 hover:text-blue-600 font-medium"
            >
              {t.navigation.about}
            </button>
            <button
              onClick={() => setLocation('/contact')}
              className="block w-full text-left px-3 py-2 text-gray-800 hover:text-blue-600 font-medium"
            >
              {t.navigation.contact}
            </button>
            <div className="flex items-center space-x-2 px-3 py-2">
              <Button
                variant={language === 'bg' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('bg')}
              >
                BG
              </Button>
              <Button
                variant={language === 'en' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('en')}
              >
                EN
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
