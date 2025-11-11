import { useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";
import { ArrowLeft, CheckCircle, Phone, Mail } from "lucide-react";

export default function IndustrialRollerDoors() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section with Image */}
      <section
        className="relative bg-gradient-to-br from-primary-blue to-secondary-blue text-white py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(45, 85, 155, 0.3), rgba(45, 85, 155, 0.3)), url(src/components/img/Commercial-and-Industrial-Doors-Perth-531.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          imageRendering: "crisp-edges",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Button
              onClick={() => setLocation("/")}
              className="flex items-center border-2 border-white text-white bg-transparent px-6 py-3 hover:bg-primary-blue hover:text-white font-semibold rounded mr-4 transition-colors"
              data-testid="button-back"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Назад
            </Button>
          </div>

          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Индустриални ролетни врати
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Устойчиви, здрави и лесни за поддръжка - перфектният бюджетен
              вариант за вашето производствено или складово помещение.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setLocation("/contact")}
                size="lg"
                className="bg-yellow-accent text-gray-900 hover:bg-yellow-500 font-semibold"
                data-testid="button-request-quote"
              >
                Поискайте оферта
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
        </div>
      </section>

      {/* Main Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Защо да изберете индустриални ролетни врати?
              </h2>

              <div className="prose prose-lg text-gray-700 mb-6">
                <p className="mb-4">
                  Индустриалните ролетни врати са{" "}
                  <strong>устойчиви, здрави и лесни за поддръжка</strong>.
                  Благодарение на опростената им конструкция те са перфектния
                  бюджетен вариант за вашето производствено или складово
                  помещение.
                </p>
                <p className="mb-4">
                  Принципът им на работа е близък до гаражния тип ролетни врати,
                  а именно навиват на ролка над светлия отвор, което допринася
                  за <strong>запазване на пространството</strong> във вашето
                  помещение.
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Устойчива и здрава конструкция
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Лесна поддръжка</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Икономия на пространство
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Бюджетно решение</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="src/components/img/industrialni-roletni-vrati-pravi-lameli.jpg"
                alt="Индустриални ролетни врати - жълти врати с прозорци"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Технически характеристики
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Предлагаме два типа индустриални ролетни врати според вашите нужди
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Steel Lamella */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Стоманен ламел
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">
                      Максимална широчина:
                    </span>
                    <span className="text-gray-900 font-semibold">6000 мм</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">
                      Максимална височина:
                    </span>
                    <span className="text-gray-900 font-semibold">5400 мм</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">Цветове:</span>
                    <span className="text-gray-900 font-semibold">
                      По RAL каталог
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <Button
                    onClick={() => setLocation("/roller-doors-steel")}
                    className="w-full bg-primary-blue hover:bg-secondary-blue text-white"
                    data-testid="button-view-steel-colors"
                  >
                    Вижте цветовете
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Thermal Lamella */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Термоизолационен ламел
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">
                      Максимална широчина:
                    </span>
                    <span className="text-gray-900 font-semibold">5200 мм</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">
                      Максимална височина:
                    </span>
                    <span className="text-gray-900 font-semibold">4100 мм</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">
                      Топлоизолация:
                    </span>
                    <span className="text-gray-900 font-semibold">Отлична</span>
                  </div>
                </div>

                <div className="mt-6">
                  <Button
                    onClick={() => setLocation("/contact")}
                    className="w-full bg-yellow-accent text-gray-900 hover:bg-yellow-500"
                    data-testid="button-request-thermal-quote"
                  >
                    Поискайте оферта
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Наши проекти
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Реализирани индустриални ролетни врати в различни обекти
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="src/components/img/20231105_144844.jpg"
                alt="Индустриални ролетни врати - проект 1"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white"></div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="src/components/img/20250118_170543.jpg"
                alt="Индустриални ролетни врати - проект 2"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white"></div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="src/components/img/488764597_1488699222521344_6569804972180401134_n.jpg"
                alt="Индустриални ролетни врати - проект 3"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white"></div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="src/components/img/IMG-ff5cec0b5b43a37e2c595bbd96c49f4c-V.jpg"
                alt="Индустриални ролетни врати - проект 4"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white"></div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="src/components/img/475190107_1007270957884039_5553773364182985176_n.jpg"
                alt="Индустриални ролетни врати - проект 5"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white"></div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="src/components/img/img_1_1667445811813.jpg"
                alt="Индустриални ролетни врати - проект 6"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Готови сте за вашия проект?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Свържете се с нас за безплатна консултация и оферта за индустриални
            ролетни врати
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setLocation("/contact")}
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
