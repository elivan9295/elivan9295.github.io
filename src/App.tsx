
import React, { useContext } from 'react';
import Header from './components/Header.tsx';
import PhotoGallery from './components/PhotoGallery.tsx';
import Faq from './components/Faq.tsx';
import Footer from './components/Footer.tsx';
import Divider from './components/Divider.tsx';
import { CalendarIcon, LocationIcon, SparklesIcon } from './components/icons.tsx';
import { LanguageContext } from '../contexts/LanguageContext.tsx';
import { translations } from '../translations.ts';
import IBANBox from './components/IBANBox.tsx';
import RSVPButton from './components/RSVPButton.tsx';

const App: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScHfE-Cfy_JnBhV4SS6RGH9MCDRDvJYXwGwolb37kEMHSU4eg/viewform?embedded=true&hl=en";
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
                src="/assets/trullo4.png"
                className="
                relative z-20
                h-auto
                max-h-[80vh]
                w-full
                max-w-[700px]
                object-contain
                opacity-60
                translate-x-[10%] 
                md:translate-x-12
                mx-auto
                mb-6
                transition-all duration-300
                "
            />

            {/* TEXT */}
            <div className="relative z-10 p-4">
                <h1 className="font-script text-6xl md:text-9xl mb-2">
                    <span className="relative" style={{left: '0.1em'}}>  Ivan</span><span className="relative font-serif opacity-30" style={{ top: '0.3em'}}>&</span><span className="relative" style={{ top: '0.6em', right: '0.2em'}}>Elisabetta</span></h1>
                <br />
                <p className="mt-4 text-l md:text-xl font-sans">{t.heroDate}</p>
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
            style={{ backgroundImage: "url('/assets/acquerello.png')" }}
        ></div>
        <div className="absolute inset-0 bg-ivory/20"></div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Text */}
            <div style={{ whiteSpace: "pre-line" }} className="text-left order-2 md:order-1 px-4 md:px-0">
            <h2 className="font-titles font-extrabold text-4xl md:text-7xl text-orange mb-4 md:mb-6">
                {t.storyTitle}
            </h2>

            <p className="text-xs sm:text-base md:text-lg leading-snug sm:leading-relaxed text-green/80 mb-4 text-justify">
                {t.storyPara}
            </p>
            </div>

            {/* Image */}
            <div className="order-1 md:order-2">
                <img
                src="/assets/hollywood.jpg"
                alt="Ivan and Elisabetta smiling together"
                className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/5]"
                />
            </div>

            </div>
        </div>
        </section>

        <section id="details" className="bg-ivory pt-20 px-6 md:px-12">
             <div className="max-w-6xl mx-auto text-center">

        {/* DETAILS TITLE */}
        <h2 className="font-titles font-extrabold text-4xl md:text-7xl text-orange mb-20 flex items-center justify-center gap-4">
            {t.detailsTitle}
        </h2>

        {/* DETAILS GRID */}
        <div className="grid md:grid-cols-3 gap-12 text-green mb-20">

            {/* WHEN */}
            <div className="relative flex flex-col items-center rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-2xl overflow-hidden transition-shadow duration-300 h-64">
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: "url('/assets/acquerello.png')" }}
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
                style={{ backgroundImage: "url('/assets/acquerello.png')" }}
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
                style={{ backgroundImage: "url('/assets/acquerello.png')" }}
            ></div>
            <div className="absolute inset-0 bg-ivory/20"></div>

            <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full">
                <h3 className="font-sans font-bold text-orange flex items-center gap-2 text-[clamp(1rem,3vw,1.25rem)] sm:text-[clamp(1.1rem,3vw,1.25rem)]">
                <SparklesIcon className="w-5 h-5" />
                {t.dressCodeTitle}
                </h3>
                <p className="font-light text-[clamp(1.1rem,3vw,1.5rem)] sm:text-[clamp(1.2rem,3vw,1.5rem)] mt-2 pb-4 pt-2">{t.dressCodeValue}</p>
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


        <div className="w-full flex justify-center text-justify text-sans">
            <div className="w-full w-[80vw] max-w-5xl px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

                {/* LEFT – TEXT */}
                <div>
                <p className="text-xs sm:text-base md:text-lg leading-snug sm:leading-relaxed text-green/80 mb-4">
                    <span
                                        className="font-script float-left mr-2 relative"
                                        style={{
                                            fontSize: '4rem',       // size of the drop cap
                                            top: '-0.35em',           // move it upward
                                            marginBottom: '-0.6em',  // vertical spacing below letter
                                            lineHeight: '1',         // keep spacing consistent
                                        }}
                                        >
                                        {t.giftsLetter}
                                        </span>
                    
                    {t.giftsPara1}
                </p>
                </div>
                {/* RIGHT – DETAILS */}
                <div className="flex md:justify-end pt-4 md:pt-0">
                    <div className="w-full md:w-5/6">
                    <IBANBox />
                </div></div>

            </div></div></div>
    </section>

    {/* Faq Section */}
        <section id="faq" className="bg-ivory px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
                <Divider />
                <h2 className="font-titles font-extrabold text-4xl md:text-7xl text-orange mb-12 flex items-center justify-center gap-4">
                    {t.travelTitle}
                </h2>
                <Faq />
            </div>
        </section>


        {/* RSVP Section */}
        <section id="rsvp" className="bg-ivory px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
                <Divider />
                <h2 className="font-titles font-extrabold text-4xl md:text-7xl text-orange mb-4 pb-10">{t.rsvpTitle}</h2>
                <p className="text-xs sm:text-base md:text-lg leading-snug sm:leading-relaxed text-green/80 mb-4 pb-12 md:pb-12">
                    {t.rsvpPara}
                </p>
                <RSVPButton link={googleFormUrl} text={"RSVP"} />
            </div>
        </section>

        {/* Photo Gallery Section */}
        <section id="photos" className="px-6 md:px-12 pb-20">
          <div className="max-w-6xl mx-auto text-center">
            <Divider />
            <h2 className="font-titles font-extrabold text-4xl md:text-7xl text-orange mb-12">{t.photosTitle}</h2>
            <PhotoGallery />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;