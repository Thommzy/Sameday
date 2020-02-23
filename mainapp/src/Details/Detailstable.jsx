import React, { Component } from "react";
import { Table, Image, Icon, Dropdown } from "semantic-ui-react";

class Detailstable extends Component {
  render() {
    return (
      <div className="detTable">
        <Table basic>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={1}>
                <div className="orderValue">
                  <Icon name="cart" />
                  Order Value
                </div>
                <div className="orderAmt">$40,000</div>
              </Table.HeaderCell>
              <Table.HeaderCell width={1}>
                <div className="orderDate">Order Date</div>
                <div className="orderdateIn">25 - June - 2017</div>
              </Table.HeaderCell>
              <Table.HeaderCell width={1}>
                <div className="deliveryMeth">Delivery Method</div>
                <div className="pickUpOrd">Pickup Order </div>
                <div className="dropDownMain">
                  <Dropdown text="Can Edit">
                    <Dropdown.Menu>
                      <Dropdown.Item text="Rush Shipping" />
                      <Dropdown.Item text="dislaow Order..." />
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Table.HeaderCell>
              <Table.HeaderCell width={1}>
                <div className="rushOptionText">Rush Option</div>
                <div className="rushText">
                  <Icon name="checkmark" />
                  Rush
                </div>
              </Table.HeaderCell>
              <Table.HeaderCell width={1}>
                <div className="status">Status</div>
                <div className="statusPending">pending</div>
              </Table.HeaderCell>
              <Table.HeaderCell width={1}>
                <div className="requestedBy">Requested By</div>
                <div className="requestedDate">25 - June - 2017</div>
                <div className="timeLeftDet">Time Left 10:00:00</div>
              </Table.HeaderCell>
              <Table.HeaderCell width={1}>
                <div className="shippedVal">Shipped Or Picked Date</div>
                <div className="pickedDate">25 - June - 2017</div>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
        </Table>
      </div>
    );
  }
}

export default Detailstable;
