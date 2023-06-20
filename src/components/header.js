import React from "react";
import logo from "../img/logo.png";
import "./header.css";

export default function Header() {
  return (
    <div className="header_container">
      <div className="logo"></div>
      <div className="nav--button_container">
        <button className="nav--home button">HOME</button>
        <button className="nav--blog button">BLOG</button>
      </div>
    </div>
  );
}
