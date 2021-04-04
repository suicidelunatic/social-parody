import React from 'react';
import { CircularProgress, Backdrop } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { types } from './duck';

const GlobalLoader: React.FC<types.GlobalLoader> = ({ overlay = true }) => {
  const styles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));

  if (overlay) {
    return (
      <Backdrop open className={styles().backdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return <CircularProgress
    style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
  />;
};

export default GlobalLoader;
