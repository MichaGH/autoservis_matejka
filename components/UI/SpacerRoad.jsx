"use client";

import { useEffect, useState } from "react";

const SpacerRoad = () => {
  const [lines, setLines] = useState(15);

  useEffect(() => {
    const updateLines = () => {
      const width = window.innerWidth;

      // Dynamické určenie počtu podľa breakpoints
      if (width < 640) setLines(6);   // sm
      else if (width < 768) setLines(10);  // md
      else if (width < 1024) setLines(12); // lg
      else setLines(15); // xl a viac
    };

    updateLines();
    window.addEventListener("resize", updateLines);
    return () => window.removeEventListener("resize", updateLines);
  }, []);

  return (
    <div className="relative my-12 h-8 w-full flex items-center justify-center">
      {/* Hlavný „cestný“ pruh */}
      <div className="absolute top-1/2 w-full h-10 bg-zinc-800 -translate-y-1/2"></div>

      {/* Pruhy ako stredové značky cesty */}
      <div className="absolute top-1/2 flex justify-between w-full px-8 -translate-y-1/2">
        {Array.from({ length: lines }).map((_, idx) => (
          <div key={idx} className="w-10 h-1 bg-zinc-400 rounded-full"></div>
        ))}
      </div>
    </div>
  );
};

export default SpacerRoad;
