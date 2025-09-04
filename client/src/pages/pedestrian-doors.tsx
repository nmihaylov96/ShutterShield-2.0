import { useEffect } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { useLocation } from 'wouter';

export default function PedestrianDoors() {
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
              Пешеходни врати
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Модерни пешеходни врати за удобен и безопасен достъп в комбинация с основните гаражни врати.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => {
                  const productInfo = "Пешеходни врати - Консултация";
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
                Удобство и функционалност
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Пешеходните врати осигуряват удобен достъп без необходимост от отваряне на основната гаражна врата, спестявайки енергия и време.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-lg text-gray-700">Интегрирани в секционни врати</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-lg text-gray-700">Енергоспестяващи решения</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-lg text-gray-700">Високо ниво на безопасност</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-lg text-gray-700">Различни дизайни и размери</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Пешеходни врати"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Типове пешеходни врати</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Предлагаме различни варианти на пешеходни врати според вашите нужди
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Интегрирана пешеходна врата"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Интегрирани пешеходни врати
                </h3>
                <p className="text-gray-600 mb-4">
                  Вградени директно в секционната врата, осигуряват безпроблемен достъп без компромиси в дизайна.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Единен дизайн с главната врата</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Оптимално използване на пространството</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Висока изолация</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Независима пешеходна врата"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Независими пешеходни врати
                </h3>
                <p className="text-gray-600 mb-4">
                  Отделно разположени врати до основната секционна врата за допълнителна гъвкавост.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Гъвкаво разположение</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Независимо функциониране</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Лесна инсталация</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Предимства на пешеходните врати
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="bg-primary-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Енергийна ефективност</h3>
              <p className="text-gray-600">Намаляват топлинните загуби при чест достъп</p>
            </Card>

            <Card className="text-center p-6">
              <div className="bg-primary-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Удобство</h3>
              <p className="text-gray-600">Бърз и лесен достъп без отваряне на цялата врата</p>
            </Card>

            <Card className="text-center p-6">
              <div className="bg-primary-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Безопасност</h3>
              <p className="text-gray-600">Контролиран достъп и повишена сигурност</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Интересувате се от пешеходни врати?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Свържете се с нас за консултация относно най-подходящия тип пешеходна врата за вашия проект.
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