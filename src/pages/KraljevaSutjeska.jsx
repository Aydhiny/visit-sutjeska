import React from 'react';
import '../App.css';

const KraljevaSutjeska = () => {
  return (
    <div className="bg-cover bg-center min-h-screen p-4" style={{ backgroundImage: 'url("/path-to-medieval-background.jpg")' }}>
      <header className="bg-gray-900 text-white py-6 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Kraljeva Sutjeska</h1>
          <p className="text-xl mt-2 md:text-2xl">A Historical Gem Near Kakanj</p>
        </div>
      </header>

      <main className="container mx-auto mt-8 p-6 bg-white bg-opacity-80 shadow-lg rounded-lg md:max-w-3xl">
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-center">About Kraljeva Sutjeska</h2>
          <p className="text-gray-700 text-center md:text-lg">
            Kraljeva Sutjeska is a historical location situated near Kakanj, known for its rich medieval heritage. This ancient site features the ruins of a royal complex and a monastery that played a significant role during the medieval period.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Historical Significance</h2>
          <p className="text-gray-700 text-center md:text-lg">
            The area has been a focal point in medieval history, serving as a center of culture and politics. The remnants of the royal palace and the monastery reflect the grandeur and significance of Kraljeva Sutjeska in its prime.
          </p>
        </section>

        <section className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Gallery</h2>
          <p className="text-gray-700 mb-4 md:text-lg">
            Explore the gallery to view images of Kraljeva Sutjeska. See the stunning architecture and historical artifacts.
          </p>
          <a
            href="#"
            className="inline-block mt-4 px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-700"
          >
            View Gallery
          </a>
        </section>

        <section className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 mb-4 md:text-lg">
            Learn more about our mission to preserve and promote the historical significance of Kraljeva Sutjeska. Our team is dedicated to bringing history to life.
          </p>
          <a
            href="#"
            className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
          >
            Learn More
          </a>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Location</h2>
          <p className="text-gray-700 mb-4 text-center md:text-lg">
            Find us on the map and plan your visit to Kraljeva Sutjeska. The site is accessible and well-connected.
          </p>
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <iframe
              className="w-full h-64 md:h-80"
              src="https://www.google.com/maps/embed/v1/place?q=Kraljeva%20Sutjeska&key=YOUR_GOOGLE_MAPS_API_KEY"
              allowFullScreen
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