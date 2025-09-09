import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogData } from '../Components/BlogData';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find((item) => item.id === parseInt(id));

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh(); // ensures animations work when blog changes
  }, [id]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedMessages = JSON.parse(localStorage.getItem('blogMessages')) || [];
    const newMessage = {
      blogId: blog.id,
      ...formData,
      timestamp: new Date().toISOString(),
    };

    storedMessages.push(newMessage);
    localStorage.setItem('blogMessages', JSON.stringify(storedMessages));

    alert('Message submitted!');
    setFormData({ name: '', email: '', message: '' });
  };

  if (!blog) return <div className="p-10 text-center text-lg">Blog not found.</div>;

  return (
    <div className="text-gray-800">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-[70vh] md:h-[90vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${blog.image})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div
          className="relative z-10 text-white text-center px-4 max-w-3xl"
          data-aos="fade-up"
        >
          <h4 className="uppercase text-sm md:text-base tracking-widest mb-4">{blog.category}</h4>
          <h1 className="text-2xl md:text-5xl font-bold leading-tight">{blog.title}</h1>
          <p className="mt-4 text-xs md:text-sm text-gray-200">
            {blog.date} / by {blog.author} / {blog.comments} Comment{blog.comments !== 1 && 's'}
          </p>
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full rounded-lg mb-6 shadow-lg"
          data-aos="zoom-in"
        />

        <p
          className="text-gray-700 text-base md:text-lg leading-relaxed mb-6"
          data-aos="fade-up"
        >
          Welcome to our in-depth guide on <strong>{blog.title}</strong>. In today’s post, we dive into
          the details of why this topic matters and what you can do about it.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4" data-aos="fade-right">
          Why It Matters
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4" data-aos="fade-left">
          In an era of rapidly evolving home technologies, it’s easy to overlook the basics — like your
          plumbing and filtration systems. Neglecting these can lead to:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2" data-aos="fade-up">
          <li>Increased risk of contamination</li>
          <li>Higher long-term repair costs</li>
          <li>Decreased water pressure and quality</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4" data-aos="fade-up">
          Key Takeaways
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4" data-aos="fade-up">
          Whether you’re maintaining an older home or building a new one, always consider the long-term
          impact of your drainage and filtration systems.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4" data-aos="fade-up">
          <strong>Pro Tip:</strong> Schedule routine inspections every 6–12 months to avoid costly
          surprises.
        </p>

        <hr className="my-10 border-gray-300" data-aos="zoom-in" />

        <p className="text-gray-700 text-base md:text-lg leading-relaxed" data-aos="fade-up">
          We hope this guide helped you better understand the importance of maintaining your home's water
          systems. Stay tuned for more tips and tricks!
        </p>
      </div>

      {/* Leave a Message Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10" data-aos="fade-up">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Leave a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border px-4 py-2 rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full border px-4 py-2 rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className="w-full border px-4 py-2 rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Back to Blog Button */}
      <div className="max-w-4xl mx-auto px-4 pb-20 text-center" data-aos="fade-up">
        <Link
          to="/blog"
          className="inline-block mt-6 bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300 transition"
        >
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
};

export default BlogDetail;
