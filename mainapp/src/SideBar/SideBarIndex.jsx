import React, { Component } from "react";
import "./SideBarIndex.css";
import { Icon } from "semantic-ui-react";
import LabelComp from "../Components/LabelComp";

class SideBarIndex extends Component {
  render() {
    return (
      <div className="SideBarOverall">
        <div className="sidebarIcon">
          <Icon name="sidebar" />
        </div>
        <div className="DashboardIcon">
          <Icon name="braille" />
        </div>
        <div className="historyIcon">
          <Icon name="history" />
          <LabelComp numberText="1" color="red" />
        </div>
        <div className="recordIcon">
          <Icon name="folder open outline" />
          <LabelComp numberText="1" color="red" />
        </div>
        <div className="cartIcon">
          <Icon name="shopping cart" />
        </div>
        <div className="marketPlaceIcon">
          <Icon name="cubes" />
          <LabelComp numberText="1" color="red" />
        </div>
        <div className="forumIcon">
          <Icon name="wechat" />
        </div>
        <div className="settingsIcon">
          <Icon name="setting" />
        </div>
      </div>
    );
  }
}
export default SideBarIndex;
