import React from "react";
import "./hero.css";

export default function Hero() {
  return (
    <div className="hero_container">
      <h1>
        <span className="hero--name">Zachary Huang</span>
      </h1>
      <div className="title_container">
        <h1>
          <span className="hero--title">Software Developer</span>
        </h1>
      </div>
    </div>
  );
}
