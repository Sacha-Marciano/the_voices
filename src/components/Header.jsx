import React, { useContext } from "react";
import Navigation from "./Navigation";

import { Globe } from "lucide-react";
import { LangContext } from "@/contexts/LangContext";

const Header = () => {
  const { toggleLang } = useContext(LangContext);

  return (
    <div className="w-full flex justify-around  bg-background items-center">
      <img src={"../assets/logo.png"} className="max-w-[200px] mt-4" />
      <Navigation />
      <Globe color="#b0148c" onClick={toggleLang} />
    </div>
  );
};

export default Header;
