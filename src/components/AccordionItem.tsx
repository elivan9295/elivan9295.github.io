
import React, { useState } from 'react';
import { ChevronDownIcon } from './icons.tsx';

interface AccordionItemProps {
    title: React.ReactNode;
    children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
return (
  <div className="bg-terracotta/10 rounded-2xl shadow-lg overflow-hidden">
    {/* Accordion Header */}
    <button
      onClick={toggleOpen}
      className={`w-full flex justify-between items-center px-6 py-4 md:py-5 text-left transition-colors duration-200 rounded-t-2xl
        ${isOpen ? 'bg-terracotta/5 text-terracotta-900' : 'hover:bg-terracotta/5 text-terracotta-900'}`}
      aria-expanded={isOpen}
    >
      <div className="flex-1 text-lg font-semibold px-2">{title}</div>
      <ChevronDownIcon
        className={`w-5 h-5 transition-transform duration-300 ease-in-out ${
          isOpen ? 'rotate-180 text-terracotta-600' : 'text-terracotta-500'
        }`}
      />
    </button>

    {/* Accordion Panel */}
    <div
      className={`transition-[max-height,opacity,margin] duration-500 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-[1000px] opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'
      }`}
    >
      <div className="px-6 py-6 md:px-8 md:py-8 bg-terracotta/5 rounded-b-2xl shadow-outer flex flex-col gap-4">
        {children}
      </div>
    </div>
  </div>
);

};

export default AccordionItem;