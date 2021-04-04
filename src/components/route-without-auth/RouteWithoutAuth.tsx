import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { routes } from 'routes';
import { useAuth } from 'hooks';
import { types } from './duck';

const RouteWithoutAuth: React.FC<types.RouteWithoutAuth> = ({ path, exact, component }) => {
  const { isLogged } = useAuth();

  if (isLogged) {
    return <Redirect to={routes.home} />;
  }

  return (
    <Route path={path} exact={exact} component={component} />
  );
};

export default RouteWithoutAuth;