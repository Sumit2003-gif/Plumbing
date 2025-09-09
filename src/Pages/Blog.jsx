import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BlogCard from '../Components/BlogCard';
import { blogData } from '../Components/BlogData';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogData.length / blogsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="overflow-x-hidden">
      {/* Header Section */}
      <section
        className="relative bg-cover bg-center h-[80vh] md:h-[90vh] flex items-center justify-center px-4"
        style={{
          backgroundImage:
            "url('https://prohauz.bold-themes.com/plumbing/wp-content/uploads/sites/8/2018/09/featured_image.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto">
          <motion.div
            className="text-lg font-bold uppercase tracking-widest mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Home
          </motion.div>
          <motion.h1
            className="text-5xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Blog
          </motion.h1>
          <motion.div
            className="w-[90%] md:w-[30%] h-[2px] absolute top-[15%] left-1/2 -translate-x-1/2 border border-white opacity-20"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          />
        </div>
      </section>

      {/* Blog Content */}
      <section className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Blog List */}
        <motion.div
          className="lg:col-span-3 grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {currentBlogs.length > 0 ? (
            currentBlogs.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <BlogCard {...item} />
              </motion.div>
            ))
          ) : (
            <p className="col-span-full text-gray-500">No blogs found.</p>
          )}
        </motion.div>

        {/* Sidebar */}
        <motion.aside
          className="lg:col-span-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-xl font-bold mb-4 border-b pb-2">Latest Blogs</h2>
          <ul className="space-y-4">
            {blogData.slice(-3).reverse().map((blog) => (
              <motion.li
                key={blog.id}
                className="border-b pb-2"
                variants={itemVariants}
              >
                <Link
                  to={`/blog/${blog.id}`}
                  className="text-blue-600 hover:underline font-semibold"
                >
                  {blog.title}
                </Link>
                <p className="text-sm text-gray-500">{blog.date}</p>
              </motion.li>
            ))}
          </ul>
        </motion.aside>
      </section>

      {/* Pagination */}
      <motion.div
        className="flex justify-center mt-10 space-x-2 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        {[...Array(totalPages)].map((_, i) => (
          <motion.button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={`px-4 py-2 border rounded transition-colors duration-300 ${
              currentPage === i + 1
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-blue-600 border-blue-600 hover:bg-blue-100'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {i + 1}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default Blog;
