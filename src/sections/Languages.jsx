import { motion } from 'motion/react';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const Languages = () => {
  const languages = [
    { name: 'English', level: 'Fluent', flag: 'uk', proficiency: 85 },
    { name: 'Swahili', level: 'Fluent', flag: 'ke', proficiency: 92 },
    { name: 'Spanish', level: 'Basic', flag: 'es', proficiency: 25 },
  ];
  return (
    <section
      id="languages"
      className="min-h-screen flex justify-center items-center bg-gray-900 relative overflow-hidden py-16 lg:py-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: '-100px' }}
        className="container mx-auto px-4 sm:px-6 relative z-10 flex justify-center"
      >
        <div className="w-full max-w-2xl mx-4 lg:mx-0">
          {/* section header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-8 lg:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              <span className="text-transparent bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text">
                Languages
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto px-4">
              Some few languages I know
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <motion.div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 sm:p8 border border-blue-500/30 shadow-2xl relative overflow-hidden">
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 rounded-2xl bg-linear-to-br from-blue-500/20 to-cyan-500/20 blur-lg -z-10"
              />
              <div className="space-y-4 sm:space-y-6 relative z-10">
                {languages.map((language, index) => (
                  <motion.div
                    key={language.name}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-gray-700/60 backdrop-blur-sm rounded-xl border border-gray-600/40 hover:border-cyan-400/50 transition-all duration-300 group relative overflow-hidden"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: false }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)',
                    }}
                  >
                    <motion.div className="absolute inset-0 rounded-xl bg-linear-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="flex items-center mb-3 sm:mb-0 relative z-10">
                      <span className="text-2xl sm:text-3xl text-white mr-3 sm:mr-4">
                        {language.flag}
                      </span>
                      <div>
                        <h4 className="text-white font-semibold text-base sm:text-lg group-hover:text-cyan-100 transition-colors duration-300">
                          {language.name}
                        </h4>
                        <p className="text-cyan-300 text-xs sm:text-sm group-hover:text-cyan-200 transition-colors duration-300">
                          {language.level}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end space-x-3 relative z-10 w-full sm:w-auto">
                      <div className="flex-1 sm:flex-none sm:w-24 lg:w-28 bg-gray-600 rounded-full h-2 shadow-inner">
                        <motion.div
                          className="bg-linear-to-r from-blue-500 to-cyan-500 h-2 rounded-full shadow-lg shadow-cyan-500/30"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${language.proficiency}%` }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.2,
                            ease: 'easeOut',
                          }}
                          viewport={{ once: false }}
                        />
                      </div>
                      <span className="text-cyan-300 font-bold text-sm sm:text-base min-w-10 sm:min-w-12 text-right transition-colors group-hover:text-cyan-200 duration-300">
                        {language.proficiency}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Languages;
