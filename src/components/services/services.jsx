import React, { Component } from "react";
import "./services.css";
import image1 from "../../Asset/service-1.svg";
import image2 from "../../Asset/service-2.svg";
import image3 from "../../Asset/service-3.png";

const data = [
  {
    id: 1,
    image: image1,
    title: "UI/UX design",
    description:
      " I have gained proficiency in the fundamentals of design tools such as Figma and Webflow. These tools have empowered me to translate my ideas into visually appealing and user-friendly interfaces.",
  },
  {
    id: 2,
    image: image2,
    title: "JavaScript",
    description:
      "I've embarked on a rewarding journey with JavaScript, diving into several courses to expand my knowledge. The best part? I didn't just stop at learning; I rolled up my sleeves and brought my newfound skills to life by building projects.",
  },
  {
    id: 3,
    image: image3,
    title: "React.js",
    description:
    "Skilled React developer with expertise in state management, hooks, Redux, and Context API,components and handling HTTP requests for dynamic web applications."
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>

      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
