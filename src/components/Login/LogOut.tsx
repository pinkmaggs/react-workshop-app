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
    debugger;
    navigate("/login");
  }, []);

  return <></>;
};

export default LogOut;
