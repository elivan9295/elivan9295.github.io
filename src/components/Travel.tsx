import React, { useState, useContext, useEffect } from "react";
import { LanguageContext } from '../../contexts/LanguageContext.tsx';
import { translations } from '../../translations.ts';
import PugliaMap from '/assets/puglia2.png';

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

  const cityColor = "#9E2A2F";
  const natureColor = "#4b6455";

  const locations = [
    {
      id: 1,
      name: "Ostuni",
      description: t.ostuniDescription,
      extendedDescription: t.ostuniExtendedDescription,
      x: 67, // percentage from left
      y: 54, // percentage from top
      color: cityColor,
    },
    {
      id: 2,
      name: "Polignano a Mare",
      description: t.polignanoDescription,
      extendedDescription: t.polignanoExtendedDescription,
      proTip: t.polignanoProTip,
      x: 60,
      y: 44,
      color: cityColor,
    },
    {
      id: 3,
      name: "Punta Prosciutto",
      description: t.puntaprosciuttoDescription ,
      extendedDescription: t.puntaprosciuttoExtendedDescription,
      x: 72,
      y: 71,
      color: natureColor,
    },
    {
      id: 4,
      name: "Matera",
      description: t.materaDescription,
      extendedDescription: t.materaExtendedDescription,
      x: 45,
      y: 60,
      color: cityColor,
    },
    {
      id: 5,
      name: "Bari",
      description: t.bariDescription,
      extendedDescription: t.bariExtendedDescription,
      proTip: t.bariProTip,
      x: 54,
      y: 39,
      color: cityColor,
    },
    {
      id: 6,
      name: "Otranto",
      description: t.otrantoDescription,
      extendedDescription: t.otrantoExtendedDescription,
      proTip: t.otrantoProTip,
      x: 88,
      y: 78,
      color: cityColor,
    },
    {
      id: 7,
      name: "Lecce",
      description: t.lecceDescription,
      extendedDescription: t.lecceExtendedDescription,
      proTip: t.lecceProTip,
      x: 80,
      y: 70,
      color: cityColor,
    },
    {
      id: 8,
      name: "Porto Cesareo",
      description: t.portocesareoDescription,
      extendedDescription: t.portocesareoExtendedDescription,
      x: 74,
      y: 73,
      color: cityColor,
    },
    {
      id: 9,
      name: "Martina Franca",
      description: t.martinafrancaDescription,
      extendedDescription: t.martinafrancaExtendedDescription,
      proTip: t.martinafrancaProTip,
      x: 63,
      y: 57,
      color: cityColor,
    },
    {
      id: 10,
      name: "Alberobello",
      description: t.alberobelloDescription,
      extendedDescription: t.alberobelloExtendedDescription,
      x: 61,
      y: 54,
      color: cityColor,
    },
    {
      id: 11,
      name: "Monopoli",
      description: t.monopolidescription,
      extendedDescription: t.monopoliextendedDescription,
      proTip: t.monopoliProTip,
      x: 62,
      y: 46,
      color: cityColor,
    },
    {
      id: 12,
      name: "Cisternino",
      description: t.cisterninoDescription,
      extendedDescription: t.cisterninoExtendedDescription,
      proTip: t.cisterninoProTip,
      x: 65,
      y: 53,
      color: cityColor,
    },
    {
      id: 13,
      name: "Santa Maria di Leuca",
      description: t.santamariaDescription,
      extendedDescription: t.santamariaExtendedDescription,
      proTip: t.santamariaProTip,
      x: 85,
      y: 93,
      color: cityColor,
    },
    {
      id: 14,
      name: "Castro",
      description: t.castroDescription,
      extendedDescription: t.castroExtendedDescription,
      proTip: t.castroProTip,
      x: 85.5,
      y: 84,
      color: cityColor,
    },
    {
      id: 15,
      name: "Gravina in Puglia",
      description: t.gravinainPugliaDescription,
      extendedDescription: t.gravinainpugliaExtendedDescription,
      x: 41,
      y: 53,
      color: cityColor,
    },
    {
      id: 16,
      name: "Vieste",
      description: t.viesteDescription,
      extendedDescription: t.viesteExtendedDescription,
      x: 35,
      y: 5,
      color: cityColor,
    },
    {
      id: 17,
      name: "Grotte di Castellana",
      description: t.grottedicastellanaDescription,
      extendedDescription: t.grottedicastellanaExtendedDescription,
      x: 58,
      y: 50,
      color: natureColor,
    },
    {
      id: 18,
      name: "Marina di Pulsano",
      description: t.marinadipulsanoDescription,
      extendedDescription: t.marinadipulsanoExtendedDescription,
      x: 60,
      y: 68,
      color: natureColor,
    },
    {
      id: 19,
      name: "Porto Selvaggio",
      description: t.portoselvaggioDescription,
      extendedDescription: t.portoselvaggioExtendedDescription,
      x: 76,
      y: 80,
      color: natureColor,
    },
    {
      id: 20,
      name: "Grotta della Poesia",
      description: t.grottadellapoesiaDescription,
      extendedDescription: t.grottadellapoesiaExtendedDescription,
      x: 83,
      y: 66,
      color: natureColor,
    },
    {
      id: 21,
      name: "Baia dei Turchi",
      description: t.baiadeiturchiDescription,
      extendedDescription: t.baiadeiturchiExtendedDescription,
      x: 86,
      y: 70,
      color: natureColor,
    },
    {
      id: 22,
      name: "Spiaggia di Borraco",
      description: t.spiaggiadiborracoDescription,
      extendedDescription: t.spiaggiadiborracoExtendedDescription,
      x: 68,
      y: 72,
      color: natureColor,
    },
    {
      id: 23,
      name: "Gargano",
      description: t.garganoDescription,
      extendedDescription: t.garganoExtendedDescription,
      proTip: t.garganoProTip,
      x: 30,
      y: 10,
      color: natureColor,
    },
    {
      id: 24,
      name: "Castel del Monte",
      description: t.casteldelmonteDescription,
      extendedDescription: t.casteldelmonteExtendedDescription,
      x: 40,
      y: 35,
      color: cityColor,
    },
    {
      id: 25,
      name: "Spiaggia di Porto Miggiano",
      description: t.spiaggiadiportomiggianoDescription,
      extendedDescription: t.spiaggiadiportomiggianoExtendedDescription,
      x: 87,
      y: 82,
      color: natureColor,
    },
  ];

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Background image */}
      <img
        src={PugliaMap}
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
              fill={loc.color}
              stroke="rgba(0,0,0,0.08)"
              strokeWidth="0.6"
            />
          </svg>
        </div>
      ))}

      {/* Popup */}
      {(active || hovered) && (
        <div
            className="absolute bg-[#fdf8f2] shadow-lg p-3 rounded-xl text-sm pointer-events-none w-[300px] whitespace-normal"
            style={{
            left: `${(active || hovered).x}%`,
            top: `${(active || hovered).y}%`,
            transform: `translate(-50%, ${(active || hovered).y > 30? -110: +10}%)`,
            minWidth: "140px",
            zIndex: 10,
          }}
          onClick={(e) => e.stopPropagation()} 
        >
          <strong>{(active || hovered).name}</strong>
          {(hovered && !active)  && (
            <div className="mt-1 text-green/80">
            {(hovered).description}
          </div>
          )}

          {active && (
           <div className="italic mt-1 text-green/80">
            {(active).extendedDescription}
          </div>
          )} 
          {active?.proTip && (
            <div className="mt-2 p-2 bg-green/10 text-green/80">
              <strong>Pro Tip:</strong> {(active).proTip}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Travel;