import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default props => (
  <CircularProgress
    {...props}
  >
    {props.children}
  </CircularProgress>
);
