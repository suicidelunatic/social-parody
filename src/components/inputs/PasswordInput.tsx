import React from 'react';
import TextInput from './TextInput';
import { types } from './duck';

const PasswordInput: React.FC<types.TextInput> = (props) => {
  return (
    <TextInput {...props} type="password" />
  );
};

export default PasswordInput;