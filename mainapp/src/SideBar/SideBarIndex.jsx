import React, { Component } from "react";
import "./SideBarIndex.css";
import { Icon, Image } from "semantic-ui-react";
import LabelComp from "../Components/LabelComp";
import groupa from "../Images/groupa.png";
import timeleft from "../Images/time_left.png";
import fulltimeleft from "../Images/full_time_left.png";
import sidefile from "../Images/side_file.png";
import sideshop from "../Images/side_shopping_cart.png";
import supply from "../Images/supply.png";
import fullsupply from "../Images/supply_full.png";
import chat from "../Images/chat.png";
import setting from "../Images/settings.png";

class SideBarIndex extends Component {
  state = {
    shown: true
  };
  render() {
    return this.state.shown === true ? (
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
      <div className="fullSideBarOverall">
        <div
          className="fullSidebarIcon"
          onClick={() => this.setState({ shown: !this.state.shown })}
        >
          <Icon name="times" />
        </div>
        <div className="fullDashboardIcon">
          <Image src={groupa} />
          <div className="dashBoardText">Dashboard</div>
        </div>
        <div className="fullHistoryIcon">
          <Image src={fulltimeleft} />
          <div className="historyIconText">Operations</div>
          <Icon name="caret down" />
        </div>
        <div className="fullRecordIcon">
          <Image src={sidefile} />
          <div className="recordIconText">Records</div>
        </div>
        <div className="fullCartIcon">
          <Image src={sideshop} />
          <div className="cartIconText">Supply Store</div>
        </div>
        <div className="fullMarketPlaceIcon">
          <Image src={fullsupply} />
          <div className="marketIconText">Market Place </div>
        </div>
        <div className="fullForumIcon">
          <Image src={chat} />
          <div className="forumIconText">Forums</div>
          <LabelComp numberText="1" color="red" />
        </div>
        <div className="fullSettingsIcon">
          <Image src={setting} />
          <div className="settingsIconText">Settings</div>
        </div>
      </div>
    );
  }
}
export default SideBarIndex;
