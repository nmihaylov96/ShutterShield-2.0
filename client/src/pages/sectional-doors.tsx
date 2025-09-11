import { useState, useEffect } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowLeft, Phone } from 'lucide-react';
import { useLocation } from 'wouter';

// Import MCA sectional door images
import mcaWoodDesign from '@assets/IMG-fe64776c1aa455941441d40996ac3aaf-V_1757000294762.jpg';
import mcaWithPedestrianDoor from '@assets/IMG-bd4043317dfad676f532743166ad5801-V_1757000294763.jpg';
import mcaWhiteClassic from '@assets/20240909_180531_1757000294763.jpg';
import mcaBrownHorizontal from '@assets/20250417_183831_1757000294763.jpg';
import mcaIndustrial from '@assets/490644030_1496166088441324_79114404476998017_n_1757000294763.jpg';
import mcaMultiple from '@assets/475166115_1006926747918460_2692043983858398704_n_1757000294764.jpg';
import mcaDarkModern from '@assets/488823503_1490438199014113_6054773432221823488_n_1757000294764.jpg';

export default function SectionalDoors() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const carouselImages = [
    mcaWoodDesign,
    mcaWithPedestrianDoor,
    mcaWhiteClassic,
    mcaBrownHorizontal,
    mcaIndustrial,
    mcaMultiple,
    mcaDarkModern
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

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
      
      {/* Hero Section with decorative border */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="outline"
            onClick={() => setLocation('/')}
            className="mb-8 border-2 border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t.common.back}
          </Button>
          
          {/* Decorative title with border */}
          <div className="text-center mb-12">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-orange-400"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-gray-50 px-6 text-4xl md:text-5xl font-bold text-gray-900">
                  Резиденциални врати
                </span>
              </div>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="relative mb-12 max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden bg-black">
              <img
                src={carouselImages[currentSlide]}
                alt="MCA секционни врати"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Carousel indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlide ? 'bg-orange-400' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Удобството и сигурността при употреба, елегантният дизайн, използването на най-новите технологии в 
              съответствие с европейските норми за сигурност, както и широката гама аксесоари превръщат гаражните 
              врати MCA в идеалното решение за вашия гараж.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Секционните гаражни врати MCA се характеризират с:
            </h2>
          </div>
        </div>
      </section>

      {/* Characteristics Section */}
      <section id="characteristics" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Thermal Insulation */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Оптимална термоизолация, постигната чрез
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">сандвич-панели с дебелина 40 мм</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">странични уплътнения</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">двойно уплътнение в долната част на вратата</span>
                </div>
              </div>
            </Card>

            {/* Comfort and Safety */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Комфорт, надежност и сигурност
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Електрическо задвижване от разстояние с помощта на дистанционно, чийто код не може да бъде клониран
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Система против скъсване на пружините</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Система против прищипване на пръстите между панелите</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Система против опити за проникване с взлом</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Система от типа "safety edge" – когато вратата срещне препятствие, тя се връща сама нагоре
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Система с фотоклетки</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Възможност за аварийно отваряне, когато няма ток</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Гаранция за минимум 15 000 / 25 000 цикъла</span>
                </div>
              </div>
            </Card>

            {/* Variety */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Разнообразие от цветове и аксесоари
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Разполагаме с над 40 стандартни панела с различни цветове и десени
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Възможност за остъкляване на гаражната врата</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Възможност за интегриране на пешеходна врата с нисък праг
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Sliding Systems Optima */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-orange-400"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-gray-50 px-6 text-3xl font-bold text-gray-600">
                  Плъзгащи системи Optima
                </span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden">
              <div className="aspect-square bg-white p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-full h-48 bg-gray-200 rounded mb-4 flex items-center justify-center">
                    <span className="text-gray-500">LHR System Diagram</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">LHR</h3>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-square bg-white p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-full h-48 bg-gray-200 rounded mb-4 flex items-center justify-center">
                    <span className="text-gray-500">LHF System Diagram</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">LHF</h3>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="aspect-square bg-white p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-full h-48 bg-gray-200 rounded mb-4 flex items-center justify-center">
                    <span className="text-gray-500">LHR Schema</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">LHR</h3>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-square bg-white p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-full h-48 bg-gray-200 rounded mb-4 flex items-center justify-center">
                    <span className="text-gray-500">LHF Schema</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">LHF</h3>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Panel Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Изберете типа панел за секционните врати
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Предлагаме различни типове панели според вашите нужди - от класически до модерни дизайни с имитации на дърво
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* RIB Panels */}
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="relative h-64">
                <img
                  src={mcaWoodDesign}
                  alt="RIB панели"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  RIB панели
                </h3>
                <p className="text-gray-600 mb-4">
                  Класически дизайн с хоризонтални ребра. Налични с повърхност Stucco или Woodgrain в множество цветове.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Повърхност Stucco или Woodgrain</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Над 15 стандартни цвята</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Имитации на дърво</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Устойчива на времето</span>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-block w-6 h-6 bg-white border border-gray-300 rounded"></span>
                  <span className="inline-block w-6 h-6 bg-amber-800 rounded"></span>
                  <span className="inline-block w-6 h-6 bg-green-700 rounded"></span>
                  <span className="inline-block w-6 h-6 bg-blue-700 rounded"></span>
                  <span className="inline-block w-6 h-6 bg-gray-600 rounded"></span>
                  <span className="text-sm text-gray-500">+10 още</span>
                </div>
              </CardContent>
            </Card>

            {/* FLUSH Panels */}
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="relative h-64">
                <img
                  src={mcaWhiteClassic}
                  alt="FLUSH панели"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  FLUSH панели
                </h3>
                <p className="text-gray-600 mb-4">
                  Модерен минималистичен дизайн с гладка повърхност. Идеални за съвременни архитектурни стилове.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Гладка повърхност</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Съвременен дизайн</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Лесна поддръжка</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Специални покрития</span>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-block w-6 h-6 bg-white border border-gray-300 rounded"></span>
                  <span className="inline-block w-6 h-6 bg-gray-400 rounded"></span>
                  <span className="inline-block w-6 h-6 bg-gray-600 rounded"></span>
                  <span className="inline-block w-6 h-6 bg-black rounded"></span>
                  <span className="inline-block w-6 h-6 bg-orange-700 rounded"></span>
                  <span className="text-sm text-gray-500">+5 още</span>
                </div>
              </CardContent>
            </Card>

            {/* MIDRIB Panels */}
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="relative h-64">
                <img
                  src={mcaBrownHorizontal}
                  alt="MIDRIB панели"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  MIDRIB панели
                </h3>
                <p className="text-gray-600 mb-4">
                  Комбинация от класически и модерен дизайн. Налични с Woodgrain или гладка повърхност.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Woodgrain или гладка повърхност</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Универсален дизайн</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Имитации на дърво</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Висока издръжливост</span>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-block w-6 h-6 bg-white border border-gray-300 rounded"></span>
                  <span className="inline-block w-6 h-6 bg-amber-800 rounded"></span>
                  <span className="inline-block w-6 h-6 bg-yellow-600 rounded"></span>
                  <span className="inline-block w-6 h-6 bg-amber-900 rounded"></span>
                  <span className="text-sm text-gray-500">+8 още</span>
                </div>
              </CardContent>
            </Card>

            {/* Woodgrain Cassette Panels */}
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="relative h-64">
                <img
                  src={mcaDarkModern}
                  alt="Woodgrain касета панели"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Woodgrain касета панели
                </h3>
                <p className="text-gray-600 mb-4">
                  Премиум панели с касетен дизайн и Woodgrain повърхност за най-високо качество и естетика.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Касетен дизайн</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Woodgrain повърхност</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Премиум качество</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Елегантен вид</span>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-block w-6 h-6 bg-white border border-gray-300 rounded"></span>
                  <span className="inline-block w-6 h-6 bg-yellow-600 rounded"></span>
                  <span className="inline-block w-6 h-6 bg-amber-800 rounded"></span>
                  <span className="inline-block w-6 h-6 bg-red-900 rounded"></span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Всички панели се предлагат в дебелина 40мм с полиуретанова изолация за оптимална топло и звукоизолация.
            </p>
            <Button 
              onClick={scrollToContact}
              className="bg-primary-orange hover:bg-primary-orange/90 text-white px-8 py-3"
            >
              <Phone className="mr-2 h-5 w-5" />
              Заявете консултация за панели
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Готови сте за нова секционна гаражна врата?
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