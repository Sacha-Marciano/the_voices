import React, { useContext } from "react";
import Navigation from "./Navigation";

import { Globe } from "lucide-react";
import { LangContext } from "@/contexts/LangContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { toggleLang } = useContext(LangContext);

  return (
    <div className="w-full flex justify-around  bg-background items-center">
      <Link to={"/"}>
        <img src={"../assets/logo.png"} className="max-w-[200px] mt-4" />
      </Link>
      <div className="flex gap-5">
        <Navigation />
        <Globe color="#b0148c" onClick={toggleLang} />
      </div>
    </div>
  );
};

export default Header;
