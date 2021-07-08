import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// @material-ui/icons components
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';


// core components
import TagField from "../Inputs/TagField";

import componentStyles from "../../assets/theme/components/Inputs/UploadInputGroup";


const useStyles = makeStyles(componentStyles);

export default function UploadInputGroup({ }) {
  const classes = useStyles();
  const theme = useTheme();
  // const suggestions = [
  //   "Stream",
  //   "Rock",
  // ];
  const suggestions = [];
  return (
    <Box maxWidth="700px" width="100%" margin="auto">
      <Box mt={5}>
        <Typography variant="h3" className={classes.inputLabel}>Title</Typography>
        <input id="upload_title" className={classes.uploadInput} name="upload_title"  type="text"></input>
      </Box>
      <Box mt={2.5}>
        <Typography variant="h3" className={classes.inputLabel}>Description</Typography>
        <textarea id="upload_des" className={classes.uploadInput} name="upload_des" rows="4" cols="50"  style={{resize: "vertical"}}>
        </textarea>
      </Box>
      <Box mt={2.5} mb={3}>
        <Typography variant="h3" className={classes.inputLabel}>Tags</Typography>
        <TagField initialValue={[]} suggestions={suggestions} />
      </Box>
      <Box textAlign="right">
        <Button variant="contained" color="primary" className="cancel-btn" size="large">Cancel</Button>
        <Button variant="contained" color="primary" className={classes.uploadBtnn} size="large">Upload</Button>
      </Box>
    </Box>
  );
}