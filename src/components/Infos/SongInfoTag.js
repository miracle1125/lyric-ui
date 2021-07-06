import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// @material-ui/icons components
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';


// core components
import componentStyles from "../../assets/theme/components/Infos/SongInfoTag";


const useStyles = makeStyles(componentStyles);

export default function SongInfoTag({ songKey, songBpm, bpmImg }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box pt={1} pb={2.5}>
      <Grid container className={classes.tagContainer}>
        <Grid item xs={12} sm={6}>
            <Typography variant="h3" className={classes.keyName}>
              Key: {songKey}
            </Typography>
            <Box display="flex" alignItems="center">
              <Typography variant="h3" className={classes.songInfoBpm}>
                BPM: {songBpm}
              </Typography>
              <img alt={bpmImg.imgAlt} className={classes.bpmImg} src={bpmImg.imgSrc} width="18px" height="16px" />
            </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h3" >
            Elements/Tags
          </Typography>
          <Box className={classes.songTagGroup}>
            <Button variant="outlined" className={classes.blueBtn} size="small">Stream</Button>
            <Button variant="outlined" className={classes.greenBtn} size="small">Rock</Button>
            <Button variant="outlined" className={classes.lightRedBtn} size="small">Stream</Button>
            <Button variant="outlined" className={classes.redBtn} size="small">Rock</Button>
            <Button variant="outlined" className={classes.greenBtn} size="small">Rock</Button>
            <Button variant="outlined" className={classes.blueBtn} size="small">Stream</Button>
            <Button variant="outlined" className={classes.greenBtn} size="small">Rock</Button>
            <Button variant="outlined" className={classes.lightRedBtn} size="small">Stream</Button>
          </Box>
          <Box textAlign="right" mt={2.5}>
            <Button variant="outlined" className={classes.reuploadBtn} size="large">Re-Upload</Button>
            <Button variant="contained" color="primary" className={classes.buildBtn} size="large">Build</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}