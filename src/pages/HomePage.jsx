import React, { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";

import { homeDescription, singersDescriptions } from "../config";
import { LangContext } from "@/contexts/LangContext";

import SingerCard from "@/components/SingerCard";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { lang } = useContext(LangContext);

  const text = homeDescription[lang];

  return (
    <div className="flex flex-col items-center">
      {/* Welcome video */}
      {/* <ReactPlayer
        url={"https://youtu.be/aXtZP_-frJ4"}
        height={500}
        width={"100vw"}
      /> */}
      {/* Title and description */}
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
      {/* Members */}
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
      {/* Concepts */}
      {/* Concepts */}
      <div className="bg-background h-[200px] flex w-full p-4">
        <div className="h-full flex-[1_1_33.33%] flex flex-col items-center justify-center gap-5 text-white border-r-2">
          <h2 className="text-3xl font-bold">Formules</h2>
          <Link to={"/options"} className=" border-2 p-2">
            {lang === "en" ? "Our Formules" : "Nos Formules"}
          </Link>
        </div>
        <div className=" text-white h-full flex-[2_1_66.67%] flex items-center justify-center overflow-y-scroll">
          {new Array(20).fill(null).map((_, i) => {
            return (
              <div className="w-[200px]">
                <img src="/assets/logo.png" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
