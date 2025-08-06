import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaPaperPlane
} from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        'service_b2yrjge',
        'template_lv5ftlf',
        form.current,
        'EbUPgxHbEs7e2wxbK'
      )
      .then(
        () => {
          setSubmitStatus('success');
          form.current.reset();
        },
        () => {
          setSubmitStatus('error');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden"
    >
      {/* Floating background blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have a project in mind? Let's build something amazing together.
          </p>
        </motion.div>

        {/* Form + Info Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glow-card relative bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg 
                       border border-gray-100 overflow-hidden"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Send us a message
            </h2>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                             focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                             focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="user_message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                             focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center justify-center w-full bg-gradient-to-r 
                           from-blue-600 to-purple-600 text-white px-6 py-3 
                           rounded-lg font-semibold hover:opacity-90 transition-all shadow-md ${
                  isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-green-100 text-green-700 rounded-lg text-center"
                >
                  ✅ Message sent successfully!
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-red-100 text-red-700 rounded-lg text-center"
                >
                  ❌ Failed to send message. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Info Card */}
            <div className="glow-card relative bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg 
                            border border-gray-100 overflow-hidden">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-blue-600 text-xl mt-1 mr-4">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">
                      557, At post Pimplas,<br />
                      Near Ganpati Mandir,<br />
                      Bhiwandi, Thane 421302
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-blue-600 text-xl mt-1 mr-4">
                    <FaPhone />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">+91 7666386594</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-blue-600 text-xl mt-1 mr-4">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">bhaveshmadhavi0650@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glow-card relative bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg 
                            border border-gray-100 overflow-hidden">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Connect With Us
              </h2>
              <div className="flex space-x-6">
                {[
                  { icon: <FaFacebookF />, url: "https://facebook.com" },
                  { icon: <FaLinkedinIn />, url: "https://linkedin.com" },
                  { icon: <FaGithub />, url: "https://github.com" },
                  { icon: <FaTwitter />, url: "https://twitter.com" },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -3, scale: 1.1 }}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors text-2xl"
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
