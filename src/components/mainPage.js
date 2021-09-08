import React from "react";
import "../mainPage.css";

function MainPage() {
  return (
    <div className="mainContainer">
      <div className="mainPage">
        <h2 className="mainHeading">
          I'm{" "}
          <a href="https://github.com/stevecarofano" target="blank">
            Steve Carofano
          </a>
          <p>Full Stack Developer</p>
          <p>-</p>
          <p>Gamer</p>
          <p>-</p>
          <p>Reader</p>
          <p>-</p>
          <p>Guitarist</p>
        </h2>
        <div className="mainFacts">
        </div>
      </div>
    </div>
  );
}

export default MainPage;