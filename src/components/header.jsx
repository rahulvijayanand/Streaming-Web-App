import React from "react";
import "./header.css";
import Search from "./search";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src={logo}
          alt=""
          className="aspect-square h-[30px] w-[30px] mx-auto"
        />
      </div>

      <div className="icons">
        <Search />
      </div>
    </header>
  );
};

export default Header;
