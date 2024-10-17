import React from "react";
import "./Box.css";

const Box = ({ letter, handleClick }) => {
  return (
    <div className="box" onClick={handleClick}>
      {letter}
    </div>
  );
};

export default Box;
