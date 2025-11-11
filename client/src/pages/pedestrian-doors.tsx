import { useEffect } from "react";
import { useLanguage } from "@/contexts/language-context";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowLeft, Phone } from 'lucide-react';
import { useLocation } from "wouter";

export default function PedestrianDoors() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    setLocation("/");
    setTimeout(() => {
      const element = document.getElementById("contact");
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
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
              onClick={() => setLocation("/")}
              className="mb-8 border-2 border-white text-white bg-black/20 hover:bg-white hover:text-primary-blue font-semibold px-6 py-2"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t.common.back}
            </Button>
          </div>

<div className="text-center">
  <h1 className="text-4xl md:text-6xl font-bold mb-6">
    Пешеходни врати
  </h1>
  <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
    Нашите пешеходни врати могат да бъдат изработени от стоманени ламели или от термоизолационни панели. Те дават завършен вид на вашият проект.
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

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Удобство и функционалност
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Пешеходните врати осигуряват удобен достъп без необходимост от
                отваряне на основната гаражна врата, спестявайки енергия и
                време.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-lg text-gray-700">
                    Интегрирани в секционни врати
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-lg text-gray-700">
                    Енергоспестяващи решения
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-lg text-gray-700">
                    Високо ниво на безопасност
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-lg text-gray-700">
                    Различни дизайни и размери
                  </span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="src/components/img/SiteAssetImage.jpg"
                alt="Пешеходни врати"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

<div className="grid md:grid-cols-2 gap-8">
  <Card 
    className="overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
    onClick={() => setLocation('/pedestrian-doors-steel')}
    data-testid="card-steel-slats"
  >
    <div className="relative h-64 overflow-hidden">
      <img
        src="src/components/img/mica-led-1-800x800.jpg"
        alt="Пешеходна врата от стоманени ламели"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
    </div>
    <CardContent className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-blue transition-colors">
        Пешеходни врати от стоманени ламели
      </h3>
      <p className="text-gray-600 mb-4">
        Както при{' '}
<button
  onClick={(e) => {
    e.stopPropagation();
    e.preventDefault();
    setLocation('/roller-doors-steel', { replace: true });
  }}
          className="text-primary-blue hover:text-secondary-blue font-semibold underline"
        >
          Стоманените ролетни врати
        </button>
        , и при пешеходните изработени от стоманен ламел, ламелите имат различни вариации.
      </p>
      <div className="space-y-2">
        <div className="flex items-center">
          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
          <span className="text-sm">Ситна перфорация</span>
        </div>
        <div className="flex items-center">
          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
          <span className="text-sm">Едра перфорация</span>
        </div>
        <div className="flex items-center">
          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
          <span className="text-sm">Плътен ламел</span>
        </div>
        <div className="flex items-center">
          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
          <span className="text-sm">Тип „Оплетка"</span>
        </div>
        <div className="flex items-center">
          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
          <span className="text-sm">Прахово боядисване във всеки цвят по RAL</span>
        </div>
      </div>
      <Button 
        className="w-full mt-4 bg-primary-blue text-white hover:bg-secondary-blue"
        onClick={(e) => {
          e.stopPropagation();
          setLocation('/pedestrian-doors-steel');
        }}
        data-testid="button-learn-more-steel"
      >
        Научете повече
      </Button>
    </CardContent>
  </Card>

  <Card 
    className="overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
    onClick={() => setLocation('/roller-doors-thermal')}
    data-testid="card-thermal-insulated"
  >
    <div className="relative h-64 overflow-hidden">
      <img
        src="src/components/img/17302059105026.jpg"
        alt="Термоизолационни пешеходни врати"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
    </div>
    <CardContent className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-blue transition-colors">
        Термоизолационни пешеходни врати
      </h3>
      <p className="text-gray-600 mb-4">
        Ламелите на термоизолационните пешеходни врати имат характеристики като ламелите при{' '}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setLocation('/roller-doors-thermal');
          }}
          className="text-primary-blue hover:text-secondary-blue font-semibold underline"
        >
          Термоизолационните ролетни врати
        </button>
        .
      </p>
      <div className="space-y-2">
        <div className="flex items-center">
          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
          <span className="text-sm">Отлична термоизолация</span>
        </div>
        <div className="flex items-center">
          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
          <span className="text-sm">Богат набор от цветове</span>
        </div>
        <div className="flex items-center">
          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
          <span className="text-sm">Декори: златен дъб, орех</span>
        </div>
        <div className="flex items-center">
          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
          <span className="text-sm">Енергийна ефективност</span>
        </div>
        <div className="flex items-center">
          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
          <span className="text-sm">Модерен естетичен вид</span>
        </div>
      </div>
      <Button 
        className="w-full mt-4 bg-primary-blue text-white hover:bg-secondary-blue"
        onClick={(e) => {
          e.stopPropagation();
          setLocation('/roller-doors-thermal');
        }}
        data-testid="button-learn-more-thermal"
      >
        Научете повече
      </Button>
    </CardContent>
  </Card>
</div>

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
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Енергийна ефективност
              </h3>
              <p className="text-gray-600">
                Намаляват топлинните загуби при чест достъп
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="bg-primary-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Удобство</h3>
              <p className="text-gray-600">
                Бърз и лесен достъп без отваряне на цялата врата
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="bg-primary-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Безопасност
              </h3>
              <p className="text-gray-600">
                Контролиран достъп и повишена сигурност
              </p>
            </Card>
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
        Реализирани пешеходни врати в различни обекти
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      <div className="relative overflow-hidden rounded-lg shadow-lg group">
        <img
          src="src/components/img/img_2_1756796079808.jpg"
          alt="Проект пешеходна врата 1"
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <p className="text-white font-semibold p-4">Търговски обект</p>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-lg shadow-lg group">
        <img
          src="src/components/img/IMG-1f97f1e0bf71bae86ab47d57b43e859f-V.jpg"
          alt="Проект пешеходна врата 2"
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <p className="text-white font-semibold p-4">Жилищна сграда</p>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-lg shadow-lg group">
        <img
          src="src/components/img/IMG-87f43f5d6887620b91017ff98a07a2a2-V.jpg"
          alt="Проект пешеходна врата 3"
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <p className="text-white font-semibold p-4">Индустриален обект</p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Интересувате се от пешеходни врати?
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
