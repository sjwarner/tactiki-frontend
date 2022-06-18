import React, { useState } from "react";
// import useSound from "use-sound";

import BoardSquares from "../BoardSquares/BoardSquares";
import BoardSidePane from "../SidePane/BoardSidePane/BoardSidePane";

import { InitialGameStateWhite } from "../../logic/InitialGameState";

// import moveSfx from "../../../sounds/move.wav";

const LocalBoard = () => {
  // const [playMoveSound] = useSound(moveSfx);

  // Stringify hack to deep clone InitialGameState - avoids mutation.
  const [gameState, setGameState] = useState(
    JSON.parse(JSON.stringify(InitialGameStateWhite))
  );

  return (
    <>
      <div className="board flex flex-row m-auto">
        <div className="content">
          <BoardSquares gameState={gameState} setGameState={setGameState} />
        </div>
      </div>
      <BoardSidePane />
    </>
  );
};

export default LocalBoard;
