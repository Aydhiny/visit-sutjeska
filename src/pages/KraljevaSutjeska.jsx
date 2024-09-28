import React, { useState } from 'react';
import LazyLoad from '../pages/LazyLoad';
import Gallery from '../pages/Gallery';
import '../App.css';



const KraljevaSutjeska = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ 
      backgroundColor: '#e5e5db',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23aca592' fill-opacity='0.22'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      backgroundSize: 'auto 250px', 
      backgroundRepeat: 'repeat',
      backgroundAttachment: 'fixed'
    }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <header className="bg-stone-600 text-white p-8 shadow-lg fixed w-full top-0 left-0 z-50">
        <nav className="container mx-auto flex flex-wrap items-center justify-between">
          <a href="#" className="text-2xl font-bold">Kraljeva Sutjeska</a>
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
                  <a href="#about" className="hover:text-yellow-400 m-2 block border-b border-white md:border-none">About</a>
                  <a href="#historical-significance" className="hover:text-yellow-400 m-2 block border-b border-white md:border-none">Historical Significance</a>
                  <a href="#gallery" className="hover:text-yellow-400 m-2 block border-b border-white md:border-none">Gallery</a>
                  <a href="#about-us" className="hover:text-yellow-400 m-2 block border-b border-white md:border-none">About Us</a>
                  <a href="#location" className="hover:text-yellow-400 m-2 block border-b border-white md:border-none">Location</a>
                </div>
        </nav>
      </header>

      <main className="relative z-10 container mx-auto mt-24 p-6">
        <LazyLoad>
        <section id="about" className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center fade-in">
  <div className="text-white">
    <h2 className="text-4xl font-bold mb-4">About Kraljeva Sutjeska</h2>
    <h2 className="text-xl mb-4 font-semibold text-yellow-100">Kakanj, Turistical Monument</h2>
    <p className="md:text-lg">
      Kraljeva Sutjeska is a historical location situated near Kakanj, known for its rich medieval heritage. 
      This ancient site features the ruins of a royal complex and a monastery that played a significant role during the medieval period. 
      The site is steeped in history, with evidence of settlement dating back to the 12th century. 
      It was once a vibrant center of power, where the ruling aristocracy gathered, and significant decisions impacting the region were made.
    </p>
    <p className="md:text-lg mt-4">
      The majestic architecture that remains showcases the intricate craftsmanship of the era, 
      with stone carvings and structural designs that reflect the artistic sensibilities of medieval builders. 
      Visitors can explore the remnants of the royal palace and the adjoining monastery, both of which provide a glimpse into the spiritual and administrative life of the time.
    </p>
  </div>
  <img src="/images/s2.jpg" alt="About Kraljeva Sutjeska" className="w-full h-auto rounded-lg shadow-lg hover-effect" />
</section>
</LazyLoad>

        <section id="historical-significance" className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center fade-in">
  <img src="/images/s3.jfif" alt="Historical Significance" className="w-full h-auto rounded-lg shadow-lg hover-effect" />
  <div className="text-white">
    <h2 className="text-4xl font-bold mb-4">Historical Significance</h2>
    <h2 className="text-xl mb-4 font-semibold text-yellow-100">Kakanj, Turistical Monument</h2>
    <p className="md:text-lg">
      The area has been a focal point in medieval history, serving as a center of culture and politics. 
      The remnants of the royal palace and the monastery reflect the grandeur and significance of Kraljeva Sutjeska in its prime.
    </p>
    <p className="md:text-lg mt-4">
      Additionally, Kraljeva Sutjeska was pivotal during various historical events, including the conflicts that shaped the region. 
      It served as a refuge for many displaced people during turbulent times and stands today as a symbol of resilience and cultural heritage. 
      The site attracts historians and tourists alike, drawn by its stories of the past and the beauty of its surroundings.
    </p>
  </div>
</section>

<Gallery></Gallery>

        <section id="about-us" className="mb-16 text-center fade-in">
  <h2 className="text-4xl font-bold mb-4 text-white">About Us</h2>
  <p className="text-white mb-4 md:text-lg">
    Learn more about our mission to preserve and promote the historical significance of Kraljeva Sutjeska. 
    Our team is dedicated to bringing history to life, fostering a deeper appreciation for the cultural treasures of our past.
  </p>
  <p className="text-white mb-4 md:text-lg">
    We organize various educational programs, guided tours, and workshops that engage the community and visitors 
    in exploring the rich history of this extraordinary site. Our goal is to ensure that the legacy of Kraljeva Sutjeska is cherished 
    and that future generations can experience its beauty and learn from its history.
  </p>
  <a
    href="#"
    className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
  >
    Learn More
  </a>
</section>

        <section id="location" className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-4">Location</h2>
            <p className="md:text-lg">
              Find us on the map and plan your visit to Kraljeva Sutjeska. The site is accessible and well-connected.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <iframe
              className="w-full h-64 md:h-80"
              src="https://www.google.com/maps/embed/v1/place?q=Kraljeva%20Sutjeska&key=YOUR_GOOGLE_MAPS_API_KEY"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </section>
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
