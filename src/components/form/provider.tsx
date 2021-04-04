import React from 'react';
import { types } from './duck';

const FormContext = React.createContext({});

export const useFormContext: types.useFormContext = () => React.useContext(FormContext);

export const FormContextProvider: React.FC<{ value: any }> = ({ value, children }) => <FormContext.Provider
  value={value}>{children}</FormContext.Provider>;