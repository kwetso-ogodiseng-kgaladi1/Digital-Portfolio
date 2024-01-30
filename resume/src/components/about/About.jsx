import React from "react";
import "./about.css";
import profile_picture from "../../assets/profile3.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={profile_picture} alt="About kwetso image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {/* <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                6 Months + <br /> Developer Experience
              </small>
            </article> */}
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>
                Software Engineering
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>
                2+ Completed
                <br />
                and Counting
              </small>
            </article>
          </div>
          <p>
            I am passionate about using my technical skills to create innovative and efficient solutions to complex
            problems. I am confident in my ability to develop robust and scalable software applications.
            and exceed expectations.
          </p>
          <p>
            My attention
            to detail and analytical mindset allows me to approach problems from 'multiple angles and find creative
            solutions that optimize performance and enhance user experience. I am constantly striving to learn new
            technologies and techniques to stay current in the ever-evolving field of software development.
          </p>
          <p>
            I believe
            that continuous learning is essential to remain competitive and deliver the best possible solutions. Overall, I am committed to delivering exceptional software solutions that solve complex problems
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
