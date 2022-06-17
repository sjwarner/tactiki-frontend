import React from "react";
import BoardSquare from "../BoardSquare/BoardSquare";

const BoardSquares = () => {
  return Array(5)
    .fill(1)
    .map((el, x) => {
      return (
        <div id={`rank-${x}`} className="board-row flex flex-row" key={x}>
          {Array(4)
            .fill(1)
            .map((el, y) => {
              return <BoardSquare key={y} />;
            })}
        </div>
      );
    });
};

export default BoardSquares;
