import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Home } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-gradient-to-b from-black/50 to-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Home 
            size={36} 
            className={`${isScrolled ? 'text-saffron-600' : 'text-gold-500'} mr-2`} 
          />
          <div>
            <h1 
              className={`text-xl font-bold ${
                isScrolled ? 'text-maroon-600' : 'text-white'
              }`}
            >
              Sri Venkateswara Temple
            </h1>
            <p 
              className={`text-xs ${
                isScrolled ? 'text-gray-600' : 'text-gray-200'
              }`}
            >
              Divine Building Project
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Donate', path: '/donate' },
            { name: 'Gallery', path: '/gallery' },
            { name: 'Testimonials', path: '/testimonials' },
            { name: 'Events', path: '/events' },
            { name: 'Contact', path: '/contact' },
          ].map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isScrolled
                    ? isActive
                      ? 'text-saffron-600'
                      : 'text-gray-700 hover:text-saffron-600'
                    : isActive
                    ? 'text-gold-500'
                    : 'text-white hover:text-gold-300'
                }`
              }
              end
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Donate Button (Desktop) */}
        <Link
          to="/donate"
          className="hidden lg:block btn btn-primary"
        >
          Donate Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-saffron-600"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" onClick={closeMenu} className="flex items-center">
              <Home size={32} className="text-saffron-600 mr-2" />
              <h1 className="text-xl font-bold text-maroon-600">
                Sri Venkateswara Temple
              </h1>
            </Link>
            <button
              onClick={toggleMenu}
              className="text-saffron-600"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Donate', path: '/donate' },
              { name: 'Gallery', path: '/gallery' },
              { name: 'Testimonials', path: '/testimonials' },
              { name: 'Events', path: '/events' },
              { name: 'Contact', path: '/contact' },
            ].map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-lg font-medium ${
                    isActive
                      ? 'text-saffron-600'
                      : 'text-gray-700 hover:text-saffron-600'
                  }`
                }
                end
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
          <div className="mt-8">
            <Link
              to="/donate"
              onClick={closeMenu}
              className="w-full btn btn-primary text-center"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;