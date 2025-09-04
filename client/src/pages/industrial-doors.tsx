import { useEffect } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { useLocation } from 'wouter';

export default function IndustrialDoors() {
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
              Индустриални секционни врати
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Усилени секционни врати за индустриални обекти с висока честота на използване и специални изисквания.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => {
                  const productInfo = "Индустриални секционни врати - Консултация";
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
                Решения за индустриални нужди
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Индустриалните секционни врати са проектирани за обекти с висока честота на използване и специални изисквания за здравина и функционалност.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-lg text-gray-700">Повишена здравина и издръжливост</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-lg text-gray-700">Устойчивост на интензивна употреба</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-lg text-gray-700">Специални размери до 8м ширина</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-lg text-gray-700">Подходящи за складове и производства</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Индустриални секционни врати"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Приложения</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Индустриалните секционни врати намират широко приложение в различни сектори
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="bg-primary-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Складове и логистика</h3>
              <p className="text-gray-600">Оптимални за складови комплекси с интензивен товарен трафик</p>
            </Card>

            <Card className="text-center p-6">
              <div className="bg-primary-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Производствени цехове</h3>
              <p className="text-gray-600">Подходящи за производствени предприятия с високи изисквания</p>
            </Card>

            <Card className="text-center p-6">
              <div className="bg-primary-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Автомобилни центрове</h3>
              <p className="text-gray-600">Идеални за автосервизи и търговски центрове</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Технически характеристики
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Размери и конструкция</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Максимална ширина:</span>
                  <span className="font-medium">До 8000мм</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Максимална височина:</span>
                  <span className="font-medium">До 6000мм</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Дебелина на панели:</span>
                  <span className="font-medium">40-80мм</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Материал:</span>
                  <span className="font-medium">Стомана/Алуминий</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Експлоатационни характеристики</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Работни цикли:</span>
                  <span className="font-medium">До 50 000 годишно</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Скорост на отваряне:</span>
                  <span className="font-medium">До 1.0 м/сек</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Устойчивост на вятър:</span>
                  <span className="font-medium">До клас 3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Изолация:</span>
                  <span className="font-medium">U до 0.5 W/m²K</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Нужна ви е индустриална секционна врата?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Свържете се с нас за професионална консултация и оферта според вашите специфични изисквания.
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