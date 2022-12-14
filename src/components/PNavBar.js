import React from "react";
import {Navbar, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Navbar.css";


function PNavbar() {

  return (
    <Navbar className = "bar" variant = "dark" style = {{height: 80}}>
      <Navbar.Brand className = "pokeHeaderIcon">
      <Link to = "/">
      <img src="/images/coder1.png" width="75" height="75" alt = "img" style={{marginTop: "1rem",}}/>
      </Link>
      </Navbar.Brand>
    <Container>
        <Link to = "/">Home</Link>
        <Link to = "/aboutMe">About Me</Link>
        <Link to = "/resume">Resume</Link>
    </Container>
</Navbar>
  );
}

export default PNavbar;