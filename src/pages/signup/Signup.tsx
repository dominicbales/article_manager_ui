import React, { ReactElement, useState } from "react";
import axios from "axios";

interface Props {
  children?: React.ReactNode;
  setCurrentUser: any;
}

function Signup({ setCurrentUser }: Props): ReactElement {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmitClick = async (event: any) => {
    event.preventDefault();
    const data = {
      username,
      email,
      password,
      password_confirmation: passwordConfirmation
    };
    const result = await axios.post(`http://localhost:3000/api/v1/users`, data);
    console.log("result is2:", result);
    setCurrentUser(result.data);
  };

  return (
    // TODO: replace forms with reusable form component
    <div className="flex container">
      <div className="column">
        <div className="field column is-half is-offset-one-quarter">
          <h1
            className="title is-1"
            style={{ textAlign: "center", marginTop: "0.5em" }}
          >
            Sign up
          </h1>
        </div>
        <div className="field column is-half is-offset-one-quarter">
          <div className="control">
            <label>Username</label>
            <input
              value={username}
              name="username"
              onChange={(event: any) => setUsername(event.target.value)}
              className="input is-medium"
              type="text"
              placeholder="Username"
            />
          </div>
        </div>
        <div className="field column is-half is-offset-one-quarter">
          <div className="control">
            <label>Email</label>
            <input
              value={email}
              name="email"
              onChange={(event: any) => setEmail(event.target.value)}
              className="input is-medium"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="field column is-half is-offset-one-quarter">
          <div className="control">
            <label>Password</label>
            <input
              value={password}
              name="password"
              onChange={(event: any) => setPassword(event.target.value)}
              className="input is-medium"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="field column is-half is-offset-one-quarter">
          <div className="control">
            <label>Confirm Password</label>
            <input
              value={passwordConfirmation}
              name="passwordConfirmation"
              onChange={(event: any) =>
                setPasswordConfirmation(event.target.value)
              }
              className="input is-medium"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <div className="field column is-half is-offset-one-quarter">
          <button
            style={{ width: "100%", fontWeight: "bold" }}
            className="button is-primary"
            onClick={handleSubmitClick}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
