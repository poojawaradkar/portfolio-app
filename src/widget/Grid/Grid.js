import React from 'react';
import Grid from '@mui/material/Grid';

export default props => (
  <Grid
    {...props}
  >
    {props.children}
  </Grid>
);
