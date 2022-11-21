import "./Features.css";
import Illustration2 from "../../../assets/Illustration2.png";
import tick from "../../../assets/Group 1120.png";

export default function Features() {
  return (
    <div id="features" className="Feature-container">
      <div className="feature-left">
        <img src={Illustration2} alt="" />
      </div>
      <div className="feature-right">
        <h2 className="feature-head">
          We Provide Many <br />
          Features You Can Use
        </h2>
        <p className="para-small">
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        <div className="small-feature">
          <div className="small-left">
            <img className="tick" src={tick} alt="" />
          </div>
          <div className="small-right">
            <p className="feature-contant">Powerfull online protection.</p>
          </div>
        </div>
        <div className="small-feature">
          <div className="small-left">
            <img className="tick" src={tick} alt="" />
          </div>
          <div className="small-right">
            <p className="feature-contant">Internet without borders.</p>
          </div>
        </div>
        <div className="small-feature">
          <div className="small-left">
            <img className="tick" src={tick} alt="" />
          </div>
          <div className="small-right">
            <p className="feature-contant">Supercharged VPN</p>
          </div>
        </div>
        <div className="small-feature">
          <div className="small-left">
            <img className="tick" src={tick} alt="" />
          </div>
          <div className="small-right">
            <p className="feature-contant">No specific time limits.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
