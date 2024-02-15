import React, { Component } from "react";
import Me from "./../../Asset/Me-2.jpg";
import HeaderSocials from "./Headersocials";
import ScrollDown from "./scrolldown";
import "./home.css";
import Shapes from "./shapes";
import ReactTyped from "react-typed";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="img" className="home__img" />
        <h1 className="home__name">Shokhrukh</h1>
        <span className="home__education">
          I'm a {""}
          <ReactTyped
            className="home__education"
            strings={[" Front-End", " Business"]}
            typeSpeed={120}
            backSpeed={130}
            loop
          />
          <span> developer</span>
        </span>
        <HeaderSocials />
        <a href="#contact" className="btn">
          Hire Me
        </a>
        <ScrollDown />
      </div>
      {/* <Shapes /> */}
    </section>
  );
};

export default Home;
