import { Check, ChevronDown, Instagram, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: [] as string[],
    message: '',
  });
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceOptions = [
    'Звук',
    'Світло',
    'Райдер артистів',
    'DJ-послуги',
    'Комплексне рішення',
    'Інше',
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Поле не може бути пустим';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Поле не може бути пустим';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Неверный формат email';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Here you would normally send the data to your backend
      console.log('Form submitted:', formData);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: [],
          message: '',
        });
      }, 3000);
    }
  };

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleServiceToggle = (service: string) => {
    const currentServices = formData.service;
    const newServices = currentServices.includes(service)
      ? currentServices.filter(s => s !== service)
      : [...currentServices, service];
    handleInputChange('service', newServices);
  };

  return (
    <section id='contacts' className='px-4 py-20'>
      <div className='container mx-auto'>
        {isSubmitted ? (
          <div className='rounded-lg border border-border bg-secondary p-8 text-center'>
            <div className='bg-success/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full'>
              <Check className='text-success h-8 w-8' />
            </div>
            <h3 className='mb-2 text-xl font-semibold text-foreground'>
              Дякуємо за вашу заявку!
            </h3>
            <p className='text-muted-foreground'>
              Ми зв'яжемося з вами найближчим часом.
            </p>
          </div>
        ) : (
          <div className='grid gap-12 md:grid-cols-2'>
            {/* Contact Form */}
            <div>
              <h3 className='mb-6 text-2xl font-semibold text-foreground'>
                Зв'яжіться з нами
              </h3>

              <form onSubmit={handleSubmit} className='space-y-6'>
                {/* Name Field */}
                <div>
                  <Label htmlFor='name' className='text-foreground'>
                    Ім'я *
                  </Label>
                  <Input
                    id='name'
                    value={formData.name}
                    onChange={e => handleInputChange('name', e.target.value)}
                    className={`mt-1 h-12 border-border bg-secondary focus:border-primary focus:ring-primary ${
                      errors.name ? 'border-destructive' : ''
                    }`}
                    placeholder="Ваше ім'я"
                  />
                  {errors.name && (
                    <p className='mt-1 text-sm text-destructive'>
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <Label htmlFor='phone' className='text-foreground'>
                    Телефон
                  </Label>
                  <Input
                    id='phone'
                    value={formData.phone}
                    onChange={e => handleInputChange('phone', e.target.value)}
                    className='mt-1 h-12 border-border bg-secondary focus:border-primary focus:ring-primary'
                    placeholder='+380...'
                  />
                </div>

                {/* Email Field */}
                <div>
                  <Label htmlFor='email' className='text-foreground'>
                    Email
                  </Label>
                  <Input
                    id='email'
                    type='email'
                    value={formData.email}
                    onChange={e => handleInputChange('email', e.target.value)}
                    className={`mt-1 h-12 border-border bg-secondary focus:border-primary focus:ring-primary ${
                      errors.email ? 'border-destructive' : ''
                    }`}
                    placeholder='your@email.com'
                  />
                  {errors.email && (
                    <p className='mt-1 text-sm text-destructive'>
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Services Field */}
                <div>
                  <Label htmlFor='service' className='text-foreground'>
                    Які послуги вас цікавлять?
                  </Label>
                  <Popover open={isServiceOpen} onOpenChange={setIsServiceOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant='outline'
                        role='combobox'
                        className='mt-1 h-12 w-full justify-between rounded-md border-border bg-secondary text-left font-normal hover:bg-secondary/80'
                      >
                        <span className='truncate'>
                          {formData.service.length > 0
                            ? formData.service.join(', ')
                            : 'Оберіть послуги...'}
                        </span>
                        <ChevronDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className='w-full border-border bg-popover p-0'
                      align='start'
                    >
                      <div className='space-y-2 p-2'>
                        {serviceOptions.map(service => (
                          <div
                            key={service}
                            className='flex cursor-pointer items-center space-x-2 rounded-md p-2 hover:bg-accent'
                            onClick={() => handleServiceToggle(service)}
                          >
                            <Checkbox
                              checked={formData.service.includes(service)}
                              onCheckedChange={() =>
                                handleServiceToggle(service)
                              }
                            />
                            <label className='flex-1 cursor-pointer text-sm'>
                              {service}
                            </label>
                          </div>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Message Field */}
                <div>
                  <Label htmlFor='message' className='text-foreground'>
                    Ваше повідомлення *
                  </Label>
                  <Textarea
                    id='message'
                    value={formData.message}
                    onChange={e => handleInputChange('message', e.target.value)}
                    className={`mt-1 min-h-[150px] border-border bg-secondary focus:border-primary focus:ring-primary ${
                      errors.message ? 'border-destructive' : ''
                    }`}
                    placeholder='Розкажіть детальніше про ваш захід...'
                  />
                  {errors.message && (
                    <p className='mt-1 text-sm text-destructive'>
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type='submit'
                  className='hover:bg-primary-hover glow hover:glow-strong w-full bg-primary text-primary-foreground transition-all duration-300'
                >
                  Замовити консультацію
                </Button>
              </form>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className='mb-6 text-2xl font-semibold text-foreground'>
                Контакти
              </h3>

              <div className='space-y-6'>
                <div className='flex items-center space-x-4'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10'>
                    <Phone className='h-6 w-6 text-primary' strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className='font-medium text-foreground'>Телефон</p>
                    <a
                      href='tel:+380991234567'
                      className='text-muted-foreground transition-colors hover:text-primary'
                    >
                      +380 99 123 45 67
                    </a>
                  </div>
                </div>

                <div className='flex items-center space-x-4'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10'>
                    <Mail className='h-6 w-6 text-primary' strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className='font-medium text-foreground'>Email</p>
                    <a
                      href='mailto:contact@soundandstaff.com.ua'
                      className='text-muted-foreground transition-colors hover:text-primary'
                    >
                      contact@soundandstaff.com.ua
                    </a>
                  </div>
                </div>

                <div className='pt-6'>
                  <p className='mb-4 font-medium text-foreground'>
                    Соціальні мережі
                  </p>
                  <div className='flex space-x-4'>
                    <a
                      href='https://instagram.com/soundandstaff'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='group flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors hover:bg-primary/20'
                    >
                      <Instagram
                        className='h-6 w-6 text-primary transition-transform group-hover:scale-110'
                        strokeWidth={1.5}
                      />
                    </a>
                    <a
                      href='https://t.me/soundandstaff'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='group flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors hover:bg-primary/20'
                    >
                      <svg
                        className='h-6 w-6 text-primary transition-transform group-hover:scale-110'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                      >
                        <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-.14.06-.22.11l-3.08 1.95c-.44.29-.85.43-1.25.43-.82-.01-1.49-.46-2.2-.84-.87-.47-1.56-.72-1.5-1.51.03-.4.45-.8 1.25-1.21l4.87-2.04c2.34-.98 2.83-1.15 3.15-1.15.07 0 .22.02.32.12.08.08.1.19.11.27.01.06.02.2 0 .31z' />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contacts;
