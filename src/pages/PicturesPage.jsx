import React, { useContext, useState } from "react";

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
import { LangContext } from "@/contexts/LangContext";

const pics = [
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
];

const PicturesPage = () => {
  const { lang } = useContext(LangContext);

  const [openImg, setOpenImg] = useState(false);
  const [imgToShow, setImgToShow] = useState(1);

  return (
    <div className="relative">
      <h1 className="text-3xl text-primary text-center font-bold mb-4">
        {lang === "en" ? "Our Pictures" : "Nos Photos"}
      </h1>
      <div className="flex flex-wrap justify-center gap-3">
        {pics.map((img, index) => (
          <img
            src={img}
            alt="Image from picture gallery"
            className="max-w-[300px] cursor-pointer"
            onClick={async () => {
              setImgToShow(index);
              setOpenImg(true);
            }}
          />
        ))}
      </div>
      <div
        className={`h-full w-full fixed inset-0 bg-black ${
          openImg ? "flex justify-center items-center" : "hidden"
        }`}
        // onClick={() => setOpenImg(false)}
        // TODO : find out how to make only the outside of the img setOpen to false and not the entire div
      >
        <button
          className="text-white font-bold text-4xl absolute top-5 right-12"
          onClick={() => setOpenImg(false)}
        >
          X
        </button>
        <button
          className="text-white font-bold text-4xl mr-5"
          onClick={() => setImgToShow(imgToShow - 1)}
        >
          {`<`}
        </button>
        <img
          src={pics[imgToShow]}
          alt="Selected picture"
          className="w-[80%] h-[90%] "
        />
        <button
          className="text-white font-bold text-4xl ml-5"
          onClick={() => setImgToShow(imgToShow + 1)}
        >
          {`>`}
        </button>
      </div>
    </div>
  );
};

export default PicturesPage;
