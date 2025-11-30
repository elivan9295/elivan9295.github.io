
import React, { useContext } from 'react';
import Header from './components/Header.tsx';
import PhotoGallery from './components/PhotoGallery.tsx';
import Footer from './components/Footer.tsx';
import { CalendarIcon, LocationIcon, PlaneIcon, BedIcon, SparklesIcon } from './components/icons.tsx';
import AccordionItem from './components/AccordionItem.tsx';
import { LanguageContext } from '../contexts/LanguageContext.tsx';
import { translations } from '../translations.ts';

const App: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScHfE-Cfy_JnBhV4SS6RGH9MCDRDvJYXwGwolb37kEMHSU4eg/viewform?embedded=true";
  return (
    <div className="bg-ivory text-green font-sans antialiased">
      <Header />
      <main>
        <section
            id="home"
            className="relative h-screen flex flex-col items-center justify-center md:justify-start text-center text-white bg-[#f7f0e8] overflow-hidden"
            >
            {/* slight tint overlay */}
            <div className="absolute inset-0 bg-terracotta/80 z-10"></div>

            {/* Image */}
            <img
                src="./assets/trullo4.png"
                className="
                relative z-20
                h-auto
                max-h-[80vh]
                w-full
                max-w-[700px]
                object-contain
                opacity-80
                translate-x-[10%] 
                md:translate-x-12
                mx-auto
                mb-6
                transition-all duration-300
                "
            />

            {/* TEXT */}
            <div className="relative z-20 p-4">
                <h1 className="font-script text-6xl md:text-9xl mb-2">Elisabetta & Ivan</h1>
                <p className="text-xl md:text-2xl font-medium tracking-wider uppercase"></p>
                <p className="mt-4 text-xl md:text-2xl font-sans">{t.heroDate}</p>
            </div>
            </section>


        {/* Introduction Section */}
       <section
        id="story"
        className="relative py-28 px-6 md:px-12 overflow-hidden"
        >
        {/* Background Image */}
        <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "url('./assets/acquerello.png')" }}
        ></div>
        <div className="absolute inset-0 bg-ivory/20"></div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Text */}
            <div style={{ whiteSpace: "pre-line" }} className="text-center md:text-left order-2 md:order-1 px-4 md:px-0">
            <h2 className="font-titles font-bold text-2xl sm:text-3xl md:text-5xl text-orange mb-4 md:mb-6">
                {t.storyTitle}
            </h2>

            <p className="text-sm sm:text-base md:text-lg leading-snug sm:leading-relaxed text-green/80 mb-4 text-justify">
                {t.storyPara}
            </p>
            </div>

            {/* Image */}
            <div className="order-1 md:order-2">
                <img
                src="./assets/hollywood.jpg"
                alt="Elisabetta and Ivan smiling together"
                className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/5]"
                />
            </div>

            </div>
        </div>
        </section>

        <section id="details" className="bg-ivory pt-20 px-6 md:px-12">
             <div className="max-w-6xl mx-auto text-center">

        {/* DETAILS TITLE */}
        <h2 className="font-titles font-bold text-4xl md:text-5xl text-orange mb-20 flex items-center justify-center gap-4">
            {t.detailsTitle}
        </h2>

        {/* DETAILS GRID */}
        <div className="grid md:grid-cols-3 gap-12 text-green mb-20">

            {/* WHEN */}
            <div className="relative flex flex-col items-center rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-2xl overflow-hidden transition-shadow duration-300 h-64">
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: "url('./assets/acquerello.png')" }}
            ></div>
            <div className="absolute inset-0 bg-ivory/20"></div>

            <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full">
                <h3 className="font-sans font-bold text-orange flex items-center gap-2 text-[clamp(1rem,3vw,1.25rem)] sm:text-[clamp(1.1rem,3vw,1.25rem)]">
                <CalendarIcon className="w-5 h-5" />
                {t.detailsWhenTitle}
                </h3>
                <p className="font-light text-[clamp(1.1rem,3vw,1.5rem)] sm:text-[clamp(1.2rem,3vw,1.5rem)] mt-2">{t.detailsWhenValue}</p>
                <p className="text-green/80 text-[clamp(0.85rem,2.5vw,1rem)] sm:text-[clamp(0.9rem,2.5vw,1rem)] mt-1">{t.detailsWhenValue1}</p>
            </div>
            </div>


            {/* LOCATION */}
            <div className="relative flex flex-col items-center rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-2xl overflow-hidden transition-shadow duration-300 h-64">
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: "url('./assets/acquerello.png')" }}
            ></div>
            <div className="absolute inset-0 bg-ivory/20"></div>

            <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full">
                <h3 className="font-sans font-bold text-orange flex items-center gap-2 text-[clamp(1rem,3vw,1.25rem)] sm:text-[clamp(1.1rem,3vw,1.25rem)]">
                <LocationIcon className="w-5 h-5" />
                {t.detailsLocationTitle}
                </h3>
                <p className="font-light text-[clamp(1.1rem,3vw,1.5rem)] sm:text-[clamp(1.2rem,3vw,1.5rem)] mt-2">{t.detailsLocationValue}</p>
                <p className="text-green/80 text-[clamp(0.85rem,2.5vw,1rem)] sm:text-[clamp(0.9rem,2.5vw,1rem)] mt-1">{t.detailsLocationValue1}</p>
            </div>
            </div>

            {/* DRESS CODE */}
            <div className="relative flex flex-col items-center rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-2xl overflow-hidden transition-shadow duration-300 h-64">
            <div
                className="absolute inset-0 bg-cover bg-right bg-fixed"
                style={{ backgroundImage: "url('./assets/acquerello.png')" }}
            ></div>
            <div className="absolute inset-0 bg-ivory/20"></div>

            <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full">
                <h3 className="font-sans font-bold text-orange flex items-center gap-2 text-[clamp(1rem,3vw,1.25rem)] sm:text-[clamp(1.1rem,3vw,1.25rem)]">
                <SparklesIcon className="w-5 h-5" />
                {t.dressCodeTitle}
                </h3>
                <p className="font-light text-[clamp(1.1rem,3vw,1.5rem)] sm:text-[clamp(1.2rem,3vw,1.5rem)] mt-2">{t.dressCodeValue}</p>
                <p className="text-green/80 text-[clamp(0.85rem,2.5vw,1rem)] sm:text-[clamp(0.9rem,2.5vw,1rem)] mt-1">{t.dressCodeValue1}</p>
            </div>
            </div>

        </div>

                {/* MAP */}
                <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg mb-28">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6022.80181012093!2d17.194303!3d40.822174!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1347b17e717c4a13%3A0x2539274537f2b8e4!2sMasseria%20Papaperta!5e1!3m2!1sit!2sde!4v1763582274450!5m2!1sit!2sde"
                    className="w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>
            </div>
            </section>

    {/* Travel & Stay Section */}
        <section id="travel" className="bg-ivory px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center w-full my-16">
                    <div className="flex-1 border-t border-terracotta/40"></div>

                    <img
                        src="./assets/ficod.png"
                        className="w-32 h-auto mx-6"
                        alt="Icon"
                    />

                    <div className="flex-1 border-t border-terracotta/40"></div>
                    </div>
                <h2 className="font-titles font-bold text-4xl md:text-5xl text-orange mb-12 flex items-center justify-center gap-4">
                    {t.travelTitle}
                </h2>
                <div className="space-y-4 text-left text-green">
                {/* Getting Here */}
                <AccordionItem
                    title={
                    <h3 className="font-sans font-bold text-xl md:text-2xl text-orange flex items-center gap-3">
                        <PlaneIcon className="w-5 h-5" /> {t.travelGettingHereTitle}
                    </h3>
                    }
                >
                    <div className="bg-terracotta/10 p-6 md:p-8 rounded-lg shadow-sm text-green/80 text-sm md:text-base leading-relaxed whitespace-pre-line">
                    {t.travelGettingHerePara}
                    </div>
                </AccordionItem>

                {/* Accommodations */}
                <AccordionItem
                    title={
                    <h3 className="font-sans font-bold text-xl md:text-2xl text-orange flex items-center gap-3">
                        <BedIcon className="w-5 h-5" /> {t.travelAccommodationsTitle}
                    </h3>
                    }
                >
                    <div className="bg-terracotta/10 p-6 md:p-8 rounded-lg shadow-sm text-green/80 text-sm md:text-base leading-relaxed  whitespace-pre-line">
                    <p className="mb-2">{t.travelAccommodationsPara1}</p>
                    <p>{t.travelAccommodationsPara2}</p>
                    </div>
                </AccordionItem>

                {/* Explore */}
                    <AccordionItem
                    title={
                        <h3 className="font-sans font-bold text-xl md:text-2xl text-orange flex items-center gap-3">
                        <SparklesIcon className="w-5 h-5" /> {t.travelExploreTitle}
                        </h3>
                    }
                    >
                    <div className="bg-terracotta/10 p-6 md:p-8 rounded-lg shadow-sm text-green/80 text-sm md:text-base leading-relaxed whitespace-pre-line">
                        <p className="mb-4">{t.travelExplorePara}</p>
                        <div className="relative w-full aspect-[4/5] md:aspect-video rounded-lg overflow-hidden shadow-md">
                        <iframe
                            src="https://www.google.com/maps/d/u/0/embed?mid=1cf-_BTZxw7TNEbSh8Ro8lrB-D74rKYU&ehbc=2E312F&noprof=1"
                            className="absolute inset-0 w-full h-full"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        </div>
                    </div>
                    </AccordionItem>
                </div>
            </div>
        </section>


        {/* Photo Gallery Section */}
        <section id="photos" className="px-6 md:px-12">
          <div className="max-w-6xl mx-auto text-center">
                <div className="flex items-center justify-center w-full my-16">
                    <div className="flex-1 border-t border-terracotta/40"></div>

                    <img
                        src="./assets/ficod.png"
                        className="w-32 h-auto mx-6"
                        alt="Icon"
                    />

                    <div className="flex-1 border-t border-terracotta/40"></div>
                    </div>
            <h2 className="font-titles font-bold text-4xl md:text-5xl text-orange mb-12">{t.photosTitle}</h2>
            <PhotoGallery />
          </div>
        </section>

        {/* Gift Section */}
        <section id="gifts" className="bg-ivory px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">

            {/* Divider with icon */}
            <div className="flex items-center justify-center w-full my-12">
            <div className="flex-1 border-t border-terracotta/40"></div>

            <img
                src="./assets/ficod.png"
                className="w-28 h-auto mx-6"
                alt="Icon"
            />

            <div className="flex-1 border-t border-terracotta/40"></div>
            </div>

            {/* Title */}
            <h2 className="font-titles font-bold text-2xl sm:text-3xl md:text-5xl text-orange mb-6 flex items-center justify-center gap-4">
            {t.giftsTitle}
            </h2>

            {/* Body paragraphs */}
            <p className="text-sm sm:text-base md:text-lg leading-snug sm:leading-relaxed text-green/80 mb-4">
            {t.giftsPara1}
            </p>

            <p className="text-sm sm:text-base md:text-lg leading-snug sm:leading-relaxed text-green/80 mb-4 ">
            {t.giftsPara2}
            </p>

            <div className="bg-terracotta/20 inline-block px-6 py-4 rounded-lg font-mono text-center text-orange tracking-widest text-sm sm:text-base md:text-lg">
            coming soon ...
            </div>

            <p className="text-sm sm:text-base md:text-lg leading-snug sm:leading-relaxed text-green/80 mt-4">
            {t.giftsPara3}
            </p>

        </div>
        </section>



        {/* RSVP Section */}
        <section id="rsvp" className="bg-ivory pt-10 px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center w-full my-16">
                    <div className="flex-1 border-t border-terracotta/40"></div>

                    <img
                        src="./assets/ficod.png"
                        className="w-32 h-auto mx-6"
                        alt="Icon"
                    />

                    <div className="flex-1 border-t border-terracotta/40"></div>
                    </div>
                <h2 className="font-titles font-bold text-4xl md:text-5xl text-orange mb-4 pb-10">{t.rsvpTitle}</h2>
                <div className="aspect-w-1 aspect-h-1 md:aspect-w-3 md:aspect-h-2">
                   <iframe
                      src={googleFormUrl}
                      width="100%"
                      height="900"
                      title="RSVP Form"
                      className="rounded-lg shadow-lg"
                      >
                      Loading…
                    </iframe>
                </div>
            </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;