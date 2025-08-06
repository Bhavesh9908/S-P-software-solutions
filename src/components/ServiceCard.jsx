import { motion } from 'framer-motion';

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 250 }}
      className="relative rounded-xl shadow-lg overflow-hidden 
                 backdrop-blur-md bg-gradient-to-br from-white via-gray-50 to-gray-100
                 hover:shadow-2xl border border-gray-200
                 before:absolute before:inset-0 before:rounded-xl before:p-[1px]
                 before:bg-gradient-to-r before:from-purple-400 before:to-cyan-400
                 before:opacity-0 hover:before:opacity-100 before:transition-all"
    >
      {/* Card Content */}
      <div className="p-6 relative z-10">
        
        {/* Icon + Title */}
        <div className="flex items-center mb-4">
          <div className="text-purple-600 text-4xl mr-4 drop-shadow-sm">
            {service.icon}
          </div>
          <h3 className="text-2xl font-heading font-semibold text-gray-900">
            {service.title}
          </h3>
        </div>

        {/* Problem Section */}
        <div className="mb-4">
          <h4 className="font-medium text-gray-800 mb-1">Problem:</h4>
          <p className="text-gray-600 text-sm pl-3 border-l-2 border-blue-500">
            {service.problem}
          </p>
        </div>

        {/* Solution Section */}
        <div className="mb-4">
          <h4 className="font-medium text-gray-800 mb-1">Our Solution:</h4>
          <p className="text-gray-600 text-sm pl-3 border-l-2 border-purple-500">
            {service.solution}
          </p>
        </div>

        {/* Technology Stack */}
        <div>
          <h4 className="font-medium text-gray-800 mb-2">Technology Stack:</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {service.stack.map((tech) => (
              <span
                key={tech}
                className="bg-gradient-to-r from-blue-500 to-purple-500 
                           text-white px-3 py-1 rounded-full text-xs font-medium 
                           shadow-sm hover:scale-105 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
