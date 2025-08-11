import { useLanguage } from '@/contexts/language-context';
import { Card, CardContent } from '@/components/ui/card';
import { Wrench, Settings, Shield, Phone, Award, Cog, Users, Clock } from 'lucide-react';

export function Services() {
  const { t } = useLanguage();

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

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.services.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="text-center p-6 bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 rounded-none">
              <div className="w-12 h-12 bg-primary-blue flex items-center justify-center mx-auto mb-4 rounded-none">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
              <button className="bg-primary-blue hover:bg-secondary-blue text-white px-4 py-2 text-sm font-medium transition-colors rounded-none border-0">
                Read More →
              </button>
            </Card>
          ))}
        </div>

        {/* Professional Service Section */}
        <div className="bg-white text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">See Our Difference in Garage Door Installation</h3>
          <p className="text-lg text-gray-600 mb-8">We bring out the best in every work we do.</p>
          <div className="relative max-w-4xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Professional garage door installation"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <button className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center text-white hover:bg-secondary-blue transition-colors">
                ▶
              </button>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-primary-blue text-white py-12 px-8 rounded-none">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Why Choose Us?</h3>
            <p className="text-lg text-gray-200">Professional services we provide in our municipality.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="text-center p-4 border border-gray-300 border-opacity-30">
                <div className="w-12 h-12 border-2 border-white flex items-center justify-center mx-auto mb-4">
                  {service.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-200 text-sm mb-4 leading-relaxed">{service.description}</p>
                <button className="border border-white text-white px-4 py-2 text-sm font-medium hover:bg-white hover:text-primary-blue transition-colors rounded-none">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
