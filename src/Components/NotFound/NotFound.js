import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import { Button } from 'widget';

import styles from './NotFound.module.scss';

const buttonStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    height: '50px',
    minWidth: '240px',
    [theme.breakpoints.down('sm')]: {
      height: '40px',
    }
  },
}));

const NotFound = props => {
  const {
    staticContext = {},
    imageSrc,
    heading,
    subHeading,
    buttonText,
    bottomAlign,
    href,
    variant,
    children = null,
    onClick
  } = props;

  staticContext.status = 404;
  const buttonClass = buttonStyles();

  const buttonProps = onClick ? { onClick } : { href };

  return (
    <div className={styles.root}>
      <img alt="404" src={imageSrc} className={styles.imgStyle} />
      <div className={styles.heading}>{heading}</div>
      <div className={styles.subHeading}>{subHeading}</div>
      {children}
      {buttonText ? (
        <Button
          variant={variant}
          color="primary"
          className={`${buttonClass.root} ${bottomAlign ? styles.redirectBtn : ''}`}
          {...buttonProps}
        >
          {buttonText}
        </Button>
      ) : null}
    </div>
  );
};

NotFound.propTypes = {
  staticContext: PropTypes.objectOf(PropTypes.any),
  imageSrc: PropTypes.string,
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  buttonText: PropTypes.string,
  bottomAlign: PropTypes.bool,
  href: PropTypes.string,
  variant: PropTypes.string
};

NotFound.defaultProps = {
  staticContext: {},
  imageSrc: require('assets/images/404.svg'),
  heading: '404: Page Not Found',
  subHeading: 'Sorry, we can’t find the page! It might be an old link or maybe the page moved.',
  buttonText: 'Back to homepage',
  bottomAlign: true,
  href: '/',
  variant: 'contained'
};

export default NotFound;
