import React from 'react';
import Fade from '@mui/material/Fade';

export default React.forwardRef((props, ref) => (
  <Fade
    ref={ref}
    {...props}
  >
    {props.children}
  </Fade>
));
