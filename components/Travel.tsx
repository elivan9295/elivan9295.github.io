import React, { useState, useContext, useEffect } from "react";
import { LanguageContext } from '../contexts/LanguageContext.tsx';
import { translations } from '../translations.ts';

const Travel: React.FC = () => {
  const [hovered, setHovered] = useState(null); 
  const [active, setActive] = useState(null);   
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  useEffect(() => {
    const handleClickOutside = () => {
      setActive(null)
      setHovered(null);
    };
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const locations = [
    {
      id: 1,
      name: "Ostuni",
      description: t.ostuniDesctipion,
      x: 67, // percentage from left
      y: 54, // percentage from top
    },
    {
      id: 2,
      name: "Polignano a Mare",
      description: t.polignanoDescription,
      x: 58,
      y: 42,
    },
    {
      id: 3,
      name: "half",
      description: t.polignanoDescription,
      x: 50,
      y: 50,
    },
    {
      id: 4,
      name: "Matera",
      description: t.materaDescription,
      x: 45,
      y: 60,
    },
    {
      id: 5,
      name: "Bari",
      description: t.bariDescription,
      x: 54,
      y: 39
    },
    {
      id: 6,
      name: "Otranto",
      description: t.materaDescription,
      x: 88,
      y: 78
    },
  ];

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Background image */}
      <img
        src="../assets/puglia2.png"
        alt="Puglia Map"
        className="w-full h-auto select-none pointer-events-none"
      />

      {/* Markers */}
      {locations.map((loc) => (
        <div
          key={loc.id}
           onMouseEnter={() => setHovered(loc)}
          onMouseLeave={() => {
            if (!active || active.id !== loc.id) {
              setHovered(null);
            }
          }}
          onClick={(e) => {
            e.stopPropagation(); // prevent global click from closing it
            setActive(loc);
            setHovered(loc);     // keep popup visible on click
          }}
          className="absolute cursor-pointer"
          style={{
            left: `${loc.x}%`,
            top: `${loc.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* terracotta marker icon */}
          <svg
            width="28"
            height="32"
            viewBox="0 0 24 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0C7.03 0 3.32 3.9 3.32 8.7C3.32 14.8 12 32 12 32C12 32 20.68 14.8 20.68 8.7C20.68 3.9 16.97 0 12 0Z"
              fill="#4b6455ff"
              stroke="rgba(0,0,0,0.08)"
              strokeWidth="0.6"
            />
          </svg>
        </div>
      ))}

      {/* Popup */}
      {(active || hovered) && (
        <div
          className="absolute bg-white shadow-lg p-3 rounded-xl text-sm  pointer-events-none"
          style={{
            left: `${(active || hovered).x}%`,
            top: `${(active || hovered).y}%`,
            transform: "translate(-50%, -110%)",
            minWidth: "140px",
            zIndex: 10,
          }}
          onClick={(e) => e.stopPropagation()} 
        >
          <strong>{(active || hovered).name}</strong>
          <div className="mt-1 text-gray-600">
            {(active || hovered).description}
          </div>

          {active && (
            <button
              className="mt-2 text-xs text-terracotta underline"
              onClick={(e) => {
                e.stopPropagation();
                setActive(null);
                setHovered(null);
              }}
            >
              close
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Travel;