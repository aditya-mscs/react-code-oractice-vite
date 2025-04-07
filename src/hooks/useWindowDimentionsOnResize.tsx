import { useState, useEffect } from "react";
import debounce from "lodash.debounce";
import GoBackToHome from "../components/GoBacktoHome";

// Custom Hook to get window dimensions
export const useWindowDimensions = () => {
  // State to store the current width and height
  const [windowDimensions, setWindowDimensions] = useState({ //-------------> State within hook
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Update dimensions on window resize
  useEffect(() => {
    console.log("useEffect called");
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", debounce(handleResize, 100)); //-----> lodash debounce otherwise on every pixel

    // Initial call to set dimensions
    handleResize();

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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