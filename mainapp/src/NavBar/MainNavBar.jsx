import React, { Component } from "react";
import { Image, Menu, Icon } from "semantic-ui-react";
import "./MainNavBar.css";
import logo from "../Images/logo.png";
import profile from "../Images/profile_picture.jpg";
import LabelComp from "../Components/LabelComp";

const colorBlue = "blue";

class MainNavBar extends Component {
  render() {
    return (
      <>
        <div className="navBarOverall">
          {/* <div className="logoDiv">
            <Image src={logo} size="small" />
          </div>
          <div className="">
            <RightNavBar />
          </div> */}
          <Menu secondary>
            <div className="logoDiv">
              <Image src={logo} size="small" />
            </div>
            <Menu.Menu position="right">
              {/* <Menu.Item>
                <Input icon="search" placeholder="Search..." />
              </Menu.Item> */}

              <div id="searchDiv">
                <div className="divide"></div>
                <Icon name="search" />
              </div>
              <div className="messageDiv">
                <div className="divide"></div>
                <Icon name="mail outline" /> Message
                <LabelComp numberText="1" color={colorBlue} />
              </div>
              <div className="marketPlaceDiv">
                <div className="divide"></div>
                <Icon name="cart" /> Marketplace
                <LabelComp numberText="1" color={colorBlue} />
              </div>
              <div className="notificationDiv">
                <div className="divide"></div>
                <Icon name="list ul" /> Notification
                <LabelComp numberText="1" color={colorBlue} />
              </div>
              <div className="profilePic">
                <div className="divide"></div>
                <Image src={profile} size="small" /> Me
                <Icon name="caret down" />
              </div>
            </Menu.Menu>
          </Menu>
        </div>
      </>
    );
  }
}

export default MainNavBar;
