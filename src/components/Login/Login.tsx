import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { useNavigate } from "react-router";

interface Props {}
const Login = ({}: Props) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
  const navigate = useNavigate();
  const [loadingCircle, setloadingCircle] = useState(false);

  const login = async () => {
    let config = {
      method: "POST",
      headers: {
        s1code: "demo",
        "Content-Type": "application/json; charset=windows-1253",
      },
      body: JSON.stringify({
        service: "login",
        username: email,
        password: password,
        appId: 156,
      }),
    };

    try {
      let response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://soft1.s1cloud.net/s1services?enc=utf8",
        config
      );

      let jsonData = await response.json();
      if (jsonData["success"]) {
        let config = {
          method: "POST",
          headers: {
            s1code: "demo",
            "Content-Type": "application/json; charset=windows-1253",
          },
          body: JSON.stringify({
            service: "authenticate",
            clientID: jsonData["clientID"],
            COMPANY: jsonData["objs"][0]["COMPANY"],
            BRANCH: jsonData["objs"][0]["BRANCH"],
            MODULE: jsonData["objs"][0]["MODULE"],
            REFID: jsonData["objs"][0]["REFID"],
          }),
        };

        try {
          let response = await fetch(
            "https://cors-anywhere.herokuapp.com/https://soft1.s1cloud.net/s1services?enc=utf8",
            config
          );

          let jsonData = await response.json();
          if (jsonData["success"]) {
            localStorage.setItem("clientID", jsonData["clientID"]);
          }
          return jsonData["success"];
        } catch (error) {
          console.error("Error fetching data from API:", error);
        }
      }
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };

  const handleValidation = () => {
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
    } else {
      setemailError("");
    }

    if (!password.match(/^[a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      setpasswordError(
        "Only Letters and length must be min 8 Characters and Max 22 Characters"
      );
    } else {
      setpasswordError("");
    }

    return formIsValid;
  };

  const loginSubmit = async (e) => {
    setloadingCircle(true);
    if (true) {
      try {
        if (await login()) {
          navigate("/home");
        } else {
          setpasswordError("Seems like the email or password is incorrect");
          setloadingCircle(false);
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    }
  };

  return (
    <>
      <div className="App">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-4">
              <form id="loginform">
                <div className="form-group mb-3">
                  <label>Email address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="EmailInput"
                    name="EmailInput"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <small id="emailHelp" className="text-danger form-text">
                    {emailError}
                  </small>
                </div>
                <div className="form-group mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <small id="passworderror" className="text-danger form-text">
                    {passwordError}
                  </small>
                </div>
                {loadingCircle ? (
                  <>
                    <div className="spinner-border text-dark"></div>
                  </>
                ) : (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={loginSubmit}
                  >
                    Sign in
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
