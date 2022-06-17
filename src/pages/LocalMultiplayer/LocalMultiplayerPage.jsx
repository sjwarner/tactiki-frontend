import React from "react";
import LocalBoard from "../../game/components/LocalBoard/LocalBoard";

const LocalMultiplayerPage = () => {
  return (
    <div className="app p-8 px-12 flex flex-col lg:flex-row justify-center items-center w-full">
      <LocalBoard />
    </div>
  );
};

export default LocalMultiplayerPage;
