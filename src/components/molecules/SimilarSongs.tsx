import { List, makeStyles, Paper, Typography } from '@material-ui/core';
import type { FC } from 'react';
import { useSongAnalyze } from '../../hooks/useSongAnalyze';
import { SimilarSongPreview } from '../atoms/SimilarSongPreview';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: 600,
  },
}));

export const SimilarSongs: FC = () => {
  const { songCharacteristics } = useSongAnalyze();
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <Typography className={classes.title} variant="h5">
        Similar songs
      </Typography>
      <List dense disablePadding>
        {songCharacteristics.similarSongs.map((song) => (
          <SimilarSongPreview key={song.url} song={song} />
        ))}
      </List>
    </Paper>
  );
};
