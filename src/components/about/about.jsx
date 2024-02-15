import React, { Component } from "react";
import "./about.css";
import about from "../../Asset/Me.jpg";
import AboutBox from "./aboutbox";
import avatar1 from '../../Asset/avatar-1.svg'

const About = () => {
  return (
    <section className="about container section  " id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={about} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
            Highly motivated and results-driven professional with a solid background in
             business administration and expertise in web development. With a keen
             understanding of both the technical and business aspects, I bring a unique
             perspective to create effective online solutions that drive growth and
             maximize user engagement.

            </p>
            <a href={avatar1} className="btn" download>
              Download CV
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">HTML & CSS</h3>
                <span className="skills__number ">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">React.js</h3>
                <span className="skills__number">70%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage react__js"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">JavaScript</h3>
                <span className="skills__number">60%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage javascript"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
};

export default About;
