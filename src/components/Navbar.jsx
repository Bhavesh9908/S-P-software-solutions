import { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 
                       backdrop-blur-xl bg-gradient-to-r from-white/40 to-white/20 
                       border-b border-white/20 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-2 group">
          <img 
            src={logo} 
            alt="S&A Software Solutions Logo" 
            className="h-10 transition-transform duration-300 group-hover:scale-110 drop-shadow-lg"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-heading font-bold 
                             bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 
                             text-transparent bg-clip-text drop-shadow-[0_2px_5px_rgba(236,72,153,0.4)]">
              S&A
            </span>
            <span className="text-xs font-heading text-gray-700 tracking-widest drop-shadow">
              SOFTWARE SOLUTIONS
            </span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative text-gray-800 hover:text-purple-600 transition group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 
                               bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 
                               transition-all duration-300 group-hover:w-full rounded-full shadow-md"></span>
            </Link>
          ))}
        </nav>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md py-4 px-4 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-4 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:text-purple-600 transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
