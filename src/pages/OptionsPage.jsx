import React, { useContext, useState } from "react";

// TODO:
// FILL MISSING TEXT DESCRIPTIONS
// COMPLETE THE ONCLICK OF EACH OPTION

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
            className="text-center bg-white p-4 rounded-lg
          h-[70vh]"
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
          className="text-white font-bold text-4xl absolute top-5 right-12"
          onClick={() => setOpenOption(false)}
        >
          X
        </button>
        <button
          className="text-white font-bold text-4xl mr-5"
          onClick={() => setOptionToShow(optionToShow - 1)}
        >
          {`<`}
        </button>
        <img
          src={options[optionToShow].image}
          alt="Selected picture"
          className="w-[80%] h-[90%] "
        />
        <button
          className="text-white font-bold text-4xl ml-5"
          onClick={() => setOptionToShow(optionToShow + 1)}
        >
          {`>`}
        </button>
      </div>
    </div>
  );
};

export default OptionsPage;
