import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RouteWithoutAuth } from 'components';
import { routes } from 'routes';
import { SignIn, Home, Posts } from 'pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <RouteWithoutAuth exact path={routes.signIn} component={SignIn} />
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.posts} component={Posts} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
