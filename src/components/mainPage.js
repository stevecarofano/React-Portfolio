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
        </h2>
        <div className="mainFacts">
          <p>Developer</p>
          <p>Gamer</p>
          <p>Reader</p>
          <p>Musician</p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
