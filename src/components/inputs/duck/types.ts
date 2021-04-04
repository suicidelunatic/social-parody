export type BaseInputProps = {
  name: string;
  id?: string;
  placeholder?: string;
  label?: string;
  type?: string;
  width?: string | number;
};

export type TextInput = BaseInputProps & {}