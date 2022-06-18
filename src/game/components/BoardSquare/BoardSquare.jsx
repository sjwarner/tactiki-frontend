import React from "react";
import { renderPiece } from "../../logic/utils";
import Empty from "../Pieces/Empty";

const BoardSquare = ({ colour, pieces, selected, valid, onClick }) => {
  return (
    <div
      className={`square square-${colour} ${
        selected ? "square-selected" : ""
      } ${valid ? "square-valid" : ""} `}
      onClick={onClick}
    >
      {pieces.length ? (
        pieces.map((piece, index) => renderPiece(piece, pieces.length, index))
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default BoardSquare;
