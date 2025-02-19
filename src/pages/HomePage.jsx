import React, { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";

import { homeDescription, singersDescriptions } from "../config";
import { LangContext } from "@/contexts/LangContext";

import SingerCard from "@/components/SingerCard";

const HomePage = () => {
  const { lang } = useContext(LangContext);

  const text = homeDescription[lang];

  return (
    <div className="flex flex-col items-center">
      {/* <ReactPlayer
        url={"https://youtu.be/aXtZP_-frJ4"}
        height={500}
        width={"100vw"}
      /> */}
      <div className="text-white text-center space-y-6 relative mb-6 w-full p-10">
        <img
          src="/assets/logo.png"
          className="absolute inset-0 w-full h-full object-contain opacity-10"
          alt="Logo Background"
        />
        <h1 className=" text-4xl text-primary font-bold ">{text.title}</h1>
        <p>{text.p1}</p>
        <p>{text.p2}</p>
        <p>{text.p3}</p>
        <p>{text.p4}</p>
      </div>
      <div className=" bg-primary p-4 w-full text-center">
        <h2 className="font-bold text-3xl mb-6">
          {lang === "en" ? "Our Members" : "Nos Artistes"}
        </h2>
        <div className="flex gap-4 justify-around">
          {singersDescriptions.map((item, index) => {
            return (
              <SingerCard
                key={index}
                name={item.name}
                imageSrc={item.imageSrc}
                role={item.role[lang]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
