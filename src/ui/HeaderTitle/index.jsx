import { useState, useEffect } from "react";
import "./HeaderTitle.css";

const HeaderTitle = () => {
  const [text, setText] = useState("MERN Stack Developer");
  const [line, setLine] = useState(1); // Track which line we're on

  useEffect(() => {
    // Set up a loop to change the text every 3 seconds
    const interval = setInterval(() => {
      setLine((prevLine) => {
        if (prevLine === 1) {
          setText("I Love JavaScript");
          return 2; // Move to second line
        } else if (prevLine === 2) {
          setText("Coding Enthusiast");
          return 3; // Move to third line
        } else {
          setText("MERN Stack Developer");
          return 1; // Loop back to first line
        }
      });
    }, 1000); // Change every 3 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <svg
      width="614"
      height="300"
      viewBox="0 0 614 390"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="header__title"
    >
      {/* Transparent Background */}
      <rect width="614" height="390" fill="none" />

      {/* Cursor Animation */}
      <g id="cursor">
        <path
          d="M453.383 343L448 317L471 331L459.745 333.5L453.383 343Z"
          fill="#373737"
          stroke="white"
          strokeWidth="1"
        />
      </g>

      {/* SVG Icons */}
      <g id="icons">
        {text === "MERN Stack Developer" && (
          <g style={{ position: "absolute", top: "150px", left: "50%", transform: "translateX(-50%)" }}>
            {/* Laptop Icon */}
            <rect x="0" y="0" width="30" height="20" fill="white" />
            <rect x="0" y="20" width="30" height="10" fill="white" />
            <line x1="5" y1="30" x2="5" y2="40" stroke="white" strokeWidth="2" />
            <line x1="25" y1="30" x2="25" y2="40" stroke="white" strokeWidth="2" />
          </g>
        )}
        {text === "I Love JavaScript" && (
          <g style={{ position: "absolute", top: "150px", left: "50%", transform: "translateX(-50%)" }}>
            {/* Heart Icon */}
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="white"
              style={{ transform: "scale(2)" }}
            />
          </g>
        )}
        {text === "Coding Enthusiast" && (
          <g style={{ position: "absolute", top: "150px", left: "50%", transform: "translateX(-50%)" }}>
            {/* Rocket Icon */}
            <path
              d="M12 0C7.03 0 3.5 3.5 3.5 7.5C3.5 11.5 7 15 11 15C15 15 18.5 11.5 18.5 7.5C18.5 3.5 15 0 12 0ZM12 13C9.52 13 7.5 10.8 7.5 8.5C7.5 6.2 9.52 4 12 4C14.48 4 16.5 6.2 16.5 8.5C16.5 10.8 14.48 13 12 13ZM12 1C10.34 1 9 2.34 9 4C9 5.66 10.34 7 12 7C13.66 7 15 5.66 15 4C15 2.34 13.66 1 12 1Z"
              fill="white"
              style={{ transform: "scale(2)" }}
            />
          </g>
        )}
      </g>

      {/* Centered Text with dynamic font style and color */}
      <g id="text">
        {/* First line */}
        {line === 1 && (
          <text
            x="307" // Centered horizontally
            y="150" // First line's vertical position
            fontSize="4rem" // Font size like <h1>
            fontFamily="'Poppins', sans-serif"
            fontWeight="900"
            fill="url(#textGradient)"
            textAnchor="middle"
            letterSpacing="2"
          >
            Hi, I am Pankaj Sharma
          </text>
        )}

        {/* Second line */}
        {line === 2 && (
          <text
            x="307" // Centered horizontally
            y="220" // Second line's vertical position
            fontSize="4rem" // Font size like <h1>
            fontFamily="'Poppins', sans-serif"
            fontWeight="900"
            fill="url(#textGradient)"
            textAnchor="middle"
            letterSpacing="2"
          >
            Coding Enthusiast
          </text>
        )}

        {/* Third line */}
        {line === 3 && (
          <text
            x="307" // Centered horizontally
            y="290" // Third line's vertical position
            fontSize="4rem" // Font size like <h1>
            fontFamily="'Poppins', sans-serif"
            fontWeight="900"
            fill="url(#textGradient)"
            textAnchor="middle"
            letterSpacing="2"
          >
            MERN Stack Developer
          </text>
        )}
      </g>

      {/* Gradient Text Color */}
      <defs>
        <linearGradient id="textGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4ADE80" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default HeaderTitle;
