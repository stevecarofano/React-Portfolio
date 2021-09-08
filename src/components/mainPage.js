import React from "react";
import "../mainPage.css";

function MainPage() {
  return (
    <div className="mainContainer">
      <div className="mainPage">
        <h2 className="mainHeading">
          <a href="https://github.com/stevecarofano" target="blank">
            Hello there! I'm Steve Carofano
          </a>
          <p>Full Stack Developer</p>
          <p>-</p>
          <p>Gamer</p>
          <p>-</p>
          <p>Reader</p>
          <p>-</p>
          <p>Guitarist</p>
        </h2>
        <div className="mainFacts"></div>
      </div>
    </div>
  );
}

export default MainPage;
