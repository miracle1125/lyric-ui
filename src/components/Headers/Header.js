import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Avatar from '@material-ui/core/Avatar';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";

// @material-ui/icons components
// import ArrowDownward from "@material-ui/icons/ArrowDownward";


// core components
// import CardStats from "components/Cards/CardStats.js";
import componentStyles from "../../assets/theme/components/header";


const useStyles = makeStyles(componentStyles);

const Header = () => {
  const classes = useStyles();
  // const theme = useTheme();
  return (
    <Box className={classes.bgPrimary} px={4} py={1} >
      <Grid container>
        <Grid container item sm={6} justify="flex-start" alignItems="center">
          <Avatar alt="Lyric Logo" src="../assets/img/logo.png"/>
          <Box ml={1}>
            <Typography ml={1}>Lyric</Typography>
          </Box>
        </Grid>
        <Grid container item sm={6} justify="flex-end" alignItems="center">
          <Button variant="contained" >
            Upload
          </Button>
          <Box mx={2.5}>
            <Avatar alt="Lyric Logo" src="../assets/img/help_icon.png"/>
          </Box>
          <Avatar alt="Lyric Logo" src="../assets/img/user_avatar.png" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;