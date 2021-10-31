import { Box, Divider, makeStyles, Paper, Typography } from '@material-ui/core';
import classNames from 'classnames';
import { FC } from 'react';
import { useSongAnalyze } from '../../hooks/useSongAnalyze';
import { SongPlayer } from '../organisms/SongPlayer';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
  },
  bpm: {
    marginTop: theme.spacing(2),
    backgroundImage: `url(${require('../../assets/pulse.svg').default})`,
    backgroundPosition: 'right center',
    backgroundRepeat: 'no-repeat',
    color: '#4db6ac',
    display: 'inline-block',
    paddingRight: 25,
  },
  tagList: {
    marginBottom: theme.spacing(1),
    display: 'flex',
    gap: 7,
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  tag: {
    borderRadius: 12,
    display: 'inline-block',
    fontSize: 12,
    lineHeight: '24px',
    padding: '0 10px',
    textTransform: 'capitalize',
  },
  color1: {
    color: '#2196f3',
    backgroundColor: 'rgba(33, 150, 243, 0.29)',
    border: '1px solid #2196f3',
  },
  color2: {
    color: '#34bfa3',
    backgroundColor: 'rgba(52, 191, 163, 0.29)',
    border: '1px solid #34bfa3',
  },
  color3: {
    color: '#f4516c',
    backgroundColor: 'rgba(244, 81, 108, 0.29)',
    border: '1px solid #f4516c',
  },
  color4: {
    color: '#c31162',
    backgroundColor: 'rgba(195, 17, 98, 0.29)',
    border: '1px solid #c31162',
  },
}));

export const DashboardMain: FC = () => {
  const { description, songCharacteristics, title } = useSongAnalyze();
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <SongPlayer />
      <Divider />
      <Box display="flex" justifyContent="space-between" padding={1.5}>
        <Box flex={1}>
          <Typography gutterBottom variant="h5">
            Key: {songCharacteristics.key}
          </Typography>
          <Typography className={classes.bpm} variant="h5">
            BPM: {songCharacteristics.bpm}
          </Typography>
        </Box>
        <Box flex={1}>
          <Typography gutterBottom variant="h5">
            Elements/Tags:
          </Typography>
          {/* <ul className={classes.tagList}>
            {songCharacteristics.elements.map((element) => (
              <span key={element} className={classNames(classes.tag, classes[getRandomColor()])}>
                {element}
              </span>
            ))}
          </ul>
          <ul className={classes.tagList}>
            {songCharacteristics.tags.map((tag) => (
              <span key={tag} className={classNames(classes.tag, classes[getRandomColor()])}>
                {tag}
              </span>
            ))}
          </ul> */}
        </Box>
      </Box>
      <Divider />
      <Box component="footer" padding={1.5}>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </Box>
    </Paper>
  );
};

type Color = 'color1' | 'color2' | 'color3' | 'color4';

function getRandomColor(): Color {
  const randomColor = `color${Math.floor(Math.random() * 4) + 1}` as Color;
  return randomColor;
}
