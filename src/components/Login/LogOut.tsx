import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  setisLoggedIn: Function;
}

const LogOut = ({ setisLoggedIn }: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    setisLoggedIn(false);
    sessionStorage.clear();
    navigate("/login");
  }, [setisLoggedIn, navigate]);

  return null; // You can also use <></> or any other valid JSX element here
};

export default LogOut;
