import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Wrench, Settings, Shield, Phone, Award, Cog, Users, Clock } from 'lucide-react';
import { useLocation } from 'wouter';

export default function Services() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();

  const services = [
    {
      icon: <Settings className="text-white text-2xl" />,
      title: t.services.installation.title,
      description: t.services.installation.description,
    },
    {
      icon: <Wrench className="text-white text-2xl" />,
      title: t.services.maintenance.title,
      description: t.services.maintenance.description,
    },
    {
      icon: <Shield className="text-white text-2xl" />,
      title: t.services.warranty.title,
      description: t.services.warranty.description,
    },
    {
      icon: <Phone className="text-white text-2xl" />,
      title: t.services.consultation.title,
      description: t.services.consultation.description,
    },
  ];

  const certificationFeatures = [
    {
      icon: <Award className="text-yellow-500 mr-3" />,
      text: t.services.certification.features[0],
    },
    {
      icon: <Cog className="text-yellow-500 mr-3" />,
      text: t.services.certification.features[1],
    },
    {
      icon: <Users className="text-yellow-500 mr-3" />,
      text: t.services.certification.features[2],
    },
    {
      icon: <Clock className="text-yellow-500 mr-3" />,
      text: t.services.certification.features[3],
    },
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
      <section className="relative bg-gradient-to-r from-dark-navy to-primary-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="outline"
            onClick={() => setLocation('/')}
            className="mb-8 border-white text-white bg-transparent hover:bg-white hover:text-primary-blue rounded-none"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Назад
          </Button>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t.services.title}
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              {t.services.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                className="bg-yellow-accent text-gray-900 px-8 py-3 hover:bg-yellow-500 font-semibold rounded-none"
              >
                Поискайте оферта
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white bg-transparent px-8 py-3 hover:bg-white hover:text-primary-blue font-semibold rounded-none"
                onClick={() => window.open('tel:+359888123456', '_self')}
              >
                <Phone className="mr-2 h-5 w-5" />
                {t.hero.callUs}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-xl transition-all duration-300 bg-white border-0 shadow-lg">
                <div className="w-16 h-16 bg-primary-blue flex items-center justify-center mx-auto mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button 
                  onClick={scrollToContact}
                  className="bg-primary-blue hover:bg-secondary-blue text-white px-6 py-2 font-medium transition-colors"
                >
                  Поискайте оферта →
                </button>
              </Card>
            ))}
          </div>

          {/* Certification Section */}
          <Card className="bg-gray-50 p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 lg:pr-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {t.services.certification.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t.services.certification.subtitle}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {certificationFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      {feature.icon}
                      <span className="text-sm text-gray-700">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 mt-8 lg:mt-0">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Certified technician"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}