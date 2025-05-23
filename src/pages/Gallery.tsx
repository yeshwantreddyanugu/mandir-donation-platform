import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

// Gallery image data
const galleryData = [
  {
    category: 'construction',
    images: [
      {
        id: 'c1',
        src: 'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Foundation Ceremony',
        description: 'Bhoomi Puja and foundation stone laying ceremony'
      },
      {
        id: 'c2',
        src: 'https://images.pexels.com/photos/4513940/pexels-photo-4513940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Main Structure',
        description: 'Construction of the main temple structure'
      },
      {
        id: 'c3',
        src: 'https://images.pexels.com/photos/12366058/pexels-photo-12366058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Gopuram Work',
        description: 'Intricate work on the temple gopuram'
      },
      {
        id: 'c4',
        src: 'https://images.pexels.com/photos/2063249/pexels-photo-2063249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Interior Progress',
        description: 'Progress on the temple interior sanctum'
      },
      {
        id: 'c5',
        src: 'https://images.pexels.com/photos/5816303/pexels-photo-5816303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Community Hall',
        description: 'Construction of the community hall'
      },
      {
        id: 'c6',
        src: 'https://images.pexels.com/photos/7108298/pexels-photo-7108298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Landscaping',
        description: 'Temple garden and landscaping work'
      }
    ]
  },
  {
    category: 'events',
    images: [
      {
        id: 'e1',
        src: 'https://images.pexels.com/photos/12181528/pexels-photo-12181528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Ganesh Chaturthi',
        description: 'Celebration of Ganesh Chaturthi at the temple site'
      },
      {
        id: 'e2',
        src: 'https://images.pexels.com/photos/6044230/pexels-photo-6044230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Diwali Celebration',
        description: 'Diwali festival lights and prayers'
      },
      {
        id: 'e3',
        src: 'https://images.pexels.com/photos/6044788/pexels-photo-6044788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Navratri Festival',
        description: 'Nine nights of devotion and celebration'
      },
      {
        id: 'e4',
        src: 'https://images.pexels.com/photos/11628778/pexels-photo-11628778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Ram Navami',
        description: 'Celebration of Lord Ram\'s birth'
      }
    ]
  },
  {
    category: 'community',
    images: [
      {
        id: 'co1',
        src: 'https://images.pexels.com/photos/7113863/pexels-photo-7113863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Volunteer Day',
        description: 'Community volunteers helping with temple work'
      },
      {
        id: 'co2',
        src: 'https://images.pexels.com/photos/5427670/pexels-photo-5427670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Food Distribution',
        description: 'Prasadam and food distribution to the needy'
      },
      {
        id: 'co3',
        src: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Cultural Program',
        description: 'Traditional dance and music performances'
      },
      {
        id: 'co4',
        src: 'https://images.pexels.com/photos/5407052/pexels-photo-5407052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Youth Workshop',
        description: 'Educational workshop for temple youth'
      }
    ]
  },
  {
    category: 'design',
    images: [
      {
        id: 'd1',
        src: 'https://images.pexels.com/photos/6195085/pexels-photo-6195085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Temple Design',
        description: 'Architectural design of the temple'
      },
      {
        id: 'd2',
        src: 'https://images.pexels.com/photos/6195076/pexels-photo-6195076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Gopuram Blueprint',
        description: 'Detailed blueprint of the temple gopuram'
      },
      {
        id: 'd3',
        src: 'https://images.pexels.com/photos/6150532/pexels-photo-6150532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Interior Layout',
        description: 'Design layout of the temple interior'
      },
      {
        id: 'd4',
        src: 'https://images.pexels.com/photos/5945917/pexels-photo-5945917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Sculpture Designs',
        description: 'Designs for temple sculptures and deities'
      }
    ]
  }
];

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentCategory, setCurrentCategory] = useState('');

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Filter images based on active filter
  const filteredImages = activeFilter === 'all'
    ? galleryData.flatMap(category => category.images)
    : galleryData.find(category => category.category === activeFilter)?.images || [];

  // Open lightbox
  const openLightbox = (categoryId: string, imageIndex: number) => {
    setCurrentCategory(categoryId);
    setCurrentImage(imageIndex);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Get images for lightbox
  const getLightboxImages = () => {
    if (activeFilter === 'all') {
      const categoryImages = galleryData.find(category => category.category === currentCategory)?.images || [];
      return categoryImages.map(img => img.src);
    }
    return filteredImages.map(img => img.src);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-800/90 to-maroon-900/90 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/4552350/pexels-photo-4552350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          }} 
        />
        <div className="container-custom relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Temple Gallery
            </h1>
            <p className="text-xl text-gray-200 mb-6">
              Witness the divine journey of our temple construction, sacred events, and community gatherings
              through our curated collection of images.
            </p>
            <div className="w-20 h-1 bg-gold-500 rounded-full mb-8"></div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          {/* Gallery Filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <button
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === 'all'
                  ? 'bg-saffron-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveFilter('all')}
            >
              All Photos
            </button>
            <button
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === 'construction'
                  ? 'bg-saffron-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveFilter('construction')}
            >
              Construction
            </button>
            <button
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === 'events'
                  ? 'bg-saffron-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveFilter('events')}
            >
              Events & Festivals
            </button>
            <button
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === 'community'
                  ? 'bg-saffron-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveFilter('community')}
            >
              Community
            </button>
            <button
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === 'design'
                  ? 'bg-saffron-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveFilter('design')}
            >
              Temple Design
            </button>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {filteredImages.map((image, index) => {
              // Find the category this image belongs to
              const category = galleryData.find(cat => 
                cat.images.some(img => img.id === image.id)
              )?.category || '';
              
              return (
                <motion.div
                  key={image.id}
                  className="card overflow-hidden cursor-pointer group"
                  variants={fadeIn}
                  onClick={() => openLightbox(category, index)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-maroon-600 font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-gray-600 text-sm">{image.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No images found for the selected filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white z-10"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <div className="w-full max-w-4xl">
            <Carousel
              selectedItem={currentImage}
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
              dynamicHeight={false}
              className="carousel-container"
            >
              {getLightboxImages().map((src, index) => (
                <div key={index} className="h-[80vh] flex items-center justify-center">
                  <img
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )}

      {/* Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="section-title">Construction Journey</h2>
            <p className="text-lg text-gray-700 mt-8">
              Watch our temple construction journey through this time-lapse video showcasing
              the progress from foundation to the current stage.
            </p>
          </motion.div>

          <motion.div
            className="relative rounded-lg overflow-hidden shadow-xl aspect-video max-w-4xl mx-auto"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
              <div className="text-white text-center p-8">
                <h3 className="text-xl font-semibold mb-4">Temple Construction Time-lapse</h3>
                <p className="mb-6">This is a placeholder for a video that would show the construction progress.</p>
                <div className="w-16 h-16 rounded-full bg-saffron-600 flex items-center justify-center mx-auto cursor-pointer hover:bg-saffron-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Submit Photos CTA */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-maroon-600 mb-6">
              Share Your Temple Moments
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Have photos from our temple events or construction visits? Share them with us to be featured in our gallery.
            </p>
            <a
              href="mailto:gallery@srivenkateswara.org"
              className="btn btn-primary"
            >
              Submit Your Photos
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Gallery;