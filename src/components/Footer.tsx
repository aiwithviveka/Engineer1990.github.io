import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-apple-gray-50 text-apple-gray-800 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-medium mb-1">Viveka Sharma</h3>
            <p className="text-apple-gray-600 text-sm">Agentic AI Engineer</p>
          </div>

          <div className="mb-8 md:mb-0">
            <ul className="flex flex-wrap justify-center gap-8">
              <li><a href="#about" className="text-sm text-apple-gray-700 hover:text-apple-blue-600 transition-colors">About</a></li>
              <li><a href="#experience" className="text-sm text-apple-gray-700 hover:text-apple-blue-600 transition-colors">Experience</a></li>
              <li><a href="#skills" className="text-sm text-apple-gray-700 hover:text-apple-blue-600 transition-colors">Skills</a></li>
              <li><a href="#contact" className="text-sm text-apple-gray-700 hover:text-apple-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="flex space-x-6">
            <a 
              href="http://github.com/aiwithviveka" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-apple-gray-100 flex items-center justify-center hover:bg-apple-gray-200 transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} className="text-apple-gray-700" strokeWidth={1.5} />
            </a>
            <a 
              href="https://www.linkedin.com/in/aiwithviveka" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-apple-gray-100 flex items-center justify-center hover:bg-apple-gray-200 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} className="text-apple-gray-700" strokeWidth={1.5} />
            </a>
            <a 
              href="https://x.com/aiwithviveka" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-apple-gray-100 flex items-center justify-center hover:bg-apple-gray-200 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={16} className="text-apple-gray-700" strokeWidth={1.5} />
            </a>
            <a 
              href="https://medium.com/@aiwithviveka"
              className="w-8 h-8 rounded-full bg-apple-gray-100 flex items-center justify-center hover:bg-apple-gray-200 transition-colors"
              aria-label="Medium"
            >
              <Mail size={16} className="text-apple-gray-700" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="border-t border-apple-gray-200 mt-10 pt-10 flex flex-col-reverse md:flex-row justify-between items-center">
          <p className="text-xs text-apple-gray-500 mt-6 md:mt-0">
            &copy; {currentYear} Viveka Sharma. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs bg-apple-gray-200 px-4 py-2 rounded-full hover:bg-apple-gray-300 transition-colors"
            aria-label="Scroll to top"
          >
            <span className="text-apple-gray-700">Back to Top</span>
            <ArrowUp size={14} className="text-apple-gray-700" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
