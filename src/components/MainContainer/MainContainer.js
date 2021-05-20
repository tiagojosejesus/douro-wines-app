import React from "react";
import { Switch, Route } from "react-router-dom";

export default function MainContainer() {
  return (
    <>
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/twitter"></Route>
        <Route path="/facts"></Route>
        <Route path="/reservations"></Route>
        <Route path="/blog"></Route>
        <Route path="/about"></Route>
      </Switch>
    </>
  );
}
