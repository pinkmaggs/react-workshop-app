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
import "./Navigation.css";
import Cashier from "../cashier/Cashier";
import Home from "./Home";
import Title from "./Title";
import Login from "../Login/login";
import ProtectedRoute, { ProtectedRouteProps } from "../../ProtectedRoute";
import NavBar from "../NavBar";

const Navigation = () => {
  const checkCookieExists = (cookieName: string): boolean => {
    return localStorage.getItem("roles") != null; //Cookies.get(cookieName) !== undefined;
  };

  const isAuthenticated = false;
  // checkCookieExists("test");

  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, "outlet"> = {
    isAuthenticated: isAuthenticated,

    authenticationPath: "/login",
  };

  return (
    <>
      {isAuthenticated ? <NavBar /> : null}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/cashier"
            element={
              <ProtectedRoute
                {...defaultProtectedRouteProps}
                outlet={<Cashier />}
              />
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute
                {...defaultProtectedRouteProps}
                outlet={<Home />}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navigation;
