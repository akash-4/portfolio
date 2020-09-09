import React from "react";
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';

function Header() {
  return (
   
<Navbar collapseOnSelect expand="lg" bg="#333333" variant="dark" className="NavBar">
  <Navbar.Brand href="#home"><img src="images/logo.jpg" className="nav-img" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#skills">Skills</Nav.Link>
      <Nav.Link href="#projects">Projects</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

  );
}

export default Header;
