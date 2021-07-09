import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";

// core components
import componentStyles from "../../assets/theme/components/header";
import demoJson from "../../demo.json"

const useStyles = makeStyles(componentStyles);

export default function Header({ logo, help }) {
  const classes = useStyles();
  const { url } = useRouteMatch();
  console.log(url);
  const isUploadVisible = url !== '/upload';
  const storedInfo = localStorage.getItem('musicInfo');
  const musicInfo = storedInfo ? JSON.parse(storedInfo) : demoJson;
  const  avatar = musicInfo["data"]["profilePhoto"];
  let logoImage = (
    <img alt={logo.imgAlt} className={classes.logoClasses} src={logo.imgSrc} />
  );
  let logoObject =
    logo && logo.innerLink ? (
      <Link to={logo.innerLink} className={classes.logoLinkClasses}>
        {logoImage}
      </Link>
    ) : logo && logo.outterLink ? (
      <a href={logo.outterLink} className={classes.logoLinkClasses}>
        {logoImage}
      </a>
    ) : null;

  return (
    <Box className={classes.bgPrimary} px={4} py={1} >
      <Grid container justify="space-between">
        <Grid container item sm={6} justify="flex-start" alignItems="center">
          <Box mr={1}>{logoObject}</Box>
          <Typography ml={1} className={classes.logoText}>Lyric</Typography>
        </Grid>
        <Grid container item sm={6} justify="flex-end" alignItems="center">
          {isUploadVisible && <Link to="/upload">
            <Button variant="contained" className={classes.uploadBtn}>
              Upload
            </Button>
          </Link>}
          <Box mx={2.5}>
            <img alt={help.imgAlt} className={classes.verticalAlign} src={help.imgSrc} />
          </Box>
          <Box>
            <img alt="user-avatar" className={classes.avatarImg} src={avatar} width="34px" height="34px" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}