import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    text: "Not only were they the most thorough with the initial inspection, they also had the best price offer.",
    stars: 5,
    name: "MICHAEL DOE - PHOENIX, AZ",
    role: "Yelp Reviewer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "They generated a quote promptly; and their availability was great. Heck, they even gave us a lil' discount.",
    stars: 5,
    name: "CATHERINE JANE - BERKELEY, CA",
    role: "Yelp Reviewer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

// ⭐ Star Rating Component
const StarRating = ({ count }) => (
  <div className="flex space-x-1 mt-2 text-yellow-400">
    {Array(count)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 
            1.371 1.24.588 1.81l-3.39 2.463a1 1 0 00-.364 1.118l1.287 
            3.974c.3.922-.755 1.688-1.538 1.118L10 13.347l-3.39 
            2.463c-.783.57-1.838-.196-1.538-1.118l1.287-3.974a1 
            1 0 00-.364-1.118L3.605 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 
            1 0 00.95-.69l1.286-3.974z"
          />
        </svg>
      ))}
  </div>
);

const Testimonial = () => {
  const [current, setCurrent] = React.useState(0);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const prev = () => setCurrent((idx) => (idx === 0 ? testimonials.length - 1 : idx - 1));
  const next = () => setCurrent((idx) => (idx === testimonials.length - 1 ? 0 : idx + 1));

  return (
    <div
      ref={ref}
      className="relative flex justify-center items-center bg-cover bg-center text-white py-20 px-6 md:px-20 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://prohauz.bold-themes.com/plumbing/wp-content/uploads/sites/8/2018/09/background_03.jpg')",
      }}
    >
      <div className="relative max-w-3xl w-full flex flex-col items-center">
        {/* Heading */}
        <motion.h1
          className="text-5xl font-extrabold mb-2 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Customer <span className="text-[#51ACFB]">experience</span>
        </motion.h1>
        <motion.p
          className="text-lg font-semibold mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Porttitor vestibulum orci nullam tincidunt
        </motion.p>

        {/* Carousel */}
        <div className="w-full overflow-hidden min-h-[230px]">
          <AnimatePresence mode="wait">
            {testimonials.map((item, idx) =>
              idx === current ? (
                <motion.div
                  key={idx}
                  className="flex flex-col md:flex-row items-center gap-6 px-4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white flex-shrink-0"
                  />

                  {/* Content */}
                  <div className="text-center md:text-left">
                    <p className="text-xl mb-4">{item.text}</p>
                    <StarRating count={item.stars} />
                    <p className="uppercase text-sm mt-6 font-semibold tracking-wide">
                      {item.name}
                    </p>
                    <p className="text-sm opacity-70">{item.role}</p>
                  </div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute top-1/2 left-0 -translate-y-1/2 text-white text-3xl md:text-4xl hover:text-[#51ACFB] transition"
          aria-label="Previous"
        >
          &#8249;
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 right-0 -translate-y-1/2 text-white text-3xl md:text-4xl hover:text-[#51ACFB] transition"
          aria-label="Next"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
