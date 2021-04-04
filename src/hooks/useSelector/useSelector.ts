import { TypedUseSelectorHook, useSelector } from 'react-redux';

type RootState = {
  auth: any,
  loader: {
    isLoading: boolean
  }
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;