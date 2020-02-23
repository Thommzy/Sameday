import React, { Component } from "react";
import { Menu, Button, Header, Icon } from "semantic-ui-react";
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
            <div className="markAsCompltedDiv">
              <Header as="h5">Mark as completed</Header>
            </div>
            <div className="caretDownIcon">
              <Icon name="caret down" />
            </div>
            <div className="saveButtonDiv">
              <Button>Save</Button>
            </div>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default MainTableHeader;
