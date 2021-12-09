import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; Rasel kazi</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a
          target="blank"
          href="https://www.linkedin.com/in/rasel-kazi-4197a41b9/"
        >
          Linkedin
        </a>
        <a
          target="blank"
          href="https://www.youtube.com/channel/UCKoutxgYoTdTBnCuxL4f97A"
        >
          Youtube
        </a>
        <a target="blank" href="https://www.facebook.com/freelancer.raselkazi">
          Facebook
        </a>
        <a target="blank" href="https://github.com/RaselKazi">
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
