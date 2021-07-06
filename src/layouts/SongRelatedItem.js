import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

// @material-ui/icons components
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';

// core components
import componentStyles from "../assets/theme/layouts/SongRelatedItem";


const useStyles = makeStyles(componentStyles);

export default function SongRelatedItem({ relatedImg, relatedTitle, relatedAuthor }) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Box display="flex" pb={1.75}>
        <Box mr={1.5}>
          <img alt={relatedImg.imgAlt} className={classes.songRelatedImg} src={relatedImg.imgSrc} width="58px" height="58px"/>
        </Box>
        <Box>
          <Typography className={classes.relatedTitle}>{relatedTitle}</Typography>
          <Typography>{relatedAuthor}</Typography>
        </Box>
    </Box>
  );
}