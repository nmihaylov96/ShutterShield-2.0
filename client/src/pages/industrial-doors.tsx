import { useEffect } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowLeft, Phone } from 'lucide-react';
import { useLocation } from 'wouter';


export default function IndustrialDoors() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <section className="bg-gradient-to-br from-primary-blue to-secondary-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Индустриални секционни врати
            </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
  Идеално решение за осигуряването на надеждна, безопасна и ефективна работа при производствени помещения, складове и други типове помещения с висока интензивност на преминаване и товаро-разтоварни дейности.
              </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button
                onClick={scrollToContact}
                className="bg-yellow-accent text-gray-900 px-8 py-3 hover:bg-yellow-500 font-semibold"
                data-testid="button-request-quote"
              >
                Поискайте оферта
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white bg-transparent px-8 py-3 hover:bg-white hover:text-primary-blue font-semibold"
                onClick={() => window.open('tel:087 678 2271', '_self')}
                data-testid="button-call"
              >
                <Phone className="mr-2 h-5 w-5" />
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
  Прецизни компоненти за надеждна работа
</h2>
<p className="text-gray-600 mb-6 text-lg">
  Идеално прецизираните компоненти допринасят за една надеждно работеща система при интензивна употреба. Индустриалните секционни врати са проектирани за обекти с висока честота на използване и специални изисквания.
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
                src="/src/components/img/ZHilishtni-i-industrialni-garazhni-vrati-2.jpg"
                alt="Индустриални секционни врати"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sliding Systems Section */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Видове плъзгащи системи на отваряне
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Предлагаме различни типове плъзгащи системи, подходящи за всякакви архитектурни изисквания
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="p-6 hover:shadow-lg transition-shadow">
        <div className="bg-primary-blue text-white rounded-lg w-12 h-12 flex items-center justify-center mb-4">
          <span className="text-xl font-bold">1</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Стандартни плъзгащи системи
        </h3>
        <p className="text-gray-600">
          Класическо решение за стандартни приложения с оптимално съотношение цена-качество
        </p>
      </Card>

      <Card className="p-6 hover:shadow-lg transition-shadow">
        <div className="bg-primary-blue text-white rounded-lg w-12 h-12 flex items-center justify-center mb-4">
          <span className="text-xl font-bold">2</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Системи с монтиране на пружини в задната част
        </h3>
        <p className="text-gray-600">
          Плъзгащи системи с монтиране на торсионните пружини в задната част на релсите за специфични нужди
        </p>
      </Card>

      <Card className="p-6 hover:shadow-lg transition-shadow">
        <div className="bg-primary-blue text-white rounded-lg w-12 h-12 flex items-center justify-center mb-4">
          <span className="text-xl font-bold">3</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Издигнати релсови пътища
        </h3>
        <p className="text-gray-600">
          Системи при които релсовият път е издигнат над светлия отвор за максимално използване на пространството
        </p>
      </Card>

      <Card className="p-6 hover:shadow-lg transition-shadow">
        <div className="bg-primary-blue text-white rounded-lg w-12 h-12 flex items-center justify-center mb-4">
          <span className="text-xl font-bold">4</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Вертикални релсови пътища
        </h3>
        <p className="text-gray-600">
          Системи при които релсовият път върви право нагоре, успоредно на стената за специални приложения
        </p>
      </Card>

      <Card className="p-6 hover:shadow-lg transition-shadow">
        <div className="bg-primary-blue text-white rounded-lg w-12 h-12 flex items-center justify-center mb-4">
          <span className="text-xl font-bold">5</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Следващи покрива системи
        </h3>
        <p className="text-gray-600">
          Плъзгащи системи при които релсовият път следва наклона на покрива за оптимална адаптация
        </p>
      </Card>
    </div>
  </div>
</section>

      {/* Applications Section */}
        <section className="py-16 bg-gray-50">
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

      {/* Panel Colors Section */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Цветове на панелите
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Широка гама от цветове и финиши за перфектно съчетание с вашата сграда
      </p>
    </div>
    
    <div className="bg-gray-100 rounded-lg p-8 text-center">
      <p className="text-lg text-gray-700 mb-6">
        Предлагаме богат избор от цветове по RAL каталог, гладки и релефни повърхности, 
        както и имитации на дърво за елегантен завършек.
      </p>
    </div>
  </div>
</section>

{/* Projects Gallery Section */}
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        НАШИ ПРОЕКТИ
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Реализирани индустриални врати в различни обекти
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      <div className="relative overflow-hidden rounded-lg shadow-lg group">
        <img
          src="/src/components/img/20231015_161308.jpg"
          alt="Индустриален проект 1"
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <p className="text-white font-semibold p-4">Складов комплекс</p>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-lg shadow-lg group">
        <img
          src="/src/components/img/20240519_081310.jpg"
          alt="Индустриален проект 2"
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <p className="text-white font-semibold p-4">Производствен цех</p>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-lg shadow-lg group">
        <img
          src="/src/components/img/490516856_1497580138299919_5059929004049007438_n.jpg"
          alt="Индустриален проект 3"
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <p className="text-white font-semibold p-4">Логистичен център</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Sliding Systems Diagrams */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Плъзгащи се системи
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Технически схеми на различните типове системи за отваряне
      </p>
    </div>

    <div className="space-y-8">

      {/* Схема 0 */}
      <Card className="p-6 max-w-4xl mx-auto">
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
          Стандартни плъзгащи системи
        </h3>
        <div className="bg-gray-50 rounded-lg p-4 flex justify-center">
          <img
            src="src/components/img/стандартно плъзгане.jpg"
            alt="Схема на стандартно плъзгане"
            className="w-full h-auto"
          />
        </div>
      </Card>

      {/* Схема 1 */}
      <Card className="p-6 max-w-4xl mx-auto">
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
          Плъзгащи системи с монтиране на торсионните пружини в задната част на релсите
        </h3>
        <div className="bg-gray-50 rounded-lg p-4 flex justify-center">
          <img
            src="src/components/img/пружини в задна част на релсите.jpg"
            alt="Схема на плъзгащи системи с монтиране на торсионните пружини в задната част на релсите"
            className="w-full h-auto"
          />
        </div>
      </Card>

      {/* Схема 2 */}
      <Card className="p-6 max-w-4xl mx-auto">
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
          Плъзгащи системи, когато се изисква релсовия път да бъде издигнат над светлия отвор
        </h3>
        <div className="bg-gray-50 rounded-lg p-4 flex justify-center">
          <img
            src="src/components/img/релсовия път да бъде издигнат над светлия отвор.jpg"
            alt="Схема на издигнати релсови пътища"
            className="w-full h-auto"
          />
        </div>
      </Card>

      {/* Схема 3 */}
      <Card className="p-6 max-w-4xl mx-auto">
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
          Плъзгащи системи, при които релсовия път върви право нагоре, успоредно на стената
        </h3>
        <div className="bg-white rounded-lg p-4 flex justify-center">
          <img
            src="src/components/img/релсовия път върви успоредно на стената.jpg"
            alt="Схема на вертикални релсови пътища"
            className="w-full h-auto"
          />
        </div>
      </Card>

      {/* Схема 4 */}
      <Card className="p-6 max-w-4xl mx-auto">
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
          Плъзгащи системи, когато се изисква релсовия път да следва покрива
        </h3>
        <div className="bg-gray-50 rounded-lg p-4 flex justify-center">
          <img
            src="src/components/img/релсовия път да следва покрива.jpg"
            alt="Схема на следващи покрива системи"
            className="w-full h-auto"
          />
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
