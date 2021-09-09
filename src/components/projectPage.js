import React from "react";
import "../App.css";
import anifind from "../images/anifind.png";
import weathertracker from "../images/weathertracker.png";
import scheduler from "../images/scheduler.png";
import tracker from "../images/tracker.png";
import notetaker from "../images/notetaker.png";
import budget from "../images/budget.png";

function ProjectsPage() {
  return (
    <div class="projectContainer">
      <div class="aniFind">
        <a href="https://mbalasuriyar.github.io/Find-an-Anime-For-You/">
          <img src={anifind} alt=""></img>
        </a>
      </div>
      <div class="tracker">
        <a href="https://stevecarofano.github.io/Weather-Tracker/">
          <img src={weathertracker} alt=""></img>
        </a>
      </div>
      <div class="scheduler">
        <a href="https://stevecarofano.github.io/Work-Day-Planner/">
          <img src={scheduler} alt=""></img>
        </a>
      </div>
      <div class="noteTaker">
        <a href="https://github.com/stevecarofano/Note-taker">
          <img src={notetaker} alt=""></img>
        </a>
      </div>
      <div class="empTracker">
        <a href="https://github.com/stevecarofano/Employee-Tracker">
          <img src={tracker} alt=""></img>
        </a>
      </div>
      <div class="budget">
        <a href="https://github.com/stevecarofanoAdaptable-Budget-Tracker">   
          <img src={budget} alt=""></img>
        </a>
      </div>
    </div>
  );
}

export default ProjectsPage;
