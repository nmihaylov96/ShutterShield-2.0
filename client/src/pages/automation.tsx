import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowLeft, Grid, List } from 'lucide-react';
import { useLocation } from 'wouter';

export default function Automation() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();
  const [filters, setFilters] = useState<any>({});
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Check for URL parameters to set initial filters
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category) {
      setFilters({ category });
    }
  }, []);

  // Main categories for automation
  const automationCategories = [
    {
      id: 1,
      title: "Автоматика за секционни врати",
      image: "@assets/image_1756997209280.png",
      description: "Професионална автоматика Sommer за секционни гаражни врати с усъвършенствани функции.",
      features: ["Sommer ProPlus серия", "Безжично управление", "Интелигентни сензори", "Надеждна работа"],
      category: "sectional"
    },
    {
      id: 2,
      title: "Автоматика за ролетни врати", 
      image: "@assets/170_1756995278272.png",
      description: "Висококачествена автоматика Somfy за ролетни врати с различни мощности и възможности.",
      features: ["Somfy Centreo серия", "До 350 кг капацитет", "IP X4 защита", "CE съгласие"],
      category: "roller"
    }
  ];

  // Products for automation
  const automationProducts = [
    // Sectional door automation
    {
      id: 1,
      name: "Sommer ProPlus 600N",
      image: "@assets/family-sommerproplus-w-oblique-01_1756997296109.png",
      category: "sectional",
      brand: "Sommer",
      power: "600N",
      type: "ProPlus",
      description: "Професионален задвижващ механизъм за средни секционни врати"
    },
    {
      id: 2,
      name: "Sommer Base Plus 800N",
      image: "@assets/family-sommerbaseplus-w-oblique-01_1756997296109.png",
      category: "sectional",
      brand: "Sommer",
      power: "800N", 
      type: "Base Plus",
      description: "Икономичен вариант за стандартни секционни врати"
    },
    {
      id: 3,
      name: "Sommer Gigased 1200N",
      image: "@assets/family-gigasedocmet-w-oblique-01_1756997296109.png",
      category: "sectional",
      brand: "Sommer",
      power: "1200N",
      type: "Gigased", 
      description: "Индустриален механизъм за тежки секционни врати"
    },
    // Roller door automation
    {
      id: 4,
      name: "Somfy Centreo 0",
      image: "@assets/170_1756995278272.png",
      category: "roller",
      brand: "Somfy",
      power: "До 80кг",
      type: "Centreo 0",
      description: "Компактен механизъм за леки ролетни врати"
    },
    {
      id: 5,
      name: "Somfy Centreo 2", 
      image: "@assets/170_1756995278272.png",
      category: "roller",
      brand: "Somfy",
      power: "До 180кг",
      type: "Centreo 2",
      description: "Средна мощност за стандартни ролетни врати"
    },
    {
      id: 6,
      name: "Somfy Centreo 4",
      image: "@assets/170_1756995278272.png", 
      category: "roller",
      brand: "Somfy",
      power: "До 350кг",
      type: "Centreo 4",
      description: "Най-мощният модел за тежки ролетни врати"
    }
  ];

  // Filter products based on selected filters
  const filteredProducts = automationProducts.filter(product => {
    return Object.entries(filters).every(([key, value]) => {
      if (!value) return true;
      return product[key as keyof typeof product] === value;
    });
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-blue to-secondary-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLocation('/')}
              className="text-white border-white hover:bg-white hover:text-primary-blue mr-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Назад
            </Button>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Автоматика за гаражни врати
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Висококачествена автоматика за различни типове гаражни врати от водещи европейски производители.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => {
                  const productInfo = "Автоматика за гаражни врати - Консултация";
                  setLocation(`/contact?product=${encodeURIComponent(productInfo)}`);
                }}
                size="lg"
                className="bg-white text-primary-blue hover:bg-gray-100"
              >
                Поискайте оферта
              </Button>
              <Button
                onClick={() => setLocation('/contact')}
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-primary-blue"
              >
                Обадете се
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
                Професионални решения за всяко приложение
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Roltech ООД предлага висококачествена автоматика за различни типове гаражни врати от водещи европейски производители.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-lg text-gray-700">Sommer автоматика за секционни врати</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-lg text-gray-700">Somfy автоматика за ролетни врати</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-lg text-gray-700">Пълна гама аксесоари и управление</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-lg text-gray-700">Професионален монтаж и сервиз</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="@assets/image_1756997209280.png"
                alt="Автоматика за гаражни врати"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Изберете вида автоматика</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Предлагаме два основни типа автоматика според вида на вашата гаражна врата
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {automationCategories.map((category) => (
              <Card key={category.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="relative h-64">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {category.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {category.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      onClick={() => {
                        setFilters({ category: category.category });
                        // Scroll to products section
                        setTimeout(() => {
                          const element = document.getElementById('products-section');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }, 100);
                      }}
                      className="bg-primary-blue hover:bg-secondary-blue text-white flex-1"
                    >
                      Виж продуктите
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products-section" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Автоматика за гаражни врати
              </h2>
              <p className="text-gray-600">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'продукт' : 'продукта'}
                {Object.keys(filters).length > 0 && ' (филтрирани)'}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Filters Sidebar */}
            <div className="w-64 flex-shrink-0">
              <Card className="p-4">
                <h3 className="font-semibold text-gray-900 mb-4">Филтри</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Категория</label>
                    <select
                      value={filters.category || ''}
                      onChange={(e) => setFilters({ ...filters, category: e.target.value || undefined })}
                      className="w-full border rounded-md px-3 py-2 text-sm"
                    >
                      <option value="">Всички</option>
                      <option value="sectional">Секционни врати</option>
                      <option value="roller">Ролетни врати</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Марка</label>
                    <select
                      value={filters.brand || ''}
                      onChange={(e) => setFilters({ ...filters, brand: e.target.value || undefined })}
                      className="w-full border rounded-md px-3 py-2 text-sm"
                    >
                      <option value="">Всички</option>
                      <option value="Sommer">Sommer</option>
                      <option value="Somfy">Somfy</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Тип</label>
                    <select
                      value={filters.type || ''}
                      onChange={(e) => setFilters({ ...filters, type: e.target.value || undefined })}
                      className="w-full border rounded-md px-3 py-2 text-sm"
                    >
                      <option value="">Всички</option>
                      <option value="ProPlus">ProPlus</option>
                      <option value="Base Plus">Base Plus</option>
                      <option value="Gigased">Gigased</option>
                      <option value="Centreo 0">Centreo 0</option>
                      <option value="Centreo 2">Centreo 2</option>
                      <option value="Centreo 4">Centreo 4</option>
                    </select>
                  </div>
                  {Object.keys(filters).length > 0 && (
                    <Button
                      variant="outline"
                      onClick={() => setFilters({})}
                      className="w-full text-sm"
                    >
                      Изчисти филтрите
                    </Button>
                  )}
                </div>
              </Card>
            </div>

            {/* Products Grid/List */}
            <div className="flex-1">
              <div className={`grid gap-6 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                {filteredProducts.map((product) => (
                  <Card key={product.id} className={`overflow-hidden hover:shadow-lg transition-shadow ${viewMode === 'list' ? 'flex' : ''}`}>
                    <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : 'h-48'}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain bg-white p-4"
                      />
                    </div>
                    <div className={viewMode === 'list' ? 'flex-1' : ''}>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {product.description}
                        </p>
                        
                        <div className="space-y-2 mb-4 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Марка:</span>
                            <span className="font-medium">{product.brand}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Мощност:</span>
                            <span className="font-medium">{product.power}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Серия:</span>
                            <span className="font-medium">{product.type}</span>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button
                            onClick={() => {
                              const productInfo = `${product.name} - ${product.description}`;
                              setLocation(`/contact?product=${encodeURIComponent(productInfo)}`);
                            }}
                            className="bg-primary-blue hover:bg-secondary-blue text-white flex-1"
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

      {/* CTA Section */}
      <section className="py-16 bg-primary-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Готови сте за автоматизация на вашата гаражна врата?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Свържете се с нас за професионална консултация и безплатна оферта за автоматика.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setLocation('/contact')}
              size="lg"
              className="bg-white text-primary-blue hover:bg-gray-100"
            >
              Безплатна консултация
            </Button>
            <Button
              onClick={() => {
                window.open('tel:0876782271', '_self');
              }}
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-primary-blue"
            >
              Обадете се: 087 678 2271
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}