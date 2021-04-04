import { useDispatch } from 'react-redux';

const useLoading = () => {
  const dispatch = useDispatch();

  const startLoading = () => {
    dispatch({ type: 'setIsLoading', payload: true });
  };

  const stopLoading = () => {
    dispatch({ type: 'setIsLoading', payload: false });
  };

  return {
    startLoading,
    stopLoading,
  };
};

export default useLoading;