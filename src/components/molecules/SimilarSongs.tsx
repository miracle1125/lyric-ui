import { Avatar, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Paper, Typography } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import type { FC } from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
  title: {
    fontWeight: 600,
  },
}));

export const SimilarSongs: FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <Typography gutterBottom className={classes.title} variant="h5">
        Similar songs
      </Typography>
      <List dense disablePadding>
        <ListItem disableGutters>
          <ListItemAvatar>
            <Avatar src={require('../../assets/song-1.jpeg').default} variant="rounded" />
          </ListItemAvatar>
          <ListItemText primary="The House of the Rising Sun" secondary="The Animals" />
        </ListItem>
        <ListItem disableGutters>
          <ListItemAvatar>
            <Avatar src={require('../../assets/song-2.jpeg').default} variant="rounded" />
          </ListItemAvatar>
          <ListItemText primary="All by Myself" secondary="Eric Carmen" />
        </ListItem>
        <ListItem disableGutters>
          <ListItemAvatar>
            <Avatar src={require('../../assets/song-3.jpeg').default} variant="rounded" />
          </ListItemAvatar>
          <ListItemText primary="Light My Fire" secondary="The Doors" />
        </ListItem>
      </List>
    </Paper>
  );
};
