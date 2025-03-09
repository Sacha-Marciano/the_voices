import { singersDescriptions, theVoicesDescription } from "@/config";
import { LangContext } from "@/contexts/LangContext";
import React, { useContext } from "react";

const VoicesPage = () => {
  const { lang } = useContext(LangContext);
  const text = theVoicesDescription[lang];
  return (
    <div className="bg-white">
      <div className="relative max-h-[70vh] ">
        <img
          src="assets/singers/tous.png"
          className="w-full object-cover max-h-[70vh] "
        />
        <div className="flex items-center justify-center absolute inset-0">
          <h1 className=" font-extrabold text-4xl bg-primary p-2 rounded-md text-white">
            The Voices
          </h1>
        </div>
      </div>
      <div className="text-center space-y-4 mb-6 font-semibold">
        <h2 className="font-bold text-2xl">{text.title}</h2>
        <p>{text.p1}</p>
        <p>{text.p2}</p>
        <p>{text.p3}</p>
        <p>{text.p4}</p>
        <p>{text.p5}</p>
        <p>{text.p6}</p>
        <p>{text.p7}</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {singersDescriptions.map((item, index) => {
          return (
            <div key={index} className="flex gap-3">
              <img src={item.imageSrc} className="w-[50%] object-cover" />
              <div className="p-4 w-full">
                <h3 className="text-xl"> {item.name} </h3>
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
