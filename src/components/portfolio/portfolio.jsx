import React, { Component, useState } from "react";
import "./portfolio.css";
import Menu from "./menu";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);

  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItems(updatedItems);
  };

  let content;
  if (items.length <= 0) {
    content = <p className="work-error">No Projects in this section...</p>;
  } else {
    content = (
      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category, link } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>
              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href={link} className="work__button" target="_blank">
                <i className="icon-link work--button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">Recent Works</h2>

      <div className="work__filters">
        <span
          className="work__item"
          onClick={() => {
            setItems(Menu);
          }}>
          Everything
        </span>
        <span
          className="work__item"
          onClick={() => {
            filterItem("mini-project");
          }}>
          Mini Projects
        </span>
        <span
          className="work__item"
          onClick={() => {
            filterItem("react-project");
          }}>
          ReactJS
        </span>
        <span
          className="work__item"
          onClick={() => {
            filterItem("JS-project");
          }}>
          Java Script
        </span>
      </div>
      {content}
    </section>
  );
};

export default Portfolio;
