import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Contact: React.FC = () => {
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
            backgroundImage: "url('https://images.pexels.com/photos/5409735/pexels-photo-5409735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
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
              Contact Us
            </h1>
            <p className="text-xl text-gray-200 mb-6">
              Reach out to us for questions about donations, temple construction, events, or volunteering opportunities.
            </p>
            <div className="w-20 h-1 bg-gold-500 rounded-full mb-8"></div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-maroon-600 mb-6">Get in Touch</h2>
              <p className="text-gray-700 mb-8">
                We welcome your questions, feedback, and support for our temple construction project.
                Feel free to contact us through any of the following channels:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-saffron-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-saffron-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-maroon-600 mb-1">Phone</h3>
                    <p className="text-gray-700">+91 98765 43210</p>
                    <p className="text-gray-700">+91 87654 32109 (For Donations)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-saffron-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-saffron-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-maroon-600 mb-1">Email</h3>
                    <p className="text-gray-700">info@srivenkateswara.org</p>
                    <p className="text-gray-700">donations@srivenkateswara.org</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-saffron-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-saffron-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-maroon-600 mb-1">Address</h3>
                    <p className="text-gray-700">
                      123 Temple Street, Spiritual Gardens<br />
                      Tirupati, Andhra Pradesh 517501<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-saffron-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-saffron-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-maroon-600 mb-1">Office Hours</h3>
                    <p className="text-gray-700">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed (Except for special events)
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium text-maroon-600 mb-3">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-saffron-100 flex items-center justify-center text-saffron-600 hover:bg-saffron-200 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-saffron-100 flex items-center justify-center text-saffron-600 hover:bg-saffron-200 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-saffron-100 flex items-center justify-center text-saffron-600 hover:bg-saffron-200 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-saffron-100 flex items-center justify-center text-saffron-600 hover:bg-saffron-200 transition-colors">
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="card p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-maroon-600 mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="firstName">
                        First Name*
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="input-field"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="lastName">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="input-field"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="email">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="input-field"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="input-field"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="subject">
                      Subject*
                    </label>
                    <select
                      id="subject"
                      className="input-field"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="donation">Donation Inquiry</option>
                      <option value="construction">Construction Updates</option>
                      <option value="volunteering">Volunteering Opportunities</option>
                      <option value="events">Events & Ceremonies</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="message">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="input-field"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="btn btn-primary w-full"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Location</h2>
            <p className="text-lg text-gray-700 mt-8">
              Visit our temple site to witness the construction progress and attend our events.
              We are conveniently located and easily accessible.
            </p>
          </motion.div>

          <motion.div
            className="rounded-lg overflow-hidden shadow-xl h-[500px]"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15229.915430698715!2d78.13451127932887!3d17.425787651474374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93d4e5cafb0d%3A0x5d1fa669e0cba0a3!2sHitec%20City%2C%20Hyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1633509268752!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Temple Location Map"
            ></iframe>
          </motion.div>

          <motion.div
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="card p-4">
              <h3 className="text-lg font-medium text-maroon-600 mb-2">From City Center</h3>
              <p className="text-gray-700">
                15 minutes by car<br />
                25 minutes by public transport<br />
                Regular bus service available
              </p>
            </div>
            <div className="card p-4">
              <h3 className="text-lg font-medium text-maroon-600 mb-2">From Airport</h3>
              <p className="text-gray-700">
                30 minutes by car<br />
                Taxi services available<br />
                Shuttle service on special events
              </p>
            </div>
            <div className="card p-4">
              <h3 className="text-lg font-medium text-maroon-600 mb-2">Parking</h3>
              <p className="text-gray-700">
                Ample parking space available<br />
                Special arrangements for events<br />
                Accessible parking for differently-abled
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-700 mt-8">
              Find answers to common questions about visiting, donating, and participating in temple activities.
            </p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                question: "What are the temple visiting hours?",
                answer: "Once construction is complete, the temple will be open from 6:00 AM to 9:00 PM daily. During the construction phase, limited visiting hours are available from 10:00 AM to 4:00 PM on weekends for those who wish to see the progress."
              },
              {
                question: "How can I volunteer for temple activities?",
                answer: "We welcome volunteers for various activities including construction assistance, event organization, and administrative support. Please fill out the volunteer form on our website or contact our office to discuss volunteering opportunities."
              },
              {
                question: "Can I organize a religious ceremony at the temple?",
                answer: "Yes, once the temple is fully operational, you can book various religious ceremonies including pujas, homas, and other rituals. During the construction phase, we are offering limited ceremony options. Please contact our office for details and availability."
              },
              {
                question: "How is my donation utilized?",
                answer: "All donations are primarily used for temple construction, including materials, labor, and religious artifacts. A small portion is allocated for administrative expenses and community programs. We provide complete transparency regarding fund utilization."
              },
              {
                question: "Are there accommodation facilities near the temple?",
                answer: "Currently, we do not have on-site accommodation facilities. However, there are several hotels and guesthouses within a 5 km radius of the temple. We plan to develop pilgrim accommodation facilities in the future phases of construction."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="mb-6 border-b border-gray-200 pb-6 last:border-b-0 last:pb-0"
              >
                <h3 className="text-lg font-semibold text-maroon-600 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-700">
                  {faq.answer}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-saffron-50">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-maroon-600 mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Stay updated with temple construction progress, upcoming events, and spiritual insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
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
            <p className="text-sm text-gray-600 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;