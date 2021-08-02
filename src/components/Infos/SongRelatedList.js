import React from "react";
// @material-ui/core components
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';
import SongRelatedItem from "../../layouts/SongRelatedItem"

export default function SongRelatedList({ relatedSongLists }) {
  
  let data = relatedSongLists || [];
  const similarSongList = data.map((similarSongItem, index) => {
    return <SongRelatedItem relatedSongList={similarSongItem} key={index} />;
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