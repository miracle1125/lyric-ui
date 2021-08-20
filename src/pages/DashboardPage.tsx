import { Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import type { FC } from 'react';
import { InnerLayout } from '../components/molecules/InnerLayout';
import { Routes } from '../config/Routes';

export const DashboardPage: FC = () => {
  return (
    <InnerLayout>
      Dashboard page
      <div>
        <Link component={RouterLink} to={Routes.Upload}>
          Upload
        </Link>
      </div>
    </InnerLayout>
  );
};
