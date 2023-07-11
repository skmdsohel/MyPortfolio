import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There ✋,I am,
          <br /> <span className="info-name">Mohammad Sohel</span>.
          <br /> I have experience Turning designs into delightful digital
          experiences.
          {/* <a
            className="project-link"
            // href={project.github}
            // target="_blank"
            // rel="noreferrer"
          >
            <div className="link-button">
              <i className="devicon-github-original colored"></i>Github
            </div>
          </a> */}
          <br />
          <button className="button-resume">Resume</button>
        </div>
        <div className="about-photo">
          <img
            alt=""
            src={require("../../../assets/coding.png")}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
