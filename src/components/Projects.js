import React from "react";
import ProjectItem from "./ProjectItem";
import {ProjectList} from "../data/ProjectList"
import "./Projects.css";

function Projects() {
  return (
    <div className="projects">
      <div className="projectList">
      {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;