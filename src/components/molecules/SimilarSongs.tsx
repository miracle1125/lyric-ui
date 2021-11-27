import { List, makeStyles, Paper, Typography } from '@material-ui/core';
import type { FC } from 'react';
import { useSongAnalyze } from '../../hooks/useSongAnalyze';
import { SectionOverlay } from '../atoms/SectionOverlay';
import { SimilarSongPreview } from '../atoms/SimilarSongPreview';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    padding: theme.spacing(2),
    minHeight: 200,
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
      <SectionOverlay open={songCharacteristics.similarSongs.length === 0} />
      <Typography className={classes.title} variant="h5">
        Similar songs
      </Typography>
      <List dense disablePadding>
        {songCharacteristics.similarSongs.length === 0 && (
          <>
            <SimilarSongPreview />
            <SimilarSongPreview />
            <SimilarSongPreview />
          </>
        )}
        {songCharacteristics.similarSongs.map((song) => (
          <SimilarSongPreview key={song.url} song={song} />
        ))}
      </List>
    </Paper>
  );
};
