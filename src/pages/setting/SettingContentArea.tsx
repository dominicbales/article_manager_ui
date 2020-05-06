import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import Accounts from "./components/accounts/Accounts";
import Profile from "./components/profile/Profile";

interface Props {
  user: any;
}

const SettingContentArea = (props: Props) => {
  return (
    <div>
      <Switch>
        <Route path="/setting/users/accounts">
          <Accounts user={props.user} />
        </Route>
        <Route exact path="/setting/users/profile" component={Profile} />
      </Switch>
    </div>
  );
};

export default SettingContentArea;
