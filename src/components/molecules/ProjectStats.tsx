import { Box, makeStyles, Typography } from '@material-ui/core';
import type { FC } from 'react';
import { useAnimatedNumericValue } from '../../hooks/useAnimatedNumericValue';
import { useSongAnalyze } from '../../hooks/useSongAnalyze';
import { GridArea } from '../atoms/GridArea';
import { SectionOverlay } from '../atoms/SectionOverlay';
import { ProjectStatsItem } from './ProjectStatsItem';

interface Props {
  loading: boolean;
  items: Array<{
    score: number;
    title: string;
  }>;
}

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
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
}));

export const ProjectStats: FC<Props> = ({ loading, items }) => {
  const { score } = useSongAnalyze();
  const overall = useAnimatedNumericValue(loading ? 0 : score.overall, 20);
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <SectionOverlay open={items.length === 0} />
      <GridArea name="overall" className={classes.paper}>
        <Typography className={classes.title} variant="body1">
          Overall
        </Typography>
        <Typography variant="h5" className={classes.value}>
          {overall}
        </Typography>
      </GridArea>
      {items.map((item, index) => (
        <ProjectStatsItem score={item.score} title={item.title} key={item.title} name={`item${index + 1}`} />
      ))}
    </Box>
  );
};
