import React from "react";
import "./body.css";
import About from "./about/index";
import Projects from "./projects/index";
import Skills from "./skills/index";
import Certificate from "./certificate/index";
import Contact from "./contact/index";
import Experience from "./experience";

function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="work">
        <Certificate />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;