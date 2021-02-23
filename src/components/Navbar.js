import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
// import "./Navbar.css";

export default function Navigation () {
  return (
<Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
  <Navbar.Brand href="#home">SF</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    {/* <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav> */}
    <Nav className="mr-auto"></Nav>
    <Nav>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#skills">Skills</Nav.Link>
      <Nav.Link href="#portfolio">Portfolio</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Contact Me
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}