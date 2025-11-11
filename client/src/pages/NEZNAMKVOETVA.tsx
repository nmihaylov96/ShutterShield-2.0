import { useState, useEffect } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ProductFilter } from '@/components/product-filter';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowLeft, Phone, Grid, List } from 'lucide-react';
import { useLocation } from 'wouter';

// Import MCA sectional door images
import mcaWoodDesign from '../components/img/IMG-fe64776c1aa455941441d40996ac3aaf-V.jpg';
import mcaWithPedestrianDoor from '../components/img/IMG-bd4043317dfad676f532743166ad5801-V.jpg';
import mcaWhiteClassic from '../components/img/20240316_181328.jpg';
import mcaBrownHorizontal from '../components/img/488823503_1490438199014113_6054773432221823488_n.jpg';
import mcaIndustrial from '../components/img/475166115_1006926747918460_2692043983858398704_n.jpg';
import mcaMultiple from '../components/img/20250417_183831.jpg';
import mcaDarkModern from '../components/img/20240909_180531.jpg';
import sectionalDoorsBg from '../components/img/sectional-doors-background.jpg';


export default function SectionalDoors() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [filters, setFilters] = useState<any>({});
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

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

  const sectionalDoorProducts = [
    {
      id: 1,
      name: "MCA Секционна врата - Дървесен дизайн",
      image: mcaWoodDesign,
      material: "Стомана",
      thickness: "40мм",
      design: "Дървесен",
      color: "Кафяво",
      description: "Секционна врата с изискан дървесен дизайн от MCA"
    },
    {
      id: 2,
      name: "MCA Секционна врата с интегрирана пешеходна врата",
      image: mcaWithPedestrianDoor,
      material: "Стомана",
      thickness: "40мм",
      design: "С прозорци и пешеходна врата",
      color: "Кафяво",
      description: "Модерна врата със стъклени панели и интегрирана пешеходна врата"
    },
    {
      id: 3,
      name: "MCA Класическа бяла секционна врата",
      image: mcaWhiteClassic,
      material: "Стомана",
      thickness: "40мм",
      design: "Гладка",
      color: "Бяло",
      description: "Класическа бяла секционна врата с оптимална термоизолация"
    },
    {
      id: 4,
      name: "MCA Кафява секционна врата - Хоризонтални линии",
      image: mcaBrownHorizontal,
      material: "Стомана",
      thickness: "40мм",
      design: "Хоризонтални линии",
      color: "Кафяво",
      description: "Елегантна кафява врата с хоризонтални декоративни линии"
    },
    {
      id: 5,
      name: "MCA Индустриална секционна врата - Бяла",
      image: mcaIndustrial,
      material: "Стомана",
      thickness: "40мм",
      design: "Индустриална",
      color: "Бяло",
      description: "Индустриална секционна врата за търговски обекти с мониторни системи"
    },
    {
      id: 6,
      name: "MCA Множество секционни врати",
      image: mcaMultiple,
      material: "Стомана",
      thickness: "40мм",
      design: "Класическа",
      color: "Кафяво",
      description: "Комплект от секционни врати за многогаражни обекти"
    },
    {
      id: 7,
      name: "MCA Съвременна тъмна секционна врата",
      image: mcaDarkModern,
      material: "Стомана",
      thickness: "40мм",
      design: "Съвременна",
      color: "Тъмно сиво",
      description: "Съвременна секционна врата в тъмен цвят с модерен дизайн"
    }
  ];

  // Filter products based on selected filters
  const filteredProducts = sectionalDoorProducts.filter(product => {
    if (filters.materials?.length > 0 && !filters.materials.includes(product.material)) return false;
    if (filters.thickness?.length > 0 && !filters.thickness.includes(product.thickness)) return false;
    if (filters.designs?.length > 0 && !filters.designs.includes(product.design)) return false;
    if (filters.colors?.length > 0 && !filters.colors.includes(product.color)) return false;
    return true;
  });

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
      
      {/* Page Header */}
<section
  className="relative py-20 text-white bg-cover bg-center"
  style={{
    backgroundImage: `url(${sectionalDoorsBg})`,
  }}
>
  {/* Overlay за по-добър контраст на текста */}
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between mb-8">
      <Button
        variant="outline"
        onClick={() => setLocation('/')}
        className="mb-8 border-2 border-white text-white bg-black/20 hover:bg-white hover:text-primary-blue font-semibold px-6 py-2"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        {t.common.back}
      </Button>
    </div>

    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Секционни гаражни врати
      </h1>
      <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto">
        Фирма „Ролтех" ООД е оторизиран партньор с производителите на секционни врати от най-висок клас „MCA".
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

      
      {/* Hero Section with decorative border */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Decorative title with border */}
          <div className="text-center mb-12">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-orange-400"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-gray-50 px-6 text-4xl md:text-5xl font-bold text-gray-900">
                  Резиденциални врати MCA
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
              Секционните врати, които предлагаме са известни с удобството и сигурността си при употреба, елегантния дизайн, използването на най-новите технологии в съответствие с изискванията за безопасност на Европейския съюз. Те могат да бъдат изработени в разнообразие от размери и изисквания на клиента.
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
                  <span className="text-gray-700">топлоизолационен панел с дебелина 40мм, обшит със стоманен пласт</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">изолация на панела – полиуретан</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">странични гумени уплътнения и двойно такова в долната част на вратата</span>
                </div>
              </div>
            </Card>

            {/* Comfort and Safety */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Комфорт, надеждност и сигурност
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    релси и профили – дълбоко галванизирани
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">солиден вал и пружини позволяващи над 25 000 цикъла</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">панти и ролки осигуряващи минимални нива на шум</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">система против скъсване на пружините</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">система с фотоклетки</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    система от типа "safety edge" – чувствителна гума в долната част на вратата
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">максимални размери: височина 8000мм / широчина 10 000мм</span>
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
                    над 40 стандартни панела с различни цветове и десени
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">възможност за остъкляване</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    интегриране на пешеходна врата
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
      {/*
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Нашите секционни врати</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Разгледайте нашата богата колекция от секционни гаражни врати в различни стилове и цветове
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
           
            <div className="lg:w-80">
              <ProductFilter onFilterChange={setFilters} productType="sectional" />
            </div>

            
            <div className="flex-1">
              
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">
                  {`${filteredProducts.length} от ${sectionalDoorProducts.length} продукта`}
                </p>
                <div className="flex gap-2">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="p-2"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="p-2"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>

             
              <div className={
                viewMode === 'grid' 
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
                  : "space-y-6"
              }>
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className={viewMode === 'list' ? "flex" : ""}>
                      <div className={viewMode === 'list' ? "w-1/3" : "relative h-48"}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">
                          {product.description}
                        </p>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Материал:</span>
                            <span className="font-medium">{product.material}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Дебелина:</span>
                            <span className="font-medium">{product.thickness}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Цвят:</span>
                            <span className="font-medium">{product.color}</span>
                          </div>
                        </div>
                        <Button 
                          onClick={() => {
                            const productInfo = `${product.name} - Материал: ${product.material}, Дебелина: ${product.thickness}, Цвят: ${product.color}`;
                            setLocation(`/contact?product=${encodeURIComponent(productInfo)}`);
                          }}
                          className="w-full mt-4 bg-primary-blue hover:bg-primary-blue/90 text-white"
                        >
                          Поискай оферта
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    Няма продукти, които да отговарят на избраните филтри.
                  </p>
                  <Button 
                    onClick={() => setFilters({})}
                    className="mt-4"
                    variant="outline"
                  >
                    Изчисти филтрите
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section> */}

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