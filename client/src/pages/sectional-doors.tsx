import { useState, useEffect } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ProductFilter } from '@/components/product-filter';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowLeft, Phone, Grid, List } from 'lucide-react';
import { useLocation } from 'wouter';

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
      name: "Секционна гаражна врата Hörmann",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      material: "Стомана",
      thickness: "40мм",
      design: "Гладка",
      color: "Бяло",
      description: "Класическа секционна врата с отлична изолация"
    },
    {
      id: 2,
      name: "Секционна врата с прозорци",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      material: "Алуминий",
      thickness: "42мм",
      design: "С прозорци",
      color: "Сиво",
      description: "Модерна врата със стъклени панели"
    },
    {
      id: 3,
      name: "Дървена секционна врата",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      material: "Дърво",
      thickness: "67мм",
      design: "Декоративна",
      color: "Кафяво",
      description: "Елегантна дървена врата с естествен вид"
    },
    {
      id: 4,
      name: "Касетна секционна врата",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      material: "Стомана",
      thickness: "40мм",
      design: "Касетна",
      color: "Черно",
      description: "Стилна касетна врата с модерен дизайн"
    },
    {
      id: 5,
      name: "Изолирана секционна врата",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      material: "Изолация",
      thickness: "80мм",
      design: "Гладка",
      color: "Бежово",
      description: "Високоизолирана врата за максимална енергийна ефективност"
    },
    {
      id: 6,
      name: "Релефна секционна врата",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      material: "Стомана",
      thickness: "42мм",
      design: "Релефна",
      color: "Зелено",
      description: "Атрактивна релефна повърхност"
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
              {t.products.sectional.title}
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              {t.products.sectional.description}
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
                {t.common.whyChooseSectional}
              </h2>
              <div className="space-y-4">
                {t.products.sectional.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <span className="text-lg text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t.common.additionalAdvantages}
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Безопасна работа с автоматична защита</li>
                  <li>• Различни дизайнерски решения</li>
                  <li>• Дълготрайност и надеждност</li>
                  <li>• Лесна поддръжка</li>
                  <li>• Възможност за интеграция с домашна автоматика</li>
                </ul>
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

      {/* Sommer Automation Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Автоматика за секционни врати</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Roltech ООД предлага на своите клиенти висококачествена автоматика за гаражни и индустриални врати на водещия немски производител Sommer.
            </p>
          </div>

          <div className="mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="@assets/image_1756997209280.png"
                  alt="Sommer автоматика за секционни врати"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Професионални решения за всяко приложение
                </h3>
                <p className="text-gray-600 mb-6">
                  Производителността и стандартите за качество гарантират безпроблемния и дълъг експлоатационен живот на задвижванията и управляващата автоматика.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Разнообразието от типове задвижвания покрива всички нужди и спецификации</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Специални категории за индустриални и гаражни приложения</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Пълна гама аксесоари - фотоклетки, бутониери, приемници</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <img
                  src="@assets/family-sommerproplus-w-oblique-01_1756997296109.png"
                  alt="Sommer ProPlus"
                  className="w-full h-full object-contain bg-white p-4"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Sommer ProPlus
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Професионална серия за гаражни врати с усъвършенствани функции и висока производителност.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Дистанционно управление</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Безжично свързване</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Интелигентни сензори</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <img
                  src="@assets/family-sommerbaseplus-w-oblique-01_1756997296109.png"
                  alt="Sommer Base Plus"
                  className="w-full h-full object-contain bg-white p-4"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Sommer Base Plus
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Базова серия с отлично съотношение цена-качество за стандартни гаражни приложения.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Надежден механизъм</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Лесен монтаж</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Икономична цена</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <img
                  src="@assets/family-gigasedocmet-w-oblique-01_1756997296109.png"
                  alt="Sommer Gigased"
                  className="w-full h-full object-contain bg-white p-4"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Sommer Gigased
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Индустриална серия за тежки секционни врати с изключителна мощност и издръжливост.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Висока мощност</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Индустриална издръжливост</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Програмируеми функции</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Пълна гама аксесоари</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Към механизмите се предлагат пълната гама аксесоари – фотоклетки, бутониери, приемници и др.
            </p>
            <Button
              onClick={() => {
                const productInfo = "Sommer автоматика за секционни врати - Консултация";
                setLocation(`/contact?product=${encodeURIComponent(productInfo)}`);
              }}
              className="bg-primary-blue hover:bg-secondary-blue text-white px-8 py-3 text-lg"
            >
              Консултация за автоматика
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