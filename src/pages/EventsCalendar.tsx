import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';

// Event data
const events = [
  {
    id: 1,
    title: "Ganesh Chaturthi",
    date: "September 7, 2025",
    time: "6:00 AM - 8:00 PM",
    location: "Temple Main Hall",
    description: "Join us for a special puja and prasadam distribution on this auspicious day dedicated to Lord Ganesha.",
    image: "https://images.pexels.com/photos/6044788/pexels-photo-6044788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    livestream: true
  },
  {
    id: 2,
    title: "Navratri Festival",
    date: "October 15-23, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Temple Grounds",
    description: "Nine nights of devotion, music, and celebration of the divine feminine energy. Special cultural performances each evening.",
    image: "https://images.pexels.com/photos/8828612/pexels-photo-8828612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    livestream: true
  },
  {
    id: 3,
    title: "Diwali Celebrations",
    date: "November 12, 2025",
    time: "5:00 PM - 10:00 PM",
    location: "Temple Complex",
    description: "Festival of lights with special prayers, cultural programs, and community dinner. Special lamp lighting ceremony at 7 PM.",
    image: "https://images.pexels.com/photos/1652959/pexels-photo-1652959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    livestream: true
  },
  {
    id: 4,
    title: "Monthly Satyanarayan Puja",
    date: "First Saturday of Every Month",
    time: "10:00 AM - 12:00 PM",
    location: "Temple Main Hall",
    description: "Monthly worship of Lord Vishnu in the form of Satyanarayan with devotional singing and prasadam distribution.",
    image: "https://images.pexels.com/photos/5409735/pexels-photo-5409735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    livestream: false
  },
  {
    id: 5,
    title: "Sankranti Celebrations",
    date: "January 14, 2026",
    time: "8:00 AM - 2:00 PM",
    location: "Temple Grounds",
    description: "Harvest festival celebrations with special pujas, traditional games, and festive food distribution.",
    image: "https://images.pexels.com/photos/5765852/pexels-photo-5765852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    livestream: false
  },
  {
    id: 6,
    title: "Maha Shivaratri",
    date: "March 8, 2026",
    time: "6:00 PM - 6:00 AM (next day)",
    location: "Temple Main Hall",
    description: "Night-long vigil and worship of Lord Shiva with abhishekam, bhajans, and special rituals throughout the night.",
    image: "https://images.pexels.com/photos/12181528/pexels-photo-12181528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    livestream: true
  }
];

// Event months for filtering
const eventMonths = [
  "All Events",
  "September 2025",
  "October 2025",
  "November 2025",
  "December 2025",
  "January 2026",
  "February 2026",
  "March 2026"
];

const EventsCalendar: React.FC = () => {
  const [activeMonth, setActiveMonth] = useState("All Events");

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

  // Filter events based on active month
  const filteredEvents = activeMonth === "All Events"
    ? events
    : events.filter(event => {
        if (event.date.includes("Every Month")) return true;
        return event.date.includes(activeMonth.split(" ")[0]);
      });

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
              Events & Festivals
            </h1>
            <p className="text-xl text-gray-200 mb-6">
              Join us for spiritual celebrations, cultural programs, and community gatherings
              at Sri Venkateswara Temple.
            </p>
            <div className="w-20 h-1 bg-gold-500 rounded-full mb-8"></div>
          </motion.div>
        </div>
      </section>

      {/* Events Calendar */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          {/* Month Filters */}
          <motion.div
            className="mb-12 overflow-x-auto"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="flex gap-4 pb-2">
              {eventMonths.map((month) => (
                <button
                  key={month}
                  className={`px-6 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                    activeMonth === month
                      ? 'bg-saffron-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveMonth(month)}
                >
                  {month}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Events Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                className="card overflow-hidden"
                variants={fadeIn}
              >
                <div className="relative h-64">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <div className="mb-2">
                        {event.livestream && (
                          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium inline-flex items-center">
                            <ExternalLink size={12} className="mr-1" />
                            Live Stream Available
                          </span>
                        )}
                      </div>
                      <h3 className="text-white font-semibold text-xl">{event.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-col gap-3 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-saffron-600 mr-2" />
                      <span className="text-gray-700">{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-saffron-600 mr-2" />
                      <span className="text-gray-700">{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-saffron-600 mr-2" />
                      <span className="text-gray-700">{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  <div className="flex gap-3">
                    <button className="btn btn-primary text-sm py-2">
                      Event Details
                    </button>
                    {event.livestream && (
                      <button className="btn btn-outline text-sm py-2">
                        Livestream Link
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No events scheduled for this month.</p>
            </div>
          )}
        </div>
      </section>

      {/* Special Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="section-title">Annual Special Events</h2>
            <p className="text-lg text-gray-700 mt-8">
              Mark your calendars for these major annual celebrations at Sri Venkateswara Temple.
              These events feature special rituals, cultural programs, and community gatherings.
            </p>
          </motion.div>

          <motion.div
            className="relative overflow-hidden"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64 md:h-auto">
                <img
                  src="https://images.pexels.com/photos/6147132/pexels-photo-6147132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Temple Anniversary"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent md:bg-gradient-to-r flex items-end md:items-center">
                  <h3 className="text-white font-bold text-xl p-6">Temple Anniversary</h3>
                </div>
              </div>
              <div className="relative h-64 md:h-auto">
                <img
                  src="https://images.pexels.com/photos/12366211/pexels-photo-12366211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Brahmotsavam"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent md:bg-gradient-to-r flex items-end md:items-center">
                  <h3 className="text-white font-bold text-xl p-6">Brahmotsavam</h3>
                </div>
              </div>
              <div className="relative h-64 md:h-auto">
                <img
                  src="https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Cultural Festival"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent md:bg-gradient-to-r flex items-end md:items-center">
                  <h3 className="text-white font-bold text-xl p-6">Cultural Festival</h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Register for Updates */}
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
                Stay Updated with Temple Events
              </h2>
              <p className="text-gray-700 mb-6 text-center">
                Subscribe to our newsletter to receive updates about upcoming events, festivals, and special ceremonies.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="input-field flex-grow"
                  required
                />
                <button
                  type="submit"
                  className="btn btn-primary whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm text-gray-600 mt-4 text-center">
                We respect your privacy and will never share your email with third parties.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Host an Event */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-maroon-600 mb-6">
              Host a Special Ceremony
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our temple offers facilities for hosting private ceremonies such as weddings, naming ceremonies,
              thread ceremonies, and other religious functions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="btn btn-primary"
              >
                Inquire About Booking
              </a>
              <a
                href="#"
                className="btn btn-outline"
              >
                View Ceremony Guidelines
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default EventsCalendar;