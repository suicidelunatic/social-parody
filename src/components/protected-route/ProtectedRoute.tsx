import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from 'hooks';
import { routes } from 'routes';
import { types } from './duck';

const ProtectedRoute: React.FC<types.ProtectedRoute> = ({ exact = false, path, component }) => {
  const { isLogged } = useAuth();

  if (!isLogged) {
    return <Redirect to={routes.signIn} />;
  }

  return (
    <Route exact={exact} path={path} component={component} />
  );
};

export default ProtectedRoute;