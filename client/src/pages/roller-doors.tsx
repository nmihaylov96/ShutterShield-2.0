import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowLeft, Phone, Grid, List } from 'lucide-react';
import { ProductFilter } from '@/components/product-filter';
import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';

export default function RollerDoors() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();
  const [filters, setFilters] = useState<any>({});
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const rollerDoorProducts = [
    {
      id: 1,
      name: "Термоизолационна ролетна врата",
      image: "@assets/ролетна-врата-за-гараж-термо-ламел_1756995220376.jpg",
      material: "Алуминий с полиуретанова пяна",
      thickness: "77мм",
      design: "Термоизолационна",
      color: "RAL 9006",
      description: "Алуминиеви ламели с пенополиуретанова пяна с височина 77мм и дебелина 19мм. Идеални за безопасност и комфорт.",
      category: "Термоизолационни",
      features: ["Отлична топлоизолация", "Звукоизолация", "Висока здравина"]
    },
    {
      id: 2,
      name: "Стоманена ролетна врата с перфорация",
      image: "@assets/h105-stuff_1756995220377.png",
      material: "Стомана с перфорация",
      thickness: "42мм",
      design: "Перфорирана",
      color: "RAL 9006",
      description: "Стоманена ролетна врата с вентилационни отвори за оптимална вентилация.",
      category: "Стоманени",
      features: ["Вентилация", "Здрава конструкция", "Защита от взлом"]
    },
    {
      id: 3,
      name: "Алуминиева ролетна врата за гараж",
      image: "@assets/IMG-e6b4a0f78cb8017edf4b4f25aa12697e-V_1756995278270.jpg",
      material: "Алуминий",
      thickness: "40мм",
      design: "Гладка",
      color: "Имитация дърво - кафяво",
      description: "Компактна алуминиева ролетна врата с дървесна текстура за елегантен външен вид.",
      category: "Алуминиеви",
      features: ["Лека конструкция", "Устойчива на корозия", "Дървесна текстура"]
    },
    {
      id: 4,
      name: "Индустриална ролетна врата",
      image: "@assets/industrialni-roletni-vrati-pravi-lameli_1756995278274.jpg",
      material: "Стомана",
      thickness: "42мм",
      design: "Индустриална",
      color: "RAL 9006",
      description: "Устойчива, здрава и лесна за поддръжка. Перфектният бюджетен вариант за производствени или складови помещения.",
      category: "Индустриални",
      features: ["Висока устойчивост", "Лесна поддръжка", "Икономична"]
    },
    {
      id: 5,
      name: "Ролетна врата за търговски обект",
      image: "@assets/IMG-e53917d0073dcdb72c800f88b61a8e13-V_1756995278269.jpg",
      material: "Алуминий",
      thickness: "40мм",
      design: "Търговска",
      color: "Бяло RAL 9010",
      description: "Ролетна врата за търговски обекти - киоски, магазини, складове с отлична защита.",
      category: "Търговски",
      features: ["Защита на стоки", "Устойчива на вандализъм", "Лесна употреба"]
    },
    {
      id: 6,
      name: "Охранителна ролетна врата",
      image: "@assets/h105-stuff (2)_1756995278272.png",
      material: "Алуминий с перфорация",
      thickness: "40мм",
      design: "Охранителна",
      color: "RAL 9006",
      description: "Ролетна врата с прорези за видимост и вентилация, идеална за търговски обекти.",
      category: "Охранителни",
      features: ["Визуален контакт", "Вентилация", "Защита"]
    },
    {
      id: 7,
      name: "Автоматизирана ролетна врата с Somfy",
      image: "@assets/475190107_1007270957884039_5553773364182985176_n_1756995305168.jpg",
      material: "Алуминий",
      thickness: "40мм",
      design: "Автоматизирана",
      color: "RAL 9006",
      description: "Ролетна врата с професионална Somfy автоматизация за максимален комфорт.",
      category: "Автоматизирани",
      features: ["Дистанционно управление", "Somfy мотор", "Сензори за безопасност"]
    },
    {
      id: 8,
      name: "Модерна гаражна ролетна врата",
      image: "@assets/ავტოფარეხის-კარი_1756995278270.jpg",
      material: "Алуминий",
      thickness: "40мм",
      design: "Модерна",
      color: "Антрацит RAL 7016",
      description: "Съвременна ролетна врата за модерни жилищни сгради с елегантен дизайн.",
      category: "Жилищни",
      features: ["Модерен дизайн", "Тиха работа", "Дълготрайност"]
    },
    {
      id: 9,
      name: "Ролетна врата с мрежа за защита",
      image: "@assets/475163142_1006919107919224_7610862781310710227_n_1756995305167.jpg",
      material: "Алуминий с мрежа",
      thickness: "40мм",
      design: "С мрежа",
      color: "Бяло RAL 9010",
      description: "Ролетна врата с допълнителна защитна мрежа за повишена сигурност.",
      category: "Със защита",
      features: ["Двойна защита", "Мрежа от стомана", "Антивандал система"]
    },
    {
      id: 10,
      name: "Вентилационна ролетна врата",
      image: "@assets/h105-stuff (1)_1756995305168.png",
      material: "Алуминий с микроперфорация",
      thickness: "40мм",
      design: "Вентилационна",
      color: "RAL 9006",
      description: "Специална ролетна врата с микроперфорация за постоянна вентилация.",
      category: "Вентилационни",
      features: ["Микроперфорация", "Постоянна вентилация", "Запазена сигурност"]
    }
  ];

  const filteredProducts = rollerDoorProducts.filter(product => {
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
              {t.products.roller.title}
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              {t.products.roller.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                className="bg-yellow-accent text-gray-900 px-8 py-3 hover:bg-yellow-500 font-semibold rounded-none"
              >
                Поискайте оферта
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
                Защо да изберете ролетни гаражни врати?
              </h2>
              <div className="space-y-4">
                {t.products.roller.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <span className="text-lg text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Допълнителни предимства:
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Идеални за ограничени пространства</li>
                  <li>• Висока защита от взлом</li>
                  <li>• Различни цветове и материали</li>
                  <li>• Минимални изисквания за монтаж</li>
                  <li>• Отлична ценова характеристика</li>
                </ul>
              </div>
            </div>
            <div>
              <img
                src={rollerDoorProducts[0].image}
                alt="Roller garage door"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Нашите ролетни врати</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Разгледайте нашата колекция от ролетни гаражни врати - компактни, практични и надеждни
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter Sidebar */}
            <div className="lg:w-80">
              <ProductFilter onFilterChange={setFilters} productType="roller" />
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              {/* View Controls */}
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">
                  Показани {filteredProducts.length} от {rollerDoorProducts.length} продукта
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

      {/* CTA Section */}
      <section className="py-16 bg-primary-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Готови сте за нова ролетна гаражна врата?
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