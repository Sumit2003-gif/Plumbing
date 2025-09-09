import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Nick Francis",
    role: "Furnaces & Boilers",
    image: "https://prohauz.bold-themes.com/plumbing/wp-content/uploads/sites/8/2018/10/our_team_05.jpg"
  },
  {
    name: "John Carter",
    role: "Water Systems",
    image: "https://prohauz.bold-themes.com/plumbing/wp-content/uploads/sites/8/2018/09/our_team_03.jpg"
  },
  {
    name: "Dave Wilson",
    role: "Drainage Expert",
    image: "https://prohauz.bold-themes.com/plumbing/wp-content/uploads/sites/8/2018/09/our_team_02.jpg"
  },
  {
    name: "Robert Smith",
    role: "Piping & Repairs",
    image: "https://prohauz.bold-themes.com/plumbing/wp-content/uploads/sites/8/2018/09/our_team_01.jpg"
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    }
  }),
};

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  },
};

const TeamExpert = () => {
  return (
    <section className="bg-white px-6 md:px-16 py-16">
      {/* Animated Heading */}
      <motion.h1
        className="text-center text-4xl md:text-5xl font-bold mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={headingVariants}
      >
        OUR TEAMS OF <span className='text-[#51A2FF]'>EXPERTS</span>
      </motion.h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="relative rounded-md shadow-lg overflow-hidden group cursor-pointer"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            tabIndex={0} // for keyboard focus and hover effect on focus
          >
            {/* Team member image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105 group-focus:scale-105"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-blue-600/50 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white px-6 text-center">
              <p className="uppercase text-sm font-semibold tracking-wide mb-1">{member.role}</p>
              <h2 className="text-xl font-bold mb-4">{member.name}</h2>
              <div className="flex space-x-4">
                <a href="#" aria-label="Facebook" className="bg-black p-2 rounded hover:bg-gray-800 transition">
                  <FiFacebook size={18} />
                </a>
                <a href="#" aria-label="Instagram" className="bg-black p-2 rounded hover:bg-gray-800 transition">
                  <FiInstagram size={18} />
                </a>
                <a href="#" aria-label="Twitter" className="bg-black p-2 rounded hover:bg-gray-800 transition">
                  <FiTwitter size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamExpert;
