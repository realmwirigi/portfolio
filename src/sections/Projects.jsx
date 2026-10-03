import { motion } from 'motion/react';
import { BsArrowRight } from 'react-icons/bs';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Notes API',
      desc: 'A production ready notes api with maximum security and clean code.',
      technologies: ['Node', 'Express', 'MongoDB'],
      code: 'https://github.com/realmwirigi/notes-api',
    },
    {
      id: 2,
      title: 'E-Commerce API',
      desc: 'A mini e-commerce api with payment integration and different roles for customers and admins.',
      technologies: ['Node', 'Express', 'MongoDB', 'stripe'],
      code: 'https://github.com/realmwirigi/ecommerce',
    },
    {
      id: 3,
      title: 'ChatApp API',
      desc: 'A secure real-time chatApp api for chatting and sharing files with family or friends.',
      technologies: ['Node', 'Express', 'MongoDB', 'Socket.io'],
      code: 'https://github.com/realmwirigi/chatApp',
    },
  ];
  return (
    <section
      id="projects"
      className="min-h-screen flex justify-center items-center bg-gray-900 py-16 relative overflow-hidden"
    >
      <div className="absolute top-10 right-32">
        <div className="size-60 bg-linear-to-br from-blue-600 to-cyan-500 blur-3xl opacity-20 rounded-full"></div>
      </div>
      <div className="absolute bottom-10 left-32">
        <div className="size-48 bg-linear-to-br from-cyan-600 to-blue-500 blur-3xl opacity-20 rounded-full"></div>
      </div>
      <div className="container mx-auto px-6 lg:ml-40 lg:mr-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, margin: '-150px' }}
          className="text-center mb-12 ml-0 lg:ml-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
              My
            </span>{' '}
            Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            A collection of my recent projects.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: false, margin: '-150px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-0 lg:ml-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50"
            >
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-1.5">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 bg-gray-700/50 text-cyan-300 text-xs rounded-full border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="w-full flex justify-end items-center mt-3">
                  <a
                    href={project.code}
                    className="flex items-center gap-x-1 text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Code <BsArrowRight />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-150px' }}
          className="text-center mt-8 ml-0 lg:ml-8"
        >
          <a href="htpps://github.com/realmwirigi">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full shadow-lg shadow-blue-500/50 transition-all duration-300 text-sm"
            >
              View More Projects
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
