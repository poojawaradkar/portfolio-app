import React from 'react';

import NotFound from 'components/NotFound/NotFound';

import styles from './ErrorFallback.module.scss';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  const refreshPage = () => {
    resetErrorBoundary();
    window.location.reload();
  };

  return (
    <NotFound
      imageSrc={require('assets/images/notFound.svg')}
      heading={(
        <>
          <div>Oops! Something went wrong.</div>
          <div>Please try again.</div>
        </>
      )}
      bottomAlign={false}
      subHeading=""
      buttonText="Try Again"
      onClick={refreshPage}
    >
      <div className={styles.errorDetails}>{error.message}</div>
    </NotFound>
  );
};

export default ErrorFallback;
