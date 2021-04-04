import { FC } from 'react';

export type RouteWithoutAuth = {
  exact?: boolean,
  path: string;
  component: FC,
};