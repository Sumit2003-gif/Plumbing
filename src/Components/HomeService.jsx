import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import ServiceSection from './Service';

const HomeService = () => {
  const Carded = [
    {
      img: "https://prohauz.bold-themes.com/plumbing/wp-content/uploads/sites/8/2018/09/inner_01.jpg",
      img2: "https://cdn-icons-png.flaticon.com/128/9220/9220276.png",
      header: "Residential plumbing",
      text: "Trusted expert residential plumbing & repair, serving homes"
    },
    {
      img: "https://prohauz.bold-themes.com/plumbing/wp-content/uploads/sites/8/2018/09/inner_02.jpg",
      img2: "https://cdn-icons-png.flaticon.com/128/16844/16844656.png",
      color: "50ABF9",
      header: "Commercial plumbing",
      text: "Commercial plumbing & boiler service of any kind throughout the area"
    },
    {
      img: "https://prohauz.bold-themes.com/plumbing/wp-content/uploads/sites/8/2018/09/inner_03.jpg",
      img2: "https://cdn-icons-png.flaticon.com/128/3125/3125480.png",
      header: "Service & Repair",
      text: "Preventative maintenance & routine care with detail-oriented team"
    }
  ];

  const CardDetail = [
    {
      imageUrl: "https://prohauz.bold-themes.com/plumbing/wp-content/uploads/sites/8/2018/09/services_01.png",
      title: "Explore Our Services & Solutions",
      services: [
        {
          img: "https://cdn-icons-png.flaticon.com/128/312/312971.png",
          heading: "Pipe Leaking",
          description: "Your sewer pump is essential for removing sewage from your sump pit to your septic tank or sewage system"
        },
        {
          img: "https://cdn-icons-png.flaticon.com/128/2373/2373373.png",
          heading: "Drain Cleaning",
          description: "If your tub or sink is draining slower than usual, or won’t drain at all, your drain is either clogged or damaged"
        }
      ]
    },
    {
      imageUrl: "https://prohauz.bold-themes.com/plumbing/wp-content/uploads/sites/8/2018/09/services_02.png",
      title: "For Companies only: Buy Italian Flues",
      services: [
        {
          img: "https://cdn-icons-png.flaticon.com/128/4324/4324288.png",
          heading: "Overflowing Toilet",
          description: "After you try to wipe away debris by hand, it's time to turn to a chemical drain cleaner"
        },
        {
          img: "https://cdn-icons-png.flaticon.com/128/3980/3980489.png",
          heading: "Solder Copper",
          description: "You're ready to do some plumbing work in your house and have to learn how to solder copper"
        }
      ]
    },
    {
      imageUrl: "https://prohauz.bold-themes.com/plumbing/wp-content/uploads/sites/8/2018/09/services_03.png",
      title: "Need Professional Help With Your Project",
      services: [
        {
          img: "https://cdn-icons-png.flaticon.com/128/18065/18065715.png",
          heading: "Toilet Leaking",
          description: "If you live in an apartment building, you're sure to see a sign put up by management to keep your faucet dripping"
        },
        {
          img: "https://cdn-icons-png.flaticon.com/128/15108/15108260.png",
          heading: "Bathtub Installation",
          description: "If your old bathtub has seen better days but you're hesitating to replace it because of the high costs"
        }
      ]
    }
  ];

  const Card = ({ url, url2, header, text, color = "004b8d", delay }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="w-full sm:w-72 md:w-80 m-4 shadow-lg rounded overflow-hidden bg-white transform hover:scale-105 transition duration-300"
    >
      <img src={url} alt={header} className="w-full h-56 object-cover" />
      <div className="relative text-white p-6" style={{ backgroundColor: `#${color}` }}>
        <div className="absolute -top-6 left-6 bg-white p-2 rounded shadow-md">
          <img src={url2} className="w-6 h-6 object-contain" alt="icon" />
        </div>
        <motion.h1
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className="uppercase font-bold text-lg mt-4"
        >
          {header}
        </motion.h1>
        <motion.p
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.4 }}
          className="text-sm mt-2"
        >
          {text}
        </motion.p>
        <Link to="/contact">
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: delay + 0.6 }}
            className="uppercase text-sm cursor-pointer mt-4 border-b border-white hover:text-blue-300 transition"
          >
            Read More &gt;
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );

  return (
    <div
      className="bg-no-repeat py-12 px-4 relative"
      style={{
        backgroundImage:
          "url('https://prohauz.bold-themes.com/plumbing/wp-content/themes/prohauz/overlay/cross_grid.png')"
      }}
    >
      {/* Services Cards with Animation */}
      <section className="relative z-20 -mt-32 flex flex-wrap justify-center">
        {Carded.map((item, index) => (
          <Card
            key={index}
            url={item.img}
            url2={item.img2}
            color={item.color}
            header={item.header}
            text={item.text}
            delay={index * 0.2}
          />
        ))}
      </section>

      {/* Service Sections Carousel */}
      <section className="relative z-10 mt-20 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            className="w-full"
          >
            {CardDetail.map((item, index) => (
              <SwiperSlide key={index}>
                <ServiceSection
                  imageUrl={item.imageUrl}
                  title={item.title}
                  services={item.services}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </section>
    </div>
  );
};

export default HomeService;
