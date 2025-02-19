import React, { useContext } from "react";

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
import img10 from "../assets/10.jpg";
import img11 from "../assets/11.jpg";
import img12 from "../assets/12.jpg";
import img13 from "../assets/13.jpg";
import img14 from "../assets/14.jpg";
import img15 from "../assets/15.jpg";
import img16 from "../assets/16.jpg";
import img17 from "../assets/17.jpg";
import img18 from "../assets/18.jpg";
import img19 from "../assets/19.jpg";
import img20 from "../assets/20.jpg";
import img21 from "../assets/21.jpg";
import img22 from "../assets/22.jpg";
import img23 from "../assets/23.jpg";
import img24 from "../assets/24.jpg";
import img26 from "../assets/26.jpg";
import { Link } from "react-router-dom";
import { LangContext } from "@/contexts/LangContext";
const PhotoGrid = () => {
  const { lang } = useContext(LangContext);

  return (
    <div className="w-full relative flex items-center justify-center">
      <div className="bg-[rgba(255,255,255,0.3)] absolute top-0 bottom-0 left-0 right-0 p-6 flex flex-col items-center justify-center gap-6 text-primary">
        <h2 className="text-9xl font-bold">
          {" "}
          {lang === "en" ? "Galery" : "Galerie"}{" "}
        </h2>
        <Link
          to={"/pictures"}
          className="border-4 border-primary p-2 text-3xl font-bold rounded-md bg-white"
        >
          {lang === "en" ? "Pictures" : "Photos"}
        </Link>
      </div>
      <div className="grid grid-cols-5 w-full">
        {[
          img1,
          img2,
          img3,
          img4,
          img5,
          img6,
          img7,
          img8,
          img9,
          img10,
          img11,
          img12,
          img13,
          img14,
          img15,
          img16,
          img17,
          img18,
          img19,
          img20,
          img21,
          img22,
          img23,
          img24,
          img26,
        ].map((img, index) => (
          <div key={index} className="h-[145px] w-full">
            <img
              src={img}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;
