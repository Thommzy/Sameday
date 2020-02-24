import React, { Fragment } from "react";
import { Route, withRouter } from "react-router-dom";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Homepage from "./HomePage/Homepage";
import DetailsMain from "./Details/DetailsMain";
import Sida from "./Test/sida";

function App() {
  return (
    <div>
      <Fragment>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/details" component={DetailsMain} />
        <Route exact path="/sida" component={Sida} />
      </Fragment>
    </div>
  );
}

export default withRouter(App);
