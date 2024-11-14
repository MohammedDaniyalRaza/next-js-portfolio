import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-black">
          My Portfolio
        </h1>
        <div className="hidden md:flex space-x-6">
          <Link
            to="heroSection"
            smooth={true}
            duration={500}
            className="text-black hover:text-gray-600 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-black hover:text-gray-600 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="text-black hover:text-gray-600 cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-black hover:text-gray-600 cursor-pointer"
          >
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-600 ${isOpen ? 'transform rotate-45' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu with animation */}
      <div
        className={`md:hidden bg-white shadow-md transition-transform duration-500 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
        style={{ transition: 'max-height 0.5s ease-in-out' }}
      >
        <div className="px-4 pb-4 flex flex-col space-y-2">
          <Link
            to="heroSection"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="text-black hover:text-gray-600 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="text-black hover:text-gray-600 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="text-black hover:text-gray-600 cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="text-black hover:text-gray-600 cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
