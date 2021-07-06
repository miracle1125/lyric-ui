import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';

// @material-ui/icons components
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';


// core components
import componentStyles from "../../assets/theme/components/Infos/SongInfoGraph";


const useStyles = makeStyles(componentStyles);

export default function SongInfoGraph({ songGraphImg }) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Box my={1.25}>
        <img alt={songGraphImg.imgAlt} className={classes.songGraphImg} src={songGraphImg.imgSrc} />
    </Box>
  );
}