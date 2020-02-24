import React, { Component } from "react";
import "./SideBarIndex.css";
import { Icon, Image } from "semantic-ui-react";
import LabelComp from "../Components/LabelComp";
import groupa from "../Images/groupa.png";
import timeleft from "../Images/time_left.png";
import sidefile from "../Images/side_file.png";
import sideshop from "../Images/side_shopping_cart.png";
import supply from "../Images/supply.png";
import chat from "../Images/chat.png";
import setting from "../Images/settings.png";

class SideBarIndex extends Component {
  state = {
    shown: true
  };
  render() {
    return this.state.shown == true ? (
      <div className="SideBarOverall">
        <div
          className="sidebarIcon"
          onClick={() => this.setState({ shown: !this.state.shown })}
        >
          <Icon name="sidebar" />
        </div>
        <div className="DashboardIcon">
          <Image src={groupa} />
        </div>
        <div className="historyIcon">
          <Image src={timeleft} />
          <LabelComp numberText="1" color="red" />
        </div>
        <div className="recordIcon">
          <Image src={sidefile} />
          <LabelComp numberText="1" color="red" />
        </div>
        <div className="cartIcon">
          <Image src={sideshop} />
        </div>
        <div className="marketPlaceIcon">
          <Image src={supply} />
        </div>
        <div className="forumIcon">
          <Image src={chat} />
        </div>
        <div className="settingsIcon">
          <Image src={setting} />
        </div>
      </div>
    ) : (
      <div className="SideBarOverall">
        <div
          className="sidebarIcon"
          onClick={() => this.setState({ shown: !this.state.shown })}
        >
          <Icon name="times" />
        </div>
        <div className="DashboardIcon">
          <Image src={groupa} />
          DashboardDashboardDashboardDashboard
        </div>
        <div className="historyIcon">
          <Image src={timeleft} />
        </div>
        <div className="recordIcon">
          <Image src={sidefile} />
        </div>
        <div className="cartIcon">
          <Image src={sideshop} />
        </div>
        <div className="marketPlaceIcon">
          <Image src={supply} />
        </div>
        <div className="forumIcon">
          <Image src={chat} />
        </div>
        <div className="settingsIcon">
          <Image src={setting} />
        </div>
      </div>
    );
  }
}
export default SideBarIndex;
