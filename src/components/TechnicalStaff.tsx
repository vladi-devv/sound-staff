import { useState } from 'react';

import staffCoordinatorImage from '@/assets/images/team/staff-coordinator.jpg';
import staffLightImage from '@/assets/images/team/staff-light.jpg';
import staffSoundImage from '@/assets/images/team/staff-sound.jpg';

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % staff.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + staff.length) % staff.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null); // Сбрасываем конечную точку при новом касании
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50; // Минимальная дистанция для свайпа

    if (distance > minSwipeDistance) {
      // Свайп влево
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      // Свайп вправо
      prevSlide();
    }
  };

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
        <div className='relative md:hidden'>
          <div
            className='overflow-hidden'
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className='flex transition-transform duration-300 ease-in-out'
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {staff.map(member => (
                <div key={member.title} className='w-full flex-shrink-0 px-4'>
                  <StaffCard imageSrc={member.image.src} title={member.title} />
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls - Dots Only */}
          <div className='mt-8 flex justify-center space-x-2'>
            {staff.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Перейти до слайду ${index + 1}`}
                className={`h-3 w-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-primary' : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalStaff;
