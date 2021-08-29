import { Box, Grid, makeStyles } from '@material-ui/core';
import type { FC } from 'react';
import { GridArea } from '../components/atoms/GridArea';
import { InnerLayout } from '../components/molecules/InnerLayout';
import { ProjectEarnings } from '../components/molecules/ProjectEarnings';
import { ProjectListeners } from '../components/molecules/ProjectListeners';
import { ProjectStats } from '../components/molecules/ProjectStats';
import { SimilarSongs } from '../components/molecules/SimilarSongs';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateAreas: `
      "earnings listeners stats"
      "main main stats"
      "main main similar"
    `,
    gridTemplateColumns: '1fr 1fr 350px',
    gap: 16,
    paddingBottom: theme.spacing(3),
  },
}));

export const DashboardPage: FC = () => {
  const classes = useStyles();

  return (
    <InnerLayout>
      <Box className={classes.container}>
        <GridArea name="earnings">
          <ProjectEarnings />
        </GridArea>
        <GridArea name="listeners">
          <ProjectListeners />
        </GridArea>
        <GridArea name="main">
          <Box style={{ backgroundColor: 'red' }}>Main</Box>
        </GridArea>
        <GridArea name="stats">
          <ProjectStats />
        </GridArea>
        <GridArea name="similar">
          <SimilarSongs />
        </GridArea>
      </Box>
    </InnerLayout>
  );
};
