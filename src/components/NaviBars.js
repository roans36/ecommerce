
import React, { useState } from 'react';

const NaviBars = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(prevState => !prevState);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <div>
          <a href="#" className="text-white font-bold text-xl">Logo</a>
        </div>
        <div className="flex md:hidden">
          <button
            onClick={toggleNav}
            className="text-white focus:outline-none focus:text-white"
            aria-label="Toggle navigation"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM4 9a1 1 0 100 2h12a1 1 0 100-2H4zm-1 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className={`md:flex flex-col md:flex-row md:items-center md:space-x-4 mt-4 md:mt-0 ${isNavOpen ? 'block' : 'hidden'}`}>
          <a href="#" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-300">Component 1</a>
          <a href="#" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-300">Component 2</a>
          <a href="#" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-300">Component 3</a>
          <a href="#" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-300">Component 4</a>
          <a href="#" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-300">Component 5</a>
        </div>
      </div>
    </nav>
  );
}

export default NaviBars;


