import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext.tsx';
import { translations } from '../../translations.ts';

const Footer: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <footer className="bg-green/80 text-ivory py-8">
      <div className="max-w-7xl mx-auto px-6 relative flex justify-center items-center">

        {/* Left image */}
        <img
          src="./assets/transparent_cacti.png"
          className="absolute left-4 sm:left-12 top-1/2 -translate-y-1/2 w-12 sm:w-20 md:w-28 h-auto"
          alt=""
        />

        {/* Center text */}
        <div className="font-sans text-center px-6">
          <p className="font-script text-2xl md:text-4xl mb-2">
            Ivan<span className="relative font-serif opacity-50 text-1.5xl md:text-3xl" style={{ top: '0.3em', right: '0.2em'}}>&</span><span className="relative" style={{ top: '0.4em', right: '0.4em'}}>Elisabetta</span>
          </p>
          <p>
            <span className="font-script text-2xl md:text-4xl opacity-80 mt-5"  style={{ top: '0.3em'}}>{t.footerMadeWithLove}</span>
          </p> 
        </div>

        {/* Right image */}
        <img
          src="./assets/transparent_cacti.png"
          className="absolute right-4 sm:right-12 top-1/2 -translate-y-1/2 w-12 sm:w-20 md:w-28 h-auto"
          alt=""
        />
      </div>
    </footer>
  );
};

export default Footer;
