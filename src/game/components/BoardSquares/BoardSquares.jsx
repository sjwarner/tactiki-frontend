import React from "react";
import BoardSquare from "../BoardSquare/BoardSquare";

const BoardSquares = ({ gameState }) => {
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
                  key={y}
                />
              );
            })}
        </div>
      );
    });
};

export default BoardSquares;
