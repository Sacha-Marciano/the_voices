import { LangContext } from "@/contexts/LangContext";
import React, { useContext } from "react";

// Find out whats going on fffff

const Concept = ({ isCard, name, imgSrc, info }) => {
  const { lang } = useContext(LangContext);

  if (isCard) {
    return (
      <div className=" h-full relative p-4 hover:scale-105 cursor-pointer transition-all">
        <h1 className="bg-primary p-1 font-bold rounded-t-md text-center">
          {name[lang]}
        </h1>
        <img
          src={imgSrc}
          className="h-[95%] w-[100%] object-cover border-b-8 border-b-primary rounded-b-md"
        ></img>
        {/* why do i need this for defining width */}
        <h1 className="w-[500px] bg-primary"></h1>
      </div>
    );
  } else {
    console.log(imgSrc);

    return (
      <div className="flex">
        <img src={"../" + imgSrc} alt="Concept photo" className="w-[50%]" />
        <div>
          <h1 className="border-b-4 border-b-primary">{name[lang]}</h1>
          {info.map((item, index) => {
            return (
              <div key={index} className="">
                <h2>{item[lang].title}</h2>
                {item[lang].description.map((item, index) => {
                  return <p key={index}>{item}</p>;
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Concept;
