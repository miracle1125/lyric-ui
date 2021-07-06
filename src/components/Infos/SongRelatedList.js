import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';

// @material-ui/icons components
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SongRelatedItem from "../../layouts/SongRelatedItem"

// core components
import componentStyles from "../../assets/theme/components/Infos/SongRelatedList";


const useStyles = makeStyles(componentStyles);

export default function SongRelatedList({ }) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Box bgcolor="secondary.main" borderRadius="4px" pt={2.75} pb={0} px={2.25} mt={2}>
      <Box mb={3.5}>
        <Typography variant="h3">Similar Songs</Typography>
      </Box>
      <SongRelatedItem
        relatedImg={{
          imgSrc: require("../../assets/img/song1_author.png").default,
          imgAlt: "related-song-img",
        }}
        relatedTitle = "The House of the Rising Sun"
        relatedAuthor = "The Animals"
      >
      </SongRelatedItem>
      <SongRelatedItem
        relatedImg={{
          imgSrc: require("../../assets/img/song2_author.png").default,
          imgAlt: "related-song-img",
        }}
        relatedTitle = "All by Myself"
        relatedAuthor = "Eric Carmen"
      >
      </SongRelatedItem>
      <SongRelatedItem
        relatedImg={{
          imgSrc: require("../../assets/img/song3_author.png").default,
          imgAlt: "related-song-img",
        }}
        relatedTitle = "Light My Fire"
        relatedAuthor = "The Doors"
      >
      </SongRelatedItem>
    </Box>
  );
}