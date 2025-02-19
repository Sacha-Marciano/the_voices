import React, { useContext } from "react";
import Navigation from "./Navigation";

import { Globe } from "lucide-react";
import { LangContext } from "@/contexts/LangContext";

const Header = () => {
  const { toggleLang } = useContext(LangContext);

  return (
    <div className="w-full flex justify-around  bg-background items-center">
      <div className="text-primary text-lg font-bold p-4">Logo</div>{" "}
      <Navigation />
      <Globe color="#b0148c" onClick={toggleLang} />
    </div>
  );
};

export default Header;
