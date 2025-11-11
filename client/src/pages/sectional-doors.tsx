import { useState, useEffect } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ProductFilter } from '@/components/product-filter';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowLeft, Phone, Grid, List } from 'lucide-react';
import { useLocation } from 'wouter';

// Import MCA sectional door images
import mcaWoodDesign from '../components/img/IMG-fe64776c1aa455941441d40996ac3aaf-V.jpg';
import mcaWithPedestrianDoor from '../components/img/IMG-bd4043317dfad676f532743166ad5801-V.jpg';
import mcaWhiteClassic from '../components/img/20240316_181328.jpg';
import mcaBrownHorizontal from '../components/img/488823503_1490438199014113_6054773432221823488_n.jpg';
import mcaIndustrial from '../components/img/475166115_1006926747918460_2692043983858398704_n.jpg';
import mcaMultiple from '../components/img/20250417_183831.jpg';
import mcaDarkModern from '../components/img/20240909_180531.jpg';
import sectionalDoorsBg from '../components/img/sectional-doors-background.jpg';

export default function RollerDoors() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();
  const [filters, setFilters] = useState<any>({});
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Check for URL parameters to set initial filters
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category) {
      setFilters({ category });
    }
  }, []);

  // Products for roller doors
  const rollerDoorProducts = [
    {
      id: 1,
      name: "Стоманена ролетна врата - Модел A",
      image: "@assets/Снимка катеория Стоманена ролетна врата_1756995220376.jpg",
      category: "steel",
      material: "Стомана",
      thickness: "0.6мм",
      color: "RAL 9010",
      description: "Икономична и здрава стоманена ролетна врата"
    },
    {
      id: 2,
      name: "Стоманена ролетна врата - Модел B",
      image: "@assets/475190107_1007270957884039_5553773364182985176_n_1756995278271.jpg",
      category: "steel",
      material: "Стомана",
      thickness: "0.8мм",
      color: "RAL 7016",
      description: "Усилена стоманена ролетна врата с по-голяма дебелина"
    },
    {
      id: 3,
      name: "Термоизолационна ролетна врата - Модел T1",
      image: "@assets/Снимка категория Термоизолационна ролетна врата_1756995278273.png",
      category: "thermal",
      material: "Алуминий + PU пяна",
      thickness: "77мм",
      color: "RAL 9016",
      description: "Висококачествена изолирана ролетна врата"
    },
    {
      id: 4,
      name: "Термоизолационна ролетна врата - Модел T2",
      image: "@assets/Снимка категория Термоизолационна ролетна врата_1756995278273.png",
      category: "thermal",
      material: "Алуминий + PU пяна",
      thickness: "77мм",
      color: "RAL 7035",
      description: "Премиум изолирана ролетна врата с отлична топлоизолация"
    }
  ];

  // Filter products based on selected filters
  const filteredProducts = rollerDoorProducts.filter(product => {
    return Object.entries(filters).every(([key, value]) => {
      if (!value) return true;
      return product[key as keyof typeof product] === value;
    });
  });

  // Main categories for roller doors
  const rollerDoorCategories = [
    {
      id: 1,
      title: "Стоманена ролетна врата",
      image: "/src/components/img/stomanena-roletna.jpg",
      description: "Здрави и икономични ролетни врати от стомана, идеални за производствени и складови помещения.",
      features: ["Висока устойчивост", "Лесна поддръжка", "Икономична цена", "Устойчивост на взлом"],
      category: "steel"
    },
    {
      id: 2,
      title: "Термоизолационна ролетна врата",
      image: "/src/components/img/termoizolacionna-roletna.png",
      description: "Алуминиеви ламели с пенополиуретанова пяна за перфектна комбинация от безопасност и комфорт.",
      features: ["Отлична топлоизолация", "Звукоизолация", "Висока здравина", "Дебелина 77мм"],
      category: "thermal"
    }
  ];


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
      
      {/* Page Header */}
<section
  className="relative py-20 text-white bg-cover bg-center"
  style={{
    backgroundImage: `url(${sectionalDoorsBg})`,
  }}
>
  {/* Overlay за по-добър контраст на текста */}
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between mb-8">
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
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Секционни гаражни врати
      </h1>
      <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto">
        Фирма „Ролтех" ООД е оторизиран партньор с производителите на секционни врати от най-висок клас „MCA".
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          onClick={scrollToContact}
          className="bg-yellow-accent text-gray-900 px-8 py-3 hover:bg-yellow-500 font-semibold"
        >
          Поискайте оферта
        </Button>
        <Button
          variant="outline"
          className="border-2 border-white text-white bg-transparent px-8 py-3 hover:bg-white hover:text-primary-blue font-semibold"
          onClick={() => window.open('tel:087 678 2271', '_self')}
        >
          <Phone className="mr-2 h-5 w-5" />
          Обадете се
        </Button>
      </div>
    </div>
  </div>
</section>

