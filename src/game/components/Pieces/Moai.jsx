import React from "react";
import Colours from "../../logic/Colours";

const Moai = ({ colour, value, noOfPieces }) => {
  const pieceColour = colour === Colours.WHITE ? "#fff" : "#000";

  // TODO: Tidy
  // Assign heightClass as string rather than interpolating
  // Tailwind will not allow class name interpolation
  let heightClass;
  switch (noOfPieces) {
    case 2:
      heightClass = "h-1/2";
      break;
    case 3:
      heightClass = "h-1/3";
      break;
    case 4:
      heightClass = "h-1/4";
      break;
    default:
      heightClass = "h-full";
      break;
  }

  return (
    <div className={`flex flex-row ${heightClass}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        version="1.1"
        width="100%"
        height="100%"
      >
        <g className="" transform="translate(0,0)">
          <path
            d="M158.3 20.57c-8.7.16-16.5 1.99-21.4 5.02-5.1 3.04-7.8 6.53-8.4 13.55-5.6 53.23-5.8 112.96.1 165.46 1.4 12.8 3.3 25.2 5.5 36.9 3.6 6.4 10.6 11.1 17.4 12.3 4.7.9 8.4.1 10.3-1.2 1.8-1.4 3.4-3.2 2.8-9.6-2.7-38.2-7.4-67.8-10.4-151.14l18.6-.62c3 82.76 7.4 111.56 10.4 150.26.9 11.1-3.3 20.9-10.6 26.1-7.2 5.3-16.3 6-24.6 4.5-2.6-.5-5-1.3-7.6-2.2 6.4 23.8 14.4 43.3 24 56.2 31.4 42.2 78.1 71 121.9 83.2 40.9 11.3 78.3 7.7 98.5-9-6.4-18.1-15.4-29-41.1-45.6l-6.1-3.9 9.6-28.6-47.1-1.8 33.4-32.9-39.5-22.9 20.7-6c30.4-9 56.3-17.3 73-28-49.9-21.6-79.3-37.3-116-78.3l-7.6-8.5 9.7-5.8c11.8-6.9 15-13.9 16.6-22.9.9-5.6.8-12 .8-18.57-9.8 2.7-21.1 6.87-31.7 11.87-21.6 10-42.4 23.9-47.1 29.3l-13.9-12.4c9.8-11 30.1-23 53-33.73 8.7-4.03 17.5-7.85 26.1-10.87-16.7-11.21-47.9-32.25-70-47.19-10-6.71-31.6-13.27-49.3-12.94zm3.9 332.33c-14.2 55.3-29.6 98.6-34.5 112.1 14.8 9.2 46.7 17.9 83.7 22.4 38.4 4.4 82.2 5.1 120.7 2.5-3-19.3-.7-36.4 4.7-55.3-17.5.5-36.4-2.2-55.5-7.4-42.2-11.8-86-37-119.1-74.3z"
            fill={pieceColour}
            stroke="#d4af37"
            strokeLinejoin="round"
            strokeWidth="10px"
          />
        </g>
      </svg>
      <span className="text-amber-400 text-2xl m-1 mt-auto mb-auto">
        {value}
      </span>
    </div>
  );
};

export default Moai;
