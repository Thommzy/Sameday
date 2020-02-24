import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import SideBarIndex from "../SideBar/SideBarIndex";
import MainNavBar from "../NavBar/MainNavBar";
import ProductionTitle from "../Production/ProductionTitle";
import MainTableHeader from "../Production/MainTableHeader";
import MainTable from "../Production/MainTable";
import FooterMain from "../Footer/FooterMain";

class Homepage extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Column mobile={16} tablet={1} computer={1}>
            <div>
              <SideBarIndex />
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={15} computer={15}>
            <div>
              <MainNavBar />
            </div>
            <div className="">
              <ProductionTitle />
              <MainTableHeader />
              <MainTable />
              <FooterMain />
            </div>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Homepage;
