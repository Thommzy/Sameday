import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import SideBarIndex from "../SideBar/SideBarIndex";
import MainNavBar from "../NavBar/MainNavBar";
import DetailsProductionTititle from "./DetailsProductionTititle";
import OrderIdLane from "./OrderIdLane";
import DetailsBreadCrumb from "./DetailsBreadCrumb";
import Detailstable from "./Detailstable";
import ProductDetails from "./ProductDetails";

class DetailsMain extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Column mobile={16} tablet={8} computer={1}>
            <SideBarIndex />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={15}>
            <MainNavBar />
            <DetailsProductionTititle />
            <OrderIdLane />
            <DetailsBreadCrumb />
            <Detailstable />
            <ProductDetails />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default DetailsMain;
