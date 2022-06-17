import React from "react";
import { renderPiece } from "../../logic/utils";

const BoardSquare = ({ colour, pieces }) => {
  return (
    <div className={`flex flex-col square square-${colour}`}>
      {pieces.map((piece) => renderPiece(piece, pieces.length))}
    </div>
  );
};

export default BoardSquare;
