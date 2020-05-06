import React, { useState } from "react";
import { NavLink } from "react-router-dom";

interface Props {}

const SettingMenu = (props: Props) => {
  const [selectedMenu, setSelectedMenu] = useState("");
  return (
    <aside className="menu">
      <p className="menu-label">General</p>
      <ul className="menu-list">
        <li>
          <NavLink
            className={`${selectedMenu === "Profile" && "is-active"}`}
            onClick={(e: any) => setSelectedMenu("Profile")}
            to="/setting/users/profile"
          >
            Profile
          </NavLink>
        </li>
        <li>
          <a>Customers</a>
        </li>
      </ul>
      <p className="menu-label">Administration</p>
      <ul className="menu-list">
        <li>
          <NavLink
            className={`${selectedMenu === "Accounts" && "is-active"}`}
            onClick={(e: any) => setSelectedMenu("Accounts")}
            to="/setting/users/accounts"
          >
            Accounts
          </NavLink>
        </li>
        {/* <li>
          <a className="is-active">Manage Your Team</a>
          <ul>
            <li>
              <a>Members</a>
            </li>
            <li>
              <a>Plugins</a>
            </li>
            <li>
              <a>Add a member</a>
            </li>
          </ul>
        </li> */}
        <li>
          <a>Invitations</a>
        </li>
        <li>
          <a>Cloud Storage Environment Settings</a>
        </li>
        <li>
          <a>Authentication</a>
        </li>
      </ul>
      <p className="menu-label">Transactions</p>
      <ul className="menu-list">
        <li>
          <a>Payments</a>
        </li>
        <li>
          <a>Transfers</a>
        </li>
        <li>
          <a>Balance</a>
        </li>
      </ul>
    </aside>
  );
};

export default SettingMenu;
