import React, { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import PlumbingStats from "../Components/PlumbingStats";
import TeamExpert from "../Components/TeamExpert";
import { motion, useAnimation } from "framer-motion";

// Animated Counter Hook with scroll trigger
const useCountUp = (end, duration, inView) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return; // start counting only when in view
    let start = 0;
    const incrementTime = Math.floor((duration * 1000) / end);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration, inView]);

  return count;
};

// Split text to chars for animation
const splitText = (text) => text.split("");

const charVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const About = () => {
  const controls = useAnimation();
  const [sectionInView, setSectionInView] = useState(false);

  // Intersection Observer for the counters
  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("counter-section");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setSectionInView(true);
        controls.start("visible");
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll(); // check initially

    return () => window.removeEventListener("scroll", onScroll);
  }, [controls]);

  // Counters only animate when inView
  const years = useCountUp(25, 2, sectionInView);
  const projects = useCountUp(750, 2, sectionInView);
  const customers = useCountUp(1000, 2, sectionInView);

  // Services data
  const services = [
    {
      img: "https://cdn-icons-png.flaticon.com/128/312/312971.png",
      heading: "FAST RELIABLE SERVICE",
      description:
        "Uisque molestie, arcu et iaculis mollis orci lacus facilisis pede, non euismod arcu ante quis massa in eius.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/2373/2373373.png",
      heading: "EMERGENCY SERVICES",
      description:
        "Est quando nominati at, id vel nisl porro omnesque. Vix dicit accusamus euripidis no, erant audire mediocrem.",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* HERO SECTION */}
      <section
        className="relative bg-cover bg-center h-[80vh] md:h-[90vh] flex items-center justify-center px-4 md:px-12"
        style={{
          backgroundImage:
            "url('https://prohauz.bold-themes.com/plumbing/wp-content/uploads/sites/8/2018/09/featured_image.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-4xl">
          <motion.div
            className="text-lg font-bold uppercase tracking-widest mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Home
          </motion.div>
          <motion.h1
            className="text-5xl md:text-6xl font-bold leading-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {splitText("About Us").map((char, index) => (
              <motion.span key={index} custom={index} variants={charVariants}>
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            className="w-[90%] md:w-[30%] h-[2px] bg-white opacity-20 mt-6 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section
        className="bg-no-repeat bg-cover bg-center py-16 md:py-20 px-6 md:px-12"
        style={{
          backgroundImage:
            "url('https://prohauz.bold-themes.com/plumbing/wp-content/uploads/sites/8/2018/10/background_grayscale_03.jpg')",
        }}
      >
        <motion.div
          className="container mx-auto flex flex-col lg:flex-row items-center justify-around gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-2xl text-center lg:text-left">
            <FaQuoteLeft className="text-[#51ACFB] text-4xl mb-6" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              We have over{" "}
              <span className="text-[#51ACFB]">
                25 years
                <br />
                experience
              </span>{" "}
              in the
              <br />
              plumbing, sanitary and dry
              <br />
              sanitation industry
            </h1>
            <div className="mt-8 flex flex-col sm:flex-row gap-5 items-center sm:items-start">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">John Doe</h2>
                <p className="text-gray-600 mb-4">Company CEO</p>
              </div>
              <img
                src="https://prohauz.bold-themes.com/plumbing/wp-content/uploads/sites/8/2018/10/signature_01.png"
                alt="Signature"
                className="w-52"
              />
            </div>
          </div>
          <div className="flex-shrink-0 max-w-md w-full">
            <img
              src="https://prohauz.bold-themes.com/plumbing/wp-content/uploads/sites/8/2018/10/team_01.png"
              alt="CEO"
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* FACILITIES SECTION */}
      <section
        id="counter-section"
        className="py-20 bg-gray-100 px-6 md:px-10"
      >
        <motion.div
          className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-12"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: {},
            visible: {},
          }}
        >
          {/* Left Image */}
          <motion.img
            src="https://prohauz.bold-themes.com/plumbing/wp-content/uploads/sites/8/2018/10/gallery_projects_18-640x1280.jpg"
            alt="Plumbing"
            className="rounded-lg shadow-lg h-auto md:h-[90vh] w-full md:w-[25%] object-cover"
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          {/* Right Content */}
          <div className="md:w-1/2 space-y-6">
            <motion.h2
              className="text-3xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#51ACFB]">HVAC</span> Facilities Management Service
            </motion.h2>
            <motion.p
              className="text-xl font-medium text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We realize that mechanical systems today are far more complex than ever and energy costs continue to rise.
            </motion.p>
            <motion.p
              className="text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Nothing wears on homeowners like the idea of handling plumbing problems. From the water heater to sewer
              line, we take the pressure off of you (and put it back in your shower lines). Our plumbers are the most
              recognized professionals in the world because we’re committed to amazing service and nothing wears on
              homeowners like the idea of handling plumbing problems.
            </motion.p>
            <motion.p
              className="text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Our plumbers are the most recognized professionals in the world because we’re committed to amazing service
              and nothing wears on homeowners like the idea of handling plumbing problems.
            </motion.p>

            {/* Numbers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mt-8">
              {[
                { number: years, label: "Years Experience" },
                { number: projects, label: "Projects Completed" },
                { number: customers + "+", label: "Satisfied Customers" },
              ].map(({ number, label }, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                >
                  <h3 className="text-4xl text-[#51ACFB] font-bold">{number}</h3>
                  <p className="text-gray-700 mt-2">{label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Additional Sections */}
      <section>
        <PlumbingStats />
      </section>

      <section className="mx-6 md:mx-[5%] -mt-20 flex flex-col lg:flex-row justify-between items-center px-6 py-8 bg-gray-100 gap-10 rounded-lg shadow-md">
        <motion.img
          src="https://prohauz.bold-themes.com/plumbing/wp-content/uploads/sites/8/2018/10/inner_professionals_01-640x453.jpg"
          alt="Sanitary Work"
          className="w-full max-w-md object-cover rounded shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        />

        <motion.div
          className="max-w-xl text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Industrial Sanitary <br className="hidden md:block" />
            Systems
          </h1>
          <p className="text-gray-600 mb-6">
            Praesent dapibus elementum purus. Sed semper, pede nec facilisis
            vestibulum, urna dolor sollicitudin mi, et tristique ante elit eu
            tellus. Donec ipsum nunc, tempus at, eleifend non, tristique id,
            ipsum.
          </p>
        </motion.div>
      </section>

      <section className="flex flex-col-reverse lg:flex-row justify-around items-center px-6 md:px-10 py-16 gap-12 bg-white">
        {/* Left Content */}
        <motion.div
          className="max-w-2xl text-center lg:text-left space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            How to Decide Between New{" "}
            <span className="text-blue-500">HVAC</span> System
          </h1>
          <p className="text-gray-700 mb-8 text-lg">
            We realize that mechanical systems today are far more complex than ever and energy costs.
          </p>

          <div className="space-y-6">
            {services.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                <div className="w-10 h-10 shrink-0">
                  <img
                    src={item.img}
                    alt={item.heading}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-md font-semibold text-gray-800 uppercase">
                    {item.heading}
                  </h2>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full max-w-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            src="https://prohauz.bold-themes.com/plumbing/wp-content/uploads/sites/8/2018/10/team_02.png"
            alt="Technician"
            className="w-full h-auto object-contain rounded-lg shadow-md"
          />
        </motion.div>
      </section>

      <section>
        <TeamExpert />
      </section>
    </div>
  );
};

export default About;
