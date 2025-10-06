import { useEffect, useRef, useState } from 'react';

import portfolio1 from '@/assets/images/portfolio/portfolio-1.jpg';
import portfolio2 from '@/assets/images/portfolio/portfolio-2.jpg';
import portfolio3 from '@/assets/images/portfolio/portfolio-3.jpg';
import portfolio4 from '@/assets/images/portfolio/portfolio-4.jpg';
import portfolio5 from '@/assets/images/portfolio/portfolio-5.jpg';
import portfolio6 from '@/assets/images/portfolio/portfolio-6.jpg';

const ImageWithLoader = ({ src, alt }: { src: string; alt: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <>
      {!isLoaded && <div className='absolute inset-0 animate-pulse bg-muted' />}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`h-full w-full object-cover transition-all duration-300 group-hover:scale-110 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading='lazy'
        onLoad={() => setIsLoaded(true)}
      />
    </>
  );
};

const Events = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      image: portfolio1,
      title: "Фестиваль 'Ніч на Івана Купала'",
    },
    {
      image: portfolio2,
      title: "Весілля в 'Grand Admiral Resort'",
    },
    {
      image: portfolio3,
      title: "Корпоратив IT-компанії 'Innovatech'",
    },
    {
      image: portfolio4,
      title: "Музичний фестиваль 'Kyiv Music Days'",
    },
    {
      image: portfolio5,
      title: "Новорічна вечірка 'Golden Night'",
    },
    {
      image: portfolio6,
      title: "Концерт 'Українські зірки'",
    },
  ];

  return (
    <section id='events' className='px-4 py-20'>
      <div className='container mx-auto'>
        <h2 className='mb-16 text-center text-3xl font-bold text-foreground md:text-4xl'>
          Події, які ми організували
        </h2>

        <div className='grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3'>
          {projects.map((project, index) => (
            <div
              key={project.title}
              className='hover-lift group relative cursor-pointer overflow-hidden rounded-lg fade-in'
              style={{
                aspectRatio: '4/3',
                animationDelay: `${index * 0.1}s`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() =>
                setHoveredIndex(hoveredIndex === index ? null : index)
              }
            >
              <ImageWithLoader src={project.image.src} alt={project.title} />

              {/* Overlay */}
              <div
                className={`absolute inset-0 flex items-center justify-center bg-background/80 transition-opacity duration-300 ${
                  hoveredIndex === index
                    ? 'opacity-100'
                    : 'opacity-0 md:opacity-0'
                }`}
              >
                <h3 className='px-4 text-center text-lg font-semibold text-foreground'>
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (if no projects) */}
        {projects.length === 0 && (
          <div className='py-16 text-center'>
            <p className='text-lg text-muted-foreground'>
              Наші кейси з'являться тут незабаром.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;
