import React from "react";
import { IoNewspaper } from 'react-icons/io5';
import "./Resume.css";




function Resume() {
  return (
    <div className="resumeHome">
      {/* <p className="summary">Here is a quick overview of my current professional resume. Feel free to take a look! If you would like to know more my LinkedIn page is linked below! </p> */}
      <a href ="https://i.redd.it/mqxmcmx0xk971.jpg">
      <IoNewspaper size={38} color = "white" fontSize="25px" alt = "This is linked to a fake resume"/>
      </a>
      <p className="resumeIntro">
        *The resume linked above is a random anonymized resume that is not representative of my professional experience.
      </p>
      <h1>Education</h1>
      <div className= "resumeInfo">
        <p>
          <b>Brown University</b> · Providence, RI · Aug 2020 - May 2023
        </p>
        <p>
        Computer Science ScB · Systems & Security 
        </p>
      </div>
      <h1>Work Experience</h1>
      <div className= "resumeInfo">
        <p>
          <b>Microsoft</b> · Redmond, WA · May 2021 - July 2021
        </p>
        <p>
        Software Engineer Intern · Microsoft Azure
        </p>
        <p>
          <b>Amazon</b> · Santa Clara, CA · May 2020 - August 2020
        </p>
        <p>
        Research Engineer Intern · AWS
        </p>
        <p>
          <b>Brown University</b> · Providence, RI · October 2020 - July 2021
        </p>
        <p>
        Software Engineering Research Intern · Computational Biology Core
        </p>
      </div>
      <h1>Community Engagement</h1>
      <p>
          <b>Undergraduate Teaching Assistant</b>
      </p>
      <p>
      CSCI 0330 Introduction to Computer Systems · CSCI 1800 Cybersecurity and International Relations
      </p>
      <p>
          <b>Mosaic+ Transition Program Leader · Mosaic+ Transition Teaching Assistant</b>
      </p>
      <p>
      Mosaic+ Transition Pre-Orientation Program 
      </p>
      <p>Providence, RI · john_doe@brown.edu · (123) 456 - 7890 </p>
    </div>
  );
}

export default Resume;