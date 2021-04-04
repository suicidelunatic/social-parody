import { Control } from 'react-hook-form';

export type Form = {
  onSubmit: (data: any) => Promise<any> | void;
  validationSchema?: any,
};

export type useFormContext = () => ({
  control: Control<any>
}) | any;