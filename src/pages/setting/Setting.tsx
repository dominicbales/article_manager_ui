import React from "react";
// Components
import SettingMenu from "./SettingMenu";
import SettingContentArea from "./SettingContentArea";

interface Props {
  user: any;
}

const Setting = (props: Props) => {
  return (
    <div className="container" style={{ marginTop: "4rem" }}>
      <div className="columns is-desktop is-full-mobile">
        <div className="column is-one-fifth">
          <SettingMenu />
        </div>
        <div className="column">
          <SettingContentArea user={props.user} />
        </div>
      </div>
    </div>
  );
};

export default Setting;
