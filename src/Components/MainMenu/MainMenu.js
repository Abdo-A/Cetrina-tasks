import { Drawer, Icon } from "antd";
import React from "react";

import "./MainMenu.css";

const MainMenu = props => {
  return (
    <div className="MainMenu">
      <Icon
        type="menu-fold"
        theme="outlined"
        className="MainMenu__ToggleIcon"
        onClick={props.toggleSideBar}
        style={{ color: "white" }}
      />

      <Drawer
        placement="right"
        closable
        onClose={props.toggleSideBar}
        visible={props.sideBarVisible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

//Expected props: toggleSideBar, sideBarVisible

export default MainMenu;
