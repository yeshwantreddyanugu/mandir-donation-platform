import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
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

  // Testimonial data
  const testimonialData = [
    {
      id: 1,
      name: "Rajesh Sharma",
      location: "Hyderabad, India",
      quote: "Contributing to the Sri Venkateswara Temple has been a profoundly fulfilling experience. As I watch the temple take shape, I feel blessed to be part of this divine journey that will benefit generations to come.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "donor"
    },
    {
      id: 2,
      name: "Priya Patel",
      location: "New Jersey, USA",
      quote: "Even though I live abroad, I wanted to maintain my connection to our spiritual heritage. Donating to this temple project has been my way of staying connected to our traditions and passing them on to my children.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "donor"
    },
    {
      id: 3,
      name: "Venkat Rao",
      location: "Tirupati, India",
      quote: "As a local resident, watching the temple rise day by day has been incredible. The positive impact on our community is already evident, and I'm proud to have contributed to this sacred endeavor.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "donor"
    },
    {
      id: 4,
      name: "Sunita Reddy",
      location: "Bangalore, India",
      quote: "I dedicated my donation in memory of my late father, who was a devout believer. Knowing his name will be associated with this temple gives our family immense peace and spiritual satisfaction.",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "donor"
    },
    {
      id: 5,
      name: "Dr. Mohan Krishna",
      location: "Chennai, India",
      quote: "The transparency and dedication shown by the temple trust in managing the construction project inspired me to become a regular donor. Their vision aligns perfectly with our cultural and spiritual values.",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "donor"
    },
    {
      id: 6,
      name: "Ravi & Lakshmi Subramaniam",
      location: "Singapore",
      quote: "We wanted our children to understand the importance of seva and community support. This temple donation has become a family tradition, teaching our kids about generosity and spiritual values.",
      image: "https://images.pexels.com/photos/4423678/pexels-photo-4423678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "donor"
    },
    {
      id: 7,
      name: "Arjun Malhotra",
      location: "London, UK",
      quote: "Being part of this temple construction feels like I'm helping create a spiritual bridge between our heritage and future generations. The regular updates and transparency in fund utilization have been impressive.",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "donor"
    },
    {
      id: 8,
      name: "Karthik Iyer",
      location: "Sydney, Australia",
      quote: "The online donation process was seamless, and I appreciate how the temple committee acknowledges every contribution, regardless of size. It truly makes donors feel valued and respected.",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "donor"
    }
  ];

  const featuredTestimonials = testimonialData.slice(0, 3);
  const otherTestimonials = testimonialData.slice(3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-800/90 to-maroon-900/90 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/5765852/pexels-photo-5765852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
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
              Devotee Testimonials
            </h1>
            <p className="text-xl text-gray-200 mb-6">
              Read heartfelt stories from our devotees and donors who have supported our temple
              construction project and experienced divine blessings.
            </p>
            <div className="w-20 h-1 bg-gold-500 rounded-full mb-8"></div>
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="section-title">Featured Stories</h2>
            <p className="text-lg text-gray-700 mt-8">
              Hear from our devotees who have experienced the divine journey of contributing
              to the Sri Venkateswara Temple project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="card overflow-hidden h-full flex flex-col"
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-64">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4 w-full">
                      <h3 className="text-white font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-gray-300 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="mb-4 text-saffron-500">
                    <Quote size={24} />
                  </div>
                  <p className="text-gray-700 italic mb-4 flex-grow">{testimonial.quote}</p>
                  <div className="pt-4 border-t border-gray-200">
                    <span className="inline-block px-3 py-1 bg-saffron-100 text-saffron-800 rounded-full text-xs font-medium">
                      {testimonial.type === 'donor' ? 'Donor' : 'Devotee'}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* More Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="section-title">More Divine Experiences</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {otherTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="card p-6 flex flex-col sm:flex-row gap-6"
                variants={fadeIn}
              >
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-3 text-saffron-500">
                    <Quote size={20} />
                  </div>
                  <p className="text-gray-700 italic mb-4">{testimonial.quote}</p>
                  <div className="mt-auto">
                    <h3 className="text-maroon-600 font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Submit Your Story */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="card p-8 bg-saffron-50 border border-saffron-100">
              <h2 className="text-2xl font-bold text-maroon-600 mb-4 text-center">
                Share Your Divine Experience
              </h2>
              <p className="text-gray-700 mb-6 text-center">
                Has contributing to our temple project brought positive changes or divine blessings to your life? 
                Share your story with our community.
              </p>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="name">
                      Your Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="location">
                      Location*
                    </label>
                    <input
                      type="text"
                      id="location"
                      className="input-field"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="story">
                    Your Experience*
                  </label>
                  <textarea
                    id="story"
                    rows={5}
                    className="input-field"
                    placeholder="Share how donating to the temple has impacted your life..."
                    required
                  ></textarea>
                </div>
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded text-saffron-600 focus:ring-saffron-500 h-4 w-4"
                    />
                    <span className="ml-2 text-gray-700">
                      I consent to having my testimonial and photo displayed on the website
                    </span>
                  </label>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Submit Your Story
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="section-title">Video Testimonials</h2>
            <p className="text-lg text-gray-700 mt-8">
              Watch video stories from our devotees and donors sharing their experiences and blessings.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                className="card overflow-hidden"
                variants={fadeIn}
              >
                <div className="relative aspect-video bg-gray-800 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0"></div>
                  <div className="relative z-10 w-16 h-16 rounded-full bg-saffron-600 flex items-center justify-center cursor-pointer hover:bg-saffron-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="font-medium">Video Testimonial #{item}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-maroon-600 font-semibold text-lg">Devotee Experience</h3>
                  <p className="text-gray-600 text-sm">Hear about the spiritual journey and blessings received</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="py-16 bg-maroon-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community of Devotees</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Be part of our growing family of devotees and donors. Your contribution, no matter how small,
              makes a difference in building this sacred space.
            </p>
            <a href="/donate" className="btn bg-gold-500 hover:bg-gold-600 text-maroon-800 text-lg px-8 py-4">
              Make a Donation
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;