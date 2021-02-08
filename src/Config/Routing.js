import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Container/Home";
import Portfolio from "../Container/Portfolio";
import Contact from "../Container/Contact";
import SignIn from "../Container/SignIn";
import SignUp from "../Container/SignUp";
import PrivateRoute from "./PrivateRoute";
import Admin from "../Container/Admin";

// Routing component. If want to add another just create a file in container and used it as the route here

const Routing = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        {/* <Route exact path="/admin" component={Admin} /> */}
        <PrivateRoute exact path="/admin" component={Admin} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        {/* Remove this Route after you create your admin account*/}
      </Switch>
    </div>
  );
};

export default Routing;
