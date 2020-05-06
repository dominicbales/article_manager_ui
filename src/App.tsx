import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AuthenticationRoute from "./utils/_auth/AuthenticationRoute";

// Components
import Navbar from "./components/nav/Navbar";

// Pages
import Home from "./pages/home/Home";
import Setting from "./pages/setting/Setting";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
// Styles
import "./App.css";
import "react-bulma-components/dist/react-bulma-components.min.css";

function App() {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    const isUserSaved = checkLocalStorageForUser();
    if (user && !isUserSaved) {
      localStorage.setItem("user", JSON.stringify(user));
    } else if (isUserSaved && !user) {
      let savedUser = getUserFromStorage();
      let userObj = savedUser !== null ? JSON.parse(savedUser) : null;
      setUser(userObj);
    }
  }, [user]);

  const checkLocalStorageForUser = () => {
    const savedUser = getUserFromStorage();

    if (savedUser) return true;

    return false;
  };

  const getUserFromStorage = () => {
    return localStorage.getItem("user");
  };

  return (
    <Router>
      <>
        <Navbar setCurrentUser={setUser} currentUser={user} />
        <Switch>
          <Route exact path="/signin">
            <AuthenticationRoute auth={"SIGNIN"} user={user}>
              <Signin setCurrentUser={setUser} />
            </AuthenticationRoute>
          </Route>
          <Route exact path="/">
            <AuthenticationRoute auth="HOME" user={user}>
              <Home user={user} />
            </AuthenticationRoute>
          </Route>
          <Route path="/setting">
            <Setting user={user} />
          </Route>

          <Route exact path="/signup">
            <Signup setCurrentUser={setUser} />}
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
