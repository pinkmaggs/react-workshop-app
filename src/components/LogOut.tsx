import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  setisLoggedIn: Function;
}
const LogOut = ({ setisLoggedIn }: Props) => {
  const navigate = useNavigate();
  setisLoggedIn(false);
  sessionStorage.clear();
  navigate("/login");
  return <div></div>;
};

export default LogOut;
