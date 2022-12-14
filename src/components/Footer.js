import React from "react";
import { GrLinkedin } from 'react-icons/gr';
import "./Footer.css";


function Footer() {
  return (
    <div className="footer">
      <a href="https://www.linkedin.com/company/microsoft/">
      <GrLinkedin size={38} color = "white" fontSize="25px"/>
      </a>
      <p>StretchySalmon014 Final Portfolio</p>
    </div>
  );
}

export default Footer;