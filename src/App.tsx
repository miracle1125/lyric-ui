import { CssBaseline } from '@material-ui/core';
import type { FC } from 'react';
import { Theme } from './components/organisms/Theme';
import { LoginPage } from './pages/LoginPage';

export const App: FC = () => {
  return (
    <Theme>
      <CssBaseline />
      <LoginPage />
    </Theme>
  );
};
