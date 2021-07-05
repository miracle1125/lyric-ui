import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
// import Container from "@material-ui/core/Container";
// import Grid from "@material-ui/core/Grid";

// @material-ui/icons components
// import ArrowDownward from "@material-ui/icons/ArrowDownward";
// import ArrowUpward from "@material-ui/icons/ArrowUpward";
// import EmojiEvents from "@material-ui/icons/EmojiEvents";
// import GroupAdd from "@material-ui/icons/GroupAdd";
// import InsertChartOutlined from "@material-ui/icons/InsertChartOutlined";
// import PieChart from "@material-ui/icons/PieChart";

// core components
// import CardStats from "components/Cards/CardStats.js";
import Header from "../components/Headers/Header";

import componentStyles from "../assets/theme/layouts/admin";

const useStyles = makeStyles(componentStyles);

const Admin = () => {
  const classes = useStyles();
  // const theme = useTheme();
  return (
    <Box position="relative" className={classes.mainContent}>
      <Header />
    </Box>
  );
};

export default Admin;