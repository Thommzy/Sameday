import React, { Component } from "react";
import { Menu, Button } from "semantic-ui-react";
import LabelComp from "../Components/LabelComp";

class MainTableHeader extends Component {
  render() {
    return (
      <div className="MainTableHeaderClass">
        <Menu secondary>
          <div className="allProductionClass">
            All Production 192
            <div className="divide"></div>
          </div>

          <div className="awaitingProductionClass">
            Awaiting Production <LabelComp numberText="19" color="red" />
            <div className="divide"></div>
          </div>
          <div>Completed</div>
          <Menu.Menu position="right">
            <div className="overallRightProdduction">
              <Button>Print Worksheet</Button>
            </div>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default MainTableHeader;
