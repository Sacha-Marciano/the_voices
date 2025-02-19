import React from "react";
import { Link } from "react-router-dom";

const SingerCard = ({ name, imageSrc, role }) => {
  return (
    <Link
      to={"/voices"}
      className="relative flex justify-center cursor-pointer  transition-transform duration-300 ease-in-out hover:scale-110"
    >
      <img src={imageSrc} alt={name} className="max-h-[40vh] rounded-2xl" />
      <div className=" absolute bottom-2 bg-background-100 text-primary font-bold text-center rounded-lg p-2 space-y-2">
        <h2 className="text-2xl">{name}</h2>
        <p>{role}</p>
      </div>
    </Link>
  );
};

export default SingerCard;
