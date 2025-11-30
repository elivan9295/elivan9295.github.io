
import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext.tsx';
import { translations } from '../../translations.ts';

const Footer: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <footer className="bg-green/80 text-ivory py-8">
      <div className="relative max-w-7xl mx-auto px-6">
        <img
          src="./assets/transparent_cacti.png"
          className="h-[120px] w-auto object-contain absolute left-12 top-1/2 -translate-y-1/2"
          alt=""
        />

        <div className="text-center">
          <p className="font-sans text-2xl font-bold mb-2">Elisabetta & Ivan</p>
          <p className="text-sm">{t.footerDate}</p>
          <p className="text-xs mt-4 opacity-70">{t.footerMadeWithLove}</p>
        </div>

        <img
          src="./assets/transparent_cacti.png"
          className="h-[120px] w-auto object-contain absolute right-12 top-1/2 -translate-y-1/2"
          alt=""
        />
      </div>
    </footer>
  );
};

export default Footer;