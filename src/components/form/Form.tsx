import React, { ReactElement } from "react";

interface Props {}

function Form({}: Props): ReactElement {
  return (
    <div className="flex container">
      <div className="column">
        <div className="field column is-half is-offset-one-quarter">
          <h1
            className="title is-1"
            style={{ textAlign: "center", marginTop: "0.5em" }}
          >
            Signup
          </h1>
        </div>
        <div className="field column is-half is-offset-one-quarter">
          <div className="control">
            <label>Username</label>
            <input
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
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
