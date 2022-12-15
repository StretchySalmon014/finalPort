import React from "react";
import "./AboutMe.css";




function AboutMe() {
  return (
    
    <div className="homeAbout">
      <div class = "aboutMeDiv">
        <h2> About Me</h2>
        <p style={{flex: 1}}> 
        <img src="/images/coder1.png" width="350" height="350" alt = "img"/>
        Welcome to my personal portfolio. As you can see there are various unfinished details; however, this is intentional as to not have 
        too many personal identifiers for the sake of anonymous grading.
        <br/> <br/> <br/>
        For now, I would love to share some information about myself that will be present in the final iteration of this portfolio.
        <br/> <br/> <br/>
        Currently, I am a fourth-year Brown University student pursuing an ScB in Computer Science--focusing in the Systems and Security tracks. I'm currently concentrating in Computer Science with the intention of becoming a Software Engineer.
        As of now my post-graduation plans include working in Microsoft's Gaming Org as a software engineer. 
        <br/> <br/>
        *Photo will be added above soon*
        </p>
      </div>
    </div>
  );
}

export default AboutMe;