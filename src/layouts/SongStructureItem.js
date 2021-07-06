import React, { useState, useEffect } from "react";
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

export default function SongStructureItem({ structureTitle, Amount, structureColor }) {
  const classes = useStyles();
  const theme = useTheme();
  const [progress, setProgress] = useState(0);
  
  // progress bar fill up animation
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        return Math.min(oldProgress + 10, Amount);
      });
    }, 100);
  }, []);

  return (
    <Box bgcolor="rgba(181, 158, 220, 0.38)" borderRadius="10px" textAlign="center" height={120} px={1.5} py={0.75} mb={2}>
      <Typography>{structureTitle}</Typography>
      <Typography variant="h1" className={classes.structureAmount}>{Amount}</Typography>
      <LinearProgress variant="determinate" value={progress} className={structureColor}></LinearProgress>
    </Box>
  );
}