import React from 'react';
import { Form, Inputs, Buttons } from 'components';
import { Grid, Typography, Box } from '@material-ui/core';
import * as yup from 'yup';
import { useAuth } from 'hooks';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{ flexGrow: 1 }}
    >
      <Grid item md={4}>
        <Box mb={2}>
          <Typography variant="h3">Sign In</Typography>
        </Box>
      </Grid>
      <Grid item md={3}>
        <Form
          onSubmit={({ username, password }) => signIn(username, password)}
          validationSchema={{ username: yup.string().email().required(), password: yup.string().required() }}
        >
          <Grid container spacing={3}>
            <Grid item md={12}>
              <Inputs.TextInput name="username" label="Username" />
            </Grid>
            <Grid item md={12}>
              <Inputs.PasswordInput name="password" label="Password" />
            </Grid>
            <Grid item md={12}>
              <Grid container justify="center">
                <Buttons.SubmitButton />
              </Grid>
            </Grid>
          </Grid>
        </Form>
      </Grid>
    </Grid>
  );
};

export default SignIn;