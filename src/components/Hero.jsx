import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500 text-white py-28">
      <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
        
        {/* Logo & Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <img src={logo} alt="S&A Logo" className="h-24 mx-auto mb-4 drop-shadow-lg" />
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 bg-gradient-to-r from-yellow-300 via-white to-yellow-100 text-transparent bg-clip-text drop-shadow-lg">
            S&A Software Solutions
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl text-orange-100"
        >
          Transforming ideas into <span className="font-semibold text-white">premium digital experiences</span> that impress and perform
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-5"
        >
          <Link
            to="/services"
            className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition transform"
          >
            Our Services
          </Link>
          <Link
                    
          to="/contact"
          className="bg-gradient-to-r from-yellow-300 to-orange-400 text-purple-900 px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition transform"
                    
          >
          Get in Touch
          </Link>
        </motion.div>
      </div>

      {/* Floating Glow Particles */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -40, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-white/10 blur-2xl"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 40, 0], rotate: [0, -180, -360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-white/10 blur-2xl"
      />
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -30, 0], rotate: [0, 360, 720] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-1/3 w-20 h-20 rounded-full bg-yellow-300/20 blur-xl"
      />
    </section>
  );
};

export default Hero;
