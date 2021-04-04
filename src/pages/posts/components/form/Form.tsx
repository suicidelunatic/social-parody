import React from 'react';
import { Form as AppForm, Inputs, Buttons } from 'components';
import { Grid, Typography, Box } from '@material-ui/core';
import { useAuth } from 'hooks';
import { usePosts } from '../../hooks';

const Form = () => {
  const { getValidationSchema, addPost } = usePosts();
  const { user } = useAuth();

  return (
    <AppForm
      onSubmit={(data) => addPost(data)}
      validationSchema={getValidationSchema()}
    >
      <Typography variant="h3" align="center">New post</Typography>

      <Box mt={3}>
        <Grid container justify="center">
          <Grid item xs={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Inputs.TextInput name="title" label="Title" />
              </Grid>
              <Grid item xs={12}>
                <Inputs.TextInput name="author" label="Author" />
              </Grid>
              <Grid item xs={12}>
                <Grid container justify="center">
                  <Buttons.SubmitButton />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </AppForm>
  );
};

export default Form;