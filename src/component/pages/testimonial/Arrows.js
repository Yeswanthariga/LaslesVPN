import React from "react";
import left from "../../../assets/left.png";
import right from "../../../assets/right.png";

function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className="arrows">
      <img className="prev" onClick={prevSlide} src={left} alt="" />

      <img className="next" onClick={nextSlide} src={right} alt="" />
    </div>
  );
}

export default Arrows;
