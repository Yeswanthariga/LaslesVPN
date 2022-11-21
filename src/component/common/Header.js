import React from "react";
import Vector from "../../assets/Vector.png";
import "./styles.css";
import { HashLink as Link } from "react-router-hash-link";

function Header() {
  return (
    <navbar>
      <div className="logo">
        <img className="logo-img" src={Vector} alt="" />
        <h3 className="logo-name">
          Lasels<b>VPN</b>
        </h3>
      </div>
      <div className="links">
        <div className="main-links">
          <Link smooth to="/#about" className="link">
            About
          </Link>
          <Link smooth to="/#features" className="link">
            Features
          </Link>
          <Link smooth to="/#pricing" className="link">
            Pricing
          </Link>
          <Link smooth to="/#testimonials" className="link">
            Testimonials
          </Link>
          <Link smooth to="/#help" className="link">
            Help
          </Link>
        </div>
        <div className="sign-btn">
          <a href="/sign-in">
            <p className="sign-in">Sign-In</p>
          </a>
          <button className="sign-up">Sign-up</button>
        </div>
      </div>
      {/* <Drawer /> */}
    </navbar>
  );
}

export default Header;
