import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';

import SongRelatedItem from "../../layouts/SongRelatedItem"

// core components
import componentStyles from "../../assets/theme/components/Infos/SongRelatedList";


const useStyles = makeStyles(componentStyles);

export default function SongRelatedList({ relatedSongLists }) {
  const classes = useStyles();
  
  let data = relatedSongLists || [];
  const similarSongList = data.map((similarSongItem) => {
    return <SongRelatedItem relatedSongList={similarSongItem} />;
  });

  return (
    <Box bgcolor="secondary.main" borderRadius="4px" pt={2.75} pb={0} px={2.25} mt={2}>
      <Box mb={3.5}>
        <Typography variant="h3">Similar Songs</Typography>
      </Box>
      {similarSongList}
    </Box>
  );
}