import React, { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute, { ProtectedRouteProps } from "./ProtectedRoute";
import NavBar from "./components/NavBar";
import Cashier from "./components/cashier/Cashier";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("clientID")
  );
  // useEffect(() => {
  //   setIsAuthenticated(sessionStorage.getItem("clientID") !== null);
  // }, [isAuthenticated]);

  /*const authorizeAccess = (authState: boolean) => {
    setAuthorization(authState);
  };*/

  /*const checkCookieExists = (cookieName: string): boolean => {
    return sessionStorage.getItem("roles") != null; //Cookies.get(cookieName) !== undefined;
  };*/
  console.log(localStorage.getItem("clientID"));
  //const isAuthenticated = true;
  // checkCookieExists("test");
  React.useEffect(() => {
    setIsAuthenticated(Boolean(localStorage.getItem("clientID")));
    console.log(isAuthenticated);
  }, [isAuthenticated]);

  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, "outlet"> = {
    Authenticated: isAuthenticated,

    authenticationPath: "/Login",
  };

  return (
    <>
      {isAuthenticated ? <NavBar /> : null}
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route
            path="/Cashier"
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
