import { Box, makeStyles, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import type { FC } from 'react';
import { useQuery } from 'react-query';
import { RouteComponentProps } from 'react-router-dom';
import { CatalogApi } from '../api/Catalog.api';
import { FullscreenOverlay } from '../components/atoms/FullscreenOverlay';
import { GridArea } from '../components/atoms/GridArea';
import { DashboardMain } from '../components/molecules/DashboardMain';
import { InnerLayout } from '../components/molecules/InnerLayout';
import { ProjectedEarnings } from '../components/molecules/ProjectedEarnings';
import { ProjectedListeners } from '../components/molecules/ProjectedListeners';
import { ProjectStats } from '../components/molecules/ProjectStats';
import { SimilarSongs } from '../components/molecules/SimilarSongs';
import { SongAnalyzeContext } from '../components/molecules/SongAnalyzeContext';

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

export const DashboardPage: FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const songId = Number(match.params.id);
  const { isLoading, error, data } = useQuery(['songAnalyze', songId], () => CatalogApi.fetch(songId));
  const classes = useStyles();

  return (
    <InnerLayout>
      <FullscreenOverlay open={isLoading} />

      {!!error && (
        <Box marginBottom={2}>
          <Alert severity="error" variant="filled">
            {String(error)}
          </Alert>
        </Box>
      )}

      {!!data && (
        <SongAnalyzeContext.Provider value={data}>
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
        </SongAnalyzeContext.Provider>
      )}
    </InnerLayout>
  );
};
