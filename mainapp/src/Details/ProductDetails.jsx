import React, { Component } from "react";
import { Menu, Dropdown, Button, Image, Header } from "semantic-ui-react";
import file from "../Images/file.png";

class ProductDetails extends Component {
  render() {
    return (
      <div className="productDeets">
        <Menu secondary>
          <div className="productDetailsInProductDeets">
            Product Details <div className="divide"></div>
          </div>
          <div className="historyNotes">History / Notes</div>

          <Menu.Menu position="right">
            <div className="workSheet">
              <Dropdown text="Worksheet">
                <Dropdown.Menu>
                  <Dropdown.Item text="Worksheet" />
                  <Dropdown.Item text="Invoice" />
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="printBut">
              <Button>Print</Button>
            </div>
            <div className="addNotes">
              <Button>
                <Image src={file} />
                <Header as="h5"> Add Note</Header>
              </Button>
            </div>
            <div className="completeProductionButton">
              <Dropdown
                text="Complete Production"
                floating
                labeled
                button
                className="icon"
              >
                <Dropdown.Menu>
                  <Dropdown.Header icon="sun" content="Full Production" />
                  <Dropdown.Header
                    icon="star half outline"
                    content="Partial Production"
                  />
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default ProductDetails;
