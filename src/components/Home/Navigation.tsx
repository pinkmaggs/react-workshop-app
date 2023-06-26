import React from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cashier from "../cashier/cashier";
import Login from "../../login";
import Home from "./Home";
import Title from "../cashier/cart/title";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <Title />
      <Navbar bg="light" expand="lg" className="myNav">
        <Navbar.Brand href="http://localhost:5173/home">HOME</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="mr-auto">
            <Nav.Link href="http://localhost:5173/cashier" active>
              CASHIER <span className="sr-only">(current)</span>
            </Nav.Link>
            <Nav.Link href="#" active>
              SCUBA DIVING <span className="sr-only">(current)</span>
            </Nav.Link>
            <Nav.Link href="http://localhost:5173/login">LOG IN</Nav.Link>
            <NavDropdown title="ACCOUNT" id="navbarDropdown">
              <NavDropdown.Item href="http://localhost:5173/login">
                LOG IN / SIGN UP
              </NavDropdown.Item>
              <NavDropdown.Item href="#">PREVIOUS PURCHASES</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">ORDER PROCESS</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cashier" element={<Cashier />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Navigation;
