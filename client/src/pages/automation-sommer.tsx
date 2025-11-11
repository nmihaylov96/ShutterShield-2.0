import { useEffect } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Phone } from 'lucide-react';
import { useLocation } from 'wouter';

export default function SommerPage() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    setLocation('/');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section with Background Image */}
<section
  className="relative bg-cover bg-center bg-no-repeat h-[500px] flex items-center"
  style={{ backgroundImage: "url(src/components/img/SOMMER-Garage-Door-Openers-in-Melbourne.jpg)" }}
>
  <div className="absolute inset-0 bg-black/50"></div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
    
    {/* Бутон вляво */}
    <div className="flex justify-start mb-8">
      <Button
        variant="outline"
        onClick={() => setLocation('/')}
        className="border-2 border-white text-white bg-black/20 hover:bg-white hover:text-primary-blue font-semibold px-6 py-2"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        {t.common.back}
      </Button>
    </div>

    {/* Заглавие и текст остават центрирани */}
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Автоматика за секционни врати - Sommer
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
        Висококачествена автоматика за гаражни и индустриални врати от водещия немски производител Sommer.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          onClick={scrollToContact}
          className="bg-yellow-accent text-gray-900 px-8 py-3 hover:bg-yellow-500 font-semibold"
        >
          Поискайте оферта
        </Button>
        <Button
          variant="outline"
          className="border-2 border-white text-white bg-transparent px-8 py-3 hover:bg-white hover:text-primary-blue font-semibold"
          onClick={() => window.open('tel:087 678 2271', '_self')}
        >
          <Phone className="mr-2 h-5 w-5" />
          Обадете се
        </Button>
      </div>
    </div>
  </div>
</section>


{/* Sommer Section */}
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-2 gap-12 items-start">
      {/* Text Column */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Автоматика за секционни врати
        </h2>
        <p className="text-gray-700 text-lg">
          Ролтех ООД предлага на своите клиенти висококачествена автоматика за гаражни и индустриални врати на водещият немски производител Sommer.
        </p>
        <p className="text-gray-700 text-lg">
          Производителността и стандартите за качество гарантират безпроблемния и дълъг експлоатационен живот на задвижванията и управляващата автоматика.
        </p>
        <p className="text-gray-700 text-lg">
          Разнообразието от типове задвижвания покрива всички нужди и спецификации за задвижване на секционните врати, било то 
          <Button variant="link" className="text-primary-blue font-semibold px-1">
            Индустриални
          </Button> 
          или 
          <Button variant="link" className="text-primary-blue font-semibold px-1">
            Гаражни
          </Button>.
        </p>
        <p className="text-gray-700 text-lg">
          Към механизмите се предлагат пълната гама аксесоари – фотоклетки, бутониери, приемници и др.
        </p>

        {/* Изображение под текста */}
        <div className="mt-6">
          <img
            src="src/components/img/family-gigasedocmet-w-oblique-01.png"
            alt="Sommer Автоматика 1"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>

      {/* Images Column */}
      <div className="grid grid-cols-1 gap-6">
        <img
          src="src/components/img/family-sommerbaseplus-w-oblique-01.png"
          alt="Sommer Автоматика 2"
          className="rounded-lg shadow-lg w-full h-auto"
        />
        <img
          src="src/components/img/family-sommerproplus-w-oblique-01.png"
          alt="Sommer Автоматика 3"
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-16 bg-primary-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Готови сте за автоматизация на вашата гаражна врата?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Свържете се с нас за безплатна консултация и оферта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToContact}
              className="bg-yellow-accent text-gray-900 px-8 py-3 hover:bg-yellow-500 font-semibold"
            >
              {t.common.requestQuote}
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white bg-transparent px-8 py-3 hover:bg-white hover:text-primary-blue font-semibold"
              onClick={() => window.open('tel:087 678 2271', '_self')}
            >
              <Phone className="mr-2 h-5 w-5" />
              Обадете се сега
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
