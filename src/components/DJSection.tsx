import { ArrowRight } from 'lucide-react';

import djBackground from '@/assets/images/dj-bg.jpg';
import videoAv1 from '@/assets/video/dj_av1_crf60.webm';
import videoH264 from '@/assets/video/dj_h264_crf30.mp4';
import { Button } from '@/components/ui/button';

const DJSection = () => {
  const scrollToContacts = () => {
    const section = document.getElementById('contacts');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      // TODO: Pre-select DJ service in form if needed
    }
  };

  return (
    <section className='relative flex min-h-screen items-center justify-center overflow-hidden'>
      {/* Desktop Background Image */}
      <div className='absolute inset-0 hidden md:block'>
        <div
          className='animate-ken-burns h-full w-full bg-cover bg-center'
          style={{
            backgroundImage: `url(${djBackground.src})`,
          }}
        />
        <div className='hero-overlay absolute inset-0' />
      </div>

      {/* Mobile Background Video */}
      <div className='absolute inset-0 md:hidden'>
        <video
          autoPlay
          muted
          loop
          playsInline
          className='h-full w-full object-cover'
          poster={djBackground.src}
        >
          <source src={videoAv1} type='video/webm; codecs=av01.0.05M.08' />
          <source src={videoH264} type='video/mp4' />
        </video>
        <div className='hero-overlay absolute inset-0' />
      </div>

      {/* Content */}
      <div className='relative z-10 mx-auto max-w-4xl px-4 text-center'>
        <h2 className='mb-6 text-3xl font-bold text-foreground fade-in md:text-5xl'>
          DJ Alexey Galickiy
        </h2>

        <p
          className='mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-slate-300 fade-in md:text-xl'
          style={{ animationDelay: '0.2s' }}
        >
          Професійний діджей з досвідом роботи на великих заходах та фестивалях.
          Спеціалізується на створенні унікальної атмосфери за допомогою музики,
          що відповідає настрою вашого заходу.
        </p>

        <Button
          size='lg'
          onClick={scrollToContacts}
          className='glow hover:glow-strong bg-primary px-8 py-4 text-lg text-primary-foreground transition-all duration-300 fade-in hover:bg-gradient-to-r hover:from-primary hover:to-violet-500'
          style={{ animationDelay: '0.4s' }}
        >
          Забронювати діджея
          <ArrowRight className='ml-2 h-5 w-5' />
        </Button>
      </div>
    </section>
  );
};

export default DJSection;
