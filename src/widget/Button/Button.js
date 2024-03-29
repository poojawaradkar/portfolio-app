import React from 'react';
import Button from '@mui/material/Button';

export default props => (
  <Button
    {...props}
  >
    {props.children}
  </Button>
);
