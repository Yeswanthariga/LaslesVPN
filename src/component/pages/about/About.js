import "./About.css";
import Illustration from "./study.png";
import user from "../../../assets/user.png";
import location from "../../../assets/location.png";
import server from "../../../assets/Server.png";

export default function About() {
  return (
    <div id="about" className="about-container">
      <div className="flex-container">
        <div className="left">
          <p className="head">
            Want anything to be easy with <b>LaslesVPN.</b>
          </p>
          <p className="discription">
            Provide a network for all your needs with ease and fun using{" "}
            <b>LaslesVPN</b> discover interesting features from us.
          </p>
          <button className="getstarted">Get Started</button>
        </div>
        <div className="right">
          <img className="study" src={Illustration} alt="" />
        </div>
      </div>
      <div className="services">
        <div className="small-container">
          <div className="left">
            <img className="service-logo" src={user} alt="" />
          </div>
          <div className="right">
            <p className="num">90+</p>
            <p className="num-name">users</p>
          </div>
        </div>
        <div className="small-container">
          <div className="left">
            <img className="service-logo" src={location} alt="" />
          </div>
          <div className="right">
            <p className="num">30+</p>
            <p className="num-name">locations</p>
          </div>
        </div>
        <div className="small-container">
          <div className="left">
            <img className="service-logo" src={server} alt="" />
          </div>
          <div className="right">
            <p className="num">50+</p>
            <p className="num-name">servers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
