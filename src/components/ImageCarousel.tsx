import React, { useState } from "react";
import GoBackToHome from "./GoBacktoHome";

const colors = ["red", "green", "blue", "yellow", "purple"]; // Array of colored squares

export default function ImageCarousel() {
  // State to manage the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handler for moving to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % colors.length); // Wrap around using modulus ------> IMP
  };

  // Handler for moving to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + colors.length) % colors.length); // Wrap around in reverse
  };

  return (
    <div>
      <GoBackToHome />
      <div
        data-testid="carousel-image"
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: colors[currentIndex], // IMP STEP. so no ref needed
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
          fontSize: "24px",
          margin: "10px auto",
          borderRadius: "8px",
        }}
      >
        {colors[currentIndex]} {/* Display the current color */}
      </div>

      <button
        type="button"
        data-testid="prev-button"
        onClick={prevImage}
        style={{ margin: "5px", padding: "8px" }}
      >
        Prev
      </button>

      <button
        type="button"
        data-testid="next-button"
        onClick={nextImage}
        style={{ margin: "5px", padding: "8px" }}
      >
        Next
      </button>
    </div>
  );
}