{/* Hero Section with decorative border */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Decorative title with border */}
    <div className="text-center mb-12">
      <div className="relative">
        {/* Orange line */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-orange-400"></div>
        </div>

        {/* Text and logo side by side */}
        <div className="relative inline-flex items-center">
          <span className="bg-gray-50 px-6 text-4xl md:text-5xl font-bold text-gray-900">
            Резиденциални врати MCA
          </span>

          {/* Logo positioned above the line */}
          <img
            src="src/components/img/logo.png"
            alt="MCA Logo"
            className="h-8 md:h-9 w-auto ml-0 -mt-10"
          />
        </div>
      </div>
    </div>

    {/* Centered description */}
    <div className="max-w-3xl mx-auto text-center mb-16">
      <p className="text-lg text-gray-700 leading-relaxed">
        Секционните врати, които предлагаме, са известни с удобството и сигурността си при употреба, 
        елегантния дизайн, използването на най-новите технологии в съответствие с изискванията за безопасност 
        на Европейския съюз. Те могат да бъдат изработени в разнообразие от размери и изисквания на клиента.
      </p>
    </div>

    {/* Two-column layout: text left / images right */}
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      
      {/* LEFT SIDE - Text */}
      <div className="max-w-2xl mx-auto lg:mx-0">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Секционните гаражни врати MCA се характеризират с:
        </h2>

        <div className="space-y-6 text-base leading-relaxed">
          {/* Thermal Insulation */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Оптимална термоизолация, постигната чрез:
            </h3>
            <ul className="space-y-1 list-disc list-inside text-gray-700">
              <li>топлоизолационен панел с дебелина 40мм, обшит със стоманен пласт</li>
              <li>изолация на панела – полиуретан</li>
              <li>странични гумени уплътнения и двойно такова в долната част на вратата</li>
            </ul>
          </div>

          {/* Comfort and Safety */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Комфорт, надеждност и сигурност:
            </h3>
            <ul className="space-y-1 list-disc list-inside text-gray-700">
              <li>релси и профили – дълбоко галванизирани</li>
              <li>солиден вал и пружини позволяващи над 25 000 цикъла</li>
              <li>панти и ролки осигуряващи минимални нива на шум</li>
              <li>система против скъсване на пружините</li>
              <li>система с фотоклетки</li>
              <li>система тип "safety edge" – чувствителна гума в долната част на вратата</li>
              <li>максимални размери: височина 8000мм / широчина 10 000мм</li>
            </ul>
          </div>

          {/* Variety */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Разнообразие от цветове и аксесоари:
            </h3>
            <ul className="space-y-1 list-disc list-inside text-gray-700">
              <li>над 40 стандартни панела с различни цветове и десени</li>
              <li>възможност за остъкляване</li>
              <li>интегриране на пешеходна врата</li>
            </ul>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - Images */}
      <div className="grid grid-cols-2 gap-4">
        <img
          src="src/components/img/20231015_161308.jpg"
          alt="Гаражна врата проект"
          className="w-full h-64 object-cover rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
        />
        <img
          src="src/components/img/20240519_081310.jpg"
          alt="Гаражна врата проект"
          className="w-full h-64 object-cover rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
        />
        <img
          src="src/components/img/sekcionni_vrati_1.jpg"
          alt="Гаражна врата проект"
          className="w-full h-64 object-cover rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 col-span-2"
        />
      </div>
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
    <img src="src/components/img/IMG-fe64776c1aa455941441d40996ac3aaf-V.jpg" alt="Проект 1" className="rounded-lg shadow-md h-64 w-full object-cover hover:scale-105 transition-transform duration-300" />
    <img src="src/components/img/IMG-bd4043317dfad676f532743166ad5801-V.jpg" alt="Проект 2" className="rounded-lg shadow-md h-64 w-full object-cover hover:scale-105 transition-transform duration-300" />
    <img src="src/components/img/20240316_181328.jpg" alt="Проект 3" className="rounded-lg shadow-md h-64 w-full object-cover hover:scale-105 transition-transform duration-300" />
    <img src="src/components/img/488823503_1490438199014113_6054773432221823488_n.jpg" alt="Проект 4" className="rounded-lg shadow-md h-64 w-full object-cover hover:scale-105 transition-transform duration-300" />
  </div>

  {/* Second row - centered 3 images */}
  <div className="flex justify-center flex-wrap gap-6 mt-6">
    <img src="src/components/img/475166115_1006926747918460_2692043983858398704_n.jpg" alt="Проект 5" className="rounded-lg shadow-md h-64 w-72 object-cover hover:scale-105 transition-transform duration-300" />
    <img src="src/components/img/20250417_183831.jpg" alt="Проект 6" className="rounded-lg shadow-md h-64 w-72 object-cover hover:scale-105 transition-transform duration-300" />
    <img src="src/components/img/20240909_180531.jpg" alt="Проект 7" className="rounded-lg shadow-md h-64 w-72 object-cover hover:scale-105 transition-transform duration-300" />
  </div>
</div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-16 bg-primary-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Готови сте за нова ролетна гаражна врата?
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
