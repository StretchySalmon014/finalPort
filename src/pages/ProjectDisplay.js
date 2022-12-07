import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../data/ProjectList";
import { BsGithub } from 'react-icons/bs';
import "./ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Description</b> 
      </p>
      <p> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>
        <b>Skills</b> 
      </p>
      <p> {project.skills}</p>
      <BsGithub size={45} color = "black" fontSize="25px"/>
    </div>
  );
}

export default ProjectDisplay;