import React from 'react';

const galleryItems = [
  { path: "./assets/2024.jpg", ratio: "verywide", className: "md:row-span-2 md:col-span-4", description: "2024 - Death Valley, California", objectPosition: "center" },
  { path: "./assets/2025.jpg", ratio: "verywide", className: "md:row-span-2 md:col-span-3", year:"2025", description: "2025 - Starnberger See, Deutschland", objectPosition: "bottom" },
  { path: "./assets/2024.3.jpg", ratio: "vertical", className: "md:row-span-3 md:col-span-1", year:"2024", description: "2024 - München, Deutschland", objectPosition: "center" },
  { path: "./assets/2024.2.jpg", ratio: "regular", className: "md:row-span-2 md:col-span-2", year:"2024", description: "2024 - Κέρκυρα, Ελλάδα", objectPosition: "center" },
  { path: "./assets/2022.jpg", ratio: "vertical", className: "md:row-span-3 md:col-span-1", year:"2023", description: "2023 - München, Deutschland", objectPosition: "center" },
  { path: "./assets/2022.1.jpg", ratio: "vertical", className: "md:row-span-3 md:col-span-1", year:"2022", description: "2022 - Madrid, España", objectPosition: "left" },
  { path: "./assets/2019.2.jpg", ratio: "regular", className: "md:row-span-2 md:col-span-2", year:"2019", description: "2019 - Paris, France", objectPosition: "center" },
  { path: "./assets/2019.jpg", ratio: "regular", className: "", year:"2019", description: "2019 - Heidelberg, Deutschland", objectPosition: "left" },
  { path: "./assets/2018.jpg", ratio: "square", className: "md:col-span-2", year:"2018", description: "2018 - Firenze, Italia", objectPosition: "center" },
  { path: "./assets/2017.2.jpg", ratio: "square", className: "md:row-span-2 md:col-span-2", year:"2017", description: "2017 - Milano, Italia", objectPosition: "bottom" },
  { path: "./assets/2016.jpg", ratio: "verticalext", className: "md:row-span-3 md:col-span-1", year:"2016", description: "2016 - Firenze, Italia", objectPosition: "top" },
  { path: "./assets/2017.jpg", ratio: "verywide2", className: "md:row-span-1 md:col-span-3", year:"2017", description: "2017 - Maruggio, Italia", objectPosition: "top" },
  { path: "./assets/2015.jpg", ratio: "verywide", className: "md:row-span-1 md:col-span-3", year:"2015", description: "2015 - Milano, Italia", objectPosition: "center" },
];

const ratioClass = {
  verticalext: "aspect-[3/10]",   // vertical
  vertical: "aspect-[3/7.5]",   // vertical
  square: "aspect-[3/3]",   // square
  regular: "aspect-[4/3.1]",   // horizontal
  wide: "aspect-[16/9]",     // cinematic wide
  verywide2: "aspect-[16/9]" , // ultra wide
  verywide: "aspect-[21/9]"  // ultra wide
};

const PhotoGallery: React.FC = () => {
  return (
    <div className="flex flex-col gap-12 mt-12">

      {/* === FIRST IMAGE FULL WIDTH === */}
      <div className="overflow-hidden rounded-lg shadow-lg border-4 border-transparent pointer-events-none mb-12">
        <img
          src={galleryItems[0].path}
          alt="Gallery first image"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* === TIMELINE + REST OF THE GALLERY === */}
      <div className="flex gap-8">

        {/* TIMELINE VERTICAL */}
        <div className="relative flex flex-col items-center w-16 justify-between">
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 w-[2px] bg-terracotta/40"></div>
          <div className="h-6"></div>
          {[
            "2025","2024","2023","2022","2021",
            "2020","2019","2018","2017","2016","2015"
          ].map((item, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-terracotta z-10"></div>
              <span className="mt-2 text-xs font-semibold text-terracotta bg-ivory px-2">
                {item}
              </span>
            </div>
          ))}
          <div className="h-6"></div>
        </div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
          {galleryItems.slice(1).map((item, index) => (
            <div
              key={index}
              className={`
                relative overflow-hidden rounded-lg shadow-lg border-4 transition-all duration-300
                group hover:border-terracotta border-transparent
                ${ratioClass[item.ratio]}
                ${item.className}
              `}
            >
              <img
                src={item.path}
                alt={`Gallery image ${index + 2}`}
                className={`
                  w-full h-full object-cover 
                  ${item.objectPosition ? `object-${item.objectPosition}` : "object-center"}
                  transition-transform duration-500 group-hover:scale-105
                `}
              />
              {item.description && (
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm">{item.description}</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PhotoGallery;
