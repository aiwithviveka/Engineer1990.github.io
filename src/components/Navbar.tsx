import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Link } from "react-router-dom";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        scrolled 
          ? 'bg-apple-white/80 backdrop-blur-lg shadow-sm py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-lg font-medium text-apple-gray-900 hover:text-apple-blue-600 transition-colors"
            aria-label="Home"
          >
            Viveka Sharma
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <div className="space-x-8 flex items-center">
              <a href="#about" className="apple-nav-link">About</a>
              <a href="#experience" className="apple-nav-link">Experience</a>
              <a href="#skills" className="apple-nav-link">Skills</a>
              <a href="#contact" className="apple-nav-link">Contact</a>
              <Link to="/content" className="apple-nav-link">Content Hub</Link>
            </div>
            <div className="flex items-center space-x-5">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="w-4 h-4 text-apple-gray-800 hover:text-apple-blue-600 transition-colors" strokeWidth={1.5} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 text-apple-gray-800 hover:text-apple-blue-600 transition-colors" strokeWidth={1.5} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="w-4 h-4 text-apple-gray-800 hover:text-apple-blue-600 transition-colors" strokeWidth={1.5} />
              </a>
              <a href="mailto:vivekasharma01@gmail.com" aria-label="Email">
                <Mail className="w-4 h-4 text-apple-gray-800 hover:text-apple-blue-600 transition-colors" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-apple-gray-800 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'md:hidden absolute left-0 right-0 bg-apple-white/90 backdrop-blur-lg shadow-sm px-6 py-6 transition-all duration-300 ease-in-out',
            isMenuOpen ? 'top-full opacity-100' : '-top-[500px] opacity-0'
          )}
        >
          <div className="flex flex-col space-y-5">
            <a href="#about" className="apple-nav-link py-2" onClick={toggleMenu}>About</a>
            <a href="#experience" className="apple-nav-link py-2" onClick={toggleMenu}>Experience</a>
            <a href="#skills" className="apple-nav-link py-2" onClick={toggleMenu}>Skills</a>
            <a href="#contact" className="apple-nav-link py-2" onClick={toggleMenu}>Contact</a>
            <Link to="/content" className="apple-nav-link py-2" onClick={toggleMenu}>Content Hub</Link>
          </div>
          <div className="flex items-center space-x-6 mt-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-5 h-5 text-apple-gray-800" strokeWidth={1.5} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 text-apple-gray-800" strokeWidth={1.5} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="w-5 h-5 text-apple-gray-800" strokeWidth={1.5} />
            </a>
            <a href="mailto:vivekasharma01@gmail.com" aria-label="Email">
              <Mail className="w-5 h-5 text-apple-gray-800" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
