import { motion, useScroll, useTransform } from "framer-motion";
import { teamData } from "../data/teamData";
import { useRef } from "react";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const containerStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Parallax for blob movement
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <div ref={ref} className="relative min-h-screen py-16 overflow-hidden">
      
      {/* Animated Floating Blobs */}
      <motion.div
        style={{ y: y1 }}
        animate={{ rotate: [0, 360], scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute top-20 left-10 w-72 h-72 
                   bg-gradient-to-br from-purple-400/40 to-cyan-400/40 
                   blur-3xl rounded-full"
      />
      
      <motion.div
        style={{ y: y2 }}
        animate={{ rotate: [0, -360], scale: [1, 1.07, 1] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="absolute bottom-0 right-10 w-80 h-80 
                   bg-gradient-to-br from-cyan-300/40 to-blue-400/30 
                   blur-3xl rounded-full"
      />

      {/* Background Gradient */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b 
                   from-purple-100 via-blue-50 to-white opacity-60"
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-heading font-bold mb-4 text-gray-900">
            About Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driving innovation through technology solutions
          </p>
        </motion.div>

        {/* Vision, Mission, Values */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              title: "Our Vision",
              description:
                "To be the leading provider of innovative software solutions that transform businesses and industries through cutting-edge technology.",
            },
            {
              title: "Our Mission",
              description:
                "To deliver custom software solutions that solve real-world problems, enhance efficiency, and drive growth for our clients.",
            },
            {
              title: "Our Values",
              description: (
                <ul className="space-y-2">
                  <li>• Innovation & Creativity</li>
                  <li>• Client-Centric Approach</li>
                  <li>• Technical Excellence</li>
                  <li>• Integrity & Transparency</li>
                </ul>
              ),
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative p-6 rounded-xl shadow-md overflow-hidden
                         backdrop-blur-md bg-white/80 border border-gray-200
                         hover:shadow-xl transition-all duration-300
                         before:absolute before:inset-0 before:rounded-xl
                         before:p-[1px] before:bg-gradient-to-r
                         before:from-purple-400 before:to-cyan-400
                         before:opacity-0 hover:before:opacity-100 before:transition-all"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-heading font-semibold mb-4 text-primary-start">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-white/80 backdrop-blur-md border border-gray-200 
                     rounded-xl p-8 mb-16 shadow-md relative z-10"
        >
          <h2 className="text-3xl font-heading font-bold text-center mb-8 text-gray-900">
            Why Choose S&A?
          </h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { title: "Custom Solutions", icon: "🛠️", description: "Tailored software designed specifically for your business needs" },
              { title: "Fast Delivery", icon: "⚡", description: "Agile development process ensures timely delivery" },
              { title: "Secure Apps", icon: "🔒", description: "Enterprise-grade security built into every solution" },
              { title: "Ongoing Support", icon: "🔄", description: "Continued maintenance and support after deployment" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.05, y: -3 }}
                className="bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-sm 
                           text-center border border-gray-200 hover:shadow-md transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-heading font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Team Section */}
        {teamData && teamData.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-heading font-bold text-center mb-8 text-gray-900">Our Team</h2>
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {teamData.map((member) => (
                <motion.div
                  key={member.id}
                  variants={fadeUp}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="relative bg-white/80 backdrop-blur-md rounded-lg overflow-hidden
                             shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-heading font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-primary-start mb-2">{member.position}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default About;
