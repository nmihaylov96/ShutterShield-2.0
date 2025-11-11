import { useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";
import {
  ArrowLeft,
  CheckCircle,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react";

export default function IndustrialSectionalDoors() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-primary-blue to-secondary-blue text-white py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(45, 85, 155, 0.2), rgba(45, 85, 155, 0.2)), url(src/components/img/ZHilishtni-i-industrialni-garazhni-vrati-2.jpg)`,
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
              Индустриални секционни врати
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Идеално решение за производствени помещения, складове и обекти с
              висока интензивност на преминаване и товаро-разтоварни дейности.
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
              onClick={() => window.open('tel:087 678 2271', '_self')}
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
                Защо да изберете индустриални секционни врати?
              </h2>

              <div className="prose prose-lg text-gray-700 mb-6">
                <p className="mb-4">
                  Индустриалните секционни врати са идеално решение за
                  осигуряването на{" "}
                  <strong>надеждна, безопасна и ефективна работа</strong> при
                  производствени помещения, складове и други типове помещения с
                  висока интензивност на преминаване и товаро-разтоварни
                  дейности.
                </p>
                <p className="mb-4">
                  Идеално прецизираните им компоненти допринасят за една{" "}
                  <strong>
                    надеждно работеща система при интензивна употреба
                  </strong>
                  . Основните им компоненти можете да разгледате{" "}
                  <button
                    onClick={() => {
                      const element =
                        document.getElementById("sliding-systems");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-primary-blue hover:text-secondary-blue underline font-semibold inline-flex items-center"
                  >
                    тук
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </button>
                  .
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Надеждна и безопасна конструкция
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Прецизирани компоненти за интензивна употреба
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Ефективна работа при товаро-разтоварни дейности
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Подходящи за производствени помещения и складове
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="src/components/img/ZHilishtni-i-industrialni-garazhni-vrati-2.jpg"
                alt="Индустриални секционни врати"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sliding Systems Section */}
      <section id="sliding-systems" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Видове плъзгащи системи на отваряне
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Различни конфигурации за всеки тип помещение и нужда
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Standard System */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <img
                  src="src/components/img/стандартно плъзгане.jpg"
                  alt="Стандартни плъзгащи системи"
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Стандартни плъзгащи системи
                  </h3>
                  <p className="text-gray-600">
                    Класическите системи за отваряне, подходящи за стандартни
                    производствени помещения
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Torsion Spring System */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <img
                  src="src/components/img/пружини в задна част на релсите.jpg"
                  alt="Плъзгащи системи с монтиране на торсионните пружини в задната част на релсите"
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Системи с торсионни пружини
                  </h3>
                  <p className="text-gray-600">
                    Монтиране на торсионните пружини в задната част на релсите
                    за оптимална работа
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Rail Above Light Opening */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <img
                  src="src/components/img/релсовия път да бъде издигнат над светлия отвор.jpg"
                  alt="Плъзгащи системи, когато се изисква релсовия път да бъде издигнат над светлия отвор"
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Релсов път над светлия отвор
                  </h3>
                  <p className="text-gray-600">
                    Система при която релсовият път е издигнат над светлия отвор
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Rail Following Roof */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <img
                  src="src/components/img/релсовия път да следва покрива.jpg"
                  alt="Плъзгащи системи, когато се изисква релсовия път да следва покрива"
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Релсов път следва покрива
                  </h3>
                  <p className="text-gray-600">
                    Система при която релсовият път следва наклона на покрива
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

                    
                    {/* Rail following the wall*/}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 mt-12">
              <CardContent className="p-0">
                <img
                  src="src/components/img/релсовия път върви успоредно на стената.jpg"
                  alt="Плъзгащи системи, когато се изисква релсовия път да върви успоредно на стената"
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Релсов път успоредно на стената
                  </h3>
                  <p className="text-gray-600">
                    Система при която релсовият път е успореден на стената
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
      </section>

{/* Color Panels Section */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Цветни панели
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Има над 20 цвята и имитация на дърво.
      </p>
    </div>

    <div className="space-y-12">

      {/* Stucco */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          RIB панели с повърхност Stucco
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6">
          {[
            { name: "Зелено", ral: "RAL 6005", file: "RIB_stucco_Verde_RAL6005.jpg" },
            { name: "Зелено", ral: "RAL 6009", file: "RIB_stucco_Verde_RAL6009.jpg" },
            { name: "Синьо", ral: "RAL 5010", file: "RIB_stucco_Albastru_RAL5010.jpg" },
            { name: "Сребристо", ral: "RAL 9006", file: "RIB_stucco_Argintiu_RAL9006.jpg" },
            { name: "Бяло", ral: "RAL 9002", file: "RIB_stucco_Alb_RAL9002.jpg" },
            { name: "Сиво", ral: "RAL 7016", file: "RIB_stucco_Gri_RAL7016.jpg" },
            { name: "Червено", ral: "RAL 3000", file: "RIB_stucco_Rosu_RAL3000.jpg" },
          ].map((color) => (
            <div
              key={color.file}
              className="text-center border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
            >
              <div className="h-20 w-full flex items-center justify-center bg-gray-100">
                <img
                  src={`src/components/img/colours/${color.file}`}
                  alt={`${color.name} ${color.ral}`}
                  className="object-cover h-20 w-full"
                />
              </div>
              <div className="p-2">
                <p className="text-sm font-medium text-gray-800">{color.name}</p>
                <p className="text-xs text-gray-500">{color.ral}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Woodgrain */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          RIB панели с повърхност Woodgrain
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6">
          {[
            { name: "Бяло", ral: "RAL 9016", file: "RIB_woodgrain_Alb_RAL9016.jpg" },
            { name: "Кафяво", ral: "RAL 8017", file: "RIB_woodgrain_Maro_RAL8017.jpg" },
            { name: "Черно", ral: "RAL 9005", file: "RIB_woodgrain_Negru_RAL9005.jpg" },
            { name: "Зелено", ral: "RAL 6009", file: "RIB_woodgrain_Verde_RAL6009.jpg" },
            { name: "Кремаво", ral: "RAL 9001", file: "RIB_woodgrain_crem_RAL9001.jpg" },
          ].map((color) => (
            <div
              key={color.file}
              className="text-center border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
            >
              <div className="h-20 w-full flex items-center justify-center bg-gray-100">
                <img
                  src={`src/components/img/colours/${color.file}`}
                  alt={`${color.name} ${color.ral}`}
                  className="object-cover h-20 w-full"
                />
              </div>
              <div className="p-2">
                <p className="text-sm font-medium text-gray-800">{color.name}</p>
                <p className="text-xs text-gray-500">{color.ral}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Microrib & Macrorib */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          MICRORIB и MACRORIB панели
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6">
          {[
            { name: "Бяло", ral: "RAL 9016 гладка", file: "Microrib_smooth_Alb_RAL9016.jpg" },
            { name: "Сребристо", ral: "RAL 9006 woodgrain", file: "Macrorib_woodgrain_Argintiu_RAL9006.jpg" },
          ].map((color) => (
            <div
              key={color.file}
              className="text-center border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
            >
              <div className="h-20 w-full flex items-center justify-center bg-gray-100">
                <img
                  src={`src/components/img/colours/${color.file}`}
                  alt={`${color.name} ${color.ral}`}
                  className="object-cover h-20 w-full"
                />
              </div>
              <div className="p-2">
                <p className="text-sm font-medium text-gray-800">{color.name}</p>
                <p className="text-xs text-gray-500">{color.ral}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>



{/* Our Projects Section */}
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Наши проекти
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Реализирани индустриални секционни врати в различни обекти
      </p>
    </div>

    {/* Първите три проекта */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      {/* Project 1 */}
      <div className="relative group overflow-hidden rounded-lg shadow-lg">
        <img
          src="src/components/img/AdobeStock_206871514.jpg"
          alt="Индустриални секционни врати - проект 1"
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Project 2 */}
      <div className="relative group overflow-hidden rounded-lg shadow-lg">
        <img
          src="src/components/img/20231015_161308.jpg"
          alt="Индустриални секционни врати - проект 2"
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Project 3 */}
      <div className="relative group overflow-hidden rounded-lg shadow-lg">
        <img
          src="src/components/img/20240519_081310.jpg"
          alt="Индустриални секционни врати - проект 3"
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>

    {/* Последните две снимки - центрирани */}
    <div className="flex justify-center gap-6 flex-wrap">
      {/* Project 4 */}
      <div className="relative group overflow-hidden rounded-lg shadow-lg w-full sm:w-1/2 lg:w-1/3">
        <img
          src="src/components/img/490516856_1497580138299919_5059929004049007438_n.jpg"
          alt="Индустриални секционни врати - проект 4"
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Project 5 */}
      <div className="relative group overflow-hidden rounded-lg shadow-lg w-full sm:w-1/2 lg:w-1/3">
        <img
          src="src/components/img/499945295_1531137424944190_8791295630072889286_n.jpg"
          alt="Индустриални секционни врати - проект 5"
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />
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
            секционни врати
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
