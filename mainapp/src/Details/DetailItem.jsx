import React, { Component } from "react";
import { Grid, Checkbox } from "semantic-ui-react";

class DetailItem extends Component {
  render() {
    return (
      <div className="ItemTitleOverall">
        <Grid>
          <Grid.Column mobile={16} tablet={8} computer={3}>
            <div className="itemPart">
              <Checkbox label="Item #" />
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <div className="detailPart">Details</div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={3}>
            <div className="productionPart">Production Type</div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={2}>
            <div className="colorsPart">Colors</div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={2}>
            <div className="quantityPart">Quantity</div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={2}>
            <div className="paidPart">Paid</div>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default DetailItem;
