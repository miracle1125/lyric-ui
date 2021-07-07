import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

// @material-ui/icons components
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

// core components
import componentStyles from "../../assets/theme/components/Infos/SongInfoHeader";


const useStyles = makeStyles(componentStyles);
const genres = ["rap","rock", "hip-hop","rnb"];

export default function SongInfoHeader({ }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box px={1.75} py={1.375}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item container alignItems="center">
          <button className={classes.playBtn}>
            <PlayArrowIcon className={classes.playIcon} fontSize="large" />
          </button>
        </Grid>
        <Grid item>
          <Autocomplete
            className={classes.genreSelect}
            options={genres}
            classes={{
              clearIndicatorDirty: classes.clearIndicator,
              popupIndicator: classes.popupIndicator
            }}
            getOptionLabel={(option) => option}
            style={{ width: 192 }}
            renderInput={(params) => <TextField {...params} label="Genre" variant="outlined" />}
          />
        </Grid>
      </Grid>
    </Box>
  );
}