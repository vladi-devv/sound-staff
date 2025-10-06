import { Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { href: '#services', label: 'Послуги' },
    { href: '#staff', label: 'Технічний персонал' },
    { href: '#events', label: 'Події' },
    { href: '#contacts', label: 'Контакти' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'glass backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden items-center space-x-8 md:flex'>
            {navigationItems.map(item => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className='font-medium text-foreground transition-colors duration-200 hover:text-primary'
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('#contact')}
              className='btn-primary glow-primary-hover'
            >
              Обговорити
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className='flex items-center space-x-4 md:hidden'>
            <Button
              size='sm'
              onClick={() => scrollToSection('#contacts')}
              className='btn-primary'
            >
              Обговорити
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='text-foreground transition-colors duration-200 hover:text-primary'
              aria-label='Toggle menu'
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className='fixed inset-0 z-50 flex h-screen flex-col bg-background p-4 md:hidden'>
          <div className='flex items-center justify-between'>
            <Logo />
            <button
              onClick={() => setIsMenuOpen(false)}
              className='text-foreground transition-colors hover:text-primary'
              aria-label='Close menu'
            >
              <X size={24} />
            </button>
          </div>
          <nav className='flex flex-1 flex-col justify-center space-y-8'>
            {navigationItems.map(item => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className='block text-left text-3xl font-medium text-foreground transition-colors duration-200 hover:text-primary'
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className='pb-4'>
            <Button
              size='lg'
              onClick={() => scrollToSection('#contacts')}
              className='btn-primary glow-primary-hover w-full'
            >
              <Phone className='mr-2 h-5 w-5' />
              Зв'язатися з нами
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
