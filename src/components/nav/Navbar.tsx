import React, { useState } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  currentUser: any | null;
  setCurrentUser: any;
}

const Navbar = ({ currentUser, setCurrentUser }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const handleSignout = () => {
    localStorage.removeItem("user");
    setCurrentUser(null);
  };

  const handleActiveClick = (event: any) => {
    event.preventDefault();
    setIsActive((prevState) => !prevState);
  };

  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
      style={{ height: "7%" }}
    >
      <div className="navbar-brand">
        <NavLink
          className="navbar-item title is-3"
          style={{ margin: "0px", color: "white" }}
          to="/"
        >
          Article Manager
        </NavLink>

        <a
          href=""
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={handleActiveClick}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-start"></div>

        <div className="navbar-end">
          {currentUser ? (
            <div className="navbar-item has-dropdown is-hoverable">
              {!isActive && (
                <a href="" className="navbar-link">
                  {currentUser["username"]}
                </a>
              )}

              <div className="navbar-dropdown">
                <NavLink className="navbar-item" to="/setting">
                  Setting
                </NavLink>
                <hr className="navbar-divider" />
                <NavLink onClick={handleSignout} className="navbar-item" to="/">
                  Sign out
                </NavLink>
              </div>
            </div>
          ) : (
            <div className="navbar-item">
              <div className="buttons">
                <NavLink className="button is-primary" to="/signup">
                  <strong>Sign up</strong>
                </NavLink>
                <NavLink className="button is-light" to="/signin">
                  Log in
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
