import React from "react";
// @material-ui/core components
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';

export default function SongInfoDetail({songDetail }) {
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