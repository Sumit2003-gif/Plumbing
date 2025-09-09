import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Emergency = () => {
  const OfferCard = ({ url, header, number, delay = 0 }) => (
    <motion.div
      className="relative bg-cover bg-center h-[300px] flex flex-col justify-center p-6 text-white rounded shadow-lg"
      style={{ backgroundImage: `url(${url})` }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <p className="uppercase text-sm font-semibold">Special Offer</p>
      <h1 className="text-2xl font-bold mt-1">{header}</h1>
      <h2 className="text-xl mt-2">
        <span className="text-[#51ACFB] font-bold">{number} off</span>
      </h2>
      <Link to="/contact">
        <button className="mt-4 w-fit cursor-pointer bg-red-600 text-white px-5 py-2 uppercase text-sm font-semibold rounded hover:bg-red-700 transition">
          Contact Us
        </button>
      </Link>
    </motion.div>
  );

  const Cardetail = [
    {
      url: "https://prohauz.bold-themes.com/plumbing/wp-content/uploads/sites/8/2018/09/inner_04.jpg",
      header: "Faucet installation",
      number: "$24",
    },
    {
      url: "https://prohauz.bold-themes.com/plumbing/wp-content/uploads/sites/8/2018/09/inner_05.jpg",
      header: "Water filter cleaning",
      number: "50%",
    },
    {
      url: "https://prohauz.bold-themes.com/plumbing/wp-content/uploads/sites/8/2018/09/inner_06.jpg",
      header: "Drain cleaning",
      number: "$10",
    },
  ];

  const DetailsPlumber = [
    {
      img: "https://cdn-icons-png.flaticon.com/128/10825/10825696.png",
      header: "FAST RELIABLE SERVICE",
      text: "We offer quick and reliable plumbing services by trained professionals.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/10481/10481601.png",
      header: "SKILLED & TRAINED PERSONNEL",
      text: "Our team is experienced and constantly trained to handle all plumbing needs.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/15260/15260850.png",
      header: "EMERGENCY SERVICES",
      text: "Available 24/7 to respond to any emergency plumbing issue promptly.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/4290/4290459.png",
      header: "ONE YEAR WARRANTY",
      text: "We stand behind our work. All services come with a full one-year warranty.",
    },
  ];

  return (
    <div className="bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute left-0 top-0 h-full w-full z-0 pointer-events-none">
        <img
          src="https://prohauz.bold-themes.com/plumbing/wp-content/uploads/sites/8/2018/09/background_plumbing_01.jpg"
          className="absolute top-[100px] left-0 w-60 opacity-90 z-10"
          alt="Decoration 1"
        />
        <img
          src="https://prohauz.bold-themes.com/plumbing/wp-content/uploads/sites/8/2018/09/background_plumbing_02.jpg"
          className="absolute top-[400px] left-0 w-60 opacity-90 z-10"
          alt="Decoration 2"
        />
      </div>

      {/* Section Content */}
      <div className="relative z-10">
        {/* Offer Cards Section */}
        <motion.section
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-16 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          {Cardetail.map((item, index) => (
            <OfferCard
              key={index}
              url={item.url}
              header={item.header}
              number={item.number}
              delay={index * 0.15}
            />
          ))}
        </motion.section>

        {/* Emergency Info Section */}
        <motion.section
          className="px-4 md:px-16 py-20 bg-[#f8f9fa]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {/* Section Title */}
          <motion.div
            className="text-center md:text-left mb-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase text-sm font-semibold text-gray-500 tracking-wide">
              What we offer
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight mt-2">
              Available for <span className="text-[#51ACFB]">24/7 Emergency</span><br />
              Plumbing Service
            </h1>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {DetailsPlumber.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <img src={item.img} alt={item.header} className="w-10 h-10 object-contain" />
                <div>
                  <h3 className="text-md font-semibold text-gray-800">{item.header}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Emergency;
