import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { routes } from 'routes';
import AddPost from './add';
import { PageLayout } from 'components';

const Posts = () => {
  return (
    <PageLayout>
      <Switch>
        <Route exact path={routes.addPost} component={AddPost} />
        <Redirect to={routes.home} />
      </Switch>
    </PageLayout>
  );
};

export default Posts;