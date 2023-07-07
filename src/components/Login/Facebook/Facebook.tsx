import FacebookLogin, {
  FacebookLoginClient,
} from "@greatsumini/react-facebook-login";
import React from "react";
import { useNavigate } from "react-router";

interface Props {
  setError: Function;
  setisLoggedIn: Function;
}
const Facebook = ({ setError, setisLoggedIn }: Props) => {
  const navigate = useNavigate();

  return (
    <FacebookLogin
      appId="812101933554013" // prod "115731834904417"
      initParams={{
        version: "v16.0",
      }}
      onSuccess={(response) => {
        FacebookLoginClient.getLoginStatus;
        sessionStorage.setItem("accessToken", response["accessToken"]);
        sessionStorage.setItem(
          "clientID",
          "9J8pLdDOKqTbP6HH9JL5JMDFGoKsC7T5KYKrH5LGULLbJ41mGaWbDZ10GajJ9JT4GoKrHIKtH2KrGq10RYKtGq5ELKL6L4HHP5L3TMLPG2KrGrPNLrLKM5PO9JOmIbLPGqzXR7DKLcLdJ70bDKDZNrybDKH5LMDHLL5FLND99JT4M75ORdbLLtT0S4XrK418UaXLLLbvTLLvJL98P7H0IsmbDZ1LM55HH54bDKKbDqHJI5TGTaTgR4LHT753I4CbDKDoIL9LPLHBP5189JL3ML14PIKrGtLN9JT4T4PKHdL4"
        );
        setisLoggedIn(true);
        navigate("/home");
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
