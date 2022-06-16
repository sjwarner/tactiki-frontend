import React from "react";
import BlackMoai from "../../../game/components/Pieces/BlackMoai";
import WhiteMoai from "../../../game/components/Pieces/WhiteMoai";

const Header = () => {
  return (
    <header className="py-5 bg-black text-white text-center flex flex-row justify-between">
      <div className="h-8 w-8 ml-8 mr-8 mt-auto mb-auto">
        <WhiteMoai />
      </div>
      <h1 className="font-bold text-2xl">
        <a href="/">TacTiki</a>
      </h1>
      <div className="h-8 w-8 ml-8 mr-8 mt-auto mb-auto">
        <BlackMoai />
      </div>
    </header>
  );
};

export default Header;
