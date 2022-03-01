import React from 'react';
import Typography from '@mui/material/Typography';

export default props => (
  <Typography
    {...props}
  >
    {props.children}
  </Typography>
);
