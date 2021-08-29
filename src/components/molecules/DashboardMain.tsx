import { Box, Button, Divider, makeStyles, Paper, Typography } from '@material-ui/core';
import PlayArrowSharpIcon from '@material-ui/icons/PlayArrowSharp';
import type { FC } from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
  },
}));

export const DashboardMain: FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <Box component="header" padding={1.5}>
        <Button color="primary" variant="contained">
          <PlayArrowSharpIcon />
        </Button>
      </Box>
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
