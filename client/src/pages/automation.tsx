import { useEffect } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { useLocation } from 'wouter';

export default function Automation() {
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
              Автоматика за гаражни врати
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Висококачествена автоматика за гаражни и индустриални врати на водещия немски производител Sommer.
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

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="@assets/image_1756997209280.png"
                  alt="Sommer автоматика за гаражни врати"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Професионални решения за всяко приложение
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Roltech ООД предлага на своите клиенти висококачествена автоматика за гаражни и индустриални врати на водещия немски производител Sommer.
                </p>
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

          {/* Product Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Серии автоматика Sommer
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
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
                  <div className="space-y-2 mb-4">
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
                  <Button
                    onClick={() => {
                      const productInfo = "Sommer ProPlus автоматика";
                      setLocation(`/contact?product=${encodeURIComponent(productInfo)}`);
                    }}
                    className="w-full bg-primary-blue hover:bg-secondary-blue text-white"
                  >
                    Поискайте оферта
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
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
                  <div className="space-y-2 mb-4">
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
                  <Button
                    onClick={() => {
                      const productInfo = "Sommer Base Plus автоматика";
                      setLocation(`/contact?product=${encodeURIComponent(productInfo)}`);
                    }}
                    className="w-full bg-primary-blue hover:bg-secondary-blue text-white"
                  >
                    Поискайте оферта
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
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
                  <div className="space-y-2 mb-4">
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
                  <Button
                    onClick={() => {
                      const productInfo = "Sommer Gigased автоматика";
                      setLocation(`/contact?product=${encodeURIComponent(productInfo)}`);
                    }}
                    className="w-full bg-primary-blue hover:bg-secondary-blue text-white"
                  >
                    Поискайте оферта
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Accessories Section */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Пълна гама аксесоари</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Към механизмите се предлагат пълната гама аксесоари – фотоклетки, бутониери, приемници и други компоненти за пълноценно автоматизиране на вашата гаражна врата.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 shadow-sm mb-3">
                    <CheckCircle className="h-8 w-8 text-green-500 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Фотоклетки</h4>
                  <p className="text-sm text-gray-600">Безопасност и автоматично спиране</p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 shadow-sm mb-3">
                    <CheckCircle className="h-8 w-8 text-green-500 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Бутониери</h4>
                  <p className="text-sm text-gray-600">Удобно управление от вътре</p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 shadow-sm mb-3">
                    <CheckCircle className="h-8 w-8 text-green-500 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Приемници</h4>
                  <p className="text-sm text-gray-600">Безжично дистанционно управление</p>
                </div>
              </div>
              <Button
                onClick={() => {
                  const productInfo = "Аксесоари за автоматика - Консултация";
                  setLocation(`/contact?product=${encodeURIComponent(productInfo)}`);
                }}
                className="bg-primary-blue hover:bg-secondary-blue text-white px-8 py-3 text-lg"
              >
                Консултация за аксесоари
              </Button>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Защо да изберете Sommer автоматика?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-primary-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Немско качество</h3>
                <p className="text-sm text-gray-600">Водещ производител с дългогодишен опит</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Дълъг живот</h3>
                <p className="text-sm text-gray-600">Издръжливост и безпроблемна работа</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Пълно покритие</h3>
                <p className="text-sm text-gray-600">Решения за всички типове врати</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Професионален монтаж</h3>
                <p className="text-sm text-gray-600">Експертна инсталация от Roltech</p>
              </div>
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
            Свържете се с нас за професионална консултация и безплатна оферта за Sommer автоматика.
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