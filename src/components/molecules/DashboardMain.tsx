import { Box, Button, Divider, makeStyles, Paper, Typography } from '@material-ui/core';
import PlayArrowSharpIcon from '@material-ui/icons/PlayArrowSharp';
import PauseIcon from '@material-ui/icons/Pause';
import { FC, useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
  },
}));

export const DashboardMain: FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const waveSurfer = useRef<WaveSurfer>();
  const classes = useStyles();

  useEffect(() => {
    waveSurfer.current = WaveSurfer.create({
      container: '#waveform',
      waveColor: '#9c27b0',
      progressColor: 'purple',
      height: 150,
    });

    waveSurfer.current.load(require('../../assets/example.mp3').default);

    waveSurfer.current.on('play', () => setIsPlaying(true));
    waveSurfer.current.on('pause', () => setIsPlaying(false));
    
    return () => {
      waveSurfer.current?.unAll();
    }
  }, []);

  return (
    <Paper className={classes.container}>
      <Box component="header" padding={1.5}>
        <Button
          onClick={() => {
            waveSurfer.current?.playPause();
          }}
          color="primary"
          variant="contained"
        >
          {isPlaying ? <PauseIcon /> : <PlayArrowSharpIcon />}
        </Button>
      </Box>
      <Divider />
      <Box id="waveform" height="150px" />
      <Divider />
      <Box component="footer" padding={1.5}>
        <Typography gutterBottom variant="h5">
          Song Name
        </Typography>
        <Typography variant="body2" color="textSecondary">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
          packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
          will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </Typography>
      </Box>
    </Paper>
  );
};
