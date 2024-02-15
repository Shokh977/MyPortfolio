import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Services from "./components/services/services";
import Resume from "./components/resume/resume";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import Blog from "./components/blog/blog";

function App() {
  return (
    <React.Fragment>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
    </React.Fragment>
  );
}

export default App;
