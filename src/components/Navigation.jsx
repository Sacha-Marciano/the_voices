import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

const navItems = [
  "HOME",
  "THE VOICES",
  "OUR CONCEPT",
  "PICTURES",
  "OUR OPTIONS",
  "VIDEOS",
  "CONTACT US",
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center">
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={`/${item.replace(/ /g, "").toLowerCase()}`}
                className={({ isActive }) =>
                  `text-white uppercase font-bold text-sm tracking-wide ${
                    isActive ? "text-purple-500" : "hover:text-gray-300"
                  }`
                }
              >
                {item}
              </NavLink>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black py-4 absolute top-14 left-0 w-full flex flex-col items-center">
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={`/${item.replace(/ /g, "").toLowerCase()}`}
              className="text-white uppercase font-bold text-sm tracking-wide py-2"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
