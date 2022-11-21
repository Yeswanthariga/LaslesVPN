import "./Sponsored.css";
import Netflix from "../../../assets/Mask Group.png";
import Reddit from "../../../assets/Mask Group(1).png";
import Amazon from "../../../assets/Mask Group(2).png";
import Discord from "../../../assets/Mask Group(3).png";
import Spotify from "../../../assets/Mask Group(4).png";

export default function Sponsored() {
  return (
    <div className="sponsor-container">
      <img className="sponsor-name" src={Netflix} alt="" />
      <img className="sponsor-name" src={Reddit} alt="" />
      <img className="sponsor-name" src={Amazon} alt="" />
      <img className="sponsor-name" src={Discord} alt="" />
      <img className="sponsor-name" src={Spotify} alt="" />
    </div>
  );
}
