import React from "react";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import logo from "../assets/shared/logo.svg";

const Header = () => {
  return (
      <header className="header">
        <img src={logo} alt="logo" className="header__logo"></img>
        <div className="header__rule" />
        {window.innerWidth >= 576 ? <Navigation /> : <MobileNavigation/>}
      </header>
  );
};

export default Header;
