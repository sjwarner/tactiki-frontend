import React, { useState } from "react";
import BoardSquare from "../BoardSquare/BoardSquare";

import Players from "../../logic/Players";
import TurnMove from "../../logic/TurnMove";
import { calculateValidMoves, isArrayInArray } from "../../logic/utils";
import Pieces from "../../logic/Pieces";

const BoardSquares = ({
  gameState,
  setGameState,
  inProgress,
  setInProgress,
  playerTurn,
  setPlayerTurn,
  turnMoveNumber,
  setTurnMoveNumber,
  setWinner,
}) => {
  const [validMoves, setValidMoves] = useState([]);
  const [originRank, setOriginRank] = useState(null);
  const [originFile, setOriginFile] = useState(null);

  const makeMove = (rank, file) => {
    originRank === null && originFile === null
      ? selectCandidatePiece(rank, file)
      : originRank === rank && originFile === file
      ? clearCandidatePiece()
      : movePiece(rank, file);
  };

  const selectCandidatePiece = (rank, file) => {
    let candidatePiece = gameState[rank][file]?.[0];

    if (
      (playerTurn === Players.WHITE &&
        candidatePiece &&
        candidatePiece.colour === Pieces.WHITE_MOAI) ||
      (playerTurn === Players.BLACK &&
        candidatePiece &&
        candidatePiece.colour === Pieces.BLACK_MOAI)
    ) {
      setOriginRank(rank);
      setOriginFile(file);

      // TODO: Complete calculation of valid moves
      calculateValidMoves(playerTurn, rank, file, gameState, setValidMoves);
    }
  };

  const clearCandidatePiece = () => {
    setOriginRank(null);
    setOriginFile(null);
    setValidMoves([]);
  };

  const movePiece = (destinationRank, destinationFile) => {
    // TODO: Calculate valid moves
    if (isArrayInArray(validMoves, [destinationRank, destinationFile])) {
      let tmp = gameState;

      tmp[destinationRank][destinationFile].unshift(
        gameState[originRank][originFile][0]
      );
      tmp[originRank][originFile].shift();
      setGameState(tmp);
      setOriginRank(null);
      setOriginFile(null);
      setValidMoves([]);

      if (
        playerTurn === Players.WHITE &&
        gameState[0]
          .map(
            (totem) =>
              totem.length === 4 &&
              totem.every((tiki) => tiki.colour === Pieces.WHITE_MOAI)
          )
          .includes(true)
      ) {
        setWinner(Players.WHITE);
        setInProgress(false);
      }

      if (
        playerTurn === Players.BLACK &&
        gameState[4]
          .map(
            (totem) =>
              totem.length === 4 &&
              totem.every((tiki) => tiki.colour === Pieces.BLACK_MOAI)
          )
          .includes(true)
      ) {
        setWinner(Players.BLACK);
        setInProgress(false);
      }

      if (turnMoveNumber === TurnMove.ONE) {
        setTurnMoveNumber(TurnMove.TWO);
      } else {
        setPlayerTurn(
          playerTurn === Players.WHITE ? Players.BLACK : Players.WHITE
        );
        setTurnMoveNumber(TurnMove.ONE);
      }
    }
  };

  return Array(5)
    .fill(1)
    .map((el, x) => {
      return (
        <div
          id={`rank-${x}`}
          className="board-row flex flex-row justify-center"
          key={x}
        >
          {Array(4)
            .fill(1)
            .map((el, y) => {
              return (
                <BoardSquare
                  colour={(x + y) % 2 === 0 ? "black" : "white"}
                  pieces={gameState[x][y]}
                  selected={x === originRank && y === originFile}
                  valid={isArrayInArray(validMoves, [x, y])}
                  onClick={() => {
                    // Online play, if in progress and is player playerTurn - Offline play, if in progress and player playerTurn undefined
                    if (inProgress) {
                      makeMove(x, y);
                    }
                  }}
                  key={y}
                />
              );
            })}
        </div>
      );
    });
};

export default BoardSquares;
