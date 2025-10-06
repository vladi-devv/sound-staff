import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className='glow-primary-hover animate-fade-in fixed bottom-8 right-8 z-30 rounded-full bg-primary p-3 text-white transition-all duration-300 hover:scale-110'
      aria-label='Scroll to top'
    >
      <ArrowUp className='h-6 w-6' />
    </button>
  );
};

export default ScrollToTop;
