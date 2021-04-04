import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { types } from './duck';
import { FormContextProvider } from './provider';

const Form: React.FC<types.Form> = ({ onSubmit, children, validationSchema = {} }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(yup.object().shape(validationSchema)) });

  return (
    <FormContextProvider
      value={{ control, errors, isValid, getInputErrorMessage: (name: string): void => errors?.[name]?.message }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormContextProvider>
  );
};

export default Form;