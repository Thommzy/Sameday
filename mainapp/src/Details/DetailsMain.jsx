import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import SideBarIndex from "../SideBar/SideBarIndex";
import MainNavBar from "../NavBar/MainNavBar";
import DetailsProductionTititle from "./DetailsProductionTititle";
import OrderIdLane from "./OrderIdLane";
import DetailsBreadCrumb from "./DetailsBreadCrumb";
import Detailstable from "./Detailstable";
import ProductDetails from "./ProductDetails";
import DownloadLane from "./DownloadLane";
import DetailCloth from "./DetailCloth";
import DetailItem from "./DetailItem";
import DetailPopUp from "./DetailPopUp";
import Footer from "../Footer/FooterMain";

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
            <div>
              <ProductDetails />
              <DownloadLane />
              <DetailCloth />
              <DetailItem />
              <DetailPopUp />
              <Footer />
            </div>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default DetailsMain;
