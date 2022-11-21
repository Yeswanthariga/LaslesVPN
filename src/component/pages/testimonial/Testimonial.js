import "./Testimonial.css";
import Slider from "./Slider";

export default function Testimonial() {
  return (
    <div id="testimonials" className="testimonial-container">
      <h2 className="testimonial-head">
        Trusted by Thousands of Happy Customer
      </h2>
      <p className="testimonial-para">
        These are the stories of our customers who have joined us with great
        pleasure when using this crazy feature.
      </p>
      <Slider />
    </div>
  );
}
