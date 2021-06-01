import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/layout/Home";
import About from "../components/about/About";
import Admin from "../components/admin/Admin";

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="*">
        <h1 className="text-danger">Not Found</h1>
      </Route>
    </Switch>
  );
};

export default Routing;
