import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Title from "./Home/Title";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div id="Title-Nav-wrapper">
      <Title />
      <Navbar expand="lg" className="myNav">
        <Navbar.Brand href="./home">HOME</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="mr-auto">
            <Nav.Link href="./cashier" active>
              SHOP <span className="sr-only">(current)</span>
            </Nav.Link>
            <Nav.Link href="#" active>
              SCUBA DIVING <span className="sr-only">(current)</span>
            </Nav.Link>
            <NavDropdown title="ACCOUNT" id="navbarDropdown">
              <NavDropdown.Item href="./logout">LOG OUT</NavDropdown.Item>
              <NavDropdown.Item href="#">PREVIOUS PURCHASES</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">ORDER PROCESS</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
