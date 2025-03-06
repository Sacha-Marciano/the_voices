import React, { useContext, useState } from "react";

// TODO:
// FILL MISSING TEXT DESCRIPTIONS
// RESOLVE TEXT OVERFLOW SOME WAY

import { options } from "@/config";
import { LangContext } from "@/contexts/LangContext";

const OptionsPage = () => {
  const { lang } = useContext(LangContext);

  const [optionToShow, setOptionToShow] = useState(1);
  const [openOption, setOpenOption] = useState(false);

  return (
    <div className="p-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {options.map((item, index) => {
        return (
          <div
            key={index}
            className="text-center bg-white p-4 rounded-lg
          h-[80vh] text-ellipsis cursor-pointer"
            onClick={async () => {
              setOptionToShow(index);
              setOpenOption(true);
            }}
          >
            <img
              src={item.image}
              alt={item[lang].name}
              className="object-cover h-[80%] max-h-[70%]"
            />
            <h2 className="text-3xl font-bold text-primary">
              {item[lang].name}{" "}
            </h2>
            <p>{item[lang].description}</p>
          </div>
        );
      })}
      <div
        className={`h-full w-full fixed inset-0 bg-black ${
          openOption ? "flex justify-center items-center" : "hidden"
        }`}
        // onClick={() => setOpenImg(false)}
        // TODO : find out how to make only the outside of the img setOpen to false and not the entire div
      >
        <button
          className="text-white font-bold text-4xl absolute top-2 right-12"
          onClick={() => setOpenOption(false)}
        >
          X
        </button>
        <button
          className="text-white font-bold text-4xl mx-5"
          onClick={() => {
            options[optionToShow - 1]
              ? setOptionToShow(optionToShow - 1)
              : setOptionToShow(options.length - 1);
          }}
        >
          {`<`}
        </button>
        <div className="flex flex-col md:flex-row md:h-[80vh] p-4 bg-background">
          <img
            src={options[optionToShow].image}
            alt="Selected picture"
            className="md:w-[60%] object-cover "
          />
          <div className="p-4 text-center w-full">
            <h1 className="text-primary font-bold text-3xl">
              {options[optionToShow][lang].name}
            </h1>
            <p className="text-white mt-5">
              {options[optionToShow][lang].description}
            </p>
          </div>
        </div>
        <button
          className="text-white font-bold text-4xl mx-5"
          onClick={() => {
            options[optionToShow + 1]
              ? setOptionToShow(optionToShow + 1)
              : setOptionToShow(0);
          }}
        >
          {`>`}
        </button>
      </div>
    </div>
  );
};

export default OptionsPage;
