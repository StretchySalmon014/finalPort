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
        <h2> Hey! I'm Fernando Cisneros</h2>
        <div className="prompt">
          <p>Incoming software engineer at Microsoft</p>
          <GrLinkedin size={38} color = "white" fontSize="25px"/>
          <BsGithub size={45} color = "white" fontSize="25px"/>
          <MdEmail size={45} color = "white" fontSize="25px"/>
        </div>
      </div>
      <h1> Projects</h1>
      <div className="projects">
        <Projects/>
      </div>

      
    </div>
  );
}

export default Home;