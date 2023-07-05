import FacebookLogin from "@greatsumini/react-facebook-login";
import React from "react";

const Facebook = () => {
  return (
    <FacebookLogin
      appId="1698972177090439" // prod "115731834904417"
      initParams={{
        version: "v16.0",
      }}
      onSuccess={(response) => {
        debugger;
      }}
      style={{
        backgroundColor: "#4267b2",
        color: "#fff",
        fontSize: "16px",
        padding: "12px 24px",
        border: "none",
        borderRadius: "4px",
      }}
    />
  );
};

export default Facebook;
