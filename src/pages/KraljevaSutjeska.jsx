import React, { useState } from 'react';
import LazyLoad from '../pages/LazyLoad';
import Gallery from '../pages/Gallery';
import LocationSection from '../pages/LocationSection'
import '../App.css';
import 'leaflet/dist/leaflet.css';

const KraljevaSutjeska = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
   const toggleLanguage = () => {
    setIsFading(true); // Start fade out
    setTimeout(() => {
      setIsEnglish(!isEnglish); // Toggle language after fade out
      setIsFading(false); // Start fade in
    }, 500); // Delay matches the CSS transition duration
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ 
      backgroundColor: '#e5e5db',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23abac92' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M41 37.59V25h-2v12.59l-8.9-8.9-1.41 1.41 8.9 8.9H25v2h12.59l-8.9 8.9 1.41 1.41 8.9-8.9V55h2V42.41l8.9 8.9 1.41-1.41-8.9-8.9H55v-2H42.41l8.9-8.9-1.41-1.41-8.9 8.9zM1 1h2v2H1V1zm0 4h2v2H1V5zm0 4h2v2H1V9zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm4 0h2v2H5v-2zm4 0h2v2H9v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM5 1h2v2H5V1zm4 0h2v2H9V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm0 4h2v2h-2V5zm0 4h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zM5 5h70v70H5V5zm2 68h66V7H7v66zM9 9h62v62H9V9zm2 60h58V11H11v58zm2-39.6V13h16.4A29.1 29.1 0 0 0 13 29.4zM15 15v6.67A31.17 31.17 0 0 1 21.67 15H15zm-2 52V50.6A29.1 29.1 0 0 0 29.4 67H13zm2-8.67V65h6.67A31.17 31.17 0 0 1 15 58.33zM67 67H50.6A29.1 29.1 0 0 0 67 50.6V67zm-8.67-2H65v-6.67A31.17 31.17 0 0 1 58.33 65zM67 13v16.4A29.1 29.1 0 0 0 50.6 13H67zm-2 8.67V15h-6.67A31.17 31.17 0 0 1 65 21.67zM39 13h2v2h-2v-2zm7.02.66l1.93.52-.51 1.93-1.94-.52.52-1.93zm6.61 2.46l1.74 1-1 1.73-1.74-1 1-1.73zm5.75 4.08l1.42 1.42-1.42 1.4-1.4-1.4 1.4-1.42zm4.5 5.43l1 1.74-1.73 1-1-1.74 1.73-1zm2.94 6.42l.52 1.93-1.93.52-.52-1.94 1.93-.51zM67 39v2h-2v-2h2zm-.66 7.02l-.52 1.93-1.93-.51.52-1.94 1.93.52zm-2.46 6.61l-1 1.74-1.73-1 1-1.74 1.73 1zm-4.08 5.75l-1.42 1.42-1.4-1.42 1.4-1.4 1.42 1.4zm-5.43 4.5l-1.74 1-1-1.73 1.74-1 1 1.73zM41 67h-2v-2h2v2zm6.95-1.18l-1.93.52-.52-1.93 1.94-.52.51 1.93zm-13.97.52l-1.93-.52.51-1.93 1.94.52-.52 1.93zm-6.61-2.46l-1.74-1 1-1.73 1.74 1-1 1.73zm-5.75-4.08l-1.42-1.42 1.42-1.4 1.4 1.4-1.4 1.42zm-4.5-5.43l-1-1.74 1.73-1 1 1.74-1.73 1zm-2.94-6.42l-.52-1.93 1.93-.52.52 1.94-1.93.51zM13 41v-2h2v2h-2zm.66-7.02l.52-1.93 1.93.51-.52 1.94-1.93-.52zm2.46-6.61l1-1.74 1.73 1-1 1.74-1.73-1zm4.08-5.75l1.42-1.42 1.4 1.42-1.4 1.4-1.42-1.4zm5.43-4.5l1.74-1 1 1.73-1.74 1-1-1.73zm6.42-2.94l1.93-.52.52 1.93-1.94.52-.51-1.93zM40 63a23 23 0 1 1 0-46 23 23 0 0 1 0 46zm0-2a21 21 0 1 0 0-42 21 21 0 0 0 0 42zm0-2a19 19 0 1 1 0-38 19 19 0 0 1 0 38zm0-2a17 17 0 1 0 0-34 17 17 0 0 0 0 34z'/%3E%3C/g%3E%3C/svg%3E")`,
      backgroundSize: 'auto 150px', 
      backgroundRepeat: 'repeat',
      backgroundAttachment: 'fixed'
    }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-gray-700 opacity-75 mix-blend-multiply"></div>

      <header className="bg-gray-800 bg-opacity-60 text-white p-3 shadow-lg fixed w-full top-0 left-0 z-50">
        <nav className="container mx-auto flex flex-wrap items-center justify-around">
          <img
        src="/images/Kraljeva sutjeska.png" // Replace with your actual logo URL
        alt="Kraljeva Sutjeska Logo"
        className="h-10" // Adjust size if necessary
      />
          <a href="#" className="text-3xl font-bold transition duration-300 hover:text-yellow-400">Kraljeva Sutjeska</a>
          <button
            className="text-white block md:hidden"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className={`md:flex md:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
            <a href="#about" className="hover:text-yellow-400 m-2 block border-b border-white md:border-none">{isEnglish ? 'About' : 'O nama'}</a>
            <a href="#historical-significance" className="hover:text-yellow-400 m-2 block border-b border-white md:border-none">{isEnglish ? 'Historical Significance' : 'Istorijska značaj'}</a>
            <a href="#gallery" className="hover:text-yellow-400 m-2 block border-b border-white md:border-none">{isEnglish ? 'Gallery' : 'Galerija'}</a>
            <a href="#about-us" className="hover:text-yellow-400 m-2 block border-b border-white md:border-none">{isEnglish ? 'About Us' : 'O nama'}</a>
            <a href="#location" className="hover:text-yellow-400 m-2 block border-b border-white md:border-none">{isEnglish ? 'Location' : 'Lokacija'}</a>
             <button 
              className="text-yellow-400 m-2"
              onClick={toggleLanguage}
            >
              {isEnglish ? 'Bosnian' : 'English'}
            </button>
          </div>
        </nav>
      </header>

      <main className={`relative z-10 container mx-auto p-6 fade ${isFading ? 'out' : ''}`}>
        <LazyLoad>
         <section id="about" className="mt-52 mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center fade-in">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">{isEnglish ? 'About Kraljeva Sutjeska' : 'O Kraljevoj Sutjesci'}</h2>
              <h2 className="text-xl mb-4 font-semibold text-yellow-100">{isEnglish ? 'Kakanj, Turistical Monument' : 'Kakanj, Turistički Spomenik'}</h2>
              <p className="md:text-lg">
                {isEnglish ? 
                  `Kraljeva Sutjeska is a historical location situated near Kakanj, known for its rich medieval heritage. This ancient site features the ruins of a royal complex and a monastery that played a significant role during the medieval period. The site is steeped in history, with evidence of settlement dating back to the 12th century. It was once a vibrant center of power, where the ruling aristocracy gathered, and significant decisions impacting the region were made.` :
                  `Kraljeva Sutjeska je istorijska lokacija koja se nalazi blizu Kaknja, poznata po bogatom srednjovekovnom nasleđu. Ovaj drevni lokalitet sadrži ostatke kraljevskog kompleksa i manastira koji su igrali značajnu ulogu tokom srednjeg veka. Mesto je bogato istorijom, sa dokazima naseljenosti koji datiraju još iz 12. veka. Nekada je bilo živopisno središte moći, gde se okupljala vladajuća aristokratija i donosile su se značajne odluke koje su uticale na region.`}
              </p>
              <p className="md:text-lg mt-4">
                {isEnglish ? 
                  `The majestic architecture that remains showcases the intricate craftsmanship of the era, with stone carvings and structural designs that reflect the artistic sensibilities of medieval builders. Visitors can explore the remnants of the royal palace and the adjoining monastery, both of which provide a glimpse into the spiritual and administrative life of the time.` :
                  `Većina sačuvane veličanstvene arhitekture pokazuje složenu izradu tog doba, sa kamenim rezbarijama i strukturnim dizajnom koji odražavaju umetničke senzibilitete srednjovekovnih graditelja. Posetioci mogu istražiti ostatke kraljevske palate i pratećeg manastira, koji pružaju uvid u duhovni i administrativni život tog vremena.`}
              </p>
            </div>
            <img src="/images/s2.jpg" alt="About Kraljeva Sutjeska" className="w-full h-auto rounded-lg shadow-lg hover-effect" />
          </section>
        </LazyLoad>

         <section id="historical-significance" className=" grid grid-cols-1 md:grid-cols-2 gap-8 items-center fade-in">
          <img src="/images/s3.jfif" alt="Historical Significance" className="w-full h-auto rounded-lg shadow-lg hover-effect" />
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-4">{isEnglish ? 'Historical Significance' : 'Historijska Značaj'}</h2>
            <h2 className="text-xl mb-4 font-semibold text-yellow-100">{isEnglish ? 'Kakanj, Turistical Monument' : 'Kakanj, Turistički Spomenik'}</h2>
            <p className="md:text-lg">
              {isEnglish ? 
                `The area has been a focal point in medieval history, serving as a center of culture and politics. The remnants of the royal palace and the monastery reflect the grandeur and significance of Kraljeva Sutjeska in its prime.` : 
                `Ovo područje je bilo središte srednjovjekovne historije, služeći kao centar kulture i politike. Ostaci kraljevske palate i manastira odražavaju veličanstvenost i značaj Kraljeve Sutjeske u njenom vrhuncu.`}
            </p>
            <p className="md:text-lg mt-4">
              {isEnglish ? 
                `Additionally, Kraljeva Sutjeska was pivotal during various historical events, including the conflicts that shaped the region. It served as a refuge for many displaced people during turbulent times and stands today as a symbol of resilience and cultural heritage. The site attracts historians and tourists alike, drawn by its stories of the past and the beauty of its surroundings.` : 
                `Pored toga, Kraljeva Sutjeska je bila ključna tokom raznih istorijskih događaja, uključujući sukobe koji su oblikovali region. Bila je utočište za mnoge raseljene osobe tokom turbulentnih vremena i danas je simbol otpornosti i kulturnog nasleđa. Ovo mesto privlači istoričare i turiste, privučene svojim pričama iz prošlosti i lepotom okoline.`}
            </p>
          </div>
        </section>

        <Gallery />

        <section id="about-us" className="mb-10 text-center fade-in">
  <h2 className="text-4xl font-bold mb-4 text-white">
    {isEnglish ? 'About Us' : 'O nama'}
  </h2>
  <p className="text-white mb-4 md:text-lg">
    {isEnglish ? 
      `Learn more about our mission to preserve and promote the historical significance of Kraljeva Sutjeska. 
      Our team is dedicated to bringing history to life, fostering a deeper appreciation for the cultural treasures of our past.` : 
      `Saznajte više o našoj misiji očuvanja i promocije istorijske važnosti Kraljeve Sutjeske. 
      Naš tim je posvećen oživljavanju istorije, podsticanju dubljeg razumevanja kulturnih blaga naše prošlosti.`}
  </p>
  <p className="text-white mb-4 md:text-lg">
    {isEnglish ? 
      `We organize various educational programs, guided tours, and workshops that engage the community and visitors 
      in exploring the rich history of this extraordinary site. Our goal is to ensure that the legacy of Kraljeva Sutjeska is cherished 
      and that future generations can experience its beauty and learn from its history.` : 
      `Organizujemo razne obrazovne programe, vođene ture i radionice koje uključuju zajednicu i posetioce 
      u istraživanju bogate istorije ovog izvanrednog mesta. Naš cilj je da osiguramo da nasleđe Kraljeve Sutjeske bude cenjeno 
      i da buduće generacije mogu doživeti njenu lepotu i učiti iz njene istorije.`}
  </p>
  <a
    href="#"
    className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
  >
    {isEnglish ? 'Learn More' : 'Saznajte Više'}
  </a>
</section>

        <LocationSection />
      </main>

      <footer className="bg-gray-900 text-white py-6 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Kraljeva Sutjeska Historical Site. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default KraljevaSutjeska;
