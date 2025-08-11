import { useLanguage } from '@/contexts/language-context';

export function About() {
  const { t } = useLanguage();

  const stats = [
    { number: '500+', label: t.about.stats.doors },
    { number: '15+', label: t.about.stats.experience },
    { number: '100%', label: t.about.stats.customers },
    { number: '24/7', label: t.about.stats.support },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.about.title}</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">{t.about.description}</p>
              <p className="mb-8">{t.about.team}</p>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl font-bold text-primary-blue">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Delice Garage team"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
