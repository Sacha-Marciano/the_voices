import React, { useContext } from "react";
import { navLinks } from "@/config";
import { Link, useLocation } from "react-router-dom";
import { LangContext } from "@/contexts/LangContext";

const Navigation = () => {
  const { lang } = useContext(LangContext);
  const location = useLocation(); // Get current location

  console.log(location);

  return (
    <div className="flex gap-4 p-4">
      {navLinks.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`font-bold text-white hover:text-hover ${
            location.pathname === item.path ? "text-[#B0148C]" : ""
          }`}
        >
          {item.name[lang]}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
