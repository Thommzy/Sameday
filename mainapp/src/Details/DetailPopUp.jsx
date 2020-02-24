import React, { Component } from "react";
import {
  Grid,
  Checkbox,
  Button,
  Icon,
  Image,
  Popup,
  Segment
} from "semantic-ui-react";
import sweat from "../Images/sweater_1.png";
import eye from "../Images/eye.png";
import smallfront from "../Images/cloth_front.png";
import smallBack from "../Images/cloth_back.png";
import smallSide from "../Images/cloth_side.png";

class DetailPopUp extends Component {
  render() {
    return (
      <div className="popSection">
        <Grid>
          <Grid.Column mobile={16} tablet={8} computer={2}>
            <div className="itemPart">
              <Checkbox label="#232JODJSDKN2" />
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={1}>
            <div className="eye">
              <Image src={eye} />
            </div>
            <div className="SmallShirt">
              <Popup trigger={<Image src={sweat} />} flowing hoverable>
                <Segment>
                  <Grid>
                    <Grid centered divided columns={4}>
                      <Grid.Column textAlign="center">
                        <Image src={smallfront} height="100px" />
                      </Grid.Column>
                      <Grid.Column textAlign="center">
                        <Image src={smallBack} height="100px" />
                      </Grid.Column>
                      <Grid.Column textAlign="center">
                        <Image src={smallSide} height="100px" />
                      </Grid.Column>
                      <Grid.Column textAlign="center">
                        <Image src={smallBack} height="100px" />
                      </Grid.Column>
                    </Grid>
                  </Grid>
                </Segment>
              </Popup>
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <div className="detailDeetPart">
              <div>No Minimum - More Color</div>
              <div>Available - Gildan unisex extra</div>
              <div>Cotton T - sirt(NY1)</div>
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={3}>
            <div className="productionDeetPart">DTG Print </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={2}>
            <div className="colorsDeetPart">
              <Button>Royal</Button>
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={2}>
            <div className="quantityDeetPart">L X 4</div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={2}>
            <div className="paidDeetPart">
              <Icon name="checkmark" />
              Paid in full
            </div>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default DetailPopUp;
