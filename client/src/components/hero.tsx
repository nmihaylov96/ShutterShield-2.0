import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative bg-primary-blue text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-primary-blue bg-opacity-90"></div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{
          backgroundImage:
            "url('https://allsecurityequipment.com/cdn/shop/articles/Empty_warehouse_with_roller_door.jpg?v=1692373055&width=900')",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-primary-blue">
            {t.hero.title}
          </h1>
          <p className="text-xl lg:text-2xl text-secondary-blue mb-8 leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Основен бутон – тъмночервен фон, по-светъл при hover */}
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-dark-navy text-white px-8 py-3 hover:bg-secondary-blue font-semibold rounded-none transition-all shadow-md hover:shadow-lg"
            >
              {t.hero.learnMore} →
            </Button>

            {/* Втори бутон – outline стил, червен текст и обратен ефект при hover */}
            <Button
              variant="outline"
              className="border-2 border-primary-blue text-primary-blue bg-transparent px-8 py-3 hover:bg-primary-blue hover:text-white font-semibold rounded-none transition-all shadow-sm hover:shadow-md"
              onClick={() => window.open("tel:+359888123456", "_self")}
            >
              <Phone className="mr-2 h-5 w-5 text-primary-blue group-hover:text-white transition-colors" />
              {t.hero.callUs}
            </Button>
          </div>
        </div>
      </div>

      {/* Trust indicators */}
      <div className="relative bg-white bg-opacity-95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-primary-blue mb-1">
                5+
              </div>
              <div className="text-sm text-gray-600">
                {t.hero.stats.experience}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-primary-blue mb-1">
                500+
              </div>
              <div className="text-sm text-gray-600">{t.hero.stats.doors}</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-primary-blue mb-1">
                100%
              </div>
              <div className="text-sm text-gray-600">
                {t.hero.stats.support}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-primary-blue mb-1">
                100%
              </div>
              <div className="text-sm text-gray-600">
                {t.hero.stats.clients}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
