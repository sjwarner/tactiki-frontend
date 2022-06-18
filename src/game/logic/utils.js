import Pieces from "./Pieces";
import Empty from "../components/Pieces/Empty";
import Moai from "../components/Pieces/Moai";

export const renderPiece = (piece, noOfPieces) => {
  switch (piece.piece) {
    case Pieces.WHITE_MOAI:
      return (
        <Moai colour="white" value={piece.value} noOfPieces={noOfPieces} />
      );
    case Pieces.BLACK_MOAI:
      return (
        <Moai colour="black" value={piece.value} noOfPieces={noOfPieces} />
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
