import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';


// @material-ui/icons components

// core components
import componentStyles from "../../assets/theme/components/Auth/AuthBanner";


const useStyles = makeStyles(componentStyles);

export default function AuthBanner({ authLogo }) {
  const classes = useStyles();
  // const theme = useTheme();

  return (
    <Box className="auth-banner-bg">
      <Box className={classes.authBannerContent}>
        <Grid container alignItems="center" style={{margin: "0"}}>
          <Grid item style={{paddingRight: "4px", paddingLeft: "0"}}>
            <Box className="auth-logo-container">
              <img alt={authLogo.imgAlt} className={classes.verticalAlign} src={authLogo.imgSrc}/>
            </Box>
          </Grid>
          <Grid item style={{paddingRight: "0px", paddingLeft: "4px"}}>
            <Typography className={classes.authLogoText}>Lyric</Typography>
          </Grid>
        </Grid>
        <Typography className={classes.authSummary}>
          AI Music Assistant Tool <br/> Behind the scenes of a hit song
        </Typography>
      </Box>
    </Box>
  );
}