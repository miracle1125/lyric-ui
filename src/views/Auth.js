import React, {useEffect, useState} from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

// core components
import AuthBanner from "../components/Auth/AuthBanner";
import AuthContent from "../components/Auth/AuthContent";

import themeColors from "../assets/theme/colors";
import componentStyles from "../assets/theme/views/Auth";

const useStyles = makeStyles(componentStyles);

const Register = () => {
  const classes = useStyles();
  
  return (
      <Box>
          <Grid container style={{margin: "0px"}}>
            <Grid item sm={12} md={4} style={{padding: "0px"}}>
              <AuthBanner
                authLogo= {{
                  imgSrc: require("../assets/img/logo_shape.png").default,
                  imgAlt: "auth-logo",
                }}
              ></AuthBanner>
            </Grid>
            <Grid item sm={12} md={8} style={{padding: "0px"}}>
                <AuthContent></AuthContent>
            </Grid>
          </Grid>
      </Box>
  );
};

export default Register;
