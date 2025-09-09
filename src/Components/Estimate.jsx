import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Estimate = () => {
  const stats = [
    {
      number: 60,
      suffix: '%',
      text: 'Household water usage that goes to toilets, showers & faucets',
    },
    {
      number: 180,
      suffix: 'gal',
      text: 'The average US family can waste from household leaks',
    },
    {
      number: 120,
      suffix: '$',
      text: 'Yearly savings by servicing your water leaks with 24 hour services available',
    },
  ];

  // Intersection observer to trigger animations
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true, // Change to false if you want animations every scroll in
  });

  // Heading animation controller
  const headingControls = useAnimation();

  useEffect(() => {
    if (inView) {
      headingControls.start('visible');
    }
  }, [inView, headingControls]);

  // Heading text split
  const headingLines = ['Regular', 'plumbing care', 'will save your time & money'];

  return (
    <div className="font-sans">
      {/* CTA Section */}
      <section className="bg-[#51ACFB] flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-12 py-10 text-white text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold">
          Are you interested in an estimate?
        </h1>
        <a href="tel:1234567890">
          <button className="uppercase cursor-pointer bg-white text-[#51ACFB] font-semibold px-6 py-3 rounded hover:bg-gray-100 transition">
            Request Job Estimate
          </button>
        </a>
      </section>

      {/* Stats Section */}
      <section
        ref={ref}
        className="relative bg-cover bg-center min-h-screen flex flex-col justify-center text-white py-20 px-6"
        style={{
          backgroundImage:
            "url('https://prohauz.bold-themes.com/plumbing/wp-content/uploads/sites/8/2018/09/background_03.jpg')",
        }}
      >
        {/* Heading Animation */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial="hidden"
          animate={headingControls}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.25,
              },
            },
            hidden: {},
          }}
        >
          {headingLines.map((line, i) => (
            <motion.h1
              key={i}
              className={`text-3xl md:text-5xl font-bold leading-tight ${
                i === 1 ? 'text-[#51ACFB]' : ''
              }`}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              {line}
            </motion.h1>
          ))}
        </motion.div>

        {/* Stat Cards */}
        <div className="flex flex-col md:flex-row items-center justify-around gap-12 md:gap-8 w-full max-w-6xl mx-auto px-4">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="text-center md:text-left max-w-xs"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.3, duration: 0.8, type: 'spring' }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-2 text-[#51ACFB]">
                {inView && (
                  <CountUp end={item.number} duration={2} suffix={item.suffix} />
                )}
              </h2>
              <p className="text-sm text-white">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Estimate;
