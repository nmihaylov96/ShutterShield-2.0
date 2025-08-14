import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { Products } from '@/components/products';
import { Services } from '@/components/services';
import { About } from '@/components/about';
import { Testimonials } from '@/components/testimonials';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Products />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
