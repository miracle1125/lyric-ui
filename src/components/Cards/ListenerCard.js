import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';

// @material-ui/icons components
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

// core components

import componentStyles from "../../assets/theme/components/Cards/ListenerCard";


const useStyles = makeStyles(componentStyles);

export default function ListenerCard({ totalAmount, listenerIcon, differAmount }) {
  const classes = useStyles();
  // const theme = useTheme();

  return (
    <Box className={classes.bgSecondary} p={2.5} height={180}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
            <Typography className={classes.listenTitle}>Projected Listeners</Typography>
            <Typography variant="h1" className={classes.listenAmount}>{totalAmount}</Typography>
            <Box py={0.25} px={0.625} className={classes.increaseListener}>
              <ArrowUpwardIcon>
              </ArrowUpwardIcon>
              {differAmount}
            </Box>
        </Grid>
        <Grid item>
          <Box p={1.75} className={classes.bgSecondaryLight}>
            <img alt={listenerIcon.imgAlt} className={classes.verticalAlign} src={listenerIcon.imgSrc} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}