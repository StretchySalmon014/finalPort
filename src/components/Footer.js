import React from "react";
import { GrLinkedin } from 'react-icons/gr';
import "./Footer.css";


function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <GrLinkedin size={38} color = "white" fontSize="25px"/>
      </div>
      <p> &copy;  Fernando Cisneros 2022</p>
    </div>
  );
}

export default Footer;