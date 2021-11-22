import { Box, makeStyles, Typography, LinearProgress } from '@material-ui/core';
import classNames from 'classnames';
import type { FC } from 'react';
import { useSongAnalyze } from '../../hooks/useSongAnalyze';
import { GridArea } from '../atoms/GridArea';

interface Props {
  items: Array<{
    score: number;
    title: string;
  }>;
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    backgroundColor: theme.palette.primary.main,
    borderRadius: 4,
    padding: theme.spacing(2),
    gridTemplateAreas: `
      "overall overall"
      "item1 item2"
      "item3 item4"
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
    textTransform: 'capitalize',
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
  item1: {
    backgroundColor: '#f4516c',
  },
  item2: {
    backgroundColor: '#4db6ac',
  },
  item3: {
    backgroundColor: '#4fc3f7',
  },
  item4: {
    backgroundColor: '#ffb74d',
  },
}));

export const ProjectStats: FC<Props> = ({ items }) => {
  const { score } = useSongAnalyze();
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <GridArea name="overall" className={classes.paper}>
        <Typography className={classes.title} variant="body1">
          Overall
        </Typography>
        <Typography variant="h5" className={classes.value}>
          {score.overall}
        </Typography>
      </GridArea>
      {items.map((item, index) => (
        <GridArea key={item.title} name={`item${index + 1}`} className={classes.paper}>
          <Typography className={classes.title} variant="body1">
            {item.title}
          </Typography>
          <Typography variant="h5" className={classes.value}>
            {item.score}
          </Typography>
          <Box width="90%">
            <LinearProgress
              classes={{
                root: classes.progress,
                bar: classNames(classes.progressBar, (classes as any)[`item${index + 1}`]),
              }}
              value={item.score}
              variant="determinate"
            />
          </Box>
        </GridArea>
      ))}
    </Box>
  );
};
