import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#227aeb',
    color: 'white',
    '&:hover': {
      backgroundColor: '#1967CA',
    },
    borderRadius: '60px',
    boxShadow: 'none',
    'text-transform': 'capitalize'
  },
}));

export default props => {
  const classList = useStyles();
  return (
    <Button
      {...props}
      className={`${classList.root} ${props.className}`}
    >
      {props.children}
    </Button>
  );
};
