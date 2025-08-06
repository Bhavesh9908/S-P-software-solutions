import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ValuesSection from "../components/ValuesSection";
import ProjectsCarousel from "../components/ProjectsCarousel";
import { servicesData } from "../data/servicesData";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">

      {/* ===== HERO SECTION ===== */}
      <Hero />

      {/* ===== SERVICES SECTION ===== */}
      <section className="relative py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        {/* Wavy Divider */}
        <div className="absolute top-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-20"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.44-17.36-168.75-17.44-250.63,0.07C414.47,31.05,330.79,72.2,250.06,92.92c-64.77,16.14-130.42,24.4-197.45,24.79v3.68h1200v-3.68C1116.55,117.17,1050.8,109.07,985.66,92.83Z"
              className="fill-white"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold mb-4 text-purple-800">
              Our Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transforming businesses with next-gen software solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {servicesData.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group relative bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-white/30"
              >
                <div className="text-5xl mb-6 text-purple-600 group-hover:text-orange-500 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold mb-3 text-gray-800 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.summary}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-orange-500 transition"
                >
                  Learn more <FaArrowRight className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-block bg-gradient-to-r from-purple-600 to-orange-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== CORE VALUES SECTION ===== */}
      <ValuesSection />

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold mb-4 text-gray-900">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how we’ve created impactful solutions for our clients
            </p>
          </motion.div>

          <ProjectsCarousel />

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-block bg-gradient-to-r from-purple-600 to-orange-500 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-all shadow-lg hover:shadow-xl"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 drop-shadow-lg">
            Ready to transform your business?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let’s discuss how we can help you achieve your goals.
          </p>
          <Link
          
            to="/contact"
            className="bg-gradient-to-r from-yellow-300 to-orange-400 text-purple-900 px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition transform"
          
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
