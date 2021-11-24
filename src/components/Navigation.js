import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navigation = () => {
  const path = useLocation().pathname;

  return (
    <nav className="header__navigation">
      <NavLink
        to="/"
        className={path === "/" ? "header__link_active" : "header__link"}
      >
        <span className="header__link-number">00</span>
        <span className="header__link-text">Home</span>
      </NavLink>
      <NavLink
        to="/destination"
        className={
          path === "/destination" ? "header__link_active" : "header__link"
        }
      >
        <span className="header__link-number">01</span>
        <span className="header__link-text">Destination</span>
      </NavLink>
      <NavLink
        to="/crew"
        className={path === "/crew" ? "header__link_active" : "header__link"}
      >
        <span className="header__link-number">02</span>
        <span className="header__link-text">Crew</span>
      </NavLink>
      <NavLink
        to="/technology"
        className={
          path === "/technology" ? "header__link_active" : "header__link"
        }
      >
        <span className="header__link-number">03</span>
        <span className="header__link-text">Technology</span>
      </NavLink>
    </nav>
  );
};

export default Navigation;
