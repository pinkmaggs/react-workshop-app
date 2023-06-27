import React from "react";
import { Navigate } from "react-router-dom";

class LoginForm extends React.Component {
  state = { user: null, error: null };

  async handleSubmit(event) {
    event.preventDefault();
    const { username, password } = event.target.elements;

    try {
      // Simulating a login request
      // Replace this with your actual login logic
      let user = await login(username.value, password.value);

      this.setState({ user, error: null });
    } catch (error) {
      this.setState({ user: null, error: error.message });
    }
  }

  render() {
    const { user, error } = this.state;

    return (
      <div>
        {error && <p>{error}</p>}
        {user && <Navigate to="/dashboard" replace={true} />}
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" name="username" placeholder="Username" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit">Log In</button>
        </form>
      </div>
    );
  }
}

async function login(username, password) {
  // Simulating a login request
  // Replace this with your actual login logic
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "password") {
        resolve({ username });
      } else {
        reject(new Error("Invalid username or password"));
      }
    }, 1000);
  });
}

export default LoginForm;
