import { ArrowLeft } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Testimonials } from '@/components/testimonials';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';

export default function TestimonialsPage() {
  const [, setLocation] = useLocation();

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
            Назад
          </Button>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Отзиви от клиенти
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Вижте какво споделят нашите доволни клиенти за качеството на нашите продукти и услуги
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Станете част от нашите доволни клиенти
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Свържете се с нас днес за безплатна консултация и оферта за вашия проект
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setLocation('/contact')}
              className="bg-yellow-accent text-gray-900 px-8 py-3 hover:bg-yellow-500 font-semibold"
            >
              Поискайте оферта
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open('tel:087 678 2271', '_self')}
              className="border-2 border-white text-white bg-transparent px-8 py-3 hover:bg-white hover:text-primary-blue font-semibold"
            >
              Обадете се: 087 678 2271
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}