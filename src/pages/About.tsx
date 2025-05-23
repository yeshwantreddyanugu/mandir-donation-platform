import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Clock, Landmark, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-800/90 to-maroon-900/90 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/5817776/pexels-photo-5817776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
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
              About Our Temple
            </h1>
            <p className="text-xl text-gray-200 mb-6">
              Discover the divine vision, spiritual significance, and community impact of 
              Sri Venkateswara Temple building project.
            </p>
            <div className="w-20 h-1 bg-gold-500 rounded-full mb-8"></div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-maroon-600 mb-6">Our Divine Vision</h2>
              <div className="w-20 h-1 bg-saffron-500 rounded-full mb-6"></div>
              <p className="text-lg text-gray-700 mb-6">
                Our vision is to create a sacred space that serves as a spiritual beacon, preserving and 
                promoting Hindu traditions, culture, and values. The Sri Venkateswara Temple aims to be a 
                sanctuary where devotees can connect with the divine and find peace in today's fast-paced world.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We envision a temple that not only provides a place for worship but also fosters a strong 
                community spirit, encouraging personal growth, cultural understanding, and spiritual enlightenment.
              </p>
              <div className="flex space-x-3 items-center">
                <div className="w-12 h-12 rounded-full bg-saffron-100 flex items-center justify-center">
                  <Target className="h-6 w-6 text-saffron-600" />
                </div>
                <div className="font-medium text-maroon-600">
                  Creating a spiritual sanctuary for present and future generations
                </div>
              </div>
            </motion.div>
            <motion.div
              className="rounded-lg overflow-hidden shadow-xl"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/5945830/pexels-photo-5945830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Temple Vision"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>

          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="rounded-lg overflow-hidden shadow-xl order-2 lg:order-1"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/11628775/pexels-photo-11628775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Temple Mission"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
            <motion.div
              className="order-1 lg:order-2"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-maroon-600 mb-6">Our Sacred Mission</h2>
              <div className="w-20 h-1 bg-saffron-500 rounded-full mb-6"></div>
              <p className="text-lg text-gray-700 mb-6">
                Our mission is to build and maintain a temple that upholds the highest standards of Hindu religious 
                practices, providing a place for worship, celebration of festivals, and spiritual education.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We are committed to creating a welcoming environment for people of all backgrounds, fostering 
                understanding and appreciation of Hindu traditions, and serving the community through various 
                charitable and educational initiatives.
              </p>
              <div className="flex space-x-3 items-center">
                <div className="w-12 h-12 rounded-full bg-saffron-100 flex items-center justify-center">
                  <Landmark className="h-6 w-6 text-saffron-600" />
                </div>
                <div className="font-medium text-maroon-600">
                  Preserving Hindu traditions while serving the broader community
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Temple Significance */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="section-title">Spiritual Significance</h2>
            <p className="text-lg text-gray-700 mt-8">
              Lord Venkateswara, also known as Balaji or Srinivasa, is a form of Lord Vishnu who is believed 
              to have appeared to save mankind from the trials and troubles of Kali Yuga. The construction of 
              this temple is a sacred endeavor to create a divine abode for the Lord in our community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Divine Presence",
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-saffron-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                description: "The temple will serve as a sacred abode where devotees can feel the divine presence of Lord Venkateswara, offering solace, blessings, and spiritual upliftment."
              },
              {
                title: "Cultural Heritage",
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-saffron-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
                description: "Our temple will preserve and promote Hindu traditions, rituals, and cultural practices, ensuring they continue to thrive for generations to come."
              },
              {
                title: "Spiritual Education",
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-saffron-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
                description: "Through classes, workshops, and various programs, the temple will provide opportunities for people of all ages to learn about Hindu philosophy, scriptures, and spiritual practices."
              },
              {
                title: "Community Center",
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-saffron-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
                description: "Beyond religious services, the temple will serve as a community center, fostering connections among people, celebrating cultural events, and providing support to those in need."
              },
              {
                title: "Peace and Meditation",
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-saffron-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
                description: "The temple will provide a tranquil environment for meditation, reflection, and inner peace, offering respite from the stresses of modern life."
              },
              {
                title: "Charitable Services",
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-saffron-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" /></svg>,
                description: "Embracing the Hindu principle of 'seva' (selfless service), the temple will organize and support various charitable initiatives to help those in need."
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="card p-6 hover:translate-y-[-5px]"
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-maroon-600 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Temple Organization */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="section-title">Temple Organization</h2>
            <p className="text-lg text-gray-700 mt-8">
              The Sri Venkateswara Temple is managed by a dedicated team of trustees, religious advisors, 
              and volunteers committed to upholding the highest standards of temple administration and 
              spiritual practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-maroon-600 mb-4">
                Temple Trust
              </h3>
              <p className="text-gray-700 mb-6">
                Our temple is managed by a registered charitable trust that oversees all aspects of temple 
                construction, administration, and operations. The trust is composed of respected community 
                members with extensive experience in temple management and Hindu traditions.
              </p>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-saffron-100 flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-saffron-600" />
                </div>
                <div>
                  <h4 className="font-medium text-maroon-600">Board of Trustees</h4>
                  <p className="text-sm text-gray-600">
                    Governs the temple and makes strategic decisions
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-saffron-100 flex items-center justify-center mr-3">
                  <Clock className="h-5 w-5 text-saffron-600" />
                </div>
                <div>
                  <h4 className="font-medium text-maroon-600">Executive Committee</h4>
                  <p className="text-sm text-gray-600">
                    Handles day-to-day operations and implementation
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-maroon-600 mb-4">
                Spiritual Leadership
              </h3>
              <p className="text-gray-700 mb-6">
                Our temple is blessed with the guidance of learned priests and spiritual advisors who ensure 
                that all religious ceremonies and practices are conducted according to authentic Hindu traditions.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="text-saffron-600 mr-2">●</span>
                  Chief Priest (Peshkar) - Oversees all religious ceremonies
                </li>
                <li className="flex items-center">
                  <span className="text-saffron-600 mr-2">●</span>
                  Assistant Priests - Conduct daily pujas and special ceremonies
                </li>
                <li className="flex items-center">
                  <span className="text-saffron-600 mr-2">●</span>
                  Religious Advisors - Provide guidance on scriptural matters
                </li>
                <li className="flex items-center">
                  <span className="text-saffron-600 mr-2">●</span>
                  Cultural Committee - Organizes festivals and cultural events
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Temple Location */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="section-title">Temple Location</h2>
            <p className="text-lg text-gray-700 mt-8">
              Our temple is strategically located to serve the community while providing a peaceful and 
              serene environment for worship and spiritual activities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="rounded-lg overflow-hidden h-[400px] shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15229.915430698715!2d78.13451127932887!3d17.425787651474374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93d4e5cafb0d%3A0x5d1fa669e0cba0a3!2sHitec%20City%2C%20Hyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1633509268752!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Temple Location Map"
                ></iframe>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-maroon-600 mb-4">
                Spiritual Haven in the Heart of the City
              </h3>
              <p className="text-gray-700 mb-6">
                Our temple is located in a serene area that offers a perfect balance between accessibility and 
                tranquility. The 5-acre plot provides ample space for the main temple structure, community 
                hall, parking, and landscaped gardens.
              </p>
              <div className="mb-6">
                <h4 className="font-medium text-maroon-600 mb-2">Address:</h4>
                <p className="text-gray-700">
                  123 Temple Street, Spiritual Gardens<br />
                  Tirupati, Andhra Pradesh 517501<br />
                  India
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-maroon-600 mb-2">Accessibility:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="text-saffron-600 mr-2">●</span>
                      15 minutes from city center
                    </li>
                    <li className="flex items-center">
                      <span className="text-saffron-600 mr-2">●</span>
                      5 km from main highway
                    </li>
                    <li className="flex items-center">
                      <span className="text-saffron-600 mr-2">●</span>
                      Regular bus service available
                    </li>
                    <li className="flex items-center">
                      <span className="text-saffron-600 mr-2">●</span>
                      Ample parking space
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-maroon-600 mb-2">Facilities:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="text-saffron-600 mr-2">●</span>
                      Main temple complex
                    </li>
                    <li className="flex items-center">
                      <span className="text-saffron-600 mr-2">●</span>
                      Community hall
                    </li>
                    <li className="flex items-center">
                      <span className="text-saffron-600 mr-2">●</span>
                      Meditation garden
                    </li>
                    <li className="flex items-center">
                      <span className="text-saffron-600 mr-2">●</span>
                      Dining area for prasadam
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Our Temple Construction</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Your generous contribution will help us build this sacred temple faster and bring the divine 
              blessings of Lord Venkateswara to our community.
            </p>
            <Link to="/donate" className="btn bg-gold-500 hover:bg-gold-600 text-maroon-800 text-lg px-8 py-4">
              Donate Now
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;