import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import { Button } from '@material-ui/core';

const SignIn: React.FC = () => {
  return (
    <div>
      <Button
        aria-label="sign in"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
        component={Link}
        to={routes.signIn}
      >
        Sign In
      </Button>
    </div>
  );
};

export default SignIn;