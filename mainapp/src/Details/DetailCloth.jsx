import React, { Component } from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import front from "../Images/cloth_front.png";
import back from "../Images/cloth_back.png";
import side from "../Images/cloth_side.png";

class DetailCloth extends Component {
  render() {
    return (
      <div className="clothOverall">
        <Grid>
          <Grid.Column mobile={16} tablet={8} computer={3}>
            <Image src={front} />
            <Header as="h5" textAlign="center">
              Front
            </Header>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={3}>
            <Image src={back} />
            <Header as="h5" textAlign="center">
              Back
            </Header>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={3}>
            <Image src={side} />
            <Header as="h5" textAlign="center">
              Side
            </Header>{" "}
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={3}>
            <Image src={back} />
            <Header as="h5" textAlign="center">
              Side
            </Header>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default DetailCloth;
