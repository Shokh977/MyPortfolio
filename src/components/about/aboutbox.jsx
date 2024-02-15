import React, { Component } from "react";
const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about_box">
        <i className="about__icon icon-fire"></i>
        <div>
          <h3 className="about__title">Several</h3>
          <span className="about__subtitle">Projects completed</span>
        </div>
      </div>

      <div className="about_box">
        <i className="about__icon icon-cup"></i>
        <div>
          <h3 className="about__title">276</h3>
          <span className="about__subtitle">Cups of coffee</span>
        </div>
      </div>

      <div className="about_box">
        <i className="about__icon icon-graduation"></i>
        <div>
          <h3 className="about__title">+10</h3>
          <span className="about__subtitle">Courses finished</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
