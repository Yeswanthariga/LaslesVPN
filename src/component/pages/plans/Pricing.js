import "./Pricing.css";
import free from "../../../assets/Free.png";
import smalltick from "../../../assets/Group 1223.png";
import Standard from "../../../assets/Standard.png";
import Premium from "../../../assets/Premium.png";
import global from "../../../assets/Huge Global.png";

export default function Pricing() {
  return (
    <div id="pricing" className="plan-container">
      <h2 className="plan-head">Choose Your Plan</h2>
      <p className="plan-para">
        Let's choose the package that is best for you and explore it happily and
        cheerfully.
      </p>
      <div className="plan-type">
        <div className="plan-prices">
          <img className="plan-img" src={free} alt="" />
          <h4 className="plan-name">Free Plan</h4>
          <div className="plan-details">
            <div className="detail-left">
              <img src={smalltick} alt="" />
            </div>
            <div className="detail-right">
              <p className="plan-benefit">Unlimited Bandwitch</p>
            </div>
          </div>
          <div className="plan-details">
            <div className="detail-left">
              <img src={smalltick} alt="" />
            </div>
            <div className="detail-right">
              <p className="plan-benefit">Encrypted Connection</p>
            </div>
          </div>
          <div className="plan-details">
            <div className="detail-left">
              <img src={smalltick} alt="" />
            </div>
            <div className="detail-right">
              <p className="plan-benefit">No Traffic Logs</p>
            </div>
          </div>
          <div className="plan-details">
            <div className="detail-left">
              <img src={smalltick} alt="" />
            </div>
            <div className="detail-right">
              <p className="plan-benefit">Works on All Devices</p>
            </div>
          </div>
          <div id="free-bottom" className="detail-bottom">
            <h3 className="plan-money">Free</h3>
            <button className="plan-select">Select</button>
          </div>
        </div>
        <div className="plan-prices">
          <img className="plan-img" src={Standard} alt="" />
          <h4 className="plan-name">Standard Plan</h4>
          <div className="plan-details">
            <div className="detail-left">
              <img src={smalltick} alt="" />
            </div>
            <div className="detail-right">
              <p className="plan-benefit">Unlimited Bandwitch</p>
            </div>
          </div>
          <div className="plan-details">
            <div className="detail-left">
              <img src={smalltick} alt="" />
            </div>
            <div className="detail-right">
              <p className="plan-benefit">Encrypted Connection</p>
            </div>
          </div>
          <div className="plan-details">
            <div className="detail-left">
              <img src={smalltick} alt="" />
            </div>
            <div className="detail-right">
              <p className="plan-benefit">No Traffic Logs</p>
            </div>
          </div>
          <div className="plan-details">
            <div className="detail-left">
              <img src={smalltick} alt="" />
            </div>
            <div className="detail-right">
              <p className="plan-benefit">Works on All Devices</p>
            </div>
          </div>
          <div className="plan-details">
            <div className="detail-left">
              <img src={smalltick} alt="" />
            </div>
            <div className="detail-right">
              <p className="plan-benefit">Connect Anyware</p>
            </div>
          </div>
          <div id="standard-bottom" className="detail-bottom">
            <h3 className="plan-money">$9/mon</h3>
            <button className="plan-select">Select</button>
          </div>
        </div>
        <div className="plan-prices">
          <img className="plan-img" src={Premium} alt="" />
          <h4 className="plan-name">Premium Plan</h4>
          <div className="plan-details">
            <div className="detail-left">
              <img src={smalltick} alt="" />
            </div>
            <div className="detail-right">
              <p className="plan-benefit">Unlimited Bandwitch</p>
            </div>
          </div>
          <div className="plan-details">
            <div className="detail-left">
              <img src={smalltick} alt="" />
            </div>
            <div className="detail-right">
              <p className="plan-benefit">Encrypted Connection</p>
            </div>
          </div>
          <div className="plan-details">
            <div className="detail-left">
              <img src={smalltick} alt="" />
            </div>
            <div className="detail-right">
              <p className="plan-benefit">No Traffic Logs</p>
            </div>
          </div>
          <div className="plan-details">
            <div className="detail-left">
              <img src={smalltick} alt="" />
            </div>
            <div className="detail-right">
              <p className="plan-benefit">Works on All Devices</p>
            </div>
          </div>
          <div className="plan-details">
            <div className="detail-left">
              <img src={smalltick} alt="" />
            </div>
            <div className="detail-right">
              <p className="plan-benefit">Connect Anyware</p>
            </div>
          </div>
          <div className="plan-details">
            <div className="detail-left">
              <img src={smalltick} alt="" />
            </div>
            <div className="detail-right">
              <p className="plan-benefit">Get New Features</p>
            </div>
          </div>

          <div id="premium-bottom" className="detail-bottom">
            <h3 className="plan-money">$12/mon</h3>
            <button className="plan-select">Select</button>
          </div>
        </div>
      </div>
      <div className="globle">
        <h2 className="globle-head">Huge Global Network of Fast VPN</h2>
        <p className="globle-para">
          See LaslesVPN everywhere to make it easier for you when you move
          locations.
        </p>
        <img className="global-img" src={global} alt="" />
      </div>
    </div>
  );
}
