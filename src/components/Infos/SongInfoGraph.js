import React, { 
  useCallback,
  useRef,
  useState,
} from "react";
import { WaveSurfer, WaveForm } from "wavesurfer-react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Divider from '@material-ui/core/Divider';
import ToggleIcon from "material-ui-toggle-icon";
import IconButton from "@material-ui/core/IconButton";

// @material-ui/icons components
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

// core components
import componentStyles from "../../assets/theme/components/Infos/SongInfoGraph";

const useStyles = makeStyles(componentStyles);
const genres = ["rap","rock", "hip-hop","rnb"];

export default function SongInfoGraph({ songGraphImg }) {
  const classes = useStyles();  
  const theme = useTheme();
  const wavesurferRef = useRef();
  const handleWSMount = useCallback(
    waveSurfer => {
      wavesurferRef.current = waveSurfer;
      if (wavesurferRef.current) {
        wavesurferRef.current.load("/horse.mp3");
        
        wavesurferRef.current.on("ready", () => {
          console.log("WaveSurfer is ready");
        });

        wavesurferRef.current.on("loading", data => {
          console.log("loading --> ", data);
        });

        if (window) {
          window.surferidze = wavesurferRef.current;
        }
      }
    },
  );
  const [pause, setPause] = useState(true);
  const play = useCallback(() => {
    setPause((pause) => ({ on: !pause.on }));
    wavesurferRef.current.playPause();
  }, []);
  return (
    <Box>
      <Box px={1.75} py={1.375}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item container alignItems="center">
            <IconButton className={classes.playBtn} onClick={play}>
              <ToggleIcon
                on={pause.on}
                onIcon={<PauseIcon />}
                offIcon={<PlayArrowIcon />}
                className={classes.toggleIcon}
              />
            </IconButton>
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
      <Divider>
      </Divider>     
      <Box py={2}>
        <WaveSurfer onMount={handleWSMount}>
            <WaveForm id="waveform" waveColor="#9C27B0">
            </WaveForm>
        </WaveSurfer>
      </Box>
    </Box>
  );
}