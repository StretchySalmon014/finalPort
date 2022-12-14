import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../data/ProjectList";
import { BsGithub } from 'react-icons/bs';
import "./ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="projectDisplay">
      <h1> {project.name}</h1>
      <div className="projectImageDiv">
        <a  href = {project.websiteLink}>
        <img src={project.image2} width = "300px" height = "300px" className="icon"/>
        </a>
        <img src={project.image} width = "300px" height = "300px" className="reg"/>
        <img src={project.image3} width = "300px" height = "300px" className="reg"/>
        <img src={project.image4} width = "300px" height = "300px" className="reg"/>
      </div>
      <p>
        <b>Description</b> 
      </p>
      <p> 
       {project.description}
      </p>
      <p>
        <b>Building Process</b> 
      </p>
      <p> 
        {project.building}
      </p>
      <p>
        <b>Lessons Learned</b> 
      </p>
      <p> 
        {project.lesson}
      </p>
      <p>
        <b>Skills</b> 
      </p>
      <p> {project.skills}</p>
      <a href = {project.link}>
      <BsGithub size={45} color = "White" fontSize="25px"/>
      </a>
    </div>
  );
}

export default ProjectDisplay;