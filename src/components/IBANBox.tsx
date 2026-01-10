import { useState, useContext } from "react";
import { LanguageContext } from '../../contexts/LanguageContext.tsx';
import { translations } from '../../translations.ts';
import CopyButton from "./CopyButton.jsx";

export default function IBANBox() {
  const [expanded, setExpanded] = useState(false);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div
      className="bg-terracotta/20 p-6 md:p-8 rounded-lg shadow-sm text-green/80 text-sm md:text-base leading-relaxed whitespace-pre-line cursor-pointer transition-all duration-300"
      onClick={() => setExpanded(!expanded)}
    >
      {/* Toggle title */}
      <div className="text-m md:text-xl text-orange font-bold flex justify-center">
        {expanded ? t.hide : t.show}
      </div>

      {expanded && (
        <div className="mt-4 md:mt-4 flex flex-col items-center space-y-4">

          {/* IBAN */}
          <CopyButton
            text="DE57 5001 0517 5458 2514 43"
            className="w-full max-w-sm text-center font-mono text-[clamp(0.75rem,3vw,1rem)] px-2 py-1"
          />

          {/* BIC/SWIFT */}
          <CopyButton
            text="INGDDEFFXXX"
            className="w-full max-w-sm text-center font-mono text-[clamp(0.75rem,3vw,1rem)] px-2 py-1"
          />

          {/* Names */}
          <div className="text-center font-mono text-[clamp(0.75rem,3vw,1rem)] font-medium">
            Ivan Intermite & Elisabetta Chimisso
          </div>

        </div>
      )}
    </div>
  );
}
