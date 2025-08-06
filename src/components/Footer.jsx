import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import logo from '../assets/images/logo.png';




const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <img 
              src={logo} 
              alt="S&A Software Solutions Logo" 
              className="h-12 mr-3" 
            />
            <div>
              <h3 className="text-xl font-heading font-bold">S&A</h3>
              <p className="text-sm text-gray-300">SOFTWARE SOLUTIONS</p>
            </div>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              <FaGithub size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} S&A Software Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;