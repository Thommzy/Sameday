import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

class ProductDetails extends Component {
  render() {
    return (
      <div className="productDeets">
        <Menu secondary>
          <Menu.Item name="home" />

          <Menu.Menu position="right">
            <Menu.Item></Menu.Item>
            <Menu.Item name="logout" />
          </Menu.Menu>
        </Menu>
        <div className>Product Details</div>
        <div className>Product Details</div>
      </div>
    );
  }
}

export default ProductDetails;
