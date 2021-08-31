import { Avatar, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Paper, Typography } from '@material-ui/core';
import type { FC } from 'react';
import { useSongAnalyze } from '../../hooks/useSongAnalyze';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
  title: {
    fontWeight: 600,
  },
}));

export const SimilarSongs: FC = () => {
  const { songCharacteristics } = useSongAnalyze();
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <Typography gutterBottom className={classes.title} variant="h5">
        Similar songs
      </Typography>
      <List dense disablePadding>
        {songCharacteristics.similarSongs.map((song) => (
          <ListItem key={song.uri} disableGutters>
            <ListItemAvatar>
              <Avatar src={song.albumArt} imgProps={{ width: 58, height: 58 }} variant="rounded" />
            </ListItemAvatar>
            <ListItemText primary={song.title} secondary={song.artist} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};
