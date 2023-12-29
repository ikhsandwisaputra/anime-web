// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link to="/anime-web/">Logo</Link>
        </div>
        <div className="lg:hidden">
          <button
            className="text-white hover:text-gray-300 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
        <div className={`lg:flex space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <Link to="/anime-web/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/anime-web/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link to="/anime-web/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
