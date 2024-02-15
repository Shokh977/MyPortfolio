import React, { Component } from "react";
import "./blog.css";
import Images1 from "../../Asset/blog-1.svg";
import Images2 from "../../Asset/blog-2.svg";
import Images3 from "../../Asset/blog-3.svg";

const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Latest Posts</h2>

      <div className="blog__container grid">
        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#">
              <span className="blog__category">Reviews</span>
            </a>
            <a href="#">
              <img src={Images1} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">
              Best App Development Tool for your Projects
            </h3>
            <div className="blog__meta">
              <span>09/02/2023</span>
              <span className="blog__dot">.</span>
              <span>Abdulazizov</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#">
              <span className="blog__category">Tutorials</span>
            </a>
            <a href="#">
              <img src={Images2} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Misconception About Payment</h3>
            <div className="blog__meta">
              <span>07/02/2023</span>
              <span className="blog__dot">.</span>
              <span>Abdulazizov</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#">
              <span className="blog__category">Business</span>
            </a>
            <a href="#">
              <img src={Images3} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">
              Things to know about start-up business
            </h3>
            <div className="blog__meta">
              <span>03/02/2023</span>
              <span className="blog__dot">.</span>
              <span>Abdulazizov</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
