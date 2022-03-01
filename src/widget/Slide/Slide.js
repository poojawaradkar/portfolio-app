import React from 'react';
import Slide from '@mui/material/Slide';

export default React.forwardRef((props, ref) => (
  <Slide
    ref={ref}
    {...props}
  >
    {props.children}
  </Slide>
));
