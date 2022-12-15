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
        *The above resume is a random anonymized resume this is not representative of my professional experience. Will be changed after anonymized grading.
      </p>
      <h1>Education</h1>
      <div className= "resumeInfo">
        <p>
          <b>ABC University</b> · Providence, RI · Aug 20XX - May 20XX
        </p>
        <p>
        Computer Science ScB · Systems & Security 
        </p>
      </div>
      <h1>Work Experience</h1>
      <div className= "resumeInfo">
        <p>
          <b>Company A</b> · Redmond, WA · May 20XX - July 20XX
        </p>
        <p>
        Software Engineer Intern · Company A Team
        </p>
        <p>
          <b>Company B</b> · Santa Clara, CA · May 20XX- August 20XX
        </p>
        <p>
        Research Engineer Intern · Company B Team
        </p>
        <p>
          <b>Company C</b> · Providence, RI · October 20XX - July 20XX
        </p>
        <p>
        Software Engineering Research Intern · Company C Team
        </p>
      </div>
      <h1>Community Engagement</h1>
      <p>
          <b>Undergraduate Teaching Assistant</b>
      </p>
      <p>
      CSCI XXXX Course Name A · CSCI XXXX Course Name B
      </p>
      <p>
          <b>XXX XXXX Program Leader · XXXX Program Teaching Assistant</b>
      </p>
      <p>
      XXXX Transition Pre-Orientation Program 
      </p>
      <p>Providence, RI · john_doe@brown.edu · (123) 456 - 7890 </p>
    </div>
  );
}

export default Resume;