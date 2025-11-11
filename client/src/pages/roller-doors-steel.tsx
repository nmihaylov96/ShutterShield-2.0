import { useEffect, useState } from "react";
import { ralColors } from "@/data/ralColors";
import { useLanguage } from "@/contexts/language-context";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowLeft, Phone } from "lucide-react";
import { useLocation } from "wouter";
import steelRollerImage from "../components/img/Снимка катеория Стоманена ролетна врата_1756995220376.jpeg";

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

const [search, setSearch] = useState("");
const [showAll, setShowAll] = useState(false);

const filteredColors = ralColors.filter(
  (c) =>
    c.code.toLowerCase().includes(search.toLowerCase()) ||
    c.name.toLowerCase().includes(search.toLowerCase())
);

const displayedColors = showAll ? filteredColors : filteredColors.slice(0, 100);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section с фоново изображение */}
      <section
        className="relative text-white py-20"
        style={{
          backgroundImage:
            "url(src/components/img/csm_rollmatic_1_1000x700_c767c16ac2-700x441.jpeg)",
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
              Стоманени ролетни врати
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Нашите стоманени ролетни врати съчетават здравина и сигурност,
              като осигуряват надеждна защита и елегантен завършек на всяко
              помещение.
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

      {/* Main Content - Technical Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Характеристики на стоманените ролетни врати
              </h2>
              <p className="text-gray-600 mb-4 text-lg">
                Стоманените ролетни врати осигуряват{" "}
                <strong>високо ниво на сигурност и устойчивост</strong>. За
                производството им се използва закалена стомана за ламелите
                (плоските елементи), стоманени „Омега” водачи от клас А, а
                заключването е със здрави и надеждни стоманени шишове.
              </p>
              <p className="text-gray-600 mb-4 text-lg">
                Дебелината на ламела е <strong>от 0.5 мм до 0.8 мм</strong>, а
                височината <strong>105 мм</strong>.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                Максималните размери на стоманените ролетни врати са{" "}
                <strong>34 кв.м</strong>, като допустимата широчина е{" "}
                <strong>6000 мм</strong>, а височина – <strong>5400 мм</strong>.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                Докато при термоизолационните врати ламелите могат да са
                единствено плътни, при стоманените има няколко варианта:
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">
                    Стандартен ламел
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">
                    Ситна перфорация
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Едра перфорация</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">
                    Ветроупорен ламел
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Тип „Оплетка“</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src={steelRollerImage}
                alt="Стоманена ролетна врата"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Технически параметри
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-l-4 border-primary-blue pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Максимални размери
                  </h4>
                  <p className="text-gray-600">До 34 кв.м</p>
                </div>
                <div className="border-l-4 border-primary-blue pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Максимална широчина
                  </h4>
                  <p className="text-gray-600">6000 мм</p>
                </div>
                <div className="border-l-4 border-primary-blue pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Максимална височина
                  </h4>
                  <p className="text-gray-600">5400 мм</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-primary-blue pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Дебелина на ламел
                  </h4>
                  <p className="text-gray-600">0.5 мм - 0.8 мм</p>
                </div>
                <div className="border-l-4 border-primary-blue pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Височина на ламел
                  </h4>
                  <p className="text-gray-600">105 мм</p>
                </div>
                <div className="border-l-4 border-primary-blue pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Покритие</h4>
                  <p className="text-gray-600">Прахово боядисване RAL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Slats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Типове стоманени ламели
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Разновидността от типа ламели ви дава решение за всички помещения
              - гараж, търговски обект, дворна врата, индустриална врата и
              други.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: "Стандартен ламел",
                desc: "Класически плътен ламел без перфорация",
                img: "src/components/img/h105-stuff.jpg",
              },
              {
                title: "Ситна перфорация",
                desc: "Позволява вентилация със запазена сигурност",
                img: "src/components/img/h105-stuff (1).jpg",
              },
              {
                title: "Едра перфорация",
                desc: "По-голяма прозрачност и въздушен поток",
                img: "src/components/img/h105-stuff (2).jpg",
              },
              {
                title: "Ветроупорен ламел",
                desc: "Усилена конструкция за екстремни условия",
                img: "src/components/img/images.jpg",
              },
              {
                title: "Тип „Оплетка“",
                desc: "Декоративен вид с висока вентилация",
                img: "src/components/img/pic_10.jpg",
              },
            ].map((slat, idx) => (
              <Card
                key={idx}
                className="text-center p-4 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="relative h-40 overflow-hidden mb-4 rounded-lg">
                  <img
                    src={slat.img}
                    alt={slat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {slat.title}
                </h3>
                <p className="text-gray-600 text-sm">{slat.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      

{/* Colors Section */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Цветове и покрития
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Прахово боядисване във всеки цвят по RAL палитра
      </p>
    </div>

    <div className="bg-gray-50 rounded-lg p-8">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Търси по код или име (напр. RAL 7016 или Grey)"
          className="border border-gray-300 rounded-lg p-2 w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Групиране на първите 100 цвята */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-3">
        {filteredColors.slice(0, 100).map((color) => (
          <div
            key={color.code}
            className="rounded-lg border border-gray-200 cursor-pointer hover:scale-105 transition-transform duration-200 shadow-sm"
            style={{
              backgroundColor: color.hex,
              height: "70px",
            }}
            title={`${color.code} – ${color.name}`}
          >
            <div className="text-[10px] text-center font-semibold text-gray-900 bg-white/80 rounded-b-md">
              {color.code}
            </div>
          </div>
        ))}
      </div>

      {/* Ако искаш бутон за показване на всички */}
      {filteredColors.length > 100 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-primary-blue text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            {showAll ? "Покажи по-малко" : "Покажи всички"}
          </button>
        </div>
      )}
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
        Реализирани индустриални секционни врати в различни обекти
      </p>
    </div>

 {/* Gallery of 7 projects */}
<div className="flex flex-col items-center gap-6">
  {/* First row - 4 images */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
    <img src="src/components/img/IMG-607999df1c7f7fbb33427544d8ddfd04-V.jpg" alt="Проект 1" className="rounded-lg shadow-md h-64 w-full object-cover hover:scale-105 transition-transform duration-300" />
    <img src="src/components/img/IMG-e53917d0073dcdb72c800f88b61a8e13-V.jpg" alt="Проект 2" className="rounded-lg shadow-md h-64 w-full object-cover hover:scale-105 transition-transform duration-300" />
    <img src="src/components/img/IMG-a55db8bb09a0933fa0fbc3d026b28982-V.jpg" alt="Проект 3" className="rounded-lg shadow-md h-64 w-full object-cover hover:scale-105 transition-transform duration-300" />
    <img src="src/components/img/img_3_1756796099285.jpg" alt="Проект 4" className="rounded-lg shadow-md h-64 w-full object-cover hover:scale-105 transition-transform duration-300" />
  </div>

  {/* Second row - centered 3 images */}
  <div className="flex justify-center flex-wrap gap-6 mt-6">
    <img src="src/components/img/492075966_1505554194169180_5408228019264660139_n.jpg" alt="Проект 5" className="rounded-lg shadow-md h-64 w-72 object-cover hover:scale-105 transition-transform duration-300" />
    <img src="src/components/img/475163142_1006919107919224_7610862781310710227_n.jpg" alt="Проект 6" className="rounded-lg shadow-md h-64 w-72 object-cover hover:scale-105 transition-transform duration-300" />
    <img src="src/components/img/475076458_1007263497884785_1459118725417967718_n.jpg" alt="Проект 7" className="rounded-lg shadow-md h-64 w-72 object-cover hover:scale-105 transition-transform duration-300" />
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
