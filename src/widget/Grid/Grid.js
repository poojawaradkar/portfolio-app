import React from 'react';
import Grid from '@mui/material/Grid';

export default React.forwardRef((props, ref) => (
  <Grid
    ref={ref}
    {...props}
  >
    {props.children}
  </Grid>
));
