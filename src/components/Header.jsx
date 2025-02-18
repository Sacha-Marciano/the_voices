import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="w-full flex justify-between bg-black">
      <div className="text-primary text-lg font-bold p-4">Logo</div>{" "}
      <Navigation />
    </div>
  );
};

export default Header;
