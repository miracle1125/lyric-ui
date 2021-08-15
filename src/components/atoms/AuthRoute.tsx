import type { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { Routes } from '../../config/Routes';
import { useAppSelector } from '../../hooks/useAppSelector';

export const AuthRoute: FC<RouteProps> = (props) => {
  const isAuthorized = useAppSelector((state) => Boolean(state.auth.token));

  if (isAuthorized) {
    return <Redirect to={Routes.Profile} />;
  }

  return <Route {...props} />;
};
