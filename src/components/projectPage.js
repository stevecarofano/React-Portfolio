import React from "react";
import "../App.css";
import anifind from "../images/anifind.png";

function ProjectsPage() {
  return (
    <div className="projectContainer">
      <div className="aniFind">
        <p>AniFind</p>
        <a href="https://mbalasuriyar.github.io/Find-an-Anime-For-You/">
          <img src={anifind} alt=""></img>
        </a>
      </div>
    </div>
  );
}

export default ProjectsPage;
