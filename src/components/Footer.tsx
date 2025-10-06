import { Instagram, Send } from 'lucide-react';

import Logo from '@/components/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { href: '#services', label: 'Послуги' },
    { href: '#staff', label: 'Технічний персонал' },
    { href: '#portfolio', label: 'Портфоліо' },
    { href: '#contact', label: 'Контакти' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className='bg-surface border-border-light border-t'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='py-12'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
            {/* Company Info */}
            <div className='lg:col-span-2'>
              <Logo className='mb-4' />
              <p className='mb-6 max-w-md text-foreground/80'>
                Професійне звукове та світлове обладнання для подій будь-якого
                масштабу. Створюємо незабутні враження разом з вами.
              </p>
              <div className='flex gap-4'>
                <a
                  href='https://instagram.com/soundstaff.ua'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='glow-primary-hover rounded-lg bg-primary/10 p-2 text-primary transition-all duration-300 hover:bg-primary hover:text-white'
                  aria-label='Instagram'
                >
                  <Instagram className='h-5 w-5' />
                </a>
                <a
                  href='https://t.me/soundstaff_ua'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='glow-primary-hover rounded-lg bg-primary/10 p-2 text-primary transition-all duration-300 hover:bg-primary hover:text-white'
                  aria-label='Telegram'
                >
                  <Send className='h-5 w-5' />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className='text-heading mb-4 font-semibold'>Навігація</h4>
              <ul className='space-y-2'>
                {navigationLinks.map(link => (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className='text-foreground/70 transition-colors duration-200 hover:text-primary'
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className='text-heading mb-4 font-semibold'>Контакти</h4>
              <ul className='space-y-2 text-foreground/70'>
                <li>
                  <a
                    href='tel:+380671234567'
                    className='transition-colors hover:text-primary'
                  >
                    +38 (067) 123-45-67
                  </a>
                </li>
                <li>
                  <a
                    href='mailto:info@soundstaff.ua'
                    className='transition-colors hover:text-primary'
                  >
                    info@soundstaff.ua
                  </a>
                </li>
                <li>м. Київ, вул. Хрещатик, 1</li>
                <li>Пн-Нд: 9:00 - 22:00</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-border-light border-t py-6'>
          <div className='flex flex-col items-center justify-between gap-4 sm:flex-row'>
            <div className='text-center sm:text-left'>
              <p className='text-sm text-foreground/60'>
                © {currentYear} Sound & Staff. Всі права захищені.
              </p>
            </div>
            <div className='text-center sm:text-right'>
              <p className='text-sm font-medium text-primary'>
                Sound & Staff: Створюємо. Вражаємо.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
