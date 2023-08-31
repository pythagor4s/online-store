import React from "react";

export default function Square({ val, chooseSquare }) {
  return (
    <div /* className="square" */
    className={val === "X" ? "x" : "o" }
    onClick={chooseSquare}>
      {val}
    </div>
  );
}