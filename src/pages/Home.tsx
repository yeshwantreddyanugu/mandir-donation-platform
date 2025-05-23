import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Image, Users, BuildingTemple, CircleDollarSign, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
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

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          }} 
        />
        <div className="container-custom relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Sri Venkateswara Temple
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Join us in building a sacred space for worship, community, and spiritual enlightenment
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/donate" className="btn btn-primary text-lg">
                Donate Now
              </Link>
              <Link to="/about" className="btn btn-outline text-white border-white hover:bg-white/10 text-lg">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Divine Vision</h2>
            <p className="text-lg text-gray-700 mt-8">
              Sri Venkateswara Temple aims to create a spiritual sanctuary that preserves
              and promotes Hindu traditions and values. Our temple will serve as a center for
              worship, cultural activities, education, and community service, bringing
              together devotees from all backgrounds.
            </p>
            <div className="mt-10 flex justify-center">
              <Link to="/about" className="btn btn-outline">
                Explore Our Mission
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Explore Our Temple</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <BuildingTemple className="h-12 w-12 text-saffron-600" />,
                title: "Temple Construction",
                description: "Learn about our temple design and construction progress.",
                link: "/about",
              },
              {
                icon: <CircleDollarSign className="h-12 w-12 text-saffron-600" />,
                title: "Contribute",
                description: "Support our temple project through various donation options.",
                link: "/donate",
              },
              {
                icon: <Image className="h-12 w-12 text-saffron-600" />,
                title: "Gallery",
                description: "View photos of our construction progress and events.",
                link: "/gallery",
              },
              {
                icon: <Calendar className="h-12 w-12 text-saffron-600" />,
                title: "Upcoming Events",
                description: "Stay updated on our festivals and spiritual events.",
                link: "/events",
              },
              {
                icon: <Users className="h-12 w-12 text-saffron-600" />,
                title: "Testimonials",
                description: "Read what our devotees and donors say about us.",
                link: "/testimonials",
              },
              {
                icon: <Heart className="h-12 w-12 text-saffron-600" />,
                title: "Get Involved",
                description: "Find out how you can participate beyond donations.",
                link: "/contact",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="card p-6 text-center hover:translate-y-[-5px]"
                variants={fadeIn}
              >
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-maroon-600 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                <Link
                  to={item.link}
                  className="text-saffron-600 font-medium hover:text-saffron-700 inline-flex items-center"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Construction Progress */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title">Construction Progress</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12 items-center">
            <motion.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-maroon-600 mb-4">
                Building Our Sacred Space
              </h3>
              <p className="text-gray-700 mb-4">
                Our temple construction is progressing steadily with the blessings of Lord Venkateswara. The foundation 
                has been completed, and we are now working on the main structure.
              </p>
              <div className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">Overall Progress</span>
                  <span className="text-saffron-600 font-medium">45%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-saffron-600 h-2 rounded-full" style={{ width: "45%" }}></div>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">Foundation</span>
                  <span className="text-saffron-600 font-medium">100%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-saffron-600 h-2 rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">Main Structure</span>
                  <span className="text-saffron-600 font-medium">60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-saffron-600 h-2 rounded-full" style={{ width: "60%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">Interior Work</span>
                  <span className="text-saffron-600 font-medium">15%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-saffron-600 h-2 rounded-full" style={{ width: "15%" }}></div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative rounded-lg overflow-hidden shadow-xl"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/7725021/pexels-photo-7725021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Temple Construction"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6">
                  <span className="bg-saffron-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Latest Update: June 2025
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="mt-10 text-center">
            <Link to="/gallery" className="btn btn-outline">
              View Construction Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Ganesh Chaturthi Celebration",
                date: "September 7, 2025",
                image: "https://images.pexels.com/photos/6044788/pexels-photo-6044788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                description: "Join us for a special puja and prasadam distribution on this auspicious day."
              },
              {
                title: "Navratri Festival",
                date: "October 15-23, 2025",
                image: "https://images.pexels.com/photos/8828612/pexels-photo-8828612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                description: "Nine nights of devotion, music, and celebration of the divine feminine energy."
              },
              {
                title: "Diwali Celebrations",
                date: "November 12, 2025",
                image: "https://images.pexels.com/photos/1652959/pexels-photo-1652959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                description: "Festival of lights with special prayers, cultural programs, and community dinner."
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                className="card overflow-hidden"
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-maroon-600 text-white px-4 py-2">
                    {event.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-maroon-600 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {event.description}
                  </p>
                  <Link
                    to="/events"
                    className="text-saffron-600 font-medium hover:text-saffron-700 inline-flex items-center"
                  >
                    Event Details
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/events" className="btn btn-outline">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="py-20 bg-maroon-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Our Divine Mission</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Your contribution, no matter how small, helps us build this sacred temple for generations to come.
              Join thousands of devotees in this spiritual journey.
            </p>
            <Link to="/donate" className="btn bg-gold-500 hover:bg-gold-600 text-maroon-800 text-lg px-8 py-4">
              Make a Donation
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;