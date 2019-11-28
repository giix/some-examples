import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { isEmpty } from "ramda";

import "./styles.css";
import ROUTES from "./routes";

const createRoute = (parent, routeInfo) => {
  return (
    <Route
      key={routeInfo.path}
      path={routeInfo.path}
      component={routeInfo.component}
      exact={routeInfo.exact || false}
    >
      {!routeInfo.children || isEmpty(routeInfo.children)
        ? null
        : routeInfo.children.map(childRouteInfo =>
            createRoute(routeInfo, childRouteInfo)
          )}
    </Route>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>{ROUTES.map(routeInfo => createRoute(null, routeInfo))}</Switch>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
