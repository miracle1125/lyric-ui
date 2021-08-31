import { Container, Grid } from '@material-ui/core';
import type { FC } from 'react';
import { useState } from 'react';
import { InnerLayout } from '../components/molecules/InnerLayout';
import { UploadForm } from '../components/organisms/UploadForm';
import { SongAnalyze } from '../model/SongAnalyze';
import { DashboardPage } from './DashboardPage';

export const UploadPage: FC = () => {
  const [analyze, setAnalyze] = useState<SongAnalyze>();

  if (analyze) {
    return <DashboardPage analyze={analyze} />;
  }

  return (
    <InnerLayout>
      <Container maxWidth="md">
        <Grid container>
          <Grid item sm={12}>
            <UploadForm onSuccess={setAnalyze} />
          </Grid>
        </Grid>
      </Container>
    </InnerLayout>
  );
};
