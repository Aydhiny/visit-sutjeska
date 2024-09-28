import React, { useRef, useEffect } from 'react';

const Gallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const gallery = galleryRef.current;

    // Only enable mouse hover scrolling on desktop
    const handleMouseMove = (e) => {
      if (window.innerWidth > 768) { // Adjust for screens larger than 768px (desktop)
        const rect = gallery.getBoundingClientRect(); // Gallery position
        const mouseX = e.clientX - rect.left; // Mouse position relative to the gallery
        const width = rect.width; // Width of the gallery

        // Calculate scroll percentage based on mouse position
        const scrollPercentage = mouseX / width;

        // Adjust the scroll amount relative to the scroll width of the gallery
        const scrollAmount = scrollPercentage * (gallery.scrollWidth - width);

        gallery.scrollTo({
          left: scrollAmount,
          behavior: 'smooth', // Optional: Smooth scrolling
        });
      }
    };

    gallery.addEventListener('mousemove', handleMouseMove);

    return () => {
      gallery.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="gallery" className="mb-16 text-center fade-in">
      <h2 className="text-4xl font-bold mb-4 text-white">Gallery</h2>
      <p className="text-white mb-4 md:text-lg">
        Explore the gallery to view images of Kraljeva Sutjeska. See the stunning architecture and historical artifacts.
      </p>

      <div
        className="relative w-full overflow-x-auto whitespace-nowrap cursor-pointer"
        ref={galleryRef}
      >
        <div className="flex space-x-4 gallery-wrapper">
          <img src="/images/gallery1.jpg" alt="Gallery Image 1" className="w-64 h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out inline-block" />
          <img src="/images/gallery2.jpg" alt="Gallery Image 2" className="w-64 h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out inline-block" />
          <img src="/images/gallery3.jpg" alt="Gallery Image 3" className="w-64 h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out inline-block" />
          <img src="/images/gallery4.jfif" alt="Gallery Image 4" className="w-64 h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out inline-block" />
          <img src="/images/s5.jpg" alt="Gallery Image 4" className="w-64 h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out inline-block" />
          <img src="/images/s5.jpg" alt="Gallery Image 4" className="w-64 h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out inline-block" />
          {/* Add more images here */}
        </div>
      </div>
    </section>
  );
};

export default Gallery;