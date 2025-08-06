import { motion } from 'framer-motion';
import { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <motion.div
      onClick={() => {
        setClicked(true);
        setTimeout(() => setClicked(false), 800); // Reset after animation
      }}
      whileHover={{ y: -5, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
      className={`relative rounded-xl shadow-lg overflow-hidden flex flex-col
                  backdrop-blur-md bg-gradient-to-br from-white via-gray-50 to-gray-100
                  hover:shadow-2xl border border-gray-200 cursor-pointer
                  before:absolute before:inset-0 before:rounded-xl before:p-[2px]
                  before:bg-gradient-to-r before:from-blue-500 before:to-purple-500
                  before:opacity-0 hover:before:opacity-100 before:transition-all duration-500
                  ${clicked ? 'before:animate-ping' : ''}`}
    >
      {/* Project Image */}
      <div className="w-full h-48 flex items-center justify-center bg-gray-100 relative z-10">
        <img
          src={project.image}
          alt={project.title}
          className="max-h-full max-w-full object-contain hover:scale-105 transition duration-300"
        />
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1 relative z-10">
        <h3 className="text-2xl font-heading font-semibold mb-2 text-gray-900">
          {project.title}
        </h3>

        <div className="mb-4">
          <h4 className="font-medium text-gray-800 mb-1">Challenge:</h4>
          <p className="text-gray-600 text-sm pl-3 border-l-2 border-blue-500">
            {project.problem}
          </p>
        </div>

        <div className="mb-4">
          <h4 className="font-medium text-gray-800 mb-1">Our Solution:</h4>
          <p className="text-gray-600 text-sm pl-3 border-l-2 border-purple-500">
            {project.solution}
          </p>
        </div>

        <div className="mb-4">
          <h4 className="font-medium text-gray-800 mb-1">Technologies:</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="bg-gradient-to-r from-blue-500 to-purple-500 
                           text-white px-3 py-1 rounded-full text-xs font-medium 
                           shadow-sm hover:scale-110 hover:shadow-lg transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex space-x-4 mt-auto pt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-purple-600 transition font-medium"
            >
              <span className="mr-2">GitHub</span>
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
              className="flex items-center text-blue-600 hover:text-purple-600 transition font-medium"
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
  );
};

export default ProjectCard;
