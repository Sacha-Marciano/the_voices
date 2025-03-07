import { singersDescriptions, theVoicesDescription } from "@/config";
import { LangContext } from "@/contexts/LangContext";
import React, { useContext } from "react";

const VoicesPage = () => {
  const { lang } = useContext(LangContext);
  const text = theVoicesDescription[lang];
  return (
    <div>
      <div>
        <img />
        <h1>The Voices</h1>
      </div>
      <div>
        <h2>{text.title}</h2>
        <p>{text.p1}</p>
        <p>{text.p2}</p>
        <p>{text.p3}</p>
        <p>{text.p4}</p>
        <p>{text.p5}</p>
        <p>{text.p6}</p>
        <p>{text.p7}</p>
      </div>
      <div className="grid grid-cols-2">
        {singersDescriptions.map((item, index) => {
          return (
            <div key={index} className="flex">
              <img src={item.imageSrc} className="w-[50%] object-cover" />
              <div>
                <h3> {item.name} </h3>
                <p>{item.role[lang]} </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VoicesPage;
