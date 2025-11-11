import { useEffect } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowLeft, Phone, Thermometer, Shield, Palette } from 'lucide-react';
import { useLocation } from 'wouter';

export default function PedestrianDoorsThermalInsulated() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-blue to-secondary-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Button
              variant="outline"
              onClick={() => setLocation("/")}
              className="mb-8 border-2 border-white text-white bg-black/20 hover:bg-white hover:text-primary-blue font-semibold px-6 py-2"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t.common.back}
            </Button>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Термоизолационни пешеходни врати
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Съвременни пешеходни врати с отлична топлоизолация и естетичен вид
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => {
                  const productInfo = "Термоизолационна пешеходна врата - Консултация";
                  setLocation(`/contact?product=${encodeURIComponent(productInfo)}`);
                }}
                size="lg"
                className="bg-yellow-accent text-gray-900 hover:bg-yellow-500 font-semibold"
                data-testid="button-request-quote-hero"
              >
                Поискай оферта
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white bg-transparent px-8 py-3 hover:bg-white hover:text-primary-blue font-semibold"
                onClick={() => window.open("tel:087 678 2271", "_self")}
                data-testid="button-call"
              >
                <Phone className="mr-2 h-5 w-5" />
                Обадете се
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Характеристики на термоизолационните ламели
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Ламелите на термоизолационните пешеходни врати имат характеристики като ламелите при{' '}
                <button
                  onClick={() => setLocation('/roller-doors-thermal')}
                  className="text-primary-blue hover:text-secondary-blue font-semibold underline"
                >
                  Термоизолационните ролетни врати
                </button>
                . Те осигуряват отлична топлоизолация и енергийна ефективност.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Отлична топлоизолация</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Енергийна ефективност</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Модерен естетичен вид</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Дълготрайна експлоатация</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Термоизолационни пешеходни врати"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Предимства
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Защо да изберете термоизолационни пешеходни врати?
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="bg-primary-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Thermometer className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Термоизолация</h3>
              <p className="text-gray-600">
                Изолирани панели, които запазват температурата в помещението
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="bg-primary-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Издръжливост</h3>
              <p className="text-gray-600">
                Висококачествени материали с дълъг експлоатационен живот
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="bg-primary-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Palette className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Естетика</h3>
              <p className="text-gray-600">
                Богат набор от цветове и декоративни варианти
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Colors and Designs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Цветове и декори
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Изберете цвят или декор, който допълва вашия дизайн
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Богата цветова палитра
              </h3>
              <p className="text-gray-600 mb-6">
                Предлагаме голямо разнообразие от цветове, които да съответстват на вашия архитектурен стил.
              </p>
              <div className="grid grid-cols-4 gap-4">
                {['#FFFFFF', '#F5F5DC', '#D2B48C', '#C0C0C0', '#8B7355', '#696969', '#2F4F4F', '#000000'].map((color, idx) => (
                  <div
                    key={idx}
                    className="aspect-square rounded-lg shadow-md border-2 border-gray-200"
                    style={{ backgroundColor: color }}
                    title={`Цвят ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Декоративни варианти
              </h3>
              <div className="space-y-4">
                <Card className="p-4">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-700 to-yellow-900 rounded-lg mr-4"></div>
                    <div>
                      <h4 className="font-bold text-gray-900">Златен дъб</h4>
                      <p className="text-sm text-gray-600">Естествен дървесен декор</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-800 to-stone-900 rounded-lg mr-4"></div>
                    <div>
                      <h4 className="font-bold text-gray-900">Орех</h4>
                      <p className="text-sm text-gray-600">Елегантен тъмен декор</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-500 rounded-lg mr-4"></div>
                    <div>
                      <h4 className="font-bold text-gray-900">Гладка повърхност</h4>
                      <p className="text-sm text-gray-600">Модерен минималистичен вид</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Технически характеристики
            </h2>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Материали</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Алуминиеви панели с полиуретанова изолация</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Дебелина на ламела: 40-77мм</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">UV защитно покритие</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Изолация</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">U-value: до 0.9 W/m²K</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Шумоизолация</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Енергоспестяваща</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              НАШИ ПРОЕКТИ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Реализирани термоизолационни пешеходни врати
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Проект 1"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <p className="text-white font-semibold p-4">Жилищна сграда</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Проект 2"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <p className="text-white font-semibold p-4">Офис сграда</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Проект 3"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <p className="text-white font-semibold p-4">Търговски център</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Интересувате се от термоизолационни пешеходни врати?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Свържете се с нас за безплатна консултация и оферта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => {
                const productInfo = "Термоизолационна пешеходна врата";
                setLocation(`/contact?product=${encodeURIComponent(productInfo)}`);
              }}
              size="lg"
              className="bg-yellow-accent text-gray-900 hover:bg-yellow-500 font-semibold"
              data-testid="button-request-quote-cta"
            >
              Поискай оферта
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white bg-transparent px-8 py-3 hover:bg-white hover:text-primary-blue font-semibold"
              onClick={() => window.open("tel:087 678 2271", "_self")}
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
