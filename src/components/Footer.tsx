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
        <div className="text-center px-6">
          <p className="font-sans text-2xl font-bold mb-2">Elisabetta & Ivan</p>
          <p className="text-sm">{t.footerDate}</p>
          <p className="text-xs mt-4 opacity-70">{t.footerMadeWithLove}</p>
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
