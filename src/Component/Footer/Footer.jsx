import React from "react";
import "./Footer.scss";
import Footer_Logo from "../Assets/12.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintrest_icon from "../Assets/pintester_icon.png";
import Watsup_icon from "../Assets/whatsapp_icon.png";
const Footer = () => {
  return (
    <>
      <div className="footer_container">
        <div className="footer_logo">
          <img src={Footer_Logo} alt="logo" />
          <p>ShopNow</p>
        </div>

        <ul className="footer_links">
          <li>Company</li>
          <li>Products</li>
          <li>Office</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="footer_social_icons">
          <div className="icons_container">
            <img src={instagram_icon} alt="insta" />
          </div>
          <div className="icons_container">
            <img src={pintrest_icon} alt="pintrest" />
          </div>
          <div className="icons_container">
            <img src={Watsup_icon} alt="watsup" />
          </div>
        </div>
        <div className="footer_copyright">
          <span >Copyright &copy; 2023 All Right Reserved</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
