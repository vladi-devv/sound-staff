import {
  Clock4,
  Headphones,
  Music2,
  Share2,
  Sparkles,
  Trophy,
} from 'lucide-react';
import React from 'react';

type Advantage = {
  icon: React.ReactElement;
  title: string;
  description: string;
};

const DJAdvantages = () => {
  const advantages: Advantage[] = [
    {
      icon: <Trophy className='mb-4 h-8 w-8' />,
      title: 'Досвід',
      description: 'Більше 10 років успішної роботи на різноманітних заходах',
    },
    {
      icon: <Music2 className='mb-4 h-8 w-8' />,
      title: 'Велика колекція',
      description: 'Постійно оновлювана бібліотека музики різних жанрів',
    },
    {
      icon: <Clock4 className='mb-4 h-8 w-8' />,
      title: 'Пунктуальність',
      description:
        'Завчасна підготовка та професійний підхід до кожного заходу',
    },
    {
      icon: <Sparkles className='mb-4 h-8 w-8' />,
      title: 'Якісний звук',
      description: 'Використання професійного обладнання преміум класу',
    },
    {
      icon: <Share2 className='mb-4 h-8 w-8' />,
      title: 'Гнучкість',
      description: 'Вміння швидко адаптуватися під настрій публіки',
    },
    {
      icon: <Headphones className='mb-4 h-8 w-8' />,
      title: 'Індивідуальний підхід',
      description: 'Складання плейлиста з урахуванням ваших побажань',
    },
  ];

  return (
    <section className='bg-muted/50 py-16'>
      <div className='container mx-auto px-4'>
        {/* <h2 className='mb-12 text-center text-3xl font-bold md:text-4xl'>
          Мої переваги
        </h2> */}
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className='rounded-lg bg-background/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:bg-background/80'
            >
              <div className='flex justify-center text-primary'>
                {advantage.icon}
              </div>
              <h3 className='mb-2 text-xl font-semibold'>{advantage.title}</h3>
              <p className='text-foreground/75'>{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DJAdvantages;
