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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
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
  );
}
