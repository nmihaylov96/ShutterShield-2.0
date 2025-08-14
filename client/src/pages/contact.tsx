import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useLocation } from 'wouter';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';

const contactSchema = z.object({
  name: z.string().min(2, 'Името трябва да съдържа поне 2 символа'),
  lastName: z.string().min(2, 'Фамилията трябва да съдържа поне 2 символа'),
  phone: z.string().min(5, 'Телефонът трябва да съдържа поне 5 символа'),
  email: z.string().email('Моля въведете валиден имейл адрес'),
  service: z.string().min(1, 'Моля изберете услуга'),
  message: z.string().min(10, 'Съобщението трябва да съдържа поне 10 символа'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  // Get product info from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const productInfo = urlParams.get('product');
  
  // Determine service type based on product info
  const getServiceType = (product: string | null) => {
    if (!product) return '';
    if (product.toLowerCase().includes('секционн')) return 'sectional';
    if (product.toLowerCase().includes('ролетн')) return 'roller';
    if (product.toLowerCase().includes('berry')) return 'berry';
    return 'sectional'; // default
  };
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      lastName: '',
      phone: '',
      email: '',
      service: getServiceType(productInfo),
      message: productInfo ? `Интересувам се от: ${productInfo}` : '',
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: 'Успех',
        description: 'Вашето запитване беше изпратено успешно!',
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: 'Грешка',
        description: 'Неуспешно изпращане. Моля опитайте отново.',
        variant: 'destructive',
      });
      console.error('Contact form error:', error);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: <MapPin className="text-white" />,
      title: t.contact.address,
      content: 'ул. "Индустриална" 15\n6000 Стара Загора, България',
    },
    {
      icon: <Phone className="text-white" />,
      title: t.contact.phone,
      content: '087 678 2271',
    },
    {
      icon: <Mail className="text-white" />,
      title: 'Email',
      content: 'rolltech2020@gmail.com',
    },
    {
      icon: <Clock className="text-white" />,
      title: t.contact.workingHours,
      content: t.contact.schedule,
    },
  ];

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
              {t.contact.title}
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              {t.contact.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-yellow-accent text-gray-900 px-8 py-3 hover:bg-yellow-500 font-semibold rounded-none"
                onClick={() => {
                  const formElement = document.getElementById('contact-form');
                  if (formElement) {
                    formElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Send className="mr-2 h-5 w-5" />
                {t.common.sendInquiry}
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white bg-transparent px-8 py-3 hover:bg-white hover:text-primary-blue font-semibold rounded-none"
                onClick={() => window.open('tel:+359888123456', '_self')}
              >
                <Phone className="mr-2 h-5 w-5" />
                {t.common.callNow}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            {/* Contact Information */}
            <div className="mb-12 lg:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.contact.info}</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 whitespace-pre-line">
                        {info.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Maps */}
              <div className="mt-8">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.0845!2d25.6241!3d42.4249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDI1JzI5LjYiTiAyNcKwMzknMjYuOCJF!5e0!3m2!1sen!2sbg!4v1639123456789!5m2!1sen!2sbg"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Delice Garage Location"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.contact.form.title}</h3>
              
              <Form {...form}>
                <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Име</FormLabel>
                          <FormControl>
                            <Input placeholder="Иван" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Фамилия</FormLabel>
                          <FormControl>
                            <Input placeholder="Петров" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.contact.form.phone}</FormLabel>
                          <FormControl>
                            <Input placeholder="087 678 2271" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.contact.form.email}</FormLabel>
                          <FormControl>
                            <Input placeholder="your@email.com" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>



                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.contact.form.service}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder={t.contact.form.selectService} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="sectional">{t.contact.form.services.sectional}</SelectItem>
                            <SelectItem value="roller">{t.contact.form.services.roller}</SelectItem>
                            <SelectItem value="berry">{t.contact.form.services.berry}</SelectItem>
                            <SelectItem value="service">{t.contact.form.services.service}</SelectItem>
                            <SelectItem value="consultation">{t.contact.form.services.consultation}</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.contact.form.message}</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder={t.contact.form.messagePlaceholder}
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-primary-blue hover:bg-secondary-blue"
                    disabled={contactMutation.isPending}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {contactMutation.isPending ? 'Изпраща се...' : t.contact.form.submit}
                  </Button>
                </form>
              </Form>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}