import React, { useContext, useState } from "react";
import Navigation from "./Navigation";

import { Globe } from "lucide-react";
import { LangContext } from "@/contexts/LangContext";
import { Link } from "react-router-dom";

const Header = () => {
  const [showSelect, setShowSelect] = useState(false);

  const { toggleLang } = useContext(LangContext);

  return (
    <div className="w-full flex justify-around  bg-background items-center">
      <Link to={"/"}>
        <img src={"../assets/logo.png"} className="max-w-[200px] mt-4" />
      </Link>
      <div className="flex flex-col gap-4 lg:gap-0 ">
        <div className="flex gap-5 items-center justify-center">
          <Navigation />
          <Globe color="#b0148c" onClick={() => setShowSelect(!showSelect)} />
        </div>
        <select
          className={`${
            showSelect ? "visible" : "hidden"
          } self-end bg-background text-primary`}
          onChange={(evt) => {
            toggleLang(evt.target.value);
            setShowSelect(false);
          }}
        >
          <option value="en">English</option>
          <option value="fr">Francais</option>
          <option value="he">עברית</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
