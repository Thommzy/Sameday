import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";
import SideBarIndex from "../SideBar/SideBarIndex";

class Homepage extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Column mobile={16} tablet={8} computer={1}>
            <div>
              <SideBarIndex />
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={15}>
            {/* <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" /> */}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Homepage;
