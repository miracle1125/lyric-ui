import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import Dashboard from "./views/admin/Dashboard";
import Upload from "./views/admin/Upload";
import Auth from "./views/Auth";

import "./App.css";

const App = () => {
  const renderAuth = () => {
    return (
      <Switch>
        <Route path="/auth">
          <Auth></Auth>
        </Route>
        <Redirect from="/" to="/auth" />
      </Switch>
    );
  };

  const renderMainRoute = () => {
    return (
      <Switch>
        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/upload">
          <Upload></Upload>
        </Route>
      </Switch>
    );
  };

  return (
    <Switch>
      <Route exact path="/">
        <Auth></Auth>
      </Route>
      <Route exact path="/dashboard">
        <Dashboard></Dashboard>
      </Route>
      <Route exact path="/upload">
        <Upload></Upload>
      </Route>
      <Redirect from="/" to="/" />
    </Switch>
  )
};

export default App;
