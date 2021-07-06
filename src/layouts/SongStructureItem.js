import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

// @material-ui/icons components
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';

// core components
import componentStyles from "../assets/theme/layouts/SongStructureItem";


const useStyles = makeStyles(componentStyles);

export default function SongStructureItem({ structureTitle, structureAmount, structureColor }) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Box bgcolor="rgba(181, 158, 220, 0.38)" borderRadius="10px" textAlign="center" height={120} px={1.5} py={0.75} mb={2}>
      <Typography>{structureTitle}</Typography>
      <Typography variant="h1" className={classes.structureAmount}>{structureAmount}</Typography>
      <LinearProgress variant="determinate" value={structureAmount} className={structureColor}></LinearProgress>
    </Box>
  );
}