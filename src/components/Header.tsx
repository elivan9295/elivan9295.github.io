import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext.tsx';
import { translations } from '../../translations.ts';
import { MenuIcon, CloseIcon } from './icons.tsx';

const navItems = [
    { href: '#story', key: 'navStory' },
    { href: '#details', key: 'navDetails' },
    { href: '#faq', key: 'navTravel' },
    { href: '#rsvp', key: 'navRsvp' },
    { href: '#photos', key: 'navPhotos' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const handleMobileLinkClick = () => setIsMenuOpen(false);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-green/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
        <nav className="max-w-8xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <a href="#home" className="font-script text-3xl md:text-5xl font-bold text-white">
              I<span className="relative" style={{ top: '0.4em', right: '0.4em'}}>E</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <ul className="flex space-x-8">
                {navItems.map(item => (
                  <li key={item.key}>
                    <a
                      href={item.href}
                      className="font-semibold tracking-wider uppercase text-sm transition-colors text-ivory hover:text-terracotta"
                    >
                      {t[item.key as keyof typeof t]}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Desktop Language Selector */}
              <div className="flex items-center space-x-2 text-sm">
                <button
                  onClick={() => setLanguage('en')}
                  className={`font-semibold transition-colors ${language === 'en' ? 'text-white' : 'text-ivory/60 hover:text-white'}`}
                >
                  EN
                </button>
                <span className="text-ivory/50">/</span>
                <button
                  onClick={() => setLanguage('it')}
                  className={`font-semibold transition-colors ${language === 'it' ? 'text-white' : 'text-ivory/60 hover:text-terracotta'}`}
                >
                  IT
                </button>
              </div>
            </div>

            {/* Mobile Language Selector – always visible */}
            <div className="flex items-center space-x-2 text-sm md:hidden">
              <button
                onClick={() => setLanguage('it')}
                className={`font-semibold transition-colors ${language === 'it' ? 'text-white' : 'text-ivory/60 hover:text-white'}`}
              >
                IT
              </button>
              <span className="text-ivory/50">/</span>
              <button
                onClick={() => setLanguage('en')}
                className={`font-semibold transition-colors ${language === 'en' ? 'text-white' : 'text-ivory/60 hover:text-white'}`}
              >
                EN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="transition-colors text-white"
                aria-label="Open menu"
              >
                <MenuIcon className="w-7 h-7" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[9999] bg-green/80 text-ivory flex flex-col transition-transform duration-300 ease-in-out md:hidden
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Close button */}
        <div className="flex justify-end p-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-ivory"
            aria-label="Close menu"
          >
            <CloseIcon className="w-8 h-8" />
          </button>
        </div>

        {/* Menu items */}
        <div className="flex flex-col items-center justify-center flex-1 h-screen">
          <ul className="flex flex-col space-y-6 text-center">
            {navItems.map(item => (
              <li key={item.key}>
                <a
                  href={item.href}
                  onClick={handleMobileLinkClick}
                  className="font-sans text-xl md:text-3xl text-ivory hover:text-terracotta transition-colors"
                >
                  {t[item.key as keyof typeof t]}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </>
  );
};

export default Header;
