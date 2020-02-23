import React, { Component } from "react";
import { Breadcrumb } from "semantic-ui-react";

class DetailsBreadCrumb extends Component {
  render() {
    return (
      <>
        <div className="detBreadCrumb">
          <Breadcrumb>
            <Breadcrumb.Section link>Account Setup</Breadcrumb.Section>
            <Breadcrumb.Divider icon="right chevron" />
            <Breadcrumb.Section link>Delivery Method</Breadcrumb.Section>
          </Breadcrumb>
        </div>

        <div className="breaCrumbsLeft">Production Status</div>
        <div className="numbStat">Running 2 of 4</div>
      </>
    );
  }
}

export default DetailsBreadCrumb;
