import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: 'What system is right for me?',
    answer:
      'Choosing the right system depends on your home size, budget, and climate. Consult a professional to find the best fit.',
  },
  {
    question: 'What HVAC add-ons do I need?',
    answer:
      'Add-ons like air purifiers, smart thermostats, and humidifiers can improve efficiency and comfort.',
  },
  {
    question: 'How much will it cost?',
    answer:
      'Costs vary depending on system type, installation complexity, and additional features. Get multiple quotes for an accurate estimate.',
  },
  {
    question: 'What size HVAC system do I need?',
    answer:
      'The size depends on your home’s square footage and insulation. Oversized or undersized systems can cause inefficiency.',
  },
  {
    question: 'What is better: gas, electric, or oil?',
    answer:
      'Each has pros and cons related to cost, efficiency, and environmental impact. Your choice should fit your local energy prices and preferences.',
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      className="bg-[#f8f9fa] px-4 md:px-16 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {/* Heading */}
      <motion.div
        className="mb-10 text-center md:text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="uppercase text-sm font-semibold text-gray-700">
          Fix it yourself
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-snug">
          Quick <span className="text-[#51ACFB]">tips & tricks</span>
        </h1>
      </motion.div>

      {/* Flex Container */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* FAQ Accordion */}
        <div className="flex-1 space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              className="border rounded shadow bg-white overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex border-b justify-between items-center p-4">
                {/* Number Box */}
                <div className="bg-gray-200 w-12 h-12 flex items-center justify-center text-lg font-semibold rounded">
                  {index + 1}
                </div>

                {/* Question */}
                <span className="flex-1 mx-4 text-md font-medium text-gray-800">
                  {item.question}
                </span>

                {/* Toggle Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="text-xl font-bold cursor-pointer text-gray-500 focus:outline-none"
                >
                  {openIndex === index ? '−' : '+'}
                </button>
              </div>

              {/* Animated Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 text-gray-600 text-sm"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Video Section */}
        <motion.div
          className="flex-1 w-full h-full"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="w-full h-full rounded overflow-hidden shadow-lg">
            <iframe
              className="w-full aspect-video rounded"
              src="https://www.youtube.com/embed/gWUtDhS3-SY?si=fWnAQ4GuvVM4krLy"
              title="How to Fix Common Leaks"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Faq;
