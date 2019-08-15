import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Main from "./Main/Main";
import Terms from "./Terms";
import Privacy from "./Privacy";
import Ambassador from "./Ambassador"; 
import Press from "./Press";
import Mission from "./Mission";
// Material
import "./App.scss";
import "./Grid.scss";

const App = props => {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Skippit/" component={Main} />
          <Route path="/Skippit/terms" component={Terms} />
          <Route path="/terms" component={Terms} />
          <Route path={process.env.PUBLIC_URL + "/terms"} component={Terms} />
          <Route
            path={process.env.PUBLIC_URL + "/Skippit/terms"}
            component={Terms}
          />
          <Route path="/privacy" component={Privacy} />
          <Route path="/brandambassador" component={Ambassador} />
          <Route path="/press" component={Press} />
          <Route path="/mission" component={Mission} />
        </Switch>
      </Router>
      {/* 
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/terms" component={Terms} />
          <Route exact path="Skippit/terms" component={Terms} />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/terms"}
            component={Terms}
          />
        </Switch>
      </BrowserRouter> */}
    </>
  );
};

export default App;
