import { Box, makeStyles, Typography, LinearProgress } from '@material-ui/core';
import classNames from 'classnames';
import type { FC } from 'react';
import { GridArea } from '../atoms/GridArea';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    backgroundColor: theme.palette.primary.main,
    borderRadius: 4,
    padding: theme.spacing(2),
    gridTemplateAreas: `
      "overall overall"
      "melody chords"
      "structure familiarity"
    `,
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '120px 120px 120px',
    gap: 14,
  },
  paper: {
    padding: theme.spacing(1),
    backgroundColor: 'rgba(181, 158, 220, 0.38)',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: 120,
    gap: theme.spacing(1),
  },
  title: {
    lineHeight: '16px',
  },
  value: {
    fontWeight: 'bold',
    fontSize: 50,
    lineHeight: '55px',
  },
  progress: {
    backgroundColor: 'rgba(255, 255, 255, 0.68)',
    borderRadius: 6,
  },
  progressBar: {
    borderRadius: 6,
  },
  melody: {
    backgroundColor: '#f4516c',
  },
  chords: {
    backgroundColor: '#4db6ac',
  },
  structure: {
    backgroundColor: '#4fc3f7',
  },
  familiarity: {
    backgroundColor: '#ffb74d',
  },
}));

export const ProjectStats: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <GridArea name="overall" className={classes.paper}>
        <Typography className={classes.title} variant="body1">Overall</Typography>
        <Typography variant="h5" className={classes.value}>
          81
        </Typography>
      </GridArea>
      <GridArea name="melody" className={classes.paper}>
        <Typography className={classes.title} variant="body1">Melody</Typography>
        <Typography variant="h5" className={classes.value}>
          72
        </Typography>
        <Box width="90%">
          <LinearProgress
            classes={{
              root: classes.progress,
              bar: classNames(classes.progressBar, classes.melody),
            }}
            value={72}
            variant="determinate"
          />
        </Box>
      </GridArea>
      <GridArea name="chords" className={classes.paper}>
        <Typography className={classes.title} variant="body1">Chords</Typography>
        <Typography variant="h5" className={classes.value}>
          81
        </Typography>
        <Box width="90%">
          <LinearProgress
            classes={{
              root: classes.progress,
              bar: classNames(classes.progressBar, classes.chords),
            }}
            value={81}
            variant="determinate"
          />
        </Box>
      </GridArea>
      <GridArea name="structure" className={classes.paper}>
        <Typography className={classes.title} variant="body1">Structure</Typography>
        <Typography variant="h5" className={classes.value}>
          78
        </Typography>
        <Box width="90%">
          <LinearProgress
            classes={{
              root: classes.progress,
              bar: classNames(classes.progressBar, classes.structure),
            }}
            value={78}
            variant="determinate"
          />
        </Box>
      </GridArea>
      <GridArea name="familiarity" className={classes.paper}>
        <Typography className={classes.title} variant="body1">Familiarity</Typography>
        <Typography variant="h5" className={classes.value}>
          72
        </Typography>
        <Box width="90%">
          <LinearProgress
            classes={{
              root: classes.progress,
              bar: classNames(classes.progressBar, classes.familiarity),
            }}
            value={81}
            variant="determinate"
          />
        </Box>
      </GridArea>
    </Box>
  );
};
