import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowLeft, Phone, Grid, List } from 'lucide-react';
import { ProductFilter } from '@/components/product-filter';
import { useState } from 'react';
import { useLocation } from 'wouter';

export default function RollerDoors() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();
  const [filters, setFilters] = useState<any>({});
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const rollerDoorProducts = [
    {
      id: 1,
      name: "Ролетна врата алуминиева",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      material: "Алуминий",
      thickness: "40мм",
      design: "Гладка",
      color: "Бяло",
      description: "Компактна ролетна врата идеална за малки гаражи"
    },
    {
      id: 2,
      name: "Стоманена ролетна врата",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      material: "Стомана",
      thickness: "42мм",
      design: "Релефна",
      color: "Сиво",
      description: "Здрава стоманена конструкция с отлична защита"
    },
    {
      id: 3,
      name: "Ролетна врата с изолация",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      material: "Изолация",
      thickness: "67мм",
      design: "Гладка",
      color: "Кафяво",
      description: "Топлоизолирана врата за целогодишна употреба"
    },
    {
      id: 4,
      name: "Перфорирана ролетна врата",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      material: "Алуминий",
      thickness: "40мм",
      design: "С прозорци",
      color: "Черно",
      description: "Ролетна врата с перфорация за вентилация"
    },
    {
      id: 5,
      name: "Цветна ролетна врата",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      material: "Стомана",
      thickness: "42мм",
      design: "Декоративна",
      color: "Зелено",
      description: "Стилна врата с цветно покритие"
    },
    {
      id: 6,
      name: "Автоматична ролетна врата",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      material: "Алуминий",
      thickness: "40мм",
      design: "Гладка",
      color: "Бежово",
      description: "Автоматизирана врата с дистанционно управление"
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