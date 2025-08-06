import { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading + Controls */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-heading font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="flex space-x-4">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow hover:shadow-lg transition"
            >
              <FaChevronLeft className="text-gray-700" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow hover:shadow-lg transition"
            >
              <FaChevronRight className="text-gray-700" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 70, damping: 20 }}
          >
            {projectsData.map((project) => (
              <div key={project.id} className="w-full flex-shrink-0 px-4">
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="glow-card relative bg-white/80 backdrop-blur-md rounded-xl p-6 flex flex-col md:flex-row gap-8 
                             shadow-lg border border-gray-100 overflow-hidden"
                >
                  
                  {/* Project Image */}
                  <div className="md:w-1/2 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="max-w-full max-h-64 object-contain hover:scale-105 transition duration-300"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="md:w-1/2 flex flex-col">
                    <h3 className="text-2xl font-heading font-semibold mb-4 text-gray-900">{project.title}</h3>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-800 mb-1">Challenge:</h4>
                      <p className="text-gray-600">{project.problem}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-medium text-gray-800 mb-1">Our Solution:</h4>
                      <p className="text-gray-600">{project.solution}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map((tech) => (
                        <span 
                          key={tech} 
                          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm hover:scale-105 transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex space-x-4 mt-auto">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 hover:text-purple-600 transition"
                        >
                          <span className="mr-2">View Code</span>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      )}
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 hover:text-purple-600 transition"
                        >
                          <span className="mr-2">Live Demo</span>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {projectsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition ${
                currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
