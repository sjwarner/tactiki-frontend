import React, { useState } from "react";
import BoardSquare from "../BoardSquare/BoardSquare";

import Players from "../../logic/Players";
// import { isArrayInArray } from "../../logic/utils";

const BoardSquares = ({ gameState, setGameState }) => {
  const [turn, setTurn] = useState(Players.WHITE);
  // const [validMoves, setValidMoves] = useState([]);
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
    console.log(candidatePiece);
    if (
      (turn === Players.WHITE &&
        candidatePiece &&
        candidatePiece.piece === candidatePiece.piece.toUpperCase()) ||
      (turn === Players.BLACK &&
        candidatePiece &&
        candidatePiece.piece === candidatePiece.piece.toLowerCase())
    ) {
      setOriginRank(rank);
      setOriginFile(file);
      // TODO: Calculate valid moves
      // calculateValidMoves(
      //     rank,
      //     file,
      //     gameState,
      //     setValidMoves,
      //     playerOneFirstTurn || playerTwoFirstTurn
      // );
    }
  };

  const clearCandidatePiece = () => {
    setOriginRank(null);
    setOriginFile(null);
    // setValidMoves([]);
  };

  const movePiece = (destinationRank, destinationFile) => {
    // TODO: Calculate valid moves
    // if (isArrayInArray(validMoves, [destinationRank, destinationFile])) {
    let tmp = gameState;

    // TODO: Win condition check
    // If back row has 4 totems in player colour...

    tmp[destinationRank][destinationFile].unshift(
      gameState[originRank][originFile][0]
    );
    tmp[originRank][originFile].shift();
    setGameState(tmp);
    setOriginRank(null);
    setOriginFile(null);
    // setValidMoves([]);

    setTurn(turn === Players.WHITE ? Players.BLACK : Players.WHITE);
    // }
  };

  return Array(5)
    .fill(1)
    .map((el, x) => {
      return (
        <div id={`rank-${x}`} className="board-row flex flex-row" key={x}>
          {Array(4)
            .fill(1)
            .map((el, y) => {
              return (
                <BoardSquare
                  colour={(x + y) % 2 === 0 ? "black" : "white"}
                  pieces={gameState[x][y]}
                  onClick={() => {
                    // Online play, if in progress and is player turn - Offline play, if in progress and player turn undefined
                    // TODO: if (inProgress) {
                    if (true) {
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
