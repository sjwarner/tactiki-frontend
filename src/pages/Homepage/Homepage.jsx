import React from "react";
import { Link } from "react-router-dom";

import Moai from "../../game/components/Pieces/Moai";

const Homepage = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <h1 className="text-xl font-bold">Welcome to TacTiki!</h1>
      <p>
        An abstract strategy game for 2 players, with a strong memory aspect
      </p>
      <div className="w-32 mt-4">
        <Moai />
      </div>
      <Link
        className="block mt-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        to="/local-multiplayer"
      >
        Local Multiplayer
      </Link>
    </div>
  );
};

export default Homepage;
