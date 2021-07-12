import React from "react";
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// core components
import componentStyles from "../../assets/theme/components/Infos/SongInfoTag";


const useStyles = makeStyles(componentStyles);

export default function SongInfoTag({ songInfoTag, bpmImgSrc }) {
  
  const classes = useStyles();

  let tagsList = songInfoTag["elementsTags"] || [];

  const SongTagsList = tagsList.map((tagsItem) => {
    return <Button variant="outlined" size="small">{tagsItem}</Button>;
  });

  return (
    <Box pt={1} pb={2.5}>
      <Grid container className={classes.tagContainer}>
        <Grid item sm={12} md={4} lg={6} className={classes.mbMobile}>
            <Typography variant="h3">
              Key: {songInfoTag["key"]}
            </Typography>
            <Box 
              display="flex" 
              alignItems="center"
              my={3}
            >
              <Typography variant="h3" className={classes.songInfoBpm}>
                BPM: {songInfoTag["bpm"]}
              </Typography>
              <img alt="bpm-icon" className={classes.bpmImg} src={bpmImgSrc} width="18px" height="16px" />
            </Box>
            <Typography variant="h3" className={classes.keyName}>
              Time Signature: {songInfoTag["timeSignature"]}
            </Typography>
        </Grid>
        <Grid item sm={12} md={8} lg={6}>
          <Typography variant="h3" >
            Elements/Tags
          </Typography>
          <Box className="songTagGroup">
            {SongTagsList}
          </Box>
          <Box textAlign="right" mt={2.5}>
            <Link to="/upload">
              <Button variant="outlined" className={classes.reuploadBtn} size="large">Re-Upload</Button>
            </Link>
            <Button variant="contained" color="primary" className={classes.buildBtn} size="large">Build</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}