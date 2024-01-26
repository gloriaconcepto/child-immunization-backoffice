import { useState, useEffect } from "react";

function getWindowDimensions() {
    const { innerWidth, innerHeight } = window;
    const { clientHeight, clientWidth } = document.documentElement
    return {
      width: Math.max(innerWidth, clientWidth),
      height: Math.max(clientHeight, innerHeight)
    };
  }
  
  export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return windowDimensions;
  }