import React, { useRef, useEffect, useState } from 'react';

const Gallery = () => {
  const galleryRef = useRef(null);
  const [fullScreenImage, setFullScreenImage] = useState(null); // State to track full-screen image

  useEffect(() => {
    const gallery = galleryRef.current;

    const handleMouseMove = (e) => {
      if (window.innerWidth > 768) { // Only for larger screens
        const rect = gallery.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const width = rect.width;

        const scrollPercentage = mouseX / width;
        const scrollAmount = scrollPercentage * (gallery.scrollWidth - width);

        gallery.scrollTo({
          left: scrollAmount,
          behavior: 'smooth',
        });
      }
    };

    if (window.innerWidth > 768) {
      gallery.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      gallery.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Function to handle image click and set full-screen view
  const handleImageClick = (imageSrc) => {
    setFullScreenImage(imageSrc);
  };

  // Function to exit full-screen view
  const handleBackButton = () => {
    setFullScreenImage(null); // Reset the full-screen image
  };

  return (
    <>
      {/* Full-screen image view */}
      {fullScreenImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <img src={fullScreenImage} alt="Full-Screen" className="max-w-full max-h-full object-contain" />
          <button
            onClick={handleBackButton}
            className="absolute bottom-4 left-4 px-4 py-2 bg-white text-black font-bold rounded-lg shadow-md"
          >
            Back
          </button>
        </div>
      )}

      {/* Gallery section */}
      <section id="gallery" className="m-16 text-center fade-in">
        <h2 className="text-4xl font-bold mb-4 text-white">Gallery</h2>
        <p className="text-white mb-4 md:text-lg">
          Explore the gallery to view images of Kraljeva Sutjeska. See the stunning architecture and historical artifacts.
        </p>

        <div
          className="relative w-full overflow-x-auto whitespace-nowrap gallery-wrapper"
          ref={galleryRef}
          style={{ WebkitOverflowScrolling: 'touch' }} // Enables smooth scrolling on mobile
        >
          <img
            src="/images/gallery1.jpg"
            alt="Gallery Image 1"
            className="inline-block w-48 h-48 object-cover rounded-lg shadow-lg hover-effect mx-2"
            onClick={() => handleImageClick('/images/gallery1.jpg')}
          />
          <img
            src="/images/gallery2.jpg"
            alt="Gallery Image 2"
            className="inline-block w-48 h-48 object-cover rounded-lg shadow-lg hover-effect mx-2"
            onClick={() => handleImageClick('/images/gallery2.jpg')}
          />
          <img
            src="/images/gallery3.jpg"
            alt="Gallery Image 3"
            className="inline-block w-48 h-48 object-cover rounded-lg shadow-lg hover-effect mx-2"
            onClick={() => handleImageClick('/images/gallery3.jpg')}
          />
          <img
            src="/images/gallery4.jfif"
            alt="Gallery Image 4"
            className="inline-block w-48 h-48 object-cover rounded-lg shadow-lg hover-effect mx-2"
            onClick={() => handleImageClick('/images/gallery4.jfif')}
          />
          <img
            src="/images/s5.jpg"
            alt="Gallery Image 5"
            className="inline-block w-48 h-48 object-cover rounded-lg shadow-lg hover-effect mx-2"
            onClick={() => handleImageClick('/images/s5.jpg')}
          />
          <img
            src="/images/s6.jpg"
            alt="Gallery Image 6"
            className="inline-block w-48 h-48 object-cover rounded-lg shadow-lg hover-effect mx-2"
            onClick={() => handleImageClick('/images/s6.jpg')}
          />
          <img
            src="/images/s8.jpg"
            alt="Gallery Image 7"
            className="inline-block w-48 h-48 object-cover rounded-lg shadow-lg hover-effect mx-2"
            onClick={() => handleImageClick('/images/s8.jpg')}
          />
        </div>
      </section>
    </>
  );
};

export default Gallery;
