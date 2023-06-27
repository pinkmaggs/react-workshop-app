import React from "react";

import Navigation from "./components/Home/Navigation";
import Home from "./components/Home/Home";
import Login from "./components/Login/login";
import LoginDemo from "./components/login/LoginDemo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute, { ProtectedRouteProps } from "./ProtectedRoute";
import NavBar from "./components/NavBar";
import Cashier from "./components/cashier/Cashier";

const App = () => {
  const checkCookieExists = (cookieName: string): boolean => {
    return localStorage.getItem("roles") != null; //Cookies.get(cookieName) !== undefined;
  };

  const isAuthenticated = true;
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
          <Route
            index
            element={
              <ProtectedRoute
                {...defaultProtectedRouteProps}
                outlet={isAuthenticated ? <Home /> : <Login />}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
