import React from "react";
import "./experience.css";
import Separator from "../../common/separator";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ExperienceData } from "../../data/experience";

const Experience = () => {
  return (
    <div>
      <Separator />
      <label className="section-title">Experience</label>
      <VerticalTimeline lineColor="#407BFF">
        {ExperienceData.map((experience) => {
          return (
            <VerticalTimelineElement
            key={experience.id}
              className="vertical-timeline-element--work"
              // contentStyle={{ background: "#fff", color: "black" }}
              date={`${experience.dateJoining} - ${experience.dateEnd}`}
              iconStyle={
                experience.isWorkplace === true
                  ? {
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                      padding: "auto",
                    }
                  : {
                      background: "rgb(243, 191, 33)",
                      color: "#fff",
                      padding: "auto",
                    }
              }
              icon={
                <img
                  width="40"
                  height="40"
                  src={
                    experience.isWorkplace === true
                      ? "https://img.icons8.com/fluency-systems-regular/48/laptop-coding.png"
                      : "https://img.icons8.com/fluency-systems-regular/48/motarboard.png"
                  }
                  alt={
                    experience.isWorkplace === true
                      ? "laptop-coding"
                      : "motarboard"
                  }
                />
              }
            >
              <h2 className="vertical-timeline-element-title title">
                {experience.designation}
              </h2>
              <h4 className="vertical-timeline-element-title">
                {experience.company}
              </h4>
              <p>{experience.skills.join(", ")}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
