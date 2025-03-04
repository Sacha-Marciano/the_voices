import { LangContext } from "@/contexts/LangContext";
import React, { useContext } from "react";

// Find out whats going on fffff

const Concept = (isCard, name, imgSrc, info) => {
  const { lang } = useContext(LangContext);

  if (isCard) {
    return (
      <div className=" h-full" onClick={console.log(name)}>
        <img src={imgSrc} className="h-full w-full" height={200} width={200} />
        <h1>{name[lang]}</h1>
      </div>
    );
  } else {
    return (
      <div className="flex">
        <img src={imgSrc} />
        <div>
          <h1 className="border-b-4 border-b-primary">{name}</h1>
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
