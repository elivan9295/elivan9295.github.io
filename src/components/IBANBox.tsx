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
      className={`
    bg-green/80
    p-5 md:p-7
    rounded-2xl
    shadow-lg
    border border-green/20
    text-ivory-800
    text-sm md:text-base
    leading-relaxed
    cursor-pointer
    select-none
    overflow-hidden
    transition-all duration-500
    hover:shadow-2xl
    ${!expanded ? "hover:scale-[1.02] active:scale-95" : ""}
  `}
  onClick={() => !expanded && setExpanded(!expanded)}
    >
      {/* Toggle title */}
      {!expanded && (
      <div className="text-m md:text-xl text-ivory font-bold flex justify-center">
        {t.show}
      </div>)}
      
      {expanded && (
        <div className="flex flex-col items-center space-y-4 text-ivory ">

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
