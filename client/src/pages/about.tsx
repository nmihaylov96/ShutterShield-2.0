import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useEffect } from 'react';
import { ArrowLeft, Award, Users, Clock, CheckCircle } from 'lucide-react';
import { useLocation } from 'wouter';

export default function About() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    {
      number: "15+",
      label: t.about.stats.experience,
      icon: <Clock className="h-8 w-8 text-primary-blue" />
    },
    {
      number: "500+",
      label: t.about.stats.doors,
      icon: <Award className="h-8 w-8 text-primary-blue" />
    },
    {
      number: "10+",
      label: t.hero.stats.support,
      icon: <Users className="h-8 w-8 text-primary-blue" />
    },
    {
      number: "100+",
      label: t.about.stats.customers,
      icon: <CheckCircle className="h-8 w-8 text-primary-blue" />
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
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-blue to-secondary-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="outline"
            onClick={() => setLocation('/')}
            className="mb-8 border-2 border-white text-white bg-black/20 hover:bg-white hover:text-primary-blue font-semibold px-6 py-2"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t.common.back}
          </Button>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t.about.title}
            </h1>
            <p className="text-xl text-gray-200">
              {t.about.description}
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.common.ourHistory}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t.about.description}
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {t.about.team}
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="flex justify-center mb-3">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-primary-blue mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Garage door installation team"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Team Gallery */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                alt="Professional installation"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Професионален монтаж</h3>
                <p className="text-sm">Сертифицирани специалисти</p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                alt="Quality products"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Качествени продукти</h3>
                <p className="text-sm">Hörmann официален партньор</p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                alt="Customer service"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Клиентско обслужване</h3>
                <p className="text-sm">Поддръжка и гаранция</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Нашата история</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t.about.description}
              </p>
              <p className="text-lg text-gray-600 mb-8">
                {t.about.team}
              </p>
              <Button
                onClick={scrollToContact}
                className="bg-primary-blue hover:bg-secondary-blue text-white px-8 py-3"
              >
                Свържете се с нас
              </Button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="About Delice Garage"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-8 bg-gray-50 border-0">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary-blue mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* Why Choose Us */}
          <Card className="bg-primary-blue text-white p-8 lg:p-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6">Защо да изберете Delice Garage?</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <Award className="h-12 w-12 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Качество</h4>
                  <p className="text-gray-200">Работим само с най-качествените материали и оборудване от Hörmann</p>
                </div>
                <div>
                  <Users className="h-12 w-12 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Опит</h4>
                  <p className="text-gray-200">Над 15 години опит в монтажа и поддръжката на гаражни врати</p>
                </div>
                <div>
                  <CheckCircle className="h-12 w-12 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Гаранция</h4>
                  <p className="text-gray-200">Пълна гаранция на всички продукти и извършени услуги</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
