import React, { useContext } from 'react';
import AccordionItem from './AccordionItem.tsx';
import { PlaneIcon,  SparklesIcon, BedIcon, PersonIcon, ContactIcon, PhotoIcon, ItineraryIcon } from './icons.tsx';
import { LanguageContext } from '../../contexts/LanguageContext.tsx';
import { translations } from '../../translations.ts';
import CopyButton from './CopyButton.jsx';

const Faq: React.FC = () => {
      const { language } = useContext(LanguageContext);
      const t = translations[language];
    
    return (
    <div className="mt-12 space-y-4 text-left text-green">                 
    {/* Getting Here */}
                <AccordionItem
                    title={
                    <h3 className="font-sans font-semibold text-l md:text-2xl text-orange flex items-center gap-3">
                        <PlaneIcon className="w-5 h-5" /> {t.travelGettingHereTitle}
                    </h3>
                    }
                >
                    <div className="bg-terracotta/10 p-6 md:p-8 rounded-lg shadow-sm text-green/80 text-xs md:text-base leading-relaxed whitespace-pre-line">
                        {(() => {
                            switch(language) {
                                case 'en':
                                    return(
                                        <>
                                        The closest airports are <b>Bari</b> (<b>BRI</b>) and <b>Brindisi</b> (<b>BDS</b>), both about a 50-minute drive from the venue.
                                        We recommend renting a car to enjoy greater flexibility and explore the beautiful Puglia region; <b>parking is available at the Masseria</b>.
                                        <br /><br />
                                        Alternatively, the area can also be reached by <b>public transportation</b>. 
                                        From Bari or Brindisi airports, you can travel to <b>Bari Centrale</b> or <b>Brindisi Centrale</b>, 
                                        and then continue by <b>train</b> to <b>Castellana Grotte</b> or <b>Alberobello</b>. 
                                        Tickets can be purchased online via <u><a href='https://www.trenitalia.com/it.html'>Trenitalia</a></u>, or the local train and bus provider <u><a href='https://www.fseonline.it/s/?language=it'>Ferrovie del Sud Est (FSE)</a></u>.
                                        <br /><br />
                                        Another valid option is to use <b>short and long distance buses</b> operated by <u><a href='https://www.flixbus.com/'>Flixbus</a></u>, <u><a href='https://marinobus.it/'>Marino Bus</a></u>, or the local <u><a href='https://biglietteria.cotrap.it/#/ricerca'>COTRAP</a></u>.
                                        <br /><br />
                                        Once in Castellana Grotte or Alberobello, the venue and nearby hotels can be reached by taxi. We are currently planning a <b>private transfer service</b> the day of the weddding and kindly ask you to <b>let us know via the RSVP form below</b> if you would like to use it, so we can organize it accordingly.
                                        </>
                                    );
                                case 'it':
                                    return(
                                        <>
                                        Gli aeroporti più vicini sono <b>Bari</b> (<b>BRI</b>) e <b>Brindisi</b> (<b>BDS</b>), entrambi a circa 50 minuti di auto dalla location.
                                        Ti consigliamo di affittare un'auto per godere di maggiore flessibilità e esplorare la splendida regione della Puglia; <b>il parcheggio è disponibile presso la Masseria</b>.
                                        <br /><br />
                                        In alternativa, è possibile arrivare con i <b>mezzi pubblici</b>. 
                                        Dagli aeroporti di Bari o Brindisi si possono raggiungere le stazioni di <b>Bari Centrale</b> e <b>Brindisi Centrale</b>, 
                                        e da lì proseguire in <b>treno</b> verso <b>Castellana Grotte</b> o <b>Alberobello</b>. 
                                        I biglietti possono essere acquistati online su <u><a href='https://www.trenitalia.com/it.html'>Trenitalia</a></u>, o sul sito delle <u><a href='https://www.fseonline.it/s/?language=it'>Ferrovie del Sud Est (FSE)</a></u>.
                                        <br /><br />
                                        Gli <b>autobus di media e lunga percorrenza</b> sono una valida alternativa per muoversi tra città. I biglietti possono essere acquistati online su <u><a href='https://www.flixbus.com/'>Flixbus</a></u>, <u><a href='https://marinobus.it/'>Marino Bus</a></u>, o sul sito dell'azienda di trasporto locale <u><a href='https://biglietteria.cotrap.it/#/ricerca'>COTRAP</a></u>. 
                                        <br /><br />
                                        Una volta arrivati a Castellana Grotte o Alberobello, la location e gli hotel della zona sono facilmente raggiungibili in taxi. Stiamo valutando l’organizzazione di un <b>transfer privato</b> nel giorno del matrimonio: vi chiediamo di <b>indicarci nel modulo RSVP sottostante</b> se desiderate usufruirne, così da poterlo pianificare al meglio.
                                        </>
                                    );
                            }
                        })()}
                    </div>
                </AccordionItem>

                {/* Accommodations */}
                <AccordionItem
                    title={
                    <h3 className="font-sans font-semibold text-l md:text-2xl text-orange flex items-center gap-3">
                        <BedIcon className="w-5 h-5" /> {t.travelAccommodationsTitle}
                    </h3>
                    }
                >
                    <div className="bg-terracotta/10 p-6 md:p-8 rounded-lg shadow-sm text-green/80 text-xs md:text-base leading-relaxed  whitespace-pre-line">
                        {(() => {
                            switch(language) {
                                case 'en':
                                    return(
                                        <>
                                        We know that many of you will be traveling from afar, and we are exploring ways to support your stay.  
                                        The final arrangements are not yet defined, but we will share <b>details</b> and <b>possible discounts</b> as soon as we can.
                                        <br /><br />
                                        To help us plan, we kindly ask you to <b>indicate in the RSVP form below if you will need accommodation</b>, 
                                        so we can assist you best.
                                        </>
                                    );
                                case 'it':
                                    return(
                                        <>
                                        Sappiamo che molti di voi arriveranno da lontano e stiamo cercando di trovare un modo per supportare il vostro soggiorno.
                                        Non abbiamo ancora definito la modalità finale, ma vi comunicheremo quanto prima eventuali <b>dettagli</b> e <b>possibili sconti</b>.
                                        <br /><br />
                                        Per aiutarci nell’organizzazione, vi invitiamo a <b>segnalare nel modulo RSVP se avrete bisogno di un alloggio</b>, 
                                        così potremo supportarvi al meglio.
                                        </>
                                    );
                            }
                        })()}
                    </div>
                </AccordionItem>

                {/* Explore */}
                    <AccordionItem
                    title={
                        <h3 className="font-sans font-semibold text-l md:text-2xl text-orange flex items-center gap-3">
                        <SparklesIcon className="w-5 h-5" /> {t.travelExploreTitle}
                        </h3>
                    }
                    >
                    <div className="bg-terracotta/10 p-6 md:p-8 rounded-lg shadow-sm text-green/80 text-xs md:text-base leading-relaxed whitespace-pre-line">
                        <p className="mb-4">
                            {(() => {
                            switch(language) {
                                case 'en':
                                    return(
                                        <>
                                        Make the most of your <b>trip</b>! <b>Puglia</b> offers a rich mix of history, culture, and natural beauty. Taste the local cuisine, wander through picturesque streets, and soak in the region’s breathtaking landscapes and lively traditions.
                                        <br /><br />
                                        We prepared a <b>map</b> with our <b>favorite places to visit</b>, take a look!
                                        </>
                                    );
                                case 'it':
                                    return(
                                        <>
                                        Trasforma il tuo viaggio in <b>vacanza</b>! La <b>Puglia</b> offre un ricco mix di storia, cultura e bellezze naturali. Assapora la cucina locale, passeggia per le strade pittoresche e immergiti nei paesaggi mozzafiato e nelle vivaci tradizioni della regione.
                                        <br /><br />
                                        Abbiamo preparato una <b>mappa</b> con i nostri <b>posti preferiti da visitare</b>, dai un'occhiata!
                                        </>
                                    );
                            }
                        })()}
                        </p>
                        <div className="w-full max-w-4xl mx-auto">
                             {/* Desktop: show iframe on md+ */}
                            <div className="hidden md:block relative w-full aspect-[4/5] md:aspect-video rounded-lg overflow-hidden shadow-md">
                                <iframe
                                src="https://www.google.com/maps/d/u/0/embed?mid=1cf-_BTZxw7TNEbSh8Ro8lrB-D74rKYU&ehbc=2E312F&noprof=1"
                                className="absolute inset-0 w-full h-full"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                            <div className='text-ivory pt-4 md:hidden'>
                                <MapLinkCard link = "https://www.google.com/maps/d/u/0/embed?mid=1cf-_BTZxw7TNEbSh8Ro8lrB-D74rKYU&ehbc=2E312F&noprof=1" title = {t.mapLink} />
                            </div>
                        </div>
                    </div>
                    </AccordionItem>

                    {/* +1 & kids */}
                <AccordionItem
                    title={
                    <h3 className="font-sans font-semibold text-l md:text-2xl text-orange flex items-center gap-3">
                        <PersonIcon className="w-5 h-5" /> {t.invitiTitle}
                    </h3>
                    }
                >
                    <div className="bg-terracotta/10 p-6 md:p-8 rounded-lg shadow-sm text-green/80 text-xs md:text-base leading-relaxed  whitespace-pre-line">
                        {(() => {
                            switch(language) {
                                case 'en':
                                    return(
                                        <>
                                        Our wedding is a special occasion to be together and celebrate with the people we love. All guests are welcome, and we can’t wait to welcome your +1 and children!
                                        <br /><br />
                                        Please <b>let us know in the RSVP form below </b> so we can plan accordingly.
                                        </>
                                    );
                                case 'it':
                                    return(
                                        <>
                                        Il nostro matrimonio è un’occasione per stare insieme e celebrare con chi ci è caro. Tutti gli invitati sono i benvenuti, 
                                        e non vediamo l’ora di accogliere anche il vostro +1 e i vostri bambini!
                                        <br /><br />
                                        Vi chiediamo gentilmente di <b>segnalarlo nel modulo RSVP</b>, così potremo organizzarci al meglio.
                                        </>
                                    );
                            }
                        })()}
                    </div>
                </AccordionItem>


                {/* wedding itinerary */}
                <AccordionItem
                    title={
                    <h3 className="font-sans font-semibold text-l md:text-2xl text-orange flex items-center gap-3">
                        <ItineraryIcon className="w-5 h-5" /> {t.itineraryTitle}
                    </h3>
                    }
                >
                    <div className="bg-terracotta/10 p-6 md:p-8 rounded-lg shadow-sm text-green/80 text-xs md:text-base leading-relaxed  whitespace-pre-line">
                        {(() => {
                            switch(language) {
                                case 'en':
                                    return(
                                        <>
                                        <p><strong>12:00 PM – Ceremony</strong><br />
                                        The ceremony will begin at 12:00 PM. We kindly suggest arriving <strong>at least 30 minutes early</strong> to get comfortably settled.</p>
                                        <br /><br />
                                        <p><strong>Following the Ceremony – Lunch, fun &amp; photos</strong><br />
                                        After the ceremony, we will continue celebrating together with lunch, joyful moments, and time for photos.</p>
                                        <br /><br />
                                        <p><strong>Between 7:00 PM and 8:00 PM – Cake Cutting</strong><br />
                                        A special moment to share together.</p>
                                        <br /><br />
                                        <p><strong>After Party</strong><br />
                                        For those who wish to stay, the celebration continues with music, dancing, and good vibes.</p>
                                        </>
                                    );
                                case 'it':
                                    return(
                                        <>
                                        <p><b>Ore 12:00 – Cerimonia</b><br />                                        
                                        Vi aspettiamo per la cerimonia. Si consiglia di arrivare <b>almeno 30 minuti prima</b> per accomodarsi con calma.</p>
                                        <br /><br />
                                        <p><b>A seguire – Pranzo, divertimento e fotografie</b><br />
                                        Dopo la cerimonia continueremo a festeggiare insieme con il pranzo, momenti di convivialità e qualche foto per ricordare la giornata.</p>
                                        <br /><br />
                                        <p><b>Tra le 19:00 e le 20:00 – Taglio della torta</b><br />
                                        Un momento speciale da condividere tutti insieme.</p>
                                        <br /><br />
                                        <p><b>A seguire – Dopofesta</b><br />
                                        Per chi desidera rimanere, la festa continua con musica, balli e sorrisi.</p>
                                        </>
                                    );
                            }
                        })()}
                    </div>
                </AccordionItem>

                {/* no photo */}
                <AccordionItem
                    title={
                    <h3 className="font-sans font-semibold text-l md:text-2xl text-orange flex items-center gap-3">
                        <PhotoIcon className="w-5 h-5" /> {t.nophotoTitle}
                    </h3>
                    }
                >
                    <div className="bg-terracotta/10 p-6 md:p-8 rounded-lg shadow-sm text-green/80 text-xs md:text-base leading-relaxed  whitespace-pre-line">
                        {(() => {
                            switch(language) {
                                case 'en':
                                    return(
                                        <>
                                        During the <b>ceremony</b>, we kindly ask you to join us in an <b>unplugged</b> moment by putting away <b>phones and cameras</b>, so we can all be fully present and share every emotion together.
                                        <br /><br />
                                        <b>Professional photographers</b> will be there to capture every special moment; after the ceremony, please feel free to <b>take as many photos and videos as you like</b> and share the memories with us.
                                        </>
                                    );
                                case 'it':
                                    return(
                                        <>
                                        Durante la <b>cerimonia</b>, vi chiediamo gentilmente di partecipare a un momento <b>unplugged</b>, mettendo da parte <b>telefoni e fotocamere</b> per essere pienamente presenti e condividere con noi ogni emozione.
                                        <br /><br />
                                        Ci saranno <b>fotografi professionisti</b> a catturare ogni istante: dopo la cerimonia, sentitevi liberi di <b>scattare tutte le foto e i video che desiderate</b> e di condividere i ricordi della giornata con noi.
                                        </>
                                    );
                            }
                        })()}
                    </div>
                </AccordionItem>

                {/* contacts */}
                <AccordionItem
                    title={
                    <h3 className="font-sans font-semibold text-l md:text-2xl text-orange flex items-center gap-3">
                        <ContactIcon className="w-5 h-5" /> {t.contactsTitle}
                    </h3>
                    }
                >
                    <div className="bg-terracotta/10 p-6 md:p-8 rounded-lg shadow-sm text-green/80 text-xs md:text-base leading-relaxed  whitespace-pre-line">
                        {(() => {
                            switch(language) {
                                case 'en':
                                    return(
                                        <>
                                        If you encounter any issues with the <b>RSVP form</b> or simply <b>want to get in touch</b> for any reason, 
                                        we’re here for you! You can write to the <b>email below</b> or contact us directly, and we’ll do our best to respond as soon as possible.
                                        <br /><br />
                                        <div className="flex justify-center px-4 mt-4">
                                        <div className="w-full max-w-sm flex justify-center">
                                            <CopyButton
                                            text="elivan9295@gmail.com"
                                            className="w-full truncate"
                                            />
                                        </div>
                                        </div></>
                                    );
                                case 'it':
                                    return(
                                        <>
                                        Se riscontrate problemi con il <b>modulo RSVP</b> o se semplicemente <b>volete contattarci</b> per qualsiasi motivo, siamo qui per voi! 
                                        Potete scriverci alla <b>email sottostante</b> o contattarci direttamente, e faremo del nostro meglio per rispondere il prima possibile.
                                        <br /><br />
                                        <div className="flex justify-center px-4 mt-4">
                                        <div className="w-full max-w-sm flex justify-center">
                                            <CopyButton
                                            text="elivan9295@gmail.com"
                                            className="w-full truncate"
                                            />
                                        </div>
                                        </div></>
                                    );
                            }
                        })()}
                    </div>
                </AccordionItem>

    </div>
    );
  };

  const MapLinkCard = ({ link, title  }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        relative
        w-[90%] max-w-md
        mx-auto
        flex flex-col justify-center items-center
        bg-green/75
        text-ivory-100
        font-semibold
        text-sm md:text-xl
        py-6 md:py-8
        px-6 md:px-8
        rounded-2xl
        shadow-lg
        transition-all duration-300
        hover:bg-green/85 hover:scale-[1.02]
        text-center
      `}
    >
      <span>{title}</span>
    </a>
  );
};
  
export default Faq;