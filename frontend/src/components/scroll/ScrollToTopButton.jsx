import React, { useState, useEffect } from "react";
import BackToTop from "react-easy-back-to-top";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return isVisible ? (
    <BackToTop
      // text="Go Up"
      icon="fas fa-arrow-up"
      backgroundColor="white"
      position={{ right: "1%", bottom: "10%" }}
      hover={{
        backgroundColor: "white",
        color: "rgb(241, 186, 82)",
        border: "1px solid rgb(241, 186, 82)",
      }}
      transition="all 0.5s"
      showOnDistance={0}
      borderRadius={16}
      opacity="1"
      color="gray"
      fontSize="24px"
      border="1px solid gray"
    />
  ) : null;
}
