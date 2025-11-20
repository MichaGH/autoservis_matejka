"use client";

const SpacerFlag2 = ({
  squareSize = 12, // px
  rows = 2,        // how many full rows of squares you want visible
}) => {
  const height = rows * squareSize;
  const tile = squareSize * 2; // one full checker tile (2x2)

  return (
    <div
      aria-hidden="true"
      className="w-full"
      style={{
        height: `${height}px`,
        // checkerboard using a single repeating conic gradient
        backgroundImage: `
          repeating-conic-gradient(
            #000 0 25%,
            #e5e7eb 0 50%
          )
        `,
        backgroundSize: `${tile}px ${tile}px`,
        backgroundPosition: "center",
      }}
    />
  );
};

export default SpacerFlag2;
