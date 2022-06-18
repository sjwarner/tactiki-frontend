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
      {pieces.map((piece, index) => renderPiece(piece, pieces.length, index))}
    </div>
  );
};

export default BoardSquare;
