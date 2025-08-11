import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

export function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative bg-primary-blue text-white overflow-hidden">
      <div className="absolute inset-0 bg-primary-blue bg-opacity-90"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {t.hero.title}
          </h1>
          <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-dark-navy text-white px-8 py-3 hover:bg-secondary-blue font-semibold rounded-none"
            >
              {t.hero.learnMore} →
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white px-8 py-3 hover:bg-white hover:text-primary-blue font-semibold rounded-none"
              onClick={() => window.open('tel:+359888123456', '_self')}
            >
              <Phone className="mr-2 h-5 w-5" />
              {t.hero.callUs}
            </Button>
          </div>
        </div>
      </div>

      {/* Trust indicators */}
      <div className="relative bg-white bg-opacity-95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-primary-blue mb-1">15+</div>
              <div className="text-sm text-gray-600">{t.hero.stats.experience}</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-primary-blue mb-1">500+</div>
              <div className="text-sm text-gray-600">{t.hero.stats.doors}</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-primary-blue mb-1">10+</div>
              <div className="text-sm text-gray-600">{t.hero.stats.support}</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-primary-blue mb-1">100%</div>
              <div className="text-sm text-gray-600">{t.hero.stats.clients}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
