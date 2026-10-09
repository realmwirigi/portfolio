import { BsPhone } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';
import { FaGraduationCap, FaHome, FaMapPin, FaTools } from 'react-icons/fa';
import { HiLanguage } from 'react-icons/hi2';
import { motion } from 'motion/react';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const contactInfo = [
    {
      icon: CgMail,
      title: 'Email',
      value: 'dmwirigi005@gmail.com',
      link: 'mailto:dmwirigi005@gmail.com',
    },
    {
      icon: BsPhone,
      title: 'Phone',
      value: '+254 796 092 834',
      link: 'tel: +254 796 092 834',
    },
    {
      icon: FaMapPin,
      title: 'Location',
      value: 'Meru, Kenya',
      link: null,
    },
  ];

  const quickLinks = [
    { icon: FaHome, label: 'Home', href: '#home' },
    { icon: FaTools, label: 'Skills', href: '#skills' },
    { icon: FaGraduationCap, label: 'Education', href: '#education' },
    { icon: HiLanguage, label: 'Languages', href: '#languages' },
    { icon: FiMail, label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-800 border-t border-gray-500/20 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-12 max-w-4xl mx-auto">
          {/* Contact info */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 text-gray-300 group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors duration-300">
                    <contact.icon className="size-5 text-cyan-400" />
                  </div>
                  {contact.link ? (
                    <a
                      href={contact.link}
                      className="text-sm hover:text-cyan-300 transition-colors duration-300"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <span className="text-sm">{contact.value}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* links */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-cyan-300 text-center font-semibold text-xl mb-6">
              Quick Navigation
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="flex items-center gap-2 px-4 py-3 hover:text-cyan-300 bg-gray-700/80 hover:bg-gray-700/80 transition-all duration-300 group rounded-lg text-gray-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="size-4" />
                  <span className="text-sm font-medium">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                  <span>@{currentYear} Mwirigi. All rights reserved</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-green-400 text-sm">
                  <div className="size-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="">Available for new projects.</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
