import React from 'react';
import { TextField } from '@material-ui/core';
import { useFormContext } from 'hooks';
import { Controller } from 'react-hook-form';
import { types } from './duck';

const TextInput: React.FC<types.TextInput> = ({ label, id, name, width = '100%', ...rest }) => {
  const { control, getInputErrorMessage } = useFormContext();

  const errorMessage = getInputErrorMessage(name);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          {...rest}
          label={label}
          id={id}
          style={{ width }}
          error={!!errorMessage}
          helperText={errorMessage}
        />
      )}
    />
  );
};

export default TextInput;