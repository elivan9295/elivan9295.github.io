
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
        <div className="bg-terracotta/20 rounded-lg shadow-sm overflow-hidden">
            <button
                onClick={toggleOpen}
                className="w-full flex justify-between items-center p-8 text-left"
                aria-expanded={isOpen}
            >
                <div className="flex-1">{title}</div>
                <ChevronDownIcon
                    className={`w-6 h-6 text-orange transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            <div
                className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <div className="px-8 pb-8">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;