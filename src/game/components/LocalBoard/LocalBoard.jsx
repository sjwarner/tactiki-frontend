import React, { useState } from "react";
// import useSound from "use-sound";

import BoardSquares from "../BoardSquares/BoardSquares";
import LocalBoardCaption from "../LocalBoardCaption/LocalBoardCaption";
import BoardSidePane from "../SidePane/BoardSidePane/BoardSidePane";

import { InitialGameStateWhite } from "../../logic/InitialGameState";
import Players from "../../logic/Players";
import TurnMove from "../../logic/TurnMove";

// import moveSfx from "../../../sounds/move.wav";

const LocalBoard = () => {
  // const [playMoveSound] = useSound(moveSfx);

  const [inProgress, setInProgress] = useState(false);
  const [playerTurn, setPlayerTurn] = useState(Players.WHITE);
  const [turnMoveNumber, setTurnMoveNumber] = useState(TurnMove.ONE);
  const [winner, setWinner] = useState(undefined);

  // Stringify hack to deep clone InitialGameState - avoids mutation.
  const [gameState, setGameState] = useState(
    JSON.parse(JSON.stringify(InitialGameStateWhite))
  );

  return (
    <>
      <div className="board flex flex-row m-auto">
        <div className="content">
          <BoardSquares
            gameState={gameState}
            setGameState={setGameState}
            inProgress={inProgress}
            setInProgress={setInProgress}
            playerTurn={playerTurn}
            setPlayerTurn={setPlayerTurn}
            turnMoveNumber={turnMoveNumber}
            setTurnMoveNumber={setTurnMoveNumber}
            setWinner={setWinner}
          />
          <LocalBoardCaption
            inProgress={inProgress}
            setInProgress={setInProgress}
            winner={winner}
            setWinner={setWinner}
            setGameState={setGameState}
            playerTurn={playerTurn}
            turnMoveNumber={turnMoveNumber}
          />
        </div>
      </div>
      <BoardSidePane />
    </>
  );
};

export default LocalBoard;
