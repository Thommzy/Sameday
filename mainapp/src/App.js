import React, { Fragment } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Homepage from "./HomePage/Homepage";
import DetailsMain from "./Details/DetailsMain";

function App() {
  return (
    <div>
      <Fragment>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/details" component={DetailsMain} />
      </Fragment>
    </div>
  );
}

export default withRouter(App);
