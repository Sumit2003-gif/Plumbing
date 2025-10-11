import React from 'react';
import { MdPhone } from 'react-icons/md';
import { motion } from 'framer-motion';

const HomeHero = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://prohauz.bold-themes.com/plumbing/wp-content/uploads/sites/8/2018/09/background_01.jpg')",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-16 md:py-24">
        
        {/* Left Content */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Animated Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {/* First Line: "The Plumber You" */}
            <div className="flex flex-wrap">
              {["The", " ", "Plumber", " ", "You"].map((word, wordIndex) => (
                <React.Fragment key={wordIndex}>
                  {word.split('').map((char, charIndex) => (
                    <motion.span
                      key={`${wordIndex}-${charIndex}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: (wordIndex * 0.3 + charIndex * 0.05),
                        type: 'spring',
                        stiffness: 100,
                      }}
                      className={char === ' ' ? 'w-2' : ''}
                    >
                      {char}
                    </motion.span>
                  ))}
                  &nbsp;
                </React.Fragment>
              ))}
            </div>
            {/* Second Line: "Deserve" */}
            <div>
              {"Deserve".split('').map((char, index) => (
                <motion.span
                  key={`deserve-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: (1.2 + index * 0.05),
                    type: 'spring',
                    stiffness: 100,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </h1>

          {/* Subtext */}
          <p className="uppercase text-sm tracking-widest">
            HAVE A PLUMBING ISSUE? <strong>CALL 24 HOUR EMERGENCY SERVICE.</strong>
          </p>

          {/* Phone Info */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full text-white text-lg font-semibold">
              <MdPhone size={40} className="text-3xl bg-blue-500 p-2 rounded-full" />
              <span className="text-2xl md:text-3xl">1-800-555-284</span>
            </div>
          </div>

          {/* CTA Button */}
          <a href="tel:1234567890">
            <motion.button
              className="bg-red-600 cursor-pointer mb-5  hover:bg-red-700 px-6 py-4 md:px-8 md:py-6 text-white font-semibold uppercase rounded-md text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Request Job Estimate
            </motion.button>
          </a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://prohauz.bold-themes.com/plumbing/wp-content/uploads/sites/8/2018/09/background_transparent_01.png"
            alt="Plumber"
            className="w-[250px] md:w-[450px] h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HomeHero;
