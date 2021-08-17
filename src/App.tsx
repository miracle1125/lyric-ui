import { CssBaseline } from '@material-ui/core';
import type { FC } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { AuthRoute } from './components/atoms/AuthRoute';
import { Theme } from './components/organisms/Theme';
import { PrivateRoute } from './components/PrivateRoute';
import { Routes } from './config/Routes';
import { LoginPage } from './pages/LoginPage';
import { ProfilePage } from './pages/ProfilePage';
import { RegisterPage } from './pages/RegisterPage';
import { persistor, store } from './redux';

export const App: FC = () => {
  return (
    <Theme>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CssBaseline />
          <Content />
        </PersistGate>
      </ReduxProvider>
    </Theme>
  );
};

const Content: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute exact component={LoginPage} path={Routes.Login} />
        <AuthRoute exact component={RegisterPage} path={Routes.Register} />
        <PrivateRoute exact component={ProfilePage} path={Routes.Profile} />

        <Redirect to={Routes.Login} />
      </Switch>
    </BrowserRouter>
  );
};
