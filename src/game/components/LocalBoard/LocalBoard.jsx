import React from "react";
import useSound from "use-sound";

import BoardSquares from "../BoardSquares/BoardSquares";
import BoardSidePane from "../SidePane/BoardSidePane/BoardSidePane";

import { InitialGameStateWhite } from "../../logic/InitialGameState";

import moveSfx from "../../../sounds/move.wav";

const LocalBoard = () => {
  // const [playMoveSound] = useSound(moveSfx);

  return (
    <>
      <div className="board flex flex-row m-auto">
        <div className="content">
          <BoardSquares gameState={InitialGameStateWhite} />
        </div>
      </div>
      <BoardSidePane />
    </>
  );
};

export default LocalBoard;
