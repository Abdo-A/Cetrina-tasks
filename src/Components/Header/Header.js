import React from "react";

import MainMenu from "../MainMenu/MainMenu";

import "./Header.css";

const Header = props => {
  const date = new Date().toDateString();
  return (
    <div className="Header">
      <span className="Header__LeftSpan">
        <span className="Header__Link">Logo</span>
        <span>
          <span className="Header__Link">Floorplan</span>
          <span className="Header__Link">Reservations</span>
        </span>
      </span>
      <span className="Header__RightSpan">
        <span>{date}</span>
        <span className="Header__Link Header__DineIn">Dine in</span>
        <MainMenu
          toggleSideBar={props.toggleSideBar}
          sideBarVisible={props.sideBarVisible}
        />
      </span>
    </div>
  );
};

export default Header;
