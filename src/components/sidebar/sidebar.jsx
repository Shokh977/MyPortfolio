import React, { Component, useState, useEffect, useRef } from "react";
import "./sidebar.css";
import Logo from "../../Asset/images/logo.png";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        toggle &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setToggle(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [toggle]);

  const handleToggleClick = (event) => {
    event.stopPropagation();
    setToggle(!toggle);
  };

  const handleSidebarItemClick = () => {
    setToggle(false);
  };

  return (
    <>
      <div className={toggle ? "aside show-menu" : "aside"} ref={sidebarRef}>
        <div></div>
        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i onClick={handleSidebarItemClick} className="icon-home"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i onClick={handleSidebarItemClick} className="icon-user"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <i
                    onClick={handleSidebarItemClick}
                    className="icon-briefcase"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#resume" className="nav__link">
                  <i
                    onClick={handleSidebarItemClick}
                    className="icon-graduation"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                  <i
                    onClick={handleSidebarItemClick}
                    className="icon-layers"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#blog" className="nav__link">
                  <i onClick={handleSidebarItemClick} className="icon-note"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i
                    onClick={handleSidebarItemClick}
                    className="icon-bubble"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav__footer">
          <span className="copyright">&copy; 2022 - 2023.</span>
        </div>
      </div>
      <div
        className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
        onClick={handleToggleClick}>
        <i
          className={
            !toggle ? "fa-solid fa-bars fa-lg " : "fa-solid fa-xmark fa-lg"
          }></i>
      </div>
    </>
  );
};

export default Sidebar;
