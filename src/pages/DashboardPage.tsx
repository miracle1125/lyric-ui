import { Box, Grid } from '@material-ui/core';
import type { FC } from 'react';
import { InnerLayout } from '../components/molecules/InnerLayout';
import { ProjectEarnings } from '../components/molecules/ProjectEarnings';
import { ProjectListeners } from '../components/molecules/ProjectListeners';
import { ProjectStats } from '../components/molecules/ProjectStats';

export const DashboardPage: FC = () => {
  return (
    <InnerLayout>
      <Grid container>
        <Grid item sm={8}>
          <Box display="flex" height={150} style={{ gap: 25 }}>
            <Box flex={1} height="100%">
              <ProjectEarnings />
            </Box>
            <Box flex={1} height="100%">
              <ProjectListeners />
            </Box>
          </Box>
        </Grid>
        <Grid item sm={4}>
          <ProjectStats />
        </Grid>
      </Grid>
    </InnerLayout>
  );
};
