import { useEffect } from "react";
import { useLanguage } from "@/contexts/language-context";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  CheckCircle,
  ArrowLeft,
  Phone,
  Thermometer,
  Shield,
  Zap,
} from "lucide-react";
import { useLocation } from "wouter";
import thermalRollerImage from "../components/img/Термоизолационна.jpg";
import lamelCross from "../components/img/Охранително_ролетна_алуминиева-300x218.jpg";
import lamelDecor from "../components/img/ролетна-врата-за-гараж-термо-ламел.jpg";

// Нови импорти за цветови проби (използвайте имената които предоставихте)
import swatchRal9006 from "../components/img/RAL-9006-PE-MAT.jpg";
import swatchGoldenOak from "../components/img/k629d_v4_1288x195_frontal.jpg";
import swatchWhite from "../components/img/images.png";
import swatchBrown from "../components/img/c98058b7253d0fc8a002313f0e9ad39f.png";
import swatchWalnut from "../components/img/14137310.jpg";

export default function RollerDoorsSteel() {
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

      {/* Hero Section с фоново изображение */}
      <section
        className="relative text-white py-20"
        style={{
          backgroundImage: "url(src/components/img/Термоизолация-фон.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>{" "}
        {/* леко тъмно покритие за контраст на текста */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Термоизолационни ролетни врати
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Нашите термоизолационни ролетни врати съчетават отлична топло- и
              шумоизолация с висока безопасност и комфорт.
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

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Характеристики на термоизолационните ролетни врати
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Термоизолационните ролетни врати са изработени от{" "}
                <strong>
                  алуминиеви панели с пълнеж от полиуретанова изолация
                </strong>
                . Те осигуряват отлична топлоизолация, звукоизолация и енергийна
                ефективност.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                Дебелината на ламелите е <strong>77мм</strong>, което гарантира
                перфектна изолация и дългосрочна експлоатация. Идеални за
                отопляеми помещения и обекти с високи изисквания за климатичен
                контрол.
              </p>

              {/* ✅ Нов текст */}
              <p className="text-gray-600 mb-6 text-lg">
                Термоизолационните ролетни врати са перфектна комбинация за
                вашата <strong>безопасност и комфорт</strong>. Изработват се от
                алуминиеви ламели с пенополиуретанова пяна с височина{" "}
                <strong>77 мм</strong> и дебелина <strong>19 мм</strong>.
                Високото качество и стандарт на изработка гарантират безупречни
                показатели на <strong>шумо- и топлоизолация</strong>.
                Максималната квадратура на такъв тип врати е{" "}
                <strong>20 кв.м</strong>, като допустимата широчина е{" "}
                <strong>5200 мм</strong>, а височината –{" "}
                <strong>4100 мм</strong>. Благодарение на това, ролетните врати
                са подходящи както за <strong>гаражи</strong>, така и за{" "}
                <strong>търговски и индустриални помещения</strong>.
              </p>
              <div className="space-y-4 mt-6">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">
                    Отлична топлоизолация
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Звукоизолация</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">
                    Енергийна ефективност
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">
                    Модерен естетичен вид
                  </span>
                </div>
                {/* Gallery Section */}
                <section className="py-16 bg-gray-50">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Заглавие */}
                    <div className="text-center mb-12">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Декори и разрези на ламели
                      </h2>
                      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Вижте покритията и структурата на ламелите
                      </p>
                    </div>

                    {/* Gallery Cards */}
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Първа снимка */}
                      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center text-center">
                        <img
                          src={lamelDecor}
                          alt="Декор - златен дъб"
                          className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Декор — златен дъб / орех
                          </h3>
                          <p className="text-sm text-gray-500">
                            Реално покритие и структура на ламела
                          </p>
                        </div>
                      </div>

                      {/* Втора снимка */}
                      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center text-center">
                        <img
                          src={lamelCross}
                          alt="Разрез на ламел 77 мм"
                          className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Разрез на ламел
                          </h3>
                          <p className="text-sm text-gray-500">
                            77 мм • PU пълнеж
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-12 text-xs text-gray-500 text-center">
                      Изображенията са илюстративни. Цветове и декори може да
                      варират.
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <div>
              <img
                src={thermalRollerImage}
                alt="Термоизолационна ролетна врата"
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
              Защо да изберете термоизолационни ролетни врати?
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="bg-primary-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Thermometer className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Отлична изолация
              </h3>
              <p className="text-gray-600">
                77мм дебелина с PU пяна за максимална термоизолация
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="bg-primary-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Висока здравина
              </h3>
              <p className="text-gray-600">
                Алуминиеви панели с изключителна устойчивост
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="bg-primary-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Енергоспестяваща
              </h3>
              <p className="text-gray-600">
                Намаляване на разходите за отопление и климатизация
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Технически характеристики
            </h2>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Материали и конструкция
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Алуминиеви панели с полиуретанова изолация
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Дебелина на ламела: 77мм
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">UV защитно покритие</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Богата цветова палитра
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Изолация и ефективност
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Термоизолация: U-value до 0.9 W/m²K
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Шумоизолация</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Енергоспестяваща технология
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Подходящи за отопляеми помещения
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Colors and Design */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Цветове и дизайн
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Богата палитра от цветове за перфектна интеграция с вашия обект
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Цветова палитра
              </h3>
              <p className="text-gray-600 mb-6">
                Термоизолационните ролетни врати се предлагат в богат набор от
                цветове и декоративни варианти.
              </p>

              {/* Нов блок: използва предоставените изображения като мостри */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  { img: swatchWhite, label: "Бял — RAL 9016" },
                  { img: swatchBrown, label: "Кафяв — RAL 8014" },
                  { img: swatchRal9006, label: "Сив — RAL 9006" },
                  { img: swatchGoldenOak, label: "Златен дъб" },
                  { img: swatchWalnut, label: "Орех" },
                ].map((s, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-full aspect-square rounded-md overflow-hidden border border-gray-200 shadow-sm bg-white">
                      <img
                        src={s.img}
                        alt={s.label}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-2 text-xs text-gray-600 text-center">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Декоративни опции
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Гладка повърхност
                    </h4>
                    <p className="text-sm text-gray-600">
                      Модерен минималистичен стил
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Дървесна текстура
                    </h4>
                    <p className="text-sm text-gray-600">Естествен топъл вид</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Релефна повърхност
                    </h4>
                    <p className="text-sm text-gray-600">
                      Елегантен структуриран дизайн
                    </p>
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
            Интересувате се от термоизолационни ролетни врати?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Свържете се с нас за безплатна консултация и оферта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => {
                const productInfo = "Пешеходна врата от стоманени ламели";
                setLocation(
                  `/contact?product=${encodeURIComponent(productInfo)}`
                );
              }}
              size="lg"
              className="bg-yellow-accent text-gray-900 hover:bg-yellow-500 font-semibold"
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
