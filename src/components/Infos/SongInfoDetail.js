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

export default function SongInfoDetail({ }) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Box px={2} pt={1.25} pb={3.75}>
      <Typography variant="h3">
        Song Name
      </Typography>
      <Typography variant="body2">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      </Typography>
    </Box>
  );
}