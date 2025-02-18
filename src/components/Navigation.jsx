import React from "react";

import { navLinks } from "@/config";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex  gap-4 w-full p-4">
      {navLinks.map((item) => {
        return (
          <Link
            to={`item.path`}
            className="font-bold text-secondary hover:text-hover"
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Navigation;
