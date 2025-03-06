import React, { useContext, useState } from "react";
import { navLinks } from "@/config";
import { Link, useLocation } from "react-router-dom";
import { LangContext } from "@/contexts/LangContext";
import { Menu } from "lucide-react";

const Navigation = () => {
  const { lang } = useContext(LangContext);
  const location = useLocation(); // Get current location

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className=" lg:hidden">
        <Menu className="text-primary" onClick={() => setMenuOpen(true)} />
      </div>
      <div
        className={`${
          menuOpen ? "flex flex-col" : "hidden"
        } fixed top-0 bottom-0 right-0 w-[50%] bg-black text-white`}
      >
        <button
          className="text-4xl font-extrabold absolute top-1 right-2"
          onClick={() => setMenuOpen(false)}
        >
          X
        </button>
      </div>
      <div className=" gap-4 p-4 hidden lg:flex">
        {navLinks.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`font-bold text-white hover:text-hover ${
              location.pathname === item.path
                ? "bg-primary bg-clip-text text-transparent"
                : ""
            }`}
          >
            {item.name[lang]}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
