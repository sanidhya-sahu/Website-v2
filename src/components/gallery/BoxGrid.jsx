import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "./Box";
import "./BoxGrid.css";

const BoxGrid = () => {
  const [boxes] = useState(["A", "B", "C", "D", "E", "F"]);
  const [columns, setColumns] = useState(3);
  const navigate = useNavigate();

  // Dynamically adjust columns based on window width
  const updateColumns = () => {
    if (window.innerWidth < 600) {
      setColumns(1); // 1 column for mobile view
    } else if (window.innerWidth < 900) {
      setColumns(2); // 2 columns for tablet-sized view
    } else {
      setColumns(3); // 3 columns for desktop view
    }
  };

  // Set up a listener to update columns on window resize
  useEffect(() => {
    updateColumns(); // Initial call
    window.addEventListener("resize", updateColumns);

    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const handleBoxClick = () => {
    navigate("/gallery");
  };

  return (
    <div
      className="grid-container"
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {boxes.map((box, index) => (
        <Box key={index} letter={box} handleClick={handleBoxClick} />
      ))}
    </div>
  );
};

export default BoxGrid;
