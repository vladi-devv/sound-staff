import { FileText, Lightbulb, Volume2 } from 'lucide-react';

import { Button } from '@/components/ui/button';

const Services = () => {
  const scrollToContacts = (service?: string) => {
    const section = document.getElementById('contacts');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      // TODO: Pre-select service in form if needed
    }
  };

  const services = [
    {
      icon: Volume2,
      title: 'Звук',
      description:
        'Професійне звукове обладнання та інженери для будь-яких подій.',
      service: 'Звук',
    },
    {
      icon: Lightbulb,
      title: 'Світло',
      description:
        'Креативне світлове оформлення, що підкреслить атмосферу вашого заходу.',
      service: 'Світло',
    },
    {
      icon: FileText,
      title: 'Райдер артистів',
      description: 'Повний технічний супровід відповідно до вимог артистів.',
      service: 'Райдер артистів',
    },
  ];

  return (
    <section id='services' className='px-4 py-20'>
      <div className='container mx-auto'>
        <h2 className='mb-16 text-center text-3xl font-bold text-foreground md:text-4xl'>
          Послуги
        </h2>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {services.map((service, index) => (
            <div
              key={service.title}
              className='hover-lift rounded-lg border border-border bg-card p-8 transition-all duration-300 fade-in hover:border-primary/30'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className='mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10'>
                <service.icon
                  className='h-8 w-8 text-primary'
                  strokeWidth={1.5}
                />
              </div>

              <h3 className='mb-4 text-xl font-semibold text-foreground'>
                {service.title}
              </h3>

              <p className='mb-6 leading-relaxed text-muted-foreground'>
                {service.description}
              </p>

              <Button
                variant='outline'
                onClick={() => scrollToContacts(service.service)}
                className='border-primary text-primary transition-colors duration-200 hover:bg-primary hover:text-primary-foreground'
              >
                Детальніше
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
