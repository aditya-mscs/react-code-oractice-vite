import React, { useEffect, useRef, useState } from "react";
import GoBackToHome from "./GoBackToHome";

export const MutationObserverDemo = () => {
  const boxRef = useRef<HTMLDivElement>(null);          // Reference to the target element
  const [bgColor, setBgColor] = useState("white");       // State for background color




  useEffect(() => {
    if (!boxRef.current) return;

    // Set up MutationObserver to watch attribute changes
    const observer = new MutationObserver(() => {
      const newColor = boxRef.current?.getAttribute("data-color");
      if (newColor) {
        setBgColor(newColor); // Update background color based on new attribute
      }
    });

    observer.observe(boxRef.current, {
      attributes: true // We're only watching attribute changes
    });

    return () => observer.disconnect(); // Clean up on unmount
  }, []);



  // Randomly update the data-color attribute on the box
  const handleChangeAttribute = () => {
    const colors = ["lightblue", "lightgreen", "lightcoral", "lemonchiffon"];
    const random = colors[Math.floor(Math.random() * colors.length)];
    if (boxRef.current) {
      boxRef.current.setAttribute("data-color", random);
    }
  };



  return (
    <div style={{ fontFamily: "sans-serif", padding: "1rem" }}>
      <GoBackToHome />
      <h2>🔍 MutationObserver (React): Visual Background Change</h2>

      <div
        ref={boxRef}
        style={{
          padding: "2rem",
          border: "2px dashed #888",
          backgroundColor: bgColor, // Dynamically updates
          transition: "background-color 0.4s ease",
          marginBottom: "1rem",
        }}
      >
        👁️ Watch this background change
      </div>

      <button type="button" onClick={handleChangeAttribute}>
        🎨 Change Background Color
      </button>
    </div>
  );
};