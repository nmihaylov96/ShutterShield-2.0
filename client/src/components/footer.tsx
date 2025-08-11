import { useLanguage } from '@/contexts/language-context';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-dark-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center text-2xl font-bold text-white mb-4">
              <div className="w-8 h-8 bg-primary-blue flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              Garage
            </div>
            <p className="text-gray-400 mb-4">
              {t.footer.tagline}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t.footer.products}</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('sectional')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t.footer.sectionalShort}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('roller')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t.footer.rollerShort}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('berry')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t.footer.berryShort}
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t.footer.services}</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t.footer.installation}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t.footer.service}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t.footer.consultation}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t.footer.warranty}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t.footer.contact}</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center">
                <span className="mr-2">📍</span>
                <span>6000 Стара Загора</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📞</span>
                <a href="tel:+359888123456" className="hover:text-white">+359 888 123 456</a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">✉️</span>
                <a href="mailto:info@delicegarage.bg" className="hover:text-white">info@delicegarage.bg</a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Delice Garage. {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
