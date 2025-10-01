import { Link, useLocation } from 'react-router-dom';
import { MdPhone, MdMenu, MdClose } from 'react-icons/md';
import { useEffect, useState } from 'react';
import GetInTouchForm from './GetInForm';

const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'BLOG', path: '/blog' },
  { name: 'CONTACT', path: '/contact' },
];

export default function Navbar() {
  const [opened, setOpened] = useState(false); // Form modal open state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile menu state
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md text-black' : 'bg-white/90 text-black'
        }`}
      >
        <div
          className={`max-w-[1200px] mx-auto flex items-center justify-between rounded-md backdrop-blur-md px-4 md:px-6 transition-all duration-300 ${
            scrolled ? 'h-14' : 'h-16 md:h-20'
          }`}
        >
          {/* Logo */}
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="">
              <img
                src={
                  scrolled
                    ? 'https://prohauz.bold-themes.com/plumbing/wp-content/uploads/sites/8/2018/11/logo-dark.png'
                    : 'https://prohauz.bold-themes.com/plumbing/wp-content/uploads/sites/8/2018/09/logo-white.png'
                }
                alt="Logo"
                className={`object-contain transition-all duration-300 ${
                  scrolled ? 'w-24 h-10' : 'w-28 h-12 md:w-40 md:h-20'
                }`}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-4 w-1/3 justify-center items-center text-sm font-medium">
            {navLinks.map((link, idx) => (
              <div key={link.name} className="flex items-center gap-2">
                <Link
                  to={link.path}
                  className={`hover:text-blue-400 ${
                    pathname === link.path
                      ? 'text-blue-500 underline'
                      : scrolled
                      ? 'text-black'
                      : 'text-gray-800'
                  }`}
                >
                  {link.name}
                </Link>
                {idx < navLinks.length - 1 && (
                  <span className={`${scrolled ? 'text-gray-400' : 'text-gray-600'}`}>
                    /
                  </span>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Call & Button */}
          <div className="hidden md:flex w-1/3 items-center justify-end gap-6">
            <a href='tel:1234567890'>
              <span
                className={`text-sm flex items-center gap-2 ${
                  scrolled ? 'text-gray-700' : 'text-gray-600'
                }`}
              >
                <MdPhone className="text-lg" />
                <span className={scrolled ? 'text-black' : 'text-gray-800'}>
                  800 555 284
                </span>
              </span>
            </a>
            <button
              onClick={() => setOpened(true)}
              className="bg-blue-400 cursor-pointer hover:bg-blue-500 text-white px-4 py-2 rounded-md font-semibold text-sm"
            >
              BOOK SERVICE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <MdClose className="text-2xl" />
            ) : (
              <MdMenu className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 py-3 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block py-2 text-sm font-medium ${
                    pathname === link.path
                      ? 'text-blue-500'
                      : 'text-gray-700 hover:text-blue-400'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 border-t border-gray-200 flex flex-col space-y-3">
                <a href='tel:1234567890' className="flex items-center gap-2 text-gray-700">
                  <MdPhone className="text-lg" />
                  <span>800 555 284</span>
                </a>
                <button
                  onClick={() => {
                    setOpened(true);
                    setMobileMenuOpen(false);
                  }}
                  className="bg-blue-400 cursor-pointer hover:bg-blue-500 text-white px-4 py-2 rounded-md font-semibold text-sm w-full"
                >
                  BOOK SERVICE
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Modal for Get in Touch */}
      {opened && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setOpened(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold"
            >
              ×
            </button>
            <GetInTouchForm />
          </div>
        </div>
      )}
    </>
  );
}