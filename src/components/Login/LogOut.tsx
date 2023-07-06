import { FacebookLoginClient } from "@greatsumini/react-facebook-login";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  setisLoggedIn: Function;
}

const LogOut = ({ setisLoggedIn }: Props) => {
  const navigate = useNavigate();
  FacebookLoginClient.logout(() => {
    console.log("logout completed!");
  });

  FacebookLoginClient.logout;
  sessionStorage.clear();
  useEffect(() => {
    setisLoggedIn(false);
  }, []);

  // debugger;

  navigate("/login");

  return <></>;
};

export default LogOut;
