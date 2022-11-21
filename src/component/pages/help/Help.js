import "./Help.css";
import Vector from "../../../assets/Vector.png";
import Facebook from "../../../assets/Facebook.png";
import Instagram from "../../../assets/Instagram.png";
import Twitter from "../../../assets/Twitter.png";

export default function Help() {
  return (
    <footer>
      <div id="help" className="footer-info">
        <div className="footer-company">
          <img className="footer-logo" src={Vector} alt="" />
          <h4 className="footer-logo-name">
            Lasles<b>VPN</b>
          </h4>
        </div>
        <p className="footer-logo-para">
          LaslesVPN is a private virtual network that has unique features and
          has high security.
        </p>
        <div className="footer-brand">
          <img className="brand-logo" src={Facebook} alt="" />
          <img className="brand-logo" src={Instagram} alt="" />
          <img className="brand-logo" src={Twitter} alt="" />
        </div>
        <p className="copyrights">©2020LaslesVPN</p>
      </div>
      <div className="footer-help">
        <div className="footer-product">
          <h3 className="product">Product</h3>
          <a className="product-list" href="download">
            Download
          </a>
          <a className="product-list" href="pricing">
            Pricing
          </a>
          <a className="product-list" href="location">
            Locations
          </a>
          <a className="product-list" href="server">
            Server
          </a>
          <a className="product-list" href="countries">
            Countries
          </a>
          <a className="product-list" href="blog">
            Blog
          </a>
        </div>
        <div className="footer-engage">
          <h3 className="product">Engage</h3>
          <a className="product-list" href="lasesvpn">
            LaslesVPN?
          </a>
          <a className="product-list" href="FAQ">
            FAQ
          </a>
          <a className="product-list" href="Tutorials">
            Tutorials
          </a>
          <a className="product-list" href="About Us">
            About Us
          </a>
          <a className="product-list" href="Privacy Policy">
            Privacy Policys
          </a>
          <a className="product-list" href="Terms of Service">
            Terms of Service
          </a>
        </div>
        <div className="footer-earn">
          <h3 className="product">Earn Money</h3>
          <a className="product-list" href="Affiliate">
            Affiliate
          </a>
          <a className="product-list" href="Become Partner">
            Become Partner
          </a>
        </div>
      </div>
    </footer>
  );
}
