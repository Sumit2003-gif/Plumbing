import React, { useEffect, useState } from 'react';
import {
  CircularProgressbar,
  buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';

const rawStats = [
  { value: 45, label: 'Energy Consumption goes to plumbing' },
  { value: 90, label: 'Average indoor spend time by individual' },
  { value: 50, label: 'Lower your HVAC costs with maintenance' },
  { value: 40, label: 'Lower monthly costs with variable faucets' },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const PlumbingStats = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [animatedStats, setAnimatedStats] = useState(
    rawStats.map(() => 0)
  );

  useEffect(() => {
    if (!inView) return;

    const interval = setInterval(() => {
      setAnimatedStats((prevStats) =>
        prevStats.map((val, idx) =>
          val < rawStats[idx].value ? val + 1 : val
        )
      );
    }, 20);

    return () => clearInterval(interval);
  }, [inView]);

  return (
    <div
      ref={ref}
      className="bg-cover py-20 sm:py-32 bg-center min-h-screen flex items-center justify-center px-6 sm:px-10"
      style={{
        backgroundImage:
          "url('https://prohauz.bold-themes.com/plumbing/wp-content/uploads/sites/8/2018/10/background_heating_05.jpg')"
      }}
    >
      <div className="bg-black/60 p-8 sm:p-16 rounded-lg w-full max-w-7xl text-white text-center">
        <div className="mb-12 max-w-3xl mx-auto">
          <p className="text-sm uppercase text-gray-300 tracking-widest">What We Do</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold mt-2 leading-tight">
            We Offer{' '}
            <span className="text-blue-400">Reliable Services</span>
            <br />
            for Most Plumbing Systems
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {rawStats.map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <div className="w-36 h-36 sm:w-40 sm:h-40">
                <CircularProgressbar
                  value={animatedStats[index]}
                  text={`${animatedStats[index]}%`}
                  styles={buildStyles({
                    pathColor: '#3fa9f5',
                    trailColor: '#2c2c2c',
                    textColor: '#ffffff',
                    textSize: '20px',
                    pathTransitionDuration: 0.5,
                    pathTransition: 'ease-in-out',
                  })}
                />
              </div>
              <p className="mt-6 text-sm sm:text-base font-medium w-10/12 sm:w-3/4 leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlumbingStats;
