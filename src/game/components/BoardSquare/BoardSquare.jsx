import React from "react";
import { renderPiece } from "../../logic/utils";

const BoardSquare = ({ colour, pieces, selected, valid, onClick }) => {
  return (
    <div
      className={`square square-${colour} ${
        selected ? "square-selected" : ""
      } ${valid ? "square-valid" : ""} `}
      onClick={onClick}
    >
      {pieces.map((piece) => renderPiece(piece, pieces.length))}
    </div>
  );
};

export default BoardSquare;
