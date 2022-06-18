import Pieces from "./Pieces";
import Empty from "../components/Pieces/Empty";
import Moai from "../components/Pieces/Moai";
import Players from "./Players";

export const renderPiece = (piece, noOfPieces, index) => {
  switch (piece.piece) {
    case Pieces.WHITE_MOAI:
      return (
        <Moai
          colour="white"
          value={piece.value}
          noOfPieces={noOfPieces}
          key={index}
        />
      );
    case Pieces.BLACK_MOAI:
      return (
        <Moai
          colour="black"
          value={piece.value}
          noOfPieces={noOfPieces}
          key={index}
        />
      );
    default:
      return <Empty />;
  }
};

export const isArrayInArray = (arr, item) => {
  const item_as_string = JSON.stringify(item);

  return arr.some(function (ele) {
    return JSON.stringify(ele) === item_as_string;
  });
};

export const calculateValidMoves = (
  turn,
  rank,
  file,
  gameState,
  setValidMoves
) => {
  let validMoves = [];

  // TODO: Add all valid moves
  // TODO: Logic for can't jump on someone else's back-row piece
  if (turn === Players.WHITE) {
    validMoves.push([rank - 1, file]);
    validMoves.push([rank, file - 1]);
    validMoves.push([rank, file + 1]);
  }

  if (turn === Players.BLACK) {
    validMoves.push([rank + 1, file]);
    validMoves.push([rank, file - 1]);
    validMoves.push([rank, file + 1]);
  }

  setValidMoves(validMoves);
};
