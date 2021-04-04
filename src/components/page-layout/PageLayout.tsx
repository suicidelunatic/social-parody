import React from 'react';
import { Header } from './components';
import { Container, Box } from '@material-ui/core';

const PageLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        <Box mt={6}>
          {children}
        </Box>
      </Container>
    </>
  );
};

export default PageLayout;