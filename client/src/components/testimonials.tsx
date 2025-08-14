import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Димитър Петров",
    location: "Стара Загора",
    rating: 5,
    text: "Изключително доволен съм от секционната врата, която монтираха. Качеството е на най-високо ниво, а екипът беше много професионален. Препоръчвам горещо!",
    service: "Секционна врата",
    date: "Януари 2025"
  },
  {
    id: 2,
    name: "Мария Георгиева",
    location: "Пловдив",
    rating: 5,
    text: "Ролетната врата работи безупречно вече 2 години. Много съм доволна от избора и от обслужването. Благодаря за професионализма!",
    service: "Ролетна врата",
    date: "Декември 2024"
  },
  {
    id: 3,
    name: "Иван Стоянов",
    location: "София",
    rating: 5,
    text: "Berry вратата е точно това, което търсех - стилна, надеждна и с отлична изолация. Монтажът беше бърз и качествен.",
    service: "Berry врата",
    date: "Ноември 2024"
  },
  {
    id: 4,
    name: "Христо Николов",
    location: "Варна",
    rating: 5,
    text: "Отлична фирма! Помогнаха ми да избера подходящата врата и я монтираха перфектно. Цената беше справедлива, а качеството - отлично.",
    service: "Секционна врата",
    date: "Октомври 2024"
  },
  {
    id: 5,
    name: "Анна Димитрова",
    location: "Бургас",
    rating: 5,
    text: "Много съм доволна от ремонта на гаражната врата. Екипът беше точен, професионален и работата беше завършена в срок.",
    service: "Ремонт",
    date: "Септември 2024"
  },
  {
    id: 6,
    name: "Георги Тодоров",
    location: "Русе",
    rating: 5,
    text: "Изключително качествена работа! Новата ролетна врата е тиха, плавна и много красива. Препоръчвам РолТех на всички!",
    service: "Ролетна врата",
    date: "Август 2024"
  }
];

export function Testimonials() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Какво казват нашите клиенти
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Доверието на клиентите е нашата най-голяма награда. Вижте какво споделят те за работата ни.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Quote className="h-8 w-8 text-primary-blue/20" />
                  <div className="flex">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-primary-blue">
                        {testimonial.service}
                      </p>
                      <p className="text-xs text-gray-500">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-primary-blue mb-2">500+</div>
            <div className="text-gray-600">Доволни клиенти</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-primary-blue mb-2">15+</div>
            <div className="text-gray-600">Години опит</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-primary-blue mb-2">100%</div>
            <div className="text-gray-600">Гаранция качество</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-primary-blue mb-2">24/7</div>
            <div className="text-gray-600">Поддръжка</div>
          </div>
        </div>
      </div>
    </section>
  );
}