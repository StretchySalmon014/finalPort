import React from "react";
import { GrLinkedin } from 'react-icons/gr';
import { BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import  Projects  from '../components/Projects'
import "./Home.css";




function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hey! I'm StretchySalmon014</h2>
        <p>Welcome to my professional portfolio. This is a final project for CSCI 1300 UI/UX at Brown University. 
        Here you will be able to review the projects I have made in CSCI 1300. After final grading I plan to incorporate more personal projects
        and projects from other Computer Science classes at Brown.</p>
        <div className="prompt">
          <p>Incoming Software Engineer at Microsoft</p>
          <a href="https://www.linkedin.com/company/microsoft/">
          <GrLinkedin size={38} color = "white" fontSize="25px"/>
          </a>
          <a href="https://github.com/StretchySalmon014">
          <BsGithub size={45} color = "white" fontSize="25px"/>
          </a>
      </div>
      </div>
      <h1> Projects</h1>
      <div className = "projects">
        <Projects/> 
      </div>
    </div>
  );
}

export default Home;