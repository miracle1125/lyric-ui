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
import EarnCard from "../components/Cards/EarnCard";
import ListenerCard from "../components/Cards/ListenerCard";

import componentStyles from "../assets/theme/layouts/admin";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(componentStyles);

const Admin = () => {
  const classes = useStyles();
  // const theme = useTheme();
  return (
    <Box position="relative">
      <Header 
        logo={{
          innerLink: "/dashboard",
          imgSrc: require("../assets/img/logo.png").default,
          imgAlt: "logo-image",
        }}
        help={{
          imgSrc: require("../assets/img/help_icon.png").default,
          imgAlt: "help-icon",
        }}
        avatar={{
          imgSrc: require("../assets/img/user_avatar.png").default,
          imgAlt: "user-avatar",
        }}
      />
      <Box px={3.75} py={5} className={classes.mainContent}>
        <Grid container>
          <Grid item xs={12} sm={8}>
            <Box>
              <Grid container>
                <Grid xs={12} sm={6} item>
                  <EarnCard 
                    amount = "895.89"
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <ListenerCard
                    totalAmount = "11,235"
                    listenerIcon={{
                      imgSrc: require("../assets/img/headphone.png").default,
                      imgAlt: "listener-icon",
                    }}
                    differAmount = "+1,200"
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>

          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Admin;