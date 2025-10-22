import { useEffect, useState } from 'react';

import staffCoordinatorImage from '@/assets/images/team/staff-coordinator.jpg';
import staffLightImage from '@/assets/images/team/staff-light.jpg';
import staffSoundImage from '@/assets/images/team/staff-sound.jpg';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const staff = [
  {
    image: staffSoundImage,
    title: 'Звукорежисер',
  },
  {
    image: staffLightImage,
    title: 'Світловий дизайнер',
  },
  {
    image: staffCoordinatorImage,
    title: 'Технічний координатор',
  },
];

const StaffCard = ({
  imageSrc,
  title,
  className,
  style,
}: {
  imageSrc: string;
  title: string;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <div className={`text-center ${className}`} style={style}>
    <div className='relative mx-auto mb-6 h-48 w-48'>
      <img
        src={imageSrc}
        alt={title}
        className='h-full w-full rounded-full border-4 border-primary/30 object-cover transition-all duration-300 group-hover:scale-105 group-hover:border-primary'
      />
    </div>
    <h3 className='text-lg font-semibold text-foreground'>{title}</h3>
  </div>
);

const TechnicalStaff = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on('select', () => {
      setActiveIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id='staff' className='bg-secondary/30 px-4 py-20'>
      <div className='container mx-auto'>
        <h2 className='mb-16 text-center text-3xl font-bold text-foreground md:text-4xl'>
          Технічний персонал
        </h2>

        {/* Desktop Grid */}
        <div className='hidden gap-8 md:grid md:grid-cols-3'>
          {staff.map((member, index) => (
            <StaffCard
              key={member.title}
              imageSrc={member.image.src}
              title={member.title}
              className='group fade-in'
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className='md:hidden'>
          <Carousel
            className='mx-auto w-full max-w-xs'
            setApi={setApi}
            opts={{ align: 'start', slidesToScroll: 1 }}
          >
            <CarouselContent className='-ml-2'>
              {staff.map(member => (
                <CarouselItem key={member.title} className='basis-4/6 pl-2'>
                  <StaffCard
                    imageSrc={member.image.src}
                    title={member.title}
                    className='group'
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className='hidden sm:flex'>
              <CarouselPrevious className='absolute left-0 top-1/2 -translate-y-1/2' />
              <CarouselNext className='absolute right-0 top-1/2 -translate-y-1/2' />
            </div>
            {/* Dots */}
            <div className='mt-4 flex justify-center gap-2'>
              {staff.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className='h-2.5 w-2.5 rounded-full bg-border/50 transition-colors hover:bg-border data-[active]:bg-primary'
                  data-active={index === activeIndex ? '' : undefined}
                  aria-label={`Перейти до слайду ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TechnicalStaff;
