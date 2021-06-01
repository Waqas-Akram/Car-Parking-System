import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
// import "../../../styles/animation-style.css";
const ParkingAnimation = () => {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./park.json"), // the path to the animation json
    });
  }, []);
  return (
    <center>
      <div
        ref={container}
        className="container"
        // id="svgContainer"
        style={{ width: "300px" }}
      ></div>
    </center>
  );
};

export default ParkingAnimation;
