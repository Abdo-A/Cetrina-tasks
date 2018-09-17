import { Menu, Sidebar, Button, Icon } from "semantic-ui-react";
import React from "react";

import "./MainMenu.css";

const MainMenu = props => {
  return (
    <div className="MainMenu">
      <Icon
        onClick={props.toggleSideBar}
        name="content"
        className="MainMenu__ToggleIcon"
        color="grey"
        size="large"
        inverted
      />

      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        //onHide={props.handleSidebarHide}
        vertical
        visible={props.sideBarVisible}
        width="thin"
        direction="right"
      >
        <br />
        <Icon
          onClick={props.toggleSideBar}
          name="close"
          style={{
            cursor: "pointer",
            marginLeft: "70%"
          }}
          color="grey"
          inverted
        />

        <Menu.Item as="a">Home</Menu.Item>
        <Menu.Item as="a">Games</Menu.Item>
        <Menu.Item as="a">Channels</Menu.Item>
      </Sidebar>
    </div>
  );
};

//Expected props: toggleSideBar, sideBarVisible

export default MainMenu;
