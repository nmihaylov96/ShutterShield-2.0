import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { useLocation } from 'wouter';

export function Products() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const productImages = {
    sectional: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    ],
    roller: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    ],
    berry: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    ]
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.products.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.products.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Sectional Garage Doors */}
          <Card id="sectional" className="hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            <div className="relative h-64 overflow-hidden rounded-t-lg">
              <img
                src={productImages.sectional[0]}
                alt="Sectional garage door"
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.products.sectional.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{t.products.sectional.description}</p>
              <div className="space-y-2 mb-6">
                {t.products.sectional.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    {feature}
                  </div>
                ))}
              </div>
              <div className="text-center mt-auto">
                <Button onClick={() => setLocation('/sectional-doors')} className="bg-primary-blue hover:bg-secondary-blue text-white px-6 py-2 font-medium">
                  {t.products.learnMore}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Roller Garage Doors */}
          <Card id="roller" className="hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            <div className="relative h-64 overflow-hidden rounded-t-lg">
              <img
                src={productImages.roller[0]}
                alt="Roller garage door"
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.products.roller.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{t.products.roller.description}</p>
              <div className="space-y-2 mb-6">
                {t.products.roller.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    {feature}
                  </div>
                ))}
              </div>
              <div className="text-center mt-auto">
                <Button onClick={() => setLocation('/roller-doors')} className="bg-primary-blue hover:bg-secondary-blue text-white px-6 py-2 font-medium">
                  {t.products.learnMore}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Industrial Sectional Doors */}
          <Card id="industrial" className="hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            <div className="relative h-64 overflow-hidden rounded-t-lg">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Industrial sectional garage door"
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Индустриални секционни врати</h3>
              <p className="text-gray-600 mb-6 flex-grow">Усилени секционни врати за индустриални обекти с висока честота на използване и специални изисквания.</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Повишена здравина и издръжливост
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Устойчивост на интензивна употреба
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Специални размери и конфигурации
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Подходящи за складове и производства
                </div>
              </div>
              <div className="text-center mt-auto">
                <Button onClick={() => setLocation('/industrial-doors')} className="bg-primary-blue hover:bg-secondary-blue text-white px-6 py-2 font-medium">
                  Научете повече
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Products Gallery */}
        <Card className="p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">{t.products.gallery}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {productImages.gallery.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Project ${index + 1}`}
                className="rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer"
              />
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
