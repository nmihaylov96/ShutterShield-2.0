import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(5, 'Phone must be at least 5 characters'),
  email: z.string().email('Please enter a valid email'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      service: '',
      message: '',
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Your request has been sent successfully!',
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: 'Failed to send request. Please try again.',
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
      icon: <Phone className="text-white" />,
      title: t.contact.phone,
      content: '088 409 8889\n087 678 2271',
    },
    {
      icon: <Mail className="text-white" />,
      title: 'Email',
      content: 'contact@rolltech-doors.com',
    },
    {
      icon: <Clock className="text-white" />,
      title: t.contact.workingHours,
      content: t.contact.schedule,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.contact.title}</h2>
          <p className="text-xl text-gray-600">{t.contact.subtitle}</p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Contact Information */}
          <div className="mb-12 lg:mb-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.contact.info}</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center">
                      {info.icon}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">{info.title}</h4>
                    <p className="text-gray-600 whitespace-pre-line">
                      {info.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-50 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.contact.form.title}</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.contact.form.name}</FormLabel>
                        <FormControl>
                          <Input placeholder={t.contact.form.namePlaceholder} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.contact.form.phone}</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+359 888 123 456" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.contact.form.email}</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
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
          <SelectItem value="sectional">{'Секционни гаражни врати'}</SelectItem>
          <SelectItem value="roller">{'Ролетни гаражни врати'}</SelectItem>
          <SelectItem value="pedestrian">{'Пешеходни врати'}</SelectItem>
          <SelectItem value="industrial-sectional">{'Индустриални секционни врати'}</SelectItem>
          <SelectItem value="industrial-roller">{'Индустриални ролетни врати'}</SelectItem>
          <SelectItem value="automation-sectional">{'Автоматика за секционни врати'}</SelectItem>
          <SelectItem value="automation-roller">{'Автоматика за ролетни врати'}</SelectItem>
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  )}
/>

                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.contact.form.message}</FormLabel>
                      <FormControl>
                        <Textarea rows={4} placeholder={t.contact.form.messagePlaceholder} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary-blue hover:bg-secondary-blue font-semibold text-lg h-12"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? (
                    'Sending...'
                  ) : (
                    <>
                      {t.contact.form.submit}
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </Card>
        </div>
      </div>
    </section>
  );
}
