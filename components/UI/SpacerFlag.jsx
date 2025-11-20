"use client";

import { useEffect, useState } from "react";



const SpacerFlag = ({ height }) => {
  const [cols, setCols] = useState(10);
  const rows = 2;

  useEffect(() => {
    const updateCols = () => {
      const width = window.innerWidth;
      if (width < 640) setCols(4); // sm
      else if (width < 768) setCols(6); // md
      else if (width < 1024) setCols(8); // lg
      else setCols(10); // xl a viac
    };

    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);

  const cells = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const isBlack = (row + col) % 2 === 1;
      cells.push(
        <div
          key={`${row}-${col}`}
          className={`${isBlack ? "bg-black" : "bg-zinc-300"}`}
        />
      );
    }
  }

  return (
    <div
      className="w-full grid"
      style={{
        height,
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
    >
      {cells}
    </div>
  );
};

export default SpacerFlag;
