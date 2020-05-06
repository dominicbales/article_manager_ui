import React from "react";
import { Redirect } from "react-router-dom";

interface Props {
  children: React.ReactElement;
  user?: any;
  auth: string;
}

const AuthenticationRoute = (props: Props) => {
  const { auth } = props;
  switch (auth) {
    case "SIGNIN":
      return (
        <div>
          {props.user ? (
            <Redirect to={{ pathname: "/", state: props.user }} />
          ) : (
            props.children
          )}
        </div>
      );
    case "HOME":
      return props.children;
    default:
      return <div>welcome, cant find route</div>;
  }
};

export default AuthenticationRoute;
