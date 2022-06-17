import React from "react";
import Moai from "../../../game/components/Pieces/Moai";
import Colours from "../../../game/logic/Colours";

const Header = () => {
  return (
    <header className="py-5 bg-black text-white text-center flex flex-row justify-between">
      <div className="h-8 w-8 ml-8 mr-8 mt-auto mb-auto">
        <Moai colour={Colours.WHITE} />
      </div>
      <h1 className="font-bold text-2xl">
        <a href="/">TacTiki</a>
      </h1>
      <div className="h-8 w-8 ml-8 mr-8 mt-auto mb-auto">
        <Moai colour={Colours.BLACK} />
      </div>
    </header>
  );
};

export default Header;
