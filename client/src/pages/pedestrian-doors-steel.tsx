import { useEffect } from "react";
import { useLanguage } from "@/contexts/language-context";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowLeft, Phone } from "lucide-react";
import { useLocation } from "wouter";

// ...existing code...
export default function PedestrianDoorsSteelSlats() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative h-[60vh] md:h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('src/components/img/SiteAssetImage.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-6">
          <Button
            variant="outline"
            onClick={() => setLocation("/")}
            className="absolute top-6 left-6 border-2 border-white text-white bg-black/30 hover:bg-white hover:text-primary-blue font-semibold px-6 py-2"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t.common.back}
          </Button>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Пешеходни врати
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            От стоманени и термоизолационни ламели – завършен вид за всеки
            проект
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Нашите пешеходни врати
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Нашите пешеходни врати могат да бъдат изработени от{" "}
              <strong>стоманени ламели</strong> или от{" "}
              <strong>термоизолационни ламели</strong>. Те придават завършен и
              елегантен вид на вашия проект.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Както при{" "}
              <button
                onClick={() => setLocation("/roller-doors-steel")}
                className="text-primary-blue hover:text-secondary-blue font-semibold underline"
              >
                Стоманените ролетни врати
              </button>
              , и при пешеходните врати от стоманен ламел, ламелите имат
              различни вариации: <strong>ситна перфорация</strong>,{" "}
              <strong>едра перфорация</strong>, <strong>плътен ламел</strong> и{" "}
              <strong>тип „Оплетка“</strong>. Всички варианти могат да бъдат{" "}
              <strong>прахово боядисани</strong> във всеки цвят по RAL палитра.
            </p>

            <div className="border-l-4 border-primary-blue pl-4 my-6 text-gray-700 italic">
              Ламелите на термоизолационните пешеходни врати имат
              характеристики, подобни на тези при{" "}
              <button
                onClick={() => setLocation("/roller-doors-thermal")}
                className="text-primary-blue hover:text-secondary-blue font-semibold underline"
              >
                Термоизолационните ролетни врати
              </button>
              . Основното предимство е изолацията и възможността за избор на{" "}
              <strong>дървесни цветове</strong> като <em>златен дъб</em> и{" "}
              <em>орех</em>.
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                onClick={() => {
                  const productInfo =
                    "Пешеходни врати от стоманени и термоизолационни ламели";
                  setLocation(
                    `/contact?product=${encodeURIComponent(productInfo)}`
                  );
                }}
                className="bg-yellow-accent text-gray-900 hover:bg-yellow-500 font-semibold"
              >
                Поискай оферта
              </Button>
              <Button
                variant="outline"
                className="border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white font-semibold"
                onClick={() => window.open("tel:087 678 2271", "_self")}
              >
                <Phone className="mr-2 h-5 w-5" /> Обадете се
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="src/components/img/megadoors.bg-vgradena-peshehodna-vrata-774x1024.jpg"
              alt="Пешеходни врати"
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
            <div className="absolute inset-0 rounded-2xl ring-4 ring-primary-blue/10 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Slats Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Типове ламели
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Изберете най-подходящия тип ламел според вашите нужди
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: "Ситна перфорация",
                desc: "Позволява вентилация, като запазва сигурността",
                src: "src/components/img/h105-stuff (1).jpg",
              },
              {
                title: "Едра перфорация",
                desc: "По-голяма прозрачност и въздушен поток",
                src: "src/components/img/h105-stuff (2).jpg",
              },
              {
                title: "Стандартен ламел",
                desc: "Максимална приватност и защита",
                src: "src/components/img/h105-stuff.jpg",
              },
              {
                title: "Тип „Оплетка“",
                desc: "Декоративен вид с висока вентилация",
                src: "src/components/img/pic_10.jpg",
              },
              {
                title: "Ветроупорен ламел",
                desc: "Специално изпълнение по индивидуален проект",
                src: "src/components/img/images.jpg",
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="text-center p-6 hover:shadow-lg transition-shadow bg-gray-50 rounded-2xl overflow-hidden"
              >
                <div className="mb-4">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </Card>
            ))}
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
              Реализирани пешеходни врати от стоманени ламели
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            {/* Първи ред - 3 изображения */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
              {[
                {
                  img: "src/components/img/IMG-259b0eac1dac08f8f707cfd6fdcd229f-V.jpg",
                  title: "Търговски обект",
                },
                {
                  img: "src/components/img/IMG-657311aa39345e588b9b655d63b71d1b-V.jpg",
                  title: "Индустриална база",
                },
                {
                  img: "src/components/img/img_2_1756796079808 (1).jpg",
                  title: "Складова база",
                },
              ].map((proj, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden rounded-lg shadow-lg group"
                >
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <p className="text-white font-semibold p-4">{proj.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Втори ред - 2 изображения, центрирани */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
              {[
                {
                  img: "src/components/img/IMG-1f97f1e0bf71bae86ab47d57b43e859f-V (1).jpg",
                  title: "Офис сграда",
                },
                {
                  img: "src/components/img/IMG-87f43f5d6887620b91017ff98a07a2a2-V (1).jpg",
                  title: "Жилищен комплекс",
                },
              ].map((proj, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden rounded-lg shadow-lg group"
                >
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <p className="text-white font-semibold p-4">{proj.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Интересувате се от пешеходни врати от стоманени ламели?
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
// ...existing code...
