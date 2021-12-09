import React from "react";
import "./aboutSection.css";
import { Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";

import racel from "../../../images/racel.jpg";
const About = () => {
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              src={racel}
              style={{ width: "15vmax", height: "15vmax", margin: "2vmax 0" }}
              alt="R"
            />
            <span>This is a sample wesbite made by RaselKazi</span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com/channel/UCKoutxgYoTdTBnCuxL4f97A"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
