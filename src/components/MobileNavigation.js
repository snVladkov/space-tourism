import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import iconMenu from "../assets/shared/icon-hamburger.svg";
import iconClose from "../assets/shared/icon-close.svg";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="header__navigation_mobile">
      <button
        className="header__menu-open_mobile"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <img
          src={iconMenu}
          alt="open navigation"
          className="header__open-image_mobile"
        />
      </button>
      {isOpen && (
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="header__menu_mobile"
        >
          <button
            className="header__menu-close_mobile"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <img
              src={iconClose}
              alt="close navigation"
              className="header__close-image_mobile"
            />
          </button>
          <NavLink
            to="/"
            className="header__link_mobile"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <span className="header__link-number">00</span>
            <span className="header__link-text">Home</span>
          </NavLink>
          <NavLink
            to="/destination"
            className="header__link_mobile"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <span className="header__link-number">01</span>
            <span className="header__link-text">Destination</span>
          </NavLink>
          <NavLink
            to="/crew"
            className="header__link_mobile"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <span className="header__link-number">02</span>
            <span className="header__link-text">Crew</span>
          </NavLink>
          <NavLink
            to="/technology"
            className="header__link_mobile"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <span className="header__link-number">03</span>
            <span className="header__link-text">Technology</span>
          </NavLink>
        </motion.div>
      )}
    </nav>
  );
};

export default MobileNavigation;
