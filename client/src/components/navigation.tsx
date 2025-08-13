import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';
import logoPath from '@assets/A modern, minimalist logo design for a company specializing in roller garage shutters.  The logo should feature a stylized image of a roller shutter, perhaps represented by clean lines and geometric shapes, in shad_1755075612743.jpg';

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
    <nav className="shadow-lg sticky top-0 z-50" style={{ backgroundColor: '#2D2D37' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setLocation('/')}
                className="flex items-center space-x-3 text-2xl font-bold text-white hover:text-blue-300 transition-colors"
              >
                <img 
                  src={logoPath} 
                  alt="Ролтех Logo" 
                  className="h-16 w-auto object-contain"
                />
                <span>Ролтех</span>
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-blue-300 transition-colors duration-200 font-medium"
              >
                {t.navigation.home}
              </button>
              
              <div className="relative group">
                <button className="text-white hover:text-blue-300 transition-colors duration-200 font-medium flex items-center">
                  {t.navigation.products}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200" style={{ backgroundColor: '#25252f' }}>
                  <div className="py-2">
                    <button
                      onClick={() => setLocation('/sectional-doors')}
                      className="block w-full text-left px-4 py-2 text-sm text-white hover:text-blue-300 transition-colors"
                      onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#1d1d27'}
                      onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
                    >
                      {t.navigation.sectional}
                    </button>
                    <button
                      onClick={() => setLocation('/roller-doors')}
                      className="block w-full text-left px-4 py-2 text-sm text-white hover:text-blue-300 transition-colors"
                      onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#1d1d27'}
                      onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
                    >
                      {t.navigation.roller}
                    </button>
                    <button
                      onClick={() => setLocation('/berry-doors')}
                      className="block w-full text-left px-4 py-2 text-sm text-white hover:text-blue-300 transition-colors"
                      onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#1d1d27'}
                      onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
                    >
                      {t.navigation.berry}
                    </button>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => setLocation('/services')}
                className="text-white hover:text-blue-300 transition-colors duration-200 font-medium"
              >
                {t.navigation.services}
              </button>
              
              <button
                onClick={() => setLocation('/about')}
                className="text-white hover:text-blue-300 transition-colors duration-200 font-medium"
              >
                {t.navigation.about}
              </button>
              
              <button
                onClick={() => setLocation('/contact')}
                className="text-white hover:text-blue-300 transition-colors duration-200 font-medium"
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
              className="text-white hover:text-blue-300 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-600" style={{ backgroundColor: '#2D2D37' }}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => setLocation('/')}
              className="block w-full text-left px-3 py-2 text-white hover:text-blue-300 font-medium"
            >
              {t.navigation.home}
            </button>
            <button
              onClick={() => setLocation('/sectional-doors')}
              className="block w-full text-left px-3 py-2 text-white hover:text-blue-300"
            >
              {t.navigation.sectional}
            </button>
            <button
              onClick={() => setLocation('/roller-doors')}
              className="block w-full text-left px-3 py-2 text-white hover:text-blue-300"
            >
              {t.navigation.roller}
            </button>
            <button
              onClick={() => setLocation('/berry-doors')}
              className="block w-full text-left px-3 py-2 text-white hover:text-blue-300"
            >
              {t.navigation.berry}
            </button>
            <button
              onClick={() => setLocation('/services')}
              className="block w-full text-left px-3 py-2 text-white hover:text-blue-300 font-medium"
            >
              {t.navigation.services}
            </button>
            <button
              onClick={() => setLocation('/about')}
              className="block w-full text-left px-3 py-2 text-white hover:text-blue-300 font-medium"
            >
              {t.navigation.about}
            </button>
            <button
              onClick={() => setLocation('/contact')}
              className="block w-full text-left px-3 py-2 text-white hover:text-blue-300 font-medium"
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
