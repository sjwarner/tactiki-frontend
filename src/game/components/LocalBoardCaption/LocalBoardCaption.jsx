import React from "react";
import Caption from "../../../general/components/Caption/Caption";
import Button from "../../../general/components/Button/Button";

import Players from "../../logic/Players";
import { InitialGameStateWhite } from "../../logic/InitialGameState";

const LocalBoardCaption = ({
  inProgress,
  setInProgress,
  winner,
  setWinner,
  setGameState,
  playerTurn,
  turnMoveNumber,
}) => {
  const resetGame = () => {
    setInProgress(true);
    setWinner(null);

    setGameState(JSON.parse(JSON.stringify(InitialGameStateWhite)));
  };

  return (
    <div className="mt-4 mb-4">
      {winner && (
        <Caption>
          🎉 {winner === Players.WHITE ? "White" : "Black"} won! 🎉
        </Caption>
      )}
      {inProgress && (
        <Caption>
          {playerTurn === Players.WHITE ? "White" : "Black"}'s turn.
        </Caption>
      )}
      {!inProgress && (
        <div className="flex flex-row mb-4">
          <Button onClick={() => resetGame()}>
            {winner ? "Play again?" : "Start game"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default LocalBoardCaption;
