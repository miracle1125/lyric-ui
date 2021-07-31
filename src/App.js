import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import Dashboard from "./views/admin/Dashboard";
import Upload from "./views/admin/Upload";
import Profile from "./views/admin/Profile";
import Sessions from "./views/admin/sessions";
import Auth from "./views/Auth";

import "./App.css";

const App = () => {

  if (localStorage.getItem("session_token") === null) {
    return (
      <Switch>
        <Route path="/">
          <Auth></Auth>
        </Route>
        <Route exact path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route exact path="/upload">
          <Upload></Upload>
        </Route>
        <Route exact path="/profile">
          <Profile></Profile>
        </Route>
        <Route exact path="/catalog">
          <Sessions></Sessions>
        </Route>
        <Redirect from="/" to="/" />
      </Switch>
    );
  }
  else {
    return (
      <Switch>
        <Route exact path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route exact path="/upload">
          <Upload></Upload>
        </Route>
        <Route exact path="/profile">
          <Profile></Profile>
        </Route>
        <Route exact path="/catalog">
          <Sessions></Sessions>
        </Route>
        <Redirect from="/" to="/dashboard" />
    </Switch>
    );
  }
};

export default App;
