import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Router } from 'routes';
import { GlobalLoader } from 'components';
import { useAppSelector, useAuth } from 'hooks';
import { firebaseApp } from 'firebaseApp';
import './App.scss';

const App: React.FC = () => {
  const isLoading = useAppSelector((state) => state.loader.isLoading);
  const { setUser, isInitialized } = useAuth();

  useEffect(() => {
    // @ts-ignore
    firebaseApp.auth().onAuthStateChanged(setUser);
  }, []);

  if (!isInitialized) {
    return <GlobalLoader overlay={false} />;
  }

  return (
    <CssBaseline>
      {isLoading && <GlobalLoader />}
      <Router />
    </CssBaseline>
  );
};

export default App;