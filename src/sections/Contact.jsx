import { useState } from 'react';
import { motion } from 'motion/react';
import { FaUser } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';
import { GoPaperAirplane } from 'react-icons/go';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex justify-center bg-gray-900 py-8 sm:py-16"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Get{' '}
            <span className="text-transparent bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text">
              In Touch
            </span>
          </h2>
        </div>
        {/* contact form */}
        <div className="w-full">
          <motion.div
            onSubmit={handleSubmit}
            className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-4 sm:p-6 lg:p-8 border border-blue-500/30"
          >
            <div className="space-y-4 sm:space-y-6">
              {/* name field */}
              <div>
                <label className="text-cyan-300 text-sm font-semibold mb-2 block">
                  Your Name
                </label>
                <div className="relative group">
                  <FaUser className="size-4 sm:w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700/60 border border-gray-600/40 rounded-lg pl-8 sm:pl-10 pr-4 py-2 sm:py-3 text-white placeholder-gray-400 focus:border-cyan-400 resize-none focus:outline-none transition-all text-sm sm:text-base"
                    placeholder="Enter your name"
                  />
                </div>
              </div>
              {/* email field */}
              <div>
                <label className="text-cyan-300 text-sm font-semibold mb-2 block">
                  Your email
                </label>
                <div className="relative group">
                  <CgMail className="size-6 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="email"
                    name="email"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700/60 border border-gray-600/40 rounded-lg pl-8 sm:pl-10 pr-4 py-2 sm:py-3 text-white placeholder-gray-400 focus:border-cyan-400  focus:outline-none transition-all text-sm sm:text-base"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              {/* message field */}
              <div>
                <label className="text-cyan-300 text-sm font-semibold mb-2 block">
                  Your Message
                </label>
                <div className="relative group">
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700/60 border border-gray-600/40 rounded-lg p-2 sm:p-4 text-white placeholder-gray-400 focus:border-cyan-400  focus:outline-none transition-all text-sm sm:text-base"
                    placeholder="Write your message here..."
                  />
                </div>
              </div>
              {/* button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold py-2 sm:py-3 lg:py-4 px-6 rounded-lg flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base lg:text-lg"
              >
                <GoPaperAirplane className="size-4 sm:size-5 lg:size-6" />
                <span>Send Message</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
