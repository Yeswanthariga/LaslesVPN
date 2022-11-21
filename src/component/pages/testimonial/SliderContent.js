import React from "react";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section className="slide-container">
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <div className="slide-fullinfo">
            <img className="slide-image" src={slide.urls} alt="" />
            <div className="slide-info">
              <h5 className="slide-name">{slide.name}</h5>
              <h6 className="slide-place">{slide.place}</h6>
            </div>
            <span className="slide-rating">{slide.rating}</span>
            <img className="star" src={slide.star} alt="" />
          </div>
          <p className="slide-text">{slide.description}</p>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
