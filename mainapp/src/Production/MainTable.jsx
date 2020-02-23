import React, { Component } from "react";
import { Table, Checkbox, Image, Button, Icon } from "semantic-ui-react";
import swaeter from "../Images/sweater_1.png";
import { withRouter } from "react-router-dom";

class MainTable extends Component {
  moveToDetails = () => {
    this.props.history.push("/details");
  };
  render() {
    return (
      <div className="tableHeaderDetails">
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={1}>
                <Checkbox />
              </Table.HeaderCell>
              <Table.HeaderCell width={2}>Order #</Table.HeaderCell>
              <Table.HeaderCell width={2}>Item #</Table.HeaderCell>
              <Table.HeaderCell width={5}>Details</Table.HeaderCell>
              <Table.HeaderCell width={2}>Color</Table.HeaderCell>
              <Table.HeaderCell width={2}>Qty</Table.HeaderCell>
              <Table.HeaderCell width={2}>Print Type</Table.HeaderCell>
              <Table.HeaderCell width={2}>Delivery Method</Table.HeaderCell>
              <Table.HeaderCell width={5}>Delivery Time</Table.HeaderCell>
              <Table.HeaderCell width={2}>Production Status</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row
              className="rowdetails"
              onClick={() => this.moveToDetails()}
            >
              <Table.Cell>
                <Checkbox />
              </Table.Cell>
              <Table.Cell>#232JODJSDKN2</Table.Cell>
              <Table.Cell>#232JODJSDKN2</Table.Cell>
              <Table.Cell>
                <Image src={swaeter} />
                <div className="textBesideImage">
                  <div>No Minimum - More Color</div>
                  <div>Available - Gildan unisex extra</div>
                  <div>Cotton T - sirt(NY1)</div>
                </div>
              </Table.Cell>
              <Table.Cell>
                <div className="royalButton">
                  <Button>Royal</Button>
                </div>
              </Table.Cell>
              <Table.Cell>
                <div>L X 4</div>
              </Table.Cell>
              <Table.Cell>
                <div>DTG Print</div>
              </Table.Cell>
              <Table.Cell>
                <div className="clockIcon">
                  <Icon name="clock outline" />
                </div>
                <div className="deliveryMethod">Rush Shipping</div>
              </Table.Cell>
              <Table.Cell>
                <div className="deliveryTimetextOne">23-June-2019</div>
                <div className="deliveryTimetextTwo">Time Left 10:00:00</div>
              </Table.Cell>
              <Table.Cell>
                {" "}
                <div className="productionStatusTextOne"> Running</div>
                <div className="productionStatusTextTwo">2 of 5</div>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Checkbox />
              </Table.Cell>
              <Table.Cell>Dummy</Table.Cell>
              <Table.Cell>Dummy</Table.Cell>
              <Table.Cell>Approved</Table.Cell>
              <Table.Cell>Approved</Table.Cell>
              <Table.Cell>Approved</Table.Cell>
              <Table.Cell>Approved</Table.Cell>
              <Table.Cell>Approved</Table.Cell>
              <Table.Cell>Approved</Table.Cell>
              <Table.Cell>Dumm</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default withRouter(MainTable);
