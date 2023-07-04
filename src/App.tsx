import React, { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute, { ProtectedRouteProps } from "./ProtectedRoute";
import NavBar from "./components/NavBar";
import Cashier from "./components/cashier/Cashier";
import LogOut from "./components/Login/LogOut";

const App = () => {
  const [isLoggedIn, setisLoggedIn] = useState(
    !!sessionStorage.getItem("clientID")
  );

  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, "outlet"> = {
    Authenticated: isLoggedIn,
    authenticationPath: "/Login",
  };

  return (
    <>
      {isLoggedIn ? <NavBar /> : null}
      <BrowserRouter>
        <Routes>
          <Route
            path="/Login"
            element={<Login setisLoggedIn={setisLoggedIn} />}
          />
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
                outlet={
                  isLoggedIn ? (
                    <Home />
                  ) : (
                    <Login setisLoggedIn={setisLoggedIn} />
                  )
                }
              />
            }
          />
          <Route
            path="/logout"
            element={
              <ProtectedRoute
                {...defaultProtectedRouteProps}
                outlet={<LogOut setisLoggedIn={setisLoggedIn} />}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
