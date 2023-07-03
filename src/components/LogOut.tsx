import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  setisLoggedIn: Function;
}

const LogOut = ({ setisLoggedIn }: Props) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    setisLoggedIn(false);
    sessionStorage.clear();
    navigate("/login");
  }, [navigate, setisLoggedIn]);

  return <div></div>;
};

export default LogOut;
