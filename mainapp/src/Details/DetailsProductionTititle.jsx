import React, { Component } from "react";
import { Icon, Image } from "semantic-ui-react";
import "./Details.css";
import { withRouter } from "react-router-dom";
import prodIcon from "../Images/prod_icon.png";

class DetailsProductionTititle extends Component {
  goBack = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <>
        <div className="backButton">
          <Icon onClick={() => this.goBack()} name="arrow circle left" /> Back
        </div>
        <div className="prodText">
          <Image src={prodIcon} />
        </div>
        <div className="prodRealText">Production House</div>
      </>
    );
  }
}

export default withRouter(DetailsProductionTititle);
