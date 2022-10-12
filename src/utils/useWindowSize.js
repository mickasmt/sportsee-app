import { useEffect, useState } from "react";

/**
 * Get width / height in window
 */
function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}


/**
 * Watch and return width/height if window size change
 * @returns {Object} with new width/height
 */
function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return windowSize;
}

export default useWindowSize;
