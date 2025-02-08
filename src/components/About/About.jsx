import React from "react";
import Hole from "../../ui/Hole";
import { skills } from "../../data";
import CardUi from "../../assets/CardUi";
import "./About.css"
const About = () => {
  return (
    <section id="about">
      <div className="card section__wrapper">
        <Hole />
        <div className="column left-column">
          <h3 className="skill__title shine"></h3>
          <div className="skills__container">
            {skills.map((skill, index) => (
              <div className="flex skill__group" key={index}>
                {skill.data.map((list, key) => (
                  <div className="blur__overlay flex__center skill" key={key}>
                    <div className="skill__logo">
                      <img src={list.logo} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          {/* <CardUi className="card__ui-item" color={"var(--color-primary"} /> */}
        </div>
        <div className="column right-column">
          <h2 className="shine">About Me</h2>
          <h1 className="title">
            I am <span className="color__primary">Pankaj Sharma</span>
          </h1>
          <p className="text__muted description">
            A passionate MERN Stack Developer with a strong foundation in
            JavaScript, React, Node.js, and MongoDB. With a background in
            Physics, I bring an analytical approach to building scalable and
            efficient web applications. I love solving complex problems,
            optimizing performance, and creating seamless user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
