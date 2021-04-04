import { FC } from 'react';

export type ProtectedRoute = {
  exact?: boolean,
  path: string;
  component: FC,
};