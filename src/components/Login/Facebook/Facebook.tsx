import FacebookLogin from "@greatsumini/react-facebook-login";
import React from "react";
import { useNavigate } from "react-router";

interface Props {
  setError: Function;
  setisLoggedIn: Function;
  goHome: () => void;
}
const Facebook = ({ setError, setisLoggedIn, goHome }: Props) => {
  const navigate = useNavigate();
  return (
    <FacebookLogin
      appId="812101933554013" // prod "115731834904417"
      initParams={{
        version: "v16.0",
      }}
      onSuccess={(response) => {
        sessionStorage.setItem("accessToken", response["accessToken"]);
        setisLoggedIn(true);
        goHome();
        // navigate("/home");
        // debugger;
      }}
      onFail={(error) => {
        setError("Facebook Login Failed: ", error);
      }}
      style={{
        backgroundColor: "#4267b2",
        color: "#fff",
        fontSize: "16px",
        width: "100%",
        height: "36.6px",
        border: "none",
        borderRadius: "4px",
      }}
    />
  );
};

export default Facebook;
