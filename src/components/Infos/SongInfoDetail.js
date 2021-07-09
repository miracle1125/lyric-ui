import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';

// @material-ui/icons components
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';


// core components
import componentStyles from "../../assets/theme/components/Infos/SongInfoDetail";


const useStyles = makeStyles(componentStyles);

export default function SongInfoDetail({songDetail }) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Box px={2} pt={1.25} pb={3}>
      <Typography variant="h3">
        {songDetail["title"]}
      </Typography>
      <Typography variant="body2">
        {songDetail["description"]}
      </Typography>
    </Box>
  );
}