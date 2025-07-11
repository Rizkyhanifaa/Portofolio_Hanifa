import React, { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold text-primary-light">Hanifa</div>

        {/* Menu Icon */}
        <div
          className="md:hidden text-3xl text-gray-700 cursor-pointer"
          onClick={handleToggle}
        >
          ☰
        </div>

        {/* Nav Links */}
        <nav
          className={`absolute top-16 left-0 w-full bg-white shadow-md md:shadow-none md:static md:w-auto md:flex ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-2">
            {["Home", "About", "Skills", "Projects", "Bootcamp", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  onClick={handleLinkClick}
                  className="block px-4 py-2 text-gray-700 hover:text-cyan-500 transition-colors duration-200 cursor-pointer"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
