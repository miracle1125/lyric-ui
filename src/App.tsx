import { CssBaseline } from '@material-ui/core';
import type { FC } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Theme } from './components/organisms/Theme';
import { LoginPage } from './pages/LoginPage';
import { store } from './redux';

export const App: FC = () => {
  return (
    <Theme>
      <ReduxProvider store={store}>
        <CssBaseline />
        <LoginPage />
      </ReduxProvider>
    </Theme>
  );
};
