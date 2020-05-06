import React, { ReactElement } from "react";
import axios from "axios";
// Components
import Button from "../../components/button/Button";

interface Props {
  setCurrentUser: any;
}

function Signin({ setCurrentUser }: Props): ReactElement {
  // Button Styles
  const buttonClassName = "is-primary field column is-full h-50px";
  // Component State
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (loading) {
      setTimeout(() => {
        submitLoginData();
        setLoading(false);
      }, 1000);
    }
  }, [loading]);

  const handleSigninClick = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    setLoading(true);
  };

  const submitLoginData = async () => {
    try {
      const data = {
        password,
        email,
      };
      const result = await axios.post(
        `http://localhost:3000/api/v1/login`,
        data
      );
      setCurrentUser(result.data);
    } catch (err) {
      setError("Invalid Email/Password combination.");
      setLoading(false);
    }
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
            Sign in
          </h1>
        </div>
        {error && (
          <article className="message is-danger">
            <div className="message-body">{error}</div>
          </article>
        )}
        <div className="field column is-half is-offset-one-quarter">
          <div className="control">
            <label>Email</label>
            <input
              className="input is-medium"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
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
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </div>
        <div className="field column is-half is-offset-one-quarter">
          <Button
            isLoading={loading}
            handleClick={handleSigninClick}
            text="Sign in"
            buttonClassName={buttonClassName}
          />
        </div>
      </div>
    </div>
  );
}

export default Signin;
