import { useState, useEffect } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ProductFilter } from '@/components/product-filter';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowLeft, Phone, Grid, List } from 'lucide-react';
import { useLocation } from 'wouter';

// Original images for roller doors
import rollerDoorsBg from '../components/img/garajni-sekcionni-header.jpg';

export default function RollerDoors() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();
  const [filters, setFilters] = useState<any>({});
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Scroll to top when component mounts
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

  // Products for roller doors
  const rollerDoorProducts = [
    {
      id: 1,
      name: "Стоманена ролетна врата - Модел A",
      image: "@assets/Снимка катеория Стоманена ролетна врата_1756995220376.jpg",
      category: "steel",
      material: "Стомана",
      thickness: "0.6мм",
      color: "RAL 9010",
      description: "Икономична и здрава стоманена ролетна врата"
    },
    {
      id: 2,
      name: "Стоманена ролетна врата - Модел B",
      image: "@assets/475190107_1007270957884039_5553773364182985176_n_1756995278271.jpg",
      category: "steel",
      material: "Стомана",
      thickness: "0.8мм",
      color: "RAL 7016",
      description: "Усилена стоманена ролетна врата с по-голяма дебелина"
    },
    {
      id: 3,
      name: "Термоизолационна ролетна врата - Модел T1",
      image: "@assets/Снимка категория Термоизолационна ролетна врата_1756995278273.png",
      category: "thermal",
      material: "Алуминий + PU пяна",
      thickness: "77мм",
      color: "RAL 9016",
      description: "Висококачествена изолирана ролетна врата"
    },
    {
      id: 4,
      name: "Термоизолационна ролетна врата - Модел T2",
      image: "@assets/Снимка категория Термоизолационна ролетна врата_1756995278273.png",
      category: "thermal",
      material: "Алуминий + PU пяна",
      thickness: "77мм",
      color: "RAL 7035",
      description: "Премиум изолирана ролетна врата с отлична топлоизолация"
    }
  ];

  // Filter products based on selected filters
  const filteredProducts = rollerDoorProducts.filter(product => {
    return Object.entries(filters).every(([key, value]) => {
      if (!value) return true;
      return product[key as keyof typeof product] === value;
    });
  });

  // Main categories for roller doors
  const rollerDoorCategories = [
    {
      id: 1,
      title: "Стоманена ролетна врата",
      image: "/src/components/img/stomanena-roletna.jpg",
      description: "Здрави и икономични ролетни врати от стомана, идеални за производствени и складови помещения.",
      features: ["Висока устойчивост", "Лесна поддръжка", "Икономична цена", "Устойчивост на взлом"],
      category: "steel"
    },
    {
      id: 2,
      title: "Термоизолационна ролетна врата",
      image: "/src/components/img/termoizolacionna-roletna.png",
      description: "Алуминиеви ламели с пенополиуретанова пяна за перфектна комбинация от безопасност и комфорт.",
      features: ["Отлична топлоизолация", "Звукоизолация", "Висока здравина", "Дебелина 77мм"],
      category: "thermal"
    }
  ];

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
          backgroundImage: `url(${rollerDoorsBg})`,
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
              Ролетни гаражни врати
            </h1>
            <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto">
              Фирма „Ролтех“ ООД предлага практични и сигурни ролетни врати за гаражи, складове и производствени помещения, с възможност за автоматизация за максимален комфорт и енергоспестяване.
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
              {/* Orange line */}
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-orange-400"></div>
              </div>

              {/* Text and logo side by side */}
              <div className="relative inline-flex items-center">
                <span className="bg-gray-50 px-6 text-4xl md:text-5xl font-bold text-gray-900">
                  Ролетни гаражни врати
                </span>

                {/* Logo positioned above the line */}
                <img
                  src="src/components/img/logo.png"
                  alt="Лого"
                  className="h-8 md:h-9 w-auto ml-0 -mt-10"
                />
              </div>
            </div>
          </div>

          {/* Centered description */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-700 leading-relaxed">
              Практични, сигурни и икономични решения за гаражи, складове и производствени помещения. 
              Изберете между здрави стоманени врати за индустриална употреба или термоизолационни врати с алуминиеви ламели и PU пяна, 
              осигуряващи отлична топло- и звукоизолация. С автоматизация Somfy получавате максимален комфорт, безопасност и енергоспестяване.
            </p>
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
                src="/src/components/img/roletni-garajni.jpg"
                alt="Roller garage door"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Типове ролетни врати</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Предлагаме два основни типа ролетни врати според вашите нужди и изисквания
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card 
              className="overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
              onClick={() => setLocation('/roller-doors-steel')}
              data-testid="card-steel-roller"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src="src/components/img/Снимка катеория Стоманена ролетна врата_1756995220376.jpeg"
                  alt="Стоманена ролетна врата"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-blue transition-colors">
                  Стоманена ролетна врата
                </h3>
                <p className="text-gray-600 mb-6">
                  Здрави и икономични ролетни врати от стомана, идеални за производствени и складови помещения.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Висока устойчивост</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Лесна поддръжка</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Икономична цена</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Устойчивост на взлом</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Прахово боядисване по RAL</span>
                  </div>
                </div>

                <Button 
                  className="w-full mt-4 bg-primary-blue text-white hover:bg-secondary-blue"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLocation('/roller-doors-steel');
                  }}
                  data-testid="button-learn-more-steel-roller"
                >
                  Научете повече
                </Button>
              </CardContent>
            </Card>

            <Card 
              className="overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
              onClick={() => setLocation('/roller-doors-thermal')}
              data-testid="card-thermal-roller"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src="src/components/img/Термоизолационна.jpg"
                  alt="Термоизолационна ролетна врата"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-blue transition-colors">
                  Термоизолационна ролетна врата
                </h3>
                <p className="text-gray-600 mb-6">
                  Алуминиеви ламели с пенополиуретанова пяна за перфектна комбинация от безопасност и комфорт.
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Отлична топлоизолация</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Звукоизолация</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Висока здравина</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Дебелина 77мм</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Енергоспестяваща</span>
                  </div>
                </div>

                <Button 
                  className="w-full mt-4 bg-primary-blue text-white hover:bg-secondary-blue"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLocation('/roller-doors-thermal');
                  }}
                  data-testid="button-learn-more-thermal-roller"
                >
                  Научете повече
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Information Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Steel Roller Door Details */}
          <div id="info-steel" className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Стоманена ролетна врата
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Здрави и икономични ролетни врати от стомана, идеални за производствени и складови помещения. 
                  Благодарение на опростената им конструкция те са перфектния бюджетен вариант.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Устойчивост срещу атмосферни влияния</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Лесна поддръжка и дълготрайност</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Различни цветове по RAL палитра</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Възможност за перфорация за вентилация</span>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="src/components/img/csm_rollmatic_1_1000x700_c767c16ac2-700x441.jpeg"
                  alt="Steel roller door"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Thermal Roller Door Details */}
          <div id="info-thermal">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img
                  src="src/components/img/Термоизолация-фон.jpg"
                  alt="Thermal roller door"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Термоизолационна ролетна врата
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Перфектна комбинация за вашата безопасност и комфорт. Изработват се от алуминиеви ламели с 
                  пенополиуретанова пяна с височина 77мм и дебелина 19мм.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Отлична топлоизолация - намалява загубите на топлина</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Звукоизолация - намалява шума отвън</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Високо качество и стандарт на изработка</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Алуминиеви ламели с пяна - дебелина 77мм</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Автоматизация със Somfy</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="src/components/img/download.png"
                  alt="Somfy Centreo спецификации"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="text-left">
                <h4 className="text-xl font-semibold mb-4">Somfy Centreo серия</h4>
                <p className="text-gray-600 mb-4">
                  Професионална автоматизация с различни мощности и възможности за всеки тип ролетна врата.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">5 различни модела - Centreo 0 до Centreo 4</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Максимален капацитет до 350 кг</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">IP X4 степен на защита</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">CE съгласие EN 50081-1 и EN 50082-1</span>
                  </div>
                </div>
              </div>
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
