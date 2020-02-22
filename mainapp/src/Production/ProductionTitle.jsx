import React, { Component } from "react";
import { Menu, Icon, Button } from "semantic-ui-react";
import "./Production.css";

class ProductionTitle extends Component {
  render() {
    return (
      <div className="productionTitle">
        <Menu secondary>
          <div className="leftSideProductionTitle">
            <Icon name="cubes" /> Production House
          </div>
          <Menu.Menu position="right">
            <div className="rightSideProductionTitle">
              <Button primary>
                Categories
                <Icon name="caret down" />
              </Button>
            </div>
            <div className="greySearch">
              <div className="greySearchIcons">
                <Icon name="search" />
                <Icon name="x" />
              </div>
              <div></div>
            </div>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default ProductionTitle;
