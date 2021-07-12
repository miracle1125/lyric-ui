import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';


// @material-ui/icons components
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

// core components
import componentStyles from "../../assets/theme/components/Cards/ListenerCard";



const useStyles = makeStyles(componentStyles);

export default function ListenerCard({ listenerIcon, listenerCardInfo }) {
  const classes = useStyles();
  // const theme = useTheme();

  return (
    <Box className={classes.bgSecondary} p={2.5} height={180} borderRadius="4px">
      <Grid container justify="space-between" alignItems="center">
        <Grid item className={classes.prMobile}>
            <Typography className={classes.listenTitle}>Projected Listeners</Typography>
            <Typography variant="h1" className={classes.listenAmount}>
              <NumberFormat value={listenerCardInfo["amount"]} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </Typography>
            <Box py={0.25} px={0.625} className={classes.increaseListener} borderRadius="3px">
              <ArrowUpwardIcon>
              </ArrowUpwardIcon>
              +
              <NumberFormat value={listenerCardInfo["changedAmount"]} displayType={'text'} thousandSeparator={true} />
            </Box>
        </Grid>
        <Grid item>
          <Box p={1.75} className={classes.bgSecondaryLight} borderRadius="4px">
            <img alt={listenerIcon.imgAlt} className={classes.verticalAlign} src={listenerIcon.imgSrc} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}