import { useState, useEffect, useCallback } from "react";
import { debounce } from "./useDebounce";
import GoBackToHome from "../components/GoBacktoHome";

// Custom Hook to get window dimensions
export const useWindowDimensions = () => {
  // State to store the current width and height
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = useCallback(() => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []); // or [] if setWindowDimensions is stable (from useState)

  // Update dimensions on window resize
  useEffect(() => {
    console.log("useEffect called");
    handleResize();

    window.addEventListener("resize", debounce(handleResize, 1000)); //-----> lodash debounce otherwise on every pixel
    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return windowDimensions;
};

const useWindowDimentionsOnResize = () => {
  const { width, height } = useWindowDimensions();
  console.log("Window dimensions:", width, height);

  return (
    <div>
      <GoBackToHome />
      <h1>Window Dimensions Hook:</h1>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
};

export default useWindowDimentionsOnResize;