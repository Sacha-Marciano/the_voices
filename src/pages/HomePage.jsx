import React, { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";

import { homeDescription } from "../config";
import { LangContext } from "@/contexts/LangContext";

import logo from "../assets/logo.png";

const HomePage = () => {
  const { lang } = useContext(LangContext);

  const [playing, setPlaying] = useState(false);

  const text = homeDescription[lang];

  useEffect(() => {
    setPlaying(true);
  }, []);

  return (
    <div className="">
      {/* <ReactPlayer
        url={"https://youtu.be/aXtZP_-frJ4"}
        height={500}
        width={"100vw"}
        playing={playing}
      /> */}
      <div className="text-white text-center space-y-6 relative">
        <img
          src={logo}
          className="absolute opacity-10 lg:max-h-[50vh] lg:left-[25vw]"
        />
        <h1 className=" text-4xl text-primary font-bold ">{text.title}</h1>
        <p>{text.p1}</p>
        <p>{text.p2}</p>
        <p>{text.p3}</p>
        <p>{text.p4}</p>
      </div>
    </div>
  );
};

export default HomePage;
