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
  const [filters, setFilters] = useState<any>({});
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const filteredProducts = sectionalDoorProducts.filter(product => {
    if (filters.materials?.length > 0 && !filters.materials.includes(product.material)) return false;
    if (filters.thickness?.length > 0 && !filters.thickness.includes(product.thickness)) return false;
    if (filters.designs?.length > 0 && !filters.designs.includes(product.design)) return false;
    if (filters.colors?.length > 0 && !filters.colors.includes(product.color)) return false;
    return true;
  });

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
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-blue to-secondary-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="outline"
            onClick={() => setLocation('/')}
            className="mb-8 border-2 border-white text-white bg-black/20 hover:bg-white hover:text-primary-blue font-semibold px-6 py-2"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t.common.back}
          </Button>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Секционни гаражни врати MCA
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Секционни гаражни врати от висок клас на отлична цена. Фирма „Ролтех" ООД е оторизиран партньор с производителите на секционни врати от най-висок клас „MCA".
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                className="bg-yellow-accent text-gray-900 px-8 py-3 hover:bg-yellow-500 font-semibold rounded-none"
              >
                {t.common.requestQuote}
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white bg-transparent px-8 py-3 hover:bg-white hover:text-primary-blue font-semibold rounded-none"
                onClick={() => window.open('tel:+359888123456', '_self')}
              >
                <Phone className="mr-2 h-5 w-5" />
                {t.hero.callUs}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Защо да изберете MCA секционни врати?
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Секционните врати, които предлагаме са известни с удобството и сигурността си при употреба, елегантния дизайн, използването на най-новите технологии в съответствие с изискванията за безопасност на Европейския съюз.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-lg text-gray-700">Оптимална термоизолация с 40мм панел</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-lg text-gray-700">Полиуретанова изолация на панела</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-lg text-gray-700">Дълбоко галванизирани релси и профили</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-lg text-gray-700">Над 25 000 работни цикъла</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-lg text-gray-700">Минимални нива на шум</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-lg text-gray-700">Възможност за автоматизиране</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src={sectionalDoorProducts[0].image}
                alt="Sectional garage door"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section with Filter */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.common.ourSectionalDoors}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Разгледайте нашата богата колекция от секционни гаражни врати в различни стилове и цветове
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter Sidebar */}
            <div className="lg:w-80">
              <ProductFilter onFilterChange={setFilters} productType="sectional" />
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              {/* View Controls */}
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">
                  {t.common.showProducts.replace('6 от 6', `${filteredProducts.length} от ${sectionalDoorProducts.length}`)}
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

              {/* Products Display */}
              <div className={`${
                viewMode === 'grid' 
                  ? 'grid md:grid-cols-2 xl:grid-cols-3 gap-6' 
                  : 'space-y-4'
              }`}>
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className={`${
                      viewMode === 'grid' ? 'flex flex-col' : 'flex flex-row'
                    }`}>
                      <div className={`relative ${
                        viewMode === 'grid' ? 'h-48' : 'w-48 h-32'
                      }`}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className={`p-4 ${
                        viewMode === 'grid' ? '' : 'flex-1'
                      }`}>
                        <h3 className="font-semibold text-lg text-gray-900 mb-2">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">
                          {product.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="inline-block bg-primary-blue/10 text-primary-blue text-xs px-2 py-1 rounded">
                            {product.material}
                          </span>
                          <span className="inline-block bg-secondary-blue/10 text-secondary-blue text-xs px-2 py-1 rounded">
                            {product.thickness}
                          </span>
                          <span className="inline-block bg-yellow-accent/20 text-gray-700 text-xs px-2 py-1 rounded">
                            {product.design}
                          </span>
                        </div>

                        <div className="flex flex-col gap-2">
                          <Button 
                            onClick={() => {
                              const productInfo = `${product.name} - ${product.material}, ${product.thickness}, ${product.design}`;
                              setLocation(`/contact?product=${encodeURIComponent(productInfo)}`);
                            }}
                            className="bg-primary-blue hover:bg-secondary-blue text-white"
                            size="sm"
                          >
                            Поискай оферта
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    Няма продукти, отговарящи на избраните филтри
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setFilters({})}
                    className="mt-4"
                  >
                    Изчисти филтрите
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Технически характеристики
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Конструктивни характеристики</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Дебелина на панел:</span>
                  <span className="font-medium">40мм (обшит със стоманен пласт)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Изолация:</span>
                  <span className="font-medium">Полиуретан</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Релси и профили:</span>
                  <span className="font-medium">Дълбоко галванизирани</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Водачи:</span>
                  <span className="font-medium">Стомана 2-2.5мм</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Експлоатационни характеристики</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Работни цикли:</span>
                  <span className="font-medium">Над 25 000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Максимална височина:</span>
                  <span className="font-medium">8 000мм</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Максимална ширина:</span>
                  <span className="font-medium">10 000мм</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Шумово ниво:</span>
                  <span className="font-medium">Минимално</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Системи за защита и сигурност
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center mb-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="font-medium">Система против скъсване на пружините</span>
                </div>
                <div className="flex items-center mb-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="font-medium">Фотоклетки за безопасност</span>
                </div>
                <div className="flex items-center mb-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="font-medium">Система "safety edge" - чувствителна гума</span>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="font-medium">Странични и долни гумени уплътнения</span>
                </div>
                <div className="flex items-center mb-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="font-medium">Възможност за автоматизиране</span>
                </div>
                <div className="flex items-center mb-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="font-medium">Интегриране на пешеходна врата</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Над 40 стандартни панела
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Предлаганите от нас секционни врати разполагат с над 40 стандартни панела с различни цветове и десени. 
              Имат възможност за остъкляване и за интегриране на пешеходна врата.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Готови сте за нова секционна гаражна врата?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Свържете се с нас за безплатна консултация и оферта
          </p>
          <Button
            onClick={scrollToContact}
            className="bg-yellow-accent text-gray-900 px-8 py-3 hover:bg-yellow-500 font-semibold text-lg"
          >
            Свържете се с нас
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}