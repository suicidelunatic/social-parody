import React from 'react';
import { Button } from '@material-ui/core';

const SubmitButton: React.FC = () => {
  return (
    <Button type="submit" style={{width: "150px"}} color="primary" variant="contained">Submit</Button>
  );
};

export default SubmitButton;