import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
import developerLight from "../../../assets/coding.svg";
import ResumePdf from "../../../assets/sohel_resume_toqqer.pdf";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There ✋,I am,
          <br /> <span className="info-name">Mohammad Sohel</span>.
          <br /> I have experience Turning designs into delightful digital
          experiences.
          <br />
          <a
            href={ResumePdf}
            download="sohel_resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button-resume">
              Download Resume
            </button>
          </a>
        </div>
        <div className="about-photo">
          <img alt="" src={developerLight} className="picture" />
          {/* <DeveloperLogo /> */}
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
