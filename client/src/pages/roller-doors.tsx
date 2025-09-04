import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowLeft, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';

export default function RollerDoors() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Main categories for roller doors
  const rollerDoorCategories = [
    {
      id: 1,
      title: "Стоманена ролетна врата",
      image: "@assets/Снимка катеория Стоманена ролетна врата_1756995220376.jpg",
      description: "Здрави и икономични ролетни врати от стомана, идеални за производствени и складови помещения.",
      features: ["Висока устойчивост", "Лесна поддръжка", "Икономична цена", "Устойчивост на взлом"],
      category: "steel"
    },
    {
      id: 2,
      title: "Термоизолационна ролетна врата",
      image: "@assets/Снимка категория Термоизолационна ролетна врата_1756995278273.png",
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
                src="@assets/csm_rollmatic_1_1000x700_c767c16ac2-700x441_1756995220375.jpg"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Изберете вида ролетна врата</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Предлагаме два основни типа ролетни врати според вашите нужди и изисквания
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {rollerDoorCategories.map((category) => (
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
                        const productInfo = `${category.title} - Ролетна гаражна врата`;
                        setLocation(`/contact?product=${encodeURIComponent(productInfo)}`);
                      }}
                      className="bg-primary-blue hover:bg-secondary-blue text-white flex-1"
                    >
                      Поискай оферта
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => {
                        // Scroll to more information section
                        const element = document.getElementById(`info-${category.category}`);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="px-4"
                    >
                      Още информация
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
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
                  src="@assets/475190107_1007270957884039_5553773364182985176_n_1756995278271.jpg"
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
                  src="@assets/ролетна-врата-за-гараж-термо-ламел_1756995220376.jpg"
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

      {/* Technical Installation Systems */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Системи за монтаж</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Предлагаме различни системи за монтаж според вашите архитектурни нужди
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <img
                  src="@assets/релсовия път да следва покрива_1756995220374.jpg"
                  alt="Релсов път следващ покрива"
                  className="w-full h-full object-contain bg-gray-50"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Релсов път следващ покрива
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Специална система, при която релсовият път следва формата на покрива за оптимално използване на пространството.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Следва формата на покрива</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Максимално използване на височината</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <img
                  src="@assets/стандартно плъзгане_1756995220374.jpg"
                  alt="Стандартно плъзгане"
                  className="w-full h-full object-contain bg-gray-50"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Стандартно плъзгане
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Класическа система за монтаж с релсов път, разположен успоредно на стената.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Лесен монтаж</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Надеждна конструкция</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <img
                  src="@assets/пружини в задна част на релсите_1756995220374.jpg"
                  alt="Пружини в задната част"
                  className="w-full h-full object-contain bg-gray-50"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Пружини в задната част
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Система с пружини в задната част на релсите за по-лесно управление и балансиране.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Балансирана система</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Лесно ръчно управление</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Автоматизация с Somfy</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="@assets/170_1756995278272.png"
                  alt="Somfy Centreo спецификации"
                  className="w-full h-auto rounded-lg shadow-lg"
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