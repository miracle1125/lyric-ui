import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

import "./App.css";
import "./assets/plugins/inter/css/inter.css";

import theme from "../src/assets/theme/theme";


// import "@fortawesome/fontawesome-free/css/all.min.css";

import Dashboard from "./views/Dashboard";
import Upload from "./views/Upload";


ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/upload">
          <Upload></Upload>
        </Route>
        <Redirect from="/" to="/dashboard" />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>,
  document.querySelector("#root")
);