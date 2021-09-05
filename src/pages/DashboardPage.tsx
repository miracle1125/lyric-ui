import { Box, makeStyles } from '@material-ui/core';
import type { FC } from 'react';
import { Redirect } from 'react-router-dom';
import { GridArea } from '../components/atoms/GridArea';
import { DashboardMain } from '../components/molecules/DashboardMain';
import { InnerLayout } from '../components/molecules/InnerLayout';
import { ProjectedEarnings } from '../components/molecules/ProjectedEarnings';
import { ProjectedListeners } from '../components/molecules/ProjectedListeners';
import { ProjectStats } from '../components/molecules/ProjectStats';
import { SimilarSongs } from '../components/molecules/SimilarSongs';
import { SongAnalyzeContext } from '../components/molecules/SongAnalyzeContext';
import { Routes } from '../config/Routes';
import { useAppSelector } from '../hooks/useAppSelector';

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
  const { analyze } = useAppSelector((state) => state.analyze);
  const classes = useStyles();

  if (!analyze) {
    return <Redirect to={Routes.Upload} />;
  }

  return (
    <SongAnalyzeContext.Provider value={analyze}>
      <InnerLayout>
        <Box className={classes.container}>
          <GridArea name="earnings">
            <ProjectedEarnings />
          </GridArea>
          <GridArea name="listeners">
            <ProjectedListeners />
          </GridArea>
          <GridArea name="main">
            <DashboardMain />
          </GridArea>
          <GridArea name="stats">
            <ProjectStats />
          </GridArea>
          <GridArea name="similar">
            <SimilarSongs />
          </GridArea>
        </Box>
      </InnerLayout>
    </SongAnalyzeContext.Provider>
  );
};
